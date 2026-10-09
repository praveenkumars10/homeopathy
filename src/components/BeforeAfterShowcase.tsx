"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { CLINICAL_CASES, ClinicalCase } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import {
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight,
  Maximize2,
  X,
  ShieldCheck,
  Download,
  ShieldAlert,
  Lock,
} from "lucide-react";

export function BeforeAfterShowcase() {
  const [selectedBeforeMap, setSelectedBeforeMap] = useState<Record<string, string>>({});
  const [activeModalImage, setActiveModalImage] = useState<{
    src: string;
    alt: string;
    label: string;
    caseTitle: string;
  } | null>(null);
  const [isScreenCaptureShieldActive, setIsScreenCaptureShieldActive] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Helper to get watermarked URL for any clinical image
  const getWatermarkedUrl = useCallback((cleanUrl: string) => {
    if (cleanUrl.includes("/images/testimonials/")) {
      return cleanUrl.replace("/images/testimonials/", "/images/testimonials/watermarked/");
    }
    return cleanUrl;
  }, []);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3500);
  }, []);

  // Download watermarked image
  const handleDownloadWatermarked = useCallback((cleanUrl: string, title: string, type: string) => {
    const watermarkedUrl = getWatermarkedUrl(cleanUrl);
    const link = document.createElement("a");
    link.href = watermarkedUrl;
    link.download = `Allensha-${title.toLowerCase().replace(/[^a-z0-9]/g, "-")}-${type.toLowerCase()}-watermarked.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Watermarked image downloaded with 'Allen Sha' verification.");
  }, [getWatermarkedUrl, showToast]);

  // Anti-Screenshot & Screen Capture Protection Listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Detect PrintScreen or Snipping shortcuts
      const isPrintScreen = e.key === "PrintScreen" || e.code === "PrintScreen";
      const isWinSnip = (e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "S" || e.key === "s" || e.code === "KeyS");
      const isMacScreenshot = e.metaKey && e.shiftKey && ["3", "4", "5"].includes(e.key);
      const isPrint = (e.ctrlKey || e.metaKey) && (e.key === "p" || e.key === "P" || e.code === "KeyP");

      if (isPrintScreen || isWinSnip || isMacScreenshot) {
        setIsScreenCaptureShieldActive(true);
        showToast("Screen capture restricted on clinical patient images.");
        setTimeout(() => setIsScreenCaptureShieldActive(false), 3000);
      }

      if (isPrint) {
        setIsScreenCaptureShieldActive(true);
      }
    };

    const handleWindowBlur = () => {
      // When a screenshot tool or external window steals focus
      setIsScreenCaptureShieldActive(true);
    };

    const handleWindowFocus = () => {
      setIsScreenCaptureShieldActive(false);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsScreenCaptureShieldActive(true);
      } else {
        setIsScreenCaptureShieldActive(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("blur", handleWindowBlur);
    window.addEventListener("focus", handleWindowFocus);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("focus", handleWindowFocus);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [showToast]);

  const getActiveBeforeImage = (caseItem: ClinicalCase) => {
    return selectedBeforeMap[caseItem.id] || caseItem.beforeImage;
  };

  const handleSelectBeforeImage = (caseId: string, imageSrc: string) => {
    setSelectedBeforeMap((prev) => ({ ...prev, [caseId]: imageSrc }));
  };

  const handleProtectedContextMenu = (e: React.MouseEvent, cleanUrl: string, title: string, type: string) => {
    e.preventDefault();
    showToast("Direct save protected. Downloading official 'Allen Sha' watermarked copy...");
    handleDownloadWatermarked(cleanUrl, title, type);
  };

  return (
    <div className="space-y-8 relative select-none protected-media">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#1F4B3F] text-white px-5 py-3 rounded-full text-xs sm:text-sm font-medium shadow-2xl border border-white/20 flex items-center gap-2.5 backdrop-blur-md"
          >
            <ShieldCheck className="w-4 h-4 text-[#C98B3E] shrink-0" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Case Studies Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
      >
        {CLINICAL_CASES.map((caseItem) => {
          const currentBefore = getActiveBeforeImage(caseItem);
          const hasMultipleBefore = caseItem.beforeImages && caseItem.beforeImages.length > 1;

          return (
            <motion.article
              key={caseItem.id}
              variants={fadeInUp}
              className="bg-white rounded-3xl overflow-hidden border border-[#1F4B3F]/15 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
            >
              {/* Card Header & Badges */}
              <div className="p-6 sm:p-7 pb-4">
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E8F0EB] text-[#1F4B3F]">
                    <Sparkles className="w-3.5 h-3.5 text-[#C98B3E]" />
                    {caseItem.category}
                  </span>

                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#FAF7F0] border border-[#1F4B3F]/15 text-[#1F4B3F]">
                    <Clock className="w-3.5 h-3.5 text-[#D9663B]" />
                    {caseItem.duration}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#1F4B3F] leading-snug group-hover:text-[#173a30] transition-colors">
                  {caseItem.title}
                </h3>

                <div className="flex items-center gap-2 mt-2 text-xs font-medium text-[#5C6659]">
                  <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                  <span>{caseItem.condition}</span>
                  <span className="text-[#C98B3E] font-semibold">({caseItem.resultBadge})</span>
                </div>
              </div>

              {/* Visual Comparison: Before & After Side-by-Side */}
              <div className="px-3 sm:px-7 py-2">
                <div className="grid grid-cols-2 gap-2 sm:gap-3.5 bg-[#FAF7F0] p-2 sm:p-3 rounded-2xl border border-[#1F4B3F]/10">
                  
                  {/* Before Image Frame */}
                  <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-neutral-200 group/img shadow-sm protected-clinical-image">
                    <Image
                      key={currentBefore}
                      src={currentBefore}
                      alt={`${caseItem.title} - Before Homeopathy Treatment`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 30vw"
                      draggable={false}
                      className="object-cover object-center transition-transform duration-500 group-hover/img:scale-105 pointer-events-none select-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Transparent Protective Click / Context Shield */}
                    <div
                      className="absolute inset-0 z-20 cursor-pointer"
                      onContextMenu={(e) => handleProtectedContextMenu(e, currentBefore, caseItem.title, "Before")}
                      onDragStart={(e) => e.preventDefault()}
                      onClick={() =>
                        setActiveModalImage({
                          src: currentBefore,
                          alt: `${caseItem.title} - Before`,
                          label: caseItem.beforeLabel || "Before Treatment",
                          caseTitle: caseItem.title,
                        })
                      }
                      title="Click to inspect case details"
                    />

                    {/* Anti-Screenshot Obfuscation Shield */}
                    {isScreenCaptureShieldActive && (
                      <div className="absolute inset-0 z-30 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-3 text-center text-white">
                        <Lock className="w-5 h-5 text-[#C98B3E] mb-1" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                          ALLEN SHA PROTECTED
                        </span>
                        <span className="text-[8px] text-neutral-300 mt-0.5">
                          Screen Capture Disabled
                        </span>
                      </div>
                    )}

                    {/* Before Badge */}
                    <div className="absolute top-1.5 sm:top-2.5 left-1.5 sm:left-2.5 bg-red-600/90 backdrop-blur-sm text-white text-[9px] sm:text-[11px] font-bold px-1.5 sm:px-2.5 py-0.5 rounded-full shadow tracking-wider uppercase z-20 pointer-events-none">
                      BEFORE
                    </div>

                    {/* Multi-angle switcher if case has multiple before images */}
                    {hasMultipleBefore && (
                      <div className="absolute top-1.5 sm:top-2.5 right-1.5 sm:right-2.5 flex items-center gap-1 bg-black/60 backdrop-blur-md rounded-full p-0.5 border border-white/20 z-20">
                        {caseItem.beforeImages!.map((imgUrl, i) => (
                          <button
                            key={imgUrl}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelectBeforeImage(caseItem.id, imgUrl);
                            }}
                            className={`px-1.5 sm:px-2 py-0.5 rounded-full text-[8px] sm:text-[10px] font-bold transition-all ${
                              currentBefore === imgUrl
                                ? "bg-white text-[#1F4B3F] shadow"
                                : "text-white/80 hover:text-white"
                            }`}
                          >
                            V{i + 1}
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Enlarge Trigger */}
                    <button
                      type="button"
                      onClick={() =>
                        setActiveModalImage({
                          src: currentBefore,
                          alt: `${caseItem.title} - Before`,
                          label: caseItem.beforeLabel || "Before Treatment",
                          caseTitle: caseItem.title,
                        })
                      }
                      className="absolute bottom-1.5 sm:bottom-2.5 right-1.5 sm:right-2.5 p-1 sm:p-1.5 rounded-lg bg-black/50 text-white hover:bg-black/80 transition-colors z-20"
                      title="View enlarged image"
                      aria-label="Enlarge before image"
                    >
                      <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>

                    <div className="absolute bottom-1.5 sm:bottom-2.5 left-1.5 sm:left-2.5 right-7 sm:right-10 text-[9px] sm:text-[11px] text-white/95 font-medium leading-tight truncate z-20 pointer-events-none">
                      {hasMultipleBefore
                        ? `Before (${caseItem.beforeImages!.indexOf(currentBefore) + 1}/${caseItem.beforeImages!.length})`
                        : caseItem.beforeLabel || "Before Treatment"}
                    </div>
                  </div>

                  {/* After Image Frame */}
                  <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-neutral-200 group/img shadow-sm ring-2 ring-[#1F4B3F]/20 protected-clinical-image">
                    <Image
                      src={caseItem.afterImage}
                      alt={`${caseItem.title} - After Homeopathy Treatment`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 30vw"
                      draggable={false}
                      className="object-cover object-center transition-transform duration-500 group-hover/img:scale-105 pointer-events-none select-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F4B3F]/70 via-transparent to-transparent pointer-events-none" />

                    {/* Transparent Protective Click / Context Shield */}
                    <div
                      className="absolute inset-0 z-20 cursor-pointer"
                      onContextMenu={(e) => handleProtectedContextMenu(e, caseItem.afterImage, caseItem.title, "After")}
                      onDragStart={(e) => e.preventDefault()}
                      onClick={() =>
                        setActiveModalImage({
                          src: caseItem.afterImage,
                          alt: `${caseItem.title} - After`,
                          label: caseItem.afterLabel || "After Homeopathy",
                          caseTitle: caseItem.title,
                        })
                      }
                      title="Click to inspect case details"
                    />

                    {/* Anti-Screenshot Obfuscation Shield */}
                    {isScreenCaptureShieldActive && (
                      <div className="absolute inset-0 z-30 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-3 text-center text-white">
                        <Lock className="w-5 h-5 text-[#C98B3E] mb-1" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                          ALLEN SHA PROTECTED
                        </span>
                        <span className="text-[8px] text-neutral-300 mt-0.5">
                          Screen Capture Disabled
                        </span>
                      </div>
                    )}

                    {/* After Badge */}
                    <div className="absolute top-1.5 sm:top-2.5 left-1.5 sm:left-2.5 bg-emerald-700/90 backdrop-blur-sm text-white text-[9px] sm:text-[11px] font-bold px-1.5 sm:px-2.5 py-0.5 rounded-full shadow tracking-wider uppercase flex items-center gap-0.5 sm:gap-1 z-20 pointer-events-none">
                      <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-200" />
                      AFTER
                    </div>

                    {/* Enlarge Trigger */}
                    <button
                      type="button"
                      onClick={() =>
                        setActiveModalImage({
                          src: caseItem.afterImage,
                          alt: `${caseItem.title} - After`,
                          label: caseItem.afterLabel || "After Homeopathy",
                          caseTitle: caseItem.title,
                        })
                      }
                      className="absolute bottom-1.5 sm:bottom-2.5 right-1.5 sm:right-2.5 p-1 sm:p-1.5 rounded-lg bg-black/50 text-white hover:bg-black/80 transition-colors z-20"
                      title="View enlarged image"
                      aria-label="Enlarge after image"
                    >
                      <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>

                    <div className="absolute bottom-1.5 sm:bottom-2.5 left-1.5 sm:left-2.5 right-7 sm:right-10 text-[9px] sm:text-[11px] text-white/95 font-medium leading-tight truncate z-20 pointer-events-none">
                      {caseItem.afterLabel || "Complete Recovery"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Medical Description */}
              <div className="p-6 sm:p-7 pt-4 space-y-4">
                <p className="text-sm text-[#5C6659] leading-relaxed">
                  {caseItem.summary}
                </p>

                <div className="pt-3 border-t border-[#1F4B3F]/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="flex items-center gap-1.5 text-[#1F4B3F] font-semibold">
                    <ShieldCheck className="w-4 h-4 text-[#C98B3E]" />
                    Verified Clinical Outcome
                  </span>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-[#D9663B] font-semibold hover:text-[#c2552b] transition-colors"
                  >
                    Consult for this condition
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </motion.div>

      {/* Lightbox Modal with Protected Download */}
      <AnimatePresence>
        {activeModalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md select-none"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            >
              {/* Modal Header */}
              <div className="p-4 bg-[#1F4B3F] text-white flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-base leading-tight">
                    {activeModalImage.caseTitle}
                  </h4>
                  <span className="text-xs text-[#E8F0EB] font-medium">
                    {activeModalImage.label}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalImage(null)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
                  aria-label="Close image preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image View */}
              <div className="relative w-full aspect-[4/5] max-h-[70vh] bg-neutral-900 overflow-hidden">
                <Image
                  src={activeModalImage.src}
                  alt={activeModalImage.alt}
                  fill
                  sizes="100vw"
                  draggable={false}
                  className="object-contain pointer-events-none select-none"
                />

                {/* Protective Overlay Shield */}
                <div
                  className="absolute inset-0 z-20 cursor-default"
                  onContextMenu={(e) =>
                    handleProtectedContextMenu(
                      e,
                      activeModalImage.src,
                      activeModalImage.caseTitle,
                      activeModalImage.label
                    )
                  }
                  onDragStart={(e) => e.preventDefault()}
                />

                {/* Anti-Screenshot Overlay inside Modal */}
                {isScreenCaptureShieldActive && (
                  <div className="absolute inset-0 z-30 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-6 text-center text-white">
                    <Lock className="w-10 h-10 text-[#C98B3E] mb-3" />
                    <h4 className="text-lg font-bold tracking-wider text-emerald-300">
                      ALLEN SHA CLINICAL RECORD
                    </h4>
                    <p className="text-xs text-neutral-300 mt-1 max-w-xs">
                      Screen capture is restricted on patient clinical photography.
                    </p>
                  </div>
                )}
              </div>

              {/* Modal Footer Note with Download Watermarked Button */}
              <div className="p-3.5 sm:p-4 bg-[#FAF7F0] border-t border-[#1F4B3F]/10 flex items-center justify-between gap-3 text-xs text-[#5C6659] flex-wrap">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#1F4B3F]" />
                  <span>Allensha Homeopathy Clinical Records</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      handleDownloadWatermarked(
                        activeModalImage.src,
                        activeModalImage.caseTitle,
                        activeModalImage.label
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1F4B3F] text-white font-semibold text-xs hover:bg-[#173a30] transition-colors shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5 text-[#C98B3E]" />
                    <span>Download (Watermarked)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveModalImage(null)}
                    className="text-[#D9663B] font-semibold hover:underline"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
