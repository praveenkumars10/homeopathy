/**
 * Centralized Clinic Configuration & Content
 * 
 * IMPORTANT FOR CLIENT / DEVELOPER:
 * Replace the bracketed placeholders below with your actual clinic credentials,
 * contact details, and doctor information before taking the site live.
 */

export const CLINIC_CONFIG = {
  // Brand & Identity
  clinicName: "Allen Sha Homeopathy",
  shortName: "Allen Sha",
  tagline: "100% Online Consultations Only — Dr. M. Mohamed Shahid",
  shortTagline: "Evidence-informed classical constitutional homeopathy by Gold Medalist Dr. M. Mohamed Shahid (Govt Reg. No: 3459). 100% Online Consultations Only.",
  
  // Doctor Profile
  doctorName: "Dr. M. Mohamed Shahid",
  doctorTitle: "Chief Homeopathic Physician & Classical Constitutional Specialist",
  qualifications: "BHMS, MD(Hom) — Gold Medalist",
  registrationNo: "3459",
  medicalCouncilReg: "Government Registered Medical Practitioner — Reg. No: 3459 (Tamil Nadu Homeopathy Medical Council)",
  experienceYears: 16,
  establishedYear: 2010,
  doctorBio:
    "Practicing since 2010 with over 16 years of clinical excellence, Dr. M. Mohamed Shahid, BHMS, MD(Hom) is a Gold Medalist and Government Registered Medical Practitioner (Reg. No: 3459) with the Tamil Nadu Homeopathy Medical Council. He specializes in classical Hahnemannian constitutional homeopathy, offering 100% online consultations with tracked doorstep medicine delivery.",
  doctorPhilosophy:
    "\"Every symptom is your body's voice asking for balance, not suppression. Through unhurried online video consultation, we evaluate your complete health totality and deliver individualized classical remedies right to your doorstep.\"",

  // Contact Information
  phone: "+91 98944 80585",
  phoneClean: "+919894480585",
  whatsappNumber: "919894480585",
  email: "care@allensha.com",
  
  // Location & Online Mode
  city: "Salem",
  state: "Tamil Nadu",
  country: "India",
  locationDisplay: "Located in Salem, Tamil Nadu, India",
  onlineOnlyNotice: "100% Online Consultations Only",

  // Timings
  hours: "Mon – Sat: 3:00 PM – 9:00 PM (IST)",
  consultationTimings: "3:00 PM to 9:00 PM",
  consultationDays: "Monday to Saturday (Online Consultations Only • 3 PM to 9 PM)",

  // Trust Statistics (Counters)
  stats: {
    yearsOfPractice: 16,
    establishedSince: 2010,
    patientsTreated: 12500,
    conditionsTreated: 48,
    googleRating: 4.9,
    reviewCount: 860,
  },

  year: 2026,
};

/**
 * 8 Core Conditions Treated (Section 3)
 */
export interface TreatmentCondition {
  id: string;
  title: string;
  cardTitle: string;
  category: "Hair & Skin" | "Allergies & Respiratory" | "Women's & Child Health" | "Chronic & Pain Management";
  shortDescription: string;
  fullSymptoms: string[];
  approach: string;
  iconName: string;
  image: string;
}

