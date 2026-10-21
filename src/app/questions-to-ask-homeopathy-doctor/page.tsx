import type { Metadata } from "next";
import { CLINIC_CONFIG } from "@/lib/constants";
import { PageHeader } from "@/components/PageHeader";
import { SeoPageContent } from "@/components/SeoPageContent";
import { HelpCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Questions to Ask a Homeopathy Doctor | Patient Consultation Guide",
  description: `Essential questions to ask your homeopathic doctor during an online consultation. Clarify treatment duration, diet rules, allopathic medicine interactions, side effects, and expectations.`,
  keywords: [
    "questions to ask homeopathy doctor",
    "homeopathic consultation questions",
    "what to ask a homeopath",
    "homeopathy doctor FAQs",
    "understanding homeopathic treatment",
    "homeopathy consultation advice",
  ],
  alternates: { canonical: "/questions-to-ask-homeopathy-doctor/" },
};

export default function QuestionsToAskHomeopathyDoctorPage() {
  return (
    <>
      <PageHeader
        title="Questions to Ask a Homeopathy Doctor"
        breadcrumbLabel="Doctor Questions"
        backgroundImage="/images/banner_doctor.jpg"
      />
      <SeoPageContent
        h1="Essential Questions to Ask a Homeopathy Doctor"
        intro={`An empowered, informed patient achieves the best clinical outcomes. At ${CLINIC_CONFIG.clinicName}, ${CLINIC_CONFIG.doctorName} welcomes thoughtful inquiries and takes the time to explain the rationale behind your constitutional prescription. Here are the most valuable questions you should ask during your appointment.`}
        highlights={[
          "Understand how classical constitutional homeopathy differs from conventional care",
          "Clarify realistic recovery timelines for chronic vs acute conditions",
          "Know how to take, store, and handle homeopathic dilutions and sweet pills",
          "Learn exact food and drink restrictions (coffee, onions, camphor, mint)",
          "Discover how to safely manage your existing allopathic prescription drugs",
          "Know what to do during acute emergency flare-ups during treatment",
        ]}
        sections={[
          {
            heading: "Top 7 Questions Every Patient Should Ask",
            icon: <HelpCircle className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#C98B3E]/20">
                  <h4 className="font-serif font-bold text-[#1F4B3F] text-base mb-1">
                    1. &quot;What is the root cause of my condition from a homeopathic perspective?&quot;
                  </h4>
                  <p className="text-sm text-[#5C6659]">
                    Unlike conventional diagnosis that gives a symptom label like &quot;IBS&quot; or &quot;eczema,&quot; a homeopath looks at constitutional susceptibility (miasmatic background, nervous exhaustion, grief, metabolic stagnation). Understanding this helps you make conscious lifestyle adjustments.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#C98B3E]/20">
                  <h4 className="font-serif font-bold text-[#1F4B3F] text-base mb-1">
                    2. &quot;How long will it take before I notice tangible improvements?&quot;
                  </h4>
                  <p className="text-sm text-[#5C6659]">
                    Acute complaints like viral fevers, throat pain, or recent migraines often improve in hours. Deep chronic conditions like 10-year psoriasis, rheumatoid arthritis, or thyroid disorders require 3 to 6 months of steady constitutional treatment. Asking this establishes realistic milestones.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#C98B3E]/20">
                  <h4 className="font-serif font-bold text-[#1F4B3F] text-base mb-1">
                    3. &quot;Can I continue my regular allopathic prescriptions?&quot;
                  </h4>
                  <p className="text-sm text-[#5C6659]">
                    Never assume you must stop heart, diabetes, thyroid, or psychiatric medications. Ask your homeopath how to coordinate timings (usually leaving a 30 to 60-minute gap between different medications).
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#C98B3E]/20">
                  <h4 className="font-serif font-bold text-[#1F4B3F] text-base mb-1">
                    4. &quot;Are there specific dietary or lifestyle restrictions I must follow?&quot;
                  </h4>
                  <p className="text-sm text-[#5C6659]">
                    Ask about strong odors like raw garlic, raw onions, coffee, camphor (Vicks, tiger balm), and peppermint, which can occasionally antidoting certain delicate botanical potencies.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#C98B3E]/20">
                  <h4 className="font-serif font-bold text-[#1F4B3F] text-base mb-1">
                    5. &quot;What happens if I experience an acute cold, headache, or fever while on treatment?&quot;
                  </h4>
                  <p className="text-sm text-[#5C6659]">
                    Ask whether you should contact the doctor for an acute homeopathic remedy or take conventional SOS relief. Dr. M. Allensha provides prompt guidance for intercurrent acute sickness via WhatsApp.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#C98B3E]/20">
                  <h4 className="font-serif font-bold text-[#1F4B3F] text-base mb-1">
                    6. &quot;Will my condition worsen before it gets better (aggravation)?&quot;
                  </h4>
                  <p className="text-sm text-[#5C6659]">
                    Understanding the difference between a curative homeopathic reaction (a brief, mild flare followed by deep lasting relief) and an actual disease deterioration gives you reassurance and peace of mind.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F4EFE6] border border-[#C98B3E]/20">
                  <h4 className="font-serif font-bold text-[#1F4B3F] text-base mb-1">
                    7. &quot;How frequently will I need follow-up appointments?&quot;
                  </h4>
                  <p className="text-sm text-[#5C6659]">
                    Most constitutional treatments require a follow-up review every 3 to 4 weeks. Ask about the follow-up procedure and whether remedy refills are dispatched automatically.
                  </p>
                </div>
              </div>
            ),
          },
          {
            heading: "Why Transparency Matters at Our Clinic",
            icon: <ShieldCheck className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <p>
                {CLINIC_CONFIG.doctorName} believes in transparent, demystified medical care. You will never be sold unlabelled mystery powders or promised unrealistic 24-hour miracles for 15-year chronic conditions. Every question is answered thoroughly with scientific grounding in classical Hahnemannian principles.
              </p>
            ),
          },
        ]}
        faqs={[
          {
            question: "Is it okay to ask why a specific medicine was chosen?",
            answer: "Absolutely! Dr. M. Allensha is happy to share the homeopathic remedy name and explain the constitutional keynotes that pointed to it.",
          },
          {
            question: "Can I ask questions between follow-up appointments?",
            answer: `Yes. Patients enrolled in active treatment have direct access to our clinic WhatsApp support at ${CLINIC_CONFIG.phone} for quick queries regarding doses, storage, or mild acute symptom changes.`,
          },
        ]}
        relatedLinks={[
          { label: "What to Expect", href: "/what-to-expect-homeopathy-consultation/", description: "The 4 stages of our case taking" },
          { label: "How to Prepare", href: "/how-to-prepare-homeopathy-appointment/", description: "Pre-appointment checklist" },
          { label: "Frequently Asked Questions", href: "/frequently-asked-questions-homeopathy/", description: "Top 20+ general homeopathy answers" },
          { label: "Book Consultation", href: "/book-online-homeopathy-appointment/", description: "Speak with Dr. Allensha" },
        ]}
      />
    </>
  );
}
