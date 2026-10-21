import type { Metadata } from "next";
import { CLINIC_CONFIG } from "@/lib/constants";
import { PageHeader } from "@/components/PageHeader";
import { SeoPageContent } from "@/components/SeoPageContent";
import { IndianRupee, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Online Homeopathy Consultation Fees | Allen Sha Homeopathy",
  description: `Online homeopathy consultation fees at ${CLINIC_CONFIG.clinicName}. Transparent pricing for video & phone consultations with ${CLINIC_CONFIG.doctorName}. Includes medicines and doorstep delivery. No hidden charges.`,
  keywords: [
    "homeopathy consultation fees",
    "online homeopathy consultation cost",
    "homeopathy doctor fees",
    "homeopathic treatment cost",
    "Allen Sha Homeopathy fees",
  ],
  alternates: { canonical: "/homeopathy-consultation-fees/" },
};

export default function ConsultationFeesPage() {
  return (
    <>
      <PageHeader
        title="Online Homeopathy Consultation Fees"
        breadcrumbLabel="Consultation Fees"
        backgroundImage="/images/banner_treatments.jpg"
      />
      <SeoPageContent
        h1="Online Homeopathy Consultation Fees"
        intro={`${CLINIC_CONFIG.clinicName} believes in transparent, honest pricing. Below you'll find our consultation fee structure. There are no hidden charges — what you see is what you pay.`}
        highlights={[
          "Transparent fees with no hidden costs",
          "Consultation fees include detailed case assessment",
          "Medicine costs and courier charges quoted separately",
          "Payment via UPI, bank transfer, or online methods",
          "Affordable follow-up consultation rates",
          "No unnecessary repeat fees for brief queries",
        ]}
        sections={[
          {
            heading: "What the Consultation Fee Includes",
            icon: <CheckCircle2 className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <>
                <p className="mb-3">
                  Your consultation fee covers a thorough 45–60 minute session with {CLINIC_CONFIG.doctorName}. This includes:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Complete constitutional case-taking and symptom analysis</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Individualized remedy selection using classical repertory methods</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Prescription and dosage instructions</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />WhatsApp follow-up support between scheduled visits</li>
                </ul>
                <p className="mt-3 text-sm text-[#5C6659]">
                  <strong>Note:</strong> Medicine costs and courier/delivery charges are separate and quoted transparently after your consultation.
                </p>
              </>
            ),
          },
          {
            heading: "How to Know the Exact Fees",
            icon: <IndianRupee className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <p>
                For exact consultation and medicine fees, please reach out to us directly via WhatsApp at <strong>{CLINIC_CONFIG.phone}</strong>. We will share the complete fee breakdown before you book your appointment. We believe in full transparency — you&apos;ll know the cost before you commit.
              </p>
            ),
          },
          {
            heading: "Payment Methods Accepted",
            icon: <ShieldCheck className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />UPI (Google Pay, PhonePe, Paytm)</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Bank transfer (NEFT / IMPS)</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />Online payment links</li>
              </ul>
            ),
          },
        ]}
        faqs={[
          {
            question: "Are there any hidden charges?",
            answer: "No. We quote the consultation fee, medicine cost, and delivery charges separately and transparently before your appointment. There are no surprise charges.",
          },
          {
            question: "Is the follow-up consultation at the same fee?",
            answer: "Follow-up consultations are typically shorter (15–20 minutes) and are priced lower than the initial consultation. Exact rates are shared when you book.",
          },
          {
            question: "Do I pay before or after the consultation?",
            answer: "Payment is typically made before the consultation via UPI or bank transfer. You'll receive payment details when your appointment is confirmed.",
          },
        ]}
        relatedLinks={[
          { label: "Book an Appointment", href: "/book-online-homeopathy-appointment/", description: "Schedule your consultation" },
          { label: "How Consultation Works", href: "/how-online-homeopathy-consultation-works/", description: "Understand the full process" },
          { label: "What to Expect", href: "/what-to-expect-homeopathy-consultation/", description: "Prepare for your first visit" },
          { label: "Contact Us", href: "/contact/", description: "Reach out for fee enquiries" },
        ]}
      />
    </>
  );
}
