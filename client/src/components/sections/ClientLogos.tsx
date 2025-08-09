import { CLIENT_LOGOS } from "@/lib/constants"

export function ClientLogos() {
  return (
    <section className="py-12 bg-muted">
      <div className="container">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Trusted by Industry Leaders
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 opacity-60">
          {CLIENT_LOGOS.map((logo) => (
            <div key={logo} className="flex items-center justify-center h-16 bg-card rounded-lg shadow-sm">
              <span className="font-bold text-muted-foreground">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
