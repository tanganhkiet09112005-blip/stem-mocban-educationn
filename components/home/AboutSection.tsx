"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import CTAButton from "@/components/ui/CTAButton";
import { aboutContent } from "@/data/homepage";
import { CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const highlights = [
  "Thiết kế dựa trên tư liệu gốc từ 34.619 tấm Mộc bản",
  "Tích hợp kiến thức liên môn (Văn, Sử, Địa)",
  "Phát triển kỹ năng thế kỷ 21 qua trò chơi học tập",
  "Ứng dụng thực nghiệm thành công tại các trường THPT",
];

export default function AboutSection() {
  return (
    <section
      className="section-padding bg-[#F5F0E8] relative"
      id="about"
      aria-label="Về dự án"
    >
      <div className="absolute inset-0 texture-paper pointer-events-none" />
      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 xl:gap-24 items-center">
          {/* Text */}
          <ScrollReveal delay={0.2} direction="right">
            <div>
              <SectionTitle
                eyebrow={aboutContent.eyebrow}
                title={aboutContent.title}
                className="mb-8"
              />

              <div className="space-y-6 mb-10">
                {aboutContent.paragraphs.map((p, i) => (
                  <p key={i} className="text-[#556070] text-lg leading-relaxed font-medium">
                    {p}
                  </p>
                ))}
              </div>

              {/* Highlights */}
              <ul className="space-y-5 mb-12">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-4 text-lg text-[#1C2B3A] font-bold">
                    <CheckCircle2 size={24} className="text-[#1E4976] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <CTAButton href={aboutContent.cta.href} variant="primary" className="!px-10 !py-4 text-lg shadow-academic">
                {aboutContent.cta.label}
              </CTAButton>
            </div>
          </ScrollReveal>

          {/* Visual collage */}
          <ScrollReveal delay={0.3} direction="left" className="relative">
            {/* Main card */}
            <div className="relative rounded-[2.5rem] overflow-hidden bg-[#1E4976] aspect-[4/3] shadow-card-lg border border-white/20 group">
              <div className="absolute inset-0 pattern-heritage opacity-20 mix-blend-overlay group-hover:scale-110 transition-transform duration-700" />
              <div className="relative p-10 md:p-14 flex flex-col justify-center h-full text-white">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C8860A] mb-5 drop-shadow-sm">
                  Sáng tạo & Tương tác
                </p>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                  Gamification trong<br />Giáo dục Lịch sử
                </h3>
                <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-md font-medium">
                  Biến những kiến thức lịch sử khô khan thành các trò chơi chiến thuật, bộ kit giải mã hấp dẫn, giúp học sinh chủ động khám phá di sản.
                </p>
                <div className="flex items-center gap-8">
                  <div>
                    <div className="text-4xl font-bold text-[#C8860A] mb-1" style={{ fontFamily: "var(--font-heading)" }}>2</div>
                    <div className="text-sm font-bold text-white/80 uppercase tracking-widest">Sản phẩm hoàn thiện</div>
                  </div>
                  <div className="w-px h-16 bg-white/20" aria-hidden="true" />
                  <div>
                    <div className="text-4xl font-bold text-[#C8860A] mb-1" style={{ fontFamily: "var(--font-heading)" }}>100%</div>
                    <div className="text-sm font-bold text-white/80 uppercase tracking-widest">Tích hợp dữ liệu gốc</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-10 -right-10 bg-white rounded-[2rem] p-8 shadow-[0_20px_60px_rgba(28,43,58,0.15)] border border-[#E0D9CF] max-w-[280px] animate-bounce-slow">
              <div className="text-[0.8125rem] font-bold uppercase tracking-[0.2em] text-[#1E4976] mb-3">Học sinh trải nghiệm</div>
              <div className="text-5xl font-bold text-[#1C2B3A] mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                500+
              </div>
              <div className="text-base font-bold text-[#7B8A95] mb-5">tại các trường THPT Huế</div>
              <div className="flex -space-x-3">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-4 border-white flex items-center justify-center text-white text-xs font-bold shadow-sm"
                    style={{ background: `hsl(${210 + i * 15}, 60%, ${40 + i * 5}%)` }}
                    aria-hidden="true"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-white bg-[#C8860A] flex items-center justify-center text-white text-sm font-bold shadow-sm">
                  +
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
