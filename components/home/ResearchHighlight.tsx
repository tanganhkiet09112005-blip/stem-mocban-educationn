"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import ContentCard from "@/components/ui/ContentCard";
import { highlightedProducts } from "@/data/homepage";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ProductHighlight() {
  return (
    <section className="section-padding bg-[#FAFAF7]" aria-label="Sản phẩm giáo dục nổi bật">
      <div className="container-main">
        <ScrollReveal delay={0.1} direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 lg:mb-20">
            <SectionTitle
              eyebrow="Nổi bật"
              title="Sản phẩm giáo dục"
              description="Khám phá các sản phẩm tương tác giúp học sinh trải nghiệm lịch sử một cách sinh động, được đầu tư thiết kế bài bản."
              className="mb-0 max-w-2xl"
            />
            <Link href="/trai-nghiem" className="inline-flex items-center gap-3 text-[0.9375rem] font-bold text-[#1E4976] hover:text-white transition-colors group px-6 py-3 bg-[rgba(30,73,118,0.08)] hover:bg-[#1E4976] rounded-xl">
              Xem tất cả sản phẩm
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {highlightedProducts.map((prod, index) => {
            const isMocBan = prod.id === "moc-ban-ky-su";
            return (
              <ScrollReveal key={prod.id} delay={0.1 * (index + 1)} direction="up">
                <ContentCard 
                  {...prod} 
                  className={`h-full shadow-card hover:shadow-card-lg border-[#E0D9CF] ${isMocBan ? 'bg-white' : 'bg-[#F5F0E8]'}`}
                />
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
