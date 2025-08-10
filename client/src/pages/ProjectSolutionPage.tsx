import { PageLayout } from "@/components/layout/PageLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Construction } from "lucide-react"
import { PageTitle } from "@/components/common/PageTitle"

export default function ProjectSolutionPage() {
  return (
    <PageLayout>
      <PageTitle 
        title="Project Solutions"
        backLink={{ href: "/", text: "Back to Home" }}
      />

      <section className="pb-16 lg:pb-24">
        <div className="container">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="items-center">
              <Construction className="w-16 h-16 text-primary mb-4" />
              <CardTitle className="text-3xl">Coming Soon</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                We are currently developing this page to showcase our project solution offerings. Please check back later for more information.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  )
}