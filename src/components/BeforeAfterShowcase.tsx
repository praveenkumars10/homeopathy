"use client";

import React, { useState } from "react";
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
  Layers,
} from "lucide-react";

export function BeforeAfterShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedBeforeMap, setSelectedBeforeMap] = useState<Record<string, string>>({});
  const [activeModalImage, setActiveModalImage] = useState<{
    src: string;
    alt: string;
    label: string;
    caseTitle: string;
  } | null>(null);

  // Derive unique categories
  const categories = ["All", ...Array.from(new Set(CLINICAL_CASES.map((c) => c.category)))];

  const filteredCases =
    selectedCategory === "All"
      ? CLINICAL_CASES
      : CLINICAL_CASES.filter((c) => c.category === selectedCategory);

  const getActiveBeforeImage = (caseItem: ClinicalCase) => {
    return selectedBeforeMap[caseItem.id] || caseItem.beforeImage;
  };

  const handleSelectBeforeImage = (caseId: string, imageSrc: string) => {
    setSelectedBeforeMap((prev) => ({ ...prev, [caseId]: imageSrc }));
  };

  return (
    <div className="space-y-8">
      {/* Category Filter Pills */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              selectedCategory === cat
                ? "bg-[#1F4B3F] text-white shadow-sm"
                : "bg-white text-[#5C6659] border border-[#1F4B3F]/15 hover:bg-[#E8F0EB] hover:text-[#1F4B3F]"
            }`}
          >
            {cat} {cat === "All" && `(${CLINICAL_CASES.length})`}
          </button>
        ))}
      </div>

      {/* Case Studies Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
      >
        {filteredCases.map((caseItem) => {
          const currentBefore = getActiveBeforeImage(caseItem);
          const hasMultipleBefore = caseItem.beforeImages && caseItem.beforeImages.length > 1;

          return (
            <motion.article
              key={caseItem.id}
              variants={fadeInUp}
              className="bg-white rounded-3xl overflow-hidden border border-[#1F4B3F]/15 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
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

              {/* Visual Comparison: Before & After Side-by-Side (Persists in 2-Columns on Mobile) */}
              <div className="px-3 sm:px-7 py-2">
                <div className="grid grid-cols-2 gap-2 sm:gap-3.5 bg-[#FAF7F0] p-2 sm:p-3 rounded-2xl border border-[#1F4B3F]/10">
                  {/* Before Image Frame */}
                  <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-neutral-200 group/img shadow-sm">
                    <Image
                      key={currentBefore}
                      src={currentBefore}
                      alt={`${caseItem.title} - Before Homeopathy Treatment`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 30vw"
                      className="object-cover object-center transition-transform duration-500 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Before Badge */}
                    <div className="absolute top-1.5 sm:top-2.5 left-1.5 sm:left-2.5 bg-red-600/90 backdrop-blur-sm text-white text-[9px] sm:text-[11px] font-bold px-1.5 sm:px-2.5 py-0.5 rounded-full shadow tracking-wider uppercase">
                      BEFORE
                    </div>

                    {/* Multi-angle switcher if case has multiple before images */}
                    {hasMultipleBefore && (
                      <div className="absolute top-1.5 sm:top-2.5 right-1.5 sm:right-2.5 flex items-center gap-1 bg-black/60 backdrop-blur-md rounded-full p-0.5 border border-white/20">
                        {caseItem.beforeImages!.map((imgUrl, i) => (
                          <button
                            key={imgUrl}
                            type="button"
                            onClick={() => handleSelectBeforeImage(caseItem.id, imgUrl)}
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
                      className="absolute bottom-1.5 sm:bottom-2.5 right-1.5 sm:right-2.5 p-1 sm:p-1.5 rounded-lg bg-black/50 text-white hover:bg-black/80 transition-colors"
                      title="View enlarged image"
                      aria-label="Enlarge before image"
                    >
                      <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>

                    <div className="absolute bottom-1.5 sm:bottom-2.5 left-1.5 sm:left-2.5 right-7 sm:right-10 text-[9px] sm:text-[11px] text-white/95 font-medium leading-tight truncate">
                      {hasMultipleBefore
                        ? `Before (${caseItem.beforeImages!.indexOf(currentBefore) + 1}/${caseItem.beforeImages!.length})`
                        : caseItem.beforeLabel || "Before Treatment"}
                    </div>
                  </div>

                  {/* After Image Frame */}
                  <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-neutral-200 group/img shadow-sm ring-2 ring-[#1F4B3F]/20">
                    <Image
                      src={caseItem.afterImage}
                      alt={`${caseItem.title} - After Homeopathy Treatment`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 30vw"
                      className="object-cover object-center transition-transform duration-500 group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F4B3F]/70 via-transparent to-transparent pointer-events-none" />

                    {/* After Badge */}
                    <div className="absolute top-1.5 sm:top-2.5 left-1.5 sm:left-2.5 bg-emerald-700/90 backdrop-blur-sm text-white text-[9px] sm:text-[11px] font-bold px-1.5 sm:px-2.5 py-0.5 rounded-full shadow tracking-wider uppercase flex items-center gap-0.5 sm:gap-1">
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
                      className="absolute bottom-1.5 sm:bottom-2.5 right-1.5 sm:right-2.5 p-1 sm:p-1.5 rounded-lg bg-black/50 text-white hover:bg-black/80 transition-colors"
                      title="View enlarged image"
                      aria-label="Enlarge after image"
                    >
                      <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>

                    <div className="absolute bottom-1.5 sm:bottom-2.5 left-1.5 sm:left-2.5 right-7 sm:right-10 text-[9px] sm:text-[11px] text-white/95 font-medium leading-tight truncate">
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeModalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
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
              <div className="relative w-full aspect-[4/5] max-h-[70vh] bg-neutral-900">
                <Image
                  src={activeModalImage.src}
                  alt={activeModalImage.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {/* Modal Footer Note */}
              <div className="p-3.5 bg-[#FAF7F0] text-center text-xs text-[#5C6659] border-t border-[#1F4B3F]/10 flex items-center justify-between">
                <span>Allensha Homeopathy Clinical Records</span>
                <button
                  type="button"
                  onClick={() => setActiveModalImage(null)}
                  className="text-[#D9663B] font-semibold hover:underline"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
