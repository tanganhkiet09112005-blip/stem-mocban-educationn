"use client";

import { useState } from "react";
import { hoctapResources, hoctapCategories, HocLieuCategory } from "@/data/hoctap";
import { Search, FileText, Download, PlayCircle, Puzzle, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const getIcon = (type: string) => {
  if (type.includes("Video")) return <PlayCircle size={15} strokeWidth={2.2} />;
  if (type.includes("Trò chơi") || type.includes("Tương tác")) return <Puzzle size={15} strokeWidth={2.2} />;
  return <FileText size={15} strokeWidth={2.2} />;
};

export default function HocTapPage() {
  const [activeTab, setActiveTab] = useState<HocLieuCategory>("Tất cả");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = hoctapResources.filter((res) => {
    const matchCategory = activeTab === "Tất cả" || res.category === activeTab;
    const matchSearch =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* ── Page Header ─────────────────────────────────── */}
      <div className="page-header pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="container-main">
          <ScrollReveal delay={0}>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C8860A] mb-3.5">
              Học liệu Giáo dục & Giảng dạy
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-5 max-w-5xl leading-[1.16] text-balance"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Từ di sản đến học liệu
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-white/80 text-base md:text-lg max-w-3xl leading-relaxed font-normal">
              Chuyển hóa giá trị Mộc bản triều Nguyễn thành các bài đọc tư liệu, chuyên đề nghiên cứu, giáo án minh họa và hoạt động giáo dục theo định hướng phát triển phẩm chất, năng lực học sinh.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Thư viện học liệu ─────────────────────────────── */}
      <section className="section-padding flex-1 bg-[#F5F0E8] relative" aria-label="Thư viện học liệu">
        <div className="absolute inset-0 texture-paper opacity-50 pointer-events-none" />
        <div className="container-main relative z-10">
          
          {/* Controls Bar: Editorial Tabs + Search (Unboxed) */}
          <ScrollReveal delay={0.1} direction="up">
            <div className="pb-8 mb-12 border-b border-[#E0D9CF]/60 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2">
                {hoctapCategories.map((cat) => {
                  const isActive = activeTab === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveTab(cat)}
                      className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 relative ${
                        isActive
                          ? "bg-[#1E4976] text-white shadow-xs"
                          : "bg-white/80 text-[#556070] hover:bg-white hover:text-[#1C2B3A] border border-[#E0D9CF]/60"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* Search */}
              <div className="relative w-full lg:w-[340px] flex-shrink-0">
                <input 
                  id="search-resources"
                  type="text" 
                  placeholder="Tìm kiếm học liệu..." 
                  aria-label="Tìm kiếm học liệu"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-11 pl-11 pr-4 rounded-xl border border-[#E0D9CF]/85 bg-white text-[#1C2B3A] text-sm hover:border-[#7C5C2E]/45 focus:border-[#1E4976] focus:outline-none focus:ring-3 focus:ring-[#1E4976]/12 transition-all placeholder:text-[#9BA8B5]"
                />
                <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7B8A95] pointer-events-none" />
              </div>
            </div>
          </ScrollReveal>

          {/* Grid of Resource Cards */}
          {filteredResources.length > 0 ? (
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
              <AnimatePresence>
                {filteredResources.map((res) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    key={res.id} 
                    className="p-7 sm:p-8 rounded-2xl bg-white border border-[#E0D9CF]/70 shadow-[0_2px_10px_rgba(28,43,58,0.03)] hover:shadow-card hover:border-[#C8860A]/35 hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full group"
                  >
                    {/* Header Badges — Quiet & Clean */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span className="text-[0.6875rem] font-bold uppercase tracking-wider text-[#7C5C2E] bg-[#7C5C2E]/[0.06] px-2.5 py-1 rounded">
                        {res.category}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E4976]">
                        {getIcon(res.typeBadge)}
                        <span>{res.typeBadge}</span>
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3
                      className="text-lg sm:text-xl font-bold text-[#1C2B3A] mb-2.5 leading-snug group-hover:text-[#1E4976] transition-colors"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {res.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#556070] mb-6 flex-1 leading-relaxed line-clamp-3 font-normal">
                      {res.desc}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#E0D9CF]/40 mt-auto">
                      <span className="text-xs text-[#7B8A95]">
                        Đối tượng: <strong className="text-[#1C2B3A] font-semibold">{res.audience}</strong>
                      </span>
                      {res.fileUrl && res.fileUrl !== "#" ? (
                        res.typeBadge.includes("Video") ? (
                          <a href={res.fileUrl} className="flex items-center gap-1.5 text-xs font-bold text-[#1E4976] hover:text-[#C8860A] transition-colors">
                            <span>Xem video</span>
                            <Eye size={15} />
                          </a>
                        ) : res.fileUrl.startsWith("/") ? (
                          <a href={res.fileUrl} className="flex items-center gap-1.5 text-xs font-bold text-[#1E4976] hover:text-[#C8860A] transition-colors">
                            <span>Trải nghiệm</span>
                            <Puzzle size={15} />
                          </a>
                        ) : (
                          <a href={res.fileUrl} className="flex items-center gap-1.5 text-xs font-bold text-[#1E4976] hover:text-[#C8860A] transition-colors">
                            <span>Tài liệu</span>
                            <Download size={15} />
                          </a>
                        )
                      ) : (
                        <span className="text-[0.6875rem] font-medium text-[#7B8A95] italic">
                          Đang cập nhật
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            /* Empty State */
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20 bg-white rounded-2xl border border-[#E0D9CF]/70 shadow-xs max-w-xl mx-auto"
            >
              <div className="w-16 h-16 bg-[#FAFAF7] rounded-full flex items-center justify-center mx-auto mb-4 text-[#7B8A95]">
                <Search size={28} strokeWidth={1.5} />
              </div>
              <h3
                className="text-xl font-bold text-[#1C2B3A] mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Không tìm thấy tài liệu
              </h3>
              <p className="text-sm text-[#556070] mb-6 max-w-md mx-auto">
                Vui lòng thử lại với từ khóa khác hoặc chuyển sang danh mục khác.
              </p>
              <button 
                onClick={() => { setSearchQuery(""); setActiveTab("Tất cả"); }}
                className="btn-ghost !px-6 !py-2.5 !text-sm"
              >
                Xóa tìm kiếm
              </button>
            </motion.div>
          )}

        </div>
      </section>
    </div>
  );
}
