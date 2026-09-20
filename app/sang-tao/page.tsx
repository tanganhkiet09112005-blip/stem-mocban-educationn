"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import CTAButton from "@/components/ui/CTAButton";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import { studentProducts, studentExperiences } from "@/data/sangtao";
import { Quote, Send, Sparkles, UserCheck } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const COLOR_MAP: Record<string, string> = {
  academic: "bg-[#1E4976]",
  wood:     "bg-[#7C5C2E]",
  gold:     "bg-[#C8860A]",
};

export default function SangTaoPage() {
  return (
    <>
      {/* ── Page Header ─────────────────────────────────── */}
      <div className="page-header pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="container-main">
          <ScrollReveal delay={0}>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C8860A] mb-3.5">
              Sáng tạo & Chia sẻ
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-5 max-w-5xl leading-[1.16] text-balance"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Góc sáng tạo
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-white/80 text-base md:text-lg max-w-3xl leading-relaxed font-normal">
              Không gian trưng bày các tác phẩm, ấn phẩm thủ công và cảm nhận chân thực của học sinh sau khi tham gia trải nghiệm giáo dục di sản Mộc bản.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Gallery Sản phẩm học sinh ─── */}
      <section className="section-padding bg-[#FAFAF7]" id="san-pham">
        <div className="container-main">
          <ScrollReveal delay={0.1}>
            <SectionTitle
              eyebrow="Tác phẩm học sinh"
              title="Sản phẩm trải nghiệm sáng tạo"
              description="Mỗi sản phẩm là một kết quả thực hành sáng tạo, kết nối kiến thức lịch sử với mỹ thuật và kỹ thuật thủ công truyền thống."
              className="mb-14 max-w-3xl"
            />
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {studentProducts.map((prod, i) => (
              <ScrollReveal key={prod.id} delay={0.08 * (i + 1)} direction="up">
                <div className="rounded-2xl overflow-hidden bg-white border border-[#E0D9CF]/70 shadow-[0_2px_10px_rgba(28,43,58,0.03)] hover:shadow-card hover:border-[#C8860A]/35 hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full group">
                  {/* Media Visual Anchor */}
                  <div className="p-3.5 pb-0">
                    <MediaPlaceholder
                      aspectRatio="4/3"
                      assetKey={prod.mediaPlaceholderKey}
                      label={prod.name}
                      type={prod.mediaType}
                      className="rounded-xl shadow-xs"
                    />
                  </div>

                  <div className="p-6 sm:p-7 flex flex-col flex-1">
                    <div className="flex items-center gap-1.5 text-[0.6875rem] font-bold uppercase tracking-wider text-[#C8860A] mb-1.5">
                      <Sparkles size={13} />
                      <span>Tác phẩm #{i + 1}</span>
                    </div>

                    <h3
                      className="font-bold text-[#1C2B3A] text-lg sm:text-xl mb-3 leading-snug group-hover:text-[#1E4976] transition-colors"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {prod.name}
                    </h3>

                    {/* Student voice — Open quote without nested box */}
                    <div className="mb-6 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#7B8A95] mb-1">
                        Cảm nhận người làm:
                      </p>
                      <p className="text-sm text-[#556070] leading-relaxed italic font-normal">
                        &ldquo;{prod.shareStory}&rdquo;
                      </p>
                    </div>

                    {/* Creator */}
                    <div className="pt-3.5 border-t border-[#E0D9CF]/40 flex items-center gap-2.5 mt-auto">
                      <div className="w-7 h-7 rounded-full bg-[#1E4976]/[0.08] text-[#1E4976] flex items-center justify-center flex-shrink-0">
                        <UserCheck size={14} />
                      </div>
                      <div className="text-xs font-semibold text-[#1C2B3A] truncate">
                        {prod.creator}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cảm nhận trải nghiệm ─────────────────────────── */}
      <section className="section-padding bg-[#F5F0E8] relative overflow-hidden" id="cam-nhan">
        <div className="absolute inset-0 texture-paper pointer-events-none opacity-50" />
        <div className="container-main relative z-10">
          <ScrollReveal delay={0.1}>
            <SectionTitle
              eyebrow="Góc nhìn thực tế"
              title="Chia sẻ từ giáo viên & học sinh"
              align="center"
              className="mx-auto mb-14 max-w-3xl"
            />
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {studentExperiences.map((exp, i) => (
              <ScrollReveal key={exp.id} delay={0.08 * (i + 1)} direction="up">
                <div className="p-7 sm:p-8 rounded-2xl bg-white border border-[#E0D9CF]/60 shadow-[0_2px_10px_rgba(28,43,58,0.03)] hover:shadow-card transition-all duration-300 flex flex-col h-full relative overflow-hidden group">
                  <Quote size={60} className="absolute -top-2 -right-2 text-[#1E4976]/[0.04] pointer-events-none" />
                  
                  <p className="text-[#1C2B3A] text-sm sm:text-base leading-relaxed italic mb-6 relative z-10 flex-1 font-normal">
                    &ldquo;{exp.content}&rdquo;
                  </p>
                  
                  <div className="flex items-center gap-3 pt-4 border-t border-[#E0D9CF]/40">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-xs ${COLOR_MAP[exp.color] ?? COLOR_MAP.academic}`}
                    >
                      {exp.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-[#1C2B3A] text-sm">{exp.author}</div>
                      <div className="text-xs text-[#7B8A95]">{exp.school}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Gửi sản phẩm ─────────────────────────────── */}
      <section className="py-20 text-center bg-white relative overflow-hidden border-t border-[#E0D9CF]/50">
        <div className="container-main relative z-10 max-w-2xl">
          <ScrollReveal delay={0.1} direction="up">
            <div className="w-16 h-16 bg-[#FAFAF7] rounded-2xl flex items-center justify-center mx-auto mb-5 border border-[#E0D9CF]/60">
              <Send size={24} className="text-[#C8860A] -ml-0.5 mt-0.5" />
            </div>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#1C2B3A] mb-3 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Chia sẻ sản phẩm sáng tạo của bạn
            </h2>
            <p className="text-[#556070] text-sm sm:text-base mb-8 leading-relaxed font-normal">
              Bạn có sản phẩm mô hình, bài viết hoặc tác phẩm in ấn sau tiết học Mộc bản? Hãy gửi cho nhóm nghiên cứu để cùng lan tỏa niềm tự hào di sản.
            </p>
            <CTAButton href="/lien-he" variant="primary" className="!px-8 !py-3.5 text-base shadow-sm">
              Gửi sản phẩm đóng góp
            </CTAButton>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
