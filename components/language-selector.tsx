"use client"

import { useLanguage } from "@/contexts/language-context"
import type { Language } from "@/lib/translations"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

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

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-blue-600 border border-gray-300 rounded-md"
      >
        <span>{languageNames[language]}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-50">
          {Object.entries(languageNames).map(([lang, name]) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang as Language)}
              className={`block w-full text-left px-4 py-2 hover:bg-gray-100 ${
                language === lang ? "bg-blue-50 text-blue-600" : "text-gray-700"
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
