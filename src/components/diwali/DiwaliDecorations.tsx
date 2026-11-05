"use client";

import React from "react";
import { DiyaIcon } from "./DiyaIcon";
import { Sparkles } from "lucide-react";

/**
 * Traditional Indian Marigold & Mango Leaves Garland (Toran)
 * Used at the top of the page (sticky/fixed on scroll) and in the footer.
 */
export function FestiveToran({ className = "h-7 sm:h-9" }: { className?: string }) {
  return (
    <div
      className={`w-full overflow-hidden pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 36"
        preserveAspectRatio="none"
        className="w-full h-full drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="marigoldYellow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id="marigoldOrange" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FB923C" />
            <stop offset="50%" stopColor="#EA580C" />
            <stop offset="100%" stopColor="#C2410C" />
          </linearGradient>
          <linearGradient id="mangoLeafGreen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4ADE80" />
            <stop offset="50%" stopColor="#16A34A" />
            <stop offset="100%" stopColor="#166534" />
          </linearGradient>
        </defs>

        {/* Golden Hanging String */}
        <path
          d="M0 6 Q 60 18, 120 6 Q 180 18, 240 6 Q 300 18, 360 6 Q 420 18, 480 6 Q 540 18, 600 6 Q 660 18, 720 6 Q 780 18, 840 6 Q 900 18, 960 6 Q 1020 18, 1080 6 Q 1140 18, 1200 6 Q 1260 18, 1320 6 Q 1380 18, 1440 6"
          stroke="#FBBF24"
          strokeWidth="2.5"
          fill="none"
        />

        {/* Repeating Garland Units (Mango Leaves, Marigolds & Hanging Bells/Diyas) */}
        {Array.from({ length: 12 }).map((_, i) => {
          const x = i * 120 + 60;
          return (
            <g key={i}>
              {/* Mango Leaf Left */}
              <path
                d={`M${x - 22} 10 Q${x - 28} 24 ${x - 24} 32 Q${x - 18} 24 ${x - 16} 10 Z`}
                fill="url(#mangoLeafGreen)"
              />
              {/* Mango Leaf Right */}
              <path
                d={`M${x + 16} 10 Q${x + 18} 24 ${x + 24} 32 Q${x + 28} 24 ${x + 22} 10 Z`}
                fill="url(#mangoLeafGreen)"
              />

              {/* Orange Marigold Flower Left */}
              <circle cx={x - 15} cy="14" r="6.5" fill="url(#marigoldOrange)" />
              <circle cx={x - 15} cy="14" r="3.5" fill="#FEF08A" />

              {/* Orange Marigold Flower Right */}
              <circle cx={x + 15} cy="14" r="6.5" fill="url(#marigoldOrange)" />
              <circle cx={x + 15} cy="14" r="3.5" fill="#FEF08A" />

              {/* Center Yellow Marigold Cluster */}
              <circle cx={x} cy="17" r="8" fill="url(#marigoldYellow)" />
              <circle cx={x} cy="17" r="4.5" fill="#EA580C" />
              <circle cx={x} cy="17" r="2" fill="#FEF08A" />

              {/* Hanging Golden Bell/Deepam */}
              <line x1={x} y1="25" x2={x} y2="31" stroke="#FBBF24" strokeWidth="1.5" />
              <circle cx={x} cy="32" r="2.5" fill="#FBBF24" />
              <circle cx={x} cy="32" r="1.2" fill="#FEF08A" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/**
 * Festive Side Hanging Diyas:
 * Subtle decorative golden strings with glowing Diyas hanging on the left and right screen borders.
 * Stays visible on scroll across all pages.
 */
export function FestiveSideDiyas() {
  return (
    <div className="hidden xl:block pointer-events-none select-none" aria-hidden="true">
      {/* Left Hanging Diya */}
      <div className="fixed top-0 left-3 z-50 flex flex-col items-center drop-shadow-md">
        <div className="w-[1.5px] h-20 bg-gradient-to-b from-amber-400 via-amber-300 to-amber-500" />
        <div className="-mt-1">
          <DiyaIcon size={26} glow />
        </div>
      </div>

      {/* Right Hanging Diya */}
      <div className="fixed top-0 right-3 z-50 flex flex-col items-center drop-shadow-md">
        <div className="w-[1.5px] h-20 bg-gradient-to-b from-amber-400 via-amber-300 to-amber-500" />
        <div className="-mt-1">
          <DiyaIcon size={26} glow />
        </div>
      </div>
    </div>
  );
}

/**
 * Top Diwali Decorations:
 * - Fixed/Sticky Marigold Toran Garland across top of viewport that stays visible on scroll across all pages.
 * - Top festive banner.
 * - REMOVED the "Burst Crackers" floating button as requested by user.
 */
export function DiwaliDecorations() {
  return (
    <>
      {/* 1. Fixed Top Festive Toran (Stays visible across all pages and on scroll) */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none select-none" style={{ transform: "translateZ(0)" }}>
        <FestiveToran className="h-6 sm:h-7" />
      </div>

      {/* 2. Side Hanging Golden Diyas (Visible on desktop scroll) */}
      <FestiveSideDiyas />

      {/* 2. Top Festive Greeting Banner (Health & Peace, strictly NO commercial offers) */}
      <div className="bg-gradient-to-r from-[#17382F] via-[#245447] to-[#17382F] text-amber-200 border-b border-amber-500/20 pt-4 sm:pt-4 pb-1.5 px-3 text-xs sm:text-sm font-medium text-center flex items-center justify-center gap-2 relative z-20 shadow-sm">
        <DiyaIcon size={18} glow={false} />
        <span className="tracking-wide">
          <strong className="font-semibold text-amber-100">Happy Diwali!</strong> Wishing you radiant health, peace &amp; holistic wellness • <span className="hidden sm:inline text-amber-300/90">Allen Sha Homoeopathy</span>
        </span>
        <DiyaIcon size={18} glow={false} />
      </div>
    </>
  );
}
