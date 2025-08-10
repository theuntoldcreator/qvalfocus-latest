import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Job } from "@/types";
import { PageLayout } from "@/components/layout/PageLayout";
import { PageLoader } from "@/components/common/PageLoader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ApplicationForm } from "@/components/careers/ApplicationForm";

const fetchJobs = async (): Promise<Job[]> => {
  const { data, error } = await supabase.from("jobs").select("*").order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return data;
};

export default function CareersPage() {
  const { data: jobs, isLoading, error } = useQuery<Job[]>({ queryKey: ["jobs"], queryFn: fetchJobs });
  const [activeDepartment, setActiveDepartment] = useState("All");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const departments = ["All", ...Array.from(new Set(jobs?.map(job => job.department).filter(Boolean) as string[]))];

  const filteredJobs = jobs?.filter(job => 
    activeDepartment === "All" || job.department === activeDepartment
  );

  const handleViewDetails = (job: Job) => {
    if (job.application_link) {
      window.open(job.application_link, "_blank", "noopener,noreferrer");
    } else {
      setSelectedJob(job);
    }
  };

  return (
    <PageLayout>
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Join Our Team</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore opportunities to grow your career at QvalFocus. We're looking for talented professionals who are passionate about technology and client success.
            </p>
          </div>

          <div className="flex justify-center flex-wrap gap-2 mb-12">
            {departments.map(dept => (
              <Button
                key={dept}
                variant={activeDepartment === dept ? "default" : "outline"}
                onClick={() => setActiveDepartment(dept)}
              >
                {dept}
              </Button>
            ))}
          </div>

          {isLoading && <PageLoader />}
          {error && <div className="text-center text-destructive">Failed to load job openings. Please try again later.</div>}
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs?.map(job => (
              <Card key={job.id} className="flex flex-col">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground">{job.title}</h3>
                  <div className="text-sm text-muted-foreground mt-1 space-x-2">
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.employment_type}</span>
                  </div>
                  <p className="text-muted-foreground my-4 flex-grow line-clamp-3">{job.description}</p>
                  <Button onClick={() => handleViewDetails(job)} className="mt-auto w-full">
                    {job.application_link ? "Apply Externally" : "View Details"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredJobs?.length === 0 && !isLoading && (
            <div className="text-center py-12 text-muted-foreground">
              There are no open positions in this department. Please check back later or select another category.
            </div>
          )}
        </div>
      </section>

      <Dialog open={!!selectedJob} onOpenChange={(isOpen) => !isOpen && setSelectedJob(null)}>
        <DialogContent className="sm:max-w-lg">
          {selectedJob && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedJob.title}</DialogTitle>
                <DialogDescription>
                  <div className="text-sm text-muted-foreground mt-1 space-x-2">
                    <span>{selectedJob.location}</span>
                    <span>•</span>
                    <span>{selectedJob.employment_type}</span>
                  </div>
                  <p className="mt-2">{selectedJob.description}</p>
                </DialogDescription>
              </DialogHeader>
              <div className="px-6 pb-6">
                <ApplicationForm job={selectedJob} onSuccess={() => setTimeout(() => setSelectedJob(null), 3000)} />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </PageLayout>
  );
}