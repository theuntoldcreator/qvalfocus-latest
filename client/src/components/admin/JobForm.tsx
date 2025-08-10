import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Job } from "@/types";

const jobSchema = z.object({
  title: z.string().min(2, "Title is required"),
  department: z.string().min(2, "Department is required"),
  location: z.string().min(2, "Location is required"),
  employment_type: z.string().min(2, "Employment type is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  application_type: z.enum(["internal", "external"]),
  application_link: z.string().optional(),
}).superRefine((data, ctx) => {
  if (data.application_type === 'external') {
    const result = z.string().url().safeParse(data.application_link);
    if (!result.success) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['application_link'],
        message: 'A valid URL is required for external applications.',
      });
    }
  }
});

type JobFormData = z.infer<typeof jobSchema>;

const upsertJob = async (data: { jobData: JobFormData, id?: string }) => {
  const { jobData, id } = data;
  const submissionData = {
    ...jobData,
    application_link: jobData.application_type === 'external' ? jobData.application_link : null,
  };
  // We don't want to save application_type to the DB
  const { application_type, ...dbData } = submissionData;

  if (id) {
    const { error } = await supabase.from("jobs").update(dbData).eq("id", id);
    if (error) throw new Error(error.message);
  } else {
    const { error } = await supabase.from("jobs").insert(dbData);
    if (error) throw new Error(error.message);
  }
};

export function JobForm({ jobToEdit, onSuccess }: { jobToEdit?: Job | null; onSuccess: () => void }) {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const isEditMode = !!jobToEdit;

  const form = useForm<JobFormData>({
    resolver: zodResolver(jobSchema),
    defaultValues: jobToEdit ? {
      ...jobToEdit,
      application_type: jobToEdit.application_link ? 'external' : 'internal',
      application_link: jobToEdit.application_link || "",
      description: jobToEdit.description || "",
      employment_type: jobToEdit.employment_type || "",
    } : { 
      title: "", 
      department: "", 
      location: "", 
      application_link: "",
      description: "",
      employment_type: "",
      application_type: "internal",
    },
  });

  const applicationType = form.watch("application_type");

  const mutation = useMutation({
    mutationFn: upsertJob,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      queryClient.invalidateQueries({ queryKey: ["applications"] });
      toast({ title: "Success", description: `Job listing ${isEditMode ? 'updated' : 'added'}.` });
      onSuccess();
    },
    onError: (err) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    },
  });

  const onSubmit = (data: JobFormData) => {
    mutation.mutate({ jobData: data, id: jobToEdit?.id });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField name="title" control={form.control} render={({ field }) => (
            <FormItem><FormLabel>Job Title</FormLabel><FormControl><Input placeholder="e.g., Senior Cloud Engineer" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField name="department" control={form.control} render={({ field }) => (
            <FormItem><FormLabel>Department</FormLabel><FormControl><Input placeholder="e.g., Engineering" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField name="location" control={form.control} render={({ field }) => (
            <FormItem><FormLabel>Location</FormLabel><FormControl><Input placeholder="e.g., Remote, US" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField name="employment_type" control={form.control} render={({ field }) => (
            <FormItem><FormLabel>Employment Type</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select an employment type" /></SelectTrigger></FormControl><SelectContent><SelectItem value="Full-Time">Full-Time</SelectItem><SelectItem value="Contract">Contract</SelectItem><SelectItem value="Part-Time">Part-Time</SelectItem><SelectItem value="Internship">Internship</SelectItem></SelectContent></Select><FormMessage /></FormItem>
          )} />
          <FormField name="description" control={form.control} render={({ field }) => (
            <FormItem className="md:col-span-2"><FormLabel>Description</FormLabel><FormControl><Textarea placeholder="Provide a short description of the job..." rows={5} {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField name="application_type" control={form.control} render={({ field }) => (
            <FormItem><FormLabel>Application Type</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select an application type" /></SelectTrigger></FormControl><SelectContent><SelectItem value="internal">Internal (Resume Upload)</SelectItem><SelectItem value="external">External Link</SelectItem></SelectContent></Select><FormMessage /></FormItem>
          )} />
          {applicationType === 'external' && (
            <FormField name="application_link" control={form.control} render={({ field }) => (
              <FormItem><FormLabel>External Application Link</FormLabel><FormControl><Input placeholder="https://example.com/apply" {...field} /></FormControl><FormMessage /></FormItem>
            )} />
          )}
        </div>
        <Button type="submit" disabled={mutation.isPending} className="w-full">
          {mutation.isPending ? "Saving..." : isEditMode ? "Update Job" : "Save Job"}
        </Button>
      </form>
    </Form>
  );
}