import { createContext, useContext, ReactNode } from "react"
import { useTheme } from "@/hooks/use-theme"

type ThemeProviderContext = {
  theme: "light" | "dark" | "system"
  setTheme: (theme: "light" | "dark" | "system") => void
  toggleTheme: () => void
}

const ThemeProviderContext = createContext<ThemeProviderContext | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const themeHook = useTheme()

  return (
    <ThemeProviderContext.Provider value={themeHook}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useThemeContext = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useThemeContext must be used within a ThemeProvider")

  return context
}
