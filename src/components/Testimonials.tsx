"use client";

import React from "react";
import { TESTIMONIALS } from "@/lib/constants";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Star, Quote, CheckCircle2, ShieldAlert } from "lucide-react";
import { SectionDivider } from "./ui/SectionDivider";

export function Testimonials() {
  /**
   * IMPORTANT COMPLIANCE NOTE FOR DEVELOPER / CLIENT:
   * The reviews below are PLACEHOLDERS demonstrating structure and typography.
   * Replace with genuine, written consented feedback from real patients before
   * deploying to production. Avoid unsubstantiated "cure" claims per ASCI medical guidelines.
   */

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#FAF7F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F0EB] text-[#1F4B3F] text-xs font-semibold tracking-wider uppercase">
            Patient Stories
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-serif font-bold text-[#1F4B3F] tracking-tight">
            Real Experiences, Lasting Balance
          </h2>

          <p className="text-[#5C6659] text-base sm:text-lg leading-relaxed">
            Read how unhurried constitutional care helped patients find gentle relief from long-standing health concerns.
          </p>

          <SectionDivider variant="botanical" className="my-2" />
        </div>

        {/* Testimonials 3-Column Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.id}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-7 border border-[#1F4B3F]/10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative"
            >
              {/* Quote Watermark */}
              <Quote className="w-10 h-10 text-[#E8F0EB] absolute top-5 right-5 -z-0" />

              <div className="relative z-10">
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C98B3E] text-[#C98B3E]" />
                  ))}
                </div>

                {/* Condition Badge */}
                <div className="inline-block bg-[#E8F0EB] text-[#1F4B3F] text-[11px] font-semibold px-2.5 py-0.5 rounded-full mb-3">
                  Condition: {t.condition}
                </div>

                {/* Quote Text */}
                {/* PLACEHOLDER — replace with consented patient feedback before launch */}
                <p className="text-sm text-[#23291F] leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Patient Footer Info */}
              <div className="mt-6 pt-4 border-t border-[#1F4B3F]/10 flex items-center justify-between">
                <div>
                  <h3 className="font-serif font-bold text-sm text-[#1F4B3F] flex items-center gap-1">
                    {t.name}
                    <span title="Verified Patient">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1F4B3F]" />
                    </span>
                  </h3>
                  <span className="text-[11px] text-[#5C6659] block">{t.location}</span>
                </div>
                <span className="text-[10px] text-[#5C6659]/80 bg-[#FAF7F0] px-2 py-1 rounded border border-[#1F4B3F]/10">
                  {t.timeframe}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Regulatory Healthcare Compliance Disclaimer Note */}
        <div className="mt-12 p-4 rounded-xl bg-[#E8F0EB]/50 border border-[#1F4B3F]/10 max-w-2xl mx-auto flex items-start gap-3 text-xs text-[#5C6659]">
          <ShieldAlert className="w-4 h-4 text-[#C98B3E] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Clinical Disclaimer:</strong> Homeopathy acts on the individual vital constitution. Clinical responses, timelines, and outcomes vary naturally across patients. Testimonials reflect individual patient journeys and are not guaranteed outcome promises.
          </p>
        </div>

      </div>
    </section>
  );
}
