import { useState } from "react"
import { Link } from "wouter"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { COMPANY_INFO, SERVICES } from "@/lib/constants"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm border-b sticky top-0 z-50">
      <nav className="container flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/images/qvalfocus.png" alt="QvalFocus Logo" className="h-8 w-auto dark:brightness-0 dark:invert" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-1">
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64">
              {SERVICES.map((service) => (
                <DropdownMenuItem key={service.id} onClick={() => scrollToSection("services")}>
                  {service.title}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" onClick={() => scrollToSection("industries")}>
            Industries
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("case-studies")}>
            Case Studies
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("insights")}>
            Insights
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("about")}>
            About
          </Button>
        </div>

        {/* CTA and Theme Toggle */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button onClick={() => scrollToSection("contact")} className="hidden sm:inline-flex">
            Book Strategy Call
          </Button>

          {/* Mobile menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                <Button variant="ghost" className="justify-start" onClick={() => scrollToSection("services")}>
                  Services
                </Button>
                <Button variant="ghost" className="justify-start" onClick={() => scrollToSection("industries")}>
                  Industries
                </Button>
                <Button variant="ghost" className="justify-start" onClick={() => scrollToSection("case-studies")}>
                  Case Studies
                </Button>
                <Button variant="ghost" className="justify-start" onClick={() => scrollToSection("insights")}>
                  Insights
                </Button>
                <Button variant="ghost" className="justify-start" onClick={() => scrollToSection("about")}>
                  About
                </Button>
                <Button onClick={() => scrollToSection("contact")} className="w-full">
                  Book Strategy Call
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}