"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import CTAButton from "@/components/ui/CTAButton";
import { aboutContent } from "@/data/homepage";
import { CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutSection() {
  return (
    <section
      className="section-padding bg-[#F5F0E8] relative"
      id="about"
      aria-label="Về dự án"
    >
      <div className="absolute inset-0 texture-paper opacity-50 pointer-events-none" />
      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Text — Pure Editorial (Type B: No boxes, typography leads) */}
          <ScrollReveal delay={0.2} direction="right">
            <div>
              <SectionTitle
                eyebrow={aboutContent.eyebrow}
                title={aboutContent.title}
                className="mb-6"
              />

              <div className="space-y-4 mb-8">
                {aboutContent.paragraphs.map((p, i) => (
                  <p key={i} className="text-[#556070] text-base md:text-lg leading-relaxed font-normal">
                    {p}
                  </p>
                ))}
              </div>

              {/* Highlights */}
              <ul className="space-y-3.5 mb-8">
                {aboutContent.focusList.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm md:text-base text-[#1C2B3A] font-medium leading-relaxed">
                    <CheckCircle2 size={20} className="text-[#1E4976] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <CTAButton href={aboutContent.cta.href} variant="primary" className="!px-8 !py-3.5 text-base shadow-sm">
                {aboutContent.cta.label}
              </CTAButton>
            </div>
          </ScrollReveal>

          {/* Visual collage */}
          <ScrollReveal delay={0.3} direction="left" className="relative pb-10 sm:pb-12 lg:pb-0">
            {/* Main card */}
            <div className="relative rounded-2xl overflow-hidden bg-[#1E4976] shadow-card border border-white/15 group min-h-[460px] sm:min-h-[480px] lg:min-h-[500px]">
              <div className="absolute inset-0 pattern-heritage opacity-15 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
              <div className="relative p-7 sm:p-9 lg:p-10 pb-28 sm:pb-32 lg:pb-32 flex flex-col justify-start h-full text-white">
                <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#E8A820] mb-3 drop-shadow-xs">
                  Sáng tạo & Trải nghiệm
                </p>
                <h3 
                  className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 leading-tight !text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Tích hợp Di sản vào<br />Dạy học Lịch sử
                </h3>
                <p className="text-sm sm:text-base text-white/85 leading-relaxed mb-6 sm:mb-8 max-w-md font-normal">
                  Chuyển hóa Mộc bản triều Nguyễn thành các trò chơi chiến thuật, bộ kit giải mã và học liệu số tương tác, giúp học sinh chủ động khám phá di sản.
                </p>
                <div className="flex items-center gap-6 sm:gap-8 pt-1">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-[#E8A820] mb-0.5">2</div>
                    <div className="text-[0.6875rem] sm:text-xs font-bold text-white/85 uppercase tracking-widest">Sản phẩm giáo dục</div>
                  </div>
                  <div className="w-px h-10 sm:h-12 bg-white/20" aria-hidden="true" />
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-[#E8A820] mb-0.5">STEAM</div>
                    <div className="text-[0.6875rem] sm:text-xs font-bold text-white/85 uppercase tracking-widest">Mô hình tích hợp</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent card - Authentic experimental schools */}
            <div className="absolute -bottom-8 sm:-bottom-10 lg:-bottom-12 -right-2 sm:-right-4 lg:-right-6 bg-white rounded-2xl p-5 sm:p-6 shadow-card-lg border border-[#E0D9CF]/80 max-w-[260px] sm:max-w-[285px] z-10 transition-transform duration-300 hover:-translate-y-1">
              <div className="text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-[#1E4976] mb-1.5">Địa bàn thực nghiệm</div>
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-[#1C2B3A] mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                2 Trường THPT
              </div>
              <div className="text-xs font-medium text-[#556070] mb-3 leading-snug">
                THPT Đặng Trần Côn & THPT Thuận Hóa (TP. Huế)
              </div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#1E4976]/[0.07] text-[#1E4976] text-[0.6875rem] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E4976]" />
                Nhiệm vụ T.26.XH.503.15
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
