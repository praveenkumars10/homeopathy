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
      text: `${CLINIC_CONFIG.experienceYears}+ Years Clinical Experience (Since ${CLINIC_CONFIG.establishedYear})`,
    },
    {
      icon: <HeartHandshake className="w-4 h-4 text-[#C98B3E]" />,
      text: "Classical Hahnemannian Constitutional Approach",
    },
    {
      icon: <Award className="w-4 h-4 text-[#C98B3E]" />,
      text: "Gold Medalist in Homeopathic Medicine",
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-[#C98B3E]" />,
      text: "100% Online Consultation Only (No Offline Clinic Visits)",
    },
  ];

  return (
    <section id="doctor" className="py-16 md:py-24 bg-[#FAF7F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F0EB] text-[#1F4B3F] text-xs font-semibold tracking-wider uppercase">
            Physician Profile &amp; Credentials
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-serif font-bold text-[#1F4B3F] tracking-tight">
            Meet Your Homeopathic Physician
          </h2>

          <p className="text-[#5C6659] text-base sm:text-lg leading-relaxed">
            Personal, unhurried constitutional care by Government Registered Medical Practitioner Dr. M. Mohamed Shahid. 100% Online Consultations.
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
            
            {/* Left Column: Official Government Medical Practitioner Credential Seal (Replaces Photo) */}
            <div className="lg:col-span-5 flex flex-col items-center w-full">
              <div className="w-full max-w-sm rounded-3xl bg-gradient-to-b from-[#1F4B3F] to-[#14322A] p-7 text-white shadow-xl border border-[#C98B3E]/30 relative overflow-hidden flex flex-col justify-between">
                {/* Background watermarked emblem pattern */}
                <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-[#C98B3E]/10 blur-xl pointer-events-none" />
                
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2 border-b border-white/15 pb-4">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#C98B3E]">
                    <ShieldCheck className="w-4 h-4 text-[#C98B3E]" />
                    Official Practitioner Seal
                  </span>
                  <span className="text-[10px] font-bold bg-[#C98B3E]/20 text-[#FAF7F0] border border-[#C98B3E]/40 px-2 py-0.5 rounded-full">
                    Gold Medalist
                  </span>
                </div>

                {/* Central Emblem & Reg Info */}
                <div className="py-6 text-center space-y-3">
                  <div className="w-20 h-20 mx-auto rounded-full bg-white/10 border-2 border-[#C98B3E] flex items-center justify-center shadow-inner">
                    <Award className="w-10 h-10 text-[#C98B3E]" />
                  </div>

                  <div>
                    <h4 className="font-serif font-bold text-2xl text-[#FAF7F0] tracking-tight">
                      {CLINIC_CONFIG.doctorName}
                    </h4>
                    <p className="text-xs font-semibold text-[#C98B3E] tracking-wide mt-0.5">
                      {CLINIC_CONFIG.qualifications}
                    </p>
                  </div>

                  {/* Highlighted Reg Number Box */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 border border-white/15 space-y-1">
                    <div className="text-[11px] uppercase tracking-wider text-[#E8F0EB]/75 font-medium">
                      Government Registered Medical Practitioner
                    </div>
                    <div className="text-base font-extrabold text-[#FAF7F0] tracking-wider font-mono">
                      Reg. No: {CLINIC_CONFIG.registrationNo}
                    </div>
                    <div className="text-[11px] text-[#C98B3E] font-medium">
                      Tamil Nadu Homeopathy Medical Council
                    </div>
                  </div>
                </div>

                {/* Bottom Notice: Online Consultation Only */}
                <div className="pt-4 border-t border-white/15 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-[#FAF7F0] font-semibold bg-emerald-950/60 rounded-xl px-3 py-2 border border-emerald-500/30">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>100% Online Consultations Only</span>
                  </div>
                  <div className="text-[11px] text-amber-200/90 text-center font-medium">
                    (No offline / in-person clinic visits)
                  </div>
                  <div className="text-[11px] text-[#E8F0EB]/70 text-center">
                    Timings: 3:00 PM – 9:00 PM (IST) • Base: Salem, TN
                  </div>
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
                <p className="text-sm font-semibold text-[#D9663B] mt-1">
                  {CLINIC_CONFIG.qualifications}
                </p>
                <p className="text-xs font-bold text-[#1F4B3F] mt-0.5">
                  {CLINIC_CONFIG.medicalCouncilReg}
                </p>
              </div>

              {/* Online-only Banner callout */}
              <div className="bg-[#FAF7F0] border-l-4 border-[#D9663B] p-3.5 rounded-r-xl border border-[#1F4B3F]/10">
                <span className="text-xs font-bold text-[#D9663B] uppercase tracking-wide block">
                  Important Notice:
                </span>
                <p className="text-xs text-[#23291F] font-medium mt-0.5">
                  This practice offers <strong>strictly 100% online video &amp; phone consultations</strong>. No offline or physical clinic visits are conducted. Individualized homeopathic medicines are dispatched directly to your address via courier across India.
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
                  — {CLINIC_CONFIG.doctorName}, BHMS, MD(Hom) (Reg. 3459)
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
                  className="inline-flex items-center gap-2 bg-[#1F4B3F] hover:bg-[#17382F] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-colors shadow-md"
                >
                  <span>Book Online Consultation with Dr. M. Mohamed Shahid</span>
                </a>
                <span className="text-xs text-[#5C6659] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#1F4B3F]" />
                  Online Slots: 3:00 PM – 9:00 PM
                </span>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
