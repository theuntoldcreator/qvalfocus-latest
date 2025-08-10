import { PageLayout } from "@/components/layout/PageLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Construction } from "lucide-react"

export default function ProjectSolutionPage() {
  return (
    <PageLayout>
      <section className="section-padding bg-muted">
        <div className="container text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Project Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive project delivery and management services.
          </p>
        </div>
      </section>

      <section className="section-padding">
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