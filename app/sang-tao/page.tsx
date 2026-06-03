"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import CTAButton from "@/components/ui/CTAButton";
import { studentProducts, studentExperiences } from "@/data/sangtao";
import { Quote, Send } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

const COLOR_MAP: Record<string, string> = {
  academic: "bg-[#1E4976]",
  wood:     "bg-[#7C5C2E]",
  gold:     "bg-[#C8860A]",
};

export default function SangTaoPage() {
  return (
    <>
      <div className="page-header pt-24 md:pt-32">
        <div className="container-main">
          <ScrollReveal delay={0}>
            <p className="text-[0.8125rem] font-bold uppercase tracking-[0.25em] text-[#A37840] mb-4">
              Sản phẩm & Cảm nhận
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1
              className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-white mb-6 max-w-4xl leading-[1.1]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Không gian Sáng tạo
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-white/80 text-xl md:text-2xl max-w-3xl leading-relaxed font-medium">
              Nơi lưu giữ và trưng bày những sản phẩm, dự án nhỏ và cảm nhận chân thực nhất của học sinh sau hành trình khám phá di sản.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Gallery Sản phẩm */}
      <section className="section-padding bg-[#FAFAF7]" id="san-pham">
        <div className="container-main">
          <ScrollReveal delay={0.1}>
            <SectionTitle
              eyebrow="Trưng bày"
              title="Sản phẩm của học sinh"
              description="Các dự án nhỏ, mô hình, video clip, bài thơ... được các nhóm học sinh tự tay thực hiện."
              className="mb-20 max-w-3xl"
            />
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {studentProducts.map((prod, i) => (
              <ScrollReveal key={prod.id} delay={0.1 * (i % 3)} direction="up">
                <div className="card-base overflow-hidden group hover:shadow-card-lg transition-shadow duration-500 bg-white">
                  <div className="aspect-[3/4] sm:aspect-[4/5] img-placeholder relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C2B3A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                    <div className="absolute inset-0 flex items-center justify-center text-[#7B8A95] text-base font-bold px-6 text-center transform group-hover:scale-105 transition-transform duration-1000 mix-blend-overlay">
                      [Ảnh/Video: {prod.title}]
                    </div>
                  </div>
                  <div className="p-10 relative z-20 bg-white">
                    <span className="badge px-4 py-2 bg-[#F5F0E8] text-[#556070] mb-5 inline-block font-bold tracking-wider text-[0.8125rem]">
                      {prod.author}
                    </span>
                    <h3 className="font-bold text-[#1C2B3A] text-2xl mb-4 leading-snug group-hover:text-[#1E4976] transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                      {prod.title}
                    </h3>
                    <p className="text-[1.0625rem] text-[#556070] line-clamp-3 leading-relaxed">
                      {prod.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cảm nhận trải nghiệm */}
      <section className="section-padding bg-[#F5F0E8] relative overflow-hidden" id="cam-nhan">
        <div className="absolute inset-0 texture-paper pointer-events-none opacity-50" />
        <div className="container-main relative z-10">
          <ScrollReveal delay={0.1}>
            <SectionTitle
              eyebrow="Góc nhìn"
              title="Chia sẻ trải nghiệm"
              align="center"
              className="mx-auto mb-20 max-w-3xl"
            />
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
            {studentExperiences.map((exp, i) => (
              <ScrollReveal key={exp.id} delay={0.1 * (i % 3)} direction="up">
                <div className="card-base p-12 relative overflow-hidden group hover:shadow-[0_24px_60px_rgba(28,43,58,0.1)] transition-all duration-500 bg-white border border-[#E0D9CF]">
                  {/* Large animated quote mark */}
                  <motion.div 
                    className="absolute -top-10 -left-10 text-[#1E4976] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700 pointer-events-none"
                    whileHover={{ x: 10, y: 10 }}
                  >
                    <Quote size={160} className="transform -scale-x-100" />
                  </motion.div>
                  
                  <p className="text-[#1C2B3A] text-xl leading-relaxed italic mb-12 relative z-10 min-h-[140px] font-medium">
                    "{exp.content}"
                  </p>
                  
                  <div className="flex items-center gap-6 pt-8 border-t border-[#E0D9CF]">
                    <div 
                      className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-sm ${COLOR_MAP[exp.color] ?? COLOR_MAP.academic}`}
                    >
                      {exp.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-[#1C2B3A] text-lg mb-1">{exp.author}</div>
                      <div className="text-[0.9375rem] font-medium text-[#7B8A95]">{exp.school}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Gửi sản phẩm */}
      <section className="py-40 text-center bg-white relative overflow-hidden border-t border-[#E0D9CF]">
        <div className="absolute inset-0 pattern-heritage opacity-[0.05] text-[#1C2B3A]" />
        
        <div className="container-main relative z-10">
          <ScrollReveal delay={0.1} direction="up">
            <div className="w-28 h-28 bg-[#FAFAF7] rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-sm border border-[#E0D9CF] group hover:-rotate-6 transition-transform duration-500">
              <Send size={48} className="text-[#C8860A] -ml-2 mt-2 group-hover:text-[#1E4976] transition-colors duration-500" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#1C2B3A] mb-8" style={{ fontFamily: "var(--font-heading)" }}>
              Góp mặt vào Không gian Sáng tạo
            </h2>
            <p className="text-[#556070] text-xl mb-14 max-w-2xl mx-auto leading-relaxed font-medium">
              Bạn có một dự án thiết kế, một bài viết hay đoạn video cảm xúc sau khi học về Mộc bản? Hãy gửi cho chúng tôi để chia sẻ cùng cộng đồng.
            </p>
            <CTAButton href="/lien-he" variant="primary" className="!px-12 !py-5 text-xl shadow-academic hover:-translate-y-1">
              Gửi sản phẩm của bạn
            </CTAButton>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
