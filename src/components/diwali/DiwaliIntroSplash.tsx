"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DiyaIcon } from "./DiyaIcon";
import { CrackersCanvas } from "./CrackersCanvas";
import { ArrowRight, HeartHandshake } from "lucide-react";
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

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(100, (elapsed / totalDuration) * 100);
      setProgress(currentProgress);

      if (elapsed >= totalDuration) {
        clearInterval(interval);
        handleDismiss();
      }
    }, 80);

    return () => clearInterval(interval);
  }, [durationSeconds]);

  const handleDismiss = () => {
    setIsVisible(false);
    if (onComplete) {
      setTimeout(onComplete, 350);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="diwali-intro-splash"
          key="diwali-intro-splash"
          initial={false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.35, ease: "easeOut" } }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#061511] via-[#0d221c] to-[#143229] text-[#FAF7F0] select-none p-4 sm:p-6"
        >
          {/* 1. Fullscreen Interactive Fireworks / Crackers Canvas */}
          <div className="absolute inset-0 pointer-events-auto">
            <CrackersCanvas autoLaunch={true} launchInterval={1050} interactive={true} />
          </div>

          {/* 2. Soft Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(245,158,11,0.18)_0%,rgba(13,34,28,0)_65%)] pointer-events-none" />

          {/* 3. Sleek Centered Card: Balanced in Vertical Center on Mobile & Desktop */}
          <div className="relative z-10 w-full max-w-lg mx-auto pointer-events-auto">
            <div className="rounded-2xl sm:rounded-3xl bg-[#0e2720]/95 border border-amber-400/40 p-5 sm:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.7),0_0_24px_rgba(245,158,11,0.2)] text-center">
              
              {/* Glowing Center Diya with Symmetric Flanking Diyas */}
              <div className="flex items-center justify-center gap-4 sm:gap-8 my-1 sm:my-2">
                <DiyaIcon size={32} className="hidden sm:inline-flex opacity-85 transform -rotate-6" />
                <div className="p-1 sm:p-2 rounded-full bg-gradient-to-t from-amber-500/20 to-transparent">
                  <DiyaIcon size={60} className="sm:w-16 sm:h-16" />
                </div>
                <DiyaIcon size={32} className="hidden sm:inline-flex opacity-85 transform rotate-6" />
              </div>

              {/* Main Greeting Typography */}
              <h1 className="font-serif font-extrabold text-2xl sm:text-4xl lg:text-5xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FDE68A] via-[#F59E0B] to-[#FDE68A] drop-shadow-sm mb-1.5">
                Happy Diwali
              </h1>

              <p className="text-xs sm:text-sm text-[#E8F0EB]/90 font-serif font-medium leading-relaxed max-w-md mx-auto mb-3 sm:mb-4">
                May the divine light of Diwali illuminate your home with radiant health, inner peace, vitality, and lasting joy.
              </p>

              {/* Doctor & Clinic Identity Sign-off */}
              <div className="pt-2 sm:pt-3 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#E8F0EB]/90">
                <div className="flex items-center gap-1.5">
                  <HeartHandshake className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="font-semibold text-amber-200">
                    {CLINIC_CONFIG.clinicName}
                  </span>
                </div>
                <div className="text-[10px] sm:text-[11px] text-[#E8F0EB]/75">
                  {CLINIC_CONFIG.doctorName}, {CLINIC_CONFIG.qualifications}
                </div>
              </div>

              {/* Interactive Hint */}
              <div className="mt-3 text-[11px] text-amber-300/80 tracking-wide font-medium flex items-center justify-center gap-1.5">
                <span>✨ Tap anywhere to burst crackers 🎆</span>
              </div>

              {/* Progress Bar & Skip/Enter Button */}
              <div className="mt-3 space-y-2">
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
                    className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/25 hover:bg-amber-500/40 border border-amber-400/45 text-amber-200 hover:text-white font-semibold transition-all duration-150 cursor-pointer shadow-xs active:scale-95 text-xs"
                  >
                    <span>Enter Site</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
