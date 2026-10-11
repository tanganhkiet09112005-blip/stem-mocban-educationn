import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SubpageHeader from "@/components/mocban/SubpageHeader";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { mocbanSubpagesData } from "@/data/mocbanSubpages";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Mạch nguồn văn hóa — STEAM MOCBAN EDUCATION",
  description:
    "Những giá trị văn hóa, phong tục, nghi lễ và tư tưởng Nho giáo được khắc ghi trên Mộc bản triều Nguyễn.",
};

export default function VanHoaSubpage() {
  const data = mocbanSubpagesData["van-hoa"];

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
          
          {/* Section 1: Đời sống văn hóa — Pure Editorial Narrative */}
          {data.sections[0] && (
            <ScrollReveal delay={0.1}>
              <div className="pb-14 border-b border-[#E0D9CF]/50">
                <div className="max-w-3xl mb-8">
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

                <div className="grid sm:grid-cols-2 gap-6 mb-10">
                  {data.sections[0].items?.map((item, idx) => (
                    <div key={idx} className="p-6 rounded-xl bg-white border border-[#E0D9CF]/60 shadow-[0_2px_8px_rgba(28,43,58,0.02)]">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles size={16} className="text-[#C8860A]" />
                        <h3
                          className="text-lg font-bold text-[#1C2B3A]"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-[#556070] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Evidence Media Slot */}
                <MediaPlaceholder
                  assetKey="mocban-van-hoa-1"
                  aspectRatio="16/9"
                  className="rounded-2xl shadow-card"
                />
              </div>
            </ScrollReveal>
          )}

          {/* Section 2: Nhìn văn hóa qua tư tưởng Nho giáo */}
          {data.sections[1] && (
            <ScrollReveal delay={0.1}>
              <div className="pb-14 border-b border-[#E0D9CF]/50">
                <div className="max-w-3xl mb-8">
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
                      <span className="text-xs font-bold uppercase tracking-wider text-[#7C5C2E] mb-2 block">
                        Trụ cột 0{idx + 1}
                      </span>
                      <h3
                        className="text-lg font-bold text-[#1C2B3A] mb-2 leading-snug"
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

          {/* Section 3: Từ giá trị xưa đến suy ngẫm hôm nay */}
          {data.sections[2] && (
            <ScrollReveal delay={0.1}>
              <div className="rounded-2xl bg-gradient-to-br from-[#163558] to-[#1E4976] text-white shadow-card overflow-hidden relative">
                <div className="absolute inset-0 pattern-heritage opacity-15 pointer-events-none" />
                <div className="grid lg:grid-cols-[1.25fr_0.75fr] items-center relative z-10">
                  <div className="p-7 sm:p-10">
                    <h2
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 leading-tight"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {data.sections[2].heading}
                    </h2>
                    <p className="text-base sm:text-lg text-[#E8A820] font-semibold mb-5">
                      {data.sections[2].subheading}
                    </p>
                    <div className="space-y-3.5">
                      {data.sections[2].paragraphs.map((p, idx) => (
                        <p key={idx} className="text-base text-white/85 leading-relaxed font-normal">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="relative h-64 sm:h-72 lg:h-full min-h-[260px] m-4 sm:m-6 lg:m-0 lg:mr-8 lg:my-8 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                    <Image
                      src="/assets/mocban/mocban-van-hoa-kylan.webp"
                      alt="Bản khắc Mộc bản họa tiết Kỳ lân — Biểu trưng văn hóa & mỹ thuật cung đình"
                      fill
                      sizes="(max-width: 1024px) 100vw, 35vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                    <p className="absolute bottom-3 left-3 right-3 text-xs text-white/90 font-medium leading-snug">
                      Bản khắc Mộc bản: Họa tiết Kỳ lân — Biểu trưng văn hóa & mỹ thuật cung đình
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Subpage Navigation Footer */}
          <div className="pt-8 border-t border-[#E0D9CF]/50 flex flex-col sm:flex-row justify-between items-center gap-6">
            <Link
              href="/mocban/lich-su"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#556070] hover:text-[#1E4976] transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Chuyên đề trước: Dấu ấn lịch sử</span>
            </Link>
            <Link
              href="/mocban/dao-hoc"
              className="btn-wood !px-7 !py-3.5 flex items-center gap-2 text-sm font-bold"
            >
              <span>Chuyên đề tiếp theo: Đạo học và nhân tài</span>
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
