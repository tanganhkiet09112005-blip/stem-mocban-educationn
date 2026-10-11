"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? "bg-[#FAFAF7]/95 backdrop-blur-md border-b border-[#7C5C2E]/12 shadow-[0_1px_4px_rgba(28,43,58,0.02)] py-3 sm:py-3.5" 
          : "bg-[#FAFAF7]/90 backdrop-blur-sm border-b border-[#7C5C2E]/10 py-3.5 sm:py-4"
      }`}
    >
      <div className="container-main flex items-center justify-between">
        {/* Logo / Brand */}
        <Link 
          href="/" 
          className="flex items-center gap-2.5 font-bold tracking-tight transition-opacity duration-200 hover:opacity-90 flex-shrink-0 whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8860A] rounded"
          style={{ fontFamily: "var(--font-heading)" }}
          aria-label="STEAM MOCBAN Trang chủ"
        >
          <Image
            src="/assets/logo.webp"
            alt="STEAM MOCBAN Emblem"
            width={34}
            height={34}
            className="w-8 h-8 md:w-8.5 md:h-8.5 object-contain flex-shrink-0"
            priority
          />
          <span className="text-[1.125rem] md:text-[1.2rem] leading-none">
            <span className="text-[#1E4976]">STEAM</span>{" "}
            <span className="text-[#C8860A]">MOCBAN</span>
          </span>
        </Link>

        {/* Desktop Nav — xl+ ensures comfortable fit for 7 full items without collision */}
        <nav className="hidden xl:flex items-center gap-5 2xl:gap-7" aria-label="Điều hướng chính">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1.5 px-0.5 text-[0.8125rem] tracking-wider uppercase whitespace-nowrap transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8860A] rounded-xs group ${
                  isActive 
                    ? "text-[#1E4976] font-bold" 
                    : "text-[#2F628F] font-medium hover:text-[#C8860A]"
                }`}
              >
                {item.label}
                {/* Refined editorial bottom hairline indicator — NO pill, NO box */}
                <span 
                  className={`absolute -bottom-1 left-0 right-0 h-[2px] transition-all duration-200 rounded-full ${
                    isActive 
                      ? "bg-[#C8860A] w-full" 
                      : "bg-[#C8860A]/40 w-0 group-hover:w-full"
                  }`} 
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3.5 flex-shrink-0">
          <div className="hidden xl:block">
            <Link
              href="/trai-nghiem"
              className="inline-flex items-center justify-center px-4.5 py-2 rounded-lg text-[0.84rem] font-bold text-white bg-[#1E4976] hover:bg-[#245788] border border-[#1E4976] hover:border-[#C8860A]/50 shadow-[0_1px_3px_rgba(30,73,118,0.12)] transition-all duration-200 tracking-wide whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8860A]"
            >
              Trải nghiệm ngay
            </Link>
          </div>

          <button
            className="xl:hidden p-2 rounded-lg text-[#1E4976] hover:text-[#C8860A] hover:bg-[#F3EEE4]/60 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8860A]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Framer Motion Slide) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 w-full bg-[#FAFAF7] border-b border-[#7C5C2E]/12 shadow-[0_8px_24px_rgba(28,43,58,0.06)] xl:hidden"
          >
            <nav className="flex flex-col p-5 space-y-1" aria-label="Điều hướng mobile">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 text-sm tracking-wider uppercase rounded-lg transition-colors ${
                      isActive
                        ? "text-[#1E4976] font-bold bg-[#F3EEE4]/70 border-l-3 border-[#C8860A]"
                        : "text-[#2F628F] font-medium hover:text-[#1E4976] hover:bg-[#F3EEE4]/40"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-4 pb-1 px-1">
                <Link
                  href="/trai-nghiem"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full py-3 px-5 rounded-lg text-sm font-bold text-white bg-[#1E4976] hover:bg-[#245788] border border-[#1E4976] shadow-sm transition-colors text-center"
                >
                  Trải nghiệm ngay
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
