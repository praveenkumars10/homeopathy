import type { Metadata } from "next";
import { CLINIC_CONFIG } from "@/lib/constants";
import { PageHeader } from "@/components/PageHeader";
import { SeoPageContent } from "@/components/SeoPageContent";
import { Baby, ShieldCheck, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Homeopathy Consultation for Children | Safe & Gentle Treatment",
  description: `Online homeopathy consultation for children by ${CLINIC_CONFIG.doctorName}. Safe, gentle constitutional treatment for pediatric immunity, tonsils, allergies, asthma & childhood ailments. Sweet, non-invasive remedies kids love.`,
  keywords: [
    "homeopathy for children",
    "pediatric homeopathy consultation",
    "child homeopathy treatment online",
    "homeopathy for kids immunity",
    "children tonsils homeopathy",
  ],
  alternates: { canonical: "/homeopathy-consultation-children/" },
};

export default function ConsultationChildrenPage() {
  return (
    <>
      <PageHeader
        title="Homeopathy Consultation for Children"
        breadcrumbLabel="Children's Health"
        backgroundImage="/images/banner_treatments.jpg"
      />
      <SeoPageContent
        h1="Homeopathy Consultation for Children"
        intro={`Children respond beautifully to homeopathic treatment. At ${CLINIC_CONFIG.clinicName}, ${CLINIC_CONFIG.doctorName} offers gentle, safe constitutional homeopathy for children — addressing immunity, allergies, recurrent infections, and developmental concerns without harsh medications or side effects.`}
        highlights={[
          "Sweet, gentle micro-diluted remedies children love taking",
          "No side effects — safe for infants, toddlers & growing children",
          "Builds natural immunity rather than just suppressing symptoms",
          "Online video consultation — no stressful clinic visits for kids",
          "Personalized constitutional treatment for each child",
          `${CLINIC_CONFIG.experienceYears}+ years experience treating pediatric patients`,
        ]}
        sections={[
          {
            heading: "Common Childhood Conditions We Treat",
            icon: <Baby className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Recurrent colds, coughs & fevers",
                  "Enlarged tonsils & adenoids",
                  "Childhood asthma & wheezing",
                  "Allergic rhinitis & skin rashes",
                  "Poor appetite & fussy eating",
                  "Bedwetting (enuresis)",
                  "Recurrent ear infections",
                  "Teething troubles & dentition distress",
                  "Frequent antibiotics dependency",
                  "Slow weight gain & growth concerns",
                ].map((c, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />{c}</li>
                ))}
              </ul>
            ),
          },
          {
            heading: "Why Homeopathy Is Ideal for Children",
            icon: <Heart className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <>
                <p className="mb-3">
                  Children&apos;s bodies are naturally responsive and have high vital force. Homeopathic remedies work with this vitality to strengthen their immune system from within. Unlike conventional antibiotics that may weaken gut health over time, constitutional homeopathy builds lasting resilience.
                </p>
                <p>
                  The remedies are sweet-tasting sugar pills or drops that children take willingly — no bitter syrups, no painful injections. Parents often notice improvements in their child&apos;s energy, appetite, and sleep within the first few weeks.
                </p>
              </>
            ),
          },
          {
            heading: "How Online Consultation Works for Children",
            icon: <ShieldCheck className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <>
                <p className="mb-3">
                  During the video consultation, {CLINIC_CONFIG.doctorName} will speak with the parent to understand the child&apos;s complete health profile — birth history, vaccination history, dietary habits, behavioral traits, sleep patterns, and recurring complaints. If the child is old enough, they may participate in the conversation too.
                </p>
                <p>
                  This thorough assessment ensures the constitutional remedy chosen is perfectly suited to your child&apos;s unique nature, not just their symptoms.
                </p>
              </>
            ),
          },
        ]}
        faqs={[
          {
            question: "Is homeopathy safe for babies and toddlers?",
            answer: "Yes. Homeopathic remedies are micro-diluted natural substances that are gentle, non-toxic, and free from side effects. They are widely considered safe for infants and toddlers when prescribed by a qualified doctor.",
          },
          {
            question: "How do you give homeopathy medicine to small children?",
            answer: "Homeopathic medicines come as sweet sugar pills or liquid drops that children take willingly. For infants, remedies can be dissolved in a small amount of water.",
          },
          {
            question: "Can homeopathy help reduce my child's antibiotic dependency?",
            answer: "Many parents report that after constitutional homeopathic treatment, their child's frequency of infections reduces significantly, naturally reducing the need for repeated antibiotics. Always consult your paediatrician alongside.",
          },
        ]}
        relatedLinks={[
          { label: "Consultation for Adults", href: "/homeopathy-consultation-adults/", description: "Adult health consultations" },
          { label: "Consultation for Allergies", href: "/homeopathy-consultation-allergy/", description: "Allergy-specific treatment" },
          { label: "Book an Appointment", href: "/book-online-homeopathy-appointment/", description: "Schedule for your child" },
          { label: "Meet the Doctor", href: "/homeopathy-doctor-salem/", description: "Dr. Shahid's credentials" },
        ]}
      />
    </>
  );
}
