import type { Metadata } from "next";
import Link from "next/link";
import SubpageHeader from "@/components/mocban/SubpageHeader";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { mocbanSubpagesData } from "@/data/mocbanSubpages";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Dấu ấn lịch sử — STEAM MOCBAN EDUCATION",
  description:
    "Tìm hiểu 3 bộ sử lớn của triều Nguyễn: Đại Nam thực lục, Khâm định Việt sử Thông giám cương mục, Đại Nam nhất thống chí qua Mộc bản.",
};

export default function LichSuSubpage() {
  const data = mocbanSubpagesData["lich-su"];

  return (
    <>
      <SubpageHeader
        categoryNumber={data.categoryNumber}
        title={data.title}
        subtitle={data.subtitle}
        lead={data.lead}
      />

      <section className="section-padding bg-[#FAFAF7]">
        <div className="container-main max-w-5xl">
          {data.sections.map((section, sIdx) => (
            <div key={sIdx} className="space-y-12">
              <ScrollReveal delay={0.1}>
                <div className="pb-8 mb-10 border-b border-[#E0D9CF]/50">
                  <h2
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C2B3A] mb-3 leading-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {section.heading}
                  </h2>
                  {section.subheading && (
                    <p className="text-base sm:text-lg font-semibold text-[#7C5C2E]">
                      {section.subheading}
                    </p>
                  )}
                  {section.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className="mt-3.5 text-base md:text-[1.0625rem] text-[#556070] leading-relaxed font-normal">
                      {para}
                    </p>
                  ))}
                </div>
              </ScrollReveal>

              {/* 3 Major historical works — Open Museum Exhibition Entries */}
              <div className="space-y-16">
                {section.works?.map((work, wIdx) => (
                  <ScrollReveal key={work.name} delay={0.08 * (wIdx + 1)} direction="up">
                    <div className="pb-16 border-b border-[#E0D9CF]/45 last:border-b-0">
                      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                        {/* Media Object */}
                        <div className="w-full lg:w-[38%] flex-shrink-0">
                          <MediaPlaceholder
                            aspectRatio="4/3"
                            assetKey={`mocban-book-${wIdx + 1}`}
                            label={`Bản khắc Mộc bản: ${work.name}`}
                            className="rounded-2xl shadow-card"
                          />
                        </div>

                        {/* Narrative & Details */}
                        <div className="w-full lg:w-[62%]">
                          <div className="flex items-center gap-3 mb-2.5">
                            <span className="px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider text-[#1E4976] bg-[#1E4976]/[0.07]">
                              Bộ sử #{wIdx + 1}
                            </span>
                            {work.hanName && (
                              <span className="text-xs font-semibold text-[#A37840]">
                                Chữ Hán: {work.hanName}
                              </span>
                            )}
                          </div>

                          <h3
                            className="text-2xl sm:text-3xl font-bold text-[#1C2B3A] mb-3 leading-snug"
                            style={{ fontFamily: "var(--font-heading)" }}
                          >
                            {work.name}
                          </h3>

                          <p className="text-base text-[#556070] leading-relaxed mb-6 font-normal">
                            {work.desc}
                          </p>

                          <div className="space-y-2.5 pt-4 border-t border-[#E0D9CF]/40">
                            {work.details.map((detail, dIdx) => (
                              <div key={dIdx} className="flex items-start gap-2.5">
                                <CheckCircle2 size={17} className="text-[#1E4976] mt-1 flex-shrink-0" />
                                <p className="text-sm md:text-[0.9375rem] text-[#2E3842] leading-relaxed">
                                  {detail}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}

          {/* Subpage Navigation Footer */}
          <div className="mt-16 pt-8 border-t border-[#E0D9CF]/50 flex flex-col sm:flex-row justify-between items-center gap-6">
            <Link
              href="/mocban"
              className="text-sm font-bold text-[#556070] hover:text-[#1E4976] transition-colors"
            >
              ← Về danh mục Mộc bản
            </Link>
            <Link
              href="/mocban/van-hoa"
              className="btn-wood !px-7 !py-3.5 flex items-center gap-2 text-sm font-bold"
            >
              <span>Chuyên đề tiếp theo: Mạch nguồn văn hóa</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
