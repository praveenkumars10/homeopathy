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
  title: `${CLINIC_CONFIG.doctorName} | 100% Online Homeopathy Consultation Only (Base: Salem, Tamil Nadu)`,
  description: `${CLINIC_CONFIG.doctorName}, BHMS, MD(Hom) — Gold Medalist & Government Registered Medical Practitioner (Reg. No: 3459, Tamil Nadu Homeopathy Medical Council). 16+ years experience (Since 2010). 100% Online Consultations Only (No Offline Visits). Timings: 3:00 PM – 9:00 PM.`,
  keywords: [
    "Online Homeopathy Consultation Only",
    "Dr M Mohamed Shahid",
    "BHMS MD Hom Gold Medalist",
    "Government Registered Medical Practitioner 3459",
    "Tamil Nadu Homeopathy Medical Council",
    "Homeopathy doctor Salem online consultation",
    "Classical homeopathy video consultation",
    "Homeopathy for eczema and skin diseases",
    "Homeopathic hair loss treatment",
    "PCOS homeopathic treatment online",
    "Pediatric homeopathy online consultation",
  ],
  authors: [{ name: CLINIC_CONFIG.doctorName }],
  creator: CLINIC_CONFIG.clinicName,
  openGraph: {
    title: `${CLINIC_CONFIG.doctorName} | ${CLINIC_CONFIG.clinicName} Online Homeopathy`,
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
        alt: `${CLINIC_CONFIG.clinicName} Online Consultation`,
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
