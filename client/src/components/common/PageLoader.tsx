import { LoaderCircle } from "lucide-react"

export function PageLoader() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <LoaderCircle className="w-8 h-8 animate-spin text-primary" />
    </div>
  )
}