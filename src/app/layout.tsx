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
  metadataBase: new URL(CLINIC_CONFIG.siteUrl || "https://allensha.com"),
  title: {
    default: `${CLINIC_CONFIG.clinicName} | ${CLINIC_CONFIG.doctorName} | 100% Online Consultation Only`,
    template: `%s | ${CLINIC_CONFIG.clinicName}`,
  },
  description: `${CLINIC_CONFIG.clinicName} — Consult with ${CLINIC_CONFIG.doctorName}, BHMS, MD(Hom), Gold Medalist & Govt Registered Practitioner (Reg. No: 3459). 16+ years experience. 100% Online Video & Phone Consultations with doorstep medicine delivery.`,
  keywords: [
    "Allen Sha Homeopathy",
    "Allen Sha",
    "Allensha Homeopathy",
    "Dr M Mohamed Shahid",
    "BHMS MD Hom Gold Medalist",
    "Government Registered Medical Practitioner 3459",
    "Tamil Nadu Homeopathy Medical Council",
    "Online Homeopathy Consultation Only",
    "Homeopathy doctor Salem online consultation",
    "Classical homeopathy video consultation",
    "Constitutional homeopathy doctor",
    "Homeopathy for eczema and skin diseases",
    "Homeopathic hair loss treatment",
    "PCOS homeopathic treatment online",
    "Pediatric homeopathy online consultation",
  ],
  authors: [{ name: CLINIC_CONFIG.doctorName }],
  creator: CLINIC_CONFIG.clinicName,
  publisher: CLINIC_CONFIG.clinicName,
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: `${CLINIC_CONFIG.clinicName} | ${CLINIC_CONFIG.doctorName}`,
    description: CLINIC_CONFIG.shortTagline,
    url: CLINIC_CONFIG.siteUrl || "https://allensha.com",
    siteName: CLINIC_CONFIG.clinicName,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-consultation.jpg",
        width: 1200,
        height: 800,
        alt: `${CLINIC_CONFIG.clinicName} Online Consultation`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${CLINIC_CONFIG.clinicName} | ${CLINIC_CONFIG.doctorName}`,
    description: CLINIC_CONFIG.shortTagline,
    images: ["/images/hero-consultation.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/logo-icon-transparent.png", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo-icon-transparent.png" },
    ],
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // MedicalBusiness JSON-LD Structured Data Schema for Online Consultation Practice
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
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
      addressLocality: CLINIC_CONFIG.city,
      addressRegion: CLINIC_CONFIG.state,
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "15:00",
        closes: "21:00",
      },
    ],
    physician: {
      "@type": "Physician",
      name: CLINIC_CONFIG.doctorName,
      medicalSpecialty: "Homeopathy",
      jobTitle: CLINIC_CONFIG.doctorTitle,
      description: `${CLINIC_CONFIG.qualifications}, ${CLINIC_CONFIG.medicalCouncilReg}`,
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
