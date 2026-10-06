"use client";

import React from "react";
import Image from "next/image";
import { CLINIC_CONFIG } from "@/lib/constants";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Award, GraduationCap, ShieldCheck, HeartHandshake, CheckCircle2 } from "lucide-react";
import { SectionDivider } from "./ui/SectionDivider";

export function DoctorProfile() {
  const credentials = [
    {
      icon: <GraduationCap className="w-4 h-4 text-[#C98B3E]" />,
      text: CLINIC_CONFIG.qualifications,
    },
    {
      icon: <Award className="w-4 h-4 text-[#C98B3E]" />,
      text: CLINIC_CONFIG.medicalCouncilReg,
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-[#C98B3E]" />,
      text: `${CLINIC_CONFIG.experienceYears}+ Years Dedicated Clinical Homeopathy`,
    },
    {
      icon: <HeartHandshake className="w-4 h-4 text-[#C98B3E]" />,
      text: "Classical Hahnemannian Constitutional Approach",
    },
  ];

  return (
    <section id="doctor" className="py-16 md:py-24 bg-[#FAF7F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F0EB] text-[#1F4B3F] text-xs font-semibold tracking-wider uppercase">
            Clinical Leadership
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-serif font-bold text-[#1F4B3F] tracking-tight">
            Meet Your Physician
          </h2>

          <p className="text-[#5C6659] text-base sm:text-lg leading-relaxed">
            Personal, unhurried care rooted in rigorous classical training and deep clinical experience.
          </p>

          <SectionDivider variant="botanical" className="my-2" />
        </div>

        {/* Doctor Feature Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUp}
          className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 border border-[#1F4B3F]/10 shadow-lg relative overflow-hidden"
        >
          {/* Subtle background warm circle */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#E8F0EB]/50 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Doctor Photo with Decorative Frame */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-[#FAF7F0]">
                <Image
                  src="/images/doctor-portrait.jpg"
                  alt={`${CLINIC_CONFIG.doctorName} - ${CLINIC_CONFIG.doctorTitle}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F4B3F]/40 via-transparent to-transparent" />
                
                {/* Years badge overlay */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md rounded-xl py-1.5 px-3.5 border border-[#1F4B3F]/10 shadow-sm text-xs font-semibold text-[#1F4B3F]">
                  {CLINIC_CONFIG.experienceYears}+ Years Clinical Practice
                </div>
              </div>
            </div>

            {/* Right Column: Bio, Credentials, Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#C98B3E] mb-1">
                  {CLINIC_CONFIG.doctorTitle}
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1F4B3F]">
                  {CLINIC_CONFIG.doctorName}
                </h3>
                <p className="text-sm font-medium text-[#5C6659] mt-1">
                  {CLINIC_CONFIG.qualifications}
                </p>
              </div>

              {/* Bio copy */}
              <p className="text-sm sm:text-base text-[#5C6659] leading-relaxed">
                {CLINIC_CONFIG.doctorBio}
              </p>

              {/* Doctor's Philosophy Quote Box */}
              <div className="relative bg-[#FAF7F0] rounded-2xl p-5 sm:p-6 border-l-4 border-[#C98B3E] border border-[#1F4B3F]/10">
                <p className="font-serif italic text-[#1F4B3F] text-sm sm:text-base leading-relaxed">
                  {CLINIC_CONFIG.doctorPhilosophy}
                </p>
                <span className="block mt-2 text-xs font-semibold uppercase tracking-wider text-[#5C6659]">
                  — {CLINIC_CONFIG.doctorName}
                </span>
              </div>

              {/* Credentials & Council Registrations Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {credentials.map((cred, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#23291F]">
                    <div className="p-1 rounded-md bg-[#E8F0EB] text-[#1F4B3F] shrink-0 mt-0.5">
                      {cred.icon}
                    </div>
                    <span className="leading-snug">{cred.text}</span>
                  </div>
                ))}
              </div>

              {/* Consultation Booking Direct Link */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#1F4B3F] hover:bg-[#17382F] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  <span>Book Consultation with Dr. Sharma</span>
                </a>
                <span className="text-xs text-[#5C6659] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F4B3F]" />
                  In-clinic & Video slots available
                </span>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
