import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/tamil`, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/english`, changeFrequency: "monthly", priority: 1 },
  ];
}
