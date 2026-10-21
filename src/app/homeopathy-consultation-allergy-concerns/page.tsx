import type { Metadata } from "next";
import { CLINIC_CONFIG } from "@/lib/constants";
import { PageHeader } from "@/components/PageHeader";
import { SeoPageContent } from "@/components/SeoPageContent";
import { Wind, ShieldCheck, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Homeopathy Consultation for Allergy Concerns | Rhinitis, Asthma & Dust Allergy",
  description: `Permanent, non-drowsy allergy relief through classical homeopathy with ${CLINIC_CONFIG.doctorName}. Treat allergic rhinitis, frequent sneezing, dust allergy, asthma, urticaria & food intolerances.`,
  keywords: [
    "homeopathy for allergy",
    "allergic rhinitis homeopathy treatment",
    "homeopathy dust allergy cure",
    "asthma homeopathic doctor online",
    "sinusitis homeopathy salem",
    "chronic sneezing homeopathy",
    "homeopathic anti-allergy doctor",
  ],
  alternates: { canonical: "/homeopathy-consultation-allergy-concerns/" },
};

export default function HomeopathyConsultationAllergyConcernsPage() {
  return (
    <>
      <PageHeader
        title="Homeopathy for Allergy Concerns"
        breadcrumbLabel="Allergy Care"
        backgroundImage="/images/banner_doctor.jpg"
      />
      <SeoPageContent
        h1="Homeopathy Consultation for Allergy Concerns"
        intro={`Tired of taking daily antihistamines, nasal sprays, and inhalers that only offer temporary relief while causing drowsiness? ${CLINIC_CONFIG.doctorName} treats allergy hypersensitivity at the immune root through constitutional homeopathy — helping your immune system stop overreacting to harmless airborne particles and environmental allergens.`}
        highlights={[
          "Long-term desensitization of the immune response naturally",
          "100% non-drowsy, non-sedating, non-steroidal homeopathic medicines",
          "Permanent relief for allergic rhinitis, morning sneezing & watery eyes",
          "Clinically proven constitutional care for bronchial asthma and wheezing",
          "Effective for chronic frontal sinusitis, nasal polyps & adenoids",
          "Safe for infants, school-going children, and adults",
        ]}
        sections={[
          {
            heading: "Common Allergic Conditions We Successfully Treat",
            icon: <Wind className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <div className="space-y-3">
                <p>
                  Allergies are not diseases of the nose, lungs, or skin alone; they reflect an hyper-reactive immune system. We provide individualized constitutional care for:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  {[
                    "Allergic Rhinitis — bouts of 20–30 morning sneezes, runny nose & itchy palate",
                    "Dust mite, pollen, grass, and animal dander sensitivity",
                    "Chronic Sinusitis — frontal facial pressure, heavy head & post-nasal drip",
                    "Bronchial Asthma — chest tightness, night wheezing & breathlessness",
                    "Nasal Polyps — chronic nasal obstruction & lost sense of smell",
                    "Allergic conjunctivitis — burning, redness, and gritty sensation in eyes",
                    "Allergic bronchitis & recurrent cold attacks in changing weather",
                    "Food intolerances & gastrointestinal hypersensitivities",
                    "Chemical, perfume, paint smell, and smoke intolerance",
                    "Chronic urticaria, angioedema & dermographia",
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
            heading: "Why Antihistamines Fail to Cure & How Homeopathy Rebuilds Immunity",
            icon: <ShieldCheck className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <>
                <p className="mb-3">
                  Allopathic anti-allergics (cetirizine, levocetirizine, montelukast) and corticosteroid nasal sprays (fluticasone, budesonide) only block histamine receptors or suppress local inflammatory cascades. The moment the drug leaves the bloodstream, the mast cells degranulate again upon the next encounter with pollen or dust. Over time, patients require stronger doses and develop drug tolerance.
                </p>
                <p>
                  Classical constitutional homeopathy alters the patient&apos;s hyper-reactive allergic diathesis (the constitutional predisposition). By evaluating the precise modalities — whether symptoms worsen in cold air, damp weather, early mornings, or during emotional stress — {CLINIC_CONFIG.doctorName} identifies the deep-acting constitutional simillimum. This progressively desensitizes the mast cells, reducing attack frequency and intensity until allergies permanently resolve.
                </p>
              </>
            ),
          },
          {
            heading: "Safe Support for Children & Working Professionals",
            icon: <Heart className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <p>
                Unlike conventional antihistamines that cause daytime lethargy, mental cloudiness, or dry mouth, homeopathic remedies do not impair driving, study concentration, or cognitive sharpness. Children take sweet lactose globule pills happily without battles, helping them avoid frequent school absenteeism caused by asthma attacks or relentless morning sneezing.
              </p>
            ),
          },
        ]}
        faqs={[
          {
            question: "Can I stop my emergency asthma inhaler immediately?",
            answer: "No. You should never stop prescribed emergency bronchodilator inhalers abruptly. As your homeopathic constitutional treatment progresses over 4 to 8 weeks, your airway reactivity decreases naturally. You will find yourself needing the inhaler less and less, allowing your primary physician to gradually reduce maintenance doses safely.",
          },
          {
            question: "How quickly does homeopathy reduce acute sneezing bouts?",
            answer: "While deep constitutional desensitization takes a few weeks to months to permanently reprogram immune reactions, acute homeopathic remedies can provide relief from violent sneezing fits and nasal obstruction within hours without drowsiness.",
          },
          {
            question: "Is homeopathy effective for dust allergy and house mites?",
            answer: "Yes, extremely effective. Dust allergy is one of the most common reasons patients consult Dr. M. Allensha. Constitutional remedies eliminate the hypersensitivity so you no longer trigger a sneezing attack when cleaning, dusting, or changing bedsheets.",
          },
        ]}
        relatedLinks={[
          { label: "Child Health Care", href: "/homeopathy-consultation-children/", description: "Immunity building for pediatric wheezing" },
          { label: "Skin Concerns", href: "/homeopathy-consultation-skin-concerns/", description: "Relief for allergic hives and eczema" },
          { label: "Adult Health Care", href: "/homeopathy-consultation-adults/", description: "Chronic allergic respiratory solutions" },
          { label: "Book Consultation", href: "/book-online-homeopathy-appointment/", description: "Consult Dr. Allensha online" },
        ]}
      />
    </>
  );
}
