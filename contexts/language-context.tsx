"use client"

import type React from "react"
import { createContext, useContext } from "react"
import { usePathname, useRouter } from "next/navigation"
import { translations, type Language, type TranslationKey } from "@/lib/translations"
import { isValidLanguage } from "@/lib/site"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({
  children,
  language,
}: {
  children: React.ReactNode
  language: Language
}) {
  const pathname = usePathname()
  const router = useRouter()

  const handleSetLanguage = (lang: Language) => {
    const segments = (pathname || "/").split("/")
    if (segments[1] && isValidLanguage(segments[1])) {
      segments[1] = lang
    } else {
      segments.splice(1, 0, lang)
    }

    const nextPath = segments.join("/") || `/${lang}`
    const query = typeof window !== "undefined" ? window.location.search : ""
    const hash = typeof window !== "undefined" ? window.location.hash : ""

    router.push(`${nextPath}${query}${hash}`)
  }

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.en[key]
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
