import Script from "next/script"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LandingPage } from "@/components/landing-page"
import { translations, type Language } from "@/lib/translations"
import { getLanguageAlternates, isValidLanguage, siteUrl } from "@/lib/site"

type PageProps = {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params

  if (!isValidLanguage(lang)) {
    return {}
  }

  const locale = lang as Language
  const t = translations[locale]
  const title = "SET-OUT INTERNATIONAL"
  const description = t.heroSubtitle

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: getLanguageAlternates(),
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}`,
      siteName: "SET-OUT INTERNATIONAL",
      locale,
      type: "website",
    },
  }
}

export default async function LocalizedHomePage({ params }: PageProps) {
  const { lang } = await params

  if (!isValidLanguage(lang)) {
    notFound()
  }

  const locale = lang as Language
  const t = translations[locale]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SET-OUT INTERNATIONAL",
    url: `${siteUrl}/${locale}`,
    telephone: "+853-28389275",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${translations.en.addressLine1} ${translations.en.addressLine2}`,
      addressLocality: "Macau",
      addressRegion: "Macau",
      addressCountry: "MO",
    },
    description: t.heroSubtitle,
    knowsLanguage: Object.keys(translations),
  }

  return (
    <>
      <Script
        id={`organization-jsonld-${locale}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <LandingPage />
    </>
  )
}
