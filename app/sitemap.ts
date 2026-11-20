import type { MetadataRoute } from "next";
import { SITE, NAV } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", ...NAV.map(n => n.href), "/enterprise-centre/spaces", "/enterprise-centre/membership", "/privacy"].map(p => ({ url: `${SITE.url}${p}` }));
}
