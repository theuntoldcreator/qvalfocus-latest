import { useState } from "react"
import { Link } from "wouter"
import { Menu, ChevronDown, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useAuth } from "@/context/AuthProvider"
import { LoginForm } from "@/components/auth/LoginForm"

const TopBarItems = () => {
  const { session, supabase } = useAuth()
  const [, setLocation] = useLocation()
  const [loginDialogOpen, setLoginDialogOpen] = useState(false)

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    setLocation("/")
  }

  return (
    <>
      <Button asChild variant="link" className="text-muted-foreground hover:text-foreground p-0 h-auto" size="sm">
        <Link href="/#contact">Contact</Link>
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

      {session ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Admin</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href="/admin">Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={handleSignOut}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Dialog open={loginDialogOpen} onOpenChange={setLoginDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">Login</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-sm">
            <DialogHeader className="items-center text-center">
              <img src="/images/qvalfocus.png" alt="QvalFocus Logo" className="h-10 w-auto mb-4 mx-auto" />
              <DialogTitle className="text-2xl">Admin Portal</DialogTitle>
              <DialogDescription>
                Please sign in to continue.
              </DialogDescription>
            </DialogHeader>
            <div className="px-6 pb-6 pt-4">
              <LoginForm onSuccess={() => setLoginDialogOpen(false)} />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const homePath = "/"
  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header className="gradient-hero sticky top-0 z-50">
      {/* Top Bar */}
      <div className="border-b">
        <div className="container hidden h-12 items-center justify-end md:flex">
          <div className="flex items-center space-x-6 text-sm">
            <TopBarItems />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href={homePath} className="flex items-center">
          <img src="/images/qvalfocus.png" alt="QvalFocus Logo" className="h-9 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-6 md:flex">
          <Button asChild variant="ghost"><Link href="/about">About Us</Link></Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1">
                Services <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <Link href="/project-solution">Project Solution</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/staffing-solution">Staffing Solution</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild variant="ghost"><Link href={`${homePath}#industries`}>Life Sciences</Link></Button>
          <Button asChild variant="ghost"><Link href="/insights">Insights</Link></Button>
          <Button asChild variant="ghost"><Link href="/careers">Careers</Link></Button>
          <Button asChild variant="ghost"><Link href={`${homePath}#contact`}>Contact Us</Link></Button>
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
                    <span className="font-semibold">Settings</span>
                  </div>
                  <div className="mt-4 flex items-center flex-wrap gap-4">
                    <TopBarItems />
                  </div>
                </div>
                <div className="flex-1 p-4">
                  <div className="flex flex-col space-y-2">
                    <Button asChild variant="ghost" className="justify-start" onClick={closeMobileMenu}><Link href="/about">About Us</Link></Button>
                    
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" className="w-full justify-between">
                          <span>Services</span>
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pl-4">
                        <Button asChild variant="ghost" className="w-full justify-start" onClick={closeMobileMenu}><Link href="/project-solution">Project Solution</Link></Button>
                        <Button asChild variant="ghost" className="w-full justify-start" onClick={closeMobileMenu}><Link href="/staffing-solution">Staffing Solution</Link></Button>
                      </CollapsibleContent>
                    </Collapsible>

                    <Button asChild variant="ghost" className="justify-start" onClick={closeMobileMenu}><Link href={`${homePath}#industries`}>Life Sciences</Link></Button>
                    <Button asChild variant="ghost" className="justify-start" onClick={closeMobileMenu}><Link href="/insights">Insights</Link></Button>
                    <Button asChild variant="ghost" className="justify-start" onClick={closeMobileMenu}><Link href="/careers">Careers</Link></Button>
                    <Button asChild variant="ghost" className="justify-start" onClick={closeMobileMenu}><Link href={`${homePath}#contact`}>Contact Us</Link></Button>
                  </div>
                </div>
                <div className="border-t p-4">
                  <Button asChild className="w-full" onClick={closeMobileMenu}><Link href={`${homePath}#contact`}>Contact Us</Link></Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}