"use client";

import React from "react";

interface DiyaProps {
  className?: string;
  size?: number;
  glow?: boolean;
  animated?: boolean;
}

export function DiyaIcon({
  className = "w-8 h-8",
  size = 36,
  glow = true,
  animated = true,
}: DiyaProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-label="Diwali Diya Lamp"
    >
      {/* Radial Aura Glow behind the Diya */}
      {glow && (
        <div
          className={`absolute inset-0 rounded-full bg-amber-400/25 blur-md pointer-events-none ${
            animated ? "animate-pulse" : ""
          }`}
          style={{ transform: "scale(1.4)" }}
        />
      )}

      <svg
        viewBox="0 0 100 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm overflow-visible"
      >
        <defs>
          {/* Flame Gradients */}
          <linearGradient id="diyaFlameOuter" x1="50" y1="5" x2="50" y2="45" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFF275" />
            <stop offset="35%" stopColor="#FFA600" />
            <stop offset="70%" stopColor="#FF4500" />
            <stop offset="100%" stopColor="#C026D3" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="diyaFlameCore" x1="50" y1="18" x2="50" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#FEF08A" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>

          {/* Clay Base Gradients */}
          <linearGradient id="diyaClayBody" x1="10" y1="45" x2="90" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#D97706" />
            <stop offset="30%" stopColor="#92400E" />
            <stop offset="70%" stopColor="#78350F" />
            <stop offset="100%" stopColor="#451A03" />
          </linearGradient>

          <linearGradient id="diyaRimGold" x1="10" y1="46" x2="90" y2="46" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="25%" stopColor="#FDE68A" />
            <stop offset="50%" stopColor="#D97706" />
            <stop offset="75%" stopColor="#FEF3C7" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>

          <linearGradient id="diyaBaseFoot" x1="30" y1="78" x2="70" y2="86" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#92400E" />
            <stop offset="50%" stopColor="#B45309" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>

          {/* Flame Glow Filter */}
          <filter id="flameBlur" x="20" y="-10" width="60" height="65" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient Flame Aura */}
        <ellipse
          cx="50"
          cy="26"
          rx="18"
          ry="24"
          fill="#F59E0B"
          opacity="0.35"
          filter="url(#flameBlur)"
          className={animated ? "animate-ping opacity-25" : ""}
          style={{ animationDuration: "2.4s" }}
        />

        {/* Flickering Outer Flame */}
        <g className={animated ? "diya-flame-anim" : ""} style={{ transformOrigin: "50px 45px" }}>
          <path
            d="M50 4 C43 17, 34 26, 36 36 C38 43, 44 47, 50 47 C56 47, 62 43, 64 36 C66 26, 57 17, 50 4 Z"
            fill="url(#diyaFlameOuter)"
            filter="url(#flameBlur)"
          />

          {/* Inner Core Bright White-Yellow Flame */}
          <path
            d="M50 16 C46 24, 40 30, 42 38 C43 42, 47 44, 50 44 C53 44, 57 42, 58 38 C60 30, 54 24, 50 16 Z"
            fill="url(#diyaCoreFlame)"
            opacity="0.95"
          />
          <path
            d="M50 18 C47 25, 43 31, 44 38 C45 42, 48 44, 50 44 C52 44, 55 42, 56 38 C57 31, 53 25, 50 18 Z"
            fill="url(#diyaFlameCore)"
          />

          {/* Tiny spark apex */}
          <circle cx="50" cy="12" r="2.5" fill="#FFFFFF" opacity="0.9" />
        </g>

        {/* Cotton Wick tip */}
        <ellipse cx="50" cy="46" rx="3.5" ry="2" fill="#1C1917" />
        <path d="M49 46 Q50 43 50 41" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" />

        {/* Diya Clay Oil Vessel (Curved Bowl) */}
        <path
          d="M10 48 Q50 56 90 48 Q94 65 78 78 Q50 86 22 78 Q6 65 10 48 Z"
          fill="url(#diyaClayBody)"
          stroke="#78350F"
          strokeWidth="1"
        />

        {/* Diya Inner Oil Reservoir Shadow */}
        <ellipse cx="50" cy="48" rx="38" ry="6" fill="#451A03" opacity="0.85" />
        <ellipse cx="50" cy="49" rx="32" ry="4" fill="#B45309" opacity="0.5" />

        {/* Golden Ornate Rim */}
        <path
          d="M10 48 C22 55, 78 55, 90 48 C80 52, 20 52, 10 48 Z"
          fill="url(#diyaRimGold)"
        />

        {/* Traditional Petal / Bead Ornaments on the Diya Bowl */}
        <circle cx="28" cy="62" r="2" fill="#FDE68A" />
        <circle cx="38" cy="67" r="2.5" fill="#F59E0B" />
        <circle cx="50" cy="70" r="3" fill="#FDE68A" />
        <circle cx="62" cy="67" r="2.5" fill="#F59E0B" />
        <circle cx="72" cy="62" r="2" fill="#FDE68A" />

        {/* Diya Circular Stand/Base */}
        <path
          d="M36 78 Q50 81 64 78 L61 84 Q50 87 39 84 Z"
          fill="url(#diyaBaseFoot)"
          stroke="#451A03"
          strokeWidth="0.8"
        />
      </svg>
    </div>
  );
}

