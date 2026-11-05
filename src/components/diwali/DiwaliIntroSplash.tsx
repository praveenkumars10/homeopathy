"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DiyaIcon } from "./DiyaIcon";
import { CrackersCanvas } from "./CrackersCanvas";
import { Sparkles, ArrowRight, HeartHandshake } from "lucide-react";
import { CLINIC_CONFIG } from "@/lib/constants";

interface DiwaliIntroSplashProps {
  durationSeconds?: number;
  onComplete?: () => void;
}

export function DiwaliIntroSplash({
  durationSeconds = 4.2,
  onComplete,
}: DiwaliIntroSplashProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const totalDuration = durationSeconds * 1000;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(100, (elapsed / totalDuration) * 100);
      setProgress(currentProgress);

      if (elapsed >= totalDuration) {
        clearInterval(interval);
        handleDismiss();
      }
    }, 30);

    return () => clearInterval(interval);
  }, [durationSeconds]);

  const handleDismiss = () => {
    setIsVisible(false);
    if (onComplete) {
      setTimeout(onComplete, 600);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="diwali-intro-splash"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.65, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#091814] via-[#102922] to-[#1A3D34] text-[#FAF7F0] select-none"
        >
          {/* 1. Fullscreen Interactive Fireworks / Crackers Canvas */}
          <div className="absolute inset-0 pointer-events-auto">
            <CrackersCanvas autoLaunch={true} launchInterval={950} interactive={true} />
          </div>

          {/* 2. Ambient Golden Aura & Radial Lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.18)_0%,rgba(16,41,34,0)_70%)] pointer-events-none" />

          {/* 3. Ornate Rotating Rangoli / Mandala Background Watermark */}
          <div className="absolute w-[500px] sm:w-[650px] lg:w-[800px] h-[500px] sm:h-[650px] lg:h-[800px] opacity-[0.08] pointer-events-none animate-[spin_120s_linear_infinite]">
            <svg viewBox="0 0 200 200" fill="none" stroke="#F59E0B" strokeWidth="0.8">
              <circle cx="100" cy="100" r="90" strokeDasharray="3 3" />
              <circle cx="100" cy="100" r="75" />
              <circle cx="100" cy="100" r="60" strokeDasharray="2 4" />
              <circle cx="100" cy="100" r="45" />
              <circle cx="100" cy="100" r="30" />
              {Array.from({ length: 16 }).map((_, i) => {
                const angle = (i * Math.PI) / 8;
                const x1 = 100 + Math.cos(angle) * 30;
                const y1 = 100 + Math.sin(angle) * 30;
                const x2 = 100 + Math.cos(angle) * 90;
                const y2 = 100 + Math.sin(angle) * 90;
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
              })}
            </svg>
          </div>

          {/* 4. Floating Stars & Sparkles Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[12%] left-[10%] w-2 h-2 rounded-full bg-amber-300 animate-ping" style={{ animationDuration: "2.8s" }} />
            <div className="absolute top-[20%] right-[14%] w-2.5 h-2.5 rounded-full bg-yellow-200 animate-ping" style={{ animationDuration: "3.2s" }} />
            <div className="absolute bottom-[24%] left-[15%] w-2 h-2 rounded-full bg-amber-400 animate-ping" style={{ animationDuration: "2.4s" }} />
            <div className="absolute bottom-[18%] right-[12%] w-3 h-3 rounded-full bg-yellow-100 animate-ping" style={{ animationDuration: "3.6s" }} />
          </div>

          {/* 5. Center Card: Greetings & Blessing Totality */}
          <div className="relative z-10 max-w-2xl mx-4 sm:mx-6 px-6 sm:px-10 py-8 sm:py-10 rounded-3xl bg-[#102922]/85 backdrop-blur-xl border border-amber-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.65),0_0_40px_rgba(245,158,11,0.2)] text-center pointer-events-auto">
            
            {/* Auspicious Devanagari Banner */}
            <motion.div
              initial={{ y: -15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-medium tracking-widest uppercase mb-4 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: "6s" }} />
              <span>शुभ दिवाली • Happy Diwali • Festival of Lights</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: "6s" }} />
            </motion.div>

            {/* Glowing Center Diya with Symmetric Flanking Diyas */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.6, type: "spring", bounce: 0.4 }}
              className="flex items-center justify-center gap-6 sm:gap-10 my-3"
            >
              <DiyaIcon size={40} className="hidden sm:inline-flex opacity-85 transform -rotate-6" />
              <div className="relative p-3 rounded-full bg-gradient-to-t from-amber-500/20 via-transparent to-transparent">
                <DiyaIcon size={84} />
              </div>
              <DiyaIcon size={40} className="hidden sm:inline-flex opacity-85 transform rotate-6" />
            </motion.div>

            {/* Main Greeting Typography */}
            <motion.h1
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="font-serif font-extrabold text-3xl sm:text-5xl lg:text-5xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FDE68A] via-[#F59E0B] to-[#FDE68A] drop-shadow-md mb-2"
            >
              Happy Diwali
            </motion.h1>

            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="text-sm sm:text-lg text-[#E8F0EB] font-serif font-medium leading-relaxed max-w-xl mx-auto mb-5"
            >
              May the divine light of Diwali illuminate your home with radiant health, inner peace, vitality, and lasting joy.
            </motion.p>

            {/* Doctor & Clinic Identity Sign-off */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="pt-4 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#E8F0EB]/90"
            >
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-semibold text-amber-200">
                  {CLINIC_CONFIG.clinicName}
                </span>
              </div>
              <div className="text-[11px] text-[#E8F0EB]/75">
                {CLINIC_CONFIG.doctorName}, {CLINIC_CONFIG.qualifications}
              </div>
            </motion.div>

            {/* Interactive hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="mt-4 text-[11px] text-amber-300/80 tracking-wide font-medium flex items-center justify-center gap-1.5"
            >
              <span>🎆 Tap anywhere on screen to burst crackers 🎆</span>
            </motion.div>

            {/* Progress Bar & Skip/Enter Button */}
            <div className="mt-6 space-y-3">
              {/* Golden Progress Bar */}
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 rounded-full shadow-[0_0_10px_#F59E0B]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#E8F0EB]/60">
                <span>Entering clinic website...</span>
                <button
                  type="button"
                  onClick={handleDismiss}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-500/20 hover:bg-amber-500/35 border border-amber-400/40 text-amber-200 hover:text-white font-semibold transition-all duration-200 cursor-pointer shadow-sm hover:scale-105"
                >
                  <span>Enter Site</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

