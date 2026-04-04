import { translations, type Language } from "@/lib/translations"

export const languages = Object.keys(translations) as Language[]
export const defaultLanguage: Language = "en"
export const rtlLanguages: Language[] = ["ar"]

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://set-out.com"

export function isValidLanguage(value: string): value is Language {
  return languages.includes(value as Language)
}

export function getLanguageAlternates(pathname = "") {
  const normalizedPath = pathname ? `/${pathname.replace(/^\/+/, "")}` : ""

  return Object.fromEntries(
    [
      ...languages.map((language) => [language, `/${language}${normalizedPath}`]),
      ["x-default", `/${defaultLanguage}${normalizedPath}`],
    ],
  )
}

export function getDirection(language: Language) {
  return rtlLanguages.includes(language) ? "rtl" : "ltr"
}
