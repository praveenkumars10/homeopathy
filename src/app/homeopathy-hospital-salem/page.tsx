import type { Metadata } from "next";
import { CLINIC_CONFIG } from "@/lib/constants";
import { PageHeader } from "@/components/PageHeader";
import { SeoPageContent } from "@/components/SeoPageContent";
import { Building2, Video, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Homeopathy Hospital in Salem — Allen Sha Homeopathy",
  description: `${CLINIC_CONFIG.clinicName} in Salem offers 100% online homeopathy consultations by ${CLINIC_CONFIG.doctorName}, BHMS, MD(Hom), Gold Medalist. ${CLINIC_CONFIG.experienceYears}+ years experience. Constitutional homeopathy with doorstep medicine delivery.`,
  keywords: [
    "homeopathy hospital Salem",
    "homeopathy clinic Salem",
    "Allen Sha Homeopathy Salem",
    "best homeopathy hospital Salem",
    "homeopathic treatment Salem",
  ],
  alternates: { canonical: "/homeopathy-hospital-salem/" },
  openGraph: {
    title: `Homeopathy Hospital in Salem — ${CLINIC_CONFIG.clinicName}`,
    description: `${CLINIC_CONFIG.clinicName} — trusted homeopathy practice in Salem since ${CLINIC_CONFIG.establishedYear}. Online consultations with doorstep medicine delivery.`,
  },
};

export default function HomeopathyHospitalSalemPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: CLINIC_CONFIG.clinicName,
    description: `Homeopathy hospital and online consultation practice in Salem`,
    url: `${CLINIC_CONFIG.siteUrl}/homeopathy-hospital-salem/`,
    telephone: CLINIC_CONFIG.phoneClean,
    medicalSpecialty: "Homeopathic",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Salem",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    physician: {
      "@type": "Physician",
      name: CLINIC_CONFIG.doctorName,
      medicalSpecialty: "Homeopathy",
      description: CLINIC_CONFIG.qualifications,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: CLINIC_CONFIG.stats.googleRating.toString(),
      reviewCount: CLINIC_CONFIG.stats.reviewCount.toString(),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        title="Homeopathy Hospital in Salem"
        breadcrumbLabel="Hospital — Salem"
        backgroundImage="/images/hero-consultation.jpg"
      />
      <SeoPageContent
        h1="Homeopathy Hospital in Salem — Allen Sha Homeopathy"
        intro={`${CLINIC_CONFIG.clinicName} is a trusted homeopathy practice based in Salem, Tamil Nadu, established in ${CLINIC_CONFIG.establishedYear}. Led by ${CLINIC_CONFIG.doctorName}, BHMS, MD(Hom) Gold Medalist, we offer 100% online consultations with personalized constitutional treatment and doorstep medicine delivery across India.`}
        highlights={[
          `Established in ${CLINIC_CONFIG.establishedYear} — ${CLINIC_CONFIG.experienceYears}+ years of service`,
          `${CLINIC_CONFIG.stats.patientsTreated.toLocaleString()}+ patients treated`,
          `${CLINIC_CONFIG.stats.googleRating} ★ Google rating with ${CLINIC_CONFIG.stats.reviewCount}+ reviews`,
          "100% online consultations — video & phone",
          "Classical constitutional homeopathy approach",
          "Doorstep medicine delivery across Tamil Nadu & India",
        ]}
        sections={[
          {
            heading: "About Allen Sha Homeopathy — Salem",
            icon: <Building2 className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <>
                <p className="mb-3">
                  {CLINIC_CONFIG.clinicName} was founded in {CLINIC_CONFIG.establishedYear} by {CLINIC_CONFIG.doctorName} with a vision to bring genuine classical homeopathy to patients who deserve unhurried, personalized medical attention. Based in Salem, Tamil Nadu, our practice has grown to serve patients from across India through our 100% online consultation model.
                </p>
                <p>
                  Unlike conventional clinics that may offer brief consultations, every patient at {CLINIC_CONFIG.clinicName} receives a 45–60 minute in-depth case assessment, ensuring no aspect of their health is overlooked. This constitutional approach means we treat the person, not just the disease.
                </p>
              </>
            ),
          },
          {
            heading: "100% Online — How Our Salem Practice Serves You",
            icon: <Video className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <>
                <p className="mb-3">
                  While we are based in Salem, our practice operates entirely online. This means patients from anywhere in Salem, Tamil Nadu, or across India can access the same quality of care that was once limited by geography. Our online model offers:
                </p>
                <ul className="space-y-2 mt-3">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />No waiting rooms or travel — consult from your home</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Video consultations via Google Meet / WhatsApp Video</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Medicines packed and couriered to your doorstep with tracking</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Ongoing WhatsApp follow-up support throughout treatment</li>
                </ul>
              </>
            ),
          },
          {
            heading: "Our Specializations",
            icon: <ShieldCheck className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Skin disorders — eczema, psoriasis, vitiligo",
                  "Hair & scalp — hair fall, alopecia, dandruff",
                  "Allergies — rhinitis, sinusitis, asthma",
                  "Women's health — PCOS, thyroid, menstrual issues",
                  "Child health — immunity, tonsils, adenoids",
                  "Joint & pain — arthritis, spondylosis, sciatica",
                  "Digestive — IBS, GERD, bloating",
                  "Mental wellness — anxiety, stress, insomnia",
                ].map((s, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />{s}</li>
                ))}
              </ul>
            ),
          },
        ]}
        faqs={[
          {
            question: "Is Allen Sha Homeopathy a registered hospital in Salem?",
            answer: `${CLINIC_CONFIG.clinicName} is a registered homeopathic medical practice led by ${CLINIC_CONFIG.doctorName}, a Government Registered Medical Practitioner (Reg. No: ${CLINIC_CONFIG.registrationNo}) with the Tamil Nadu Homeopathy Medical Council. We offer 100% online consultations.`,
          },
          {
            question: "Can I visit the hospital in Salem for an in-person consultation?",
            answer: `Currently, ${CLINIC_CONFIG.clinicName} operates on a 100% online consultation model. You can consult with ${CLINIC_CONFIG.doctorName} via video call or phone call from anywhere. Medicines are delivered to your doorstep.`,
          },
        ]}
        relatedLinks={[
          { label: "Homeopathy Doctor in Salem", href: "/homeopathy-doctor-salem/", description: "Dr. Mohamed Shahid's qualifications and experience" },
          { label: "Online Consultation in Salem", href: "/online-homeopathy-consultation-salem/", description: "Book your online appointment from Salem" },
          { label: "Book an Appointment", href: "/book-online-homeopathy-appointment/", description: "Schedule your consultation today" },
          { label: "Patient Reviews", href: "/testimonials/", description: "Read verified patient experiences" },
        ]}
      />
    </>
  );
}
