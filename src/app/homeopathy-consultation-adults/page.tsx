import type { Metadata } from "next";
import { CLINIC_CONFIG } from "@/lib/constants";
import { PageHeader } from "@/components/PageHeader";
import { SeoPageContent } from "@/components/SeoPageContent";
import { User, ShieldCheck, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Homeopathy Consultation for Adults | Chronic Conditions & Wellness",
  description: `Online homeopathy consultation for adults by ${CLINIC_CONFIG.doctorName}. Treat chronic conditions, skin disorders, allergies, joint pain, digestive issues, stress & lifestyle diseases through constitutional homeopathy.`,
  keywords: [
    "homeopathy for adults",
    "adult homeopathy consultation",
    "chronic disease homeopathy",
    "homeopathy lifestyle diseases",
    "homeopathic treatment adults online",
  ],
  alternates: { canonical: "/homeopathy-consultation-adults/" },
};

export default function ConsultationAdultsPage() {
  return (
    <>
      <PageHeader
        title="Homeopathy Consultation for Adults"
        breadcrumbLabel="Adult Health"
        backgroundImage="/images/banner_doctor.jpg"
      />
      <SeoPageContent
        h1="Homeopathy Consultation for Adults"
        intro={`Adults dealing with chronic health conditions, recurring complaints, or lifestyle-related ailments can find lasting relief through constitutional homeopathy. ${CLINIC_CONFIG.doctorName} specializes in treating the root cause of adult health issues — not just managing symptoms.`}
        highlights={[
          "Comprehensive 45–60 minute case assessment for adults",
          "Treats chronic conditions at the root cause level",
          "Gentle remedies with no side effects or dependency",
          "100% online — no time off work or travel required",
          "Ideal for conditions that haven't responded to conventional treatment",
          "Ongoing follow-up care throughout your healing journey",
        ]}
        sections={[
          {
            heading: "Common Adult Health Conditions We Treat",
            icon: <User className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Chronic skin diseases — eczema, psoriasis, acne",
                  "Hair loss, dandruff & premature thinning",
                  "Allergic rhinitis, sinusitis & asthma",
                  "Arthritis, spondylosis & chronic pain",
                  "IBS, GERD, acidity & digestive issues",
                  "Anxiety, stress, insomnia & burnout",
                  "Migraine & chronic headaches",
                  "Thyroid disorders (hypo/hyper)",
                  "Diabetes management support",
                  "Autoimmune conditions",
                ].map((c, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#C98B3E] mt-2 shrink-0" />{c}</li>
                ))}
              </ul>
            ),
          },
          {
            heading: "Why Adults Benefit from Constitutional Homeopathy",
            icon: <Heart className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <>
                <p className="mb-3">
                  Many adult health conditions are the result of years of accumulated stress, poor dietary habits, suppressive medications, and genetic predisposition. Conventional treatment often manages symptoms without addressing the underlying constitutional weakness.
                </p>
                <p>
                  Constitutional homeopathy works differently. By evaluating your complete symptom totality — physical, emotional, and mental — {CLINIC_CONFIG.doctorName} identifies the deep-acting remedy that stimulates your body&apos;s own healing mechanisms. This is why patients often experience improvements not just in their primary complaint, but in overall energy, sleep, and well-being.
                </p>
              </>
            ),
          },
          {
            heading: "Online Consultation — Convenient for Working Adults",
            icon: <ShieldCheck className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <p>
                We understand that working adults have limited time. Our 100% online consultation model means you can consult with {CLINIC_CONFIG.doctorName} from your home or office — no travel, no waiting rooms, no time off work. Consultations are available between 3:00 PM and 9:00 PM, Monday to Saturday, making it easy to fit into your schedule. Medicines are delivered to your doorstep.
              </p>
            ),
          },
        ]}
        faqs={[
          {
            question: "Is homeopathy effective for long-standing chronic conditions in adults?",
            answer: "Yes. Constitutional homeopathy is particularly effective for chronic conditions that haven't responded well to conventional treatment. The longer the condition, the more thorough the case assessment — which is exactly what our 45–60 minute consultations provide.",
          },
          {
            question: "Can I continue my allopathic medicines alongside homeopathy?",
            answer: `Yes, in most cases. Always inform ${CLINIC_CONFIG.doctorName} about your current medications. We do not abruptly stop essential medicines. As your constitutional vitality improves, dosages can be reassessed with your primary doctor.`,
          },
        ]}
        relatedLinks={[
          { label: "Consultation for Children", href: "/homeopathy-consultation-children/", description: "Pediatric homeopathy" },
          { label: "Consultation for Women", href: "/homeopathy-consultation-womens-health/", description: "Women-specific health concerns" },
          { label: "Consultation for Skin", href: "/homeopathy-consultation-skin/", description: "Skin disorder treatment" },
          { label: "Book an Appointment", href: "/book-online-homeopathy-appointment/", description: "Schedule your consultation" },
        ]}
      />
    </>
  );
}
