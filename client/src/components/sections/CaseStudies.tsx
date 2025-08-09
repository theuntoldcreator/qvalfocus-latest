import { Link } from "wouter"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CASE_STUDIES } from "@/lib/constants"

export function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real transformation results from our enterprise clients across industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <Card key={study.id} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <img 
                src={study.image}
                alt={study.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Badge variant="secondary">
                    {study.industry}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {study.title}
                </h3>
                <p className="text-muted-foreground mb-4">
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

        <div className="text-center mt-12">
          <Link href="/case-studies">
            <Button size="lg">View All Case Studies</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}