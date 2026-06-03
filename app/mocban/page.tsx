"use client";

import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import FeatureCard from "@/components/ui/FeatureCard";
import CTAButton from "@/components/ui/CTAButton";
import { mocbanIntro, mocbanStories, mocbanResources } from "@/data/mocban";
import {
  FileImage, MousePointerClick, Video, FileText,
  BookOpen, Landmark, Search
} from "lucide-react";
import type { FeatureItem } from "@/data/homepage";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const RESOURCE_ICON: Record<string, React.ElementType> = {
  Image:       FileImage,
  Interactive: MousePointerClick,
  Video:       Video,
  PDF:         FileText,
};

const RESOURCE_COLOR: Record<string, string> = {
  Image:       "text-[#1E4976] bg-[rgba(30,73,118,0.08)]",
  Interactive: "text-[#C8860A] bg-[rgba(200,134,10,0.08)]",
  Video:       "text-[#7C5C2E] bg-[rgba(124,92,46,0.08)]",
  PDF:         "text-[#1E4976] bg-[rgba(30,73,118,0.08)]",
};

function toFeatureItem(story: typeof mocbanStories[0]): FeatureItem {
  return {
    id: story.id,
    icon: story.icon,
    title: story.title,
    description: story.excerpt,
    href: `/mocban#${story.id}`,
    color: story.color as "academic" | "wood" | "gold",
  };
}

