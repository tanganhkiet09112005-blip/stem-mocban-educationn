import Link from "next/link";
import { FlaskConical, Mail, Phone, MapPin, ExternalLink, PlayCircle, ArrowRight } from "lucide-react";
import { footerLinks, contactInfo } from "@/data/contact";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#1C2B3A] to-[#121E2A] text-white">
      {/* Heritage Pattern Top Border */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#C8860A]/50 to-transparent opacity-60" />

      <div className="container-main py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 lg:gap-12">
          
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 group mb-5">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #1E4976 0%, #C8860A 100%)" }}
              >
                <FlaskConical size={22} strokeWidth={2} />
              </div>
              <div className="leading-tight">
                <div className="font-bold text-[1.0625rem] tracking-tight text-white" style={{ fontFamily: "var(--font-heading)" }}>
                  STEM MOCBAN
                </div>
                <div className="text-[9px] font-bold tracking-widest uppercase text-[#A37840] mt-1">
                  Education & Research
                </div>
              </div>
            </Link>
            <p className="text-[0.9375rem] text-[#9BA8B5] leading-relaxed mb-6 max-w-sm">
              Kết nối khoa học STEM với di sản Mộc bản triều Nguyễn — kiến tạo không gian giáo dục di sản hiện đại cho thế hệ trẻ Việt Nam.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1E4976] hover:border-[#1E4976] hover:-translate-y-1 transition-all" aria-label="Facebook">
                <ExternalLink size={16} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#C8860A] hover:border-[#C8860A] hover:-translate-y-1 transition-all" aria-label="YouTube">
                <PlayCircle size={16} />
              </a>
              <a href={`mailto:${contactInfo.email}`} className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1E4976] hover:border-[#1E4976] hover:-translate-y-1 transition-all" aria-label="Email">
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Links: Explore */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#A37840] mb-6">
              Khám phá
            </h4>
            <ul className="space-y-3.5">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[0.9375rem] text-[#9BA8B5] hover:text-white flex items-center gap-2 group transition-colors">
                    <ArrowRight size={13} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 text-[#C8860A] transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Participate */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#A37840] mb-6">
              Tham gia
            </h4>
            <ul className="space-y-3.5">
              {footerLinks.participate.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[0.9375rem] text-[#9BA8B5] hover:text-white flex items-center gap-2 group transition-colors">
                    <ArrowRight size={13} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 text-[#C8860A] transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#A37840] mb-6">
              Liên hệ
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[0.9375rem] text-[#9BA8B5]">
                <MapPin size={16} className="text-[#C8860A] mt-1 flex-shrink-0" />
                <span className="leading-relaxed">{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3 text-[0.9375rem]">
                <Phone size={16} className="text-[#C8860A] flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="text-[#9BA8B5] hover:text-white transition-colors">{contactInfo.phone}</a>
              </li>
              <li className="flex items-center gap-3 text-[0.9375rem]">
                <Mail size={16} className="text-[#C8860A] flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-[#9BA8B5] hover:text-white transition-colors break-all">{contactInfo.email}</a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-[#556070]">{contactInfo.hours}</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-black/20">
        <div className="container-main py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs text-[#556070]">
            © {currentYear} <span className="font-semibold text-[#7B8A95]">STEM MOCBAN EDUCATION</span>. Thuộc {contactInfo.unit}.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="/mocban" className="text-xs text-[#7B8A95] hover:text-white transition-colors">Chính sách bảo mật</Link>
            <Link href="/lien-he" className="text-xs text-[#7B8A95] hover:text-white transition-colors">Điều khoản sử dụng</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
