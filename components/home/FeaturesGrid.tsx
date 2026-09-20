"use client";

import FeatureCard from "@/components/ui/FeatureCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { features } from "@/data/homepage";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function FeaturesGrid() {
  return (
    <section className="section-padding bg-white relative" id="features" aria-label="Các không gian học tập">
      <div className="container-main relative z-10">
        <ScrollReveal delay={0.1}>
          <SectionTitle
            eyebrow="Hành trình trải nghiệm"
            title="6 Bước Kết nối Di sản Mộc bản"
            description="Quy trình học tập khép kín từ tiếp cận tri thức di sản đến thực nghiệm, sáng tạo và khảo sát phản hồi khoa học."
            align="center"
            className="max-w-3xl mx-auto mb-14"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {features.map((item, i) => (
            <ScrollReveal key={item.id} delay={0.06 * (i + 1)}>
              <FeatureCard item={item} className="h-full bg-[#FAFAF7]/60 hover:bg-white" />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
