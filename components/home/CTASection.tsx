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
            className="relative overflow-hidden rounded-2xl sm:rounded-[1.75rem] px-6 sm:px-10 py-16 sm:py-20 md:py-24 text-center text-white shadow-card border border-white/10 group"
            style={{ background: "linear-gradient(145deg, #0D1B2A 0%, #163558 50%, #1E4976 100%)" }}
          >
            {/* Decorative background */}
            <div className="absolute inset-0 pattern-heritage opacity-10 pointer-events-none" aria-hidden="true" />
            
            {/* Subtle warm glow */}
            <div
              className="absolute -top-24 left-1/3 w-[450px] h-[450px] rounded-full opacity-15 blur-[120px] pointer-events-none"
              style={{ background: "#C8860A" }}
              aria-hidden="true"
            />

            <div className="relative max-w-3xl mx-auto z-10">
              {/* Badge */}
              <span className="inline-block text-[0.6875rem] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#E8A820] mb-5 px-4 py-1.5 rounded-full border border-[#C8860A]/30 bg-[#C8860A]/10">
                Tham gia ngay hôm nay
              </span>

              <h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-bold leading-[1.2] mb-4 sm:mb-5 tracking-tight text-white font-heading font-serif"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {ctaBannerContent.title}
              </h2>
              <p className="text-white/80 text-base md:text-lg mb-10 leading-relaxed font-normal max-w-2xl mx-auto">
                {ctaBannerContent.subtitle}
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <CTAButton
                  href={ctaBannerContent.cta1.href}
                  variant="wood"
                  className="!px-8 !py-3.5 text-base shadow-sm hover:-translate-y-0.5 transition-transform"
                  id="cta-banner-primary"
                >
                  {ctaBannerContent.cta1.label}
                </CTAButton>
                <CTAButton
                  href={ctaBannerContent.cta2.href}
                  variant="secondary"
                  className="!px-8 !py-3.5 text-base !text-white !border-white/30 hover:!bg-white/10 hover:!border-white/50"
                  id="cta-banner-secondary"
                >
                  {ctaBannerContent.cta2.label}
                </CTAButton>
              </div>

              {/* Pedagogical notice */}
              <p className="text-white/60 text-xs sm:text-sm mt-10 font-normal">
                Thực nghiệm sư phạm đang được triển khai tại một số trường THPT trên địa bàn thành phố Huế.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
