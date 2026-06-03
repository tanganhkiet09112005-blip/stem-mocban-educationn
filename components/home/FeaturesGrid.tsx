"use client";

import FeatureCard from "@/components/ui/FeatureCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { features } from "@/data/homepage";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FeaturesGrid() {
  return (
    <section className="section-padding bg-white relative" id="features" aria-label="Các không gian học tập">
      <div className="absolute inset-0 pattern-dots opacity-[0.03] pointer-events-none" />
      <div className="container-main relative z-10">
        <ScrollReveal delay={0.1}>
          <SectionTitle
            eyebrow="Khám phá"
            title="Không gian Truy cập nhanh"
            description="Từ nghiên cứu khoa học đến trải nghiệm thực địa, mỗi không gian là một cánh cửa kết nối học sinh với di sản Mộc bản."
            align="center"
            className="max-w-3xl mx-auto mb-20"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((item, i) => (
            <ScrollReveal key={item.id} delay={0.1 * (i + 1)}>
              <FeatureCard item={item} className="h-full bg-[#FAFAF7]" />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