export const TREATMENTS: TreatmentCondition[] = [
  {
    id: "hair-scalp",
    title: "Hair & Scalp",
    cardTitle: "Hair Treatment",
    category: "Hair & Skin",
    shortDescription: "Hair fall, dandruff, alopecia areata and premature thinning, treated at the metabolic root cause.",
    fullSymptoms: ["Telogen effluvium", "Alopecia areata", "Chronic seborrheic dandruff", "Hormonal thinning"],
    approach: "Restoring follicular nourishment through constitutional remineralization and hormonal balance.",
    iconName: "hair",
    image: "/images/treatments/hair.jpg",
  },
  {
    id: "skin-conditions",
    title: "Skin Conditions",
    cardTitle: "Skin Disorders",
    category: "Hair & Skin",
    shortDescription: "Psoriasis, eczema, vitiligo, hormonal acne and allergic skin flare-ups without topical steroids.",
    fullSymptoms: ["Atopic dermatitis", "Plaque psoriasis", "Cystic acne", "Urticaria / Hives"],
    approach: "Treating internal blood dyscrasias and gut-skin axis disharmony rather than skin-deep suppression.",
    iconName: "skin",
    image: "/images/treatments/skin.jpg",
  },
  {
    id: "allergies-respiratory",
    title: "Allergies & Respiratory",
    cardTitle: "Respiratory & Allergy",
    category: "Allergies & Respiratory",
    shortDescription: "Asthma, chronic bronchitis, allergic rhinitis, morning sneezing and recurrent colds.",
    fullSymptoms: ["Seasonal hay fever", "Bronchial asthma", "Chronic sinusitis", "Dust & pollen allergy"],
    approach: "Modulating hyperactive immunoglobulin response to build innate mucosal resilience.",
    iconName: "respiratory",
    image: "/images/treatments/respiratory.jpg",
  },
  {
    id: "womens-health",
    title: "Women's Health",
    cardTitle: "Women's Health",
    category: "Women's & Child Health",
    shortDescription: "PCOS/PCOD, thyroid irregularities, painful periods, fibroids and perimenopausal support.",
    fullSymptoms: ["Irregular cycles", "PCOS hormonal cysts", "Hypothyroidism", "Menopausal hot flashes"],
    approach: "Gentle neuroendocrine balancing remedies that re-align natural ovulatory and metabolic rhythms.",
    iconName: "women",
    image: "/images/treatments/women.jpg",
  },
  {
    id: "child-health",
    title: "Child Health",
    cardTitle: "Child Health",
    category: "Women's & Child Health",
    shortDescription: "Pediatric immunity, recurrent tonsillitis, adenoids, poor appetite and childhood allergies.",
    fullSymptoms: ["Frequent colds & fevers", "Enlarged adenoids/tonsils", "Childhood asthma", "Dentition distress"],
    approach: "Sweet, gentle micro-dilutions that children love, fortifying constitutional vitality safely.",
    iconName: "child",
    image: "/images/treatments/child.jpg",
  },
  {
    id: "chronic-joint-pain",
    title: "Chronic & Joint Pain",
    cardTitle: "Joint & Pain Relief",
    category: "Chronic & Pain Management",
    shortDescription: "Arthritis, cervical spondylosis, migraine, sciatica and long-standing musculoskeletal stiffness.",
    fullSymptoms: ["Osteoarthritis", "Rheumatoid flare-ups", "Chronic tension migraine", "Lumbar disc distress"],
    approach: "Targeting inflammatory cellular diathesis and joint degeneration to enhance mobility and comfort.",
    iconName: "joint",
    image: "/images/treatments/joint.jpg",
  },
  {
    id: "mental-wellness",
    title: "Mental Wellness",
    cardTitle: "Mental Wellness",
    category: "Chronic & Pain Management",
    shortDescription: "Stress, situational anxiety, panic episodes and sleep latency issues, treated without dependency.",
    fullSymptoms: ["Chronic work burnout", "Anxiety & restlessness", "Insomnia & sleep disruption", "Brain fog"],
    approach: "Holistic psychosomatic remedies that ease nervous tension without sedation or habit-forming effects.",
    iconName: "brain",
    image: "/images/treatments/mental.jpg",
  },
  {
    id: "digestive-health",
    title: "Digestive Health",
    cardTitle: "Digestive Health",
    category: "Chronic & Pain Management",
    shortDescription: "Irritable Bowel Syndrome (IBS), chronic acidity, GERD, constipation and sluggish metabolism.",
    fullSymptoms: ["Acid reflux & heartburn", "IBS (spastic colon)", "Chronic bloating", "Food intolerances"],
    approach: "Healing digestive vitality and the gut-brain vagal pathway for complete gastrointestinal comfort.",
    iconName: "digestive",
    image: "/images/treatments/digestive.jpg",
  },
];

/**
 * 3-Step Treatment Process (Section 5)
 */
