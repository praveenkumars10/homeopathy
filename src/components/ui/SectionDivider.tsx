import React from "react";
import { BotanicalBranch } from "../icons/TreatmentIcons";

interface SectionDividerProps {
  variant?: "botanical" | "wave-top" | "wave-bottom" | "leaf-center";
  className?: string;
  fillColor?: string;
}

export function SectionDivider({
  variant = "botanical",
  className = "",
  fillColor = "#1F4B3F",
}: SectionDividerProps) {
  if (variant === "wave-top") {
    return (
      <div className={`w-full overflow-hidden leading-none ${className}`} aria-hidden="true">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-8 md:h-14"
        >
          <path
            d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z"
            fill={fillColor}
          />
        </svg>
      </div>
    );
  }

  if (variant === "wave-bottom") {
    return (
      <div className={`w-full overflow-hidden leading-none rotate-180 ${className}`} aria-hidden="true">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-8 md:h-14"
        >
          <path
            d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z"
            fill={fillColor}
          />
        </svg>
      </div>
    );
  }

  if (variant === "leaf-center") {
    return (
      <div className={`flex items-center justify-center my-8 ${className}`} aria-hidden="true">
        <div className="h-px bg-gradient-to-r from-transparent via-[#1F4B3F]/20 to-transparent w-32" />
        <div className="mx-3 text-[#C98B3E]">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M12 2C6.5 2 2 6.5 2 12c0 4 2.5 7.5 6 9 1-3.5 3-7 6-9 3-2 6.5-3 8-3-1 4-2.5 8-5 10 3.5-.5 7-4 7-9 0-5.5-4.5-10-10-10z" />
          </svg>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-[#1F4B3F]/20 to-transparent w-32" />
      </div>
    );
  }

  return (
    <div className={`max-w-md mx-auto my-6 px-4 ${className}`} aria-hidden="true">
      <BotanicalBranch className="w-full h-6 text-[#1F4B3F]/25" />
    </div>
  );
}
