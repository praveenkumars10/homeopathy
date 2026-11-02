import type { Metadata } from "next";
import { CLINIC_CONFIG } from "@/lib/constants";
import { PageHeader } from "@/components/PageHeader";
import { SeoPageContent } from "@/components/SeoPageContent";
import { MapPin, Video, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Online Homoeopathy Consultation in Tamil Nadu | Allen Sha Homoeopathy",
  description: `Book online homoeopathy consultation across Tamil Nadu with ${CLINIC_CONFIG.doctorName}, BHMS, MD(Hom), Gold Medalist. Serving Salem, Chennai, Coimbatore, Madurai, Trichy & all Tamil Nadu. Doorstep medicine delivery.`,
  keywords: [
    "online homoeopathy consultation Tamil Nadu",
    "homoeopathy doctor Tamil Nadu online",
    "best homoeopathic doctor Tamil Nadu",
    "homoeopathy video consultation Tamil Nadu",
    "Tamil Nadu homoeopathy treatment online",
  ],
  alternates: { canonical: "/online-homeopathy-consultation-tamil-nadu/" },
};

export default function OnlineConsultationTamilNaduPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: CLINIC_CONFIG.clinicName,
    description: "Online homoeopathy consultation across Tamil Nadu",
    url: `${CLINIC_CONFIG.siteUrl}/online-homoeopathy-consultation-tamil-nadu/`,
    telephone: CLINIC_CONFIG.phoneClean,
    medicalSpecialty: "Homoeopathic",
    areaServed: {
      "@type": "State",
      name: "Tamil Nadu",
      containedInPlace: { "@type": "Country", name: "India" },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        title="Online Homoeopathy Consultation in Tamil Nadu"
        breadcrumbLabel="Consultation — Tamil Nadu"
        backgroundImage="/images/hero-consultation.jpg"
      />
      <SeoPageContent
        h1="Online Homoeopathy Consultation in Tamil Nadu"
        intro={`No matter where you are in Tamil Nadu — Salem, Chennai, Coimbatore, Madurai, Trichy, Tirunelveli, Erode, Vellore, or any district — you can consult with ${CLINIC_CONFIG.doctorName}, BHMS, MD(Hom), Gold Medalist, through our 100% online consultation service. Medicines delivered to your doorstep.`}
        highlights={[
          "Serving all 38 districts of Tamil Nadu online",
          `Led by ${CLINIC_CONFIG.doctorName}, Gold Medalist — ${CLINIC_CONFIG.experienceYears}+ years experience`,
          "Video & phone consultations — Mon to Sat, 3 PM – 9 PM",
          "Medicines dispatched via speed post / courier across Tamil Nadu",
          "Constitutional homoeopathy — personalized for each patient",
          `${CLINIC_CONFIG.stats.patientsTreated.toLocaleString()}+ patients treated state-wide`,
        ]}
        sections={[
          {
            heading: "Covering All Major Cities in Tamil Nadu",
            icon: <MapPin className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <>
                <p className="mb-3">
                  Our online consultation service brings expert homoeopathic care to every corner of Tamil Nadu. Patients from the following cities and districts regularly consult with us:
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    "Salem", "Chennai", "Coimbatore", "Madurai", "Trichy",
                    "Tirunelveli", "Erode", "Vellore", "Dindigul", "Namakkal",
                    "Thanjavur", "Dharmapuri", "Attur", "Tirupur", "Kanchipuram",
                  ].map((city, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />{city}</li>
                  ))}
                </ul>
              </>
            ),
          },
          {
            heading: "How It Works for Tamil Nadu Patients",
            icon: <Video className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <ol className="list-decimal list-inside space-y-2">
                <li><strong>WhatsApp Booking:</strong> Contact {CLINIC_CONFIG.phone} with your name, location, and primary concern.</li>
                <li><strong>Online Consultation:</strong> Join a 45–60 minute video or phone session with {CLINIC_CONFIG.doctorName}.</li>
                <li><strong>Doorstep Delivery:</strong> Your personalized medicines are couriered to your Tamil Nadu address with tracking.</li>
                <li><strong>Ongoing Care:</strong> Regular follow-ups and WhatsApp support throughout your treatment.</li>
              </ol>
            ),
          },
          {
            heading: "Why Tamil Nadu Patients Choose Us",
            icon: <ShieldCheck className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Tamil Nadu Homoeopathy Medical Council registered (Reg. No: {CLINIC_CONFIG.registrationNo})</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />No language barrier — consultations in Tamil and English</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Genuine constitutional approach — no generic prescriptions</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Fast medicine delivery across Tamil Nadu (2–4 days)</li>
              </ul>
            ),
          },
        ]}
        faqs={[
          {
            question: "Is online homoeopathy consultation available throughout Tamil Nadu?",
            answer: "Yes. Our 100% online service covers all 38 districts of Tamil Nadu. You can consult from any city, town, or village via video or phone call.",
          },
          {
            question: "Can the consultation be done in Tamil?",
            answer: `Yes. ${CLINIC_CONFIG.doctorName} is fluent in Tamil and English. You can communicate in whichever language you're most comfortable with.`,
          },
        ]}
        relatedLinks={[
          { label: "Consultation in Salem", href: "/online-homeopathy-consultation-salem/", description: "Online homoeopathy from Salem" },
          { label: "Consultation in Attur", href: "/online-homeopathy-consultation-attur/", description: "Online homoeopathy from Attur" },
          { label: "Consultation in Namakkal", href: "/homeopathy-consultation-namakkal/", description: "Online homoeopathy from Namakkal" },
          { label: "Book an Appointment", href: "/book-online-homeopathy-appointment/", description: "Schedule your consultation" },
        ]}
      />
    </>
  );
}