export const TREATMENT_STEPS = [
  {
    step: "01",
    title: "Detailed Consultation",
    timeframe: "45–60 Minutes",
    description:
      "We spend genuine, unhurried time understanding your physical symptoms, medical history, emotional landscape, sleep, and lifestyle — far beyond a five-minute prescription chat.",
  },
  {
    step: "02",
    title: "Personalised Case Analysis",
    timeframe: "Constitutional Profiling",
    description:
      "Your complete case totality is matched against classical repertories. No two individuals receive the identical remedy, ensuring precisely targeted constitutional action.",
  },
  {
    step: "03",
    title: "Ongoing Monitoring & Care",
    timeframe: "Continuous Healing Journey",
    description:
      "Structured follow-up reviews evaluate constitutional progress, adjusting potency and remedies as your vitality strengthens and core symptoms resolve permanently.",
  },
];
/**
 * Clinical Before & After Cases
 * Real patient photographic outcomes treated at Allen Sha Homeopathy
 */
export interface ClinicalCase {
  id: string;
  title: string;
  patientProfile: string;
  condition: string;
  category: string;
  duration: string;
  summary: string;
  beforeImage: string;
  beforeImages?: string[];
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  resultBadge?: string;
}

export const CLINICAL_CASES: ClinicalCase[] = [
  {
    id: "case-finger-ulcer",
    title: "Chronic Non-Healing Finger Ulcer & Tissue Recovery",
    patientProfile: "Adult Patient, Severe Lesion",
    condition: "Deep Finger Ulceration & Tissue Inflammation",
    category: "Skin & Wound Care",
    duration: "4 Weeks of Constitutional Homeopathy",
    summary:
      "Patient presented with a painful, deep non-healing ulcerated lesion at the fingertip with yellow tissue inflammation. Following individualised constitutional homeopathic treatment, natural cellular regeneration was initiated, inflammation completely subsided, and the finger healed cleanly without scar tissue.",
    beforeImage: "/images/testimonials/case1-finger-before.jpg",
    afterImage: "/images/testimonials/case1-finger-after.jpg",
    beforeLabel: "Before Treatment",
    afterLabel: "After Homeopathy",
    resultBadge: "Complete Tissue Healing",
  },
  {
    id: "case-hand-warts",
    title: "Extensive Hand Warts (Verruca Vulgaris) Clearance",
    patientProfile: "Adult Patient, Multiple Lesions",
    condition: "Multiple Recurrent Hand Warts & Papillomas",
    category: "Dermatological Homeopathy",
    duration: "6 Weeks of Constitutional Homeopathy",
    summary:
      "Extensive clusters of stubborn, rough verruca warts covering the dorsum of the hand and wrist. While external cautery or burning often leaves scars and recurrent outbreaks, constitutional homeopathy stimulated internal immunity, causing all warts to naturally fall off and leaving completely clear, smooth skin.",
    beforeImage: "/images/testimonials/case2-warts-before.jpg",
    afterImage: "/images/testimonials/case2-warts-after.jpg",
    beforeLabel: "Before Treatment",
    afterLabel: "After Homeopathy",
    resultBadge: "100% Wart Clearance",
  },
  {
    id: "case-foot-ulcer",
    title: "Severe Chronic Foot Ulcer & Tissue Re-Epithelialization",
    patientProfile: "Adult Patient, Chronic Non-Healing Wound",
    condition: "Deep Foot Ulcer with Peripheral Necrosis & Slough",
    category: "Diabetic & Wound Care",
    duration: "8 Weeks of Constitutional Homeopathy",
    summary:
      "Patient presented with a critical, long-standing ulcerated wound on the foot exhibiting tissue breakdown, peripheral redness, and non-healing slough. When conventional dressings showed slow response, constitutional homeopathic prescribing stimulated cellular microcirculation and innate vitality, resulting in complete wound closure and healthy epithelial regeneration.",
    beforeImage: "/images/testimonials/case3-foot-ulcer-before.jpg",
    afterImage: "/images/testimonials/case3-foot-ulcer-after.jpg",
    beforeLabel: "Before Treatment (Open Deep Ulcer)",
    afterLabel: "After Homeopathy (Complete Healing)",
    resultBadge: "100% Wound Closure",
  },
  {
    id: "case-arm-dermatitis",
    title: "Extensive Hyperpigmented Eczema & Lichenoid Plaque",
    patientProfile: "Adult Patient, Recurrent Skin Lesion",
    condition: "Severe Violaceous Hyperpigmented Patch on Arm",
    category: "Skin & Allergy Care",
    duration: "5 Weeks of Constitutional Homeopathy",
    summary:
      "Patient presented with a large, thickened, severely darkened lichenoid eczema patch over the arm causing persistent irritation. Rather than temporary symptomatic suppression with topical cortisone, deep constitutional homeopathy addressed internal immune dysregulation, resulting in complete clearance of the patch and full restoration of normal skin complexion.",
    beforeImage: "/images/testimonials/case4-arm-eczema-before.jpg",
    afterImage: "/images/testimonials/case4-arm-eczema-after.jpg",
    beforeLabel: "Before Treatment (Severe Lichenoid Plaque)",
    afterLabel: "After Homeopathy (Normal Skin Tone)",
    resultBadge: "Full Texture & Tone Restored",
  },
  {
    id: "case-thumb-infection",
    title: "Thumb Pulp Ulceration & Severe Paronychia Healing",
    patientProfile: "Adult Patient, Pulp Infection",
    condition: "Deep Thumb Pulp Necrosis, Nail-Fold Infection & Tissue Loss",
    category: "Infection & Wound Care",
    duration: "3 Weeks of Constitutional Homeopathy",
    summary:
      "Patient suffered from an excruciatingly tender, ulcerated thumb pulp with localized tissue necrosis and chronic nail-fold inflammation. Constitutional homeopathic remedies halted suppuration, stimulated healthy tissue granulation, and restored the natural thumb contour and nail-bed integrity without surgical incision or scarring.",
    beforeImage: "/images/testimonials/case5-thumb-before.jpg",
    afterImage: "/images/testimonials/case5-thumb-after.jpg",
    beforeLabel: "Before Treatment (Ulcerated Thumb Pulp)",
    afterLabel: "After Homeopathy (Full Tissue Recovery)",
    resultBadge: "100% Granulation & Healing",
  },
  {
    id: "case-knee-arthritis",
    title: "Severe Knee Arthritis, Joint Effusion & Mobility Restored",
    patientProfile: "Senior Patient, Mobility Impairment",
    condition: "Severe Knee Joint Swelling, Chronic Effusion & Walking Difficulty",
    category: "Joint & Pain Management",
    duration: "7 Weeks of Constitutional Homeopathy",
    summary:
      "Patient presented with severe right knee swelling, fluid effusion, and crippling pain necessitating continuous compression bandage support to ambulate. Individualized constitutional remedies resolved the chronic synovial inflammation, facilitating natural fluid absorption and pain relief. The patient regained erect weight-bearing posture and independent mobility without requiring knee wraps or pain injections.",
    beforeImage: "/images/testimonials/case6-knee-before-1.jpg",
    beforeImages: [
      "/images/testimonials/case6-knee-before-1.jpg",
      "/images/testimonials/case6-knee-before-2.jpg",
    ],
    afterImage: "/images/testimonials/case6-knee-after.jpg",
    beforeLabel: "Before Treatment (Severe Effusion with Bandage)",
    afterLabel: "After Homeopathy (Erect Posture, Swelling Gone)",
    resultBadge: "Full Mobility & Swelling Resolved",
  },
];

