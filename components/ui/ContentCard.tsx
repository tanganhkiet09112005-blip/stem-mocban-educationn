import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { highlightedProducts } from "@/data/homepage";
type HighlightedProduct = typeof highlightedProducts[0];

type ContentCardProps = (HighlightedProduct | { 
  category: string; 
  title: string; 
  excerpt: string; 
  date?: string; 
  readTime?: string; 
  href: string; 
  id: string 
}) & {
  className?: string;
};

export default function ContentCard(props: ContentCardProps) {
  const isProduct = "intro" in props;
  
  if (isProduct) {
    const prod = props as HighlightedProduct;
    return (
      <Link href={`/trai-nghiem#${prod.id}`} className={`block rounded-[2.5rem] overflow-hidden group transition-all duration-500 ${props.className || 'bg-white'}`}>
        <div className="aspect-[16/9] md:aspect-[2/1] lg:aspect-[16/10] overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className={`w-full h-full ${prod.id === 'moc-ban-ky-su' ? 'img-placeholder-warm' : 'img-placeholder'} transform group-hover:scale-105 transition-transform duration-700`}>
            {/* Visual placeholder text */}
            <div className="absolute inset-0 flex items-center justify-center text-white/50 font-bold text-sm mix-blend-overlay">
              [Visual: {prod.title}]
            </div>
          </div>
        </div>
        <div className="p-8 lg:p-12 flex flex-col h-[calc(100%-auto)]">
          <div className="mb-4">
            <span className={`inline-block px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] rounded-lg ${prod.id === 'moc-ban-ky-su' ? 'text-[#7C5C2E] bg-[rgba(124,92,46,0.1)]' : 'text-[#1E4976] bg-[rgba(30,73,118,0.1)]'}`}>
              {prod.subtitle}
            </span>
          </div>
          <h3 className="text-3xl font-bold mb-4 text-[#1C2B3A] group-hover:text-[#1E4976] transition-colors leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
            {prod.title}
          </h3>
          <p className="text-[#556070] mb-10 text-[1.0625rem] leading-relaxed line-clamp-3">
            {prod.intro}
          </p>
          
          <div className="flex items-center gap-3 mt-auto font-bold text-[#1E4976]">
            <span className="relative">
              Khám phá chi tiết
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-current transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </span>
            <ArrowRight size={20} className="transform group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </Link>
    );
  }

  // Generic content card (for Research publications etc.)
  const gen = props as any;
  return (
    <a href={gen.href} className={`card-base block p-8 group hover:shadow-card-lg transition-all duration-300 hover:-translate-y-1 ${props.className || 'bg-white'}`}>
      <span className="text-[0.8125rem] font-bold text-[#1E4976] uppercase tracking-[0.15em] mb-4 inline-block bg-[rgba(30,73,118,0.06)] px-3 py-1.5 rounded-md">
        {gen.category}
      </span>
      <h3 className="text-xl font-bold text-[#1C2B3A] mb-3 leading-snug group-hover:text-[#1E4976] transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
        {gen.title}
      </h3>
      <p className="text-[#556070] mb-8 leading-relaxed line-clamp-3 text-base">
        {gen.excerpt}
      </p>
      
      <div className="flex items-center justify-between mt-auto pt-5 border-t border-[#E0D9CF]">
        <div className="flex items-center gap-4 text-sm font-medium text-[#7B8A95]">
          {gen.date && <span className="flex items-center gap-1.5"><Clock size={16} /> {gen.date}</span>}
        </div>
        <div className="text-[0.9375rem] font-bold text-[#1E4976] flex items-center gap-2 group-hover:text-[#2D6A8E]">
          {gen.readTime || "Chi tiết"} 
          <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </a>
  );
}
