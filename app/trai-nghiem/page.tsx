import type { Metadata } from "next";
import CTAButton from "@/components/ui/CTAButton";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import BatMaInteractiveEngine from "@/components/experience/BatMaInteractiveEngine";
import { trainghiemProducts } from "@/data/trainghiem";
import {
  LayoutGrid,
  Coins,
  BookOpen,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Trải nghiệm sản phẩm giáo dục — STEAM MOCBAN EDUCATION",
  description:
    "Trải nghiệm Boardgame Mộc Bản Ký Sự và Bộ kit Bật Mã Cổ Thư — Học tập và sáng tạo qua mô hình giáo dục STEAM tích hợp Di sản.",
};

export default function TraiNghiemPage() {
  const mbks = trainghiemProducts.find((p) => p.id === "moc-ban-ky-su")!;
  const bmct = trainghiemProducts.find((p) => p.id === "bat-ma-co-thu")!;

  return (
    <>
      {/* ── Page Header ─────────────────────────────────── */}
      <div className="page-header pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="container-main">
          <ScrollReveal delay={0}>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C8860A] mb-3.5">
              STEAM & Gamification in Heritage Education
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-5 max-w-5xl leading-[1.16] text-balance"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Trải nghiệm Giáo dục Di sản
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-white/80 text-base md:text-lg max-w-3xl leading-relaxed font-normal">
              Chuyển hóa tri thức Mộc bản triều Nguyễn thành những trải nghiệm tương tác trực quan qua trò chơi cờ bàn chiến thuật và bộ kit thực hành sáng tạo mộc bản.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ── SẢN PHẨM 1: MỘC BẢN KÝ SỰ (Boardgame) ───────── */}
      <section id="moc-ban-ky-su" className="section-padding bg-white relative border-b border-[#E0D9CF]/50">
        <div className="container-main">
          {/* Header */}
          <ScrollReveal delay={0.1}>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7C5C2E] bg-[#7C5C2E]/[0.07] px-3 py-1 rounded-md mb-3 inline-block">
                {mbks.subtitle}
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C2B3A] mb-4 leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {mbks.title}
              </h2>
              <p className="text-base md:text-lg text-[#556070] leading-relaxed font-normal">
                {mbks.intro}
              </p>
            </div>
          </ScrollReveal>

          {/* Core Info: Editorial 3-Column Flow (No Boxed Cards) */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-16 pb-12 border-b border-[#E0D9CF]/50">
            <ScrollReveal delay={0.12} direction="up">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#7C5C2E] mb-2 block">
                  01 • Ý tưởng sáng tạo
                </span>
                <h3
                  className="text-lg sm:text-xl font-bold text-[#1C2B3A] mb-2.5"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Mô phỏng Khoa cử & Di sản
                </h3>
                <p className="text-sm md:text-[0.9375rem] text-[#556070] leading-relaxed font-normal">
                  {mbks.idea}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.16} direction="up">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#7C5C2E] mb-2 block">
                  02 • Mục tiêu giáo dục
                </span>
                <h3
                  className="text-lg sm:text-xl font-bold text-[#1C2B3A] mb-2.5"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Học lịch sử chủ động
                </h3>
                <p className="text-sm md:text-[0.9375rem] text-[#556070] leading-relaxed font-normal">
                  {mbks.target}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="up">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#7C5C2E] mb-2 block">
                  03 • Năng lực & Phẩm chất
                </span>
                <h3
                  className="text-lg sm:text-xl font-bold text-[#1C2B3A] mb-2.5"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Chiến thuật & Tinh thần dân tộc
                </h3>
                <p className="text-sm md:text-[0.9375rem] text-[#556070] leading-relaxed font-normal">
                  {mbks.eduValue}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Gameplay & Components Detail */}
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start mb-16">
            {/* Left: Components list & Xu Phi Long (Clean structured list, no nested cards) */}
            <ScrollReveal delay={0.2} direction="right">
              <div>
                <div className="flex items-center gap-2.5 mb-6 pb-3 border-b border-[#E0D9CF]/50">
                  <LayoutGrid size={20} className="text-[#7C5C2E]" />
                  <h3
                    className="text-xl sm:text-2xl font-bold text-[#1C2B3A]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Thành phần bộ Boardgame
                  </h3>
                </div>

                <div className="space-y-4 mb-8">
                  {mbks.components.map((comp, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 pb-3.5 border-b border-[#E0D9CF]/40 last:border-b-0">
                      <span className="text-xs font-bold text-[#7C5C2E] font-heading mt-0.5">
                        0{idx + 1}.
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-[#1C2B3A]">{comp.name}</h4>
                        <p className="text-xs sm:text-sm text-[#556070] leading-relaxed font-normal">{comp.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Xu Phi Long highlight */}
                <div className="p-5 rounded-xl bg-[#FAFAF7] border border-[#C8860A]/30 flex items-start gap-4">
                  <Coins size={24} className="text-[#C8860A] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#1C2B3A] mb-1">Cơ chế tài nguyên Xu Phi Long</h4>
                    <p className="text-xs text-[#556070] leading-relaxed font-normal">
                      Lấy cảm hứng từ tiền thưởng và đồng tiền thời Nguyễn, Xu Phi Long đóng vai trò tài nguyên chiến lược để học sinh rèn luyện tư duy quản trị tài chính, ra quyết định đầu tư tri thức và lộ phí khoa cử.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Video & Rules */}
            <ScrollReveal delay={0.25} direction="left">
              <div className="space-y-6">
                <MediaPlaceholder
                  aspectRatio="16/9"
                  type="video"
                  assetKey="video-moc-ban-ky-su"
                  label={mbks.videoPlaceholder}
                  className="rounded-2xl shadow-card"
                />

                <div className="p-6 sm:p-7 rounded-xl bg-[#FAF7F2] border border-[#E0D9CF]/60">
                  <h3
                    className="text-lg font-bold text-[#1C2B3A] mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Luật chơi & Hành trình sĩ tử
                  </h3>
                  <p className="text-xs sm:text-sm text-[#556070] leading-relaxed font-normal">
                    {mbks.gameplay}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Visual Assets Row */}
          <div className="grid sm:grid-cols-3 gap-5">
            {mbks.assetKeys.map((asset, idx) => (
              <ScrollReveal key={asset.key} delay={0.08 * (idx + 1)} direction="up">
                <MediaPlaceholder
                  aspectRatio="4/3"
                  assetKey={asset.key}
                  label={asset.label}
                  className="rounded-xl shadow-xs"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SẢN PHẨM 2: BẬT MÃ CỔ THƯ (Bộ kit 5 bước) ─────── */}
      <section id="bat-ma-co-thu" className="section-padding bg-[#FAFAF7] relative border-b border-[#E0D9CF]/50">
        <div className="container-main">
          {/* Header */}
          <ScrollReveal delay={0.1}>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1E4976] bg-[#1E4976]/[0.07] px-3 py-1 rounded-md mb-3 inline-block">
                {bmct.subtitle}
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C2B3A] mb-4 leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {bmct.title}
              </h2>
              <p className="text-base md:text-lg text-[#556070] leading-relaxed font-normal">
                {bmct.intro}
              </p>
            </div>
          </ScrollReveal>

          {/* Core Info: Editorial 3-Column Flow */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-16 pb-12 border-b border-[#E0D9CF]/50">
            <ScrollReveal delay={0.12} direction="up">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#1E4976] mb-2 block">
                  01 • Ý tưởng sáng tạo
                </span>
                <h3
                  className="text-lg sm:text-xl font-bold text-[#1C2B3A] mb-2.5"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Giải mã hoa văn Mộc bản
                </h3>
                <p className="text-sm md:text-[0.9375rem] text-[#556070] leading-relaxed font-normal">
                  {bmct.idea}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.16} direction="up">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#1E4976] mb-2 block">
                  02 • Mục tiêu giáo dục
                </span>
                <h3
                  className="text-lg sm:text-xl font-bold text-[#1C2B3A] mb-2.5"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Rèn luyện tư duy STEAM
                </h3>
                <p className="text-sm md:text-[0.9375rem] text-[#556070] leading-relaxed font-normal">
                  {bmct.target}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="up">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#1E4976] mb-2 block">
                  03 • Chuỗi học tập khép kín
                </span>
                <h3
                  className="text-lg sm:text-xl font-bold text-[#1C2B3A] mb-2.5"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Từ số hóa đến thủ công
                </h3>
                <p className="text-sm md:text-[0.9375rem] text-[#556070] leading-relaxed font-normal">
                  {bmct.eduValue}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* 5-STEP INTERACTIVE WORKFLOW SHOWCASE */}
          <div className="mb-20">
            <ScrollReveal delay={0.1}>
              <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E4976]/[0.08] text-[#1E4976] text-xs font-bold uppercase tracking-wider mb-2.5">
                  Quy trình tương tác chuẩn hóa
                </div>
                <h3
                  className="text-2xl sm:text-3xl font-bold text-[#1C2B3A]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  5 Bước Trải nghiệm Bật Mã Cổ Thư
                </h3>
                <p className="text-sm text-[#556070] mt-2 font-normal">
                  Trực quan hóa chuỗi thao tác thực hành từ tiếp cận mã số hóa đến in ấn sản phẩm thủ công.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15} direction="up">
              <BatMaInteractiveEngine />
            </ScrollReveal>
          </div>

          {/* Kit Components & Media Placeholders */}
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-start mb-16">
            <ScrollReveal delay={0.2} direction="right">
              <div>
                <h3
                  className="text-xl sm:text-2xl font-bold text-[#1C2B3A] mb-6 pb-3 border-b border-[#E0D9CF]/50"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Thành phần Bộ kit Bật Mã Cổ Thư
                </h3>
                <div className="space-y-4">
                  {bmct.components.map((c, i) => (
                    <div key={i} className="flex items-start gap-3 pb-3 border-b border-[#E0D9CF]/35 last:border-b-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1E4976] mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="text-sm font-bold text-[#1C2B3A]">{c.name}</h4>
                        <p className="text-xs text-[#556070] leading-relaxed font-normal">{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25} direction="left">
              <div className="space-y-5">
                <MediaPlaceholder
                  aspectRatio="16/9"
                  assetKey="bat-ma-co-thu-kit"
                  label="Trọn bộ dụng cụ kit trải nghiệm Bật Mã Cổ Thư"
                  className="rounded-xl shadow-xs"
                />
                <MediaPlaceholder
                  aspectRatio="16/9"
                  assetKey="bat-ma-co-thu-practice"
                  label="Sản phẩm in ấn thủ công trên túi vải canvas & giấy dó"
                  className="rounded-xl shadow-xs"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Global Call to Action ─────────────────────────── */}
      <section className="py-20 md:py-24 text-center relative overflow-hidden" style={{ background: "linear-gradient(145deg, #0D1B2A 0%, #163558 50%, #1E4976 100%)" }}>
        <div className="absolute inset-0 pattern-heritage opacity-10 pointer-events-none" />
        <ScrollReveal delay={0.15} direction="up">
          <div className="container-main relative z-10 max-w-3xl">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-bold text-white mb-5 leading-[1.2]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Đưa trải nghiệm Di sản vào trường học
            </h2>
            <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed font-normal">
              Quý thầy cô và nhà trường có nhu cầu ứng dụng thử nghiệm Boardgame Mộc Bản Ký Sự hoặc Bộ kit Bật Mã Cổ Thư trong các tiết dạy Lịch sử và Hoạt động trải nghiệm, vui lòng liên hệ nhóm nghiên cứu.
            </p>
            <CTAButton href="/lien-he" variant="wood" className="!px-8 !py-3.5 text-base shadow-sm">
              Đăng ký kết nối & Hợp tác ứng dụng
            </CTAButton>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
