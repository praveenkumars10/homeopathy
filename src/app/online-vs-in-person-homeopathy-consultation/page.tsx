import type { Metadata } from "next";
import { CLINIC_CONFIG } from "@/lib/constants";
import { PageHeader } from "@/components/PageHeader";
import { SeoPageContent } from "@/components/SeoPageContent";
import { Video, CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Online vs In-Person Homeopathy Consultation | Which is Right for You?",
  description: `Comparing online video homeopathy consultation vs traditional in-clinic visits. Discover why online classical homeopathy delivers equal clinical efficacy with superior privacy and convenience.`,
  keywords: [
    "online vs in person homeopathy consultation",
    "is online homeopathy effective",
    "benefits of online homeopathy",
    "homeopathy video consultation vs clinic visit",
    "online homeopathy doctor advantages",
  ],
  alternates: { canonical: "/online-vs-in-person-homeopathy-consultation/" },
};

export default function OnlineVsInPersonHomeopathyConsultationPage() {
  return (
    <>
      <PageHeader
        title="Online vs In-Person Homeopathy Consultation"
        breadcrumbLabel="Online vs Clinic"
        backgroundImage="/images/banner_doctor.jpg"
      />
      <SeoPageContent
        h1="Online vs In-Person Homeopathy Consultation: Which is Better?"
        intro={`Many prospective patients wonder: &quot;Can a homeopathic doctor treat me as effectively over a video call as in person?&quot; Because classical constitutional homeopathy relies fundamentally on deep case taking, vocal dialogue, symptom totality, and visual observation rather than invasive physical probing, online consultations offer equal clinical efficacy with unparalleled patient convenience.`}
        highlights={[
          "Identical clinical accuracy — constitutional prescribing relies on symptom totality",
          "Zero highway travel, traffic congestion, or hospital waiting room fatigue",
          "Speak from the security and privacy of your own living room",
          "Prescriptions prepared under laboratory-grade conditions and dispatched promptly",
          "Ideal for working professionals, mothers, infants, and elderly seniors",
          "Continuous follow-up tracking and photo updates via WhatsApp",
        ]}
        sections={[
          {
            heading: "Detailed Side-by-Side Comparison",
            icon: <CheckCircle2 className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <div className="overflow-x-auto my-3">
                <table className="w-full text-left text-xs sm:text-sm border border-[#1F4B3F]/15 rounded-xl overflow-hidden">
                  <thead className="bg-[#1F4B3F] text-white">
                    <tr>
                      <th className="p-3 sm:p-4">Feature</th>
                      <th className="p-3 sm:p-4 text-[#C98B3E] font-semibold">Online Video Consultation</th>
                      <th className="p-3 sm:p-4 opacity-80">Traditional In-Person Clinic</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1F4B3F]/10 bg-white">
                    <tr>
                      <td className="p-3 sm:p-4 font-semibold text-[#1F4B3F]">Consultation Time</td>
                      <td className="p-3 sm:p-4 text-[#5C6659]">Dedicated 45–60 minutes, strictly reserved</td>
                      <td className="p-3 sm:p-4 text-[#5C6659]">Often hurried (10–15 mins) due to waiting queue</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 font-semibold text-[#1F4B3F]">Travel & Waiting</td>
                      <td className="p-3 sm:p-4 text-[#5C6659]">Zero travel; start immediately at appointed time</td>
                      <td className="p-3 sm:p-4 text-[#5C6659]">1–2 hours driving + 30–60 mins waiting room delay</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 font-semibold text-[#1F4B3F]">Patient Comfort & Privacy</td>
                      <td className="p-3 sm:p-4 text-[#5C6659]">Comfort of home, complete privacy for sensitive issues</td>
                      <td className="p-3 sm:p-4 text-[#5C6659]">Clinical environment, risk of bumping into acquaintances</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 font-semibold text-[#1F4B3F]">Medicine Quality & Delivery</td>
                      <td className="p-3 sm:p-4 text-[#5C6659]">Freshly prepared authentic potencies shipped to doorstep</td>
                      <td className="p-3 sm:p-4 text-[#5C6659]">Handed at counter; requires travel for every refill</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 font-semibold text-[#1F4B3F]">Post-Consult Follow-Up</td>
                      <td className="p-3 sm:p-4 text-[#5C6659]">Direct WhatsApp messaging support with doctor</td>
                      <td className="p-3 sm:p-4 text-[#5C6659]">Requires physical revisit even for simple questions</td>
                    </tr>
                    <tr>
                      <td className="p-3 sm:p-4 font-semibold text-[#1F4B3F]">Geographic Freedom</td>
                      <td className="p-3 sm:p-4 text-[#5C6659]">Consult from anywhere in Salem, Namakkal, Attur, or global NRI</td>
                      <td className="p-3 sm:p-4 text-[#5C6659]">Restricted only to immediate clinic neighborhood</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ),
          },
          {
            heading: "Why Homeopathy is Uniquely Tailored for Online Healthcare",
            icon: <Video className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <>
                <p className="mb-3">
                  Unlike surgical or emergency care where physical palpation or immediate equipment is mandatory, classical homeopathy is predominantly a cognitive and observational medical discipline.
                </p>
                <p>
                  Samuel Hahnemann, the founder of homeopathy, defined case taking in the <em>Organon of Medicine</em> as listening carefully to the patient&apos;s narrative of their suffering, noting subtle emotional shifts, understanding bodily sensitivities, and analyzing disease progression. A high-definition video session combined with digital photo analysis gives {CLINIC_CONFIG.doctorName} everything required to pinpoint the exact constitutional simillimum.
                </p>
              </>
            ),
          },
          {
            heading: "When is an In-Person Emergency Visit Necessary?",
            icon: <ShieldCheck className="w-5 h-5 text-[#C98B3E]" />,
            content: (
              <p>
                Online homeopathy is designed for chronic ailments, recurring complaints, pediatric care, and non-emergency health conditions. Acute surgical emergencies (e.g., acute appendicitis with peritonitis, severe myocardial infarction, compound fractures, severe respiratory failure) require immediate in-person hospitalization and emergency medical services.
              </p>
            ),
          },
        ]}
        faqs={[
          {
            question: "Are medicines shipped internationally to NRIs?",
            answer: "Yes. In addition to serving patients across Tamil Nadu and all Indian states, we coordinate international parcel shipping for patients and Indian expats residing in the Gulf (UAE, Oman, Qatar), Singapore, UK, and USA.",
          },
          {
            question: "How do you evaluate skin rashes or tongue coatings over video?",
            answer: "Prior to your video call, you send sharp, daylight close-up photos of your skin lesions or tongue coating via WhatsApp. During the video call, Dr. Allensha verifies the appearance in real time.",
          },
        ]}
        relatedLinks={[
          { label: "How Online Consultation Works", href: "/how-online-homeopathy-consultation-works/", description: "Step-by-step video consult workflow" },
          { label: "Consultation Fees", href: "/homeopathy-consultation-fees/", description: "Transparent package details" },
          { label: "Book Consultation", href: "/book-online-homeopathy-appointment/", description: "Schedule your video appointment" },
          { label: "Frequently Asked Questions", href: "/frequently-asked-questions-homeopathy/", description: "Common questions answered" },
        ]}
      />
    </>
  );
}
