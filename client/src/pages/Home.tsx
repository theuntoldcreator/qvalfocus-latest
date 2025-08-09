import { useEffect } from "react"
import { useLocation } from "wouter"
import { PageLayout } from "@/components/layout/PageLayout"
import { Hero } from "@/components/sections/Hero"
import { ClientLogos } from "@/components/sections/ClientLogos"
import { Services } from "@/components/sections/Services"
import { Industries } from "@/components/sections/Industries"
import { CaseStudies } from "@/components/sections/CaseStudies"
import { Insights } from "@/components/sections/Insights"
import { About } from "@/components/sections/About"
import { Contact } from "@/components/sections/Contact"
import { Newsletter } from "@/components/sections/Newsletter"

export default function Home() {
  const [location] = useLocation()

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const id = hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 0)
    }
  }, [location])

  return (
    <PageLayout>
      <Hero />
      <About />
      <ClientLogos />
      <Services />
      <Industries />
      <CaseStudies />
      <Insights />
      <Contact />
      <Newsletter />
    </PageLayout>
  )
}