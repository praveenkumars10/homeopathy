"use client";

import React, { useState } from "react";
import { CLINIC_CONFIG } from "@/lib/constants";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = `Hello Dr. ${CLINIC_CONFIG.doctorName}, I'm visiting the ${CLINIC_CONFIG.shortName} website and would like to ask about consultation availability.`;
  const whatsappUrl = `https://wa.me/${CLINIC_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
      {/* Gentle Floating Tooltip Banner */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, delay: 1.5 }}
            className="mb-2.5 max-w-[210px] bg-white rounded-2xl p-3 shadow-xl border border-[#1F4B3F]/15 flex items-start gap-2 relative"
          >
            <div className="text-[11px] leading-snug text-[#23291F]">
              <span className="font-semibold text-[#1F4B3F] block">
                Have a medical question?
              </span>
              Chat directly with clinic desk on WhatsApp.
            </div>
            <button
              type="button"
              onClick={() => setShowTooltip(false)}
              className="text-[#5C6659] hover:text-[#23291F] p-0.5"
              aria-label="Dismiss message"
            >
              <X className="w-3 h-3" />
            </button>
            {/* Small triangle arrow pointing down */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white rotate-45 border-r border-b border-[#1F4B3F]/15" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with clinic on WhatsApp"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        {/* Subtle pulsating ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 relative z-10 fill-white text-[#25D366]" />

        {/* Hover label for desktop */}
        <span className="hidden md:block absolute right-16 bg-[#1F4B3F] text-white text-xs font-semibold py-1 px-3 rounded-full shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
