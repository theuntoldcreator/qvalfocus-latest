import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Job } from "@/types";
import { CheckCircle } from "lucide-react";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

const applicationSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("A valid email is required"),
  phone: z.string().optional(),
  coverLetter: z.string().min(10, "Please tell us why you're a good fit."),
  resume: z.any()
    .refine((files) => files?.length === 1, "Resume is required.")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine((files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type), ".pdf, .doc, and .docx files are accepted."),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

const submitApplication = async ({ formValues, jobId }: { formValues: ApplicationFormData, jobId: string }) => {
  const file = formValues.resume[0];
  const filePath = `${jobId}/${crypto.randomUUID()}-${file.name}`;

  const { error: uploadError } = await supabase.storage.from("resumes").upload(filePath, file);
  if (uploadError) throw new Error(`Resume upload failed: ${uploadError.message}`);

  const { error: insertError } = await supabase.from("job_applications").insert({
    job_id: jobId,
    first_name: formValues.firstName,
    last_name: formValues.lastName,
    email: formValues.email,
    phone: formValues.phone,
    cover_letter: formValues.coverLetter,
    resume_path: filePath,
  });

  if (insertError) {
    await supabase.storage.from("resumes").remove([filePath]);
    throw new Error(`Application submission failed: ${insertError.message}`);
  }
};

export function ApplicationForm({ job, onSuccess }: { job: Job; onSuccess: () => void }) {
  const { toast } = useToast();
  const form = useForm<ApplicationFormData>({ resolver: zodResolver(applicationSchema) });

  const mutation = useMutation({
    mutationFn: submitApplication,
    onSuccess: () => {
      onSuccess();
    },
    onError: (err) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    },
  });

  if (mutation.isSuccess) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold">Application Submitted!</h3>
        <p className="text-muted-foreground mt-2">Thank you for your interest. We will review your application and be in touch if you're a good fit.</p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit((data) => mutation.mutate({ formValues: data, jobId: job.id }))} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FormField name="firstName" control={form.control} render={({ field }) => (<FormItem><FormControl><Input placeholder="First Name" {...field} /></FormControl><FormMessage /></FormItem>)} />
          <FormField name="lastName" control={form.control} render={({ field }) => (<FormItem><FormControl><Input placeholder="Last Name" {...field} /></FormControl><FormMessage /></FormItem>)} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField name="email" control={form.control} render={({ field }) => (<FormItem><FormControl><Input placeholder="Your Email" type="email" {...field} /></FormControl><FormMessage /></FormItem>)} />
          <FormField name="phone" control={form.control} render={({ field }) => (<FormItem><FormControl><Input placeholder="Your Phone" type="tel" {...field} /></FormControl><FormMessage /></FormItem>)} />
        </div>
        <FormField name="coverLetter" control={form.control} render={({ field }) => (<FormItem><FormControl><Textarea placeholder="Why are you a good fit?" {...field} /></FormControl><FormMessage /></FormItem>)} />
        <FormField name="resume" control={form.control} render={({ field: { onChange, ...fieldProps } }) => (
          <FormItem>
            <FormLabel>Resume</FormLabel>
            <FormControl>
              <Input type="file" {...fieldProps} onChange={(e) => onChange(e.target.files)} accept=".pdf,.doc,.docx" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )} />
        <Button type="submit" className="w-full" disabled={mutation.isPending}>
          {mutation.isPending ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </Form>
  );
}