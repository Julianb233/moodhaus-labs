import type { MetadataRoute } from "next"
import { articles } from "@/lib/articles"

const site = "https://allaieaisha.com"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site, changeFrequency: "monthly", priority: 1 },
    { url: `${site}/journal`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${site}/links`, changeFrequency: "monthly", priority: 0.5 },
    ...articles.map(a => ({ url: `${site}/journal/${a.slug}`, lastModified: a.date, changeFrequency: "yearly" as const, priority: 0.7 })),
  ]
}
