import type { Metadata } from "next";
import type { InvitationContent } from "@/data/types";

export function buildMetadata(c: InvitationContent): Metadata {
  return {
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: c.path,
      languages: {
        ta: "/tamil",
        en: "/english",
        "x-default": "/english",
      },
    },
    openGraph: {
      type: "website",
      url: c.path,
      siteName: c.meta.siteName,
      title: c.meta.title,
      description: c.meta.description,
      locale: c.meta.ogLocale,
      alternateLocale: [c.meta.alternateLocale],
    },
    twitter: {
      card: "summary_large_image",
      title: c.meta.title,
      description: c.meta.description,
    },
    robots: { index: true, follow: true },
  };
}
