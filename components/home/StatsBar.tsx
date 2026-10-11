"use client";

import { statsData } from "@/data/homepage";
import { BookMarked, Award, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

// Semantic icon mapping:
//   statsData[0] — 34.619 Tấm mộc bản  → BookMarked (archive / woodblock)
//   statsData[1] — 2009   UNESCO        → Award      (heritage / recognition)
//   statsData[2] — Huế    Triển khai    → MapPin     (location / deployment)
const icons = [BookMarked, Award, MapPin];

export default function StatsBar() {
  return (
    <section
      className="relative z-20 w-full"
      aria-label="Thống kê dự án"
      id="stats"
      style={{
        background: "linear-gradient(180deg, #FAF9F5 0%, #FAFAF7 60px)",
        paddingTop: "2.5rem",
        paddingBottom: "0.5rem",
      }}
    >
      {/* 
        TRUE CENTER ALIGNMENT ARCHITECTURE:
        - Outer wrapper: w-full flex justify-center across entire viewport width
        - Symmetrical padding: px-4 sm:px-6 ensures equal margins left/right
        - ScrollReveal: explicit w-full flex justify-center on motion.div
        - Module container: controlled editorial width (maxWidth: 880px, width: 100%)
        - Invariant: moduleCenter === viewportCenter (Horizontal offset ≈ 0px)
      */}
      <div className="w-full flex justify-center px-4 sm:px-6">
        <ScrollReveal delay={0.15} direction="up" className="w-full flex justify-center">
          <div
            className="w-full rounded-2xl bg-white/95 backdrop-blur-xs border border-[#E0D9CF]/80 shadow-[0_2px_12px_rgba(28,43,58,0.03)] overflow-hidden"
            style={{
              maxWidth: "880px",
              width: "100%",
              marginInline: "auto",
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E0D9CF]/60 w-full">
              {statsData.map((stat, i) => {
                const Icon = icons[i] || BookMarked;
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center text-center px-6 py-7 sm:py-8 lg:py-9 transition-colors duration-300 hover:bg-[#FAF7F2]/60 group w-full"
                  >
                    {/* 1. Icon — Perfectly Centered on Column Axis with Museum Bronze Badge */}
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mb-3.5 transition-all duration-300 bg-[#C8860A]/[0.08] border border-[#C8860A]/20 text-[#C8860A] group-hover:bg-[#C8860A] group-hover:text-white group-hover:border-[#C8860A]"
                      aria-hidden="true"
                    >
                      <Icon
                        size={19}
                        className="transition-colors duration-300"
                        strokeWidth={1.9}
                      />
                    </div>

                    {/* 2. Value — Equal Optical Height & Baseline for 34.619, 2009, Huế */}
                    <div
                      className="h-10 sm:h-12 flex items-center justify-center text-center text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-gradient-gold leading-none tracking-tight mb-2 w-full"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {stat.value}
                    </div>

                    {/* 3. Label — Perfectly Centered Across Column */}
                    <div className="text-[0.875rem] sm:text-[0.9375rem] font-bold text-[#1C2B3A] text-center leading-tight mb-1 w-full">
                      {stat.label}
                    </div>

                    {/* 4. Sublabel — Perfectly Centered & Tracked */}
                    <div className="text-[0.6875rem] sm:text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[#7B8A95] text-center leading-relaxed w-full">
                      {stat.sub}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
