import Link from "next/link";
import { ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import type { FeatureItem } from "@/data/homepage";

export default function FeatureCard({ item, className = "" }: { item: FeatureItem; className?: string }) {
  const IconComponent = (LucideIcons as any)[item.icon] || LucideIcons.HelpCircle;

  const bgClasses = {
    academic: "bg-[#1E4976] text-[#FAFAF7]",
    wood: "bg-[#7C5C2E] text-[#FAFAF7]",
    gold: "bg-[#C8860A] text-[#FAFAF7]",
  };

  const bgIconClass = bgClasses[item.color] || bgClasses.academic;

  return (
    <Link
      href={item.href}
      className={`group block rounded-2xl border border-[#E0D9CF]/60 bg-white p-7 sm:p-8 lg:p-9 shadow-[0_2px_10px_rgba(28,43,58,0.03)] hover:shadow-card hover:border-[#C8860A]/35 hover:-translate-y-0.5 transition-all duration-300 ${className}`}
    >
      <div className="flex items-center justify-between mb-5">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-105 ${bgIconClass}`}>
          <IconComponent size={22} strokeWidth={2} />
        </div>
        {item.step && (
          <span className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] px-2.5 py-1 rounded-md bg-[#7C5C2E]/[0.06] text-[#7C5C2E] border border-[#7C5C2E]/15">
            Bước {item.step}
          </span>
        )}
      </div>

      <h3 
        className="text-xl sm:text-[1.3rem] font-bold mb-2.5 text-[#1C2B3A] group-hover:text-[#1E4976] transition-colors leading-snug font-heading font-serif"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {item.title}
      </h3>

      <p className="text-[#556070] mb-6 line-clamp-3 leading-relaxed text-[0.9375rem]">
        {item.description}
      </p>
      
      <div className="flex items-center gap-2 text-[0.875rem] font-bold text-[#1E4976] group-hover:text-[#2D6A8E] mt-auto">
        <span className="relative">
          Tìm hiểu thêm
          <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-current transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
        </span>
        <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
      </div>
    </Link>
  );
}
