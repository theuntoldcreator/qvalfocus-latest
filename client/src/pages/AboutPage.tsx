import { PageLayout } from "@/components/layout/PageLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Link } from "wouter"
import { Target, Gem, Users, Linkedin } from "lucide-react"

const leadershipTeam = [
  {
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    initials: "SJ",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    linkedin: "#"
  },
  {
    name: "Michael Rodriguez",
    role: "Chief Technology Officer",
    initials: "MR",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    linkedin: "#"
  },
  {
    name: "Amanda Chen",
    role: "Chief Strategy Officer",
    initials: "AC",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    linkedin: "#"
  },
]

const coreValues = [
  { title: "Excellence", description: "We pursue the highest standards in everything we do, delivering quality and precision." },
  { title: "Integrity", description: "We operate with unwavering honesty, transparency, and ethical principles." },
  { title: "Partnership", description: "We build lasting relationships based on trust, collaboration, and shared success." },
  { title: "Innovation", description: "We embrace curiosity and continuous learning to drive progress for our clients." },
]

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="section-padding bg-muted">
        <div className="container text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About QvalFocus
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driving enterprise transformation through technology, strategy, and an unwavering commitment to client success since 2017.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Target className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                Our mission is to empower organizations to navigate the complexities of the digital age. We deliver innovative, tailored solutions that drive efficiency, foster growth, and create lasting value. By combining deep industry expertise with cutting-edge technology, we serve as a trusted partner on our clients' transformation journeys.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Team collaborating on a project" 
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
            <Gem className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our actions and define our culture.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value) => (
              <Card key={value.title} className="text-center">
                <CardHeader>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Leadership</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet the experienced team guiding our strategy and success.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {leadershipTeam.map((leader) => (
              <Card key={leader.name} className="flex flex-col items-center text-center p-6">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={leader.image} alt={leader.name} />
                  <AvatarFallback>{leader.initials}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold text-foreground">{leader.name}</h3>
                <p className="text-primary mb-4">{leader.role}</p>
                <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Linkedin className="w-4 h-4" />
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