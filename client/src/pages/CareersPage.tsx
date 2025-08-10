import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { PageLoader } from "@/components/common/PageLoader";

const fetchJobs = async () => {
  const { data, error } = await supabase.from("jobs").select("*").order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return data;
};

export default function CareersPage() {
  const { data: jobOpenings, isLoading, error } = useQuery({
    queryKey: ["jobs"],
    queryFn: fetchJobs,
  });

  return (
    <PageLayout>
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore opportunities to grow your career at QvalFocus. We're looking for talented professionals who are passionate about technology and client success.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Current Openings</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading && <PageLoader />}
              {error && <div className="text-center text-destructive">Failed to load job openings.</div>}
              {jobOpenings && (
                <div className="space-y-6">
                  {jobOpenings.map((job) => (
                    <div key={job.id} className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border rounded-lg hover:bg-muted/50">
                      <div>
                        <h3 className="text-lg font-semibold text-primary">{job.title}</h3>
                        <div className="flex items-center text-sm text-muted-foreground space-x-4 mt-1">
                          <span>{job.department}</span>
                          <span>•</span>
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <Button className="mt-4 md:mt-0">Apply Now</Button>
                    </div>
                  ))}
                  {jobOpenings.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      There are currently no open positions. Please check back later.
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
}