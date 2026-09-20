"use client";

import { useState } from "react";
import { contactInfo, partnerAudiences, participationSteps } from "@/data/contact";
import { MapPin, Phone, Mail, Clock, ShieldCheck, Send, School, CheckSquare, Square } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function LienHePage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedAudiences, setSelectedAudiences] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    org: "",
    message: "",
  });

  const toggleAudience = (aud: string) => {
    setSelectedAudiences((prev) =>
      prev.includes(aud) ? prev.filter((item) => item !== aud) : [...prev, aud]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* ── Page Header ─────────────────────────────────── */}
      <div className="page-header pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="container-main">
          <ScrollReveal delay={0}>
            <p className="text-[0.8125rem] font-bold uppercase tracking-[0.25em] text-[#C8860A] mb-4">
              Mạng lưới Giáo dục Di sản
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white mb-6 max-w-5xl leading-[1.1] font-heading text-balance"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Kết nối & Ứng dụng
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl leading-relaxed font-normal">
              Nhóm nghiên cứu trân trọng đón nhận sự đồng hành từ các trường THPT, quý thầy cô giáo và các đơn vị văn hóa để đưa sản phẩm STEAM Mộc bản vào thực tiễn giáo dục.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ── 3 Bước Tham gia & Ứng dụng ─────────────────────── */}
      <section className="py-20 bg-[#FAFAF7] border-b border-[#E0D9CF]/60">
        <div className="container-main">
          <ScrollReveal delay={0.1}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A37840] mb-2 block">
                Lộ trình đồng hành
              </span>
              <h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C2B3A] font-heading"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                3 Bước Tham gia & Triển khai
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {participationSteps.map((step, idx) => (
              <ScrollReveal key={step.step} delay={0.1 * (idx + 1)} direction="up">
                <div className="pt-6 border-t border-[#E0D9CF]/80 flex flex-col h-full">
                  <div className="flex items-baseline justify-between mb-4">
                    <span 
                      className="text-3xl md:text-4xl font-bold text-[#1E4976]/30 font-heading select-none"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      0{step.step}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#A37840]">
                      Giai đoạn {step.step}
                    </span>
                  </div>
                  <h3 
                    className="text-xl font-bold text-[#1C2B3A] mb-3 font-heading"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#556070] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Section: Form & Direct Contact ─────────── */}
      <section className="section-padding flex-1 bg-white relative" aria-label="Kết nối">
        <div className="container-main">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Cột trái: Form Đăng ký Kết nối (7 cols) */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={0.1} direction="up">
                <div className="bg-[#FAFAF7]/80 p-7 sm:p-9 lg:p-10 rounded-2xl border border-[#E0D9CF]/80 shadow-[0_4px_24px_rgba(28,43,58,0.03)]">
                  <div className="mb-7 pb-6 border-b border-[#E0D9CF]/60">
                    <span className="eyebrow text-[#1E4976] mb-2 block">
                      Đăng ký kết nối
                    </span>
                    <h2 
                      className="text-2xl sm:text-3xl font-bold text-[#1C2B3A] mb-2 font-heading"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Gửi yêu cầu hợp tác / tư vấn
                    </h2>
                    <p className="text-sm md:text-base text-[#556070] leading-relaxed">
                      Quý thầy cô và nhà trường vui lòng để lại thông tin, nhóm nghiên cứu sẽ liên hệ lại trong thời gian sớm nhất.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="bg-white border border-[#1E4976]/25 rounded-2xl p-8 sm:p-10 text-center shadow-warm relative overflow-hidden">
                      <div className="h-1.5 w-full absolute top-0 left-0 bg-gradient-to-r from-[#1E4976] via-[#C8860A] to-[#1E4976]" />
                      <div className="w-16 h-16 rounded-2xl bg-[#1E4976]/10 text-[#1E4976] border border-[#1E4976]/20 flex items-center justify-center mx-auto mb-5 shadow-xs">
                        <ShieldCheck size={36} />
                      </div>
                      <span className="badge badge-academic mb-3">Xác nhận tiếp nhận</span>
                      <h3 
                        className="text-2xl sm:text-3xl font-bold font-heading text-[#1C2B3A] mb-3"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        Đã tiếp nhận yêu cầu!
                      </h3>
                      <p className="text-sm md:text-base text-[#556070] leading-relaxed max-w-md mx-auto mb-6">
                        Cảm ơn quý thầy cô/quý đơn vị đã quan tâm đến dự án STEAM MOCBAN. Nhóm nghiên cứu sẽ phản hồi qua email hoặc số điện thoại trong vòng 1-2 ngày làm việc.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: "", email: "", phone: "", org: "", message: "" });
                          setSelectedAudiences([]);
                        }}
                        className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-[#E0D9CF] text-xs font-bold uppercase tracking-wider text-[#1E4976] hover:bg-[#FAFAF7] hover:border-[#1E4976]/40 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4976]"
                      >
                        Gửi yêu cầu khác
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Checkboxes: Đối tượng kết nối */}
                      <div role="group" aria-labelledby="audience-group-label">
                        <span id="audience-group-label" className="form-label block text-xs font-bold uppercase tracking-wider text-[#1C2B3A] mb-3">
                          Đối tượng kết nối (Chọn các mục phù hợp):
                        </span>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {partnerAudiences.map((aud) => {
                            const isSelected = selectedAudiences.includes(aud);
                            return (
                              <button
                                type="button"
                                key={aud}
                                role="checkbox"
                                aria-checked={isSelected}
                                onClick={() => toggleAudience(aud)}
                                className={`flex items-start gap-2.5 p-3.5 rounded-xl border text-left text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4976] focus-visible:ring-offset-1 ${
                                  isSelected
                                    ? "bg-[#1E4976]/10 border-[#1E4976] text-[#1E4976] shadow-xs"
                                    : "bg-white border-[#E0D9CF]/80 text-[#556070] hover:border-[#1E4976]/40 hover:bg-white"
                                }`}
                              >
                                {isSelected ? (
                                  <CheckSquare size={18} className="text-[#1E4976] mt-0.5 flex-shrink-0" />
                                ) : (
                                  <Square size={18} className="text-[#9BA8B5] mt-0.5 flex-shrink-0" />
                                )}
                                <span className="leading-snug">{aud}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Họ tên & Đơn vị */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="contact-name" className="form-label">
                            Họ và tên <span className="text-[#C8860A]" aria-hidden="true">*</span>
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            required
                            placeholder="Thầy/Cô hoặc Đại diện"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="form-input"
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-org" className="form-label">
                            Trường / Đơn vị công tác <span className="text-[#C8860A]" aria-hidden="true">*</span>
                          </label>
                          <input
                            id="contact-org"
                            type="text"
                            required
                            placeholder="Ví dụ: Trường THPT..."
                            value={formData.org}
                            onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                            className="form-input"
                          />
                        </div>
                      </div>

                      {/* Email & Số điện thoại */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="contact-email" className="form-label">
                            Địa chỉ Email <span className="text-[#C8860A]" aria-hidden="true">*</span>
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            required
                            placeholder="email@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="form-input"
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-phone" className="form-label">
                            Số điện thoại liên hệ
                          </label>
                          <input
                            id="contact-phone"
                            type="tel"
                            placeholder="09xx xxx xxx"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="form-input"
                          />
                        </div>
                      </div>

                      {/* Nội dung tin nhắn */}
                      <div>
                        <label htmlFor="contact-message" className="form-label">
                          Nội dung mong muốn kết nối <span className="text-[#C8860A]" aria-hidden="true">*</span>
                        </label>
                        <textarea
                          id="contact-message"
                          required
                          rows={4}
                          placeholder="Mong muốn tổ chức tiết học thực nghiệm, nhận tài liệu học liệu số, hoặc trải nghiệm Boardgame tại trường..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="form-textarea"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full h-13 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#1E4976] to-[#163558] hover:from-[#163558] hover:to-[#0D1B2A] text-white font-bold text-base shadow-academic hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4976] focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {loading ? (
                          <span className="inline-flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Đang gửi thông tin...</span>
                          </span>
                        ) : (
                          <>
                            <Send size={18} />
                            <span>Gửi thông tin đăng ký</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Cột phải: Thông tin liên hệ trực tiếp (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <ScrollReveal delay={0.2} direction="left">
                <div className="p-7 sm:p-9 lg:p-10 rounded-2xl bg-white border border-[#E0D9CF]/80 shadow-[0_4px_24px_rgba(28,43,58,0.03)]">
                  <span className="eyebrow text-[#C8860A] mb-2 block">Thông tin liên hệ</span>
                  <h3 
                    className="text-2xl font-bold text-[#1C2B3A] mb-6 pb-4 border-b border-[#E0D9CF]/60 font-heading"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Đơn vị Nghiên cứu
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#1E4976]/5 text-[#1E4976] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#1E4976]/10">
                        <School size={20} />
                      </div>
                      <div>
                        <div className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#7B8A95]">Đơn vị chủ quản</div>
                        <div className="text-sm md:text-base font-bold text-[#1C2B3A] leading-snug">
                          {contactInfo.unit}
                        </div>
                        <div className="text-xs text-[#556070] mt-1">{contactInfo.leadAuthor}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#7C5C2E]/5 text-[#7C5C2E] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#7C5C2E]/10">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <div className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#7B8A95]">Địa chỉ</div>
                        <div className="text-sm md:text-base font-medium text-[#1C2B3A] leading-relaxed">
                          {contactInfo.address}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#C8860A]/5 text-[#C8860A] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#C8860A]/10">
                        <Mail size={20} />
                      </div>
                      <div>
                        <div className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#7B8A95]">Email liên hệ</div>
                        <a
                          href={`mailto:${contactInfo.email}`}
                          className="text-sm md:text-base font-bold text-[#1E4976] hover:text-[#C8860A] transition-colors focus-visible:outline-none focus-visible:underline"
                        >
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#0284C7]/5 text-[#0284C7] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#0284C7]/10">
                        <Phone size={20} />
                      </div>
                      <div>
                        <div className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#7B8A95]">Số điện thoại</div>
                        <a
                          href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                          className="text-sm md:text-base font-bold text-[#1C2B3A] hover:text-[#1E4976] transition-colors focus-visible:outline-none focus-visible:underline"
                        >
                          {contactInfo.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#FAFAF7] border border-[#E0D9CF]/60 text-[#7B8A95] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Clock size={20} />
                      </div>
                      <div>
                        <div className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#7B8A95]">Thời gian tiếp nhận</div>
                        <div className="text-sm text-[#556070]">{contactInfo.hours}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
