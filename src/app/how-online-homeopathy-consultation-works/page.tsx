import type { Metadata } from "next";
import { CLINIC_CONFIG } from "@/lib/constants";
import { PageHeader } from "@/components/PageHeader";
import { SeoPageContent } from "@/components/SeoPageContent";
import { Video, Clock, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "How Online Homeopathy Consultation Works | Step-by-Step Guide",
  description: `Learn how online homeopathy consultation works at ${CLINIC_CONFIG.clinicName}. Step-by-step guide: WhatsApp booking, 45–60 min video consultation with ${CLINIC_CONFIG.doctorName}, doorstep medicine delivery & follow-up care.`,
  keywords: [
    "how online homeopathy consultation works",
    "online homeopathy process",
    "homeopathy video consultation steps",
    "homeopathy consultation process",
    "what happens in homeopathy consultation",
  ],
  alternates: { canonical: "/how-online-homeopathy-consultation-works/" },
};

export default function HowOnlineConsultationWorksPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Get an Online Homeopathy Consultation",
    description: `Step-by-step guide to online homeopathy consultation at ${CLINIC_CONFIG.clinicName}`,
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Book via WhatsApp",
        text: `Send a WhatsApp message to ${CLINIC_CONFIG.phone} with your name, age, and health concern.`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Join the Video Consultation",
        text: "Connect with the doctor via Google Meet or WhatsApp Video for a 45–60 minute session.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Receive Medicines at Doorstep",
        text: "Individualized constitutional remedies are packed and couriered to your address.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Follow-Up & Monitoring",
        text: "Scheduled follow-up consultations and ongoing WhatsApp support.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        title="How Online Homeopathy Consultation Works"
        breadcrumbLabel="How It Works"
        backgroundImage="/images/hero-consultation.jpg"
      />
      <SeoPageContent
        h1="How Online Homeopathy Consultation Works"
        intro={`Wondering how an online homeopathy consultation works? It's simple, secure, and just as effective as an in-person visit. Here's a complete walkthrough of the process at ${CLINIC_CONFIG.clinicName}.`}
        sections={[
          {
            heading: "Step 1: Book Your Appointment via WhatsApp",
            icon: <Clock className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <>
                <p className="mb-2">
                  The booking process is intentionally simple. Send a WhatsApp message to <strong>{CLINIC_CONFIG.phone}</strong> with:
                </p>
                <ul className="space-y-1 ml-4">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Your full name and age</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Primary health concern</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Preferred date and time (Mon–Sat, 3 PM – 9 PM)</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Preferred mode: Video call or phone call</li>
                </ul>
                <p className="mt-2">You&apos;ll receive confirmation within a few hours with your slot details.</p>
              </>
            ),
          },
          {
            heading: "Step 2: Join Your Video or Phone Consultation",
            icon: <Video className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <>
                <p className="mb-2">
                  At your scheduled time, join the consultation via Google Meet or WhatsApp Video. {CLINIC_CONFIG.doctorName} will spend 45–60 minutes understanding your complete health picture:
                </p>
                <ul className="space-y-1 ml-4">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Detailed discussion of current symptoms and medical history</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Understanding your emotional state and stress levels</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Sleep patterns, appetite, and lifestyle factors</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Family medical history and constitutional assessment</li>
                </ul>
              </>
            ),
          },
          {
            heading: "Step 3: Doorstep Medicine Delivery",
            icon: <Package className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <>
                <p className="mb-2">
                  After your consultation, {CLINIC_CONFIG.doctorName} selects your individualized constitutional remedy based on classical repertory analysis. Your medicines are:
                </p>
                <ul className="space-y-1 ml-4">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Securely packed with clear dosage instructions</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Dispatched via speed post or courier with tracking</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Delivered to your doorstep across India (typically 2–5 days)</li>
                </ul>
              </>
            ),
          },
          {
            heading: "Step 4: Follow-Up & Ongoing Care",
            content: (
              <p>
                Healing is a journey, not a one-time event. After your initial consultation, {CLINIC_CONFIG.doctorName} schedules regular follow-up sessions to monitor your progress. Between follow-ups, you have ongoing WhatsApp support for any questions about your medicine or symptoms. Potency and remedies are adjusted as your constitutional vitality strengthens.
              </p>
            ),
          },
        ]}
        faqs={[
          {
            question: "Do I need any special equipment for the video consultation?",
            answer: "No special equipment is needed. A smartphone, tablet, or laptop with a camera and internet connection is all you need. We use Google Meet or WhatsApp Video, both of which are free.",
          },
          {
            question: "How long does each consultation take?",
            answer: `First consultations typically last 45–60 minutes for a thorough case assessment. Follow-up consultations are usually 15–20 minutes.`,
          },
          {
            question: "Is the online consultation confidential?",
            answer: "Absolutely. All consultations are conducted privately between you and the doctor. We maintain strict medical confidentiality standards.",
          },
        ]}
        relatedLinks={[
          { label: "Book an Appointment", href: "/book-online-homeopathy-appointment/", description: "Schedule your online consultation" },
          { label: "Consultation Fees", href: "/homeopathy-consultation-fees/", description: "Transparent fee structure" },
          { label: "What to Expect", href: "/what-to-expect-homeopathy-consultation/", description: "Prepare for your first visit" },
          { label: "How to Prepare", href: "/how-to-prepare-homeopathy-appointment/", description: "Tips for your appointment" },
        ]}
      />
    </>
  );
}
