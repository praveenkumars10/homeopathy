import type { Metadata } from "next";
import { CLINIC_CONFIG } from "@/lib/constants";
import { PageHeader } from "@/components/PageHeader";
import { SeoPageContent } from "@/components/SeoPageContent";
import { Video, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Online Homeopathy Consultation in Salem | Video & Phone",
  description: `Book an online homeopathy consultation in Salem with ${CLINIC_CONFIG.doctorName}, BHMS, MD(Hom), Gold Medalist. 100% online video & phone consultations with doorstep medicine delivery. Govt Reg. No: ${CLINIC_CONFIG.registrationNo}.`,
  keywords: [
    "online homeopathy consultation Salem",
    "homeopathy video consultation Salem",
    "homeopathic doctor Salem online",
    "Salem homeopathy online appointment",
    "best homeopathy doctor Salem",
  ],
  alternates: { canonical: "/online-homeopathy-consultation-salem/" },
  openGraph: {
    title: `Online Homeopathy Consultation in Salem — ${CLINIC_CONFIG.clinicName}`,
    description: `Consult ${CLINIC_CONFIG.doctorName} from Salem online. 16+ years experience. Gold Medalist. Medicines delivered to your doorstep.`,
  },
};

export default function OnlineConsultationSalemPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: CLINIC_CONFIG.clinicName,
    description: `Online homeopathy consultation in Salem by ${CLINIC_CONFIG.doctorName}`,
    url: `${CLINIC_CONFIG.siteUrl}/online-homeopathy-consultation-salem/`,
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
      description: `${CLINIC_CONFIG.qualifications}, ${CLINIC_CONFIG.medicalCouncilReg}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        title="Online Homeopathy Consultation in Salem"
        breadcrumbLabel="Online Consultation — Salem"
        backgroundImage="/images/hero-consultation.jpg"
      />
      <SeoPageContent
        h1="Online Homeopathy Consultation in Salem"
        intro={`Looking for a trusted online homeopathy consultation in Salem? ${CLINIC_CONFIG.clinicName} offers 100% online video and phone consultations with ${CLINIC_CONFIG.doctorName}, a Gold Medalist homeopathic physician with ${CLINIC_CONFIG.experienceYears}+ years of clinical experience. Consult from your home in Salem — medicines are delivered right to your doorstep.`}
        highlights={[
          "100% online — video or phone consultation from Salem",
          `Led by ${CLINIC_CONFIG.doctorName}, BHMS, MD(Hom), Gold Medalist`,
          `Government Registered Medical Practitioner — Reg. No: ${CLINIC_CONFIG.registrationNo}`,
          "45–60 minute detailed constitutional case assessment",
          "Medicines couriered to your doorstep across Salem & Tamil Nadu",
          `${CLINIC_CONFIG.stats.patientsTreated.toLocaleString()}+ patients treated successfully`,
        ]}
        sections={[
          {
            heading: "Why Choose Online Homeopathy Consultation in Salem?",
            icon: <Video className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <>
                <p className="mb-3">
                  Salem residents no longer need to travel or wait in queues. With our online consultation service, you receive the same in-depth, classical constitutional homeopathy assessment — from the comfort of your home. Every consultation is personally handled by {CLINIC_CONFIG.doctorName}, ensuring expert care without compromise.
                </p>
                <p>
                  Whether you live in Salem city, Hasthampatti, Fairlands, Shevapet, Ammapet, Alagapuram, or nearby areas — our 100% online service means you can connect with a qualified homeopathic physician without travel.
                </p>
              </>
            ),
          },
          {
            heading: "How Online Consultation Works for Salem Patients",
            icon: <Clock className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <ol className="list-decimal list-inside space-y-2">
                <li><strong>Book Your Slot:</strong> Contact us via WhatsApp or phone to choose a convenient time between 3:00 PM – 9:00 PM (Monday to Saturday).</li>
                <li><strong>Join the Video Call:</strong> Connect with {CLINIC_CONFIG.doctorName} on Google Meet or WhatsApp Video for a detailed 45–60 minute consultation.</li>
                <li><strong>Receive Medicines at Home:</strong> Individualized constitutional remedies are packed securely and couriered to your Salem address with tracking.</li>
                <li><strong>Follow-Up Support:</strong> Ongoing WhatsApp support and scheduled follow-up consultations to monitor your progress.</li>
              </ol>
            ),
          },
          {
            heading: "Conditions Treated Online for Salem Patients",
            icon: <ShieldCheck className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Skin conditions (eczema, psoriasis, acne)",
                  "Hair fall & alopecia",
                  "Allergies & respiratory problems",
                  "PCOS / PCOD & women's health",
                  "Child health & pediatric immunity",
                  "Joint pain & arthritis",
                  "Digestive disorders (IBS, GERD)",
                  "Anxiety, stress & sleep issues",
                ].map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            ),
          },
        ]}
        faqs={[
          {
            question: "Is the online homeopathy consultation in Salem as effective as an in-person visit?",
            answer: `Yes. ${CLINIC_CONFIG.doctorName} conducts a thorough 45–60 minute case-taking that covers your physical symptoms, emotional state, lifestyle, and medical history — the same depth as an in-person visit. The only difference is convenience — you consult from your home in Salem.`,
          },
          {
            question: "How are medicines delivered to Salem?",
            answer: "After your consultation, individually selected constitutional remedies are securely packed and dispatched via speed post or courier. Most Salem patients receive their medicines within 2–3 business days.",
          },
          {
            question: "What are the consultation timings for Salem patients?",
            answer: `Online consultations are available Monday to Saturday, 3:00 PM to 9:00 PM (IST). Book your preferred slot via WhatsApp at ${CLINIC_CONFIG.phone}.`,
          },
        ]}
        relatedLinks={[
          { label: "Homeopathy Doctor in Salem", href: "/homeopathy-doctor-salem/", description: "Learn about Dr. Mohamed Shahid's qualifications and experience" },
          { label: "Homeopathy Hospital in Salem", href: "/homeopathy-hospital-salem/", description: "About Allen Sha Homeopathy practice in Salem" },
          { label: "Online Consultation Fees", href: "/homeopathy-consultation-fees/", description: "Transparent consultation fee structure" },
          { label: "How Online Consultation Works", href: "/how-online-homeopathy-consultation-works/", description: "Step-by-step process explained" },
        ]}
      />
    </>
  );
}
