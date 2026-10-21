import type { Metadata } from "next";
import { CLINIC_CONFIG } from "@/lib/constants";
import { PageHeader } from "@/components/PageHeader";
import { SeoPageContent } from "@/components/SeoPageContent";
import { CheckSquare, FileText, Camera, Clock, Smartphone, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Prepare for a Homeopathy Appointment | Checklist & Tips",
  description: `Get the most out of your homeopathic consultation with ${CLINIC_CONFIG.doctorName}. Step-by-step preparation checklist: medical reports, symptom timeline, photos, and questions.`,
  keywords: [
    "how to prepare for homeopathy appointment",
    "homeopathic consultation preparation",
    "homeopathy case taking tips",
    "preparing for online homeopathy consultation",
    "what to bring to homeopathy doctor",
  ],
  alternates: { canonical: "/how-to-prepare-homeopathy-appointment/" },
};

export default function HowToPrepareHomeopathyAppointmentPage() {
  return (
    <>
      <PageHeader
        title="How to Prepare for Your Homeopathy Appointment"
        breadcrumbLabel="Prepare for Visit"
        backgroundImage="/images/banner_doctor.jpg"
      />
      <SeoPageContent
        h1="How to Prepare for a Homeopathy Appointment"
        intro={`A classical constitutional homeopathy consultation is an interactive, investigative partnership between you and your physician. By preparing a few details before your video appointment with ${CLINIC_CONFIG.doctorName}, you ensure the most accurate remedy selection and the highest value from your session.`}
        highlights={[
          "Compile a chronological timeline of your symptoms and previous treatments",
          "Gather recent blood tests, scan reports, and prescription lists",
          "Note down unique symptom triggers: weather, time of day, food, and emotions",
          "Take clear, well-lit photos for skin, hair, or external concerns",
          "Ensure a quiet, private room with stable internet connectivity",
          "Write down your questions and treatment expectations in advance",
        ]}
        sections={[
          {
            heading: "Your 5-Step Pre-Appointment Checklist",
            icon: <CheckSquare className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#C98B3E]/20">
                  <h4 className="font-serif font-bold text-[#1F4B3F] text-base mb-1 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#C98B3E]" />
                    1. Organize Previous Medical Records & Lab Reports
                  </h4>
                  <p className="text-sm text-[#5C6659]">
                    Collect any recent blood tests (CBC, thyroid panel, blood sugar, lipid profile, liver/kidney function), ultrasounds, MRI/CT scans, allergy tests, or biopsy reports from the last 1–2 years. You can photograph or scan them as PDFs to send via WhatsApp before the consultation.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#C98B3E]/20">
                  <h4 className="font-serif font-bold text-[#1F4B3F] text-base mb-1 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#C98B3E]" />
                    2. Build a Chronological Symptom Timeline
                  </h4>
                  <p className="text-sm text-[#5C6659]">
                    Reflect on when your symptoms first began. What was happening in your life around that time? Was there an acute infection, a change of job, emotional grief, bereavement, pregnancy, or antibiotic overuse? In homeopathy, the onset context is of monumental importance.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#C98B3E]/20">
                  <h4 className="font-serif font-bold text-[#1F4B3F] text-base mb-1 flex items-center gap-2">
                    <HeartHandshake className="w-4 h-4 text-[#C98B3E]" />
                    3. Observe Your Specific Modalities & Bodily Patterns
                  </h4>
                  <p className="text-sm text-[#5C6659]">
                    Take mental note of: Are your symptoms worse in winter, rainy seasons, or hot summers? Do you crave sweets, salt, spicy foods, or sour items? How is your thirst? Are you someone who feels cold easily (chilly) or cannot tolerate stuffy rooms (warm-blooded)?
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#C98B3E]/20">
                  <h4 className="font-serif font-bold text-[#1F4B3F] text-base mb-1 flex items-center gap-2">
                    <Camera className="w-4 h-4 text-[#C98B3E]" />
                    4. Capture High-Resolution Photos (If Applicable)
                  </h4>
                  <p className="text-sm text-[#5C6659]">
                    If consulting for dermatological conditions (psoriasis, eczema, acne, vitiligo, hair loss, nail fungus), take 2–3 clear pictures in natural daylight without flash or beauty filters and send them ahead of time.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#C98B3E]/20">
                  <h4 className="font-serif font-bold text-[#1F4B3F] text-base mb-1 flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-[#C98B3E]" />
                    5. Set Up a Quiet, Distraction-Free Video Environment
                  </h4>
                  <p className="text-sm text-[#5C6659]">
                    Choose a quiet room where you can speak candidly without family members listening if you wish to discuss personal feelings. Test your phone/laptop microphone and camera, and ensure reliable Wi-Fi or 4G/5G connection.
                  </p>
                </div>
              </div>
            ),
          },
          {
            heading: "Current Medications: Do NOT Stop Them Before Consulting",
            icon: <FileText className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <>
                <p className="mb-3">
                  A common misconception is that patients must stop blood pressure pills, thyroid tablets, insulin, or asthma inhalers before beginning homeopathy. This is untrue and medically dangerous.
                </p>
                <p>
                  Keep a list of all your current allopathic, ayurvedic, or nutritional supplements with their exact dosages. {CLINIC_CONFIG.doctorName} will review them during the call. Homeopathic remedies do not chemically interact with allopathic medications when administered properly.
                </p>
              </>
            ),
          },
        ]}
        faqs={[
          {
            question: "How long before the consultation should I send my documents?",
            answer: "Sending your reports, photos, and current medication list 2 to 4 hours prior to your scheduled consultation via WhatsApp is ideal, as it allows Dr. M. Allensha to review your case preliminary details in advance.",
          },
          {
            question: "Can family members join the online consultation?",
            answer: "Yes! For children or elderly parents, having a family member or caregiver present to assist with case history details and child milestones is actively welcomed and encouraged.",
          },
          {
            question: "What if I have poor internet connection on the day of the call?",
            answer: "If video drops due to temporary network issues, we smoothly switch to a high-definition WhatsApp voice or direct phone consultation while reviewing your pre-submitted photos and reports.",
          },
        ]}
        relatedLinks={[
          { label: "What to Expect", href: "/what-to-expect-homeopathy-consultation/", description: "Detailed guide to the consultation" },
          { label: "Questions to Ask Doctor", href: "/questions-to-ask-homeopathy-doctor/", description: "Smart questions for your doctor" },
          { label: "How Online Consult Works", href: "/how-online-homeopathy-consultation-works/", description: "Patient journey & delivery" },
          { label: "Book Consultation", href: "/book-online-homeopathy-appointment/", description: "Select your preferred slot" },
        ]}
      />
    </>
  );
}
