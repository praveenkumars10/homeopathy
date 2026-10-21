"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CLINIC_CONFIG } from "@/lib/constants";
import {
  Phone,
  MessageCircle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Video,
  Clock,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export interface SeoFaq {
  question: string;
  answer: string;
}

export interface SeoSection {
  heading: string;
  content: string | React.ReactNode;
  icon?: React.ReactNode;
}

export interface SeoPageContentProps {
  /** The main H1 for the page — should match the primary keyword */
  h1: string;
  /** Introductory paragraph below the H1 */
  intro: string | React.ReactNode;
  /** Content sections rendered as cards */
  sections: SeoSection[];
  /** Key bullet points / highlights */
  highlights?: string[];
  /** Page-specific FAQs rendered with accordion + FAQ schema */
  faqs?: SeoFaq[];
  /** Additional internal link cards */
  relatedLinks?: { label: string; href: string; description: string }[];
}

function FaqAccordion({ faqs }: { faqs: SeoFaq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="bg-white rounded-2xl border border-[#1F4B3F]/10 overflow-hidden transition-shadow hover:shadow-md"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-serif font-semibold text-[#1F4B3F] text-sm sm:text-base">
                {faq.question}
              </span>
              {isOpen ? (
                <ChevronUp className="w-4 h-4 text-[#C98B3E] shrink-0" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#5C6659] shrink-0" />
              )}
            </button>
            {isOpen && (
              <div className="px-5 pb-4 text-sm text-[#5C6659] leading-relaxed border-t border-[#1F4B3F]/5 pt-3">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function SeoPageContent({
  h1,
  intro,
  sections,
  highlights,
  faqs,
  relatedLinks,
}: SeoPageContentProps) {
  const whatsappUrl = `https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${CLINIC_CONFIG.doctorName}, I found your website and would like to book an online consultation.`
  )}`;

  return (
    <>
      {/* Main Content Area */}
      <section className="pt-6 md:pt-10 pb-14 md:pb-20 bg-[#FAF7F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* H1 + Intro */}
          <div className="mb-10 md:mb-14">
            <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-bold text-[#1F4B3F] tracking-tight leading-tight mb-5">
              {h1}
            </h1>
            <div className="text-[#5C6659] text-base sm:text-lg leading-relaxed">
              {typeof intro === "string" ? <p>{intro}</p> : intro}
            </div>
          </div>

          {/* Highlights */}
          {highlights && highlights.length > 0 && (
            <div className="bg-white rounded-2xl border border-[#1F4B3F]/10 p-5 sm:p-7 mb-10 shadow-sm">
              <ul className="space-y-3">
                {highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#23291F]">
                    <CheckCircle2 className="w-5 h-5 text-[#C98B3E] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Content Sections */}
          <div className="space-y-8">
            {sections.map((section, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[#1F4B3F]/10 p-5 sm:p-7 shadow-sm"
              >
                <div className="flex items-start gap-3 mb-3">
                  {section.icon && (
                    <div className="p-2 rounded-xl bg-[#E8F0EB] text-[#1F4B3F] shrink-0">
                      {section.icon}
                    </div>
                  )}
                  <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#1F4B3F]">
                    {section.heading}
                  </h2>
                </div>
                <div className="text-sm sm:text-base text-[#5C6659] leading-relaxed">
                  {typeof section.content === "string" ? (
                    <p>{section.content}</p>
                  ) : (
                    section.content
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* FAQs */}
          {faqs && faqs.length > 0 && (
            <div className="mt-12">
              <h2 className="font-serif font-bold text-2xl text-[#1F4B3F] mb-6">
                Frequently Asked Questions
              </h2>
              <FaqAccordion faqs={faqs} />
            </div>
          )}

          {/* Doctor Credentials Card */}
          <div className="mt-12 bg-gradient-to-br from-[#1F4B3F] to-[#17382F] text-white rounded-2xl p-6 sm:p-8 shadow-lg">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2.5 rounded-xl bg-white/10 shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#C98B3E]" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">
                  {CLINIC_CONFIG.doctorName}
                </h3>
                <p className="text-xs text-[#E8F0EB]/80 mt-0.5">
                  {CLINIC_CONFIG.qualifications} •{" "}
                  {CLINIC_CONFIG.medicalCouncilReg}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              <div className="bg-white/10 rounded-xl p-3 text-center">
                <span className="block text-lg font-bold text-[#C98B3E]">
                  {CLINIC_CONFIG.stats.yearsOfPractice}+
                </span>
                <span className="text-[10px] text-[#E8F0EB]/70 uppercase tracking-wider">
                  Years
                </span>
              </div>
              <div className="bg-white/10 rounded-xl p-3 text-center">
                <span className="block text-lg font-bold text-[#C98B3E]">
                  {CLINIC_CONFIG.stats.patientsTreated.toLocaleString()}+
                </span>
                <span className="text-[10px] text-[#E8F0EB]/70 uppercase tracking-wider">
                  Patients
                </span>
              </div>
              <div className="bg-white/10 rounded-xl p-3 text-center">
                <span className="block text-lg font-bold text-[#C98B3E]">
                  {CLINIC_CONFIG.stats.googleRating}
                </span>
                <span className="text-[10px] text-[#E8F0EB]/70 uppercase tracking-wider">
                  Google ★
                </span>
              </div>
              <div className="bg-white/10 rounded-xl p-3 text-center">
                <span className="block text-lg font-bold text-[#C98B3E]">
                  100%
                </span>
                <span className="text-[10px] text-[#E8F0EB]/70 uppercase tracking-wider">
                  Online
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs text-[#E8F0EB]/80">
              <Clock className="w-4 h-4 text-[#C98B3E] shrink-0" />
              <span>
                {CLINIC_CONFIG.consultationDays} • {CLINIC_CONFIG.consultationTimings}
              </span>
            </div>
          </div>

          {/* CTA Booking Banner */}
          <div className="mt-10 bg-white rounded-2xl border-2 border-[#D9663B]/20 p-6 sm:p-8 text-center shadow-sm">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F0EB] text-[#1F4B3F] text-xs font-semibold tracking-wider uppercase mb-4">
              <Video className="w-3.5 h-3.5" />
              100% Online Consultation
            </div>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1F4B3F] mb-2">
              Ready to Start Your Healing Journey?
            </h3>
            <p className="text-sm text-[#5C6659] mb-5 max-w-lg mx-auto">
              Book your detailed online video consultation with{" "}
              {CLINIC_CONFIG.doctorName}. Medicines delivered to your doorstep
              across India.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D9663B] hover:bg-[#c2552b] text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                Book via WhatsApp
              </a>
              <a
                href={`tel:${CLINIC_CONFIG.phoneClean}`}
                className="inline-flex items-center gap-2 bg-[#1F4B3F] hover:bg-[#17382F] text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                Call {CLINIC_CONFIG.phone}
              </a>
            </div>
          </div>

          {/* Related Internal Links */}
          {relatedLinks && relatedLinks.length > 0 && (
            <div className="mt-12">
              <h2 className="font-serif font-bold text-xl text-[#1F4B3F] mb-5">
                Explore More
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedLinks.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="group bg-white rounded-2xl border border-[#1F4B3F]/10 p-5 hover:border-[#C98B3E]/40 hover:shadow-md transition-all"
                  >
                    <span className="font-serif font-semibold text-[#1F4B3F] group-hover:text-[#C98B3E] transition-colors flex items-center gap-2">
                      {link.label}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                    <span className="text-xs text-[#5C6659] mt-1 block">
                      {link.description}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
