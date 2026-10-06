"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { CLINIC_CONFIG } from "@/lib/constants";
import { ClinicBrandLogo } from "./icons/TreatmentIcons";
import { Phone, Menu, X, Calendar, Clock, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { drawerSlideRight } from "@/lib/animations";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/treatments", label: "Treatments" },
    { href: "/why-us", label: "Why Us" },
    { href: "/doctor", label: "Doctor" },
    { href: "/testimonials", label: "Reviews" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top Banner Notice - Hours & Location */}
      <div className="bg-[#17382F] text-[#E8F0EB] text-xs py-1.5 px-4 hidden sm:block border-b border-[#1F4B3F]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-xs text-[#E8F0EB]/90">
              <Clock className="w-3.5 h-3.5 text-[#C98B3E]" />
              {CLINIC_CONFIG.hours}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-[#E8F0EB]/90">
              <MapPin className="w-3.5 h-3.5 text-[#C98B3E]" />
              {CLINIC_CONFIG.city}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[#C98B3E] font-medium text-xs">
              ★ {CLINIC_CONFIG.stats.googleRating} Google Rating ({CLINIC_CONFIG.stats.reviewCount}+ reviews)
            </span>
            <span className="text-white/30">|</span>
            <span className="text-xs text-[#E8F0EB]/80">Classical Hahnemannian Homeopathy</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header — Floating Pill Glassmorphism */}
      <div className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? "py-2" : "py-3"}`}>
        <header
          className={`max-w-[90rem] mx-4 sm:mx-6 lg:mx-10 xl:mx-16 transition-all duration-300 rounded-full ${
            isScrolled
              ? "bg-white/75 backdrop-blur-xl shadow-[0_4px_24px_rgba(31,75,63,0.10)] border border-[#1F4B3F]/10"
              : "bg-white/60 backdrop-blur-lg shadow-[0_2px_16px_rgba(31,75,63,0.06)] border border-[#1F4B3F]/8"
          }`}
        >
          <div className="px-5 sm:px-8 lg:px-10 flex items-center justify-between h-14">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#1F4B3F]/30 rounded-lg">
            <ClinicBrandLogo className="w-8 h-8 transition-transform group-hover:scale-105" />
            <div className="flex flex-col leading-none">
              <span className="font-serif font-extrabold text-xl text-[#1F4B3F] tracking-tight">
                {CLINIC_CONFIG.shortName}
              </span>
              <span className="text-[10px] tracking-wider uppercase text-[#5C6659]/80 font-medium -mt-0.5">
                Holistic Health
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-[#23291F] hover:text-[#1F4B3F] hover:bg-[#1F4B3F]/8 rounded-full transition-all duration-200 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Action: Phone + CTA */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href={`tel:${CLINIC_CONFIG.phoneClean}`}
              className="flex items-center gap-1.5 text-xs font-semibold text-[#1F4B3F] bg-[#1F4B3F]/8 hover:bg-[#1F4B3F]/12 px-3 py-1.5 rounded-full transition-colors whitespace-nowrap"
              title="Call clinic directly"
            >
              <Phone className="w-3 h-3" />
              <span>{CLINIC_CONFIG.phone}</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#D9663B] hover:bg-[#c2552b] text-white text-[13px] font-semibold px-4 py-1.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Right Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${CLINIC_CONFIG.phoneClean}`}
              className="p-1.5 rounded-full bg-[#1F4B3F]/8 text-[#1F4B3F]"
              aria-label="Call clinic"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-lg text-[#1F4B3F] hover:bg-[#1F4B3F]/8 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
          </div>
        </header>
      </div>

      {/* Mobile Slide-in Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-50 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              variants={drawerSlideRight}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#FAF7F0] z-50 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#1F4B3F]/10 mb-6">
                  <div className="flex items-center gap-2">
                    <ClinicBrandLogo className="w-8 h-8" />
                    <span className="font-serif font-bold text-lg text-[#1F4B3F]">
                      {CLINIC_CONFIG.shortName}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full text-[#5C6659] hover:bg-[#E8F0EB]"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#C98B3E] px-2">
                    Navigation
                  </div>
                  <nav className="flex flex-col space-y-1">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="px-3 py-2.5 rounded-lg text-base font-medium text-[#23291F] hover:bg-[#E8F0EB] hover:text-[#1F4B3F]"
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Drawer Footer Actions */}
              <div className="pt-6 border-t border-[#1F4B3F]/10 space-y-3">
                <a
                  href={`tel:${CLINIC_CONFIG.phoneClean}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#E8F0EB] text-[#1F4B3F] font-semibold text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call: {CLINIC_CONFIG.phone}
                </a>
                <a
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#D9663B] text-white font-semibold text-sm shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  Book Appointment
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Fixed Bottom Bar (50/50 Call Now & Book Appointment) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F0] border-t border-[#1F4B3F]/15 p-2.5 flex gap-2 lg:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.06)]">
        <a
          href={`tel:${CLINIC_CONFIG.phoneClean}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-full bg-[#E8F0EB] text-[#1F4B3F] font-semibold text-sm transition-colors active:scale-95"
        >
          <Phone className="w-4 h-4 text-[#1F4B3F]" />
          <span>Call Now</span>
        </a>
        <a
          href="/contact"
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-3 rounded-full bg-[#D9663B] text-white font-semibold text-sm shadow-md transition-colors active:scale-95"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Visit</span>
        </a>
      </div>
    </>
  );
}