/**
 * Patient Testimonials (Section 7)
 * NOTE: PLACEHOLDERS — replace with consented patient feedback before launch.
 */
export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Priya S.",
    location: "Online Consultation — Salem",
    condition: "Severe Chronic Eczema",
    rating: 5,
    quote:
      "I had relied on topical steroid creams for nearly 4 years. Dr. Mohamed Shahid took over an hour in our video consultation to understand my stress and digestion. The prescribed remedies were couriered to my address, and within 4 months my skin cleared without rebound flare-ups.",
    timeframe: "Treatment duration: 5 months",
    verified: true,
  },
  {
    id: "t2",
    name: "Rahul M.",
    location: "Online Consultation — Chennai",
    condition: "Allergic Rhinitis & Sinusitis",
    rating: 5,
    quote:
      "Every single morning started with 20 sneezes and watery eyes. The gentle constitutional remedies prescribed by Dr. Mohamed Shahid reduced my sensitivity dramatically. I haven't needed an antihistamine in over eight months.",
    timeframe: "Treatment duration: 3 months",
    verified: true,
  },
  {
    id: "t3",
    name: "Ananya K.",
    location: "Online Consultation — Coimbatore",
    condition: "PCOS & Irregular Cycles",
    rating: 5,
    quote:
      "My cycles had been erratic for two years. Instead of prescribing hormone pills, Dr. Mohamed Shahid treated my thyroid imbalance and metabolic stress. My cycles are now completely regular and painless.",
    timeframe: "Treatment duration: 6 months",
    verified: true,
  },
  {
    id: "t4",
    name: "Vikram D.",
    location: "Online Consultation — Bengaluru",
    condition: "Cervical Spondylosis & Migraine",
    rating: 5,
    quote:
      "Desk work had created intense neck spasms and weekend migraines. The individualized medicine from Dr. Mohamed Shahid not only relieved the stiffness but also noticeably improved my sleep depth.",
    timeframe: "Treatment duration: 4 months",
    verified: true,
  },
  {
    id: "t5",
    name: "Meera & Baby Aarav",
    location: "Online Consultation — Madurai",
    condition: "Recurrent Pediatric Bronchitis",
    rating: 5,
    quote:
      "My 4-year-old son was taking antibiotics every other month for chest congestion. Dr. Mohamed Shahid's sweet pills transformed his immunity. He hasn't missed a day of preschool this term!",
    timeframe: "Treatment duration: 4 months",
    verified: true,
  },
];

