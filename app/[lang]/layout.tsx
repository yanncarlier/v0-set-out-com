import type React from "react"
import { notFound } from "next/navigation"
import { LanguageProvider } from "@/contexts/language-context"
import { languages, isValidLanguage } from "@/lib/site"

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }))
}

export default async function LanguageLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: string }>
}>) {
  const { lang } = await params

  if (!isValidLanguage(lang)) {
    notFound()
  }

  return <LanguageProvider language={lang}>{children}</LanguageProvider>
}