export default function MocBanPage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* ── Page Header ─────────────────────────────────── */}
      <div className="page-header pt-24 md:pt-32">
        <div className="container-main">
          <ScrollReveal delay={0}>
            <div className="flex items-center gap-3 mb-5">
              <Landmark size={20} className="text-[#A37840]" />
              <p className="text-[0.8125rem] font-bold uppercase tracking-[0.25em] text-[#A37840]">
                Di sản Tư liệu Thế giới UNESCO 2009
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1
              className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-white mb-8 max-w-5xl leading-[1.05]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Tìm hiểu Mộc bản triều Nguyễn
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-white/80 text-xl md:text-2xl max-w-3xl leading-relaxed font-medium">
              Khám phá kho tàng lịch sử và văn hóa vĩ đại được lưu giữ trên những tấm gỗ thị hàng trăm năm tuổi.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Block A: Lịch sử & Khái niệm ─────────────── */}
      <section className="section-padding bg-[#FAFAF7]" id="lich-su" aria-label="Lịch sử và khái niệm">
        <div className="container-main">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-start">
            
            {/* Left: Content */}
            <div>
              <ScrollReveal delay={0.1}>
                <SectionTitle
                  eyebrow={mocbanIntro.eyebrow}
                  title={mocbanIntro.title}
                  description={mocbanIntro.description}
                  className="mb-14 max-w-xl"
                />
              </ScrollReveal>
              <div className="space-y-8">
                {mocbanIntro.sections.map((sec, idx) => (
                  <ScrollReveal key={idx} delay={0.1 * (idx + 1)} direction="up">
                    <div className="flex items-start gap-6 p-8 rounded-[2rem] bg-white border border-[#E0D9CF] shadow-sm hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1E4976] to-[#163558] flex items-center justify-center flex-shrink-0 text-white font-bold text-2xl shadow-academic">
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#1C2B3A] mb-3 leading-snug" style={{ fontFamily: "var(--font-heading)" }}>
                          {sec.title}
                        </h3>
                        <p className="text-[#556070] leading-relaxed text-[1.0625rem] font-medium">
                          {sec.content}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Right: Visual / UNESCO Highlight */}
            <div className="sticky top-28 space-y-10">
              <ScrollReveal delay={0.2} direction="left">
                <div className="rounded-[2.5rem] p-10 md:p-12 text-white relative overflow-hidden shadow-card-lg border border-[#163558] group hover:scale-[1.02] transition-transform duration-500" style={{ background: "linear-gradient(135deg, #163558 0%, #1E4976 100%)" }}>
                  <div className="absolute inset-0 pattern-heritage opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000" aria-hidden="true" />
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mb-8 shadow-sm border border-white/20 backdrop-blur-md">
                      <Landmark size={40} strokeWidth={1.5} className="text-[#C8860A]" />
                    </div>
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C8860A] mb-3">UNESCO 2009</p>
                    <h3 className="text-4xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                      Di sản Tư liệu Thế giới
                    </h3>
                    <p className="text-white/80 text-[1.0625rem] leading-relaxed font-medium">
                      Mộc bản triều Nguyễn được UNESCO ghi danh vào Chương trình Ký ức Thế giới (Memory of the World) — khẳng định giá trị toàn cầu của nền văn hiến Việt Nam.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.3} direction="left">
                <div className="p-10 rounded-[2.5rem] bg-white border border-[#E0D9CF] shadow-sm">
                   <h4 className="font-bold text-[#1C2B3A] text-2xl mb-10 border-b border-[#E0D9CF] pb-5" style={{ fontFamily: "var(--font-heading)" }}>Dấu mốc thời gian</h4>
                   <div ref={targetRef} className="relative">
                     {/* Timeline Line drawn on scroll */}
                     <motion.div 
                        style={{ scaleY }} 
                        className="absolute left-4 top-2 bottom-2 w-1 bg-[#1E4976] origin-top z-10" 
                     />
                     <div className="absolute left-4 top-2 bottom-2 w-1 bg-[#E0D9CF] z-0" />

                     <ul className="space-y-10 relative z-20">
                        <li className="relative pl-14">
                          <span className="absolute left-[3px] top-1.5 w-[26px] h-[26px] rounded-full bg-white border-4 border-[#C8860A] shadow-sm" />
                          <div className="font-bold text-[#1E4976] mb-1.5 text-lg">Năm 1820</div>
                          <div className="text-base text-[#556070] font-medium">Bắt đầu biên soạn và khắc in các bộ sử lớn.</div>
                        </li>
                        <li className="relative pl-14">
                          <span className="absolute left-[3px] top-1.5 w-[26px] h-[26px] rounded-full bg-white border-4 border-[#1E4976] shadow-sm" />
                          <div className="font-bold text-[#1E4976] mb-1.5 text-lg">Thế kỷ XIX</div>
                          <div className="text-base text-[#556070] font-medium">Giai đoạn khắc in mộc bản thịnh vượng nhất.</div>
                        </li>
                        <li className="relative pl-14">
                          <span className="absolute left-[3px] top-1.5 w-[26px] h-[26px] rounded-full bg-white border-4 border-[#7C5C2E] shadow-sm" />
                          <div className="font-bold text-[#1E4976] mb-1.5 text-lg">Năm 2009</div>
                          <div className="text-base text-[#556070] font-medium">Chính thức được UNESCO vinh danh.</div>
                        </li>
                     </ul>
                   </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── Block B: Chuyên đề ─────────────────────────── */}
      <section className="section-padding bg-[#F5F0E8] relative" id="chuyen-de" aria-label="Câu chuyện Mộc bản">
        <div className="absolute inset-0 texture-paper opacity-50 pointer-events-none" />
        <div className="container-main relative z-10">
          <ScrollReveal delay={0.1}>
            <SectionTitle
              eyebrow="Chuyên đề"
              title="Câu chuyện từ Mộc bản"
              description="Những bài học lịch sử và giá trị nhân văn được ghi khắc qua từng nét chữ trên tấm gỗ thị."
              align="center"
              className="max-w-3xl mx-auto mb-20"
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {mocbanStories.map((story, i) => (
              <ScrollReveal key={story.id} delay={0.1 * (i + 1)} direction="up">
                <FeatureCard item={toFeatureItem(story)} className="h-full bg-white" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Block C: Tư liệu học tập ───────────────────── */}
      <section className="section-padding bg-white" id="tu-lieu" aria-label="Thư viện tư liệu học tập">
        <div className="container-main">
          <ScrollReveal delay={0.1}>
            <SectionTitle
              eyebrow="Tư liệu"
              title="Thư viện học tập"
              description="Nguồn tài nguyên số phục vụ giảng dạy và tự học về Mộc bản triều Nguyễn."
              className="mb-20 max-w-3xl"
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14">
            {mocbanResources.map((group, groupIdx) => (
              <ScrollReveal key={group.category} delay={0.1 * (groupIdx + 1)} direction="up">
                <div className="bg-[#FAFAF7] p-8 rounded-[2rem] border border-[#E0D9CF] h-full shadow-sm hover:shadow-card-lg transition-shadow">
                  <h4
                    className="text-xl font-bold text-[#1C2B3A] uppercase tracking-[0.1em] pb-5 mb-8 border-b-2 border-[#1E4976]/20"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {group.category}
                  </h4>
                  <ul className="space-y-5">
                    {group.items.map((item, idx) => {
                      const Icon = RESOURCE_ICON[item.type] ?? BookOpen;
                      const colorCls = RESOURCE_COLOR[item.type] ?? "text-[#556070] bg-white";
                      return (
                        <li key={idx}>
                          <a
                            href="#"
                            className="group flex items-start gap-5 p-5 rounded-2xl bg-white border border-[#E0D9CF] hover:border-[#1E4976]/50 hover:shadow-md transition-all duration-300"
                          >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:-translate-y-1 ${colorCls}`}>
                              <Icon size={20} strokeWidth={2.5} />
                            </div>
                            <div className="min-w-0">
                              <span className="text-base font-bold text-[#1C2B3A] group-hover:text-[#1E4976] transition-colors leading-tight line-clamp-2 mb-1.5">
                                {item.title}
                              </span>
                              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#7B8A95] block">
                                {item.type}
                              </span>
                            </div>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-24 text-center">
              <CTAButton href="/hoc-tap" variant="primary" className="!px-12 !py-5 text-xl shadow-academic hover:-translate-y-1">
                <Search size={20} className="mr-2 inline" /> Khám phá thêm học liệu số
              </CTAButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
