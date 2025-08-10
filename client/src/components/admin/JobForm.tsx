import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Job } from "@/types";

const jobSchema = z.object({
  title: z.string().min(2, "Title is required"),
  department: z.string().min(2, "Department is required"),
  location: z.string().min(2, "Location is required"),
  application_link: z.string().url("Please enter a valid URL"),
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
    defaultValues: jobToEdit || { title: "", department: "", location: "", application_link: "" },
  });

  const addMutation = useMutation({
    mutationFn: addJob,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      toast({ title: "Success", description: "New job listing added." });
      onSuccess();
    },
    onError: (err) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateJob,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      toast({ title: "Success", description: "Job listing updated." });
      onSuccess();
    },
    onError: (err) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    },
  });

  const onSubmit = (data: JobFormData) => {
    if (isEditMode && jobToEdit) {
      updateMutation.mutate({ ...data, id: jobToEdit.id });
    } else {
      addMutation.mutate(data);
    }
  };

  const isPending = addMutation.isPending || updateMutation.isPending;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Title</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Senior Cloud Engineer" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="department"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Department</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Platform Engineering" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Plainsboro, NJ (Hybrid)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="application_link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Application Link</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com/apply/job-id" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending} className="w-full">
          {isPending ? "Saving..." : isEditMode ? "Update Job" : "Save Job"}
        </Button>
      </form>
    </Form>
  );
}