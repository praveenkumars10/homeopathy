import type { Metadata } from "next";
import { CLINIC_CONFIG } from "@/lib/constants";
import { PageHeader } from "@/components/PageHeader";
import { SeoPageContent } from "@/components/SeoPageContent";
import { MapPin, Video, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Online Homeopathy Consultation in Attur | Dr. M. Mohamed Shahid",
  description: `Book an online homeopathy consultation from Attur with ${CLINIC_CONFIG.doctorName}, BHMS, MD(Hom), Gold Medalist. 100% online video & phone consultations. Medicines delivered to your doorstep in Attur, Salem District.`,
  keywords: [
    "online homeopathy consultation Attur",
    "homeopathy doctor Attur",
    "homeopathic treatment Attur",
    "Attur Salem homeopathy online",
    "best homeopathy doctor near Attur",
  ],
  alternates: { canonical: "/online-homeopathy-consultation-attur/" },
  openGraph: {
    title: `Online Homeopathy Consultation in Attur — ${CLINIC_CONFIG.clinicName}`,
    description: `Consult ${CLINIC_CONFIG.doctorName} online from Attur, Salem District. Doorstep medicine delivery.`,
  },
};

export default function OnlineConsultationAtturPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: CLINIC_CONFIG.clinicName,
    description: `Online homeopathy consultation for patients in Attur, Salem District`,
    url: `${CLINIC_CONFIG.siteUrl}/online-homeopathy-consultation-attur/`,
    telephone: CLINIC_CONFIG.phoneClean,
    medicalSpecialty: "Homeopathic",
    areaServed: {
      "@type": "City",
      name: "Attur",
      containedInPlace: { "@type": "State", name: "Tamil Nadu" },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        title="Online Homeopathy Consultation in Attur"
        breadcrumbLabel="Online Consultation — Attur"
        backgroundImage="/images/hero-consultation.jpg"
      />
      <SeoPageContent
        h1="Online Homeopathy Consultation in Attur"
        intro={`Residents of Attur, Salem District, can now access expert homeopathic care without traveling to the city. ${CLINIC_CONFIG.clinicName} offers 100% online video and phone consultations with ${CLINIC_CONFIG.doctorName}, BHMS, MD(Hom), Gold Medalist — with medicines delivered right to your home in Attur.`}
        highlights={[
          "Online consultation available for all Attur residents",
          `Consult ${CLINIC_CONFIG.doctorName} — ${CLINIC_CONFIG.experienceYears}+ years experience`,
          "Video call via Google Meet or WhatsApp Video",
          "Medicines couriered to your doorstep in Attur",
          "No travel required — consult from home",
          "Follow-up support via WhatsApp",
        ]}
        sections={[
          {
            heading: "Homeopathy Consultation for Attur Patients",
            icon: <MapPin className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <>
                <p className="mb-3">
                  Attur, located in Salem District, now has access to a qualified Government Registered homeopathic physician through our 100% online consultation service. Whether you&apos;re in Attur town, Narasingapuram, Thumbal, Valasai, or surrounding villages, you can connect with {CLINIC_CONFIG.doctorName} from the comfort of your home.
                </p>
                <p>
                  Our online model eliminates the need to travel to Salem city for quality homeopathic care. You receive the same in-depth constitutional assessment and personalized treatment that clinic-based patients receive.
                </p>
              </>
            ),
          },
          {
            heading: "How Attur Patients Can Book a Consultation",
            icon: <Video className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <ol className="list-decimal list-inside space-y-2">
                <li><strong>Contact via WhatsApp:</strong> Send a message to {CLINIC_CONFIG.phone} to request your preferred slot.</li>
                <li><strong>Choose Video or Phone:</strong> Select Google Meet video call or WhatsApp Video / phone call.</li>
                <li><strong>Attend Your Consultation:</strong> Speak with {CLINIC_CONFIG.doctorName} for 45–60 minutes about your complete health picture.</li>
                <li><strong>Receive Medicines:</strong> Constitutional remedies are dispatched to your Attur address via tracked courier.</li>
              </ol>
            ),
          },
          {
            heading: "Common Conditions Treated for Attur Patients",
            icon: <ShieldCheck className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Skin problems — eczema, psoriasis, allergic rashes",
                  "Hair loss & thinning",
                  "Allergic rhinitis & sinusitis",
                  "PCOS, thyroid & hormonal issues",
                  "Children's health & immunity",
                  "Arthritis & joint pain",
                  "Digestive complaints — acidity, IBS",
                  "Stress, anxiety & sleep problems",
                ].map((c, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />{c}</li>
                ))}
              </ul>
            ),
          },
        ]}
        faqs={[
          {
            question: "Can I get homeopathy consultation from Attur online?",
            answer: `Yes. ${CLINIC_CONFIG.clinicName} offers 100% online consultations to patients in Attur. You can consult via video or phone call with ${CLINIC_CONFIG.doctorName}, and medicines will be delivered to your Attur address.`,
          },
          {
            question: "How long does medicine delivery take to Attur?",
            answer: "Most patients in Attur receive their medicines within 3–4 business days via speed post or courier with tracking details provided.",
          },
        ]}
        relatedLinks={[
          { label: "Online Consultation in Salem", href: "/online-homeopathy-consultation-salem/", description: "Homeopathy consultation from Salem" },
          { label: "Consultation in Tamil Nadu", href: "/online-homeopathy-consultation-tamil-nadu/", description: "Online homeopathy across Tamil Nadu" },
          { label: "Consultation in Namakkal", href: "/homeopathy-consultation-namakkal/", description: "Online homeopathy for Namakkal patients" },
          { label: "Book an Appointment", href: "/book-online-homeopathy-appointment/", description: "Schedule your online consultation" },
        ]}
      />
    </>
  );
}
