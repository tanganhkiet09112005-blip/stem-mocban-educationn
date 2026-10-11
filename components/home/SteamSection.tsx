import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { steamFramework } from "@/data/homepage";
import { Sparkles, Cpu, Compass, Palette, Shapes } from "lucide-react";

const STEAM_THEMES: Record<string, {
  bg: string;
  border: string;
  badgeBg: string;
  badgeText: string;
  textColor: string;
  iconBg: string;
  icon: any;
}> = {
  S: {
    bg: "bg-[#F0F6FA]",
    border: "border-[#D0E2EE]",
    badgeBg: "bg-white/85",
    badgeText: "text-[#1E4976]",
    textColor: "#1E4976",
    iconBg: "bg-[#1E4976]/10 text-[#1E4976]",
    icon: Sparkles,
  },
  T: {
    bg: "bg-[#EFF8F7]",
    border: "border-[#CFECE8]",
    badgeBg: "bg-white/85",
    badgeText: "text-[#0D9488]",
    textColor: "#0D9488",
    iconBg: "bg-[#0D9488]/10 text-[#0D9488]",
    icon: Cpu,
  },
  E: {
    bg: "bg-[#FDF8EE]",
    border: "border-[#F6E6C7]",
    badgeBg: "bg-white/85",
    badgeText: "text-[#A06E1A]",
    textColor: "#C8860A",
    iconBg: "bg-[#C8860A]/10 text-[#C8860A]",
    icon: Compass,
  },
  A: {
    bg: "bg-[#FDF4F0]",
    border: "border-[#F6DBD0]",
    badgeBg: "bg-white/85",
    badgeText: "text-[#B96F4A]",
    textColor: "#B96F4A",
    iconBg: "bg-[#B96F4A]/10 text-[#B96F4A]",
    icon: Palette,
  },
  M: {
    bg: "bg-[#F2F7F2]",
    border: "border-[#D3E7D4]",
    badgeBg: "bg-white/85",
    badgeText: "text-[#486B4D]",
    textColor: "#66856A",
    iconBg: "bg-[#66856A]/10 text-[#66856A]",
    icon: Shapes,
  },
};

export default function SteamSection() {
  return (
    <section className="section-padding bg-[#FAFAF7] relative border-t border-[#E0D9CF]/60" aria-label="Mộc bản qua lăng kính STEAM">
      <div className="container-main">
        <ScrollReveal delay={0.1}>
          <SectionTitle
            eyebrow="Phương pháp tiếp cận"
            title="Mộc bản qua lăng kính STEAM"
            description="Từ một di sản tư liệu thế giới, chúng tôi xây dựng những trải nghiệm học tập kết nối liên môn giữa Khoa học, Công nghệ, Kỹ thuật, Nghệ thuật và Toán học."
            align="center"
            className="max-w-3xl mx-auto mb-14"
          />
        </ScrollReveal>

        {/* ── Central Heritage Hub: Mộc bản là hạt nhân trung tâm ── */}
        <ScrollReveal delay={0.15} direction="up">
          <div className="max-w-4xl mx-auto mb-8 rounded-2xl border border-white/20 bg-gradient-to-br from-[#1E4976] via-[#245788] to-[#2D6A8E] text-white p-7 sm:p-9 relative overflow-hidden shadow-academic">
            {/* Background Hue Imperial Architecture Artwork */}
            <div className="absolute inset-0 opacity-20 pointer-events-none select-none overflow-hidden" aria-hidden="true">
              <Image
                src="/assets/homepage/steam-hub-hue-citadel.webp"
                alt=""
                fill
                className="object-cover object-bottom"
              />
            </div>

            {/* Background texture & pattern */}
            <div className="absolute inset-0 pattern-heritage opacity-10 pointer-events-none" aria-hidden="true" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8860A]/20 border border-[#C8860A]/35 text-[#E8A820] text-xs font-bold uppercase tracking-[0.18em] mb-3">
                  Đối tượng trung tâm di sản
                </div>
                <h3 
                  className="text-2xl sm:text-[1.75rem] font-bold text-white mb-2.5 leading-tight font-heading font-serif"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Mộc bản triều Nguyễn — Hạt nhân Di sản
                </h3>
                <p className="text-white/80 text-sm sm:text-[0.9375rem] leading-relaxed font-normal">
                  33.976 tấm bản khắc gỗ thị lưu trữ tại Trung tâm Lưu trữ Quốc gia IV là đối tượng nghiên cứu gốc duy nhất. Mô hình STEAM đóng vai trò 5 lăng kính liên môn giúp người học khám phá di sản toàn diện.
                </p>
              </div>

              <div className="flex-shrink-0 flex flex-col items-center justify-center px-5 py-4 rounded-xl bg-white/[0.08] border border-white/15 min-w-[135px]">
                <span className="text-xs font-bold text-[#E8A820] uppercase tracking-wider">UNESCO 2009</span>
                <span className="text-lg sm:text-xl font-bold text-white mt-0.5">Ký ức Thế giới</span>
              </div>
            </div>

            {/* Downward connector label */}
            <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-xs font-semibold text-white/65 uppercase tracking-widest">
              <span>Khám phá qua 5 lăng kính giáo dục</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E8A820]" aria-hidden="true" />
            </div>
          </div>
        </ScrollReveal>

        {/* ── The 5 STEAM Spoke Lenses: Soft Tint Wash Editorial Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {steamFramework.map((item, index) => {
            const theme = STEAM_THEMES[item.letter] || STEAM_THEMES.S;
            const IconComp = theme.icon;

            return (
              <ScrollReveal key={item.letter} delay={0.06 * (index + 1)} direction="up">
                <div className={`h-full rounded-2xl ${theme.bg} border ${theme.border} p-5 sm:p-6 shadow-[0_2px_8px_rgba(28,43,58,0.02)] hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group`}>
                  {/* Top subtle 2px accent indicator */}
                  <div 
                    className="absolute top-0 inset-x-0 h-[2px] transition-all duration-300 group-hover:h-1"
                    style={{ backgroundColor: theme.textColor }} 
                    aria-hidden="true"
                  />

                  <div>
                    <div className="flex items-center justify-between mb-4 pt-1">
                      <div className="flex items-center gap-2">
                        <span
                          className="text-2xl sm:text-[1.65rem] font-black leading-none"
                          style={{ color: theme.textColor }}
                        >
                          {item.letter}
                        </span>
                        <div className={`w-7 h-7 rounded-lg ${theme.iconBg} flex items-center justify-center`}>
                          <IconComp size={15} strokeWidth={2.2} />
                        </div>
                      </div>
                      <span className={`text-[0.6875rem] font-bold uppercase tracking-[0.16em] px-2.5 py-0.5 rounded-full ${theme.badgeBg} border ${theme.border} ${theme.badgeText}`}>
                        {item.name}
                      </span>
                    </div>

                    <h3 
                      className="text-lg font-bold text-[#1C2B3A] mb-2 leading-snug font-heading font-serif"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {item.action}
                    </h3>

                    <p className="text-[0.8125rem] sm:text-[0.875rem] text-[#556070] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className={`mt-5 pt-3 border-t ${theme.border} flex items-center gap-2`}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.textColor }} aria-hidden="true" />
                    <span className="text-[0.6875rem] font-semibold text-[#7B8A95]">Lăng kính {item.letter}</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
