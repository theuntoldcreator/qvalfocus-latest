import { useState } from "react"
import { Link, useLocation } from "wouter"
import { Menu, ChevronDown, Search, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { SERVICES } from "@/lib/constants"

const TopBarItems = ({
  onLinkClick,
  selectedCountry,
  onCountryChange,
}: {
  onLinkClick: (id: string) => void
  selectedCountry: string
  onCountryChange: (country: string) => void
}) => {
  return (
    <>
      <Button variant="link" className="text-muted-foreground hover:text-foreground p-0 h-auto" size="sm" onClick={() => onLinkClick("contact")}>
        Contact
      </Button>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="link" className="text-muted-foreground hover:text-foreground flex items-center gap-1 p-0 h-auto" size="sm">
            <Search className="w-4 h-4" />
            Search
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Search Site</DialogTitle>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <Input placeholder="e.g., Cloud Migration" />
            <Button type="submit">Search</Button>
          </div>
        </DialogContent>
      </Dialog>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <span>{selectedCountry}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onSelect={() => onCountryChange("USA")}>USA</DropdownMenuItem>
          <DropdownMenuItem onSelect={() => onCountryChange("India")}>India</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [location, setLocation] = useLocation()

  const selectedCountry = location === '/in' ? 'India' : 'USA'

  const handleCountryChange = (country: string) => {
    if (country === 'India') {
      setLocation('/in')
    } else {
      setLocation('/')
    }
    setMobileMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="border-b bg-background/80">
        <div className="container hidden h-12 items-center justify-end md:flex">
          <div className="flex items-center space-x-6 text-sm">
            <TopBarItems
              onLinkClick={scrollToSection}
              selectedCountry={selectedCountry}
              onCountryChange={handleCountryChange}
            />
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/images/qvalfocus.png" alt="QvalFocus Logo" className="h-9 w-auto dark:brightness-0 dark:invert" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
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
          <Button variant="ghost" onClick={() => { /* Placeholder */ }}>
            Partnerships
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("insights")}>
            Insights
          </Button>
          <Button variant="ghost" onClick={() => { /* Placeholder */ }}>
            Careers
          </Button>
          <Button variant="ghost" onClick={() => scrollToSection("about")}>
            About Us
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="flex items-center md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-0">
              <div className="flex h-full flex-col">
                <div className="border-b p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Location & Settings</span>
                    <ThemeToggle />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <TopBarItems
                      onLinkClick={scrollToSection}
                      selectedCountry={selectedCountry}
                      onCountryChange={handleCountryChange}
                    />
                  </div>
                </div>
                <div className="flex-1 p-4">
                  <div className="flex flex-col space-y-2">
                    <Button variant="ghost" className="justify-start" onClick={() => scrollToSection("services")}>
                      Services
                    </Button>
                    <Button variant="ghost" className="justify-start" onClick={() => scrollToSection("industries")}>
                      Industries
                    </Button>
                    <Button variant="ghost" className="justify-start" onClick={() => { /* Placeholder */ }}>
                      Partnerships
                    </Button>
                    <Button variant="ghost" className="justify-start" onClick={() => scrollToSection("insights")}>
                      Insights
                    </Button>
                    <Button variant="ghost" className="justify-start" onClick={() => { /* Placeholder */ }}>
                      Careers
                    </Button>
                    <Button variant="ghost" className="justify-start" onClick={() => scrollToSection("about")}>
                      About Us
                    </Button>
                  </div>
                </div>
                <div className="border-t p-4">
                  <Button onClick={() => scrollToSection("contact")} className="w-full">
                    Book Strategy Call
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}