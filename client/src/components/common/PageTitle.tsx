import { Link } from "wouter"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface PageTitleProps {
  title: string;
  backLink: {
    href: string;
    text: string;
  };
}

export function PageTitle({ title, backLink }: PageTitleProps) {
  return (
    <div className="container pt-12 pb-8">
      <div className="max-w-4xl mx-auto">
        <Link href={backLink.href}>
          <Button variant="ghost" className="text-muted-foreground hover:text-primary px-0 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {backLink.text}
          </Button>
        </Link>
        <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">
          {title}
        </h1>
      </div>
    </div>
  )
}