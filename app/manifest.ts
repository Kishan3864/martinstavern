import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: "Martin's",
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#1A1614",
    theme_color: "#1A1614",
  };
}
