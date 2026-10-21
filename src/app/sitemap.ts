import { MetadataRoute } from "next";
import { CLINIC_CONFIG } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL || 
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""));
  const baseUrl = envUrl || CLINIC_CONFIG.siteUrl || "https://allensha.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/treatments`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/why-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/doctor`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.95,
    },
    // Location & High-Intent Landing Pages
    {
      url: `${baseUrl}/online-homeopathy-consultation-salem/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/homeopathy-doctor-salem/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/homeopathy-hospital-salem/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/best-online-homeopathy-consultation-salem/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/online-homeopathy-consultation-attur/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/homeopathy-consultation-namakkal/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${baseUrl}/online-homeopathy-consultation-tamil-nadu/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/book-online-homeopathy-appointment/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    // Service & Process Guides
    {
      url: `${baseUrl}/how-online-homeopathy-consultation-works/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/homeopathy-consultation-fees/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // Demographic & Condition Focus Pages
    {
      url: `${baseUrl}/homeopathy-consultation-children/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/homeopathy-consultation-adults/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/homeopathy-consultation-womens-health/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/homeopathy-consultation-skin-concerns/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/homeopathy-consultation-allergy-concerns/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.92,
    },
    // Patient Decision & Education Guides
    {
      url: `${baseUrl}/what-to-expect-homeopathy-consultation/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/how-to-prepare-homeopathy-appointment/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/questions-to-ask-homeopathy-doctor/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/online-vs-in-person-homeopathy-consultation/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/frequently-asked-questions-homeopathy/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.88,
    },
  ];
}
