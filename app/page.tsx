import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import SteamSection from "@/components/home/SteamSection";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import AboutSection from "@/components/home/AboutSection";
import ResearchHighlight from "@/components/home/ResearchHighlight";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Trang chủ — STEAM MOCBAN EDUCATION",
  description:
    "Khám phá Mộc bản triều Nguyễn bằng một cách mới — Di sản • Giáo dục • Công nghệ • Trải nghiệm • Sáng tạo.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <SteamSection />
      <FeaturesGrid />
      <AboutSection />
      <ResearchHighlight />
      <CTASection />
    </>
  );
}
