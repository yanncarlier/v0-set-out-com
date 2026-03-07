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
        className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground border border-border rounded-md bg-background transition-colors"
      >
        <span>{languageNames[language]}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 border border-border rounded-md bg-popover overflow-hidden z-50">
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
