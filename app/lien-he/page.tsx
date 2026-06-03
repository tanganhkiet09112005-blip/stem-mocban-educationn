"use client";

import { useState } from "react";
import { contactInfo, contactFormFields } from "@/data/contact";
import { MapPin, Phone, Mail, Clock, ShieldCheck, MessageSquare, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const contactMeta = [
  { Icon: MapPin, label: "Địa chỉ",         value: contactInfo.address },
  { Icon: Phone,  label: "Điện thoại",      value: contactInfo.phone },
  { Icon: Mail,   label: "Email",            value: contactInfo.email },
  { Icon: Clock,  label: "Giờ làm việc",    value: contactInfo.hours },
];

export default function LienHePage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  const handleChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <div className="page-header pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container-main">
          <ScrollReveal delay={0}>
            <p className="text-[0.8125rem] font-bold uppercase tracking-[0.25em] text-[#A37840] mb-4">
              Kết nối & Hợp tác
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1
              className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-white mb-6 max-w-4xl leading-[1.1]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Liên hệ với chúng tôi
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-white/80 text-xl md:text-2xl max-w-3xl leading-relaxed font-medium">
              Chúng tôi luôn sẵn sàng hỗ trợ giáo viên, học sinh, nhà nghiên cứu và tất cả những ai muốn lan tỏa giá trị di sản.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <section className="py-16 md:py-24 flex-1 bg-[#FAFAF7] relative" aria-label="Liên hệ">
        <div className="absolute inset-0 texture-paper opacity-50 pointer-events-none" />
        <div className="container-main relative z-10">
          
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* ── Cột trái: Form Gửi tin nhắn (60%) ── */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={0.1} direction="up">
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_20px_60px_rgba(28,43,58,0.05)] border border-[#E5E0D8]">
                  
                  <div className="mb-10">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1E4976] mb-3">
                      Liên hệ
                    </p>
                    <h2 className="text-4xl font-bold text-[#1C2B3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                      Gửi tin nhắn
                    </h2>
                    <p className="text-[#7B8A95] text-[1.0625rem] font-medium leading-relaxed">
                      Điền thông tin bên dưới, nhóm nghiên cứu sẽ phản hồi trong thời gian sớm nhất.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="bg-[rgba(30,73,118,0.04)] border border-[#1E4976]/15 rounded-2xl p-12 text-center animate-scale-in">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1E4976] to-[#163558] flex items-center justify-center mx-auto mb-6 shadow-md animate-bounce-slow">
                        <ShieldCheck size={40} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#1C2B3A] mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                        Đã gửi thông tin!
                      </h3>
                      <p className="text-[#556070] text-base leading-relaxed max-w-sm mx-auto font-medium">
                        Cảm ơn bạn. Chúng tôi đã nhận được thông tin và sẽ liên hệ lại qua email trong vòng 1–2 ngày làm việc.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} id="contact-form" className="space-y-6">
                      
                      {/* Tên & Email nằm 2 cột trên Desktop */}
                      <div className="grid md:grid-cols-2 gap-6">
                        {contactFormFields.slice(0, 2).map((field) => (
                          <div key={field.id}>
                            <label htmlFor={field.id} className="block text-[0.9375rem] font-semibold text-[#1C2B3A] mb-2">
                              {field.label} {field.required && <span className="text-[#C8860A]">*</span>}
                            </label>
                            <input
                              id={field.id}
                              type={field.type}
                              placeholder={field.placeholder}
                              required={field.required}
                              value={formData[field.id] || ""}
                              onChange={(e) => handleChange(field.id, e.target.value)}
                              className="w-full h-12 md:h-14 px-5 rounded-xl border border-[#E5E0D8] bg-white text-[#1C2B3A] placeholder:text-[#9BA8B5] text-[0.9375rem] md:text-base focus:outline-none focus:ring-2 focus:ring-[#1E4976]/25 focus:border-[#1E4976] transition-all font-medium shadow-sm"
                            />
                          </div>
                        ))}
                      </div>

                      {/* Các trường còn lại full width (hoặc có thể chia cột tuỳ field) */}
                      {contactFormFields.slice(2).map((field) => (
                        <div key={field.id}>
                          <label htmlFor={field.id} className="block text-[0.9375rem] font-semibold text-[#1C2B3A] mb-2">
                            {field.label} {field.required && <span className="text-[#C8860A]">*</span>}
                          </label>
                          {field.type === "select" ? (
                            <select
                              id={field.id}
                              required={field.required}
                              value={formData[field.id] || ""}
                              onChange={(e) => handleChange(field.id, e.target.value)}
                              className="w-full h-12 md:h-14 px-5 rounded-xl border border-[#E5E0D8] bg-white text-[#1C2B3A] text-[0.9375rem] md:text-base focus:outline-none focus:ring-2 focus:ring-[#1E4976]/25 focus:border-[#1E4976] transition-all font-medium appearance-none cursor-pointer shadow-sm"
                              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%237B8A95'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: `right 1.25rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.2em` }}
                            >
                              <option value="" disabled hidden>Chọn phân loại…</option>
                              {field.options?.map((opt) => (
                                <option key={opt} value={opt}>{opt}</option>
                              ))}
                            </select>
                          ) : field.type === "textarea" ? (
                            <textarea
                              id={field.id}
                              placeholder={field.placeholder}
                              required={field.required}
                              value={formData[field.id] || ""}
                              onChange={(e) => handleChange(field.id, e.target.value)}
                              className="w-full min-h-[140px] px-5 py-4 rounded-xl border border-[#E5E0D8] bg-white text-[#1C2B3A] placeholder:text-[#9BA8B5] text-[0.9375rem] md:text-base focus:outline-none focus:ring-2 focus:ring-[#1E4976]/25 focus:border-[#1E4976] transition-all font-medium resize-y shadow-sm"
                            />
                          ) : (
                            <input
                              id={field.id}
                              type={field.type}
                              placeholder={field.placeholder}
                              required={field.required}
                              value={formData[field.id] || ""}
                              onChange={(e) => handleChange(field.id, e.target.value)}
                              className="w-full h-12 md:h-14 px-5 rounded-xl border border-[#E5E0D8] bg-white text-[#1C2B3A] placeholder:text-[#9BA8B5] text-[0.9375rem] md:text-base focus:outline-none focus:ring-2 focus:ring-[#1E4976]/25 focus:border-[#1E4976] transition-all font-medium shadow-sm"
                            />
                          )}
                        </div>
                      ))}

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full h-14 md:h-[3.75rem] mt-4 flex items-center justify-center gap-2 bg-[#1E4976] hover:bg-[#163558] text-white rounded-xl text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-[1px] disabled:opacity-70 disabled:cursor-not-allowed group"
                        id="submit-contact"
                      >
                        {loading ? (
                          <>
                            <span className="w-5 h-5 border-[2.5px] border-white/30 border-t-white rounded-full animate-spin" />
                            Đang xử lý...
                          </>
                        ) : (
                          <>
                            <MessageSquare size={20} className="group-hover:scale-110 transition-transform" /> 
                            Gửi thông tin liên hệ
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* ── Cột phải: Thông tin trực tiếp (40%) ── */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Info Card */}
              <ScrollReveal delay={0.2} direction="left">
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_rgba(28,43,58,0.05)] border border-[#E5E0D8]">
                  <h3 className="font-bold text-[#1C2B3A] text-2xl mb-8" style={{ fontFamily: "var(--font-heading)" }}>
                    Thông tin trực tiếp
                  </h3>
                  <ul className="space-y-6">
                    {contactMeta.map(({ Icon, label, value }) => (
                      <li key={label} className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-xl bg-[#EEF4FA] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300 border border-[#1E4976]/10">
                          <Icon size={20} className="text-[#1E4976]" />
                        </div>
                        <div className="pt-0.5">
                          <div className="text-[0.6875rem] font-bold text-[#7B8A95] uppercase tracking-[0.15em] mb-1">
                            {label}
                          </div>
                          <div className={`text-[1.0625rem] text-[#1C2B3A] font-semibold leading-relaxed ${label === 'Email' ? 'break-all' : ''}`}>
                            {value}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Partnership Card */}
              <ScrollReveal delay={0.3} direction="left">
                <div className="rounded-3xl p-8 text-white relative overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300" style={{ background: "linear-gradient(135deg, #1E4976 0%, #163558 100%)" }}>
                  <div className="absolute inset-0 pattern-heritage opacity-30 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
                  <div className="relative z-10">
                    <h4 className="font-bold text-2xl mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                      Hợp tác trường học
                    </h4>
                    <p className="text-white/80 leading-relaxed mb-8 text-[0.9375rem] font-medium">
                      Mời quý trường hợp tác đưa học sinh đến không gian trải nghiệm hoặc nhận chuyển giao bộ kit học tập di sản.
                    </p>
                    <a href={`mailto:${contactInfo.email}?subject=Hợp tác trường học`} className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 bg-white hover:bg-[#FAFAF7] rounded-xl text-[0.9375rem] font-bold text-[#1E4976] transition-colors shadow-sm">
                      <Mail size={18} /> Gửi email hợp tác
                    </a>
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
