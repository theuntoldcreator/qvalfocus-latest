import { Link } from "wouter"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { INSIGHTS } from "@/lib/constants"

export function Insights() {
  return (
    <section id="insights" className="section-padding bg-background">
      <div className="container">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-muted-foreground">
              Expert perspectives on technology trends and transformation strategies.
            </p>
          </div>
          <Link href="/insights">
            <Button className="hidden lg:block">
              View All Insights
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
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
                        {insight.author.name}, {insight.author.role}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">{insight.publishDate}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 lg:hidden">
          <Link href="/insights">
            <Button size="lg">View All Insights</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}