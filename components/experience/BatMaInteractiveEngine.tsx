"use client";

import React, { useReducer, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  batMaReducer,
  initialBatMaState,
  BAT_MA_STEPS,
  BAT_MA_CONTENT_STATUS,
  defaultAccessConfig,
  defaultPatterns,
  defaultQuestionBank,
  BatMaStepInfo,
} from "@/data/batMa";
import {
  QrCode,
  Key,
  HelpCircle,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  Palette,
  Scissors,
  Printer,
  ArrowRight,
  ArrowLeft,
  Info,
  Lock,
  Unlock,
  AlertCircle,
  Eye,
  Award,
  Layers,
  Shuffle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BatMaInteractiveEngine() {
  const [state, dispatch] = useReducer(batMaReducer, initialBatMaState);
  const [manualCodeInput, setManualCodeInput] = useState("");
  const [showManualCode, setShowManualCode] = useState(false);

  // Active question and pattern
  const currentQuestion =
    defaultQuestionBank.find((q) => q.id === state.activeQuestionId) || defaultQuestionBank[0];
  const activePattern =
    defaultPatterns.find((p) => p.id === state.selectedPatternId) || defaultPatterns[0];

  // Handler for optional manual code submission
  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "SET_CODE", code: manualCodeInput });
    dispatch({ type: "SUBMIT_CODE", accessConfig: defaultAccessConfig });
  };

  return (
    <div
      className="bg-white rounded-[1.75rem] border border-[#E0D9CF]/60 shadow-[0_4px_24px_rgba(28,43,58,0.04)] overflow-hidden transition-all duration-300"
      aria-label="Mô phỏng chuỗi 5 bước trải nghiệm tương tác Bật Mã Cổ Thư"
      id="bat-ma-interactive-engine"
    >
      {/* ── ARIA Live Announcement Region (Screen Reader Accessible) ── */}
      <div className="sr-only" role="status" aria-live="polite">
        {state.statusMessage}
      </div>

      {/* ── Top Interactive Header & Stepper Bar ──────────────────── */}
      <div className="p-6 sm:p-8 bg-[#163558] text-white border-b border-[#1E4976]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C8860A]/20 border border-[#C8860A]/40 flex items-center justify-center text-[#C8860A] flex-shrink-0">
              <Sparkles size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C8860A]">
                  Trải nghiệm Tương tác
                </span>
                <span className="text-[0.6875rem] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 text-white/85 border border-white/15">
                  Khung UI 5 Bước
                </span>
              </div>
              <h3
                className="text-xl sm:text-2xl font-bold text-white tracking-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Hành trình Bật Mã Cổ Thư
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            {state.uiState !== "idle" && (
              <button
                type="button"
                onClick={() => dispatch({ type: "RESET" })}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                title="Bắt đầu lại từ đầu"
              >
                <RotateCcw size={14} />
                <span>Khởi động lại</span>
              </button>
            )}
            <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-white/[0.08] text-[#FAFAF7]/90 border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              <span>30 Câu đố di sản • Sẵn sàng</span>
            </span>
          </div>
        </div>

        {/* 5-Step Stepper Navigation */}
        <nav aria-label="Các bước trải nghiệm Bật Mã Cổ Thư">
          <ol className="grid grid-cols-5 gap-1.5 sm:gap-3">
            {BAT_MA_STEPS.map((stepItem: BatMaStepInfo, idx: number) => {
              const isActive = state.currentStepIndex === idx && state.uiState !== "idle";
              const isPast = state.highestStepReached > idx || state.uiState === "complete";
              const isAccessible = state.uiState !== "idle" && idx <= state.highestStepReached;
              const isUpcoming = state.uiState === "idle" && idx === 0;

              return (
                <li key={stepItem.step} className="relative min-w-0">
                  <button
                    type="button"
                    onClick={() => {
                      if (isAccessible) {
                        dispatch({ type: "NAVIGATE_TO_STEP", stepIndex: idx });
                      } else if (isUpcoming) {
                        dispatch({ type: "START" });
                      }
                    }}
                    disabled={!isAccessible && !isUpcoming}
                    className={`w-full p-1.5 sm:p-3 rounded-lg sm:rounded-xl text-left transition-all duration-300 flex flex-col justify-between h-full border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8860A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#163558] ${
                      isActive
                        ? "bg-[#1E4976] border-[#C8860A] text-white shadow-academic ring-2 ring-[#C8860A]/40"
                        : isUpcoming
                        ? "bg-white/10 border-[#C8860A]/60 text-white hover:bg-white/15 hover:border-[#C8860A] cursor-pointer shadow-xs"
                        : isAccessible
                        ? "bg-white/10 border-white/20 text-white/90 hover:bg-white/15 cursor-pointer"
                        : "bg-white/5 border-white/10 text-white/30 cursor-not-allowed opacity-50"
                    }`}
                    aria-current={isActive ? "step" : undefined}
                    title={
                      isAccessible
                        ? `Chuyển tới Bước ${stepItem.step}: ${stepItem.name}`
                        : isUpcoming
                        ? `Bước ${stepItem.step} (${stepItem.name}) — Nhấn để bắt đầu`
                        : `Bước ${stepItem.step} (${stepItem.name}) chưa được mở khóa`
                    }
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[0.5625rem] sm:text-xs font-extrabold uppercase tracking-wider text-[#C8860A]">
                        B{stepItem.step}
                      </span>
                      {isPast ? (
                        <CheckCircle2 size={12} className="text-[#34D399] sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                      ) : isActive ? (
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#C8860A] animate-pulse flex-shrink-0" />
                      ) : isUpcoming ? (
                        <Unlock size={10} className="text-[#E8A820] sm:w-3 sm:h-3 flex-shrink-0" />
                      ) : (
                        <Lock size={10} className="text-white/30 sm:w-3 sm:h-3 flex-shrink-0" />
                      )}
                    </div>
                    <div className="text-[0.5625rem] sm:text-xs font-bold truncate">
                      {stepItem.name}
                    </div>
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>

      {/* ── Main Dynamic Stage View Container ─────────────────────── */}
      <div className="p-6 sm:p-10 bg-[#FAFAF7]">
        <AnimatePresence mode="wait">
          {/* ══════════════════════════════════════════════════════════
              VIEW 0: IDLE (Tổng quan bắt đầu)
             ══════════════════════════════════════════════════════════ */}
          {state.uiState === "idle" && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="text-center max-w-2xl mx-auto py-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#C8860A]/10 border border-[#C8860A]/30 flex items-center justify-center mx-auto mb-6 text-[#C8860A]">
                <QrCode size={32} />
              </div>

              <h4
                className="text-2xl sm:text-3xl font-bold text-[#1C2B3A] mb-3 leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Khám phá chuỗi trải nghiệm Bật Mã Cổ Thư
              </h4>

              <p className="text-sm sm:text-base text-[#556070] mb-8 leading-relaxed font-normal">
                Quét mã QR từ thẻ bài giấy trong bộ kit để mở khóa hệ thống, trả lời 1 câu đố di sản ngẫu nhiên và nhận ngay hình ảnh mẫu con dấu Mộc bản của riêng bạn.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => dispatch({ type: "START" })}
                  className="btn-academic !px-8 !py-3.5 text-sm sm:text-base shadow-academic inline-flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4976]"
                >
                  <Sparkles size={18} className="text-[#C8860A]" />
                  <span>Quét QR / Bắt đầu giải đố ngẫu nhiên</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          )}

          {/* ══════════════════════════════════════════════════════════
              VIEW 1: ENTRY (Bước 01 — KHÁM PHÁ / QUÉT MÃ QR)
             ══════════════════════════════════════════════════════════ */}
          {state.uiState === "entry" && (
            <motion.div
              key="entry"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="max-w-3xl mx-auto w-full"
            >
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1E4976] bg-[#1E4976]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
                  Bước 01 — Khám phá
                </span>
                <h4
                  className="text-2xl sm:text-3xl font-bold text-[#1C2B3A] mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Quét mã QR & Khởi đầu hành trình
                </h4>
                <p className="text-sm text-[#556070] max-w-lg mx-auto leading-relaxed">
                  Người học quét mã QR có sẵn trên thẻ giấy trong bộ kit để kích hoạt hệ thống và nhận câu đố di sản ngẫu nhiên.
                </p>
              </div>

              {/* QR Showcase Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E0D9CF] shadow-sm mb-6 flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-2xl p-3 bg-white border-2 border-dashed border-[#C8860A]/50 flex-shrink-0 shadow-inner flex items-center justify-center">
                  <Image
                    src="/assets/bat-ma/qr-bat-ma.png"
                    alt="Mã QR bộ kit Bật Mã Cổ Thư"
                    width={180}
                    height={180}
                    className="object-contain rounded-lg"
                    priority
                  />
                </div>

                <div className="flex-1 text-center md:text-left space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                    <CheckCircle2 size={14} className="text-emerald-600" />
                    <span>Mã QR chính thức bộ Kit</span>
                  </div>
                  <h5
                    className="text-lg sm:text-xl font-bold text-[#1C2B3A]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Mã truy cập hệ thống giải mã
                  </h5>
                  <p className="text-xs sm:text-sm text-[#556070] leading-relaxed">
                    Nếu bạn đã quét mã QR từ điện thoại hoặc đang xem trực tiếp, hãy nhấn nút bên dưới để hệ thống bốc ngẫu nhiên 1 trong 30 câu đố và mở khóa con dấu Mộc bản.
                  </p>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => dispatch({ type: "START" })}
                      className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#1E4976] hover:bg-[#163558] text-white font-bold text-sm transition-all shadow-sm hover:shadow-md inline-flex items-center justify-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4976]"
                    >
                      <Sparkles size={16} className="text-[#C8860A]" />
                      <span>Vào giải đố ngẫu nhiên ngay</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Optional manual code accordion toggle */}
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setShowManualCode(!showManualCode)}
                  className="text-xs font-semibold text-[#7B8A95] hover:text-[#1E4976] transition-colors underline"
                >
                  {showManualCode ? "Ẩn ô nhập mã thẻ bài" : "Hoặc nhập mã thẻ bài thủ công"}
                </button>

                {showManualCode && (
                  <form onSubmit={handleCodeSubmit} className="mt-4 p-5 rounded-2xl bg-white border border-[#E0D9CF] max-w-md mx-auto flex gap-2">
                    <input
                      type="text"
                      value={manualCodeInput}
                      onChange={(e) => setManualCodeInput(e.target.value)}
                      placeholder="Nhập mã thẻ bài (ví dụ: MOCBAN)..."
                      className="flex-1 px-4 py-2 text-xs border rounded-xl font-mono uppercase"
                    />
                    <button type="submit" className="px-4 py-2 bg-[#1E4976] text-white text-xs font-bold rounded-xl">
                      Xác nhận
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          )}

          {/* ══════════════════════════════════════════════════════════
              VIEW 2: QUESTION & HINT (Bước 02 — GIẢI MÃ CÂU ĐỐ DI SẢN)
             ══════════════════════════════════════════════════════════ */}
          {(state.uiState === "question" ||
            state.uiState === "hint" ||
            state.uiState === "retry" ||
            state.uiState === "unlocked") && (
            <motion.div
              key="question-hub"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="max-w-3xl mx-auto w-full"
            >
              <div className="text-center mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1E4976] bg-[#1E4976]/10 px-3.5 py-1.5 rounded-full inline-block mb-2">
                  Bước 02 — Giải mã
                </span>
                <h4
                  className="text-2xl sm:text-3xl font-bold text-[#1C2B3A] mb-1.5"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Trả lời câu hỏi – Mở khóa hình tượng
                </h4>
                <p className="text-xs sm:text-sm text-[#556070] max-w-lg mx-auto leading-relaxed">
                  Đọc kỹ câu đố dân gian dưới đây và chọn đáp án đúng để mở khóa mẫu con dấu Mộc bản tương ứng.
                </p>
              </div>

              {/* Heritage Riddle Card Frame */}
              <div className="p-6 sm:p-9 rounded-3xl bg-white border border-[#E0D9CF] shadow-card relative overflow-hidden mb-6">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E0D9CF]/70 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#7C5C2E] bg-[#7C5C2E]/[0.08] px-2.5 py-1 rounded-md">
                      Câu đố #{currentQuestion.patternIndex} / 30
                    </span>
                    <span className="text-xs text-[#7B8A95] font-medium hidden sm:inline">
                      • Bộ Kit Bật Mã Cổ Thư
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => dispatch({ type: "PICK_RANDOM_QUESTION" })}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-[#1E4976] hover:text-[#C8860A] bg-[#1E4976]/[0.06] hover:bg-[#1E4976]/[0.12] transition-colors"
                    title="Bốc một câu đố ngẫu nhiên khác từ ngân hàng 30 câu hỏi"
                  >
                    <Shuffle size={13} />
                    <span>Đổi câu hỏi khác</span>
                  </button>
                </div>

                {/* Main Riddle Title */}
                <div className="mb-7 text-center sm:text-left bg-[#F4EFE6]/50 p-5 sm:p-6 rounded-2xl border border-[#E0D9CF]/60">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#C8860A] mb-1.5">
                    Câu đố di sản
                  </p>
                  <h5
                    className="text-xl sm:text-2xl md:text-[1.65rem] font-bold text-[#1C2B3A] leading-relaxed"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    &ldquo;{currentQuestion.question}&rdquo;
                  </h5>
                  <p className="text-xs text-[#7B8A95] mt-2 italic">
                    Gợi ý tư duy: Liên hệ với đời sống, vật dụng hoặc hoa văn văn hóa truyền thống.
                  </p>
                </div>

                {/* 4 Interactive Multiple-Choice Options */}
                <div className="space-y-3 mb-6" role="radiogroup" aria-label="Lựa chọn câu trả lời">
                  {currentQuestion.options.map((opt, idx) => {
                    const isSelected = state.selectedOptionId === opt.id;
                    const letter = ["A", "B", "C", "D"][idx];

                    return (
                      <label
                        key={opt.id}
                        className={`flex items-center gap-3.5 p-4 rounded-xl border cursor-pointer transition-all ${
                          isSelected
                            ? "bg-[#1E4976]/10 border-[#1E4976] text-[#1E4976] font-bold shadow-xs ring-2 ring-[#1E4976]/20"
                            : "bg-[#FAFAF7] border-[#E0D9CF]/70 text-[#556070] hover:bg-white hover:border-[#7C5C2E]/40"
                        }`}
                      >
                        <input
                          type="radio"
                          name="question_opt"
                          value={opt.id}
                          checked={isSelected}
                          onChange={() => dispatch({ type: "SELECT_OPTION", optionId: opt.id })}
                          className="sr-only"
                        />
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0 transition-colors ${
                            isSelected
                              ? "bg-[#1E4976] text-white"
                              : "bg-white border border-[#E0D9CF] text-[#7B8A95]"
                          }`}
                        >
                          {letter}
                        </span>
                        <span className="text-sm sm:text-base font-medium flex-1 text-[#1C2B3A]">
                          {opt.label}
                        </span>
                        {isSelected && (
                          <CheckCircle2 size={18} className="text-[#1E4976] flex-shrink-0" />
                        )}
                      </label>
                    );
                  })}
                </div>

                {/* Feedback message when answer is incorrect */}
                {state.uiState === "retry" && (
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 mb-6 flex items-start gap-3">
                    <AlertCircle size={18} className="text-rose-600 flex-shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm">
                      <strong className="font-bold block mb-0.5">Chưa chính xác rồi!</strong>
                      Hãy đọc kỹ lại câu đố và suy nghĩ thêm, hoặc nhấn &ldquo;Xem gợi ý&rdquo; để được hướng dẫn nhé.
                    </div>
                  </div>
                )}

                {/* Hint Expandable View */}
                {state.uiState === "hint" && (
                  <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 mb-6 animate-fadeIn">
                    <div className="flex items-center gap-2 font-bold text-sm mb-1.5 text-amber-800">
                      <HelpCircle size={18} />
                      <span>Gợi ý giải mã di sản:</span>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed mb-3 text-amber-950">
                      {currentQuestion.hint}
                    </p>
                    <button
                      type="button"
                      onClick={() => dispatch({ type: "RETRY_QUESTION" })}
                      className="px-3.5 py-1.5 rounded-lg bg-amber-200 hover:bg-amber-300 text-amber-900 text-xs font-bold transition-colors"
                    >
                      Quay lại trả lời
                    </button>
                  </div>
                )}

                {/* Action Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E0D9CF]/60">
                  <button
                    type="button"
                    onClick={() => dispatch({ type: "REQUEST_HINT" })}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7C5C2E] hover:text-[#C8860A] transition-colors p-1"
                  >
                    <HelpCircle size={16} />
                    <span>Xem gợi ý di sản</span>
                  </button>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        dispatch({
                          type: "SUBMIT_ANSWER",
                          correctOptionId: currentQuestion.correctOptionId,
                        })
                      }
                      disabled={!state.selectedOptionId || state.uiState === "unlocked"}
                      className="px-6 py-2.5 rounded-xl bg-[#1E4976] hover:bg-[#163558] disabled:bg-[#E0D9CF] text-white font-bold text-xs sm:text-sm transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4976]"
                    >
                      Kiểm tra đáp án
                    </button>
                  </div>
                </div>
              </div>

              {/* ── SUCCESS UNLOCKED BANNER & PATTERN CARD ─────────────── */}
              {state.uiState === "unlocked" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#FAFAF7] to-[#F5F0E8] border-2 border-[#C8860A]/60 shadow-academic mb-8"
                >
                  <div className="flex items-center gap-2.5 text-emerald-700 font-bold text-sm mb-4">
                    <CheckCircle2 size={20} className="text-emerald-600" />
                    <span>Giải mã xuất sắc! Bạn đã mở khóa hoa văn con dấu Mộc bản:</span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-2xl border border-[#E0D9CF]">
                    {/* Motif Card Stamp */}
                    <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-[#FAFAF7] border border-[#C8860A]/40 p-2 shadow-inner flex items-center justify-center flex-shrink-0">
                      <Image
                        src={currentQuestion.imageAssetKey}
                        alt={currentQuestion.patternTitle}
                        width={160}
                        height={160}
                        className="object-contain"
                      />
                    </div>

                    <div className="flex-1 text-center sm:text-left space-y-2.5">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C8860A] bg-[#C8860A]/10 px-2.5 py-0.5 rounded">
                        Mẫu con dấu #{currentQuestion.patternIndex} • 5x5 cm
                      </span>
                      <h4
                        className="text-2xl font-bold text-[#1C2B3A]"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {currentQuestion.patternIndex}. {currentQuestion.patternTitle}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#556070] leading-relaxed">
                        {currentQuestion.explanation}
                      </p>

                      <div className="pt-3 flex flex-wrap items-center gap-3">
                        <button
                          type="button"
                          onClick={() => dispatch({ type: "PROCEED_TO_PATTERN" })}
                          className="btn-academic !px-6 !py-2.5 text-xs sm:text-sm inline-flex items-center gap-2 shadow-sm"
                        >
                          <span>Tiến hành Thiết kế con dấu này</span>
                          <ArrowRight size={15} />
                        </button>
                        <button
                          type="button"
                          onClick={() => dispatch({ type: "PICK_RANDOM_QUESTION" })}
                          className="px-4 py-2.5 rounded-xl text-xs font-bold text-[#1E4976] hover:bg-white border border-[#E0D9CF] transition-colors inline-flex items-center gap-1.5"
                        >
                          <Shuffle size={14} />
                          <span>Thử câu đố khác</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* ══════════════════════════════════════════════════════════
              VIEW 3: PATTERN / DESIGN (Bước 03 — THIẾT KẾ)
             ══════════════════════════════════════════════════════════ */}
          {(state.uiState === "pattern" || state.uiState === "design") && (
            <motion.div
              key="design-hub"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="max-w-3xl mx-auto w-full"
            >
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1E4976] bg-[#1E4976]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
                  Bước 03 — Thiết kế
                </span>
                <h4
                  className="text-2xl sm:text-3xl font-bold text-[#1C2B3A] mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Phác họa – Chuyển hình tượng thành nét vẽ
                </h4>
                <p className="text-sm text-[#556070] max-w-lg mx-auto leading-relaxed">
                  Quan sát hoa văn di sản vừa mở khóa, phân tích cấu trúc đường nét và nguyên lý khắc ngược (mirror) trước khi áp mẫu lên phôi gỗ.
                </p>
              </div>

              {/* Pattern Showcase Workspace */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Cột trái: Khung quan sát hoa văn mở khóa */}
                <div className="p-6 rounded-3xl bg-white border border-[#E0D9CF] shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[0.6875rem] font-bold uppercase tracking-widest text-[#7C5C2E]">
                        Mẫu hoa văn con dấu
                      </span>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#C8860A]/15 text-[#7C5C2E] border border-[#C8860A]/30">
                        {activePattern?.id} • 5x5 cm
                      </span>
                    </div>
                    <h5 className="font-bold text-[#1C2B3A] text-lg mb-4">
                      {activePattern?.index}. {activePattern?.title}
                    </h5>
                    <div className="aspect-square rounded-2xl bg-[#FAFAF7] border border-[#E0D9CF] flex flex-col items-center justify-center p-6 text-center text-[#7B8A95] relative overflow-hidden">
                      <div className="relative w-40 h-40 mb-3">
                        <Image
                          src={activePattern?.imageAssetKey || "/assets/bat-ma/motifs/motif-01.webp"}
                          alt={activePattern?.title || "Hoa văn Mộc bản"}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm font-bold text-[#1C2B3A]">
                        {activePattern?.index}. {activePattern?.title}
                      </span>
                      <span className="text-[0.6875rem] text-[#7B8A95] mt-1 max-w-[220px]">
                        {activePattern?.description}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-[#556070] mt-4 italic leading-relaxed">
                    💡 Hướng dẫn: Người học quan sát nét đơn giản, bố cục đối xứng và đường viền nổi của con dấu trước khi can mẫu.
                  </p>
                </div>

                {/* Cột phải: Không gian phác họa nét vẽ ngược (Mirror tracing) */}
                <div className="p-6 rounded-3xl bg-white border border-[#E0D9CF] shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[0.6875rem] font-bold uppercase tracking-widest text-[#1E4976] block mb-2">
                      Khu vực phác họa thực hành
                    </span>
                    <h5 className="font-bold text-[#1C2B3A] text-lg mb-4">
                      Bản can nét ngược (Mirror Tracing)
                    </h5>
                    <div className="aspect-square rounded-2xl bg-[#F5F0E8] border border-[#E0D9CF] flex flex-col items-center justify-center p-6 text-center text-[#7C5C2E] relative overflow-hidden">
                      <div className="relative w-40 h-40 mb-3 filter drop-shadow-sm">
                        <Image
                          src={activePattern?.imageAssetKey || "/assets/bat-ma/motifs/motif-01.webp"}
                          alt={`Khắc ngược: ${activePattern?.title}`}
                          fill
                          className="object-contain -scale-x-100 opacity-80"
                        />
                      </div>
                      <span className="text-sm font-bold block text-[#1C2B3A]">
                        Bản can nét ngược (Mirror)
                      </span>
                      <span className="text-[0.6875rem] text-[#556070] block mt-1">
                        Áp giấy phác thảo ngược lên phôi gỗ 5x5cm
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#E0D9CF]/60 text-xs text-[#556070]">
                    Kỹ thuật: Hoa văn Mộc bản bắt buộc phải được khắc <strong>ngược chiều (mirror)</strong> để khi in dập ra giấy sẽ đạt chiều xuôi chuẩn xác.
                  </div>
                </div>
              </div>

              {/* 30 Official Patterns Grid Selector with Image Previews */}
              <div className="p-6 rounded-3xl bg-white border border-[#E0D9CF] shadow-sm mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-[#E0D9CF]">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1C2B3A] block">
                      30 Mẫu hoa văn con dấu Mộc bản (Bộ Kit chính thức)
                    </span>
                    <span className="text-[11px] text-[#7B8A95]">
                      Nhấp để đổi mẫu hoa văn chuyển sang bước khắc gỗ và in sản phẩm
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#1E4976]/10 text-[#1E4976]">
                    Đang chọn: <strong>{activePattern?.index}. {activePattern?.title}</strong>
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 max-h-60 overflow-y-auto p-1.5 bg-[#FAFAF7] rounded-2xl border border-[#E0D9CF]">
                  {defaultPatterns.map((pat) => {
                    const isSelected = activePattern.id === pat.id;
                    return (
                      <button
                        key={pat.id}
                        type="button"
                        onClick={() => dispatch({ type: "SELECT_PATTERN", patternId: pat.id })}
                        className={`p-2 rounded-xl text-left transition-all text-xs border flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4976] ${
                          isSelected
                            ? "bg-[#1E4976] text-white border-[#1E4976] shadow-sm font-bold"
                            : "bg-white text-[#1C2B3A] border-[#E0D9CF] hover:border-[#C8860A] hover:bg-amber-50/30"
                        }`}
                      >
                        <div className="relative w-8 h-8 rounded-md bg-[#FAFAF7] border border-[#E0D9CF]/50 overflow-hidden flex-shrink-0">
                          <Image src={pat.imageAssetKey} alt={pat.title} fill className="object-contain p-0.5" />
                        </div>
                        <div className="truncate">
                          <div className={`font-mono text-[9px] font-bold ${isSelected ? "text-amber-200" : "text-[#C8860A]"}`}>
                            #{pat.index}
                          </div>
                          <div className="truncate text-xs">{pat.title}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => dispatch({ type: "NAVIGATE_TO_STEP", stepIndex: 1 })}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#556070] hover:text-[#1C2B3A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#556070] rounded-lg p-1.5"
                >
                  <ArrowLeft size={16} />
                  <span>Quay lại Bước 2</span>
                </button>
                <button
                  type="button"
                  onClick={() => dispatch({ type: "PROCEED_TO_CARVE" })}
                  className="btn-wood !px-8 !py-3 text-sm inline-flex items-center gap-2 shadow-academic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8860A] focus-visible:ring-offset-2"
                >
                  <span>Tiếp tục sang Bước 04: Khắc gỗ</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          )}

          {/* ══════════════════════════════════════════════════════════
              VIEW 4: CARVE (Bước 04 — KHẮC GỖ)
             ══════════════════════════════════════════════════════════ */}
          {state.uiState === "carve" && (
            <motion.div
              key="carve"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="max-w-3xl mx-auto w-full"
            >
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1E4976] bg-[#1E4976]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
                  Bước 04 — Khắc gỗ
                </span>
                <h4
                  className="text-2xl sm:text-3xl font-bold text-[#1C2B3A] mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Từ bản phác họa đến bản khắc Mộc bản
                </h4>
                <p className="text-sm text-[#556070] max-w-lg mx-auto leading-relaxed">
                  Trực quan hóa chuỗi thao tác đục khắc thủ công tạo đường nét nổi theo kỹ thuật in khắc mộc bản truyền thống.
                </p>
              </div>

              {/* 4 Thao tác đục khắc chuẩn hóa */}
              <div className="space-y-4 mb-8">
                {[
                  {
                    num: "4.1",
                    title: "Chuẩn bị ván khắc & Áp mẫu phác thảo",
                    desc: "Cố định bản vẽ phác thảo đường nét lên bề mặt ván gỗ mộc bản theo hướng dẫn thực hành của bộ kit.",
                  },
                  {
                    num: "4.2",
                    title: "Định hình đường nét hoa văn",
                    desc: `Quan sát và phân biệt các đường nét chính của hoa văn ${activePattern.title} cần giữ lại trên bản khắc nổi.`,
                  },
                  {
                    num: "4.3",
                    title: "Khắc tỉa đường viền chi tiết",
                    desc: "Sử dụng dụng cụ trổ khắc an toàn trong bộ kit, tỉa dọc theo đường viền của hoa văn di sản.",
                  },
                  {
                    num: "4.4",
                    title: "Bạt nền & Hoàn thiện bản khắc",
                    desc: "Làm sạch phần nền gỗ xung quanh để làm nổi bật hình tượng hoa văn Mộc bản sẵn sàng cho công đoạn in ấn.",
                  },
                ].map((task) => (
                  <div
                    key={task.num}
                    className="p-5 rounded-2xl bg-white border border-[#E0D9CF] shadow-sm flex items-start gap-4 hover:border-[#1E4976]/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C5C2E] to-[#A37840] text-white flex items-center justify-center font-black text-xs flex-shrink-0 shadow-sm">
                      {task.num}
                    </div>
                    <div className="flex-1">
                      <h5 className="text-sm font-bold text-[#1C2B3A] mb-1">{task.title}</h5>
                      <p className="text-xs sm:text-sm text-[#556070] leading-relaxed">{task.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Simulation Progress Bar */}
              <div className="p-6 rounded-3xl bg-white border border-[#E0D9CF] shadow-sm mb-8">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider mb-2">
                  <span className="text-[#1C2B3A]">Tiến độ hoàn thành bản khắc con dấu ({activePattern.title})</span>
                  <span className="text-[#C8860A]">{state.carveProgress}%</span>
                </div>
                <div className="w-full h-3 bg-[#E0D9CF]/60 rounded-full overflow-hidden mb-4">
                  <div
                    className="h-full bg-gradient-to-r from-[#7C5C2E] to-[#C8860A] transition-all duration-500 rounded-full"
                    style={{ width: `${Math.max(state.carveProgress, 25)}%` }}
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => dispatch({ type: "SET_CARVE_PROGRESS", progress: 100 })}
                    className="px-4 py-1.5 rounded-lg bg-[#FAFAF7] hover:bg-[#E0D9CF] text-xs font-bold text-[#1C2B3A] border border-[#E0D9CF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4976]"
                  >
                    Mô phỏng hoàn tất khắc (100%)
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => dispatch({ type: "NAVIGATE_TO_STEP", stepIndex: 2 })}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#556070] hover:text-[#1C2B3A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#556070] rounded-lg p-1.5"
                >
                  <ArrowLeft size={16} />
                  <span>Quay lại Bước 3</span>
                </button>
                <button
                  type="button"
                  onClick={() => dispatch({ type: "PROCEED_TO_PRINT" })}
                  disabled={state.carveProgress < 100}
                  className="btn-wood !px-8 !py-3 text-sm inline-flex items-center gap-2 shadow-academic disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8860A] focus-visible:ring-offset-2"
                  title={state.carveProgress < 100 ? "Bạn cần hoàn thành tiến độ đục khắc 100% để tiếp tục" : "Tiếp tục sang Bước 5: In sản phẩm"}
                >
                  <span>Tiếp tục sang Bước 05: In sản phẩm</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          )}

          {/* ══════════════════════════════════════════════════════════
              VIEW 5: PRINT (Bước 05 — IN SẢN PHẨM)
             ══════════════════════════════════════════════════════════ */}
          {state.uiState === "print" && (
            <motion.div
              key="print"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="max-w-3xl mx-auto w-full"
            >
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1E4976] bg-[#1E4976]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
                  Bước 05 — In sản phẩm
                </span>
                <h4
                  className="text-2xl sm:text-3xl font-bold text-[#1C2B3A] mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  In dấu họa tiết – Tạo sản phẩm riêng mình
                </h4>
                <p className="text-sm text-[#556070] max-w-lg mx-auto leading-relaxed">
                  Lăn mực đều lên ván khắc gỗ con dấu {activePattern.title}, dập in lên túi vải canvas hoặc giấy mỹ thuật.
                </p>
              </div>

              {/* Inking & Pressing Stage Walkthrough */}
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <div className="p-5 rounded-2xl bg-white border border-[#E0D9CF] shadow-sm text-center">
                  <div className="w-10 h-10 rounded-xl bg-[#1E4976]/10 text-[#1E4976] flex items-center justify-center mx-auto mb-3 font-bold text-xs">
                    01
                  </div>
                  <h6 className="font-bold text-sm text-[#1C2B3A] mb-1">Dàn đều mực in</h6>
                  <p className="text-xs text-[#556070]">Dùng con lăn chuyên dụng trong bộ kit dàn đều mực in lên bề mặt ván gỗ nổi.</p>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-[#E0D9CF] shadow-sm text-center">
                  <div className="w-10 h-10 rounded-xl bg-[#1E4976]/10 text-[#1E4976] flex items-center justify-center mx-auto mb-3 font-bold text-xs">
                    02
                  </div>
                  <h6 className="font-bold text-sm text-[#1C2B3A] mb-1">Căn chỉnh chất liệu in</h6>
                  <p className="text-xs text-[#556070]">Đặt túi vải canvas hoặc giấy mỹ thuật phẳng phiu lên trên bề mặt ván khắc.</p>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-[#E0D9CF] shadow-sm text-center">
                  <div className="w-10 h-10 rounded-xl bg-[#1E4976]/10 text-[#1E4976] flex items-center justify-center mx-auto mb-3 font-bold text-xs">
                    03
                  </div>
                  <h6 className="font-bold text-sm text-[#1C2B3A] mb-1">Dập miết lực & Bóc tách</h6>
                  <p className="text-xs text-[#556070]">Dùng dụng cụ miết dập đều lực khắp bề mặt rồi nhấc nhẹ tác phẩm để hoàn thiện.</p>
                </div>
              </div>

              {/* Print Output Preview Box */}
              <div className="p-8 rounded-3xl bg-white border border-[#E0D9CF] shadow-sm text-center mb-8">
                {state.printCompleted ? (
                  <div className="animate-fadeIn space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-2">
                      <CheckCircle2 size={32} />
                    </div>
                    <h5 className="text-xl font-bold text-[#1C2B3A]">
                      In dập thành công tác phẩm: {activePattern.title}!
                    </h5>

                    {/* Stamped Artwork Result Card */}
                    <div className="max-w-xs mx-auto p-4 rounded-2xl bg-[#F5F0E8] border border-[#C8860A]/40 shadow-card">
                      <div className="relative w-40 h-40 mx-auto mb-2">
                        <Image
                          src={activePattern.imageAssetKey}
                          alt={activePattern.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-xs font-bold text-[#1C2B3A]">
                        {activePattern.index}. {activePattern.title}
                      </p>
                      <p className="text-[10px] text-[#7C5C2E] font-mono">BỘ KIT BẬT MÃ CỔ THƯ • 2026</p>
                    </div>

                    <p className="text-sm text-[#556070] max-w-md mx-auto">
                      Tác phẩm thủ công mang dấu ấn di sản Mộc bản triều Nguyễn đã hoàn thiện xuất sắc.
                    </p>

                    <button
                      type="button"
                      onClick={() => dispatch({ type: "COMPLETE_EXPERIENCE" })}
                      className="btn-academic !px-8 !py-3 text-sm inline-flex items-center gap-2 shadow-academic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4976]"
                    >
                      <span>Xem tổng kết hành trình 5 bước</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#C8860A]/15 text-[#C8860A] flex items-center justify-center mx-auto mb-4">
                      <Printer size={28} />
                    </div>
                    <h5 className="text-lg font-bold text-[#1C2B3A] mb-2">
                      Sẵn sàng in dập tác phẩm: {activePattern.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-[#556070] max-w-md mx-auto mb-6">
                      Nhấn nút bên dưới để mô phỏng thao tác dập mực và nghiệm thu sản phẩm cuối cùng.
                    </p>
                    <button
                      type="button"
                      onClick={() => dispatch({ type: "EXECUTE_PRINT" })}
                      className="px-8 py-3 rounded-xl bg-[#7C5C2E] hover:bg-[#A37840] text-white font-bold text-sm transition-colors shadow-sm inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5C2E]"
                    >
                      <Printer size={16} />
                      <span>Thực hiện In dập lên túi vải</span>
                    </button>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => dispatch({ type: "NAVIGATE_TO_STEP", stepIndex: 3 })}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#556070] hover:text-[#1C2B3A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#556070] rounded-lg p-1.5"
                >
                  <ArrowLeft size={16} />
                  <span>Quay lại Bước 4</span>
                </button>
                {state.printCompleted && (
                  <button
                    type="button"
                    onClick={() => dispatch({ type: "COMPLETE_EXPERIENCE" })}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#1E4976] hover:text-[#C8860A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4976] rounded-lg p-1.5"
                  >
                    <span>Hoàn thành hành trình</span>
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>
            </motion.div>
          )}

          {/* ══════════════════════════════════════════════════════════
              VIEW 6: COMPLETE (Tổng kết 5 Bước Trải nghiệm)
             ══════════════════════════════════════════════════════════ */}
          {state.uiState === "complete" && (
            <motion.div
              key="complete"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto w-full text-center py-6"
            >
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#1E4976] to-[#C8860A] text-white flex items-center justify-center mx-auto mb-6 shadow-academic">
                <Award size={40} />
              </div>

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C8860A] bg-[#C8860A]/10 px-4 py-1.5 rounded-full mb-3 inline-block">
                Hoàn thành Chuỗi học tập khép kín
              </span>

              <h4
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C2B3A] mb-3 leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Chúc mừng bạn đã hoàn thành Bật Mã Cổ Thư!
              </h4>

              <p className="text-sm sm:text-base text-[#556070] mb-8 leading-relaxed">
                Bạn đã trải qua trọn vẹn chuỗi học tập: quét mã QR, giải đố di sản, định hình nét vẽ, đục khắc ván gỗ và in dập thành công tác phẩm con dấu <strong>{activePattern.title}</strong>.
              </p>

              {/* Achievement Badge Summary */}
              <div className="p-6 rounded-3xl bg-white border border-[#E0D9CF] shadow-sm mb-8 text-left">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#7C5C2E] mb-3">
                  Thành tích đạt được
                </h5>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAFAF7] border border-[#E0D9CF]">
                    <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
                    <span className="text-xs font-bold text-[#1C2B3A]">
                      Giải mã câu đố di sản: {activePattern.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAFAF7] border border-[#E0D9CF]">
                    <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
                    <span className="text-xs font-bold text-[#1C2B3A]">
                      Mở khóa con dấu #{activePattern.index} (5x5cm)
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAFAF7] border border-[#E0D9CF]">
                    <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
                    <span className="text-xs font-bold text-[#1C2B3A]">
                      Hoàn thành quy trình can nét ngược
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAFAF7] border border-[#E0D9CF]">
                    <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
                    <span className="text-xs font-bold text-[#1C2B3A]">
                      In dập sản phẩm vải/giấy dó mỹ thuật
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => dispatch({ type: "RESET" })}
                  className="btn-wood !px-8 !py-3.5 text-sm inline-flex items-center gap-2 shadow-academic"
                >
                  <RotateCcw size={16} />
                  <span>Chơi lại với câu đố mới</span>
                </button>
                <Link
                  href="/hoc-tap"
                  className="px-8 py-3.5 rounded-xl border border-[#E0D9CF] bg-white hover:bg-[#FAFAF7] text-sm font-bold text-[#1C2B3A] transition-colors"
                >
                  Xem thư viện học liệu
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
