import { Link } from "wouter"
import { PageLayout } from "@/components/layout/PageLayout"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CASE_STUDIES } from "@/lib/constants"

export default function CaseStudiesPage() {
  return (
    <PageLayout>
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Client Success Stories
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore how we've partnered with enterprise clients to drive real transformation and deliver measurable results across industries.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study) => (
              <Card key={study.id} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
                <img 
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center mb-4">
                    <Badge variant="secondary">
                      {study.industry}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {study.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="text-2xl font-bold text-primary">{metric.value}</div>
                        <div className="text-sm text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <Link href={`/case-studies/${study.slug}`}>
                    <Button variant="ghost" className="text-primary hover:underline p-0">
                      Read Full Case Study →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}