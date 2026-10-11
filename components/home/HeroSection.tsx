import Link from "next/link";
import Image from "next/image";
import { BookOpen, Layers, ChevronDown, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { heroContent } from "@/data/homepage";

export default function HeroSection() {
  return (
    <section className="hero-section bg-[#FAF9F5]" id="hero" aria-label="Hero section">
      {/* ── Background Art Direction: Luminous Digital Heritage Exhibition Hall ── */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Luminous warm ivory / parchment architectural gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 90% 80% at 50% -10%,
              #FFFDF7 0%,
              #F8F4EC 45%,
              #F3EDE2 75%,
              #EDE5D5 100%
            )`,
          }}
        />

        {/* Heritage grid watermark pattern — quiet architectural texture */}
        <div className="absolute inset-0 pattern-heritage opacity-[0.04]" />

        {/* Warm bronze ambient light — top right (subtle 8% opacity) */}
        <div
          className="absolute top-0 right-0 w-[550px] h-[550px] rounded-full opacity-[0.08] blur-[120px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, #C8860A, transparent 70%)",
            transform: "translate(20%, -20%)",
          }}
        />

        {/* Academic blue soft ambient tint — bottom left (subtle 5% opacity) */}
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.05] blur-[120px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, #1E4976, transparent 70%)",
            transform: "translate(-20%, 20%)",
          }}
        />

        {/* Bottom seamless transition to StatsBar (#FAFAF7) */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #FAFAF7)" }}
        />
      </div>

      {/* ── Content ──────────────────────────────────────────── */}
      <div className="relative container-main pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-16 w-full z-10">
        <div className="grid lg:grid-cols-[1.12fr_0.88fr] gap-10 lg:gap-14 xl:gap-16 items-center">

          {/* ── Left Column: Editorial Typography & Narrative ───── */}
          <div className="max-w-2xl">

            {/* 1. Brand Eyebrow */}
            <ScrollReveal delay={0}>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="inline-block w-7 h-px flex-shrink-0"
                  style={{ background: "linear-gradient(90deg, #C8860A, transparent)" }}
                  aria-hidden="true"
                />
                <p
                  className="text-xs font-bold uppercase tracking-[0.28em]"
                  style={{ color: "#C8860A" }}
                >
                  {heroContent.brand}
                </p>
              </div>
            </ScrollReveal>

            {/* 2. Headline — Balanced Editorial Anchor */}
            <ScrollReveal delay={0.08}>
              <h1
                className="hero-heading text-[2.15rem] sm:text-[2.65rem] md:text-[3.15rem] lg:text-[3.4rem] xl:text-[3.65rem] font-bold tracking-tight mb-4 leading-[1.17] text-balance text-[#1C2B3A]"
                style={{
                  fontFamily: "var(--font-heading)",
                }}
              >
                {heroContent.headline}
              </h1>
            </ScrollReveal>

            {/* 3. STEAM Descriptor Line */}
            <ScrollReveal delay={0.14}>
              <p
                className="text-xs sm:text-[0.8125rem] font-bold tracking-[0.2em] uppercase mb-6 leading-relaxed"
                style={{ color: "#9E6805" }}
              >
                {heroContent.tagline}
              </p>
            </ScrollReveal>

            {/* 4. Funding Notice — Quiet Editorial Rule (No Box) */}
            <ScrollReveal delay={0.18}>
              <div className="mb-8 max-w-xl">
                <div className="border-l-2 border-[#C8860A]/60 pl-3.5 py-0.5">
                  <p
                    className="text-xs sm:text-[0.8125rem] leading-relaxed font-normal text-[#556070]"
                  >
                    {heroContent.fundingNotice}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* 5. CTA Buttons */}
            <ScrollReveal delay={0.22}>
              <div className="flex flex-wrap items-center gap-4 mb-8">
                {/* Primary CTA — Academic Blue Button with Arrow */}
                <Link
                  href={heroContent.cta1.href}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg text-[0.9375rem] font-bold transition-all duration-200 hover:-translate-y-0.5 bg-[#1E4976] hover:bg-[#245788] text-white shadow-[0_4px_14px_rgba(30,73,118,0.22)] border border-[#1E4976]"
                >
                  <BookOpen size={17} strokeWidth={2.2} />
                  <span>{heroContent.cta1.label}</span>
                  <ArrowRight size={15} strokeWidth={2.2} />
                </Link>

                {/* Secondary CTA — Refined ghost button */}
                <Link href={heroContent.cta2.href} className="hero-cta-ghost">
                  <Layers size={17} strokeWidth={2.2} />
                  <span>{heroContent.cta2.label}</span>
                </Link>
              </div>
            </ScrollReveal>

            {/* 6. Metadata Badges */}
            <ScrollReveal delay={0.26}>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {[
                  { dot: "#C8860A", text: "UNESCO 2009 — Di sản Tư liệu Thế giới" },
                  { dot: "#0284C7", text: "Tích hợp Mô hình Giáo dục STEAM" },
                ].map((b) => (
                  <span
                    key={b.text}
                    className="flex items-center gap-2 text-xs font-semibold text-[#556070]"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: b.dot }}
                      aria-hidden="true"
                    />
                    {b.text}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* ── Right Column: Museum Exhibition Panel ───────────── */}
          <ScrollReveal delay={0.2} direction="left" className="hidden lg:block relative">
            <div
              className="relative rounded-2xl overflow-hidden p-8 xl:p-9 transition-transform duration-500 hover:scale-[1.005] bg-white/95 backdrop-blur-md border border-[#E0D9CF] shadow-[0_16px_40px_rgba(28,43,58,0.06)]"
            >
              {/* Subtle inner paper texture & heritage watermarks */}
              <div className="absolute inset-0 texture-paper opacity-30 z-0 pointer-events-none" aria-hidden="true" />
              <div className="absolute inset-0 pattern-heritage opacity-[0.03] z-[1] pointer-events-none" aria-hidden="true" />

              {/* Authentic Royal Seal Watermark */}
              <div className="absolute -bottom-8 -right-8 w-44 h-44 opacity-[0.06] pointer-events-none select-none z-[1]" aria-hidden="true">
                <Image
                  src="/assets/logo-seal.webp"
                  alt=""
                  width={176}
                  height={176}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Atmospheric Heritage Brush Artwork */}
              <div className="absolute right-0 bottom-0 w-full h-[280px] opacity-[0.07] pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
                <Image
                  src="/assets/homepage/hero-woodblock-brush.webp"
                  alt=""
                  fill
                  className="object-cover object-bottom"
                />
              </div>

              {/* Panel Content */}
              <div className="relative z-10">

                {/* Eyebrow badge */}
                <div
                  className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full mb-5 text-[0.6875rem] font-bold uppercase tracking-[0.18em] bg-[#C8860A]/10 border border-[#C8860A]/30 text-[#A06E1A]"
                >
                  {heroContent.rightCard.badge}
                </div>

                {/* Interactive Experience Showcase Artwork */}
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden mb-5 border border-[#E0D9CF]/70 shadow-xs group/art">
                  <Image
                    src="/assets/homepage/hero-student-interactive.webp"
                    alt="Học sinh tương tác trực tiếp với mô hình số hóa 3D Mộc bản triều Nguyễn"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover/art:scale-105"
                    sizes="(max-width: 1024px) 100vw, 450px"
                    priority
                  />
                </div>

                {/* Exhibition Title */}
                <h2
                  className="text-xl xl:text-[1.35rem] font-bold mb-2 leading-snug text-[#1C2B3A]"
                  style={{
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {heroContent.rightCard.title}
                </h2>

                {/* Exhibition Description */}
                <p
                  className="text-[0.875rem] leading-relaxed mb-6 max-w-sm text-[#556070]"
                >
                  {heroContent.rightCard.description}
                </p>

                {/* Integrated Data Strip — Seamless divider without nested card */}
                <div
                  className="pt-4 border-t border-[#E0D9CF]/70 flex items-center justify-between"
                >
                  <div>
                    <div
                      className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] mb-0.5 text-[#7B8A95]"
                    >
                      Cơ sở tư liệu
                    </div>
                    <div
                      className="text-[0.875rem] font-bold text-[#1C2B3A]"
                    >
                      33.976 tấm Mộc bản triều Nguyễn
                    </div>
                  </div>
                  <span
                    className="px-2.5 py-1 rounded text-[0.65rem] font-bold uppercase tracking-wider bg-[#C8860A]/10 border border-[#C8860A]/30 text-[#A06E1A]"
                  >
                    Gốc
                  </span>
                </div>

              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-20"
        aria-hidden="true"
      >
        <span
          className="text-[8.5px] font-bold uppercase tracking-[0.3em] text-[#7B8A95]"
        >
          Cuộn xuống
        </span>
        <ChevronDown
          size={16}
          className="animate-gentle-float text-[#7B8A95]"
        />
      </div>
    </section>
  );
}
