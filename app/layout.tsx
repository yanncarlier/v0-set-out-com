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
  themeColor: "#0a0a0f",
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
