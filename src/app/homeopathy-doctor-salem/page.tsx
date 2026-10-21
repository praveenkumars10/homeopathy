import type { Metadata } from "next";
import { CLINIC_CONFIG } from "@/lib/constants";
import { PageHeader } from "@/components/PageHeader";
import { SeoPageContent } from "@/components/SeoPageContent";
import { ShieldCheck, Award, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Homeopathy Doctor in Salem — Dr. M. Mohamed Shahid, BHMS, MD(Hom)",
  description: `Consult the best homeopathy doctor in Salem — ${CLINIC_CONFIG.doctorName}, BHMS, MD(Hom), Gold Medalist. Govt Registered (Reg No: ${CLINIC_CONFIG.registrationNo}). ${CLINIC_CONFIG.experienceYears}+ years experience. 100% online consultations.`,
  keywords: [
    "homeopathy doctor Salem",
    "best homeopathic doctor Salem",
    "homeopathy specialist Salem",
    "Dr Mohamed Shahid Salem",
    "BHMS MD Hom doctor Salem",
  ],
  alternates: { canonical: "/homeopathy-doctor-salem/" },
  openGraph: {
    title: `Homeopathy Doctor in Salem — ${CLINIC_CONFIG.doctorName}`,
    description: `Gold Medalist homeopathic physician in Salem. ${CLINIC_CONFIG.experienceYears}+ years. Online consultations only.`,
  },
};

export default function HomeopathyDoctorSalemPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: CLINIC_CONFIG.doctorName,
    medicalSpecialty: "Homeopathy",
    jobTitle: CLINIC_CONFIG.doctorTitle,
    description: `${CLINIC_CONFIG.qualifications}, ${CLINIC_CONFIG.medicalCouncilReg}. ${CLINIC_CONFIG.experienceYears}+ years of practice.`,
    url: `${CLINIC_CONFIG.siteUrl}/homeopathy-doctor-salem/`,
    telephone: CLINIC_CONFIG.phoneClean,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Salem",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    worksFor: {
      "@type": "MedicalBusiness",
      name: CLINIC_CONFIG.clinicName,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        title="Homeopathy Doctor in Salem"
        breadcrumbLabel="Doctor — Salem"
        backgroundImage="/images/banner_doctor.jpg"
      />
      <SeoPageContent
        h1="Homeopathy Doctor in Salem — Dr. M. Mohamed Shahid"
        intro={`${CLINIC_CONFIG.doctorName} is a Government Registered Homeopathic Physician based in Salem, Tamil Nadu, with ${CLINIC_CONFIG.experienceYears}+ years of clinical experience. A Gold Medalist in BHMS and MD(Hom), he practices classical Hahnemannian constitutional homeopathy through 100% online video and phone consultations.`}
        highlights={[
          "BHMS, MD(Hom) — Gold Medalist",
          `Government Registered Medical Practitioner — Reg. No: ${CLINIC_CONFIG.registrationNo}`,
          "Tamil Nadu Homeopathy Medical Council registered",
          `${CLINIC_CONFIG.experienceYears}+ years of clinical practice since ${CLINIC_CONFIG.establishedYear}`,
          `${CLINIC_CONFIG.stats.patientsTreated.toLocaleString()}+ patients treated across India`,
          "Specializes in classical constitutional homeopathy",
        ]}
        sections={[
          {
            heading: "Qualifications & Medical Registration",
            icon: <Award className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <>
                <p className="mb-3">
                  {CLINIC_CONFIG.doctorName} holds a Bachelor of Homeopathic Medicine and Surgery (BHMS) and a Doctorate in Homeopathic Medicine — MD(Hom), both completed with a Gold Medal for academic excellence. He is registered with the Tamil Nadu Homeopathy Medical Council under Registration Number {CLINIC_CONFIG.registrationNo}, ensuring full compliance with Government of India medical practice regulations.
                </p>
                <p>
                  With practice established since {CLINIC_CONFIG.establishedYear}, Dr. Shahid has treated over {CLINIC_CONFIG.stats.patientsTreated.toLocaleString()} patients from Salem, Tamil Nadu, and across India through personalized constitutional prescribing.
                </p>
              </>
            ),
          },
          {
            heading: "Clinical Approach — Classical Constitutional Homeopathy",
            icon: <BookOpen className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <>
                <p className="mb-3">
                  Dr. Shahid follows the classical Hahnemannian approach to homeopathy, which means every patient receives a fully individualized treatment plan. Rather than prescribing a common remedy for a common disease name, he evaluates your complete symptom totality — physical complaints, emotional landscape, sleep patterns, dietary habits, and medical history.
                </p>
                <p>
                  This holistic, constitution-based prescribing aims to stimulate your body&apos;s innate healing capacity, addressing root causes rather than just suppressing symptoms superficially.
                </p>
              </>
            ),
          },
          {
            heading: "Why Patients in Salem Trust Dr. Mohamed Shahid",
            icon: <ShieldCheck className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Unhurried 45–60 minute consultations — not rushed 5-minute prescriptions</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Genuine listening and detailed case-taking</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Ongoing WhatsApp support between follow-ups</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Transparent treatment approach — no hidden costs</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />{CLINIC_CONFIG.stats.googleRating} ★ Google rating with {CLINIC_CONFIG.stats.reviewCount}+ verified reviews</li>
              </ul>
            ),
          },
        ]}
        faqs={[
          {
            question: "Is Dr. Mohamed Shahid a qualified and registered homeopathy doctor?",
            answer: `Yes. Dr. M. Mohamed Shahid holds BHMS and MD(Hom) degrees with a Gold Medal. He is a Government Registered Medical Practitioner with the Tamil Nadu Homeopathy Medical Council (Reg. No: ${CLINIC_CONFIG.registrationNo}).`,
          },
          {
            question: "Does Dr. Shahid see patients in-person in Salem?",
            answer: "Dr. Shahid currently offers 100% online consultations only — via video call (Google Meet / WhatsApp Video) or phone call. This allows patients from Salem and across India to receive expert homeopathic care without traveling.",
          },
          {
            question: "How can I book an appointment with the homeopathy doctor in Salem?",
            answer: `You can book your online consultation via WhatsApp at ${CLINIC_CONFIG.phone}. Consultations are available Monday to Saturday, 3:00 PM to 9:00 PM.`,
          },
        ]}
        relatedLinks={[
          { label: "Online Consultation in Salem", href: "/online-homeopathy-consultation-salem/", description: "Book your online homeopathy consultation from Salem" },
          { label: "Homeopathy Hospital in Salem", href: "/homeopathy-hospital-salem/", description: "Learn about Allen Sha Homeopathy practice" },
          { label: "How Treatment Works", href: "/how-it-works/", description: "Our step-by-step treatment process" },
          { label: "Patient Testimonials", href: "/testimonials/", description: "Read verified patient success stories" },
        ]}
      />
    </>
  );
}
