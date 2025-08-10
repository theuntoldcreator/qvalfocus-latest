import { Link } from "wouter"
import { PageLayout } from "@/components/layout/PageLayout"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { INSIGHTS } from "@/lib/constants"
import NotFound from "@/pages/not-found"
import { ArrowLeft, Linkedin, Twitter, Facebook, Mail } from "lucide-react"

export default function InsightDetailPage({ params }: { params: { slug: string } }) {
  const insight = INSIGHTS.find(i => i.slug === params.slug)

  if (!insight) {
    return <NotFound />
  }

  return (
    <PageLayout>
      <div className="bg-muted/30">
        <div className="container py-12">
          <article className="max-w-4xl mx-auto">
            <header className="mb-12">
              <div className="flex justify-between items-center mb-8">
                <Link href="/insights">
                  <Button variant="ghost" className="text-muted-foreground hover:text-primary px-0">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Insights
                  </Button>
                </Link>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" aria-label="Share on LinkedIn"><Linkedin className="w-4 h-4" /></a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" aria-label="Share on Twitter"><Twitter className="w-4 h-4" /></a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" aria-label="Share on Facebook"><Facebook className="w-4 h-4" /></a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="#" aria-label="Share via Email"><Mail className="w-4 h-4" /></a>
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                <span className="font-semibold tracking-wider">{insight.category.toUpperCase()}</span>
                <span>•</span>
                <span>{insight.publishDate}</span>
              </div>

              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {insight.title}
              </h1>

              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {insight.author.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{insight.author.name}</p>
                  <p className="text-sm text-muted-foreground">{insight.author.role}</p>
                </div>
              </div>
            </header>
            
            <img 
              src={insight.image}
              alt={insight.title}
              className="w-full h-auto rounded-2xl my-8 shadow-lg"
            />

            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: insight.content }} 
            />
          </article>
        </div>
      </div>
    </PageLayout>
  )
}