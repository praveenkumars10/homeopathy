import { MetadataRoute } from "next";
import { CLINIC_CONFIG } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL || 
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""));
  const baseUrl = envUrl || CLINIC_CONFIG.siteUrl || "https://allensha.com";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
