import { PageLayout } from "@/components/layout/PageLayout"
import { Badge } from "@/components/ui/badge"
import { CASE_STUDIES } from "@/lib/constants"
import NotFound from "@/pages/not-found"

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const study = CASE_STUDIES.find(s => s.slug === params.slug)

  if (!study) {
    return <NotFound />
  }

  return (
    <PageLayout>
      <div className="container py-12">
        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <Badge variant="secondary" className="mb-4">
              {study.industry}
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {study.title}
            </h1>
            <img 
              src={study.image}
              alt={study.title}
              className="w-full h-auto rounded-2xl my-8"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-y py-8">
              {study.metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="text-4xl font-bold text-primary">{metric.value}</div>
                  <div className="text-lg text-muted-foreground">{metric.label}</div>
                </div>
              ))}
            </div>
          </header>
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: study.content }} 
          />
        </article>
      </div>
    </PageLayout>
  )
}