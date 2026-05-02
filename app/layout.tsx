import type React from "react"
import { headers } from "next/headers"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import "./globals.css"
import { defaultLanguage, getDirection, isValidLanguage, siteUrl } from "@/lib/site"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SET-OUT INTERNATIONAL",
    template: "%s",
  },
  description:
    "Leading provider of technology services, import/export solutions, consultancy, and professional development training across multiple industries.",
  keywords: [
    "technology services",
    "import export solutions", 
    "IT consultancy",
    "project management",
    "professional training",
    "software development",
    "digital marketing",
    "technical assistance",
    "business solutions",
    "international trade",
    "Macau business"
  ],
  authors: [{ name: "SET-OUT INTERNATIONAL" }],
  alternates: {
    canonical: `/${defaultLanguage}`,
  },
  openGraph: {
    title: "SET-OUT INTERNATIONAL",
    description: "Leading provider of technology services and business solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SET-OUT INTERNATIONAL",
    description: "Leading provider of technology services and business solutions",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
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
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
