"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import CTAButton from "@/components/ui/CTAButton";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-[#E0D9CF]/60 py-4 text-[#1C2B3A]" 
          : "bg-transparent py-6 text-white"
      }`}
    >
      <div className="container-main flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2.5 font-black tracking-tight text-xl transition-colors duration-300 flex-shrink-0 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A820] rounded-sm"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <Image
            src="/assets/logo.webp"
            alt="STEAM MOCBAN Emblem"
            width={34}
            height={34}
            className="w-8 h-8 md:w-9 md:h-9 object-contain drop-shadow-sm flex-shrink-0"
            priority
          />
          <span>
            <span className={isScrolled ? "!text-[#1E4976]" : "!text-white"}>STEAM</span>
            <span className={isScrolled ? "!text-[#C8860A]" : "!text-[#E8A820]"}>MOCBAN</span>
          </span>
        </Link>

        {/* Desktop Nav — xl+ ensures comfortable fit for 7 full items without collision */}
        <nav className="hidden xl:flex items-center gap-5 2xl:gap-7">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[0.8125rem] font-semibold uppercase tracking-wider group transition-colors duration-300 py-1 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A820] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm ${
                  isScrolled 
                    ? isActive ? "!text-[#1E4976] font-bold" : "!text-[#556070] hover:!text-[#1E4976]"
                    : isActive ? "!text-white font-bold" : "!text-white/85 hover:!text-white"
                }`}
              >
                {item.label}
                <span 
                  className={`absolute -bottom-1 left-0 h-[2px] transition-all duration-300 rounded-full ${
                    isActive 
                      ? isScrolled ? "w-full bg-[#1E4976]" : "w-full bg-[#E8A820]"
                      : isScrolled ? "w-0 group-hover:w-full bg-[#1E4976]/40" : "w-0 group-hover:w-full bg-white/40"
                  }`} 
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <div className="hidden xl:block">
            <CTAButton 
              href="/trai-nghiem" 
              variant={isScrolled ? "primary" : "secondary"} 
              className={!isScrolled ? "!border-white/30 !text-white hover:!bg-white hover:!text-[#1E4976] !px-5 !py-2 text-[0.875rem]" : "hover:-translate-y-0.5 shadow-sm !px-5 !py-2 text-[0.875rem]"}
            >
              Trải nghiệm ngay
            </CTAButton>
          </div>

          <button
            className={`xl:hidden p-2 rounded-lg transition-colors cursor-pointer ${
              isScrolled ? "!text-[#1C2B3A] hover:bg-[#F5F0E8]" : "!text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Framer Motion Slide) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 w-full bg-white border-b border-[#E0D9CF]/60 shadow-card-lg xl:hidden"
          >
            <nav className="flex flex-col p-6 space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-5 py-4 text-base font-bold uppercase tracking-wider rounded-xl transition-colors ${
                      isActive
                        ? "bg-[rgba(30,73,118,0.08)] !text-[#1E4976]"
                        : "!text-[#556070] hover:bg-[#F5F0E8] hover:!text-[#1C2B3A]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-6 pb-2 px-1">
                <CTAButton href="/trai-nghiem" className="w-full justify-center !py-4 text-lg">
                  Trải nghiệm ngay
                </CTAButton>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
