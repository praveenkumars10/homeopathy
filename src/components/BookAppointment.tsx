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
    consultationType: "In-Clinic",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

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

  /**
   * V1 CLIENT-SIDE WHATSAPP DEEP-LINK DISPATCH
   * 
   * UPGRADE PATH FOR V2:
   * To transition to an email inbox, CRM, or database:
   * 1. Replace this handler with a fetch POST request to an API route (e.g. /api/appointments)
   *    or a service like Formspree (e.g. action="https://formspree.io/f/YOUR_FORM_ID").
   * 2. Store records in Supabase / Postgres / Airtable.
   * 3. Send automated confirmation SMS via Twilio / Gupshup.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `*New Appointment Inquiry — ${CLINIC_CONFIG.shortName}*
---------------------------------------
*Patient Name:* ${formData.name.trim()}
*Phone:* ${formData.phone.trim()}
*Preferred Date:* ${formData.date || "Next available"}
*Consultation Mode:* ${formData.consultationType}
*Primary Concern:* ${formData.concern}
${formData.message ? `*Notes / Symptoms:* ${formData.message.trim()}` : ""}
---------------------------------------
_Sent via ${CLINIC_CONFIG.clinicName} website_`;

    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappDeepLink = `https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${encodedText}`;

    // Open WhatsApp in new tab
    window.open(whatsappDeepLink, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FAF7F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F0EB] text-[#1F4B3F] text-xs font-semibold tracking-wider uppercase">
            Consultation Booking
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-serif font-bold text-[#1F4B3F] tracking-tight">
            Schedule Your Consultation
          </h2>

          <p className="text-[#5C6659] text-base sm:text-lg leading-relaxed">
            Begin your journey towards constitutional balance. Fill in your details to connect directly with our clinic.
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

            {submitted ? (
              <div className="bg-[#E8F0EB] rounded-2xl p-6 text-center space-y-4 border border-[#1F4B3F]/15">
                <div className="w-12 h-12 rounded-full bg-[#1F4B3F] text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-lg text-[#1F4B3F]">
                  WhatsApp Connected!
                </h4>
                <p className="text-sm text-[#5C6659]">
                  Your appointment details were formatted and opened in WhatsApp. If it didn&apos;t open automatically, click the button below:
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-2.5 rounded-full text-sm shadow hover:bg-[#20b858] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Open WhatsApp Chat
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-[#1F4B3F] hover:underline block mx-auto pt-2"
                >
                  Edit details or submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Consultation Type Selector */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#5C6659] mb-2">
                    Consultation Mode
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, consultationType: "In-Clinic" })}
                      className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-xs font-semibold transition-all ${
                        formData.consultationType === "In-Clinic"
                          ? "bg-[#1F4B3F] text-white border-[#1F4B3F] shadow-sm"
                          : "bg-[#FAF7F0] text-[#23291F] border-[#1F4B3F]/15 hover:bg-[#E8F0EB]"
                      }`}
                    >
                      <Building2 className="w-4 h-4" />
                      <span>In-Clinic Visit ({CLINIC_CONFIG.city})</span>
                    </button>
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
                      <span>Online Video Session</span>
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
                      placeholder="e.g. Priya Sharma"
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
                      placeholder="e.g. +91 98765 43210"
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
                  <span>Request Consultation via WhatsApp</span>
                </button>

                <p className="text-[11px] text-[#5C6659] text-center pt-1">
                  🔒 Your medical confidentiality is strictly preserved. No marketing spam.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Clinic Information, Hours & Map */}
          <div className="lg:col-span-5 space-y-6">
            {/* Clinic Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#1F4B3F]/10 shadow-sm space-y-5">
              <h3 className="font-serif font-bold text-xl text-[#1F4B3F]">
                Clinic Information
              </h3>

              <div className="space-y-4 text-sm text-[#23291F]">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#E8F0EB] text-[#1F4B3F] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-xs uppercase tracking-wider text-[#C98B3E]">
                      Address
                    </span>
                    <p className="font-medium text-[#1F4B3F]">{CLINIC_CONFIG.clinicName}</p>
                    <p className="text-[#5C6659] text-xs leading-relaxed">
                      {CLINIC_CONFIG.addressLine1},<br />
                      {CLINIC_CONFIG.addressLine2},<br />
                      {CLINIC_CONFIG.city}, {CLINIC_CONFIG.state} {CLINIC_CONFIG.postalCode}
                    </p>
                    <a
                      href={CLINIC_CONFIG.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-1 text-xs text-[#D9663B] font-semibold hover:underline"
                    >
                      Open in Google Maps &rarr;
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 pt-2 border-t border-[#1F4B3F]/10">
                  <div className="p-2 rounded-xl bg-[#E8F0EB] text-[#1F4B3F] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-xs uppercase tracking-wider text-[#C98B3E]">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${CLINIC_CONFIG.phoneClean}`}
                      className="text-sm font-semibold text-[#1F4B3F] hover:text-[#D9663B] transition-colors"
                    >
                      {CLINIC_CONFIG.phone}
                    </a>
                    <span className="text-xs text-[#5C6659] block">
                      Assistance during clinic operating hours
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3 pt-2 border-t border-[#1F4B3F]/10">
                  <div className="p-2 rounded-xl bg-[#E8F0EB] text-[#1F4B3F] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block text-xs uppercase tracking-wider text-[#C98B3E]">
                      Consultation Hours
                    </span>
                    <p className="text-xs text-[#5C6659] leading-relaxed">
                      {CLINIC_CONFIG.hours}
                    </p>
                    <p className="text-[11px] text-[#C98B3E] font-medium mt-0.5">
                      Prior appointment recommended to avoid wait times
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#1F4B3F]/10 shadow-sm">
              <div className="p-3.5 bg-[#E8F0EB] border-b border-[#1F4B3F]/10 flex items-center justify-between text-xs text-[#1F4B3F] font-semibold">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C98B3E]" />
                  Locate Our Practice
                </span>
                <span className="text-[#5C6659] font-normal">{CLINIC_CONFIG.city}</span>
              </div>
              <div className="relative w-full h-52">
                <iframe
                  title={`Google Maps Location of ${CLINIC_CONFIG.clinicName}`}
                  src={CLINIC_CONFIG.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter grayscale-[15%] contrast-105"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
