import type { Metadata } from "next";
import { CLINIC_CONFIG } from "@/lib/constants";
import { PageHeader } from "@/components/PageHeader";
import { SeoPageContent } from "@/components/SeoPageContent";
import { Calendar, Video, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Book an Online Homeopathy Appointment | Allen Sha Homeopathy",
  description: `Book an online homeopathy appointment with ${CLINIC_CONFIG.doctorName}, BHMS, MD(Hom), Gold Medalist. Video or phone consultation. Mon–Sat, 3 PM – 9 PM. WhatsApp booking available. Medicines delivered to your doorstep.`,
  keywords: [
    "book homeopathy appointment online",
    "online homeopathy appointment",
    "schedule homeopathy consultation",
    "book homeopathy doctor online",
    "WhatsApp homeopathy appointment",
  ],
  alternates: { canonical: "/book-online-homeopathy-appointment/" },
};

export default function BookAppointmentPage() {
  return (
    <>
      <PageHeader
        title="Book an Online Homeopathy Appointment"
        breadcrumbLabel="Book Appointment"
        backgroundImage="/images/banner_doctor.jpg"
      />
      <SeoPageContent
        h1="Book an Online Homeopathy Appointment"
        intro={`Booking your online homeopathy appointment with ${CLINIC_CONFIG.doctorName} is simple and convenient. Whether you prefer a video call or phone consultation, you can schedule your appointment via WhatsApp and receive your medicines at your doorstep.`}
        highlights={[
          "Book via WhatsApp — quick, simple, and direct",
          "Choose video call (Google Meet / WhatsApp Video) or phone call",
          "Available Monday to Saturday, 3:00 PM – 9:00 PM",
          "45–60 minute detailed consultation",
          "Medicines dispatched to your doorstep with tracking",
          "Follow-up support included throughout your treatment",
        ]}
        sections={[
          {
            heading: "How to Book Your Appointment",
            icon: <Calendar className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <ol className="list-decimal list-inside space-y-3">
                <li><strong>Send a WhatsApp Message:</strong> Contact us at {CLINIC_CONFIG.phone}. Share your name, age, and primary health concern.</li>
                <li><strong>Choose Your Preferred Slot:</strong> Select a convenient date and time within our consultation hours (Mon–Sat, 3 PM – 9 PM).</li>
                <li><strong>Select Consultation Mode:</strong> Video call (Google Meet or WhatsApp Video) or phone call — whichever suits you.</li>
                <li><strong>Confirmation:</strong> You&apos;ll receive a confirmation message with your appointment details and joining instructions.</li>
                <li><strong>Attend Your Consultation:</strong> Join at your scheduled time for a thorough 45–60 minute session with {CLINIC_CONFIG.doctorName}.</li>
              </ol>
            ),
          },
          {
            heading: "What Happens After Your Appointment",
            icon: <MessageCircle className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Your prescribed constitutional remedies are individually packed</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Medicines dispatched via speed post / courier with tracking</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Clear dosage instructions provided via WhatsApp</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Ongoing WhatsApp support for any queries between follow-ups</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Follow-up consultation scheduled to track your progress</li>
              </ul>
            ),
          },
          {
            heading: "Consultation Mode Options",
            icon: <Video className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#E8F0EB] rounded-xl p-4">
                  <h3 className="font-serif font-semibold text-[#1F4B3F] mb-1">📹 Video Consultation</h3>
                  <p className="text-sm text-[#5C6659]">Face-to-face consultation via Google Meet or WhatsApp Video. Ideal for skin conditions and detailed case assessment.</p>
                </div>
                <div className="bg-[#E8F0EB] rounded-xl p-4">
                  <h3 className="font-serif font-semibold text-[#1F4B3F] mb-1">📞 Phone Consultation</h3>
                  <p className="text-sm text-[#5C6659]">Voice-only consultation via regular phone call. Suitable for follow-ups and patients who prefer audio consultations.</p>
                </div>
              </div>
            ),
          },
        ]}
        faqs={[
          {
            question: "How do I book an appointment?",
            answer: `Send a WhatsApp message to ${CLINIC_CONFIG.phone} with your name, age, and health concern. We'll confirm your appointment slot within a few hours.`,
          },
          {
            question: "What are the consultation timings?",
            answer: "Online consultations are available Monday to Saturday, 3:00 PM to 9:00 PM (IST).",
          },
          {
            question: "Can I reschedule my appointment?",
            answer: "Yes, simply inform us via WhatsApp at least 4 hours before your scheduled time and we'll arrange an alternative slot.",
          },
        ]}
        relatedLinks={[
          { label: "How Consultation Works", href: "/how-online-homeopathy-consultation-works/", description: "Detailed walkthrough of the process" },
          { label: "Consultation Fees", href: "/homeopathy-consultation-fees/", description: "Transparent pricing" },
          { label: "What to Expect", href: "/what-to-expect-homeopathy-consultation/", description: "Prepare for your first appointment" },
          { label: "Contact Us", href: "/contact/", description: "Get in touch directly" },
        ]}
      />
    </>
  );
}
