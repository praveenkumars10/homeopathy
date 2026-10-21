import type { Metadata } from "next";
import { CLINIC_CONFIG } from "@/lib/constants";
import { PageHeader } from "@/components/PageHeader";
import { SeoPageContent } from "@/components/SeoPageContent";
import { HelpCircle, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions About Homeopathy | Comprehensive Q&A",
  description: `Find answers to common questions about homeopathy: how it works, side effects, treatment duration, diet restrictions, allopathic compatibility, and online consultation with ${CLINIC_CONFIG.doctorName}.`,
  keywords: [
    "frequently asked questions about homeopathy",
    "homeopathy FAQs",
    "does homeopathy have side effects",
    "is homeopathy slow",
    "can i drink coffee during homeopathy",
    "homeopathy diet restrictions",
    "is homeopathy scientific",
  ],
  alternates: { canonical: "/frequently-asked-questions-homeopathy/" },
};

export default function FrequentlyAskedQuestionsHomeopathyPage() {
  return (
    <>
      <PageHeader
        title="Frequently Asked Questions About Homeopathy"
        breadcrumbLabel="Homeopathy FAQs"
        backgroundImage="/images/banner_doctor.jpg"
      />
      <SeoPageContent
        h1="Frequently Asked Questions About Homeopathy"
        intro={`Homeopathy is one of the most widely used systems of holistic medicine globally, yet many myths and misconceptions persist. Below, ${CLINIC_CONFIG.doctorName} provides clear, scientifically sound answers to the most common questions patients ask about homeopathic remedies, efficacy, diet rules, and consultation procedures.`}
        highlights={[
          "Scientific explanation of the Law of Similars and potentization",
          "Clarification on treatment speed: acute conditions vs deep chronic diseases",
          "Clear guidance on taking homeopathy alongside prescription allopathic drugs",
          "Facts about dietary restrictions — coffee, raw onions, garlic & camphor",
          "Safety during pregnancy, infancy, childhood, and geriatric care",
          "Details on how online consultations and door-step medicine delivery work",
        ]}
        sections={[
          {
            heading: "Core Principles & How Homeopathy Operates",
            icon: <BookOpen className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <>
                <p className="mb-3">
                  Homeopathy is based on the therapeutic principle <em>Similia Similibus Curentur</em> (&quot;like cures like&quot;), discovered by Dr. Samuel Hahnemann in 1796. A substance capable of producing specific symptoms in a healthy human being can, in micro-diluted potentized doses, cure similar symptoms in a diseased individual.
                </p>
                <p>
                  Rather than chemically paralyzing enzymes or suppressing inflammation with heavy molecular doses, homeopathic remedies act as subtle biological informational triggers that stimulate your innate neuro-endocrine-immune self-healing mechanisms.
                </p>
              </>
            ),
          },
          {
            heading: "Debunking Common Myths About Homeopathy",
            icon: <HelpCircle className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#F4EFE6] border border-[#C98B3E]/20">
                  <h4 className="font-semibold text-[#1F4B3F] text-sm mb-1">
                    Myth 1: &quot;Homeopathy is painfully slow to act.&quot;
                  </h4>
                  <p className="text-xs text-[#5C6659]">
                    <strong>Fact:</strong> In acute conditions like acute viral fevers, toothaches, spasmodic colic, diarrhea, or migraine attacks, the correct homeopathic remedy works within minutes to hours. It only appears &quot;slow&quot; in chronic diseases that have lingered for 10–15 years, where deep constitutional healing naturally requires a few months to rebuild damaged tissues.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F4EFE6] border border-[#C98B3E]/20">
                  <h4 className="font-semibold text-[#1F4B3F] text-sm mb-1">
                    Myth 2: &quot;Homeopathy contains hidden steroids or heavy metals.&quot;
                  </h4>
                  <p className="text-xs text-[#5C6659]">
                    <strong>Fact:</strong> Authentic classical homeopathy uses standardized pharmacopeial dilutions prepared under strict Good Manufacturing Practices (GMP). Remedies contain zero corticosteroids. Genuine homeopaths never add adulterants.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F4EFE6] border border-[#C98B3E]/20">
                  <h4 className="font-semibold text-[#1F4B3F] text-sm mb-1">
                    Myth 3: &quot;You can never drink coffee or eat onions while taking homeopathy.&quot;
                  </h4>
                  <p className="text-xs text-[#5C6659]">
                    <strong>Fact:</strong> You only need a clean mouth 15 to 30 minutes before and after taking your dose. Mild coffee consumption or cooked onions in normal food rarely interfere with modern potentized constitutional medicines. Only strong raw camphor ointments (like Vicks) should be avoided near dose times.
                  </p>
                </div>
              </div>
            ),
          },
        ]}
        faqs={[
          {
            question: "Are homeopathic medicines safe for pregnant women and newborns?",
            answer: "Yes, completely safe. Because homeopathic remedies are ultra-diluted and non-toxic, they pose zero chemical toxicity to the developing fetus or newborn infant. They are frequently used to treat morning sickness, infant colic, teething fever, and diaper rash safely.",
          },
          {
            question: "Can I take allopathic medicine and homeopathy together?",
            answer: "Yes. Homeopathic remedies do not pharmacologically bind with conventional drugs. We recommend maintaining a 30 to 45-minute interval between your allopathic tablet and your homeopathic globules. Never stop essential prescription medicines (like insulin or anti-hypertensives) abruptly.",
          },
          {
            question: "How should I store homeopathic remedies at home?",
            answer: "Store your medicine phials in a cool, dry place away from direct sunlight, moisture, and strong magnetic fields or intense aromatics (like perfume bottles, camphor, or naphthalene balls). Keep the container tightly capped.",
          },
          {
            question: "Why are the pills sweet? Are they safe for diabetic patients?",
            answer: "The white globules are made from pharmaceutical-grade lactose or sucrose globules acting as neutral carriers for a few drops of medicated dilution. The quantity of sugar in 4 tiny pills is minuscule (less than a fraction of a grain of rice) and has negligible effect on blood glucose levels.",
          },
          {
            question: "What is constitutional homeopathy?",
            answer: "Constitutional homeopathy is the highest form of classical prescribing. Instead of simply treating a single organ or symptom, the physician selects a deep-acting remedy matching the patient's physical constitution, emotional temperament, thermal reactions, and genetic predispositions.",
          },
          {
            question: "How do I book an online appointment with Dr. M. Allensha?",
            answer: `You can schedule your appointment directly through our website booking portal or send a message on WhatsApp to ${CLINIC_CONFIG.phone}. Our clinic coordinator will assign you a dedicated 45–60 minute video appointment.`,
          },
        ]}
        relatedLinks={[
          { label: "How Consultation Works", href: "/how-online-homeopathy-consultation-works/", description: "Step-by-step video consult workflow" },
          { label: "Consultation Fees", href: "/homeopathy-consultation-fees/", description: "Transparent package details" },
          { label: "What to Expect", href: "/what-to-expect-homeopathy-consultation/", description: "Details of our case assessment" },
          { label: "Book Consultation", href: "/book-online-homeopathy-appointment/", description: "Reserve your consultation slot" },
        ]}
      />
    </>
  );
}
