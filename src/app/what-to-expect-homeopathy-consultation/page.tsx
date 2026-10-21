import type { Metadata } from "next";
import { CLINIC_CONFIG } from "@/lib/constants";
import { PageHeader } from "@/components/PageHeader";
import { SeoPageContent } from "@/components/SeoPageContent";
import { Clock, HelpCircle, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "What to Expect During a Homeopathy Consultation | Comprehensive Patient Guide",
  description: `New to homeopathy? Learn what happens during a classical constitutional consultation with ${CLINIC_CONFIG.doctorName}. Discover case taking steps, questions asked, duration, and follow-ups.`,
  keywords: [
    "what to expect homeopathy consultation",
    "homeopathic case taking process",
    "homeopathy appointment questions",
    "first homeopathy consultation",
    "what happens in homeopathy appointment",
    "homeopathic doctor case assessment",
  ],
  alternates: { canonical: "/what-to-expect-homeopathy-consultation/" },
};

export default function WhatToExpectHomeopathyConsultationPage() {
  return (
    <>
      <PageHeader
        title="What to Expect During a Homeopathy Consultation"
        breadcrumbLabel="What to Expect"
        backgroundImage="/images/banner_doctor.jpg"
      />
      <SeoPageContent
        h1="What to Expect During a Homeopathy Consultation"
        intro={`If you have only ever experienced 3-minute conventional doctor visits where prescriptions are written before you finish describing your pain, your first consultation with ${CLINIC_CONFIG.doctorName} will be a refreshing, transformative experience. Learn exactly what takes place during our in-depth 45–60 minute session.`}
        highlights={[
          "Unrushed 45 to 60-minute one-on-one session with Dr. M. Allensha",
          "Thorough exploration of physical symptoms, emotional state & medical history",
          "No judgment — a compassionate, confidential, patient-first environment",
          "Clear explanation of the root cause behind your chronic complaints",
          "Individualized constitutional prescription tailored specifically to you",
          "Detailed dietary guidelines, lifestyle tips & structured follow-up plan",
        ]}
        sections={[
          {
            heading: "The 4 Main Stages of Your Homeopathic Consultation",
            icon: <Clock className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#C98B3E]/20">
                  <h4 className="font-serif font-bold text-[#1F4B3F] text-base mb-1">
                    Stage 1: Primary Complaint & Symptom Modalities (15–20 Mins)
                  </h4>
                  <p className="text-sm text-[#5C6659]">
                    We begin with your chief concern. Rather than just noting down &quot;migraine&quot; or &quot;skin rash,&quot; {CLINIC_CONFIG.doctorName} explores your sensation (throbbing, burning, stitching), location, timing, and exact modalities: what makes it better (warmth, cold, resting) or worse (movement, stress, certain foods).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#C98B3E]/20">
                  <h4 className="font-serif font-bold text-[#1F4B3F] text-base mb-1">
                    Stage 2: Physical Generals & Bodily Functions (10–15 Mins)
                  </h4>
                  <p className="text-sm text-[#5C6659]">
                    In classical homeopathy, your whole body works as one integrated unit. We examine your appetite, specific food cravings or aversions, thirst patterns, digestion, bowel habits, sweat distribution, sleep architecture, and how your body reacts to weather, heat, and cold.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#C98B3E]/20">
                  <h4 className="font-serif font-bold text-[#1F4B3F] text-base mb-1">
                    Stage 3: Emotional Temperament & Life Stressors (10–15 Mins)
                  </h4>
                  <p className="text-sm text-[#5C6659]">
                    The mind and body are inseparable. We explore your emotional nature: how you react to anger, grief, anxiety, pressure, or solitude. Chronic health complaints often trace back to unresolved emotional trauma, work burnout, or grief. Understanding your psychological state is essential to finding your constitutional simillimum.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#C98B3E]/20">
                  <h4 className="font-serif font-bold text-[#1F4B3F] text-base mb-1">
                    Stage 4: Past Medical History, Family History & Synthesis (10 Mins)
                  </h4>
                  <p className="text-sm text-[#5C6659]">
                    We review previous illnesses, surgical histories, childhood vaccines, suppressed eruptions, and familial genetic predispositions (asthma, diabetes, arthritis, cancer diathesis) to map your chronic miasmatic background before finalizing your prescription.
                  </p>
                </div>
              </div>
            ),
          },
          {
            heading: "Why Do Homeopaths Ask Such Detailed Questions?",
            icon: <HelpCircle className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <>
                <p className="mb-3">
                  In conventional medicine, ten patients with headaches all receive paracetamol or NSAIDs. In homeopathy, ten patients with headaches may receive ten completely different medicines.
                </p>
                <p>
                  One person may have a right-sided headache pounding with sun exposure that is relieved by pressure (Belladonna or Sanguinaria). Another person may have a left-sided headache after mental grief and weepiness, relieved by fresh air (Pulsatilla or Ignatia). The unique, individual peculiarities of your illness are what lead the physician to your exact curative remedy.
                </p>
              </>
            ),
          },
          {
            heading: "Post-Consultation & Medicine Delivery",
            icon: <CheckCircle2 className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <p>
                After the call finishes, {CLINIC_CONFIG.doctorName} repertorizes your symptoms using classical homoeopathic reference texts. Your customized prescription is packed with clear dosage instructions (e.g., 4 pills twice daily on a clean tongue) and shipped via registered speed post or courier directly to your address.
              </p>
            ),
          },
        ]}
        faqs={[
          {
            question: "Do I need to be completely open about personal matters?",
            answer: "Yes, to the best of your comfort. Everything shared during your consultation with Dr. M. Allensha is protected under strict doctor-patient confidentiality. The more honest you are about your emotional state, stress, and lifestyle, the more accurate the remedy selection.",
          },
          {
            question: "How long does a follow-up consultation take?",
            answer: "While the initial constitutional consultation lasts 45 to 60 minutes, follow-up consultations generally take 15 to 25 minutes to assess progress, evaluate symptom changes, and adjust potency if needed.",
          },
          {
            question: "Will I receive a written prescription or diet chart?",
            answer: "Yes. Along with your dispatched medicines, you receive clear written instructions on how to take the remedies, dietary restrictions (such as avoiding raw camphor or strong coffee around dose times), and storage guidelines.",
          },
        ]}
        relatedLinks={[
          { label: "How to Prepare for Appointment", href: "/how-to-prepare-homeopathy-appointment/", description: "Checklist before your consultation" },
          { label: "Questions to Ask Doctor", href: "/questions-to-ask-homeopathy-doctor/", description: "Key questions for your appointment" },
          { label: "Online vs In-Person", href: "/online-vs-in-person-homeopathy-consultation/", description: "Compare online and clinic visits" },
          { label: "Book Consultation", href: "/book-online-homeopathy-appointment/", description: "Book your 45-60 min session" },
        ]}
      />
    </>
  );
}
