import { PageLayout } from "@/components/layout/PageLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const timelineItems = [
  {
    title: "Commissioning, Qualification & Validation (CQV) Resources",
    description: "Ensure the successful initiation of your projects with QvalFocus Commissioning and Qualification Resources. Our qualified professionals oversee the commissioning and qualification processes, guaranteeing compliance and efficiency in your Life Sciences endeavors."
  },
  {
    title: "Quality Control Resources",
    description: "Exceed quality benchmarks with QvalFocus Quality Control Resources. Our experts manage and optimize your quality control processes, ensuring precision and compliance in every facet of your operations."
  },
  {
    title: "Cleaning Validation Resources",
    description: "Maintain the highest hygiene standards with QvalFocus Cleaning Validation Resources. Our experienced professionals oversee and validate your cleaning processes, ensuring a safe and compliant environment in the Life Sciences sector."
  },
  {
    title: "Quality Assurance Resources",
    description: "Elevate your quality standards with QvalFocus specialized Quality Assurance and Resources services. Our dedicated personnel are committed to maintaining the highest quality throughout your processes, ensuring strict compliance and excellence in the Life Sciences industry."
  },
  {
    title: "Computer System Validation Resources",
    description: "Stay at the forefront of the digital landscape with QvalFocus Computer System Validation Resources. Our skilled professionals validate and maintain your computer systems, ensuring they consistently meet industry standards and regulations."
  },
  {
    title: "Quality Engineers, Manufacturing Engineers, Process Engineers",
    description: "Secure top-tier talent for critical engineering roles with QvalFocus. Connect with Quality Engineers, Manufacturing Engineers, and Process Engineers who bring both expertise and innovation to your projects."
  }
]

const TimelineItem = ({ item, isLast }: { item: typeof timelineItems[0], isLast: boolean }) => (
  <div className="relative pl-8">
    <div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-primary" />
    {!isLast && <div className="absolute left-[7px] top-5 h-full w-px bg-border" />}
    <h4 className="font-bold text-lg text-foreground mb-2">{item.title}</h4>
    <p className="text-muted-foreground">{item.description}</p>
  </div>
)

export default function StaffingSolutionPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="section-padding bg-muted">
        <div className="container text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Staffing Solutions
          </h1>
          <p className="text-xl text-primary font-medium">
            Focused on quality, driven by expertise.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Card>
              <CardHeader>
                <CardTitle>Project Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our Project Delivery solutions offer comprehensive support across the entire project lifecycle. We source, onboard, and manage skilled professionals to execute key initiatives whether IT, Life Sciences, or cross-functional programs. From kickoff to completion, we ensure seamless execution, consistent quality, and measurable results that align with your delivery goals.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Talent Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  At QvalFocus, our Talent Partnership model goes beyond traditional staffing. We immerse ourselves in your business to understand your long-term goals, company culture, and evolving skill needs. Acting as an extension of your HR and hiring teams, we offer consultative support, data-driven hiring strategies, and a flexible engagement model delivering not just people, but business-aligned solutions that drive sustained success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Strategic Staffing Journey</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <TimelineItem 
                  key={item.title} 
                  item={item} 
                  isLast={index === timelineItems.length - 1} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}