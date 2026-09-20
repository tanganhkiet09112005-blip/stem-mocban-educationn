import Link from "next/link";
import { BookOpen, Layers, ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { heroContent } from "@/data/homepage";

export default function HeroSection() {
  return (
    <section className="hero-section bg-[#0D1B2A]" id="hero" aria-label="Hero section">
      {/* ── Background Art Direction ─────────────────────────────────── */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Calmer 4-stop academic heritage gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(150deg,
              #0A1726 0%,
              #102235 30%,
              #163558 65%,
              #1E4976 100%
            )`,
          }}
        />

        {/* Heritage grid pattern — quiet texture */}
        <div className="absolute inset-0 pattern-heritage opacity-[0.05]" />

        {/* Warm bronze ambient glow — top right (subtle, 6% opacity) */}
        <div
          className="absolute top-0 right-0 w-[550px] h-[550px] rounded-full opacity-[0.06] blur-[140px] pointer-events-none"
          style={{
            background: "radial-gradient(circle, #C8860A, transparent 70%)",
            transform: "translate(25%, -25%)",
          }}
        />

        {/* Gentle bottom transition to content area */}
        <div
          className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #0A1726)" }}
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
                className="hero-heading text-[2.15rem] sm:text-[2.65rem] md:text-[3.15rem] lg:text-[3.4rem] xl:text-[3.65rem] font-bold tracking-tight mb-4 leading-[1.17] text-balance"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "#FAFAF7",
                }}
              >
                {heroContent.headline}
              </h1>
            </ScrollReveal>

            {/* 3. STEAM Descriptor Line */}
            <ScrollReveal delay={0.14}>
              <p
                className="text-xs sm:text-[0.8125rem] font-bold tracking-[0.2em] uppercase mb-6 leading-relaxed"
                style={{ color: "rgba(232,168,32,0.92)" }}
              >
                {heroContent.tagline}
              </p>
            </ScrollReveal>

            {/* 4. Funding Notice — Quiet Editorial Rule (No Box) */}
            <ScrollReveal delay={0.18}>
              <div className="mb-8 max-w-xl">
                <div className="border-l-2 border-[#C8860A]/40 pl-3.5 py-0.5">
                  <p
                    className="text-xs sm:text-[0.8125rem] leading-relaxed font-normal"
                    style={{ color: "rgba(250,250,247,0.65)" }}
                  >
                    {heroContent.fundingNotice}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* 5. CTA Buttons */}
            <ScrollReveal delay={0.22}>
              <div className="flex flex-wrap items-center gap-4 mb-8">
                {/* Primary CTA — Warm bronze button */}
                <Link
                  href={heroContent.cta1.href}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-[0.9375rem] font-bold transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #A06E1A 0%, #C8860A 100%)",
                    color: "#FAFAF7",
                    boxShadow: "0 4px 18px rgba(200,134,10,0.25)",
                  }}
                >
                  <BookOpen size={17} strokeWidth={2.2} />
                  {heroContent.cta1.label}
                </Link>

                {/* Secondary CTA — Refined ghost button */}
                <Link href={heroContent.cta2.href} className="hero-cta-ghost">
                  <Layers size={17} strokeWidth={2.2} />
                  {heroContent.cta2.label}
                </Link>
              </div>
            </ScrollReveal>

            {/* 6. Metadata Badges */}
            <ScrollReveal delay={0.26}>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {[
                  { dot: "#C8860A", text: "UNESCO 2009 — Di sản Tư liệu Thế giới" },
                  { dot: "#38BDF8", text: "Tích hợp Mô hình Giáo dục STEAM" },
                ].map((b) => (
                  <span
                    key={b.text}
                    className="flex items-center gap-2 text-xs font-medium"
                    style={{ color: "rgba(250,250,247,0.55)" }}
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
              className="relative rounded-2xl overflow-hidden p-8 xl:p-9 transition-transform duration-500 hover:scale-[1.005]"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 20px 48px rgba(0,0,0,0.28)",
              }}
            >
              {/* Subtle inner dark gradient */}
              <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(10,23,38,0.5) 0%, rgba(22,53,88,0.25) 100%)",
                }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 pattern-heritage opacity-[0.05] z-[1] pointer-events-none" aria-hidden="true" />

              {/* Panel Content */}
              <div className="relative z-10">

                {/* Eyebrow badge */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 text-[0.6875rem] font-bold uppercase tracking-[0.18em]"
                  style={{
                    color: "#E8A820",
                    background: "rgba(200,134,10,0.12)",
                    border: "1px solid rgba(200,134,10,0.25)",
                  }}
                >
                  {heroContent.rightCard.badge}
                </div>

                {/* Exhibition Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: "linear-gradient(135deg, rgba(200,134,10,0.8) 0%, rgba(124,92,46,0.8) 100%)",
                    color: "#FAFAF7",
                    boxShadow: "0 4px 14px rgba(200,134,10,0.18)",
                  }}
                  aria-hidden="true"
                >
                  <Layers size={20} strokeWidth={2} />
                </div>

                {/* Exhibition Title */}
                <h2
                  className="hero-heading text-xl xl:text-[1.4rem] font-bold mb-3 leading-snug"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "#FAFAF7",
                  }}
                >
                  {heroContent.rightCard.title}
                </h2>

                {/* Exhibition Description */}
                <p
                  className="text-[0.875rem] leading-relaxed mb-8 max-w-sm"
                  style={{ color: "rgba(250,250,247,0.72)" }}
                >
                  {heroContent.rightCard.description}
                </p>

                {/* Integrated Data Strip — Seamless divider without nested card */}
                <div
                  className="pt-5 border-t border-white/[0.08] flex items-center justify-between"
                >
                  <div>
                    <div
                      className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] mb-0.5"
                      style={{ color: "rgba(250,250,247,0.48)" }}
                    >
                      Cơ sở tư liệu
                    </div>
                    <div
                      className="text-[0.875rem] font-bold"
                      style={{ color: "#FAFAF7" }}
                    >
                      33.976 tấm Mộc bản triều Nguyễn
                    </div>
                  </div>
                  <span
                    className="px-2.5 py-1 rounded text-[0.65rem] font-bold uppercase tracking-wider"
                    style={{
                      background: "rgba(200,134,10,0.2)",
                      border: "1px solid rgba(200,134,10,0.35)",
                      color: "#E8A820",
                    }}
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
          className="text-[8.5px] font-bold uppercase tracking-[0.3em]"
          style={{ color: "rgba(250,250,247,0.35)" }}
        >
          Cuộn xuống
        </span>
        <ChevronDown
          size={16}
          className="animate-gentle-float"
          style={{ color: "rgba(250,250,247,0.35)" }}
        />
      </div>
    </section>
  );
}
