import { Link } from "wouter"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CASE_STUDIES } from "@/lib/constants"

export function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding bg-background">
      <div className="container">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Real transformation results from our enterprise clients across industries.
            </p>
          </div>
          <Link href="/case-studies">
            <Button className="hidden lg:block">
              View All Case Studies
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <Link key={study.id} href={`/case-studies/${study.slug}`}>
              <Card className="hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col cursor-pointer">
                <img 
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-3">
                    <Badge variant="secondary">
                      {study.industry}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">
                    {study.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-auto pt-4 border-t">
                    {study.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="text-2xl font-bold text-primary">{metric.value}</div>
                        <div className="text-sm text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 lg:hidden">
          <Link href="/case-studies">
            <Button size="lg">View All Case Studies</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}