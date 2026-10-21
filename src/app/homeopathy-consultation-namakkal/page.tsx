import type { Metadata } from "next";
import { CLINIC_CONFIG } from "@/lib/constants";
import { PageHeader } from "@/components/PageHeader";
import { SeoPageContent } from "@/components/SeoPageContent";
import { MapPin, Heart, Clock, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Online Homeopathy Consultation in Namakkal | Dr. M. Allensha",
  description: `Looking for an expert homeopathy doctor in Namakkal? Consult Dr. M. Allensha online from Namakkal, Tiruchengode, Rasipuram & Paramathi. Video consultation + door-step medicine delivery.`,
  keywords: [
    "homeopathy consultation in namakkal",
    "homeopathy doctor in namakkal",
    "online homeopathy namakkal",
    "best homeopathy clinic namakkal",
    "homeopathic treatment tiruchengode",
    "homeopathy rasipuram",
  ],
  alternates: { canonical: "/homeopathy-consultation-namakkal/" },
};

export default function HomeopathyConsultationNamakkalPage() {
  return (
    <>
      <PageHeader
        title="Homeopathy Consultation in Namakkal"
        breadcrumbLabel="Namakkal Care"
        backgroundImage="/images/banner_doctor.jpg"
      />
      <SeoPageContent
        h1="Online Homeopathy Consultation in Namakkal"
        intro={`Residents of Namakkal district — including Tiruchengode, Rasipuram, Paramathi Velur, and Mohanur — can now access senior homeopathic care with ${CLINIC_CONFIG.doctorName} directly from the comfort of their home through secure online video consultations.`}
        highlights={[
          "Convenient access for patients throughout Namakkal, Tiruchengode & Rasipuram",
          "Comprehensive 45–60 minute classical constitutional evaluation",
          "High-grade German and authentic homeopathic remedies dispatched promptly",
          "Doorstep speed post / courier delivery across all Namakkal postal codes",
          "Zero travel time or crowded waiting room delays",
          "Dedicated post-consultation WhatsApp follow-up support",
        ]}
        sections={[
          {
            heading: "Specialized Homeopathic Care for Namakkal District",
            icon: <MapPin className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <>
                <p className="mb-3">
                  Namakkal is known as a dynamic industrial and transport hub with thriving agriculture, poultry, and educational institutions. However, finding specialized classical homeopathic physicians who dedicate 45 to 60 minutes per individual case can be challenging locally.
                </p>
                <p>
                  With {CLINIC_CONFIG.doctorName}&apos;s online practice based nearby in Salem, Namakkal residents receive individualized constitutional healthcare without having to undertake highway travel, wait in busy outpatient queues, or disrupt daily business and work commitments.
                </p>
              </>
            ),
          },
          {
            heading: "Conditions Frequently Consulted by Namakkal Patients",
            icon: <Heart className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <div className="space-y-3">
                <p>
                  Our online clinic regularly attends to patients across Namakkal district for acute flare-ups and long-standing chronic ailments:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  {[
                    "Respiratory allergies, allergic rhinitis & dust sensitivity",
                    "Psoriasis, chronic eczema, urticaria & ringworm",
                    "Digestive disorders — acidity, GERD, gas & IBS",
                    "Kidney stones & recurrent urinary tract infections",
                    "Cervical spondylosis, lumbar pain & osteoarthritis",
                    "Thyroid dysfunction, PCOD & hormonal irregular cycles",
                    "Pediatric immunity issues, adenoids & recurrent cough",
                    "Stress-induced migraine, insomnia & chronic fatigue",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ),
          },
          {
            heading: "Medicine Courier & Speed Post to Namakkal",
            icon: <Truck className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <p>
                Following your video consultation with {CLINIC_CONFIG.doctorName}, your individualized remedy is freshly prepared in strict hygienic conditions using authentic pharmacopeial dilutions and delivered via registered Indian Speed Post or express professional courier directly to your doorstep in Namakkal, Tiruchengode, or surrounding rural taluks, usually within 24 to 48 hours.
              </p>
            ),
          },
          {
            heading: "Convenient Consultation Hours for Working Professionals",
            icon: <Clock className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <p>
                Appointments are held from 3:00 PM to 9:00 PM, Monday through Saturday. This allows entrepreneurs, truck transport owners, poultry professionals, teachers, and students in Namakkal to consult comfortably after work hours without losing productive daytime hours.
              </p>
            ),
          },
        ]}
        faqs={[
          {
            question: "How do I consult Dr. M. Allensha from Namakkal?",
            answer: `Simply click 'Book Online Consultation' or reach out via WhatsApp at ${CLINIC_CONFIG.phone}. Choose a convenient slot between 3:00 PM and 9:00 PM. You will receive a video call link (Google Meet / WhatsApp Video) for your detailed 45–60 minute consultation.`,
          },
          {
            question: "How long does medicine delivery take to reach Namakkal?",
            answer: "Because our dispensary is located in Salem, parcels dispatched to Namakkal, Tiruchengode, and Rasipuram typically arrive within 24 to 48 hours via express courier or Speed Post.",
          },
          {
            question: "Can I consult for chronic diseases like Psoriasis or Thyroid issues?",
            answer: "Yes. Classical constitutional homeopathy is exceptionally suited for chronic conditions. Dr. M. Allensha analyzes your full history, lifestyle, emotional triggers, and pathology to prescribe targeted constitutional medicine.",
          },
        ]}
        relatedLinks={[
          { label: "Online Consultation Salem", href: "/online-homeopathy-consultation-salem/", description: "Primary regional practice" },
          { label: "Consultation in Attur", href: "/online-homeopathy-consultation-attur/", description: "Attur taluk care" },
          { label: "Consultation Fees", href: "/homeopathy-consultation-fees/", description: "Transparent fee structure" },
          { label: "Book Consultation", href: "/book-online-homeopathy-appointment/", description: "Reserve your slot today" },
        ]}
      />
    </>
  );
}
