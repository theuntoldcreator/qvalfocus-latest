import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type Application = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  resume_path: string;
  created_at: string;
  jobs: { title: string } | null;
};

const fetchApplications = async (): Promise<Application[]> => {
  const { data, error } = await supabase
    .from("job_applications")
    .select("*, jobs(title)")
    .order("created_at", { ascending: false });
    
  if (error) throw new Error(error.message);
  return data as Application[];
};

const deleteApplication = async ({ id, resume_path }: { id: string; resume_path: string }) => {
  // First, delete the resume file from storage.
  const { error: storageError } = await supabase.storage.from("resumes").remove([resume_path]);
  // We can ignore "not found" errors, as the file might have already been cleaned up.
  if (storageError && storageError.message !== 'The resource was not found') {
    throw new Error(`Failed to delete resume file: ${storageError.message}`);
  }

  // Then, delete the application record from the database.
  const { error: dbError } = await supabase.from("job_applications").delete().eq("id", id);
  if (dbError) {
    throw new Error(`Failed to delete application record: ${dbError.message}`);
  }
};

export function ApplicationList() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { data: applications, isLoading, error } = useQuery({
    queryKey: ["applications"],
    queryFn: fetchApplications,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteApplication,
    onSuccess: () => {
      toast({ title: "Success", description: "Application deleted successfully." });
      queryClient.invalidateQueries({ queryKey: ["applications"] });
    },
    onError: (err: Error) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    },
  });

  const handleDownload = async (path: string) => {
    const { data, error } = await supabase.storage.from("resumes").createSignedUrl(path, 60); // 60 seconds validity
    if (error) {
      toast({ title: "Error", description: "Could not download resume.", variant: "destructive" });
      return;
    }
    window.open(data.signedUrl, "_blank");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Application Dropbox</CardTitle>
        <CardDescription>Applications submitted through the website.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Applicant</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Applied For</TableHead>
              <TableHead>Date Submitted</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading && <TableRow><TableCell colSpan={5} className="text-center">Loading applications...</TableCell></TableRow>}
            {error && <TableRow><TableCell colSpan={5} className="text-center text-destructive">Error: {error.message}</TableCell></TableRow>}
            {applications?.map((app) => (
              <TableRow key={app.id}>
                <TableCell className="font-medium">{app.first_name} {app.last_name}</TableCell>
                <TableCell>{app.email}</TableCell>
                <TableCell>{app.jobs?.title || "N/A"}</TableCell>
                <TableCell>{format(new Date(app.created_at), "MMM dd, yyyy")}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" onClick={() => handleDownload(app.resume_path)}>
                    <Download className="h-4 w-4" />
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive/90">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This will permanently delete the application from {app.first_name} {app.last_name} and their resume. This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                          onClick={() => deleteMutation.mutate({ id: app.id, resume_path: app.resume_path })}
                          disabled={deleteMutation.isPending}
                        >
                          {deleteMutation.isPending ? "Deleting..." : "Delete"}
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {applications?.length === 0 && !isLoading && (
          <div className="text-center py-8 text-muted-foreground">
            No applications received yet.
          </div>
        )}
      </CardContent>
    </Card>
  );
}