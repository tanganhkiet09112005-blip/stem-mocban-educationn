import Link from "next/link";
import { BookOpen, Layers, ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { heroContent } from "@/data/homepage";

export default function HeroSection() {
  return (
    <section className="hero-section bg-[#163558]" id="hero" aria-label="Hero section">
      {/* ── Background Art Direction ─────────────────────────────────── */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Main dark-blue gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg,
              #0D1B2A 0%,
              #163558 45%,
              #1E4976 75%,
              #2A5F8F 100%
            )`,
          }}
        />

        {/* Heritage grid pattern */}
        <div className="absolute inset-0 pattern-heritage opacity-[0.15]" />
        <div className="absolute inset-0 pattern-dots opacity-20 text-white" />

        {/* Gold ambient glow — top right */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full opacity-[0.15] blur-[100px]"
          style={{ background: "radial-gradient(circle, #C8860A, transparent 70%)", transform: "translate(25%, -25%)" }}
        />

        {/* Academic blue glow — bottom left */}
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full opacity-[0.2] blur-[80px]"
          style={{ background: "radial-gradient(circle, #2D6A8E, transparent 70%)", transform: "translate(-30%, 30%)" }}
        />
      </div>

      {/* ── Content ──────────────────────────────────────────── */}
      <div className="relative container-main py-32 md:py-40 lg:py-48 w-full z-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typography */}
          <div className="max-w-3xl">
            <ScrollReveal delay={0}>
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-block w-12 h-px" style={{ background: "linear-gradient(90deg, #C8860A, transparent)" }} />
                <p className="text-[#A37840] text-[0.8125rem] font-bold uppercase tracking-[0.25em]">
                  Đề tài Nghiên cứu Khoa học
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="mb-6">
                <h1 className="text-white font-bold tracking-tight mb-4 text-balance drop-shadow-sm">
                  STEM MOCBAN EDUCATION
                </h1>
                <p className="text-white/80 text-lg md:text-xl font-bold leading-snug drop-shadow-sm uppercase" style={{ fontFamily: "var(--font-heading)" }}>
                  {heroContent.subtitle}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-[3px] flex-shrink-0 self-stretch bg-gradient-to-b from-[#C8860A] to-transparent mt-1.5 rounded-full" />
                  <p className="text-lg text-white/70 leading-relaxed max-w-xl font-medium">
                    {heroContent.eyebrow}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-5 mb-14">
                <Link href="/mocban" className="btn-wood !px-8 !py-4 !text-base shadow-[0_12px_32px_rgba(200,134,10,0.3)] hover:-translate-y-1 transition-transform duration-300">
                  <BookOpen size={18} strokeWidth={2.5} />
                  Khám phá Mộc bản
                </Link>
                <Link href="/hoc-tap" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white/90 border-2 border-white/20 hover:border-white/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
                  <Layers size={18} strokeWidth={2.5} />
                  Xem học liệu
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                {[
                  { dot: "bg-[#C8860A]", text: "UNESCO 2009 — Di sản Thế giới" },
                  { dot: "bg-[#2D6A8E]", text: "Ứng dụng Gamification & STEM" },
                ].map((b) => (
                  <span key={b.text} className="flex items-center gap-2.5 text-[0.8125rem] font-bold text-white/60">
                    <span className={`w-2 h-2 rounded-full ${b.dot} flex-shrink-0 shadow-[0_0_12px_currentColor]`} />
                    {b.text}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Visual Showcase */}
          <ScrollReveal delay={0.3} direction="left" className="hidden lg:block relative h-full min-h-[500px]">
            <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.4)] group hover:scale-[1.02] transition-transform duration-700 ease-out">
              
              {/* Inner Pattern/Gradient Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1C2B3A]/80 to-[#1E4976]/90 z-0" />
              <div className="absolute inset-0 pattern-heritage opacity-70 z-10 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-transparent to-transparent z-20" />
              
              {/* Floating elements inside visual card */}
              <div className="absolute top-10 left-10 right-10 z-30">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C8860A] to-[#A37840] flex items-center justify-center text-white mb-6 shadow-[0_8px_24px_rgba(200,134,10,0.4)] transform group-hover:-translate-y-2 transition-transform duration-500">
                  <Layers size={28} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>Không gian số</h3>
                <p className="text-white/70 text-base max-w-sm">
                  Trải nghiệm hơn 34.619 bản khắc gỗ thông qua mô hình 3D và học liệu tương tác hiện đại.
                </p>
              </div>

              {/* Decorative Mockup blocks */}
              <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-2xl transform -rotate-12 group-hover:rotate-0 transition-transform duration-700 z-30 shadow-2xl" />
              <div className="absolute bottom-12 -left-12 w-56 h-40 bg-[#C8860A]/20 rounded-3xl border border-[#C8860A]/30 backdrop-blur-2xl transform rotate-12 group-hover:rotate-6 transition-transform duration-700 z-30 shadow-2xl flex items-center justify-center">
                 <div className="text-[#C8860A] font-bold text-lg opacity-80">[Mộc Bản 3D]</div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce z-20" aria-hidden="true">
        <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.25em]">Cuộn xuống</span>
        <ChevronDown size={24} className="text-white/40" />
      </div>
    </section>
  );
}
