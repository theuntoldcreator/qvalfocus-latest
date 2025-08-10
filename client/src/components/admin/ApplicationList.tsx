import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

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

export function ApplicationList() {
  const { toast } = useToast();
  const { data: applications, isLoading, error } = useQuery({
    queryKey: ["applications"],
    queryFn: fetchApplications,
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
              <TableHead className="text-right">Resume</TableHead>
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