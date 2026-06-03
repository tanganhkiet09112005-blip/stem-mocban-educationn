"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-[#E0D9CF] py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-main flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className={`font-black tracking-tight text-xl transition-colors duration-300 ${
            isScrolled ? "text-[#1E4976]" : "text-white"
          }`}
          style={{ fontFamily: "var(--font-heading)" }}
        >
          STEM<span className={isScrolled ? "text-[#C8860A]" : "text-[#E8A820]"}>MOCBAN</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[0.9375rem] font-bold uppercase tracking-wide group transition-colors duration-300 ${
                  isScrolled 
                    ? isActive ? "text-[#1E4976]" : "text-[#556070] hover:text-[#1E4976]"
                    : isActive ? "text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
                <span 
                  className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[3px] bg-current rounded-t-full transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full opacity-50"
                  }`} 
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <CTAButton 
              href="/trai-nghiem" 
              variant={isScrolled ? "primary" : "secondary"} 
              className={!isScrolled ? "!border-white/30 !text-white hover:!bg-white hover:!text-[#1E4976]" : "hover:-translate-y-1 shadow-sm"}
            >
              Trải nghiệm ngay
            </CTAButton>
          </div>

          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-[#1C2B3A] hover:bg-[#F5F0E8]" : "text-white hover:bg-white/10"
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
            className="absolute top-full left-0 w-full bg-white border-b border-[#E0D9CF] shadow-card-lg lg:hidden"
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
                        ? "bg-[rgba(30,73,118,0.08)] text-[#1E4976]"
                        : "text-[#556070] hover:bg-[#F5F0E8] hover:text-[#1C2B3A]"
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
