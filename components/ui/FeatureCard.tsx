import Link from "next/link";
import { ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import type { FeatureItem } from "@/data/homepage";

export default function FeatureCard({ item, className = "" }: { item: FeatureItem; className?: string }) {
  const IconComponent = (LucideIcons as any)[item.icon] || LucideIcons.HelpCircle;

  const bgClasses = {
    academic: "bg-[#1E4976] text-white",
    wood: "bg-[#7C5C2E] text-white",
    gold: "bg-[#C8860A] text-white",
  };

  const bgIconClass = bgClasses[item.color] || bgClasses.academic;

  return (
    <Link
      href={item.href}
      className={`card-base group block p-8 lg:p-10 border border-[#E0D9CF] hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 ${className}`}
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm transform group-hover:scale-110 transition-transform duration-300 ${bgIconClass}`}>
        <IconComponent size={24} strokeWidth={2} />
      </div>
      <h3
        className="text-2xl font-bold mb-3 text-[#1C2B3A] group-hover:text-[#1E4976] transition-colors leading-snug"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {item.title}
      </h3>
      <p className="text-[#556070] mb-8 line-clamp-3 leading-relaxed text-[1.0625rem]">
        {item.description}
      </p>
      
      <div className="flex items-center gap-2 text-[0.9375rem] font-bold text-[#1E4976] group-hover:text-[#2D6A8E] mt-auto">
        <span className="relative">
          Tìm hiểu thêm
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-current transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
        </span>
        <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform duration-300" />
      </div>
    </Link>
  );
}
