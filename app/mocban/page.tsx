"use client";

import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import CTAButton from "@/components/ui/CTAButton";
import { mocbanIntro, timelineMilestones, mocbanTopics } from "@/data/mocban";
import { Landmark, ArrowRight, BookOpen, Scroll, GraduationCap, FileCheck } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const TOPIC_ICONS: Record<string, React.ElementType> = {
  Scroll: Scroll,
  BookOpen: BookOpen,
  GraduationCap: GraduationCap,
  FileCheck: FileCheck,
};

export default function MocBanPage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* ── Page Header ─────────────────────────────────── */}
      <div className="page-header pt-28 md:pt-36 pb-16 md:pb-20 relative overflow-hidden">
        {/* Subtle Heritage Backdrop */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src="/assets/mocban/mocban-header-citadel.webp"
            alt="Hoàng thành Huế - Cố đô di sản"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-15 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F4EFE6]/70 via-transparent to-[#FAFAF7]" />
        </div>

        <div className="container-main relative z-10">
          <ScrollReveal delay={0}>
            <div className="flex items-center gap-2.5 mb-4">
              <Landmark size={18} className="text-[#C8860A]" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C8860A]">
                Di sản Tư liệu Thế giới UNESCO 2009
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#1C2B3A] mb-5 max-w-5xl leading-[1.16]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Khám phá Mộc bản triều Nguyễn
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-[#556070] text-base md:text-lg max-w-3xl leading-relaxed font-normal">
              Tìm hiểu khối di sản tư liệu vô giá lưu giữ lịch sử, văn hóa, giáo dục và tư tưởng của dân tộc qua hệ thống bản khắc gỗ thị triều Nguyễn.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Block A: Khái niệm & 5 Điểm Cốt Lõi (Editorial Storytelling) ── */}
      <section className="section-padding bg-[#FAFAF7]" id="khai-niem" aria-label="Khái niệm và giá trị di sản">
        <div className="container-main">
          <div className="grid lg:grid-cols-[1.18fr_0.82fr] gap-12 lg:gap-16 items-start">
            
            {/* Left: 5 Concept Sections (A - E) — Editorial Stream (No Heavy Boxes) */}
            <div>
              <ScrollReveal delay={0.1}>
                <SectionTitle
                  eyebrow={mocbanIntro.eyebrow}
                  title={mocbanIntro.title}
                  description={mocbanIntro.description}
                  className="mb-10"
                />
              </ScrollReveal>

              <div className="space-y-8">
                {mocbanIntro.sections.map((sec, idx) => (
                  <ScrollReveal key={sec.code} delay={0.06 * (idx + 1)} direction="up">
                    <div className="pb-8 border-b border-[#E0D9CF]/50 last:border-b-0 group">
                      <div className="flex items-baseline gap-3 mb-2.5">
                        <span
                          className="text-xl sm:text-2xl font-bold text-[#1E4976] flex-shrink-0"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {sec.code}.
                        </span>
                        <h3
                          className="text-xl sm:text-[1.35rem] font-bold text-[#1C2B3A] group-hover:text-[#1E4976] transition-colors leading-snug"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {sec.title}
                        </h3>
                      </div>
                      <p className="text-[#556070] leading-relaxed text-base md:text-[1.0625rem] pl-7 sm:pl-8 font-normal max-w-2xl">
                        {sec.content}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Right: UNESCO Highlight & Timeline */}
            <div className="space-y-8 lg:sticky lg:top-28">
              {/* UNESCO Highlight Card */}
              <ScrollReveal delay={0.15} direction="left">
                <div
                  className="rounded-2xl p-7 sm:p-9 text-white relative overflow-hidden shadow-card"
                  style={{ background: "linear-gradient(145deg, #163558 0%, #1E4976 100%)" }}
                >
                  <div className="absolute inset-0 pointer-events-none z-0">
                    <Image
                      src="/assets/mocban/mocban-unesco-hands.webp"
                      alt="Hiện vật Mộc bản triều Nguyễn"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover opacity-20 mix-blend-luminosity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#163558] via-[#163558]/80 to-transparent" />
                  </div>
                  <div className="absolute inset-0 pattern-heritage opacity-15 pointer-events-none z-0" aria-hidden="true" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-5 text-[#C8860A]">
                      <Landmark size={24} strokeWidth={1.8} />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E8A820] mb-2">UNESCO 2009</p>
                    <h3
                      className="text-2xl font-bold text-white mb-2.5 leading-tight"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Di sản Tư liệu Thế giới
                    </h3>
                    <p className="text-white/80 text-sm sm:text-base leading-relaxed font-normal">
                      Mộc bản triều Nguyễn được UNESCO ghi danh vào Chương trình Ký ức Thế giới (Memory of the World) — khẳng định giá trị toàn cầu của nền văn hiến và di sản tư liệu Việt Nam.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              
              {/* Timeline (6 Milestones) — Editorial Timeline */}
              <ScrollReveal delay={0.2} direction="left">
                <div className="p-7 sm:p-8 rounded-2xl bg-white border border-[#E0D9CF]/60 shadow-[0_2px_12px_rgba(28,43,58,0.03)]">
                  <h4
                    className="font-bold text-[#1C2B3A] text-lg sm:text-xl mb-6 pb-3 border-b border-[#E0D9CF]/50"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    6 Dấu mốc lịch sử Mộc bản
                  </h4>
                  <div ref={targetRef} className="relative">
                    <motion.div 
                      style={{ scaleY }} 
                      className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-[#1E4976] origin-top z-10" 
                    />
                    <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-[#E0D9CF]/60 z-0" />

                    <ul className="space-y-6 relative z-20">
                      {timelineMilestones.map((milestone, idx) => (
                        <li key={idx} className="relative pl-8">
                          <span
                            className="absolute left-1 top-1 w-3.5 h-3.5 rounded-full bg-white border-2 shadow-xs"
                            style={{ borderColor: milestone.badgeColor }}
                            aria-hidden="true"
                          />
                          <div className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: milestone.badgeColor }}>
                            {milestone.year}
                          </div>
                          <div className="font-bold text-[#1C2B3A] text-sm sm:text-base mb-1">
                            {milestone.title}
                          </div>
                          <div className="text-xs sm:text-sm text-[#556070] leading-relaxed">
                            {milestone.desc}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── Block B: 4 Chuyên đề cốt lõi dẫn vào Subpages ─────────── */}
      <section className="section-padding bg-[#F5F0E8] relative" id="chuyen-de" aria-label="4 Chuyên đề Mộc bản">
        <div className="absolute inset-0 texture-paper opacity-50 pointer-events-none" />
        <div className="container-main relative z-10">
          <ScrollReveal delay={0.1}>
            <SectionTitle
              eyebrow="Nội dung chuyên sâu"
              title="4 Chủ đề Khám phá Mộc bản"
              description="Học sinh và giáo viên có thể tiếp cận di sản Mộc bản qua 4 lăng kính chuyên sâu về lịch sử, văn hóa, đạo học và phương pháp sử liệu."
              align="center"
              className="max-w-3xl mx-auto mb-14"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {mocbanTopics.map((topic, i) => {
              const IconComponent = TOPIC_ICONS[topic.icon] || BookOpen;
              const colorBg = {
                academic: "bg-[#1E4976] text-[#FAFAF7]",
                wood: "bg-[#7C5C2E] text-[#FAFAF7]",
                gold: "bg-[#C8860A] text-[#FAFAF7]",
              }[topic.color];

              return (
                <ScrollReveal key={topic.id} delay={0.08 * (i + 1)} direction="up">
                  <div className="group rounded-2xl bg-white border border-[#E0D9CF]/70 p-7 sm:p-9 shadow-[0_2px_10px_rgba(28,43,58,0.03)] hover:shadow-card hover:border-[#C8860A]/35 hover:-translate-y-0.5 transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-105 ${colorBg}`}>
                        <IconComponent size={22} strokeWidth={2} />
                      </div>
                      <span className="text-[0.6875rem] font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-[#FAFAF7] text-[#7C5C2E] border border-[#E0D9CF]/60">
                        {topic.tag}
                      </span>
                    </div>

                    <div className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-[#A37840] mb-1.5">
                      Chuyên đề {topic.order}
                    </div>

                    <h3
                      className="text-2xl sm:text-[1.65rem] font-bold mb-2 text-[#1C2B3A] group-hover:text-[#1E4976] transition-colors leading-tight text-balance"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {topic.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#1E4976] mb-3">
                      {topic.subtitle}
                    </p>
                    <p className="text-[#556070] mb-6 text-sm sm:text-base leading-relaxed line-clamp-3">
                      {topic.description}
                    </p>

                    <div className="mt-auto pt-5 border-t border-[#E0D9CF]/50 flex items-center justify-between">
                      <Link
                        href={topic.href}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#1E4976] group-hover:text-[#C8860A] transition-colors"
                      >
                        <span>Xem nội dung chuyên đề</span>
                        <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.25}>
            <div className="mt-14 text-center">
              <CTAButton href="/hoc-tap" variant="primary" className="!px-8 !py-3.5 text-base shadow-sm">
                Chuyển sang Thư viện Học liệu Giáo dục
              </CTAButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
