import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import { COMPANY_INFO } from "@/lib/constants"

export function About() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              About {COMPANY_INFO.name}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              For over 25 years, StrataTech has been at the forefront of enterprise technology transformation, 
              helping Fortune 500 companies navigate complex digital challenges and achieve measurable business outcomes.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Years of Excellence</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Global Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2000+</div>
                <div className="text-muted-foreground">Expert Consultants</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Countries Served</div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Check className="w-6 h-6 text-secondary mr-3 mt-1" />
                <div>
                  <strong className="text-foreground">Industry-Leading Expertise:</strong>
                  <span className="text-muted-foreground"> Deep domain knowledge across financial services, healthcare, manufacturing, and more.</span>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="w-6 h-6 text-secondary mr-3 mt-1" />
                <div>
                  <strong className="text-foreground">Proven Methodologies:</strong>
                  <span className="text-muted-foreground"> Battle-tested frameworks for digital transformation and technology modernization.</span>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="w-6 h-6 text-secondary mr-3 mt-1" />
                <div>
                  <strong className="text-foreground">Global Delivery Excellence:</strong>
                  <span className="text-muted-foreground"> 24/7 support with teams across Americas, EMEA, and Asia-Pacific.</span>
                </div>
              </div>
            </div>

            <Button size="lg">Learn More About Us</Button>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Diverse team of professional consultants collaborating" 
              className="rounded-2xl shadow-xl w-full h-auto" 
            />
            
            {/* Floating certifications badge */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl shadow-xl p-4 border">
              <div className="text-center">
                <div className="text-sm font-semibold text-foreground mb-1">Certified Partners</div>
                <div className="flex space-x-2 items-center">
                  <Badge variant="outline" className="text-xs">MS</Badge>
                  <Badge variant="outline" className="text-xs">AWS</Badge>
                  <Badge variant="outline" className="text-xs">GCP</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
