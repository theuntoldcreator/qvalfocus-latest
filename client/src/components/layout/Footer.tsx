import { Link } from "wouter"
import { Linkedin, Twitter } from "lucide-react"
import { COMPANY_INFO, SERVICES, INDUSTRIES } from "@/lib/constants"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-white p-2 rounded-md">
                <img src="/images/qvalfocus.png" alt="QvalFocus Logo" className="h-8 w-auto" />
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Transforming enterprises through strategic technology consulting and digital innovation.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/qvalfocus/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-gray-300">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link href="/#services" className="hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Industries</h3>
            <ul className="space-y-4 text-gray-300">
              {INDUSTRIES.map((industry) => (
                <li key={industry.id}>
                  <Link href="/#industries" className="hover:text-white transition-colors">
                    {industry.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-gray-300">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/about#leadership" className="hover:text-white transition-colors">Leadership</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/insights" className="hover:text-white transition-colors">News & Insights</Link></li>
              <li><Link href="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Partner Program</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 lg:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}