import { Link } from "wouter"
import { PageLayout } from "@/components/layout/PageLayout"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { INSIGHTS } from "@/lib/constants"

export default function InsightsPage() {
  return (
    <PageLayout>
      <section className="section-padding bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Insights & Perspectives
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our latest analysis on technology, strategy, and enterprise transformation from our team of global experts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INSIGHTS.map((insight) => (
              <Link key={insight.id} href={`/insights/${insight.slug}`}>
                <Card className="hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col cursor-pointer">
                  <img 
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center mb-3">
                      <Badge variant="secondary" className="mr-3">
                        {insight.category}
                      </Badge>
                      <span className="text-muted-foreground text-sm">{insight.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                      {insight.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">
                      {insight.description}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto pt-4 border-t">
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                            {insight.author.initials}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-muted-foreground">
                          {insight.author.name}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">{insight.publishDate}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}