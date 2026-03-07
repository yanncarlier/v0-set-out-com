import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

export const metadata: Metadata = {
  title: "SET-OUT INTERNATIONAL COMPANY LIMITED",
  description:
    "Leading provider of technology services, import/export solutions, consultancy, and professional development training across multiple industries.",
  keywords: [
    "technology services",
    "import export",
    "consultancy",
    "project management",
    "training",
    "digital marketing",
  ],
  authors: [{ name: "SET-OUT INTERNATIONAL COMPANY LIMITED" }],
  openGraph: {
    title: "SET-OUT INTERNATIONAL COMPANY LIMITED",
    description: "Leading provider of technology services and business solutions",
    type: "website",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0000FF",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
