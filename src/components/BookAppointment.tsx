"use client";

import React, { useState, useEffect } from "react";
import { CLINIC_CONFIG, TREATMENTS } from "@/lib/constants";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Send,
  MessageCircle,
  Video,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { SectionDivider } from "./ui/SectionDivider";

interface BookAppointmentProps {
  selectedCondition?: string;
}

export function BookAppointment({ selectedCondition }: BookAppointmentProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    concern: selectedCondition || TREATMENTS[0].title,
    consultationType: "Online Video",
    message: "",
  });

  useEffect(() => {
    if (selectedCondition) {
      setFormData((prev) => ({ ...prev, concern: selectedCondition }));
    }
  }, [selectedCondition]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const notes = formData.message.trim() || "None";
    const formattedMessage = `New Online Consultation Inquiry — ${CLINIC_CONFIG.shortName}
---------------------------------------
Patient Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}
Preferred Date: ${formData.date || "Next available slot"}
Consultation Mode: ${formData.consultationType}
Primary Health Concern: ${formData.concern}
Notes / Symptoms: ${notes}`;

    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappDeepLink = `https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${encodedText}`;

    // Directly open WhatsApp chat with pre-filled message
    window.open(whatsappDeepLink, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FAF7F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F0EB] text-[#1F4B3F] text-xs font-semibold tracking-wider uppercase">
            100% Online Consultation
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-serif font-bold text-[#1F4B3F] tracking-tight">
            Schedule Your Online Video Consultation
          </h2>

          <p className="text-[#5C6659] text-base sm:text-lg leading-relaxed">
            Begin your journey towards constitutional balance from the comfort of your home. Consult directly with {CLINIC_CONFIG.doctorName} via online video or phone call.
          </p>

          <SectionDivider variant="botanical" className="my-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#1F4B3F]/10 shadow-lg">
            <div className="mb-6">
              <h3 className="font-serif font-bold text-2xl text-[#1F4B3F]">
                Book Your Case Assessment
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6659] mt-1">
                Submitting this form connects directly with {CLINIC_CONFIG.doctorName}&apos;s desk via WhatsApp for instant appointment confirmation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Consultation Type Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C6659] mb-2">
                  Consultation Mode (3:00 PM – 9:00 PM)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, consultationType: "Online Video" })}
                    className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all ${
                      formData.consultationType === "Online Video"
                        ? "bg-[#1F4B3F] text-white border-[#1F4B3F] shadow-sm"
                        : "bg-[#FAF7F0] text-[#23291F] border-[#1F4B3F]/15 hover:bg-[#E8F0EB]"
                    }`}
                  >
                    <Video className="w-4 h-4" />
                    <span>Online Video</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, consultationType: "Phone Call" })}
                    className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all ${
                      formData.consultationType === "Phone Call"
                        ? "bg-[#1F4B3F] text-white border-[#1F4B3F] shadow-sm"
                        : "bg-[#FAF7F0] text-[#23291F] border-[#1F4B3F]/15 hover:bg-[#E8F0EB]"
                    }`}
                  >
                    <Phone className="w-4 h-4" />
                    <span>Phone Call</span>
                  </button>
                </div>
              </div>

              {/* Name & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-[#23291F] mb-1.5">
                    Full Name <span className="text-[#D9663B]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#1F4B3F]/20 focus:border-[#1F4B3F] focus:ring-2 focus:ring-[#1F4B3F]/20 text-sm bg-[#FAF7F0]/50 text-[#23291F] placeholder:text-[#5C6659]/50 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-[#23291F] mb-1.5">
                    WhatsApp / Phone Number <span className="text-[#D9663B]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="e.g. 9894480585"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#1F4B3F]/20 focus:border-[#1F4B3F] focus:ring-2 focus:ring-[#1F4B3F]/20 text-sm bg-[#FAF7F0]/50 text-[#23291F] placeholder:text-[#5C6659]/50 transition-colors"
                  />
                </div>
              </div>

                {/* Preferred Date & Concern Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-xs font-semibold text-[#23291F] mb-1.5">
                      Preferred Consultation Date <span className="text-[#D9663B]">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#1F4B3F]/20 focus:border-[#1F4B3F] focus:ring-2 focus:ring-[#1F4B3F]/20 text-sm bg-[#FAF7F0]/50 text-[#23291F] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="concern" className="block text-xs font-semibold text-[#23291F] mb-1.5">
                      Primary Health Concern <span className="text-[#D9663B]">*</span>
                    </label>
                    <select
                      id="concern"
                      name="concern"
                      value={formData.concern}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#1F4B3F]/20 focus:border-[#1F4B3F] focus:ring-2 focus:ring-[#1F4B3F]/20 text-sm bg-[#FAF7F0]/50 text-[#23291F] transition-colors"
                    >
                      {TREATMENTS.map((t) => (
                        <option key={t.id} value={t.title}>
                          {t.title} ({t.category.split("&")[0].trim()})
                        </option>
                      ))}
                      <option value="General Chronic Health">General Chronic / Other Concern</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[#23291F] mb-1.5">
                    Brief Health History / Symptoms (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Describe how long you've had this condition or any previous treatments..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#1F4B3F]/20 focus:border-[#1F4B3F] focus:ring-2 focus:ring-[#1F4B3F]/20 text-sm bg-[#FAF7F0]/50 text-[#23291F] placeholder:text-[#5C6659]/50 transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#D9663B] hover:bg-[#c2552b] text-white font-semibold py-3.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span>Request Online Consultation via WhatsApp</span>
                </button>

                <p className="text-[11px] text-[#5C6659] text-center pt-1">
                  🔒 100% Medical Confidentiality • Consultations between 3:00 PM – 9:00 PM
                </p>
              </form>
          </div>

          {/* Right Column: Online Consultation Practice Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Online Consultation Info Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#1F4B3F]/10 shadow-sm space-y-5">
              <div className="flex items-center justify-between border-b border-[#1F4B3F]/10 pb-4">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C98B3E] block">
                    Online Consultation Practice
                  </span>
                  <h3 className="font-serif font-bold text-xl text-[#1F4B3F]">
                    {CLINIC_CONFIG.doctorName}
                  </h3>
                </div>
                <div className="p-2.5 rounded-2xl bg-[#E8F0EB] text-[#1F4B3F]">
                  <Video className="w-5 h-5 text-[#C98B3E]" />
                </div>
              </div>

              <div className="space-y-4 text-sm text-[#23291F]">
                {/* Location / Base */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#E8F0EB] text-[#1F4B3F] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#C98B3E]" />
                  </div>
                  <div>
                    <span className="font-semibold block text-xs uppercase tracking-wider text-[#C98B3E]">
                      Practice Base
                    </span>
                    <p className="font-medium text-[#1F4B3F]">{CLINIC_CONFIG.locationDisplay}</p>
                    <p className="text-[#5C6659] text-xs leading-relaxed">
                      Serving patients across Tamil Nadu, all of India &amp; internationally through 100% online video &amp; phone consultations.
                    </p>
                  </div>
                </div>

                {/* Consultation Hours */}
                <div className="flex items-start gap-3 pt-2 border-t border-[#1F4B3F]/10">
                  <div className="p-2 rounded-xl bg-[#E8F0EB] text-[#1F4B3F] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#C98B3E]" />
                  </div>
                  <div>
                    <span className="font-semibold block text-xs uppercase tracking-wider text-[#C98B3E]">
                      Consultation Timings
                    </span>
                    <p className="font-bold text-[#1F4B3F]">
                      3:00 PM – 9:00 PM (Monday to Saturday)
                    </p>
                    <span className="text-xs font-semibold text-[#1F4B3F] block mt-0.5">
                      100% Online Consultations Only
                    </span>
                  </div>
                </div>

                {/* Doctor Credentials */}
                <div className="flex items-start gap-3 pt-2 border-t border-[#1F4B3F]/10">
                  <div className="p-2 rounded-xl bg-[#E8F0EB] text-[#1F4B3F] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C98B3E]" />
                  </div>
                  <div>
                    <span className="font-semibold block text-xs uppercase tracking-wider text-[#C98B3E]">
                      Credentials &amp; Council Registration
                    </span>
                    <p className="text-xs font-bold text-[#1F4B3F]">
                      {CLINIC_CONFIG.qualifications}
                    </p>
                    <p className="text-xs font-semibold text-[#1F4B3F] mt-0.5">
                      Government Registered Medical Practitioner — Reg. No: {CLINIC_CONFIG.registrationNo}
                    </p>
                    <p className="text-[11px] text-[#5C6659]">
                      Tamil Nadu Homeopathy Medical Council
                    </p>
                    <p className="text-[11px] text-[#C98B3E] font-medium mt-0.5">
                      16+ Years Experience • Practicing Since {CLINIC_CONFIG.establishedYear}
                    </p>
                  </div>
                </div>

                {/* Direct Phone & WhatsApp */}
                <div className="flex items-start gap-3 pt-2 border-t border-[#1F4B3F]/10">
                  <div className="p-2 rounded-xl bg-[#E8F0EB] text-[#1F4B3F] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#C98B3E]" />
                  </div>
                  <div>
                    <span className="font-semibold block text-xs uppercase tracking-wider text-[#C98B3E]">
                      Telephone &amp; WhatsApp
                    </span>
                    <a
                      href={`tel:${CLINIC_CONFIG.phoneClean}`}
                      className="text-sm font-semibold text-[#1F4B3F] hover:text-[#D9663B] transition-colors"
                    >
                      {CLINIC_CONFIG.phone}
                    </a>
                    <span className="text-xs text-[#5C6659] block">
                      Assistance between 3:00 PM and 9:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* How Online Consultation Works Card */}
            <div className="bg-gradient-to-br from-[#1F4B3F] to-[#17382F] text-white rounded-3xl p-6 sm:p-7 shadow-md space-y-4">
              <div className="flex items-center gap-2 text-[#C98B3E] text-xs font-semibold uppercase tracking-wider">
                <Send className="w-4 h-4" />
                <span>How Online Consultation Works</span>
              </div>
              
              <ul className="space-y-3 text-xs text-[#E8F0EB]/90">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-white/15 text-[#C98B3E] font-bold flex items-center justify-center shrink-0 text-[10px]">1</span>
                  <span><strong>Select Mode &amp; Time:</strong> Submit your concern and preferred slot (3 PM – 9 PM).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-white/15 text-[#C98B3E] font-bold flex items-center justify-center shrink-0 text-[10px]">2</span>
                  <span><strong>Join Video Call:</strong> Connect directly with {CLINIC_CONFIG.doctorName} for an in-depth 45–60 min case discussion.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-white/15 text-[#C98B3E] font-bold flex items-center justify-center shrink-0 text-[10px]">3</span>
                  <span><strong>Doorstep Medicine Delivery:</strong> Individualized remedies are safely packed and couriered to your home across India.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
