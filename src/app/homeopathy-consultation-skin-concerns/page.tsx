import type { Metadata } from "next";
import { CLINIC_CONFIG } from "@/lib/constants";
import { PageHeader } from "@/components/PageHeader";
import { SeoPageContent } from "@/components/SeoPageContent";
import { Sparkles, ShieldCheck, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Homeopathy Consultation for Skin Concerns | Eczema, Psoriasis, Acne & Allergies",
  description: `Permanent, non-suppressive homeopathic treatment for chronic skin conditions by ${CLINIC_CONFIG.doctorName}. Treat eczema, psoriasis, acne, urticaria, fungal infections & hair loss at the root.`,
  keywords: [
    "homeopathy for skin diseases",
    "psoriasis homeopathy treatment online",
    "eczema homeopathy doctor",
    "acne homeopathic cure",
    "urticaria homeopathy",
    "skin allergy homeopathy doctor salem",
    "homeopathic skin specialist online",
  ],
  alternates: { canonical: "/homeopathy-consultation-skin-concerns/" },
};

export default function HomeopathyConsultationSkinConcernsPage() {
  return (
    <>
      <PageHeader
        title="Homeopathy for Skin Concerns"
        breadcrumbLabel="Skin Health"
        backgroundImage="/images/banner_doctor.jpg"
      />
      <SeoPageContent
        h1="Homeopathy Consultation for Skin Concerns"
        intro={`The skin is the mirror of your internal health. Applying topical steroid creams often suppresses skin eruptions deeper into the body, causing chronic relapse. ${CLINIC_CONFIG.doctorName} treats skin diseases from within through constitutional classical homeopathy — eliminating the root cause without steroid rebound.`}
        highlights={[
          "Steroid-free internal healing without skin thinning or rebound flares",
          "Permanent relief from chronic, relapsing eczema and plaque psoriasis",
          "Treats root internal factors: immune dysregulation, toxins & stress",
          "Comprehensive high-resolution photo review + video consultation",
          "Effective for adult cystic acne, hormonal blemishes & pigmentation",
          "Safe for infants, children, and adults with sensitive skin",
        ]}
        sections={[
          {
            heading: "Skin Conditions We Successfully Treat with Homeopathy",
            icon: <Sparkles className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <div className="space-y-3">
                <p>
                  Constitutional homeopathy has historically demonstrated remarkable results in treating severe, persistent, and recurrent dermatological complaints:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  {[
                    "Psoriasis (plaque, guttate, palmoplantar & scalp psoriasis)",
                    "Atopic dermatitis, contact dermatitis & weeping/dry eczema",
                    "Chronic urticaria (hives, dermatographia, cold/heat urticaria)",
                    "Stubborn cystic acne vulgaris, hormonal acne & comedones",
                    "Melasma, hyperpigmentation, dark patches & chloasma",
                    "Vitiligo & hypopigmented patches in early stages",
                    "Fungal infections — tinea cruris, ringworm, candidiasis & athlete's foot",
                    "Alopecia areata, diffuse hair thinning, scalp dandruff & seborrhea",
                    "Warts, corns, skin tags & molluscum contagiosum",
                    "Lichen planus & prurigo nodularis",
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
            heading: "The Danger of Steroid Creams & The Homeopathic Advantage",
            icon: <AlertCircle className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <>
                <p className="mb-3">
                  When a skin rash or eczema flare occurs, conventional dermatological practice usually prescribes topical corticosteroid ointments or immunosuppressants. While they temporarily quiet the skin, they do not resolve the internal metabolic or immunological dysfunction. Once the cream is stopped, the condition frequently erupts with increased severity (topical steroid withdrawal).
                </p>
                <p>
                  According to Hering&apos;s Law of Cure, genuine healing proceeds from within outward and from above downward. Homeopathy treats skin disorders as systemic constitutional expressions. By purifying internal vitality and balancing cellular immunity, homeopathy clears the skin permanently while strengthening overall health.
                </p>
              </>
            ),
          },
          {
            heading: "How Online Skin Consultations Work",
            icon: <ShieldCheck className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <p>
                Prior to your scheduled video consultation, you can send clear, well-lit high-resolution photographs of your affected skin areas via WhatsApp. During your 45–60 minute session, {CLINIC_CONFIG.doctorName} examines the skin lesions in detail, investigates triggers (food, weather, sweat, mental stress), and designs an individualized internal remedy regimen with clear dietary guidelines.
              </p>
            ),
          },
        ]}
        faqs={[
          {
            question: "Will my skin get worse initially before getting better (homeopathic aggravation)?",
            answer: "In a small percentage of cases previously suppressed with heavy steroid creams, a mild temporary cleansing response may occur as the body expels toxins. Dr. M. Allensha uses gentle potencies and gradual taper protocols to ensure healing proceeds smoothly and comfortably.",
          },
          {
            question: "How long does it take to see results for eczema or psoriasis?",
            answer: "Substantial relief from itching, burning, and scaling is often observed within the first 3 to 6 weeks of starting constitutional medicine. Complete clearance of chronic, multi-year lesions typically takes 3 to 6 months of systematic treatment.",
          },
          {
            question: "Can I stop my topical ointments immediately?",
            answer: "If you have been using strong topical corticosteroids for months, we advise never stopping them abruptly to prevent severe steroid withdrawal rebounds. Dr. Allensha will provide a step-by-step tapering protocol while introducing homeopathic constitutional medicine.",
          },
        ]}
        relatedLinks={[
          { label: "Allergy Consultation", href: "/homeopathy-consultation-allergy-concerns/", description: "Relief for allergic skin hives & rhinitis" },
          { label: "Women's Health Care", href: "/homeopathy-consultation-womens-health/", description: "Hormonal acne and melasma treatments" },
          { label: "How Online Consultation Works", href: "/how-online-homeopathy-consultation-works/", description: "Photo sharing and video consult steps" },
          { label: "Book Skin Consultation", href: "/book-online-homeopathy-appointment/", description: "Schedule your video case study" },
        ]}
      />
    </>
  );
}
