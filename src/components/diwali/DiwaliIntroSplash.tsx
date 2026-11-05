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
  durationSeconds = 3.6,
  onComplete,
}: DiwaliIntroSplashProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const totalDuration = durationSeconds * 1000;

    // Optimized 100ms interval (saves 70% CPU over 30ms interval)
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(100, (elapsed / totalDuration) * 100);
      setProgress(currentProgress);

      if (elapsed >= totalDuration) {
        clearInterval(interval);
        handleDismiss();
      }
    }, 100);

    return () => clearInterval(interval);
  }, [durationSeconds]);

  const handleDismiss = () => {
    setIsVisible(false);
    if (onComplete) {
      setTimeout(onComplete, 400);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="diwali-intro-splash"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#091814] via-[#102922] to-[#1A3D34] text-[#FAF7F0] select-none"
        >
          {/* 1. Fullscreen Interactive Fireworks / Crackers Canvas */}
          <div className="absolute inset-0 pointer-events-auto">
            <CrackersCanvas autoLaunch={true} launchInterval={1200} interactive={true} />
          </div>

          {/* 2. Ambient Golden Aura & Radial Lighting */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.15)_0%,rgba(16,41,34,0)_70%)] pointer-events-none" />

          {/* 3. Subtle Rotating Mandala Watermark (Hardware accelerated) */}
          <div
            className="absolute w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] opacity-[0.06] pointer-events-none animate-[spin_120s_linear_infinite]"
            style={{ willChange: "transform", transform: "translateZ(0)" }}
          >
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

          {/* 4. Center Card: Greetings & Blessing Totality */}
          <div className="relative z-10 max-w-2xl mx-4 sm:mx-6 px-6 sm:px-10 py-7 sm:py-9 rounded-3xl bg-[#102922]/90 backdrop-blur-md border border-amber-500/30 shadow-2xl text-center pointer-events-auto">
            
            {/* Auspicious Banner */}
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>शुभ दिवाली • Happy Diwali • Festival of Lights</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            </motion.div>

            {/* Glowing Center Diya with Symmetric Flanking Diyas */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.18, duration: 0.5, type: "spring", bounce: 0.3 }}
              className="flex items-center justify-center gap-6 sm:gap-8 my-2"
            >
              <DiyaIcon size={38} className="hidden sm:inline-flex opacity-85 transform -rotate-6" />
              <div className="relative p-2.5 rounded-full bg-gradient-to-t from-amber-500/15 via-transparent to-transparent">
                <DiyaIcon size={76} />
              </div>
              <DiyaIcon size={38} className="hidden sm:inline-flex opacity-85 transform rotate-6" />
            </motion.div>

            {/* Main Greeting Typography */}
            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="font-serif font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FDE68A] via-[#F59E0B] to-[#FDE68A] drop-shadow-sm mb-2"
            >
              Happy Diwali
            </motion.h1>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.32, duration: 0.5 }}
              className="text-sm sm:text-base text-[#E8F0EB] font-serif font-medium leading-relaxed max-w-xl mx-auto mb-4"
            >
              May the divine light of Diwali illuminate your home with radiant health, inner peace, vitality, and lasting joy.
            </motion.p>

            {/* Doctor & Clinic Identity Sign-off */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="pt-3 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-[#E8F0EB]/90"
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
              transition={{ delay: 0.45, duration: 0.4 }}
              className="mt-3 text-[11px] text-amber-300/80 tracking-wide font-medium flex items-center justify-center gap-1.5"
            >
              <span>🎆 Tap anywhere on screen to burst crackers 🎆</span>
            </motion.div>

            {/* Progress Bar & Skip/Enter Button */}
            <div className="mt-5 space-y-2.5">
              {/* Golden Progress Bar */}
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200 rounded-full transition-all duration-100 ease-linear shadow-[0_0_8px_#F59E0B]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#E8F0EB]/60">
                <span>Entering clinic website...</span>
                <button
                  type="button"
                  onClick={handleDismiss}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/20 hover:bg-amber-500/35 border border-amber-400/40 text-amber-200 hover:text-white font-semibold transition-all duration-150 cursor-pointer shadow-xs active:scale-95"
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
