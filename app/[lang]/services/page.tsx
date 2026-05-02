import Script from "next/script"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ServicesPage from "@/components/services-page"
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
  const title = `${t.ourServices} | SET-OUT INTERNATIONAL`
  const description = `${t.servicePortfolio}. ${t.importExportDesc}`

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/services`,
      languages: getLanguageAlternates("services"),
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services`,
      siteName: "SET-OUT INTERNATIONAL",
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}

export default async function LocalizedServicesPage({ params }: PageProps) {
  const { lang } = await params

  if (!isValidLanguage(lang)) {
    notFound()
  }

  const locale = lang as Language
  const t = translations[locale]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t.ourServices,
    description: `${t.servicePortfolio}. ${t.importExportDesc}`,
    provider: {
      "@type": "Organization",
      name: "SET-OUT INTERNATIONAL",
      url: `${siteUrl}/${locale}`,
    },
    serviceType: [
      "Import/Export Services",
      "IT Consultancy", 
      "Project Management",
      "Training Services",
      "Digital Marketing",
      "Software Development",
      "Technical Assistance"
    ],
    areaServed: "International",
    availableLanguage: Object.keys(translations),
  }

  return (
    <>
      <Script
        id={`services-jsonld-${locale}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ServicesPage />
    </>
  )
}
