import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Keep the admin panel and API endpoints out of search engines.
      disallow: ["/permission", "/api/"],
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
