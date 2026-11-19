"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  BarChart3,
  Users,
  TrendingUp,
  Sparkles,
  ExternalLink,
  Eye,
  X,
  Camera,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import {
  EXPERIMENT_OVERVIEW,
  EXPERIMENT_QUESTIONS_DATA,
  CLASSROOM_EVIDENCE_PHOTOS,
  ExperimentQuestionStat,
  ClassroomEvidencePhoto,
} from "@/data/experimentStats";

type CategoryFilter =
  | "ALL"
  | "NHẬN THỨC DI SẢN"
  | "HỨNG THÚ HỌC TẬP"
  | "NHU CẦU TÍCH HỢP"
  | "ĐÁNH GIÁ SẢN PHẨM";

export default function ComparativeExperimentStats() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("ALL");
  const [selectedPhoto, setSelectedPhoto] = useState<ClassroomEvidencePhoto | null>(null);

  // Filter questions based on selected tab
  const filteredQuestions =
    selectedCategory === "ALL"
      ? EXPERIMENT_QUESTIONS_DATA
      : EXPERIMENT_QUESTIONS_DATA.filter((q) => q.category === selectedCategory);

  const categoryTabs: { key: CategoryFilter; label: string; count: number }[] = [
    { key: "ALL", label: "Tất cả khảo sát", count: EXPERIMENT_QUESTIONS_DATA.length },
    {
      key: "NHẬN THỨC DI SẢN",
      label: "I. Nhận thức di sản",
      count: EXPERIMENT_QUESTIONS_DATA.filter((q) => q.category === "NHẬN THỨC DI SẢN").length,
    },
    {
      key: "HỨNG THÚ HỌC TẬP",
      label: "II. Hứng thú học tập",
      count: EXPERIMENT_QUESTIONS_DATA.filter((q) => q.category === "HỨNG THÚ HỌC TẬP").length,
    },
    {
      key: "NHU CẦU TÍCH HỢP",
      label: "III. Tích hợp nhà trường",
      count: EXPERIMENT_QUESTIONS_DATA.filter((q) => q.category === "NHU CẦU TÍCH HỢP").length,
    },
    {
      key: "ĐÁNH GIÁ SẢN PHẨM",
      label: "IV. Đánh giá STEAM",
      count: EXPERIMENT_QUESTIONS_DATA.filter((q) => q.category === "ĐÁNH GIÁ SẢN PHẨM").length,
    },
  ];

  return (
    <div className="space-y-16">
      {/* ── 1. Header & Giới thiệu phương pháp luận mẫu khảo sát ── */}
      <div className="rounded-2xl bg-white border border-[#E0D9CF]/80 p-6 sm:p-8 lg:p-10 shadow-[0_2px_12px_rgba(28,43,58,0.03)]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#E0D9CF]/60">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E4976]/10 border border-[#1E4976]/20 text-[#1E4976] text-xs font-bold uppercase tracking-wider mb-3">
              <BarChart3 size={14} className="text-[#1E4976]" />
              Dữ liệu đối chứng thực nghiệm sư phạm
            </div>
            <h3
              className="text-2xl sm:text-3xl font-bold text-[#1C2B3A] mb-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Báo Cáo Thống Kê Định Lượng Lớp Thực Nghiệm & Đối Chứng
            </h3>
            <p className="text-sm text-[#556070] max-w-3xl leading-relaxed">
              Khảo sát đối chứng được thực hiện chuẩn hóa giữa <strong>Lớp thực nghiệm (Lớp 11/1)</strong>{" "}
              — học sinh trực tiếp trải nghiệm trọn vẹn bộ kit Bật Mã Cổ Thư, Boardgame Mộc Bản Ký Sự
              và hệ thống web học liệu số — đối sánh cùng <strong>Lớp đối chứng</strong> (học theo phương pháp truyền thống).
            </p>
          </div>

          {/* Quick Info Badges */}
          <div className="flex flex-wrap lg:flex-col items-start gap-2.5 lg:min-w-[240px]">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FAFAF7] border border-[#E0D9CF] text-xs font-semibold text-[#1C2B3A]">
              <Users size={14} className="text-[#C8860A]" />
              <span>Tổng mẫu khảo sát: <strong>{EXPERIMENT_OVERVIEW.sampleSize.total} học sinh</strong></span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1E4976]/5 border border-[#1E4976]/20 text-xs font-semibold text-[#1E4976]">
              <span className="w-2 h-2 rounded-full bg-[#1E4976]" />
              <span>Lớp thực nghiệm: <strong>{EXPERIMENT_OVERVIEW.sampleSize.experimental} HS (Lớp 11/1)</strong></span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
              <span className="w-2 h-2 rounded-full bg-slate-400" />
              <span>Lớp đối chứng: <strong>{EXPERIMENT_OVERVIEW.sampleSize.control} HS</strong></span>
            </div>
          </div>
        </div>

        {/* Chuẩn hóa phương pháp luận & Liên kết nguồn Google Forms */}
        <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#7B8A95] bg-[#FAFAF7] p-4 rounded-xl border border-[#E0D9CF]/60">
          <div className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-[#2E7D32] flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Chuẩn hóa khảo sát:</strong> Phân tích định lượng dựa trên 13 câu hỏi cốt lõi
              (Câu 4 đến 16). Tuân thủ quy tắc bảo mật học sinh và chuẩn hóa nghiên cứu: đã loại bỏ các trường
              định danh (Câu 1, 2, 3) và câu hỏi tự luận mở (Câu 17).
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href="https://docs.google.com/forms/d/1vqrNUX34_yIyKziRNsffFUV6Y9QIqCnkhy1b6Zh271Q/edit#responses"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E0D9CF] text-[#1E4976] hover:text-[#C8860A] font-semibold transition-colors"
            >
              <span>Biểu mẫu Thực nghiệm</span>
              <ExternalLink size={12} />
            </a>
            <a
              href="https://docs.google.com/forms/d/1sSrx1aN2hodznh3i-Mj80oePZZtTxG9LFcCfszyTzSA/edit#responses"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#E0D9CF] text-slate-600 hover:text-[#C8860A] font-semibold transition-colors"
            >
              <span>Biểu mẫu Đối chứng</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* ── 2. Bốn Chỉ Số Đột Phá Then Chốt (4 Key Research Metrics) ── */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8860A] block mb-1">
              Chỉ số then chốt
            </span>
            <h4
              className="text-xl sm:text-2xl font-bold text-[#1C2B3A]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Tác Động Tích Cực Của Mô Hình STEAM Mộc Bản
            </h4>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs font-semibold">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-[#1E4976]" />
              <span className="text-[#1C2B3A]">Lớp Thực nghiệm</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-slate-300" />
              <span className="text-[#7B8A95]">Lớp Đối chứng</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {EXPERIMENT_OVERVIEW.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#E0D9CF]/80 shadow-[0_2px_10px_rgba(28,43,58,0.03)] hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C8860A]/5 rounded-bl-full pointer-events-none" />
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7C5C2E]">
                    Chỉ số 0{idx + 1}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200">
                    <TrendingUp size={12} />
                    +{metric.diff.toFixed(1)}%
                  </span>
                </div>
                <h5 className="text-base font-bold text-[#1C2B3A] mb-2 leading-snug">
                  {metric.label}
                </h5>
                <p className="text-xs text-[#556070] leading-relaxed mb-4">
                  {metric.note}
                </p>
              </div>

              {/* Progress Bars */}
              <div className="space-y-2 pt-3 border-t border-[#E0D9CF]/40">
                <div>
                  <div className="flex justify-between text-[0.6875rem] font-bold mb-1">
                    <span className="text-[#1E4976]">Thực nghiệm</span>
                    <span className="text-[#1E4976]">{metric.experimental}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#1E4976] to-[#C8860A] transition-all duration-700"
                      style={{ width: `${metric.experimental}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[0.6875rem] font-medium text-slate-500 mb-1">
                    <span>Đối chứng</span>
                    <span>{metric.control}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-slate-300 transition-all duration-700"
                      style={{ width: `${metric.control}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 3. Tab Bộ Lọc Phân Nhóm Khảo Sát & Chi Tiết 13 Câu Hỏi ── */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8860A] block mb-1">
              Phân tích định lượng chi tiết
            </span>
            <h4
              className="text-xl sm:text-2xl font-bold text-[#1C2B3A]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              So Sánh Từng Chỉ Tiêu Theo Từng Câu Hỏi Khảo Sát
            </h4>
          </div>

          {/* Legend */}
          <div className="inline-flex items-center gap-4 px-4 py-2 rounded-xl bg-white border border-[#E0D9CF] text-xs font-semibold shadow-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-[#1E4976]" />
              <span className="text-[#1C2B3A]">Thực nghiệm (11/1)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-slate-400" />
              <span className="text-slate-600">Đối chứng</span>
            </div>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#E0D9CF]/60 mb-8 scrollbar-none">
          {categoryTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedCategory(tab.key)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                selectedCategory === tab.key
                  ? "bg-[#1E4976] text-white shadow-sm"
                  : "bg-white text-[#556070] border border-[#E0D9CF]/70 hover:border-[#1E4976]/40 hover:text-[#1C2B3A]"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`px-1.5 py-0.5 rounded-full text-[0.625rem] font-bold ${
                  selectedCategory === tab.key
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Question Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredQuestions.map((q) => (
            <div
              key={q.id}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E0D9CF]/80 shadow-[0_2px_10px_rgba(28,43,58,0.03)] flex flex-col justify-between"
            >
              <div>
                {/* Category & Question Number */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="inline-block text-[0.6875rem] font-bold uppercase tracking-wider text-[#7C5C2E] bg-[#C8860A]/10 px-2.5 py-1 rounded-md">
                    {q.categoryLabel}
                  </span>
                  <span className="text-xs font-bold text-[#1E4976] bg-[#1E4976]/5 px-2.5 py-1 rounded-md border border-[#1E4976]/15">
                    Câu hỏi {q.questionNumber < 10 ? `0${q.questionNumber}` : q.questionNumber}
                  </span>
                </div>

                <h5
                  className="text-base sm:text-lg font-bold text-[#1C2B3A] mb-4 leading-snug"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {q.title}
                </h5>

                {/* Options Comparative Percentage Bars */}
                <div className="space-y-4 mb-5">
                  {q.options.map((opt, optIdx) => {
                    const diffVal = opt.diff ?? opt.experimental - opt.control;
                    const isPositive = diffVal > 0;
                    return (
                      <div
                        key={optIdx}
                        className="p-3 rounded-xl bg-[#FAFAF7] border border-[#E0D9CF]/60 space-y-2 hover:border-[#1E4976]/30 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-3 text-xs">
                          <span className="font-semibold text-[#1C2B3A] leading-snug">
                            {opt.label}
                          </span>
                          <span
                            className={`px-1.5 py-0.5 rounded text-[0.6875rem] font-bold flex-shrink-0 ${
                              isPositive
                                ? "bg-emerald-100 text-emerald-800"
                                : diffVal === 0
                                ? "bg-slate-100 text-slate-700"
                                : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {isPositive ? `+${diffVal.toFixed(1)}%` : `${diffVal.toFixed(1)}%`}
                          </span>
                        </div>

                        {/* Bar 1: Experimental */}
                        <div className="space-y-1">
                          <div className="flex justify-between text-[0.6875rem]">
                            <span className="text-[#1E4976] font-bold flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#1E4976]" />
                              Lớp Thực nghiệm:
                            </span>
                            <span className="font-bold text-[#1E4976]">{opt.experimental}%</span>
                          </div>
                          <div className="h-2 rounded-full bg-slate-200/70 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-[#1E4976] to-[#C8860A] transition-all duration-500"
                              style={{ width: `${Math.min(opt.experimental, 100)}%` }}
                            />
                          </div>
                        </div>

                        {/* Bar 2: Control */}
                        <div className="space-y-1">
                          <div className="flex justify-between text-[0.6875rem]">
                            <span className="text-slate-500 font-medium flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                              Lớp Đối chứng:
                            </span>
                            <span className="font-semibold text-slate-600">{opt.control}%</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-slate-200/70 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-slate-400 transition-all duration-500"
                              style={{ width: `${Math.min(opt.control, 100)}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Sư phạm Insight Box */}
              <div className="p-3.5 rounded-xl bg-[#1E4976]/5 border border-[#1E4976]/15 text-xs text-[#1E4976] leading-relaxed">
                <div className="flex items-start gap-2">
                  <Sparkles size={14} className="text-[#C8860A] flex-shrink-0 mt-0.5" />
                  <p>
                    <strong className="text-[#1C2B3A]">Ý nghĩa sư phạm: </strong>
                    {q.insight}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 4. Bộ Sưu Tập Minh Chứng Hình Ảnh Thực Nghiệm Lớp Học (Classroom Evidence Gallery) ── */}
      <div className="rounded-3xl bg-[#FAFAF7] border border-[#E0D9CF] p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8860A]/10 border border-[#C8860A]/20 text-[#C8860A] text-xs font-bold uppercase tracking-wider mb-2">
              <Camera size={14} />
              Hình ảnh thực tế từ lớp học
            </div>
            <h4
              className="text-xl sm:text-2xl font-bold text-[#1C2B3A]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Minh Chứng Hoạt Động Thực Nghiệm Sư Phạm Tại Nhà Trường
            </h4>
            <p className="text-xs sm:text-sm text-[#556070] mt-1 max-w-2xl leading-relaxed">
              Các khoảnh khắc học sinh THPT tại Huế trải nghiệm thực tế bộ kit khắc in gỗ, bàn cờ Boardgame,
              pha chế mực nho và in dập mộc bản trong tiết dạy chuyên đề.
            </p>
          </div>
          <div className="text-xs text-[#7B8A95] font-semibold flex items-center gap-1.5 self-start sm:self-auto">
            <span>8 ảnh tiêu biểu</span>
            <span>•</span>
            <span>Nhấn vào ảnh để phóng to</span>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CLASSROOM_EVIDENCE_PHOTOS.map((photo, i) => (
            <div
              key={i}
              onClick={() => setSelectedPhoto(photo)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-white border border-[#E0D9CF]/80 shadow-[0_2px_8px_rgba(28,43,58,0.03)] hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="inline-flex items-center gap-1 text-[0.6875rem] font-bold text-white bg-black/40 backdrop-blur-xs px-2 py-1 rounded-md">
                    <Eye size={12} />
                    Xem chi tiết
                  </span>
                </div>
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2 py-0.5 rounded-md text-[0.625rem] font-bold uppercase tracking-wider bg-[#1E4976]/90 text-white backdrop-blur-xs shadow-xs">
                    {photo.tag}
                  </span>
                </div>
              </div>
              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <p className="text-xs text-[#1C2B3A] font-medium leading-relaxed line-clamp-2">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 5. Lightbox Modal Xem Ảnh Phóng To ── */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#E0D9CF]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#E0D9CF] bg-[#FAFAF7]">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase tracking-wider bg-[#1E4976] text-white">
                  {selectedPhoto.tag}
                </span>
                <span className="text-xs text-[#7B8A95] font-medium">Minh chứng thực nghiệm sư phạm</span>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="w-8 h-8 rounded-full bg-white border border-[#E0D9CF] flex items-center justify-center text-slate-600 hover:text-black hover:bg-slate-100 transition-colors"
                aria-label="Đóng ảnh"
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-slate-900">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-contain"
                priority
              />
            </div>

            {/* Modal Caption */}
            <div className="p-4 sm:p-5 bg-white border-t border-[#E0D9CF]/60">
              <p className="text-sm font-semibold text-[#1C2B3A] leading-relaxed">
                {selectedPhoto.caption}
              </p>
              <p className="text-xs text-[#7B8A95] mt-1">
                Tư liệu thực nghiệm thuộc đề tài NCKH sinh viên T.26.XH.503.15 — Trường ĐH Sư phạm, ĐH Huế.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
