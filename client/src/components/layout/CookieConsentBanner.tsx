import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if the user has already consented
    const consent = localStorage.getItem("cookie_consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleDecision = (consent: "accepted" | "rejected") => {
    localStorage.setItem("cookie_consent", consent)
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-muted/95 backdrop-blur supports-[backdrop-filter]:bg-muted/60 p-4 border-t z-50 animate-fade-in">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground max-w-4xl">
          <p>
            By clicking "Accept All Cookies", you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.
          </p>
          <div className="mt-1 space-x-2">
            <a href="#" className="text-primary hover:underline text-xs">General Privacy Notice</a>
            <a href="#" className="text-primary hover:underline text-xs">Cookie Notice</a>
            <a href="#" className="text-primary hover:underline text-xs">Imprint</a>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Button variant="outline" size="sm">Manage Cookie Settings</Button>
          <Button variant="secondary" size="sm" onClick={() => handleDecision("rejected")}>Reject All</Button>
          <Button variant="default" size="sm" onClick={() => handleDecision("accepted")}>Accept All Cookies</Button>
        </div>
      </div>
    </div>
  )
}