import type { Metadata } from "next";
import { CLINIC_CONFIG } from "@/lib/constants";
import { PageHeader } from "@/components/PageHeader";
import { SeoPageContent } from "@/components/SeoPageContent";
import { Award, Video, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Online Homeopathy Consultation in Salem | Gold Medalist Doctor",
  description: `Experience the best online homeopathy consultation in Salem with ${CLINIC_CONFIG.doctorName}, BHMS, MD(Hom), Gold Medalist. ${CLINIC_CONFIG.stats.googleRating}★ Google rating. ${CLINIC_CONFIG.experienceYears}+ years. 100% online with doorstep medicine delivery.`,
  keywords: [
    "best online homeopathy consultation Salem",
    "best homeopathy doctor Salem online",
    "top homeopathic consultant Salem",
    "best rated homeopathy Salem",
    "Gold Medalist homeopathy doctor Salem",
  ],
  alternates: { canonical: "/best-online-homeopathy-consultation-salem/" },
  openGraph: {
    title: `Best Online Homeopathy Consultation in Salem — ${CLINIC_CONFIG.clinicName}`,
    description: `${CLINIC_CONFIG.stats.googleRating}★ rated. Gold Medalist doctor. ${CLINIC_CONFIG.experienceYears}+ years experience.`,
  },
};

export default function BestOnlineConsultationSalemPage() {
  return (
    <>
      <PageHeader
        title="Best Online Homeopathy Consultation in Salem"
        breadcrumbLabel="Best Consultation — Salem"
        backgroundImage="/images/hero-consultation.jpg"
      />
      <SeoPageContent
        h1="Best Online Homeopathy Consultation in Salem"
        intro={`When searching for the best online homeopathy consultation in Salem, patients look for verified credentials, genuine patient outcomes, and a doctor who truly listens. ${CLINIC_CONFIG.clinicName}, led by Gold Medalist ${CLINIC_CONFIG.doctorName}, delivers all three — with a ${CLINIC_CONFIG.stats.googleRating}★ Google rating and ${CLINIC_CONFIG.stats.patientsTreated.toLocaleString()}+ patients treated.`}
        highlights={[
          `${CLINIC_CONFIG.stats.googleRating} ★ Google rating — ${CLINIC_CONFIG.stats.reviewCount}+ verified reviews`,
          "Gold Medalist — BHMS, MD(Hom)",
          `Government Registered Practitioner — Reg. No: ${CLINIC_CONFIG.registrationNo}`,
          `${CLINIC_CONFIG.experienceYears}+ years of dedicated practice`,
          "45–60 minute unhurried consultations — not rushed visits",
          "100% online with tracked doorstep medicine delivery",
        ]}
        sections={[
          {
            heading: "What Makes Our Consultation the Best in Salem?",
            icon: <Award className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <>
                <p className="mb-3">
                  The difference between an average consultation and the best is depth. At {CLINIC_CONFIG.clinicName}, every consultation is a thorough 45–60 minute session where {CLINIC_CONFIG.doctorName} evaluates not just your symptoms, but your complete physical, emotional, and lifestyle picture. This classical constitutional approach is what produces lasting results.
                </p>
                <p className="mb-3">
                  Our patients frequently share that they feel genuinely heard for the first time — a rarity in today&apos;s fast-paced medical landscape. This patient-centred approach, combined with Gold Medal credentials and Government registration, is why we&apos;re rated the best in Salem.
                </p>
              </>
            ),
          },
          {
            heading: "Verified Patient Outcomes",
            icon: <ShieldCheck className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Chronic eczema patients achieving clear skin without steroids</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />PCOS patients restoring regular menstrual cycles naturally</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Children with recurrent tonsillitis building lasting immunity</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Arthritis patients regaining mobility and reducing pain</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Allergic rhinitis sufferers finding long-term relief</li>
              </ul>
            ),
          },
          {
            heading: "100% Online — No Compromise on Quality",
            icon: <Video className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <p>
                Our online consultation model is not a compromise — it&apos;s an enhancement. You receive the same detailed case-taking, constitutional analysis, and individualized prescribing as any in-person visit. The only difference? You consult from the comfort and privacy of your own home in Salem. Medicines are packed and dispatched to your doorstep with full tracking.
              </p>
            ),
          },
        ]}
        faqs={[
          {
            question: "Why is Allen Sha considered the best homeopathy consultation in Salem?",
            answer: `With a ${CLINIC_CONFIG.stats.googleRating}★ Google rating, ${CLINIC_CONFIG.stats.reviewCount}+ verified reviews, Gold Medal credentials, Government registration, and ${CLINIC_CONFIG.experienceYears}+ years of practice, ${CLINIC_CONFIG.clinicName} consistently delivers deep, personalized constitutional care that produces lasting results.`,
          },
          {
            question: "How is the online experience different from other clinics?",
            answer: `Unlike rushed 5-minute consultations, ${CLINIC_CONFIG.doctorName} spends 45–60 minutes with every patient to understand their complete health picture. This unhurried approach is what sets us apart and produces consistently positive outcomes.`,
          },
        ]}
        relatedLinks={[
          { label: "Online Consultation in Salem", href: "/online-homeopathy-consultation-salem/", description: "Book your online consultation" },
          { label: "Meet the Doctor", href: "/homeopathy-doctor-salem/", description: "Dr. Shahid's qualifications and experience" },
          { label: "Patient Testimonials", href: "/testimonials/", description: "Read verified patient success stories" },
          { label: "Consultation Fees", href: "/homeopathy-consultation-fees/", description: "Transparent fee structure" },
        ]}
      />
    </>
  );
}
