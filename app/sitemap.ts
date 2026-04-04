import type { MetadataRoute } from "next"
import { languages, siteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return languages.flatMap((lang) => [
    {
      url: `${siteUrl}/${lang}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/${lang}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ])
}
