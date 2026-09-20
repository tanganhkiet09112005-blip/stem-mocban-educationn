import Link from "next/link";
import Image from "next/image";
import { BookOpen, Mail, Phone, MapPin, ExternalLink, PlayCircle, ArrowRight } from "lucide-react";
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
            <Link href="/" className="flex items-center gap-3.5 group mb-5">
              <Image
                src="/assets/logo.webp"
                alt="STEAM MOCBAN Logo"
                width={48}
                height={48}
                className="w-12 h-12 object-contain rounded-2xl bg-white/10 p-1 flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform"
              />
              <div className="leading-tight">
                <div className="font-bold text-[1.0625rem] tracking-tight text-white group-hover:text-[#E8A820] transition-colors">
                  STEAM MOCBAN
                </div>
                <div className="text-[9px] font-bold tracking-widest uppercase text-[#E8A820] mt-1">
                  Education & Heritage
                </div>
              </div>
            </Link>
            <p className="text-[0.9375rem] text-[#9BA8B5] leading-relaxed mb-6 max-w-sm">
              Kết nối di sản thông qua STEAM – phương thức mới cho giáo dục di sản hiện đại. Đưa Mộc bản triều Nguyễn đến gần hơn với thế hệ trẻ Việt Nam.
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

          {/* Links: Hành trình học tập */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#E8A820] mb-5 font-sans">
              Hành trình
            </h4>
            <ul className="space-y-3.5">
              {footerLinks.journey.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[0.9375rem] text-[#9BA8B5] hover:text-white flex items-center gap-2 group transition-colors">
                    <ArrowRight size={13} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 text-[#C8860A] transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Nghiên cứu & Kết nối */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#E8A820] mb-5 font-sans">
              Hợp tác
            </h4>
            <ul className="space-y-3.5">
              {footerLinks.collaboration.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[0.9375rem] text-[#9BA8B5] hover:text-white flex items-center gap-2 group transition-colors">
                    <ArrowRight size={13} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 text-[#C8860A] transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#E8A820] mb-5 font-sans">
              Nhóm nghiên cứu
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[0.9375rem] text-[#9BA8B5]">
                <MapPin size={16} className="text-[#C8860A] mt-1 flex-shrink-0" />
                <span className="leading-relaxed">{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3 text-[0.9375rem]">
                <Phone size={16} className="text-[#C8860A] flex-shrink-0" />
                <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="text-[#9BA8B5] hover:text-white transition-colors">{contactInfo.phone}</a>
              </li>
              <li className="flex items-center gap-3 text-[0.9375rem]">
                <Mail size={16} className="text-[#C8860A] flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-[#9BA8B5] hover:text-white transition-colors break-all">{contactInfo.email}</a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-[#7B8A95]">{contactInfo.hours}</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-black/20">
        <div className="container-main py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs text-[#7B8A95]">
            © {currentYear} <span className="font-semibold text-white">STEAM MOCBAN EDUCATION</span>. Nhiệm vụ mã số {contactInfo.taskCode} ({contactInfo.unit}).
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="/mocban" className="text-xs text-[#7B8A95] hover:text-white transition-colors">Khám phá di sản</Link>
            <Link href="/lien-he" className="text-xs text-[#7B8A95] hover:text-white transition-colors">Kết nối & Ứng dụng</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
