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
import { CheckCircle, UploadCloud, FileText, X } from "lucide-react";
import { useState, useEffect, type DragEvent } from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

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
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const mutation = useMutation({
    mutationFn: submitApplication,
    onSuccess: () => {
      setUploadProgress(100);
      setTimeout(() => {
        onSuccess();
      }, 500);
    },
    onError: (err) => {
      setUploadProgress(null);
      toast({ title: "Error", description: err.message, variant: "destructive" });
    },
  });

  useEffect(() => {
    if (mutation.isPending) {
      const timer = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev === null) return 0;
          if (prev >= 95) {
            clearInterval(timer);
            return prev;
          }
          return prev + 5;
        });
      }, 200);
      return () => clearInterval(timer);
    }
  }, [mutation.isPending]);

  const handleFileChange = (files: FileList | null) => {
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedFile(file);
      form.setValue("resume", files, { shouldValidate: true });
    }
  };

  const handleDragEnter = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    handleFileChange(files);
  };

  const isSubmitting = mutation.isPending;

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
        <fieldset disabled={isSubmitting} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <FormField name="firstName" control={form.control} render={({ field }) => (<FormItem><FormControl><Input placeholder="First Name" {...field} /></FormControl><FormMessage /></FormItem>)} />
            <FormField name="lastName" control={form.control} render={({ field }) => (<FormItem><FormControl><Input placeholder="Last Name" {...field} /></FormControl><FormMessage /></FormItem>)} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormField name="email" control={form.control} render={({ field }) => (<FormItem><FormControl><Input placeholder="Your Email" type="email" {...field} /></FormControl><FormMessage /></FormItem>)} />
            <FormField name="phone" control={form.control} render={({ field }) => (<FormItem><FormControl><Input placeholder="Your Phone" type="tel" {...field} /></FormControl><FormMessage /></FormItem>)} />
          </div>
          <FormField name="coverLetter" control={form.control} render={({ field }) => (<FormItem><FormControl><Textarea placeholder="Why are you a good fit?" {...field} /></FormControl><FormMessage /></FormItem>)} />
          
          <FormField
            control={form.control}
            name="resume"
            render={({ field: { onChange, ...fieldProps } }) => (
              <FormItem>
                <FormLabel>Resume</FormLabel>
                <FormControl>
                  <div>
                    <label
                      htmlFor="resume-upload"
                      className={cn(
                        "relative flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted hover:bg-muted/80 transition-colors",
                        isDragging && "border-primary bg-primary/10"
                      )}
                      onDragEnter={handleDragEnter}
                      onDragLeave={handleDragLeave}
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                    >
                      {selectedFile ? (
                        <div className="flex items-center space-x-2 text-foreground">
                          <FileText className="w-8 h-8" />
                          <div className="text-left">
                            <p className="font-semibold">{selectedFile.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {(selectedFile.size / 1024).toFixed(2)} KB
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <UploadCloud className="w-8 h-8 mb-2 text-muted-foreground" />
                          <p className="mb-2 text-sm text-muted-foreground">
                            <span className="font-semibold">Click or drag to upload</span>
                          </p>
                          <p className="text-xs text-muted-foreground">PDF, DOC, DOCX (MAX. 5MB)</p>
                        </div>
                      )}
                    </label>
                    <Input
                      id="resume-upload"
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                      {...fieldProps}
                      onChange={(e) => handleFileChange(e.target.files)}
                    />
                    {selectedFile && !isSubmitting && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="mt-2 text-destructive hover:text-destructive"
                        onClick={() => {
                          setSelectedFile(null);
                          form.setValue("resume", null, { shouldValidate: true });
                        }}
                      >
                        <X className="w-4 h-4 mr-2" />
                        Remove file
                      </Button>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </fieldset>

        {isSubmitting && uploadProgress !== null && (
          <div className="space-y-2 pt-2">
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-medium text-muted-foreground">
                Uploading resume...
              </p>
              <p className="text-sm font-semibold text-primary">
                {Math.round(uploadProgress)}%
              </p>
            </div>
            <Progress value={uploadProgress} className="w-full" />
          </div>
        )}

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </Form>
  );
}