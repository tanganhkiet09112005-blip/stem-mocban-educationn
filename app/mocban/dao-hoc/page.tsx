import type { Metadata } from "next";
import Link from "next/link";
import SubpageHeader from "@/components/mocban/SubpageHeader";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { mocbanSubpagesData } from "@/data/mocbanSubpages";
import { ArrowRight, ArrowLeft, GraduationCap, Award, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Đạo học và nhân tài — STEAM MOCBAN EDUCATION",
  description:
    "Những bài học về học tập, giáo dục, khoa cử và chính sách trọng dụng nhân tài qua Mộc bản triều Nguyễn.",
};

export default function DaoHocSubpage() {
  const data = mocbanSubpagesData["dao-hoc"];

  return (
    <>
      <SubpageHeader
        categoryNumber={data.categoryNumber}
        title={data.title}
        subtitle={data.subtitle}
        lead={data.lead}
      />

      <section className="section-padding bg-[#FAFAF7]">
        <div className="container-main max-w-5xl space-y-16 lg:space-y-20">
          
          {/* Section 1: Đạo học và mục đích việc học — Editorial Flow */}
          {data.sections[0] && (
            <ScrollReveal delay={0.1}>
              <div className="pb-14 border-b border-[#E0D9CF]/50">
                <div className="max-w-3xl mb-8">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1E4976] mb-3">
                    <GraduationCap size={16} />
                    <span>Mục đích của việc học</span>
                  </div>
                  <h2
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C2B3A] mb-3 leading-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {data.sections[0].heading}
                  </h2>
                  <p className="text-base sm:text-lg font-semibold text-[#7C5C2E] mb-3">
                    {data.sections[0].subheading}
                  </p>
                  {data.sections[0].paragraphs.map((p, idx) => (
                    <p key={idx} className="text-base md:text-[1.0625rem] text-[#556070] leading-relaxed mt-3 font-normal">
                      {p}
                    </p>
                  ))}
                </div>

                <div className="grid sm:grid-cols-3 gap-5 mb-10">
                  {data.sections[0].items?.map((item, idx) => (
                    <div key={idx} className="p-5 rounded-xl bg-white border border-[#E0D9CF]/60 shadow-[0_2px_8px_rgba(28,43,58,0.02)]">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1E4976] mb-2 block">
                        Đạo học 0{idx + 1}
                      </span>
                      <h3
                        className="text-lg font-bold text-[#1C2B3A] mb-2"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#556070] leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <MediaPlaceholder
                  aspectRatio="16/9"
                  assetKey="mocban-dao-hoc-1"
                  label="Bản khắc Mộc bản về quy chế trường thi và sách giáo khoa Nho học"
                  className="rounded-2xl shadow-card"
                />
              </div>
            </ScrollReveal>
          )}

          {/* Section 2: Giáo dục và Khoa cử */}
          {data.sections[1] && (
            <ScrollReveal delay={0.1}>
              <div className="pb-14 border-b border-[#E0D9CF]/50">
                <div className="max-w-3xl mb-8">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7C5C2E] mb-3">
                    <BookOpen size={16} />
                    <span>Hệ thống khoa cử</span>
                  </div>
                  <h2
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C2B3A] mb-3 leading-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {data.sections[1].heading}
                  </h2>
                  <p className="text-base sm:text-lg font-semibold text-[#1E4976] mb-3">
                    {data.sections[1].subheading}
                  </p>
                  {data.sections[1].paragraphs.map((p, idx) => (
                    <p key={idx} className="text-base md:text-[1.0625rem] text-[#556070] leading-relaxed mt-3 font-normal">
                      {p}
                    </p>
                  ))}
                </div>

                <div className="grid sm:grid-cols-3 gap-5">
                  {data.sections[1].items?.map((item, idx) => (
                    <div key={idx} className="p-5 rounded-xl bg-white border border-[#E0D9CF]/60 shadow-[0_2px_8px_rgba(28,43,58,0.02)]">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#C8860A] mb-2 block">
                        Cấp khoa cử #{idx + 1}
                      </span>
                      <h3
                        className="text-lg font-bold text-[#1C2B3A] mb-2"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#556070] leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Section 3: Trọng dụng nhân tài */}
          {data.sections[2] && (
            <ScrollReveal delay={0.1}>
              <div className="p-7 sm:p-10 rounded-2xl bg-white border border-[#E0D9CF]/60 shadow-card">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C8860A] mb-3">
                    <Award size={16} />
                    <span>Chính sách nhân tài</span>
                  </div>
                  <h2
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C2B3A] mb-3 leading-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {data.sections[2].heading}
                  </h2>
                  <p className="text-base sm:text-lg font-semibold text-[#7C5C2E] mb-4">
                    {data.sections[2].subheading}
                  </p>
                  <div className="space-y-3">
                    {data.sections[2].paragraphs.map((p, idx) => (
                      <p key={idx} className="text-base text-[#556070] leading-relaxed font-normal">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Subpage Navigation Footer */}
          <div className="pt-8 border-t border-[#E0D9CF]/50 flex flex-col sm:flex-row justify-between items-center gap-6">
            <Link
              href="/mocban/van-hoa"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#556070] hover:text-[#1E4976] transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Chuyên đề trước: Mạch nguồn văn hóa</span>
            </Link>
            <Link
              href="/mocban/su-lieu"
              className="btn-wood !px-7 !py-3.5 flex items-center gap-2 text-sm font-bold"
            >
              <span>Chuyên đề tiếp theo: Mộc bản – Nguồn sử liệu</span>
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
