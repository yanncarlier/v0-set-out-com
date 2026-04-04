import type React from "react"
import { headers } from "next/headers"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { defaultLanguage, getDirection, isValidLanguage, siteUrl } from "@/lib/site"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SET-OUT INTERNATIONAL COMPANY LIMITED",
    template: "%s",
  },
  description:
    "Leading provider of technology services, import/export solutions, consultancy, and professional development training across multiple industries.",
  authors: [{ name: "SET-OUT INTERNATIONAL COMPANY LIMITED" }],
  alternates: {
    canonical: `/${defaultLanguage}`,
  },
  openGraph: {
    title: "SET-OUT INTERNATIONAL COMPANY LIMITED",
    description: "Leading provider of technology services and business solutions",
    type: "website",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1424",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const localeHeader = (await headers()).get("x-locale")
  const htmlLanguage = localeHeader && isValidLanguage(localeHeader) ? localeHeader : defaultLanguage

  return (
    <html
      lang={htmlLanguage}
      dir={getDirection(htmlLanguage)}
      suppressHydrationWarning
    >
      <body className="antialiased">{children}</body>
    </html>
  )
}
