import type { Metadata } from "next";
import Link from "next/link";
import SubpageHeader from "@/components/mocban/SubpageHeader";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { mocbanSubpagesData } from "@/data/mocbanSubpages";
import { ArrowRight, ArrowLeft, FileCheck, Search, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Mộc bản – Nguồn sử liệu — STEAM MOCBAN EDUCATION",
  description:
    "Phương pháp tiếp cận, đọc hiểu, phân tích và đối chiếu Mộc bản triều Nguyễn như nguồn chứng cứ lịch sử xác thực.",
};

export default function SuLieuSubpage() {
  const data = mocbanSubpagesData["su-lieu"];

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
          
          {/* Section 1: Mộc bản lưu giữ những gì? — Editorial Stream */}
          {data.sections[0] && (
            <ScrollReveal delay={0.1}>
              <div className="pb-14 border-b border-[#E0D9CF]/50">
                <div className="max-w-3xl mb-8">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1E4976] mb-3">
                    <FileCheck size={16} />
                    <span>Giá trị nguồn sử liệu</span>
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

                <MediaPlaceholder
                  aspectRatio="16/9"
                  assetKey="mocban-su-lieu-1"
                  label="Chi tiết bản khắc Mộc bản: chữ khắc ngược và dấu ấn hiệu đính của Quốc Sử Quán"
                  className="rounded-2xl shadow-card"
                />
              </div>
            </ScrollReveal>
          )}

          {/* Section 2: Cách đọc và đối chiếu một bản Mộc bản */}
          {data.sections[1] && (
            <ScrollReveal delay={0.1}>
              <div className="pb-14 border-b border-[#E0D9CF]/50">
                <div className="max-w-3xl mb-8">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7C5C2E] mb-3">
                    <Search size={16} />
                    <span>Phương pháp tiếp cận khoa học</span>
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

                <div className="grid sm:grid-cols-2 gap-5">
                  {data.sections[1].items?.map((item, idx) => (
                    <div key={idx} className="p-6 rounded-xl bg-white border border-[#E0D9CF]/60 shadow-[0_2px_8px_rgba(28,43,58,0.02)]">
                      <div className="flex items-center gap-2 mb-2 text-[#1E4976] font-bold text-xs uppercase tracking-wider">
                        <CheckCircle size={16} />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-sm md:text-base text-[#556070] leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Section 3: Từ di sản đến học liệu trực quan */}
          {data.sections[2] && (
            <ScrollReveal delay={0.1}>
              <div className="p-7 sm:p-10 rounded-2xl bg-white border border-[#E0D9CF]/60 shadow-card">
                <div className="max-w-3xl">
                  <h2
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C2B3A] mb-3 leading-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {data.sections[2].heading}
                  </h2>
                  <p className="text-base sm:text-lg font-semibold text-[#7C5C2E] mb-3">
                    {data.sections[2].subheading}
                  </p>
                  {data.sections[2].paragraphs.map((p, idx) => (
                    <p key={idx} className="text-base text-[#556070] leading-relaxed mt-3 font-normal">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Subpage Navigation Footer */}
          <div className="pt-8 border-t border-[#E0D9CF]/50 flex flex-col sm:flex-row justify-between items-center gap-6">
            <Link
              href="/mocban/dao-hoc"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#556070] hover:text-[#1E4976] transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Chuyên đề trước: Đạo học và nhân tài</span>
            </Link>
            <Link
              href="/hoc-tap"
              className="btn-wood !px-7 !py-3.5 flex items-center gap-2 text-sm font-bold"
            >
              <span>Tiếp tục: Thư viện Học liệu số</span>
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
