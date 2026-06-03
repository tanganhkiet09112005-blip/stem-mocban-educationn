import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import CTAButton from "@/components/ui/CTAButton";
import { trainghiemProducts } from "@/data/trainghiem";
import { PlayCircle, Target, Lightbulb, GraduationCap, LayoutGrid, ScrollText } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Trải nghiệm sản phẩm giáo dục",
  description: "Trải nghiệm Boardgame Mộc Bản Ký Sự và Bộ kit Bật Mã Cổ Thư - học tập lịch sử qua gamification.",
};

export default function TraiNghiemPage() {
  return (
    <>
      <div className="page-header pt-24 md:pt-32">
        <div className="container-main">
          <ScrollReveal delay={0}>
            <p className="text-[0.8125rem] font-bold uppercase tracking-[0.2em] text-[#A37840] mb-4 drop-shadow-sm">
              Gamification in Education
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1
              className="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-6 max-w-5xl leading-[1.05] drop-shadow-md"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Trải nghiệm Giáo dục Di sản
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-white/80 text-xl md:text-2xl max-w-3xl leading-relaxed font-medium">
              Biến quá trình học tập di sản trở nên thú vị qua các sản phẩm trò chơi giáo dục và bộ kit giải mã tương tác, thiết kế chuẩn mực từ tư liệu gốc.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {trainghiemProducts.map((product, index) => {
        const isMocBan = product.id === "moc-ban-ky-su";
        const accentColor = isMocBan ? "text-[#7C5C2E]" : "text-[#1E4976]";
        const badgeClass = isMocBan ? "badge-wood" : "badge-academic";
        const bgSection = isMocBan ? "bg-white" : "bg-[#F5F0E8]";
        const bgCard = isMocBan ? "bg-[#FAFAF7]" : "bg-white";
        const patternCls = isMocBan ? "img-placeholder-warm" : "img-placeholder";
        
        const orderImg = isMocBan ? "lg:order-last" : "lg:order-first";
        const orderContent = isMocBan ? "lg:order-first" : "lg:order-last";

        return (
          <section key={product.id} id={product.id} className={`section-padding ${bgSection} relative border-b border-[#E0D9CF]`}>
            {/* Background texture */}
            {!isMocBan && <div className="absolute inset-0 texture-paper pointer-events-none" />}
            
            <div className="container-main relative z-10">
              {/* Product Intro */}
              <ScrollReveal delay={0.1}>
                <div className="text-center max-w-4xl mx-auto mb-20 lg:mb-28">
                  <span className={`badge ${badgeClass} !px-6 !py-2 !text-sm mb-8 shadow-sm`}>
                    {product.subtitle}
                  </span>
                  <h2 className="text-5xl lg:text-[4rem] font-bold text-[#1C2B3A] mb-8 leading-[1.1]" style={{ fontFamily: "var(--font-heading)" }}>
                    {product.title}
                  </h2>
                  <p className="text-xl text-[#556070] leading-relaxed font-medium">
                    {product.intro}
                  </p>
                </div>
              </ScrollReveal>

              {/* Grid Showcase */}
              <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-center mb-28">
                
                {/* Content Side */}
                <div className={`space-y-12 ${orderContent}`}>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <ScrollReveal delay={0.2} direction="up">
                      <div className={`p-10 rounded-[2rem] ${bgCard} border border-[#E0D9CF] shadow-sm hover:shadow-card-lg transition-all duration-300 group`}>
                        <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-sm mb-6 group-hover:-translate-y-1 transition-transform">
                          <Lightbulb size={28} className={accentColor} />
                        </div>
                        <h4 className="font-bold text-[#1C2B3A] mb-3 text-2xl">Ý tưởng</h4>
                        <p className="text-lg text-[#556070] leading-relaxed">{product.idea}</p>
                      </div>
                    </ScrollReveal>
                    
                    <ScrollReveal delay={0.3} direction="up">
                      <div className={`p-10 rounded-[2rem] ${bgCard} border border-[#E0D9CF] shadow-sm hover:shadow-card-lg transition-all duration-300 group`}>
                        <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-sm mb-6 group-hover:-translate-y-1 transition-transform">
                          <Target size={28} className={accentColor} />
                        </div>
                        <h4 className="font-bold text-[#1C2B3A] mb-3 text-2xl">Mục tiêu</h4>
                        <p className="text-lg text-[#556070] leading-relaxed">{product.target}</p>
                      </div>
                    </ScrollReveal>
                  </div>

                  <ScrollReveal delay={0.4} direction="left">
                    <div>
                      <h3 className="flex items-center gap-4 text-3xl font-bold text-[#1C2B3A] mb-6 pb-4 border-b border-[#E0D9CF]" style={{ fontFamily: "var(--font-heading)" }}>
                        <GraduationCap size={32} className={accentColor} /> Giá trị giáo dục
                      </h3>
                      <p className="text-[#556070] leading-relaxed text-lg font-medium">{product.eduValue}</p>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.5} direction="left">
                    <div>
                      <h3 className="flex items-center gap-4 text-3xl font-bold text-[#1C2B3A] mb-6 pb-4 border-b border-[#E0D9CF]" style={{ fontFamily: "var(--font-heading)" }}>
                        <LayoutGrid size={28} className={accentColor} /> Thành phần
                      </h3>
                      <ul className="grid grid-cols-2 gap-y-5 gap-x-8">
                        {product.components.map((c, i) => (
                          <li key={i} className="text-lg text-[#556070] flex items-start gap-3 font-medium">
                            <span className={`w-2.5 h-2.5 rounded-full bg-current ${accentColor} mt-2 flex-shrink-0 shadow-sm`} /> 
                            <span className="leading-snug">{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Video / Visual Side */}
                <div className={`space-y-10 ${orderImg}`}>
                  {/* Massive Video Placeholder */}
                  <ScrollReveal delay={0.3} direction={isMocBan ? "left" : "right"}>
                    <div className={`aspect-[4/3] ${patternCls} rounded-[3rem] flex items-center justify-center relative overflow-hidden group shadow-[0_32px_80px_rgba(28,43,58,0.15)] border border-[#E0D9CF]`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-700 z-10" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 z-10" />
                      
                      {/* Pulse rings */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/20 rounded-full animate-ping z-10" style={{ animationDuration: '3s' }} />
                      
                      <div className="relative z-20 flex flex-col items-center gap-6 transform group-hover:scale-110 transition-transform duration-700">
                        <div className="w-28 h-28 rounded-full bg-white/30 backdrop-blur-xl flex items-center justify-center border border-white/50 shadow-[0_0_40px_rgba(255,255,255,0.2)] cursor-pointer hover:bg-white/40 transition-colors">
                          <PlayCircle size={56} className="text-white" fill="rgba(255,255,255,0.4)" />
                        </div>
                        <div className="text-white text-xl font-bold tracking-wider drop-shadow-md uppercase">
                          Video Hướng dẫn
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>

                  {/* Gameplay details */}
                  <ScrollReveal delay={0.4} direction="up">
                    <div className={`p-10 md:p-12 rounded-[2.5rem] ${bgCard} border border-[#E0D9CF] shadow-card hover:shadow-card-lg transition-shadow`}>
                      <h4 className="font-bold text-[#1C2B3A] mb-5 text-2xl" style={{ fontFamily: "var(--font-heading)" }}>Quy trình & Luật chơi</h4>
                      <p className="text-lg text-[#556070] leading-relaxed font-medium">{product.gameplay}</p>
                    </div>
                  </ScrollReveal>
                </div>

              </div>

              {/* Extras (Gallery / Knowledge) */}
              <div className="pt-24 border-t border-[#E0D9CF]">
                <ScrollReveal delay={0.1}>
                  <SectionTitle
                    eyebrow="Thư viện"
                    title="Không gian trực quan"
                    align="center"
                    className="mx-auto mb-16 max-w-3xl"
                  />
                </ScrollReveal>
                
                {/* Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-20">
                  {product.gallery.map((img, i) => (
                    <ScrollReveal key={i} delay={0.1 * i} direction="up">
                      <div className={`aspect-[4/3] ${patternCls} rounded-3xl border border-[#E0D9CF] overflow-hidden relative group hover:shadow-card-lg transition-shadow cursor-pointer`}>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1C2B3A]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                        <div className="absolute inset-0 flex items-center justify-center z-0 transform group-hover:scale-105 transition-transform duration-700">
                          <span className="text-sm font-bold text-[#7B8A95] px-6 text-center tracking-widest uppercase bg-white/80 py-2 rounded-xl backdrop-blur-md">
                            [Ảnh: {img.alt}]
                          </span>
                        </div>
                        <div className="absolute bottom-6 w-full text-center text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 translate-y-4 group-hover:translate-y-0">
                          Xem hình ảnh lớn
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>

                {isMocBan && product.knowledge && (
                  <ScrollReveal delay={0.2} direction="up">
                    <div className="bg-gradient-to-br from-[#1E4976] to-[#163558] text-white rounded-[3rem] p-12 md:p-16 shadow-academic relative overflow-hidden group">
                      <div className="absolute inset-0 pattern-heritage opacity-30 group-hover:scale-105 transition-transform duration-1000" />
                      <div className="relative z-10">
                        <h4 className="flex items-center gap-4 text-3xl md:text-4xl font-bold mb-10 text-white drop-shadow-md" style={{ fontFamily: "var(--font-heading)" }}>
                          <ScrollText size={40} className="text-[#C8860A]" /> Kho tri thức khoa cử
                        </h4>
                        <ul className="grid md:grid-cols-2 gap-8 lg:gap-12">
                          {product.knowledge.map((k, i) => (
                            <li key={i} className="flex items-start gap-5 text-xl text-white/90 leading-relaxed font-medium">
                              <span className="text-[#C8860A] mt-1 text-2xl drop-shadow-sm">•</span>
                              {k}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </ScrollReveal>
                )}

                {!isMocBan && product.merchandise && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                    {product.merchandise.map((m, i) => (
                      <ScrollReveal key={i} delay={0.1 * i} direction="up">
                        <div className="group cursor-pointer">
                          <div className={`aspect-square ${patternCls} rounded-[2.5rem] mb-6 flex items-center justify-center border border-[#E0D9CF] group-hover:shadow-[0_20px_40px_rgba(28,43,58,0.1)] group-hover:-translate-y-3 transition-all duration-500`}>
                            <span className="text-sm font-bold text-[#7B8A95] px-4 text-center tracking-widest uppercase">[Ảnh: {m.title}]</span>
                          </div>
                          <h5 className="font-bold text-[#1C2B3A] text-xl text-center group-hover:text-[#1E4976] transition-colors">{m.title}</h5>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                )}
              </div>

            </div>
          </section>
        );
      })}
      
      {/* Global CTA */}
      <section className="py-32 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #163558 0%, #1E4976 100%)" }}>
        <div className="absolute inset-0 pattern-heritage opacity-[0.15]" />
        <ScrollReveal delay={0.2} direction="up">
          <div className="container-main relative z-10">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 drop-shadow-sm" style={{ fontFamily: "var(--font-heading)" }}>
              Sẵn sàng triển khai thực tế?
            </h2>
            <p className="text-white/80 text-xl md:text-2xl mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
              Liên hệ với nhóm nghiên cứu để nhận hướng dẫn chi tiết và bộ học cụ dùng thử tại trường của bạn. Chúng tôi luôn chào đón các đơn vị giáo dục hợp tác.
            </p>
            <CTAButton href="/lien-he" variant="wood" className="!px-12 !py-5 text-xl shadow-[0_12px_40px_rgba(200,134,10,0.35)] hover:-translate-y-1 transition-transform">
              Liên hệ hợp tác trải nghiệm
            </CTAButton>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
