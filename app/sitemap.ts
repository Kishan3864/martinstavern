import type { MetadataRoute } from "next";
import { SITE, NAV_LINKS } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return NAV_LINKS.map((link) => ({
    url: `${SITE.url}${link.href === "/" ? "" : link.href}`,
    changeFrequency: "monthly",
    priority: link.href === "/" ? 1 : 0.7,
  }));
}
