/**
 * Centralized Clinic Configuration & Content
 * 
 * IMPORTANT FOR CLIENT / DEVELOPER:
 * Replace the bracketed placeholders below with your actual clinic credentials,
 * contact details, and doctor information before taking the site live.
 */

export const CLINIC_CONFIG = {
  // Brand & Identity
  clinicName: "Allensha Homeopathy", // [CLINIC_NAME]
  shortName: "Allensha",
  tagline: "Online Homeopathy Consultations from the Comfort of Your Home",
  shortTagline: "Gentle, deep-acting classical homeopathy tailored to your unique constitutional profile via convenient video calls.",
  
  // Doctor Profile
  doctorName: "Dr. Aradhana Sharma", // [DOCTOR_NAME]
  doctorTitle: "Chief Homeopathic Physician & Constitutional Specialist",
  qualifications: "B.H.M.S., M.D. (Homeopathy) — Gold Medalist", // [QUALIFICATIONS]
  medicalCouncilReg: "State Council of Homeopathy Reg. #48291/KA",
  experienceYears: 16, // [YEARS_OF_PRACTICE]
  doctorBio:
    "With over 16 years of clinical practice, Dr. Aradhana Sharma blends classical Hahnemannian principles with compassionate, in-depth constitutional case study. She believes true healing begins by listening to the story beneath the symptoms.",
  doctorPhilosophy:
    "\"Every symptom is your body's voice asking for balance, not suppression. My role is to spend the unhurried time needed to uncover why your vitality became disturbed, and gently guide it back to vibrant, lasting health.\"",

  // Contact Information
  phone: "+91 98765 43210", // [PHONE]
  phoneClean: "+919876543210",
  whatsappNumber: "919876543210", // [WHATSAPP_NUMBER] (Country code + number without + or spaces)
  email: "care@allensha.com",
  
  // Location
  addressLine1: "Suite 302, Green Lotus Wellness Arcade", // [ADDRESS]
  addressLine2: "14th Main Road, HAL 2nd Stage, Indiranagar",
  city: "Bengaluru", // [CITY]
  state: "Karnataka",
  postalCode: "560038",
  country: "India",
  googleMapsUrl: "https://maps.google.com/?q=Indiranagar+Bengaluru+Homeopathy",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.98664052309!2d77.6384457!3d12.9726884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a695555555%3A0x7d01391624b533d3!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",

  // Timings
  hours: "Mon – Sat: 9:30 AM – 7:30 PM | Sun: By Prior Appointment", // [CLINIC_HOURS]
  consultationDays: "Monday to Saturday (Online Video Consultations)",

  // Trust Statistics (Counters)
  stats: {
    yearsOfPractice: 16, // [YEARS_OF_PRACTICE]
    patientsTreated: 12500, // [PATIENTS_TREATED]
    conditionsTreated: 48,
    googleRating: 4.9, // [GOOGLE_RATING]
    reviewCount: 860,
  },

  year: 2026, // [YEAR]
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
 * Patient Testimonials (Section 7)
 * NOTE: PLACEHOLDERS — replace with consented patient feedback before launch.
 */
export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Priya S.",
    location: "Indiranagar, Bengaluru",
    condition: "Severe Chronic Eczema",
    rating: 5,
    quote:
      "I had relied on topical steroid creams for nearly 4 years. Dr. Aradhana took over an hour to understand my stress and digestion. Within 4 months of homeopathic treatment, my skin cleared without any rebound flare-ups.",
    timeframe: "Treatment duration: 5 months",
    verified: true,
  },
  {
    id: "t2",
    name: "Rahul M.",
    location: "Koramangala, Bengaluru",
    condition: "Allergic Rhinitis & Sinusitis",
    rating: 5,
    quote:
      "Every single morning started with 20 sneezes and watery eyes. The gentle constitutional remedies reduced my sensitivity dramatically. I haven't needed an antihistamine in over eight months.",
    timeframe: "Treatment duration: 3 months",
    verified: true,
  },
  {
    id: "t3",
    name: "Ananya K.",
    location: "Whitefield, Bengaluru",
    condition: "PCOS & Irregular Cycles",
    rating: 5,
    quote:
      "My cycles had been erratic for two years. Instead of prescribing birth control pills, Dr. Aradhana treated my thyroid imbalance and metabolic stress. My cycles are now completely regular and painless.",
    timeframe: "Treatment duration: 6 months",
    verified: true,
  },
  {
    id: "t4",
    name: "Vikram D.",
    location: "HSR Layout, Bengaluru",
    condition: "Cervical Spondylosis & Migraine",
    rating: 5,
    quote:
      "Desk work had created intense neck spasms and weekend migraines. The individualized medicine not only relieved the stiffness but also noticeably improved my sleep depth.",
    timeframe: "Treatment duration: 4 months",
    verified: true,
  },
  {
    id: "t5",
    name: "Meera & Baby Aarav",
    location: "Jayanagar, Bengaluru",
    condition: "Recurrent Pediatric Bronchitis",
    rating: 5,
    quote:
      "My 4-year-old son was taking antibiotics every other month for chest congestion. Dr. Aradhana's sweet pills transformed his immunity. He hasn't missed a day of preschool this term!",
    timeframe: "Treatment duration: 4 months",
    verified: true,
  },
];

/**
 * Frequently Asked Questions (Section 8)
 */
export const FAQS = [
  {
    question: "Is homeopathy safe for long-term use?",
    answer:
      "Yes — homeopathic remedies are micro-diluted natural substances prepared through standardized potentization. When selected by a qualified physician (B.H.M.S. / M.D.), they are gentle, non-toxic, and free from organ strain or dependency, making them safe for long-term restorative health under medical guidance.",
  },
  {
    question: "How soon will I notice tangible results?",
    answer:
      "It varies by condition — acute issues can respond within days, chronic conditions typically take a few weeks to a few months of consistent treatment. Noticeable shifts in sleep, appetite, and vitality often appear in the first few weeks.",
  },
  {
    question: "Can I continue my regular medication alongside homeopathy?",
    answer:
      "Usually yes, but always inform both doctors so treatment can be coordinated safely. We do not stop essential allopathic prescriptions abruptly. As your constitutional vitality improves, allopathic dosages can be reassessed with your primary physician.",
  },
  {
    question: "Is homeopathy suitable for children and during pregnancy?",
    answer:
      "Homeopathy is widely considered gentle enough for children and expectant mothers, but should always be taken under a qualified doctor's supervision. Remedies are sweet, non-invasive, and non-toxic.",
  },
  {
    question: "What happens during the first consultation?",
    answer:
      "A detailed discussion covering physical symptoms, medical history, emotional landscape, sleep, and lifestyle — it typically takes 45 to 60 minutes because the full picture matters for selecting your unique constitutional remedy.",
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
