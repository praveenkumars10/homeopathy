"use client";

import React from "react";
import { CLINIC_CONFIG } from "@/lib/constants";
import { AnimatedCounter } from "./ui/AnimatedCounter";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ShieldCheck, HeartPulse, Clock, Sparkles } from "lucide-react";
import { MortarPestleIcon } from "./icons/TreatmentIcons";

export function WhyChooseUs() {
  const highlights = [
    {
      icon: <MortarPestleIcon className="w-6 h-6 text-[#C98B3E]" />,
      title: "Classical Constitutional Method",
      description:
        "We follow the pure Hahnemannian individualization principle. We never dispense one-size-fits-all combination tonics.",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#C98B3E]" />,
      title: "Unhurried, In-Depth Consultation",
      description:
        "A full 45 to 60 minutes dedicated to understanding your entire lifestyle, mental stress, sleep, and physical history.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#C98B3E]" />,
      title: "Zero Chemical Suppression",
      description:
        "Non-toxic, bio-compatible micro-dilutions that strengthen innate immunity without steroids or chemical dependence.",
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-[#C98B3E]" />,
      title: "Safe for All Life Stages",
      description:
        "Gentle enough for newborns, children, and pregnant mothers, while potent enough for complex chronic adult conditions.",
    },
  ];

  return (
    <section id="why-us" className="bg-[#1F4B3F] text-white py-16 md:py-24 relative overflow-hidden">
      {/* Background organic light accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#E8F0EB]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#C98B3E]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#E8F0EB] text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C98B3E]" />
            <span>Why Choose Allen Sha</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-serif font-bold text-[#FAF7F0] tracking-tight">
            Restoring Health at the Deepest Level
          </h2>

          <p className="text-[#E8F0EB]/80 text-base sm:text-lg leading-relaxed font-light">
            We sit intentionally between cold, impersonal hospital corridors and uncredentialed wellness claims — providing serious, credentialed medical homeopathy in a warm, empathetic atmosphere.
          </p>
        </div>

        {/* 4 Animated Stat Counters */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-16 border-b border-white/10"
        >
          {/* Stat 1: Years */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center flex flex-col items-center justify-center hover:bg-white/10 transition-colors"
          >
            <span className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#C98B3E]">
              <AnimatedCounter value={CLINIC_CONFIG.stats.yearsOfPractice} suffix="+" />
            </span>
            <span className="text-sm sm:text-base font-medium text-[#FAF7F0] mt-2">
              Years of Clinical Practice
            </span>
            <span className="text-xs text-[#E8F0EB]/60 mt-1">
              Established Since {CLINIC_CONFIG.establishedYear}
            </span>
          </motion.div>

          {/* Stat 2: Patients Treated */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center flex flex-col items-center justify-center hover:bg-white/10 transition-colors"
          >
            <span className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#C98B3E]">
              <AnimatedCounter value={CLINIC_CONFIG.stats.patientsTreated} suffix="+" />
            </span>
            <span className="text-sm sm:text-base font-medium text-[#FAF7F0] mt-2">
              Online Patients Treated
            </span>
            <span className="text-xs text-[#E8F0EB]/60 mt-1">
              Across Tamil Nadu &amp; India
            </span>
          </motion.div>

          {/* Stat 3: Conditions Treated */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center flex flex-col items-center justify-center hover:bg-white/10 transition-colors"
          >
            <span className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#C98B3E]">
              <AnimatedCounter value={CLINIC_CONFIG.stats.conditionsTreated} suffix="+" />
            </span>
            <span className="text-sm sm:text-base font-medium text-[#FAF7F0] mt-2">
              Conditions Treated
            </span>
            <span className="text-xs text-[#E8F0EB]/60 mt-1">
              Acute & chronic pathologies
            </span>
          </motion.div>

          {/* Stat 4: Google Rating */}
          <motion.div
            variants={fadeInUp}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center flex flex-col items-center justify-center hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center justify-center gap-1.5 text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#C98B3E]">
              <span>★</span>
              <AnimatedCounter value={CLINIC_CONFIG.stats.googleRating} decimals={1} />
            </div>
            <span className="text-sm sm:text-base font-medium text-[#FAF7F0] mt-2">
              Google Rating
            </span>
            <span className="text-xs text-[#E8F0EB]/60 mt-1">
              Over {CLINIC_CONFIG.stats.reviewCount}+ verified reviews
            </span>
          </motion.div>
        </motion.div>

        {/* 4 Pillars Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-16"
        >
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                {h.icon}
              </div>
              <h3 className="font-serif font-semibold text-lg text-[#FAF7F0]">
                {h.title}
              </h3>
              <p className="text-sm text-[#E8F0EB]/75 leading-relaxed">
                {h.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
