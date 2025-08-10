import { PageLayout } from "@/components/layout/PageLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "wouter"
import { Shield, Trophy, Target, Lightbulb, Handshake, CheckCircle } from "lucide-react"

const coreValues = [
  { icon: Shield, title: "Integrity", description: "We operate with transparency and honesty in everything we do." },
  { icon: Trophy, title: "Excellence", description: "We strive for the highest standards in our services, solutions, and people." },
  { icon: Target, title: "Customer Focus", description: "Your goals are our priority—we’re driven by your success." },
  { icon: Lightbulb, title: "Innovation", description: "We embrace modern tools and thinking to solve today’s challenges." },
  { icon: Handshake, title: "Collaboration", description: "We believe in building strong, long-term relationships with clients and talent alike." },
]

const offerings = [
  "Flexible Engagement Models",
  "Industry Expertise",
  "Scalable Solutions",
  "Talent-First Approach",
  "Compliance & Quality Focus"
]

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Who We Are Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Who We Are
              </h1>
              <p className="text-lg text-muted-foreground">
                QvalFocus, Inc. is an emerging professional services provider delivering innovative, high-quality solutions across the Life Sciences and Information Technology sectors. Backed by modern technology, passionate experts, and a leadership team with over 50 years of combined industry experience, we specialize in connecting top-tier talent with forward-thinking organizations. We do the heavy lifting—so you can focus on delivering your projects on time with skilled and reliable resources.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Team collaborating in a modern office" 
                className="rounded-2xl shadow-xl w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our actions and define our culture.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {coreValues.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">What We Offer</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {offerings.map((item) => (
              <div key={item} className="flex items-center gap-4">
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                <span className="text-lg text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <Card className="max-w-4xl mx-auto bg-muted">
            <CardHeader>
              <CardTitle>Flexible Engagement Models</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Contract, contract-to-hire, direct hire, executive search, FSP teams, and project-based outsourcing tailored to your needs.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  )
}