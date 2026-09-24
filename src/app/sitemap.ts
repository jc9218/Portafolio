import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          "es-CO": SITE_URL,
          "es": SITE_URL,
          "en": SITE_URL,
          "x-default": SITE_URL,
        },
      },
    },
  ];
}
