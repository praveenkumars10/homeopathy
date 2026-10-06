"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { TREATMENTS } from "@/lib/constants";
import { ArrowLeft, ArrowRight, Sparkles, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface TreatmentsProps {
  onSelectCondition?: (conditionTitle: string) => void;
}

export function Treatments({ onSelectCondition }: TreatmentsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  // Check scroll positions for button active state
  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      checkScrollability();
      el.addEventListener("scroll", checkScrollability);
      window.addEventListener("resize", checkScrollability);
      return () => {
        el.removeEventListener("scroll", checkScrollability);
        window.removeEventListener("resize", checkScrollability);
      };
    }
  }, []);

  // Slide left / right with seamless looping
  const slideLeft = () => {
    if (scrollContainerRef.current) {
      const el = scrollContainerRef.current;
      const cardWidth = 310;
      if (el.scrollLeft <= 15) {
        el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
      } else {
        el.scrollBy({ left: -cardWidth, behavior: "smooth" });
      }
    }
  };

  const slideRight = () => {
    if (scrollContainerRef.current) {
      const el = scrollContainerRef.current;
      const cardWidth = 310;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 20) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }
  };

  // Mouse drag to scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeftState(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleConsultClick = (conditionTitle: string) => {
    if (onSelectCondition) {
      onSelectCondition(conditionTitle);
    }
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="treatments" className="py-16 md:py-24 bg-[#FAF7F0] relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 -left-20 w-72 h-72 rounded-full bg-[#E8F0EB]/60 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-72 h-72 rounded-full bg-[#C98B3E]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Left Text & Right Nav Arrow Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F0EB] text-[#1F4B3F] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C98B3E]" />
              <span>Specialized Constitutional Care</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F4B3F] tracking-tight">
              What We Treat?
            </h2>

            <p className="text-[#5C6659] text-base sm:text-lg leading-relaxed">
              Behind every symptom is a person. From hair loss and stubborn skin conditions to women&apos;s, child, mental and chronic health — we find the root cause and treat it to last.
            </p>
          </div>

          {/* Carousel Navigation Buttons (←) and (→) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={slideLeft}
              aria-label="Scroll treatments left"
              className="w-12 h-12 rounded-full border border-[#1F4B3F]/25 bg-white text-[#1F4B3F] hover:bg-[#1F4B3F] hover:text-white shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer active:scale-90 flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={slideRight}
              aria-label="Scroll treatments right"
              className="w-12 h-12 rounded-full border border-[#1F4B3F]/25 bg-white text-[#1F4B3F] hover:bg-[#1F4B3F] hover:text-white shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer active:scale-90 flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sliding Arched Cards Container */}
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-2 select-none cursor-grab ${
            isDragging ? "cursor-grabbing" : ""
          } [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden`}
        >
          {TREATMENTS.map((item, idx) => {
            // 8 Distinct Architectural & Organic Card Silhouettes matching reference
            const distinctShapes = [
              // 1. Asymmetric Left Wave Arch (high arch on left shoulder)
              "rounded-tl-[160px] rounded-tr-[32px] rounded-b-[28px]",
              // 2. Classical Symmetrical Roman Arch (full top dome)
              "rounded-t-[160px] rounded-b-[28px]",
              // 3. Complete Oval Capsule / Pill Silhouette
              "rounded-[150px]",
              // 4. Soft Architectural Tablet (smooth rounded rectangle)
              "rounded-[36px]",
              // 5. Asymmetric Right Wave Arch (high arch on right shoulder)
              "rounded-tr-[160px] rounded-tl-[32px] rounded-b-[28px]",
              // 6. Organic Botanical Leaf (diagonal curves)
              "rounded-tl-[160px] rounded-br-[160px] rounded-tr-[32px] rounded-bl-[32px]",
              // 7. Tall Cathedral Dome Arch
              "rounded-t-[160px] rounded-b-[56px]",
              // 8. Inverted Botanical Crest (reverse diagonal curves)
              "rounded-tr-[160px] rounded-bl-[160px] rounded-tl-[32px] rounded-br-[32px]",
            ];
            const archClass = distinctShapes[idx % distinctShapes.length];

            return (
              <motion.div
                key={item.id}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onClick={() => handleConsultClick(item.title)}
                className={`group relative shrink-0 w-[245px] sm:w-[275px] md:w-[290px] h-[385px] sm:h-[435px] overflow-hidden ${archClass} shadow-md hover:shadow-2xl transition-all duration-300 snap-start border border-[#1F4B3F]/15 cursor-pointer bg-[#FAF7F0]`}
              >
                {/* Background Treatment Image */}
                <Image
                  src={item.image}
                  alt={item.cardTitle}
                  fill
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 290px, 320px"
                  className="object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Rich Gradient Vignette Overlay for Crisp White Typography */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 group-hover:from-black/90 group-hover:via-black/45 transition-colors duration-300" />

                {/* Subtle Top Category Badge */}
                <div className="absolute top-6 left-0 right-0 flex justify-center z-10 px-4">
                  <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-white/90 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    {item.category.split("&")[0].trim()}
                  </span>
                </div>

                {/* Centered / Bottom Card Content matching the reference */}
                <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end items-center text-center">
                  {/* Card Title */}
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-white drop-shadow-md leading-snug mb-2 group-hover:text-[#F7EFE3] transition-colors">
                    {item.cardTitle}
                  </h3>

                  {/* Short Condition Summary on Hover / Subtle info */}
                  <p className="text-xs text-white/80 line-clamp-2 max-w-[230px] mb-4 opacity-90 font-light drop-shadow">
                    {item.shortDescription}
                  </p>

                  {/* "Learn more" Link with Arrow matching the reference design */}
                  <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white group-hover:text-[#D9663B] group-hover:underline transition-colors pb-1">
                    <span>Learn more</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Active hover border highlight */}
                <div className="absolute inset-0 rounded-[inherit] border-2 border-transparent group-hover:border-[#D9663B]/60 transition-colors pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Helper Indicator: Drag & Swipe note */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5C6659] border-t border-[#1F4B3F]/10 pt-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C98B3E] animate-pulse" />
            <span>Click any treatment to book a tailored consultation</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Use arrows or drag to view all 8 clinical focus areas</span>
            <a
              href="#contact"
              className="text-[#D9663B] font-semibold hover:underline flex items-center gap-1"
            >
              Consult for another condition &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
