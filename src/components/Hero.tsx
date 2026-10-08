"use client";

import React from "react";
import Image from "next/image";
import { CLINIC_CONFIG } from "@/lib/constants";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Calendar, MessageCircle, Star, Award, ShieldCheck, Sparkles } from "lucide-react";
import { AnimatedCounter } from "./ui/AnimatedCounter";

export function Hero() {
  const whatsappUrl = `https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${CLINIC_CONFIG.doctorName}, I would like to inquire about an online video consultation at ${CLINIC_CONFIG.clinicName}.`
  )}`;

  return (
    <section className="relative overflow-hidden bg-[#FAF7F0] pt-6 pb-16 md:pt-12 md:pb-24">
      {/* Subtle organic background gradient blobs */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#E8F0EB]/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-[#C98B3E]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines, CTAs, Trust Row */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="lg:col-span-7 space-y-6 sm:space-y-7"
          >
            {/* Top Credibility Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F0EB] border border-[#1F4B3F]/15 text-[#1F4B3F] text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#C98B3E]" />
              <span>100% Online Consultations • Est. Since 2010 • Located in Salem, TN</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif font-bold text-[#1F4B3F] leading-[1.18] tracking-tight">
              Homeopathy That Treats the <span className="italic font-normal text-[#C98B3E]">Cause</span>, Not Just the Symptom
            </h1>

            {/* Subheadline */}
            <p className="text-[#5C6659] text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl font-normal">
              Personalised, natural classical homeopathy for hair, skin, allergies and chronic conditions by <strong className="font-semibold text-[#1F4B3F]">Dr. M. Mohamed Shahid, BHMS, MD(Hom)</strong> (Gold Medalist &amp; Govt Registered Medical Practitioner, Reg. No: 3459). <span className="text-[#D9663B] font-semibold">100% Online Consultations Only</span> via video/phone from 3:00 PM to 9:00 PM, with doorstep medicine delivery across India.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 bg-[#D9663B] hover:bg-[#c2552b] text-white font-semibold text-base px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Video Consultation</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#E8F0EB]/60 text-[#1F4B3F] font-semibold text-base px-6 py-3.5 rounded-full border border-[#1F4B3F]/20 shadow-sm hover:shadow transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Trust Badges Row */}
            <div className="pt-4 sm:pt-6 border-t border-[#1F4B3F]/10">
              <div className="grid grid-cols-3 gap-3 sm:gap-6 text-[#23291F]">
                {/* Years of Practice */}
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#1F4B3F]">
                    <AnimatedCounter value={CLINIC_CONFIG.stats.yearsOfPractice} suffix="+" />
                  </span>
                  <span className="text-xs sm:text-sm text-[#5C6659] font-medium leading-snug">
                    Years Experience (Since 2010)
                  </span>
                </div>

                {/* Patients Treated */}
                <div className="flex flex-col border-l border-[#1F4B3F]/15 pl-3 sm:pl-6">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#1F4B3F]">
                    <AnimatedCounter value={CLINIC_CONFIG.stats.patientsTreated} suffix="+" />
                  </span>
                  <span className="text-xs sm:text-sm text-[#5C6659] font-medium leading-snug">
                    Online Consultations
                  </span>
                </div>

                {/* Google Rating */}
                <div className="flex flex-col border-l border-[#1F4B3F]/15 pl-3 sm:pl-6">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-[#C98B3E] text-[#C98B3E]" />
                    <span className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-[#1F4B3F]">
                      <AnimatedCounter value={CLINIC_CONFIG.stats.googleRating} decimals={1} />
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-[#5C6659] font-medium leading-snug">
                    Google Rating ({CLINIC_CONFIG.stats.reviewCount}+)
                  </span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Hero Visual with Overlaid Trust Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Outer Warm Border Wrap */}
            <div className="relative rounded-3xl p-2 bg-gradient-to-b from-[#E8F0EB] to-white/70 shadow-xl border border-[#1F4B3F]/10">
              <div className="relative aspect-[4/3] sm:aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero-consultation.jpg"
                  alt={`Online video consultation by ${CLINIC_CONFIG.doctorName}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-center transform hover:scale-102 transition-transform duration-700"
                />

                {/* Subtle soft vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F4B3F]/40 via-transparent to-transparent" />

                {/* Bottom Left Inset Caption */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md rounded-xl p-3 border border-[#1F4B3F]/10 flex items-center gap-3 shadow-md">
                  <div className="w-9 h-9 rounded-full bg-[#E8F0EB] flex items-center justify-center text-[#1F4B3F] shrink-0">
                    <Award className="w-5 h-5 text-[#C98B3E]" />
                  </div>
                  <div className="text-xs">
                    <p className="font-semibold text-[#1F4B3F]">
                      {CLINIC_CONFIG.doctorName}
                    </p>
                    <p className="text-[#5C6659] text-[11px]">
                      {CLINIC_CONFIG.qualifications}
                    </p>
                    <p className="text-[#C98B3E] text-[10px] font-semibold">
                      Govt Registered Medical Practitioner • Reg. 3459
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Top-Right Mini Badge */}
            <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-1.5 bg-[#FAF7F0] border border-[#C98B3E]/30 rounded-full py-1.5 px-3.5 shadow-lg text-[11px] font-semibold text-[#1F4B3F]">
              <ShieldCheck className="w-4 h-4 text-[#1F4B3F]" />
              <span>3 PM – 9 PM Consultations</span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
