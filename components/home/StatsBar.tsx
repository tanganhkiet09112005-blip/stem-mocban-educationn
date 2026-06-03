"use client";

import { statsData } from "@/data/homepage";
import { BookMarked, Layers, Award, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const icons = [BookMarked, Layers, Award, MapPin];

export default function StatsBar() {
  return (
    <section
      className="relative z-20 -mt-20 sm:-mt-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto"
      aria-label="Thống kê dự án"
      id="stats"
    >
      <ScrollReveal delay={0.2} direction="up">
        <div className="container-main !px-0">
          <div className="grid grid-cols-2 lg:grid-cols-4 rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(28,43,58,0.15)] border border-[#E0D9CF] bg-white relative backdrop-blur-2xl bg-white/90">
            {statsData.map((stat, i) => {
              const Icon = icons[i] || BookMarked;
              return (
                <div
                  key={i}
                  className="group relative px-6 py-10 md:py-12 flex flex-col items-center text-center border-b lg:border-b-0 lg:border-r border-[#E0D9CF]/60 last:border-b-0 last:border-r-0 hover:bg-[#F5F0E8]/50 transition-colors duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[rgba(30,73,118,0.06)] flex items-center justify-center mb-5 group-hover:bg-[#1E4976] group-hover:text-white transition-all duration-500 shadow-sm">
                    <Icon size={24} className="text-[#1E4976] group-hover:text-white transition-colors" strokeWidth={2} />
                  </div>
                  <div
                    className="text-4xl md:text-5xl font-bold mb-2 text-gradient-gold leading-none tracking-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[1.0625rem] font-bold text-[#1C2B3A] mb-1.5 leading-tight">
                    {stat.label}
                  </div>
                  <div className="text-[0.8125rem] text-[#7B8A95] font-bold uppercase tracking-[0.15em] mt-1">{stat.sub}</div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
