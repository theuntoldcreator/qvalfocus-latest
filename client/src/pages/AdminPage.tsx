import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthProvider";
import { useLocation } from "wouter";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { JobForm } from "@/components/admin/JobForm";
import { JobList } from "@/components/admin/JobList";
import { Job } from "@/types";

export default function AdminPage() {
  const { supabase } = useAuth();
  const [, setLocation] = useLocation();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [jobToEdit, setJobToEdit] = useState<Job | null>(null);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setLocation("/");
  };

  const handleAddNew = () => {
    setJobToEdit(null);
    setDialogOpen(true);
  };

  const handleEdit = (job: Job) => {
    setJobToEdit(job);
    setDialogOpen(true);
  };

  return (
    <PageLayout>
      <div className="container py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button variant="outline" onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>

        <div className="space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Manage Job Listings</h2>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={handleAddNew}>Add New Job</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{jobToEdit ? "Edit Job Listing" : "Add New Job Listing"}</DialogTitle>
                </DialogHeader>
                <JobForm jobToEdit={jobToETDIT} onSuccess={() => setDialogOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>
          <JobList onEdit={handleEdit} />
        </div>
      </div>
    </PageLayout>
  );
}