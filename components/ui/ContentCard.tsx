import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
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
      <Link
        href={`/trai-nghiem#${prod.id}`}
        className={`block rounded-2xl border border-[#E0D9CF]/70 overflow-hidden group transition-all duration-300 shadow-[0_2px_12px_rgba(28,43,58,0.04)] hover:shadow-card hover:border-[#C8860A]/35 hover:-translate-y-0.5 ${props.className || 'bg-white'}`}
      >
        <div className="p-4 sm:p-5 pb-0">
          <MediaPlaceholder
            assetKey={prod.id === 'moc-ban-ky-su' ? 'home-highlight-boardgame' : 'home-highlight-kit'}
            label={`Sản phẩm: ${prod.title}`}
            aspectRatio="16/9"
            className="rounded-xl"
          />
        </div>
        <div className="p-6 sm:p-7 lg:p-8 flex flex-col h-[calc(100%-auto)]">
          <div className="mb-3">
            <span className={`inline-block px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.16em] rounded-md ${prod.id === 'moc-ban-ky-su' ? 'text-[#7C5C2E] bg-[#7C5C2E]/[0.07] border border-[#7C5C2E]/15' : 'text-[#1E4976] bg-[#1E4976]/[0.07] border border-[#1E4976]/15'}`}>
              {prod.subtitle}
            </span>
          </div>
          <h3 
            className="text-xl sm:text-2xl font-bold mb-3 text-[#1C2B3A] group-hover:text-[#1E4976] transition-colors leading-snug font-heading font-serif"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {prod.title}
          </h3>
          <p className="text-[#556070] mb-8 text-[0.9375rem] leading-relaxed line-clamp-3">
            {prod.intro}
          </p>
          
          <div className="flex items-center gap-2 mt-auto font-bold text-[0.875rem] text-[#1E4976]">
            <span className="relative">
              Khám phá chi tiết
              <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-current transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </span>
            <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
          </div>
        </div>
      </Link>
    );
  }

  // Generic content card (for Research publications etc.)
  const gen = props as any;
  return (
    <a
      href={gen.href}
      className={`card-base block p-7 sm:p-8 group hover:shadow-card transition-all duration-300 hover:-translate-y-0.5 ${props.className || 'bg-white'}`}
    >
      <span className="text-[0.75rem] font-bold text-[#1E4976] uppercase tracking-[0.14em] mb-3 inline-block bg-[#1E4976]/[0.06] px-2.5 py-1 rounded-md">
        {gen.category}
      </span>
      <h3 
        className="text-lg sm:text-xl font-bold text-[#1C2B3A] mb-2.5 leading-snug group-hover:text-[#1E4976] transition-colors font-heading font-serif"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {gen.title}
      </h3>
      <p className="text-[#556070] mb-6 leading-relaxed line-clamp-3 text-[0.9375rem]">
        {gen.excerpt}
      </p>
      
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#E0D9CF]/60">
        <div className="flex items-center gap-4 text-xs font-medium text-[#7B8A95]">
          {gen.date && <span className="flex items-center gap-1.5"><Clock size={14} /> {gen.date}</span>}
        </div>
        <div className="text-[0.875rem] font-bold text-[#1E4976] flex items-center gap-1.5 group-hover:text-[#2D6A8E]">
          {gen.readTime || "Chi tiết"} 
          <ArrowRight size={15} className="transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </a>
  );
}
