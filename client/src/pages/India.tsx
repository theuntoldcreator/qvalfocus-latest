import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { ClientLogos } from "@/components/sections/ClientLogos"
import { Services } from "@/components/sections/Services"
import { Industries } from "@/components/sections/Industries"
import { CaseStudies } from "@/components/sections/CaseStudies"
import { ROICalculators } from "@/components/calculators/ROICalculators"
import { Insights } from "@/components/sections/Insights"
import { About } from "@/components/sections/About"
import { Contact } from "@/components/sections/Contact"
import { Newsletter } from "@/components/sections/Newsletter"

export default function India() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <ClientLogos />
        <Services />
        <Industries />
        <CaseStudies />
        <ROICalculators />
        <Insights />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}