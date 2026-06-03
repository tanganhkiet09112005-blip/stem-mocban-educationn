"use client";

import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { hoctapResources, hoctapCategories, HocLieuCategory } from "@/data/hoctap";
import { Search, FileText, Download, PlayCircle, Puzzle, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const getIcon = (type: string) => {
  switch (type) {
    case "Video": return <PlayCircle size={18} strokeWidth={2.5} />;
    case "Trò chơi": return <Puzzle size={18} strokeWidth={2.5} />;
    default: return <FileText size={18} strokeWidth={2.5} />;
  }
};

const getBadgeStyle = (type: string) => {
  switch (type) {
    case "Video": return "badge-wood";
    case "Trò chơi": return "badge-gold";
    default: return "badge-academic";
  }
};

export default function HocTapPage() {
  const [activeTab, setActiveTab] = useState<HocLieuCategory>("Tất cả");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredResources = hoctapResources.filter(res => {
    const matchCategory = activeTab === "Tất cả" || res.category === activeTab;
    const matchSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        res.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <div className="page-header pt-24 md:pt-32">
        <div className="container-main">
          <ScrollReveal delay={0}>
            <p className="text-[0.8125rem] font-bold uppercase tracking-[0.25em] text-[#A37840] mb-4">
              Tài nguyên Giáo dục
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1
              className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-white mb-6 max-w-4xl leading-[1.05]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Thư viện Học liệu số
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-white/80 text-xl md:text-2xl max-w-3xl leading-relaxed font-medium">
              Hệ thống tài liệu, giáo án, và bài tập bổ trợ được biên soạn kỹ lưỡng để tích hợp di sản Mộc bản vào chương trình THPT.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <section className="section-padding flex-1 bg-[#F5F0E8] relative" aria-label="Thư viện học liệu">
        <div className="absolute inset-0 texture-paper pointer-events-none" />
        <div className="container-main relative z-10">
          
          {/* Controls Bar */}
          <ScrollReveal delay={0.1} direction="up">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-16 bg-white p-8 rounded-[2rem] shadow-card border border-[#E0D9CF]">
              {/* Tabs */}
              <div className="flex flex-wrap gap-4">
                {hoctapCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveTab(cat)}
                    className={`px-6 py-3.5 rounded-xl text-base font-bold transition-all duration-300 relative overflow-hidden ${
                      activeTab === cat 
                        ? "text-white shadow-academic" 
                        : "bg-[#FAFAF7] text-[#556070] hover:bg-[#E0D9CF] hover:text-[#1C2B3A]"
                    }`}
                  >
                    {activeTab === cat && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-[#1E4976] to-[#163558] z-0"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-full lg:w-[400px] flex-shrink-0">
                <input 
                  type="text" 
                  placeholder="Tìm kiếm học liệu..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 rounded-2xl border-2 border-[#E0D9CF] bg-[#FAFAF7] text-[#1C2B3A] text-lg focus:outline-none focus:ring-4 focus:ring-[#1E4976]/20 focus:border-[#1E4976] focus:bg-white transition-all placeholder:text-[#9BA8B5] font-medium"
                />
                <Search size={24} className="absolute left-5 top-1/2 -translate-y-1/2 text-[#7B8A95]" />
              </div>
            </div>
          </ScrollReveal>

          {/* Grid with AnimatePresence */}
          {filteredResources.length > 0 ? (
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              <AnimatePresence>
                {filteredResources.map((res, i) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={res.id} 
                    className="card-base p-10 flex flex-col h-full bg-white border border-[#E0D9CF] shadow-sm hover:shadow-card-lg hover:-translate-y-2 transition-all duration-300"
                  >
                    {/* Card Header (Badges) */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-8">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#7C5C2E] bg-[rgba(124,92,46,0.08)] px-4 py-2 rounded-xl border border-[#7C5C2E]/20">
                        {res.category}
                      </span>
                      <span className={`badge px-4 py-2 !text-sm ${getBadgeStyle(res.type)}`}>
                        {getIcon(res.type)} {res.type}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-[#1C2B3A] mb-4 leading-snug group-hover:text-[#1E4976] transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
                      {res.title}
                    </h3>
                    <p className="text-lg text-[#556070] mb-10 flex-1 leading-relaxed line-clamp-4 font-medium">
                      {res.desc}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-6 border-t border-[#E0D9CF] mt-auto">
                      <div className="text-sm text-[#7B8A95] font-medium">
                        Đối tượng: <span className="font-bold text-[#1C2B3A]">{res.audience}</span>
                      </div>
                      {res.type === "Video" ? (
                        <a href={res.fileUrl} className="flex items-center gap-2 text-base font-bold text-[#1E4976] hover:text-[#2D6A8E] group transition-all">
                          Xem video <Eye size={20} className="transform group-hover:scale-110" />
                        </a>
                      ) : (
                        <a href={res.fileUrl} className="flex items-center gap-2 text-base font-bold text-[#1E4976] hover:text-[#2D6A8E] group transition-all">
                          Tải về <Download size={20} className="transform group-hover:-translate-y-1" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            /* Empty State */
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-32 bg-white rounded-[3rem] border-2 border-[#E0D9CF] border-dashed shadow-sm max-w-4xl mx-auto"
            >
              <motion.div 
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-28 h-28 bg-[#FAFAF7] rounded-full flex items-center justify-center mx-auto mb-8 text-[#9BA8B5] border border-[#E0D9CF]"
              >
                <Search size={48} strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-4xl font-bold text-[#1C2B3A] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                Không tìm thấy tài liệu
              </h3>
              <p className="text-xl text-[#556070] mb-10 max-w-lg mx-auto font-medium">
                Vui lòng thử lại với từ khóa khác hoặc xóa bộ lọc để xem toàn bộ thư viện.
              </p>
              <button 
                onClick={() => { setSearchQuery(""); setActiveTab("Tất cả"); }}
                className="btn-ghost !px-10 !py-4 !text-lg"
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
