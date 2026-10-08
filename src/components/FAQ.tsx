"use client";

import React, { useState } from "react";
import { FAQS, CLINIC_CONFIG } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { SectionDivider } from "./ui/SectionDivider";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#FAF7F0] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F0EB] text-[#1F4B3F] text-xs font-semibold tracking-wider uppercase">
            Clarity & Guidance
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-serif font-bold text-[#1F4B3F] tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-[#5C6659] text-base sm:text-lg leading-relaxed">
            Transparent answers about classical homeopathy, timelines, safety, and consultations.
          </p>

          <SectionDivider variant="botanical" className="my-2" />
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#1F4B3F]/30 shadow-md"
                    : "bg-white/80 border-[#1F4B3F]/10 hover:border-[#1F4B3F]/20 shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#1F4B3F]/30 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3 font-serif font-semibold text-base sm:text-lg text-[#1F4B3F]">
                    <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#C98B3E] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#E8F0EB] text-[#1F4B3F]" : "bg-[#FAF7F0] text-[#5C6659]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Height Expansion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[#5C6659] leading-relaxed border-t border-[#1F4B3F]/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Have another question? */}
        <div className="mt-10 text-center bg-[#E8F0EB]/60 rounded-2xl p-6 border border-[#1F4B3F]/10">
          <p className="text-sm text-[#23291F] font-medium mb-2">
            Have a question specific to your diagnosis or medical history?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#D9663B] hover:underline"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send a quick query to {CLINIC_CONFIG.doctorName} &rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
