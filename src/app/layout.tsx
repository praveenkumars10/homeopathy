import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { CLINIC_CONFIG } from "@/lib/constants";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://allensha.com"),
  title: `${CLINIC_CONFIG.doctorName} | ${CLINIC_CONFIG.shortName} — Classical Homeopathy in ${CLINIC_CONFIG.city}`,
  description: `${CLINIC_CONFIG.tagline}. Evidence-informed constitutional homeopathy for hair & skin, allergies, PCOS, pediatric health and chronic pain in ${CLINIC_CONFIG.city}.`,
  keywords: [
    "Homeopathy clinic Bengaluru",
    "Best homeopath in Indiranagar",
    "Classical homeopathy doctor",
    "Homeopathy for eczema and psoriasis",
    "Homeopathic hair loss treatment",
    "PCOS homeopathic treatment",
    "Pediatric homeopathy Bengaluru",
    "Allergy homeopathic remedies",
  ],
  authors: [{ name: CLINIC_CONFIG.doctorName }],
  creator: CLINIC_CONFIG.clinicName,
  openGraph: {
    title: `${CLINIC_CONFIG.doctorName} | ${CLINIC_CONFIG.clinicName}`,
    description: CLINIC_CONFIG.tagline,
    url: "https://allensha.com",
    siteName: CLINIC_CONFIG.clinicName,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-consultation.jpg",
        width: 1200,
        height: 800,
        alt: `${CLINIC_CONFIG.clinicName} Consultation`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${CLINIC_CONFIG.doctorName} | ${CLINIC_CONFIG.clinicName}`,
    description: CLINIC_CONFIG.tagline,
    images: ["/images/hero-consultation.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // MedicalClinic JSON-LD Structured Data Schema for Local SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: CLINIC_CONFIG.clinicName,
    alternateName: CLINIC_CONFIG.shortName,
    description: CLINIC_CONFIG.tagline,
    url: "https://allensha.com",
    telephone: CLINIC_CONFIG.phoneClean,
    medicalSpecialty: "Homeopathic",
    image: "https://allensha.com/images/hero-consultation.jpg",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${CLINIC_CONFIG.addressLine1}, ${CLINIC_CONFIG.addressLine2}`,
      addressLocality: CLINIC_CONFIG.city,
      addressRegion: CLINIC_CONFIG.state,
      postalCode: CLINIC_CONFIG.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "12.9726884",
      longitude: "77.6384457",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "19:30",
      },
    ],
    physician: {
      "@type": "Physician",
      name: CLINIC_CONFIG.doctorName,
      medicalSpecialty: "Homeopathy",
      jobTitle: CLINIC_CONFIG.doctorTitle,
      description: CLINIC_CONFIG.qualifications,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: CLINIC_CONFIG.stats.googleRating.toString(),
      reviewCount: CLINIC_CONFIG.stats.reviewCount.toString(),
    },
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#FAF7F0] text-[#23291F] min-h-screen flex flex-col" suppressHydrationWarning>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
