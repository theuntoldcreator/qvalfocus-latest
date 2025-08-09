import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Zap, Cloud, BarChart3, Shield, Package, Server, ClipboardCheck, Stamp } from "lucide-react"
import { SERVICES } from "@/lib/constants"

const serviceIcons = {
  "digital-transformation": Zap,
  "cloud-engineering": Cloud,
  "data-analytics": BarChart3,
  "cybersecurity": Shield,
  "product-engineering": Package,
  "managed-services": Server,
  "quality-assurance": ClipboardCheck,
  "validation": Stamp,
}

export function Services() {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Enterprise Consulting Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end technology transformation services designed to accelerate your digital journey 
            and deliver measurable business outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = serviceIcons[service.id as keyof typeof serviceIcons]
            
            return (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border hover:border-primary/50">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="w-4 h-4 text-secondary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Badge variant="outline" className="text-primary border-primary">
                    {service.metric} →
                  </Badge>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg">Explore All Services</Button>
        </div>
      </div>
    </section>
  )
}