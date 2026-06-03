import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import AboutSection from "@/components/home/AboutSection";
import ResearchHighlight from "@/components/home/ResearchHighlight";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Trang chủ — STEM MOCBAN EDUCATION",
  description:
    "Trang chủ STEM MOCBAN EDUCATION — Kết nối khoa học STEM với di sản Mộc bản triều Nguyễn, giáo dục di sản cho học sinh Việt Nam.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <FeaturesGrid />
      <AboutSection />
      <ResearchHighlight />
      <CTASection />
    </>
  );
}
