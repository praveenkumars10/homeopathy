"use client";

import React from "react";
import { TREATMENT_STEPS } from "@/lib/constants";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ClipboardList, Stethoscope, Activity, ArrowRight } from "lucide-react";
import { DropperBottleIcon } from "./icons/TreatmentIcons";

export function HowItWorks() {
  const stepIcons = [
    <ClipboardList key="1" className="w-6 h-6 text-[#1F4B3F]" />,
    <DropperBottleIcon key="2" className="w-6 h-6 text-[#C98B3E]" />,
    <Activity key="3" className="w-6 h-6 text-[#1F4B3F]" />,
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#FAF7F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F0EB] text-[#1F4B3F] text-xs font-semibold tracking-wider uppercase">
            The Patient Journey
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-serif font-bold text-[#1F4B3F] tracking-tight">
            How Treatment Works
          </h2>

          <p className="text-[#5C6659] text-base sm:text-lg leading-relaxed">
            A transparent, collaborative clinical process designed to understand the totality of who you are before prescribing.
          </p>
        </div>

        {/* 3-Step Process Cards with Connecting Line */}
        <div className="relative">
          {/* Subtle connecting organic wavy dotted line (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] -translate-y-12 h-1 z-0 pointer-events-none" aria-hidden="true">
            <svg
              className="w-full h-8 text-[#C98B3E]/40"
              preserveAspectRatio="none"
              viewBox="0 0 800 24"
              fill="none"
            >
              <path
                d="M 0 12 Q 200 2 400 12 T 800 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 8"
              />
            </svg>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
          >
            {TREATMENT_STEPS.map((step, idx) => (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-7 border border-[#1F4B3F]/10 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between relative group"
              >
                {/* Number Badge Top Right */}
                <div className="absolute top-5 right-5 font-serif font-bold text-3xl text-[#E8F0EB] group-hover:text-[#C98B3E]/30 transition-colors">
                  {step.step}
                </div>

                <div>
                  {/* Icon & Timeframe */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#E8F0EB] flex items-center justify-center">
                      {stepIcons[idx]}
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C98B3E] bg-[#FAF7F0] px-3 py-1 rounded-full border border-[#C98B3E]/20">
                      {step.timeframe}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-bold text-xl text-[#1F4B3F] mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#5C6659] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Micro highlight footnote */}
                <div className="mt-6 pt-4 border-t border-[#1F4B3F]/10 flex items-center gap-2 text-xs font-medium text-[#1F4B3F]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9663B]" />
                  <span>
                    {idx === 0
                      ? "In-person or private video session"
                      : idx === 1
                      ? "Constitutional single-remedy selection"
                      : "Refining potency as vitality improves"}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Action Callout */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#D9663B] hover:bg-[#c2552b] text-white text-sm font-semibold px-7 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
          >
            <span>Begin Step 01: Schedule Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
