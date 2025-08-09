import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap } from "lucide-react"
import { COMPANY_INFO } from "@/lib/constants"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToCaseStudies = () => {
    const element = document.getElementById("case-studies")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative gradient-hero py-12 lg:py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Unwavering Commitment,{" "}
              <span className="text-gradient">Unparalleled Precision</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              As a premier professional services organization, we are defined by an unwavering commitment to excellence, offering unparalleled precision in every partnership.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">$50M+</div>
                <div className="text-sm text-muted-foreground">Client Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Client Retention</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToContact}>
                Contact Us
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToCaseStudies}>
                Explore Our Work
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional consulting team discussing strategy" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
            />
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-xl p-6 border">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">28%</div>
                  <div className="text-sm text-muted-foreground">Avg Cost Reduction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}