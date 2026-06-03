"use client";

import CTAButton from "@/components/ui/CTAButton";
import { ctaBannerContent } from "@/data/homepage";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CTASection() {
  return (
    <section className="section-padding bg-white relative" id="cta" aria-label="Kêu gọi tham gia">
      <div className="container-main">
        <ScrollReveal delay={0.1} direction="up">
          <div
            className="relative overflow-hidden rounded-[3rem] px-8 py-24 md:py-32 text-center text-white shadow-[0_32px_80px_rgba(28,43,58,0.15)] border border-[#E0D9CF]/50 group"
            style={{ background: "linear-gradient(135deg, #1C2B3A 0%, #1E4976 50%, #163558 100%)" }}
          >
            {/* Decorative background */}
            <div className="absolute inset-0 pattern-heritage opacity-20 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000 ease-out" aria-hidden="true" />
            
            {/* Gold glow */}
            <div
              className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full opacity-25 blur-[100px]"
              style={{ background: "#C8860A" }}
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-24 right-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[80px]"
              style={{ background: "#7C5C2E" }}
              aria-hidden="true"
            />

            <div className="relative max-w-4xl mx-auto z-10">
              {/* Badge */}
              <span className="inline-block text-[0.8125rem] font-bold uppercase tracking-[0.25em] text-[#C8860A] mb-8 px-6 py-2.5 rounded-full border border-[#C8860A]/30 bg-[#C8860A]/10 backdrop-blur-md shadow-warm">
                Tham gia ngay hôm nay
              </span>

              <h2
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight text-white drop-shadow-sm"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {ctaBannerContent.title}
              </h2>
              <p className="text-white/80 text-xl md:text-2xl mb-14 leading-relaxed font-medium">
                {ctaBannerContent.subtitle}
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <CTAButton
                  href={ctaBannerContent.cta1.href}
                  variant="wood"
                  className="!px-12 !py-4 md:!py-5 text-lg shadow-[0_12px_40px_rgba(200,134,10,0.3)] hover:-translate-y-1 transition-transform"
                  id="cta-banner-primary"
                >
                  {ctaBannerContent.cta1.label}
                </CTAButton>
                <CTAButton
                  href={ctaBannerContent.cta2.href}
                  variant="secondary"
                  className="!px-12 !py-4 md:!py-5 text-lg !text-white !border-white/40 hover:!bg-white hover:!text-[#1E4976] backdrop-blur-sm"
                  id="cta-banner-secondary"
                >
                  {ctaBannerContent.cta2.label}
                </CTAButton>
              </div>

              {/* Social proof */}
              <p className="text-white/60 text-base mt-16 font-medium">
                Đã có <span className="text-white font-bold">18 trường THPT</span> và{" "}
                <span className="text-white font-bold">2.400+ học sinh</span> tham gia dự án.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
