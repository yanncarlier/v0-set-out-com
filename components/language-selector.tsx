"use client"

import { useLanguage } from "@/contexts/language-context"
import type { Language } from "@/lib/translations"
import { ChevronDown } from "lucide-react"
import { useState, useRef, useEffect } from "react"

const languageNames = {
  en: "English",
  fr: "Français",
  pt: "Português",
  "zh-TW": "繁體中文",
  "zh-CN": "简体中文",
}

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
    setIsOpen(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-full border border-border/80 bg-card/70 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
      >
        <span>{languageNames[language]}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-2xl border border-border/80 bg-popover/95 shadow-[0_18px_50px_rgba(4,12,27,0.35)] backdrop-blur-xl">
          {Object.entries(languageNames).map(([lang, name]) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang as Language)}
              className={`block w-full text-left px-4 py-2.5 text-sm transition-colors ${
                language === lang
                  ? "bg-accent/10 text-accent"
                  : "text-popover-foreground hover:bg-muted"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
