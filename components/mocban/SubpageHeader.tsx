import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface SubpageHeaderProps {
  categoryNumber: string;
  title: string;
  subtitle: string;
  lead: string;
}

export default function SubpageHeader({
  categoryNumber,
  title,
  subtitle,
  lead,
}: SubpageHeaderProps) {
  return (
    <div className="page-header pt-28 md:pt-36 pb-16 md:pb-20 relative overflow-hidden">
      <div className="container-main relative z-10">
        {/* Breadcrumbs */}
        <ScrollReveal delay={0}>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
            <span>/</span>
            <Link href="/mocban" className="hover:text-white transition-colors">Khám phá Mộc bản</Link>
            <span>/</span>
            <span className="text-[#E8A820]">{title}</span>
          </div>
        </ScrollReveal>

        {/* Back Link */}
        <ScrollReveal delay={0.05}>
          <Link
            href="/mocban"
            className="inline-flex items-center gap-2 text-sm font-bold text-white/80 hover:text-white mb-6 group transition-colors"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Quay lại Cổng khám phá Mộc bản</span>
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#C8860A]/20 border border-[#C8860A]/35 text-[#E8A820] font-black text-xs">
              {categoryNumber}
            </span>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E8A820]">
              Chuyên đề học thuật Mộc bản
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-5 max-w-4xl leading-[1.16] text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {title}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-lg sm:text-xl md:text-[1.35rem] text-[#E8A820] font-semibold max-w-3xl mb-4 leading-snug text-balance">
            {subtitle}
          </p>
          <p className="text-white/80 text-base md:text-lg max-w-3xl leading-relaxed font-normal">
            {lead}
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}
