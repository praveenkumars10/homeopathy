"use client";

import React from "react";
import { CLINIC_CONFIG, TREATMENTS } from "@/lib/constants";
import { ClinicBrandLogo } from "./icons/TreatmentIcons";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YouTubeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = `https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${CLINIC_CONFIG.doctorName}, I would like to inquire about an online consultation.`
  )}`;

  return (
    <footer className="bg-[#17382F] text-[#FAF7F0] pt-16 pb-24 md:pb-16 border-t border-[#1F4B3F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <ClinicBrandLogo className="w-10 h-10" />
              <div>
                <span className="font-serif font-bold text-xl block leading-tight text-[#FAF7F0]">
                  {CLINIC_CONFIG.shortName}
                </span>
                <span className="text-[11px] tracking-wider uppercase text-[#C98B3E] font-medium">
                  Holistic Health Clinic
                </span>
              </div>
            </div>

            <p className="text-sm text-[#E8F0EB]/75 leading-relaxed">
              {CLINIC_CONFIG.shortTagline} Classical constitutional medicine focusing on the patient totality rather than suppressive superficial treatment.
            </p>

            {/* Doctor seal */}
            <div className="pt-2 flex flex-col gap-1 text-xs text-[#E8F0EB]/90">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C98B3E] shrink-0" />
                <span>
                  Led by {CLINIC_CONFIG.doctorName}, {CLINIC_CONFIG.qualifications}
                </span>
              </div>
              <span className="text-[11px] text-[#C98B3E] pl-6">
                {CLINIC_CONFIG.medicalCouncilReg}
              </span>
            </div>

            {/* Social Media & Direct Chat Icons */}
            <div className="pt-3">
              <span className="text-[11px] uppercase tracking-wider text-[#C98B3E] font-semibold block mb-2">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/15 hover:bg-[#25D366] text-white flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-md border border-white/10"
                  aria-label="WhatsApp"
                  title="Connect on WhatsApp"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/15 hover:bg-[#E4405F] text-white flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-md border border-white/10"
                  aria-label="Instagram"
                  title="Follow on Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/15 hover:bg-[#FF0000] text-white flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-md border border-white/10"
                  aria-label="YouTube"
                  title="Subscribe on YouTube"
                >
                  <YouTubeIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/15 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-md border border-white/10"
                  aria-label="Facebook"
                  title="Follow on Facebook"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/15 hover:bg-[#0A66C2] text-white flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-md border border-white/10"
                  aria-label="LinkedIn"
                  title="Connect on LinkedIn"
                >
                  <LinkedInIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Core Treatments */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-semibold text-base text-[#C98B3E] tracking-wide">
              Clinical Specializations
            </h4>
            <ul className="space-y-2 text-xs text-[#E8F0EB]/80">
              {TREATMENTS.slice(0, 6).map((t) => (
                <li key={t.id}>
                  <a
                    href="/treatments"
                    className="hover:text-[#FAF7F0] hover:underline transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C98B3E]" />
                    <span>{t.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-semibold text-base text-[#C98B3E] tracking-wide">
              Practice
            </h4>
            <ul className="space-y-2 text-xs text-[#E8F0EB]/80">
              <li>
                <a href="/why-us" className="hover:text-white transition-colors">
                  Why Classical Care
                </a>
              </li>
              <li>
                <a href="/how-it-works" className="hover:text-white transition-colors">
                  Patient Journey
                </a>
              </li>
              <li>
                <a href="/doctor" className="hover:text-white transition-colors">
                  Physician Credentials
                </a>
              </li>
              <li>
                <a href="/testimonials" className="hover:text-white transition-colors">
                  Patient Reviews
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-white transition-colors">
                  Common Questions
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  Consultation Booking
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Online Practice Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-semibold text-base text-[#C98B3E] tracking-wide">
              Online Practice Base
            </h4>
            <div className="space-y-2.5 text-xs text-[#E8F0EB]/80">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C98B3E] shrink-0 mt-0.5" />
                <span>
                  {CLINIC_CONFIG.locationDisplay}
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C98B3E] shrink-0" />
                <a href={`tel:${CLINIC_CONFIG.phoneClean}`} className="hover:text-white">
                  {CLINIC_CONFIG.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C98B3E] shrink-0" />
                <span>{CLINIC_CONFIG.hours}</span>
              </p>
              <p className="text-[11px] font-semibold text-[#C98B3E]">
                * 100% Online Consultations Only (No Offline Visits)
              </p>
            </div>

            <div className="pt-2">
              <a
                href="/contact"
                className="inline-block text-xs font-semibold text-[#17382F] bg-[#FAF7F0] hover:bg-white px-4 py-2 rounded-full transition-colors"
              >
                Schedule Online Consultation
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#E8F0EB]/60">
          <p>
            &copy; {CLINIC_CONFIG.year} {CLINIC_CONFIG.clinicName}. All rights reserved.
          </p>

          <p className="text-center md:text-right max-w-xl text-[11px] leading-relaxed">
            Medical disclaimer: Information provided on this website is for educational and appointment inquiry purposes and does not substitute direct medical diagnosis.
          </p>

          {/* Scroll to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
