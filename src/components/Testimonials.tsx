"use client";

import React from "react";
import { TESTIMONIALS } from "@/lib/constants";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import {
  Star,
  Quote,
  CheckCircle2,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import { SectionDivider } from "./ui/SectionDivider";
import { BeforeAfterShowcase } from "./BeforeAfterShowcase";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#FAF7F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 md:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F0EB] text-[#1F4B3F] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#C98B3E]" />
            Clinical Evidence & Patient Stories
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-serif font-bold text-[#1F4B3F] tracking-tight">
            Real Transformations, Lasting Balance
          </h2>

          <p className="text-[#5C6659] text-base sm:text-lg leading-relaxed">
            Authentic clinical documentation and patient journeys demonstrating gentle constitutional healing at Allen Sha Homeopathy.
          </p>

          <SectionDivider variant="botanical" className="my-2" />
        </div>

        {/* Section 1: Clinical Before & After Cases */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-serif font-bold text-2xl text-[#1F4B3F] flex items-center gap-2">
                <span>Photographic Clinical Results</span>
                <span className="text-xs font-sans font-semibold bg-[#C98B3E]/15 text-[#915B17] px-2.5 py-0.5 rounded-full">
                  Verified Cases
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-[#5C6659] mt-1">
                Side-by-side photographic documentation before and after constitutional homeopathy treatment.
              </p>
            </div>
          </div>

          <BeforeAfterShowcase />
        </div>

        {/* Section 2: Patient Written Reviews */}
        <div className="pt-10 border-t border-[#1F4B3F]/15">
          <div className="mb-6">
            <h3 className="font-serif font-bold text-2xl text-[#1F4B3F]">
              Written Patient Testimonials
            </h3>
            <p className="text-xs sm:text-sm text-[#5C6659] mt-1">
              In-depth experiences of patients undergoing constitutional care.
            </p>
          </div>

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
                  <Quote className="w-10 h-10 text-[#E8F0EB] absolute top-5 right-5 -z-0" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#C98B3E] text-[#C98B3E]" />
                      ))}
                    </div>

                    <div className="inline-block bg-[#E8F0EB] text-[#1F4B3F] text-[11px] font-semibold px-2.5 py-0.5 rounded-full mb-3">
                      Condition: {t.condition}
                    </div>

                    <p className="text-sm text-[#23291F] leading-relaxed italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#1F4B3F]/10 flex items-center justify-between">
                    <div>
                      <h4 className="font-serif font-bold text-sm text-[#1F4B3F] flex items-center gap-1">
                        {t.name}
                        <span title="Verified Patient">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1F4B3F]" />
                        </span>
                      </h4>
                      <span className="text-[11px] text-[#5C6659] block">{t.location}</span>
                    </div>
                    <span className="text-[10px] text-[#5C6659]/80 bg-[#FAF7F0] px-2 py-1 rounded border border-[#1F4B3F]/10">
                      {t.timeframe}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        {/* Regulatory Healthcare Compliance Disclaimer Note */}
        <div className="mt-12 p-4 rounded-xl bg-[#E8F0EB]/50 border border-[#1F4B3F]/10 max-w-2xl mx-auto flex items-start gap-3 text-xs text-[#5C6659]">
          <ShieldAlert className="w-4 h-4 text-[#C98B3E] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Clinical Notice:</strong> Homeopathy is an individualized constitutional therapy. Treatment timelines and physiological recovery vary based on each patient&apos;s vitality, pathology chronicity, and compliance. Clinical photographs represent genuine patient cases treated at Allen Sha Homeopathy.
          </p>
        </div>

      </div>
    </section>
  );
}