/**
 * Frequently Asked Questions (Section 8)
 */
export const FAQS = [
  {
    question: "How does the online video consultation work?",
    answer:
      "You can schedule your online consultation through our website or WhatsApp. Dr. Mohamed Shahid conducts a comprehensive 45–60 minute video or phone consultation (via Google Meet / WhatsApp Video) between 3:00 PM and 9:00 PM. Following your case evaluation, individualized constitutional medicines are dispatched directly to your doorstep via tracked courier across Tamil Nadu and all of India.",
  },
  {
    question: "How are medicines delivered after the online consultation?",
    answer:
      "All prescribed constitutional remedies and mother tinctures are securely packed and dispatched via speed post / courier service to your doorstep. You will receive tracking details, dosage guidelines, and ongoing WhatsApp support throughout your treatment course.",
  },
  {
    question: "Is homeopathy safe for long-term use?",
    answer:
      "Yes — homeopathic remedies are micro-diluted natural substances prepared through standardized potentization. When selected by a qualified physician (B.H.M.S., MD(Hom)), they are gentle, non-toxic, and free from organ strain or dependency, making them safe for long-term restorative health under medical guidance.",
  },
  {
    question: "How soon will I notice tangible results?",
    answer:
      "It varies by condition — acute issues can respond within days, while chronic conditions typically take a few weeks to a few months of consistent treatment. Noticeable shifts in sleep, appetite, and vitality often appear in the first few weeks.",
  },
  {
    question: "Can I continue my regular medication alongside homeopathy?",
    answer:
      "Usually yes, but always inform Dr. Mohamed Shahid so treatment can be coordinated safely. We do not stop essential allopathic prescriptions abruptly. As your constitutional vitality improves, allopathic dosages can be reassessed with your primary physician.",
  },
  {
    question: "Is homeopathy suitable for children and during pregnancy?",
    answer:
      "Homeopathy is widely considered gentle enough for children and expectant mothers, but should always be taken under a qualified doctor's supervision. Remedies are sweet, non-invasive, and non-toxic.",
  },
  {
    question: "Are there strict dietary restrictions with homeopathic remedies?",
    answer:
      "Modern classical practice requires very few restrictions. We simply recommend leaving a clean palate 15 minutes before and after taking your remedy dose (avoiding raw coffee, camphor, or strong menthol right around intake) to ensure optimal sublingual absorption.",
  },
];

/**
 * Navigation Links
 */
export const NAV_LINKS = [
  { label: "Treatments", href: "#treatments", hasDropdown: true },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Meet the Doctor", href: "#doctor" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
