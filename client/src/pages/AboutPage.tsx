import { PageLayout } from "@/components/layout/PageLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Link } from "wouter"
import { Shield, Trophy, Target, Lightbulb, Handshake, Linkedin, CheckCircle, Eye, Goal } from "lucide-react"

const leadershipTeam = [
  {
    name: "Vasantha Madasu",
    role: "Chief Executive Officer",
    initials: "VM",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    description: "With over 30 years of versatile experience, Vasantha brings a wealth of strategic leadership and industry knowledge to QvalFocus. Her vision and commitment to excellence continue to drive the company’s innovation and growth.",
    linkedin: "#"
  },
  {
    name: "Anil Nalluri",
    role: "Director of Quality & Client Success",
    initials: "AN",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    description: "Anil leads our client engagement and quality initiatives with a deep focus on customer satisfaction, operational excellence, and long-term partnerships. His extensive background in validation and client delivery makes him a vital part of our success.",
    linkedin: "#"
  },
  {
    name: "Brahmayya Pusuluri",
    role: "Director of IT & Technology",
    initials: "BP",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    description: "Brahma brings strong technical acumen and leadership in IT strategy, infrastructure, and development. He ensures that our technology-driven solutions align with evolving client needs and industry trends.",
    linkedin: "#"
  },
]

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

      {/* Vision & Mission Section */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardHeader className="flex-row items-center gap-4">
                <Eye className="w-8 h-8 text-primary" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To be the preferred strategic partner for organizations seeking excellence in talent, technology, and operational execution.</p>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader className="flex-row items-center gap-4">
                <Goal className="w-8 h-8 text-primary" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our mission is to empower our clients by delivering high-impact staffing and project-based solutions that drive success, efficiency, and growth. We are committed to bridging the gap between exceptional talent and innovative companies through integrity, agility, and unmatched service.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Leadership</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet the experienced team guiding our strategy and success.
            </p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((leader) => (
              <Card key={leader.name} className="flex flex-col p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="w-20 h-20 mr-4">
                    <AvatarImage src={leader.image} alt={leader.name} />
                    <AvatarFallback>{leader.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{leader.name}</h3>
                    <p className="text-primary">{leader.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 flex-grow">{leader.description}</p>
                <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="mt-auto">
                  <Button variant="outline" size="icon">
                    <Linkedin className="w-4 h-4" />
                    <span className="sr-only">LinkedIn Profile</span>
                  </Button>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help you achieve your business goals.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/#contact">
              <Button size="lg" variant="secondary">Contact Us</Button>
            </Link>
            <Link href="/careers">
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
                Explore Careers
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}