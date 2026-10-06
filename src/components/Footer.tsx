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
} from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
            <div className="pt-2 flex items-center gap-2 text-xs text-[#E8F0EB]/90">
              <ShieldCheck className="w-4 h-4 text-[#C98B3E]" />
              <span>
                Led by {CLINIC_CONFIG.doctorName}, {CLINIC_CONFIG.qualifications}
              </span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="/contact"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#FAF7F0] hover:bg-[#D9663B] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="/contact"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#FAF7F0] hover:bg-[#D9663B] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-none stroke-currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="/contact"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#FAF7F0] hover:bg-[#D9663B] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-none stroke-currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="/contact"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#FAF7F0] hover:bg-[#D9663B] transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-none stroke-currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
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

          {/* Col 4: Clinic Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-semibold text-base text-[#C98B3E] tracking-wide">
              Clinic Location
            </h4>
            <div className="space-y-2.5 text-xs text-[#E8F0EB]/80">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C98B3E] shrink-0 mt-0.5" />
                <span>
                  {CLINIC_CONFIG.addressLine1}, {CLINIC_CONFIG.addressLine2}, {CLINIC_CONFIG.city}
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
            </div>

            <div className="pt-2">
              <a
                href="/contact"
                className="inline-block text-xs font-semibold text-[#17382F] bg-[#FAF7F0] hover:bg-white px-4 py-2 rounded-full transition-colors"
              >
                Schedule Appointment
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
