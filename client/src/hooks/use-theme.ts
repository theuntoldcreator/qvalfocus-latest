import { useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as Theme) || "system"
    }
    return "system"
  })

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const setThemeAndStore = (theme: Theme) => {
    localStorage.setItem("theme", theme)
    setTheme(theme)
  }

  return {
    theme,
    setTheme: setThemeAndStore,
    toggleTheme: () => {
      if (theme === "light") {
        setThemeAndStore("dark")
      } else if (theme === "dark") {
        setThemeAndStore("system")
      } else {
        setThemeAndStore("light")
      }
    }
  }
}
