import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Heart, Settings } from "lucide-react"
import { INDUSTRIES } from "@/lib/constants"

const industryIcons = {
  "financial-services": DollarSign,
  "healthcare": Heart,
  "manufacturing": Settings,
}

export function Industries() {
  return (
    <section id="industries" className="section-padding bg-muted">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Industry Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deep domain knowledge across critical industries, delivering tailored solutions that address 
            unique regulatory and operational requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((industry) => {
            const IconComponent = industryIcons[industry.id as keyof typeof industryIcons]
            
            return (
              <Card key={industry.id} className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    {IconComponent && <IconComponent className="w-6 h-6 text-primary" />}
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">{industry.title}</h3>
                  <p className="text-muted-foreground mb-4">{industry.description}</p>
                  
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    {industry.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                  
                  <Badge variant="outline" className="text-primary border-primary">
                    {industry.clientCount}
                  </Badge>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}