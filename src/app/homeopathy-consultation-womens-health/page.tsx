import type { Metadata } from "next";
import { CLINIC_CONFIG } from "@/lib/constants";
import { PageHeader } from "@/components/PageHeader";
import { SeoPageContent } from "@/components/SeoPageContent";
import { Heart, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Homeopathy Consultation for Women's Health | PCOD, Thyroid & Hormonal Balance",
  description: `Holistic, gentle homeopathic treatment for women's health by ${CLINIC_CONFIG.doctorName}. Natural constitutional care for PCOD/PCOS, menstrual irregularities, thyroid, fibroids, menopause & hormonal balance.`,
  keywords: [
    "homeopathy for womens health",
    "pcod homeopathic treatment",
    "pcos homeopathy doctor online",
    "homeopathy irregular periods",
    "homeopathy menopause symptoms",
    "female hormonal balance homeopathy",
    "homeopathy thyroid treatment women",
  ],
  alternates: { canonical: "/homeopathy-consultation-womens-health/" },
};

export default function HomeopathyConsultationWomensHealthPage() {
  return (
    <>
      <PageHeader
        title="Homeopathy for Women's Health"
        breadcrumbLabel="Women's Health"
        backgroundImage="/images/banner_doctor.jpg"
      />
      <SeoPageContent
        h1="Homeopathy Consultation for Women's Health"
        intro={`Women navigate complex hormonal shifts through puberty, motherhood, and menopause. ${CLINIC_CONFIG.doctorName} provides compassionate, confidential, and holistic constitutional homeopathic treatment addressing root hormonal imbalances without synthetic hormones or invasive procedures.`}
        highlights={[
          "100% natural, hormone-free remedies that stimulate internal endocrine balance",
          "Comprehensive constitutional evaluation considering physical and emotional factors",
          "Effective for PCOD/PCOS, irregular cycles, painful periods, and PMS",
          "Safe support for thyroid disorders (hypothyroidism/hyperthyroidism)",
          "Menopausal transition care — hot flashes, mood swings, sleep disturbances",
          "Confidential, empathetic online video consultations in privacy",
        ]}
        sections={[
          {
            heading: "Common Women's Health Conditions We Treat",
            icon: <Heart className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <div className="space-y-3">
                <p>
                  Constitutional homeopathy works with your endocrine system rather than replacing natural hormones with artificial synthetics. We treat a wide spectrum of female health concerns:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  {[
                    "PCOD / PCOS (Polycystic Ovarian Syndrome) & ovarian cysts",
                    "Irregular, delayed, scanty, or excessively heavy periods (menorrhagia)",
                    "Dysmenorrhea (severe menstrual cramps & pelvic discomfort)",
                    "Premenstrual Syndrome (PMS) — bloating, irritability & migraine",
                    "Hypothyroidism, Hashimoto's & metabolic slowdown",
                    "Uterine fibroids & endometriosis management",
                    "Menopausal symptoms — hot flushes, night sweats & anxiety",
                    "Recurrent UTI, vaginal candidiasis & leucorrhea",
                    "Postpartum hair loss, hormonal acne & melasma/pigmentation",
                    "Anxiety, mood swings, chronic stress & insomnia",
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
            heading: "Why Homeopathy Excels in Hormonal & Gynaecological Health",
            icon: <Sparkles className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <>
                <p className="mb-3">
                  The female endocrine axis (hypothalamus-pituitary-ovarian-adrenal-thyroid) is exquisitely sensitive to emotional stress, environmental toxins, sleep disruption, and genetic vulnerabilities. Conventional medicine frequently treats hormonal disorders with oral contraceptive pills (OCPs) or synthetic levothyroxine, which mask symptoms without fixing underlying ovarian or adrenal distress.
                </p>
                <p>
                  In contrast, classical homeopathy treats the whole woman. By analyzing your constitutional totality — including mental temperament, stress triggers, thermals, food cravings, and menstrual patterns — {CLINIC_CONFIG.doctorName} selects individual remedies that gently awaken your hypothalamic-pituitary-ovarian axis to restore natural rhythmic equilibrium.
                </p>
              </>
            ),
          },
          {
            heading: "Privacy, Dignity & Comfort in Every Consultation",
            icon: <ShieldCheck className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <p>
                Many women find discussing intimate gynaecological, emotional, or marital concerns in rushed clinic settings uncomfortable. Our private online video consultations offer a respectful, discreet space where you can share your symptoms comfortably from your own room without fear of judgment. All medical records and discussions remain strictly confidential.
              </p>
            ),
          },
        ]}
        faqs={[
          {
            question: "Can homeopathy cure PCOD/PCOS permanently?",
            answer: "Homeopathy has an excellent success rate in treating PCOD. Rather than giving artificial hormones to force a bleed, constitutional remedies restore natural ovulatory cycles, reduce ovarian follicular cysts, and balance insulin sensitivity, enabling sustainable long-term recovery.",
          },
          {
            question: "Is homeopathic treatment safe during puberty or perimenopause?",
            answer: "Yes, completely safe. Homeopathic remedies are non-toxic, non-hormonal, and have zero side effects. They are gentle enough for teenage girls struggling with menarche irregularities and women transitioning through perimenopause.",
          },
          {
            question: "Do I need to submit blood tests or pelvic ultrasound reports?",
            answer: "Yes, sharing your recent pelvic ultrasound scans, thyroid panel (TSH, Free T3/T4), hormone profiles (LH, FSH, prolactin), or HbA1c via WhatsApp before the consultation helps Dr. M. Allensha correlate pathology with your symptom totality for precise prescribing.",
          },
        ]}
        relatedLinks={[
          { label: "Adult Consultation", href: "/homeopathy-consultation-adults/", description: "General adult constitutional care" },
          { label: "Skin Consultation", href: "/homeopathy-consultation-skin-concerns/", description: "Hormonal acne and melasma" },
          { label: "Consultation Fees", href: "/homeopathy-consultation-fees/", description: "Transparent fees and package info" },
          { label: "Book Consultation", href: "/book-online-homeopathy-appointment/", description: "Schedule a private consultation" },
        ]}
      />
    </>
  );
}
