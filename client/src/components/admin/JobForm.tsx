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
  application_link: z.string().url("Must be a valid URL").optional().or(z.literal('')),
});

type JobFormData = z.infer<typeof jobSchema>;

const addJob = async (job: JobFormData) => {
  const { error } = await supabase.from("jobs").insert(job);
  if (error) throw new Error(error.message);
};

const updateJob = async (job: JobFormData & { id: string }) => {
  const { id, ...updateData } = job;
  const { error } = await supabase.from("jobs").update(updateData).eq("id", id);
  if (error) throw new Error(error.message);
};

export function JobForm({ jobToEdit, onSuccess }: { jobToEdit?: Job | null; onSuccess: () => void }) {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const isEditMode = !!jobToEdit;

  const form = useForm<JobFormData>({
    resolver: zodResolver(jobSchema),
    defaultValues: jobToEdit ? {
      ...jobToEdit,
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
    },
  });

  const mutation = useMutation({
    mutationFn: isEditMode ? updateJob : addJob,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      toast({ title: "Success", description: `Job listing ${isEditMode ? 'updated' : 'added'}.` });
      onSuccess();
    },
    onError: (err) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    },
  });

  const onSubmit = (data: JobFormData) => {
    const submissionData = { ...data, application_link: data.application_link || null };
    if (isEditMode && jobToEdit) {
      mutation.mutate({ ...submissionData, id: jobToEdit.id });
    } else {
      mutation.mutate(submissionData);
    }
  };

  const isPending = mutation.isPending;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
          <FormItem><FormLabel>Description</FormLabel><FormControl><Textarea placeholder="Provide a short description of the job..." {...field} /></FormControl><FormMessage /></FormItem>
        )} />
        <FormField name="application_link" control={form.control} render={({ field }) => (
          <FormItem><FormLabel>External Application Link</FormLabel><FormControl><Input placeholder="https://example.com/apply" {...field} /></FormControl><p className="text-sm text-muted-foreground mt-1">Leave blank to use the internal application form.</p><FormMessage /></FormItem>
        )} />
        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? "Saving..." : isEditMode ? "Update Job" : "Save Job"}
        </Button>
      </form>
    </Form>
  );
}