import { PageLayout } from "@/components/layout/PageLayout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

const jobOpenings = [
  {
    id: "sr-cloud-engineer",
    title: "Senior Cloud Engineer (AWS/Azure)",
    location: "Plainsboro, NJ (Hybrid)",
    department: "Platform Engineering"
  },
  {
    id: "data-scientist",
    title: "Data Scientist, Life Sciences",
    location: "Remote",
    department: "Data, Analytics & AI"
  },
  {
    id: "it-project-manager",
    title: "IT Project Manager",
    location: "Hyderabad, India",
    department: "Professional Services"
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    location: "Plainsboro, NJ",
    department: "Cybersecurity & Risk"
  }
]

export default function CareersPage() {
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
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  )
}