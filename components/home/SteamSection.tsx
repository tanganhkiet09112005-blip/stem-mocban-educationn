import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { steamFramework } from "@/data/homepage";

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
          <div className="max-w-4xl mx-auto mb-8 rounded-2xl border border-white/10 bg-gradient-to-br from-[#1E4976] via-[#163558] to-[#0D1B2A] text-white p-7 sm:p-9 relative overflow-hidden shadow-card">
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

        {/* ── The 5 STEAM Spoke Lenses: Refined Editorial Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {steamFramework.map((item, index) => (
            <ScrollReveal key={item.letter} delay={0.06 * (index + 1)} direction="up">
              <div className="h-full rounded-xl bg-white border border-[#E0D9CF]/70 p-5 sm:p-6 shadow-[0_2px_8px_rgba(28,43,58,0.03)] hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
                {/* Thin colored top indicator (2px) */}
                <div 
                  className="absolute top-0 inset-x-0 h-[2px] transition-all duration-300 group-hover:h-1"
                  style={{ backgroundColor: item.color }} 
                  aria-hidden="true"
                />

                <div>
                  <div className="flex items-center justify-between mb-3.5 pt-1">
                    <span
                      className="text-2xl sm:text-[1.65rem] font-black leading-none"
                      style={{ color: item.color }}
                    >
                      {item.letter}
                    </span>
                    <span className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] px-2.5 py-0.5 rounded-full bg-[#FAFAF7] border border-[#E0D9CF]/80 text-[#556070]">
                      {item.name}
                    </span>
                  </div>

                  <h3 
                    className="text-lg font-bold text-[#1C2B3A] mb-2 leading-snug font-heading font-serif"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.action}
                  </h3>

                  <p className="text-[0.8125rem] sm:text-[0.875rem] text-[#556070] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F5F0E8] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} aria-hidden="true" />
                  <span className="text-[0.6875rem] font-semibold text-[#7B8A95]">Lăng kính {item.letter}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
