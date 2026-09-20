"use client";

import React, { useReducer, useState } from "react";
import Link from "next/link";
import {
  batMaReducer,
  initialBatMaState,
  BAT_MA_STEPS,
  BAT_MA_CONTENT_STATUS,
  defaultAccessConfig,
  defaultPatterns,
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
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BatMaInteractiveEngine() {
  const [state, dispatch] = useReducer(batMaReducer, initialBatMaState);
  const [manualCodeInput, setManualCodeInput] = useState("");
  const activePattern = defaultPatterns.find((p) => p.id === state.selectedPatternId) || defaultPatterns[0];

  // Handler for code submission
  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "SET_CODE", code: manualCodeInput });
    dispatch({ type: "SUBMIT_CODE", accessConfig: defaultAccessConfig });
  };

  return (
    <div
      className="bg-white rounded-[1.75rem] border border-[#E0D9CF]/60 shadow-[0_4px_24px_rgba(28,43,58,0.04)] overflow-hidden transition-all duration-300"
      aria-label="Mô phỏng chuỗi 5 bước trải nghiệm tương tác Bật Mã Cổ Thư"
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
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8A820]/90" aria-hidden="true" />
              <span>Trạng thái: {BAT_MA_CONTENT_STATUS === "PENDING" ? "Chờ nạp nội dung" : "Sẵn sàng"}</span>
            </span>
          </div>
        </div>

        {/* 5-Step Stepper Navigation (Accessible Buttons & Forward-Guard Protected) */}
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

      {/* ── Main Workspace Body ───────────────────────────────────── */}
      <div className="p-6 sm:p-10 bg-[#FAFAF7] min-h-[440px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {/* ══════════════════════════════════════════════════════════
              VIEW 0: IDLE (Tổng quan trước khi bắt đầu)
             ══════════════════════════════════════════════════════════ */}
          {state.uiState === "idle" && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="text-center max-w-2xl mx-auto py-8"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-[#1E4976]/[0.08] text-[#1E4976] flex items-center justify-center mx-auto mb-5 sm:mb-6 shadow-xs border border-[#1E4976]/15">
                <QrCode size={34} strokeWidth={1.8} className="sm:w-[38px] sm:h-[38px]" />
              </div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1E4976] bg-[#1E4976]/[0.07] border border-[#1E4976]/15 px-3.5 py-1 rounded-full mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8860A]" aria-hidden="true" />
                Mô hình học tập tương tác STEAM
              </span>
              <h4
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C2B3A] mb-4 leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Sẵn sàng Giải mã Di sản Mộc bản
              </h4>
              <p className="text-[#556070] text-base sm:text-lg leading-relaxed mb-8">
                Trải nghiệm kết hợp công nghệ số hóa và thao tác thủ công truyền thống qua chuỗi 5 bước khép kín:
                từ quét mã QR, giải đố lịch sử, định hình nét vẽ, đục khắc ván gỗ đến in thành phẩm lên túi vải canvas.
              </p>
              <button
                type="button"
                onClick={() => dispatch({ type: "START" })}
                className="btn-wood !px-10 !py-4 text-base shadow-[0_12px_32px_rgba(200,134,10,0.35)] hover:-translate-y-0.5 transition-transform inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8860A] focus-visible:ring-offset-2"
              >
                <span>Bắt đầu Bước 01: Khám phá</span>
                <ArrowRight size={18} />
              </button>
            </motion.div>
          )}

          {/* ══════════════════════════════════════════════════════════
              VIEW 1: ENTRY (Bước 01 — KHÁM PHÁ)
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
                  Người học quét mã QR chung có sẵn trên thẻ bài trong bộ kit để truy cập hệ thống giải mã di sản.
                </p>
              </div>

              {/* Notice về trạng thái dữ liệu (Pending Content Notification) */}
              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 mb-8 flex items-start gap-4">
                <Info size={22} className="text-amber-700 flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm leading-relaxed">
                  <strong className="font-bold block mb-1">
                    Trạng thái Mã truy cập: Đang chuẩn hóa (Pending Input)
                  </strong>
                  Mã truy cập chính thức sẽ được in ấn đồng bộ trên bộ thẻ bài của Kit Bật Mã Cổ Thư khi bàn giao thực nghiệm (chờ nạp dữ liệu chính thức tại Phase 4B).
                </div>
              </div>

              {/* Form nhập mã truy cập */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E0D9CF] shadow-sm mb-6">
                <form onSubmit={handleCodeSubmit} className="space-y-4">
                  <label htmlFor="kit-access-code" className="block text-xs font-bold uppercase tracking-wider text-[#1C2B3A]">
                    Nhập mã truy cập từ thẻ bài Kit
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <input
                        id="kit-access-code"
                        type="text"
                        value={manualCodeInput}
                        onChange={(e) => setManualCodeInput(e.target.value)}
                        placeholder="Nhập mã thẻ bài (Ví dụ từ bộ kit)..."
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-[#E0D9CF]/85 text-sm text-[#1C2B3A] hover:border-[#7C5C2E]/45 focus:border-[#1E4976] focus:outline-none focus:ring-3 focus:ring-[#1E4976]/12 uppercase tracking-widest font-mono transition-all"
                      />
                      <Key size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7B8A95]" />
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3.5 rounded-xl bg-[#1E4976] hover:bg-[#163558] text-white font-bold text-sm transition-colors flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4976] focus-visible:ring-offset-2"
                    >
                      <CheckCircle2 size={16} />
                      <span>Xác nhận mã</span>
                    </button>
                  </div>
                  {state.codeError && (
                    <p className="text-xs text-rose-600 font-medium flex items-center gap-1.5 mt-2">
                      <AlertCircle size={14} />
                      <span>{state.codeError}</span>
                    </p>
                  )}
                </form>
              </div>

              {/* Gated Dev-Only Bypass Action: Completely eliminated in Production builds */}
              {process.env.NODE_ENV !== "production" && (
                <div className="text-center pt-2 p-3 rounded-2xl bg-amber-50/60 border border-dashed border-amber-300">
                  <span className="text-[0.6875rem] text-amber-800 font-mono block mb-1">
                    [DEV / PREVIEW ONLY — Tự động ẩn hoàn toàn trên Production]
                  </span>
                  <button
                    type="button"
                    onClick={() => dispatch({ type: "BYPASS_CODE_EXPLORE" })}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#1E4976] hover:text-[#C8860A] transition-colors p-1.5 rounded-lg bg-white border border-amber-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4976]"
                  >
                    <span>Xem trước Bước 02 (Chỉ dành cho nhà phát triển kiểm thử)</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {/* ══════════════════════════════════════════════════════════
              VIEW 2: QUESTION & HINT (Bước 02 — GIẢI MÃ)
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
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1E4976] bg-[#1E4976]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
                  Bước 02 — Giải mã
                </span>
                <h4
                  className="text-2xl sm:text-3xl font-bold text-[#1C2B3A] mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Trả lời câu hỏi – Mở khóa hình tượng
                </h4>
                <p className="text-sm text-[#556070] max-w-lg mx-auto leading-relaxed">
                  Hệ thống đưa ra câu hỏi thử thách về tư liệu di sản Mộc bản. Trả lời đúng để mở khóa hoa văn văn hóa.
                </p>
              </div>

              {/* Question Bank Pending Notice */}
              <div className="p-5 rounded-2xl bg-sky-50 border border-sky-200 text-sky-950 mb-8 flex items-start gap-4">
                <HelpCircle size={22} className="text-sky-700 flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm leading-relaxed">
                  <strong className="font-bold block mb-1">
                    Trạng thái Câu hỏi: Đang chờ Hội đồng Khoa học nghiệm thu (Pending Content)
                  </strong>
                  Bộ câu hỏi trắc nghiệm lịch sử chính thức từ Đề tài T.26.XH.503.15 sẽ được tích hợp trực tiếp vào schema này.
                  Tuyệt đối không sử dụng câu hỏi giả mạo ngoài luồng kiểm duyệt sư phạm.
                </div>
              </div>

              {/* Question Card Frame (Schema-first UI) */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E0D9CF] shadow-sm mb-6">
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E0D9CF]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7C5C2E]">
                    Thử thách di sản #01
                  </span>
                  <span className="text-xs font-semibold text-[#7B8A95]">
                    Lần thử: {state.attemptCount}
                  </span>
                </div>

                {/* Schema Mock Title */}
                <div className="mb-6">
                  <p className="text-base sm:text-lg font-bold text-[#1C2B3A] leading-snug">
                    [Vị trí câu hỏi thử thách chính thức: Nhận diện biểu tượng hoa văn trên Mộc bản triều Nguyễn]
                  </p>
                  <p className="text-xs text-[#7B8A95] mt-1 italic">
                    Nguồn tư liệu trích dẫn: Đang chờ thẩm định văn bản gốc (Chính sử triều Nguyễn).
                  </p>
                </div>

                {/* Options Mock (A, B, C, D schema placeholders) */}
                <div className="space-y-3 mb-6" role="radiogroup" aria-label="Lựa chọn câu trả lời">
                  {[
                    { id: "opt_a", text: "[Phương án A — Dữ liệu chuẩn hóa từ đề tài NCKH]" },
                    { id: "opt_b", text: "[Phương án B — Dữ liệu chuẩn hóa từ đề tài NCKH]" },
                    { id: "opt_c", text: "[Phương án C — Dữ liệu chuẩn hóa từ đề tài NCKH]" },
                    { id: "opt_d", text: "[Phương án D — Dữ liệu chuẩn hóa từ đề tài NCKH]" },
                  ].map((opt) => (
                    <label
                      key={opt.id}
                      className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all focus-within:ring-2 focus-within:ring-[#1E4976] ${
                        state.selectedOptionId === opt.id
                          ? "bg-[#1E4976]/10 border-[#1E4976] text-[#1E4976] font-bold"
                          : "bg-[#FAFAF7] border-[#E0D9CF] text-[#556070] hover:bg-white hover:border-[#7C5C2E]/40"
                      }`}
                    >
                      <input
                        type="radio"
                        name="question_opt"
                        value={opt.id}
                        checked={state.selectedOptionId === opt.id}
                        onChange={() => dispatch({ type: "SELECT_OPTION", optionId: opt.id })}
                        className="w-4 h-4 text-[#1E4976] focus:ring-[#1E4976]"
                      />
                      <span className="text-sm">{opt.text}</span>
                    </label>
                  ))}
                </div>

                {/* Action Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E0D9CF]/60">
                  <button
                    type="button"
                    onClick={() => dispatch({ type: "REQUEST_HINT" })}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7C5C2E] hover:text-[#C8860A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5C2E] rounded-lg p-1"
                  >
                    <HelpCircle size={16} />
                    <span>Xem gợi ý phương pháp</span>
                  </button>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => dispatch({ type: "SUBMIT_ANSWER" })}
                      disabled={!state.selectedOptionId || state.uiState === "unlocked"}
                      className="px-6 py-2.5 rounded-xl bg-[#1E4976] hover:bg-[#163558] disabled:bg-[#E0D9CF] text-white font-bold text-xs sm:text-sm transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4976] focus-visible:ring-offset-2"
                    >
                      Kiểm tra đáp án
                    </button>
                    {(state.uiState === "unlocked" || state.isCorrect || state.highestStepReached >= 2) && (
                      <button
                        type="button"
                        onClick={() => dispatch({ type: "PROCEED_TO_PATTERN" })}
                        className="px-6 py-2.5 rounded-xl bg-[#C8860A] hover:bg-[#A37840] text-white font-bold text-xs sm:text-sm transition-colors shadow-sm inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8860A] focus-visible:ring-offset-2"
                      >
                        <span>Mở khóa hoa văn</span>
                        <ArrowRight size={16} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Hint Expandable View */}
              {state.uiState === "hint" && (
                <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 mb-6 animate-fadeIn">
                  <div className="flex items-center gap-2 font-bold text-sm mb-2 text-amber-800">
                    <LightbulbIcon size={18} />
                    <span>Gợi ý tư duy sư phạm:</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed mb-4">
                    [Khung hiển thị gợi ý: Quan sát nét chạm khắc trên bản khắc Mộc bản gốc, liên hệ ngữ cảnh thời gian và thiết chế văn hóa tương ứng.]
                  </p>
                  <button
                    type="button"
                    onClick={() => dispatch({ type: "RETRY_QUESTION" })}
                    className="px-4 py-1.5 rounded-lg bg-amber-200 hover:bg-amber-300 text-amber-900 text-xs font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-800"
                  >
                    Quay lại câu hỏi
                  </button>
                </div>
              )}

              {/* Success Banner when Unlocked */}
              {state.uiState === "unlocked" && (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 mb-6 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                      <Unlock size={20} />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold">Giải mã thành công!</h5>
                      <p className="text-xs text-emerald-700">Hình tượng hoa văn di sản đã sẵn sàng để phác họa.</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => dispatch({ type: "PROCEED_TO_PATTERN" })}
                    className="px-4 py-2 rounded-xl bg-emerald-700 text-white text-xs font-bold hover:bg-emerald-800 transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
                  >
                    <span>Sang Bước 3: Thiết kế</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
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
                  Quan sát hoa văn di sản vừa mở khóa, phân tích cấu trúc đường nét và tự phác họa mẫu lên giấy hoặc ván gỗ.
                </p>
              </div>

              {/* Pattern Data Status Notification */}
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 mb-8 flex items-start gap-4">
                <Palette size={22} className="text-emerald-700 flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm leading-relaxed">
                  <strong className="font-bold block mb-1">
                    Danh mục Hoa văn: 30 Mẫu con dấu Mộc bản chính thức (Verified 30 Patterns)
                  </strong>
                  Đã tải 30 mẫu hoa văn con dấu mộc bản (5x5cm) trích xuất nguyên bản từ tệp <em>Họa tiết bộ kit.pdf</em> và <em>Mẫu tấm in.pdf</em> của bộ Kit Bật Mã Cổ Thư.
                </div>
              </div>

              {/* Pattern Showcase Workspace Skeleton */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Cột trái: Khung quan sát hoa văn mở khóa */}
                <div className="p-6 rounded-3xl bg-white border border-[#E0D9CF] shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[0.6875rem] font-bold uppercase tracking-widest text-[#7C5C2E]">
                        Mẫu hoa văn con dấu
                      </span>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#C8860A]/15 text-[#7C5C2E] border border-[#C8860A]/30">
                        {activePattern?.id || "PAT-01"} • 5x5 cm
                      </span>
                    </div>
                    <h5 className="font-bold text-[#1C2B3A] text-lg mb-4">
                      {activePattern?.title || "Hoa văn Mộc bản"}
                    </h5>
                    <div className="aspect-square rounded-2xl bg-[#FAFAF7] border border-[#E0D9CF] flex flex-col items-center justify-center p-6 text-center text-[#7B8A95] relative overflow-hidden">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-[#E0D9CF] flex items-center justify-center text-[#7C5C2E] mb-3 shadow-sm">
                        <Layers size={28} />
                      </div>
                      <span className="text-sm font-bold text-[#1C2B3A]">
                        {activePattern?.title}
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

                {/* Cột phải: Không gian phác họa nét vẽ (Design workspace) */}
                <div className="p-6 rounded-3xl bg-white border border-[#E0D9CF] shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-[0.6875rem] font-bold uppercase tracking-widest text-[#1E4976] block mb-2">
                      Khu vực phác họa thực hành
                    </span>
                    <h5 className="font-bold text-[#1C2B3A] text-lg mb-4">
                      Tái tạo đường nét trên phôi gỗ
                    </h5>
                    <div className="aspect-square rounded-2xl bg-[#F5F0E8] border border-[#E0D9CF] flex flex-col items-center justify-center p-6 text-center text-[#7C5C2E] relative overflow-hidden pattern-heritage opacity-60">
                      <div className="relative z-10">
                        <Palette size={32} className="mx-auto mb-2 text-[#7C5C2E]" />
                        <span className="text-sm font-bold block text-[#1C2B3A]">
                          Bản can nét ngược (Tracing)
                        </span>
                        <span className="text-[0.6875rem] text-[#556070] block mt-1">
                          Chuẩn bị áp giấy bản phác thảo mẫu con dấu lên phôi gỗ 5x5cm
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#E0D9CF]/60 text-xs text-[#556070]">
                    Kỹ thuật: Hoa văn Mộc bản phải được phác họa <strong>ngược chiều (mirror)</strong> để khi in dập ra giấy sẽ đạt chiều xuôi chuẩn xác.
                  </div>
                </div>
              </div>

              {/* 30 Official Patterns Grid Selector */}
              <div className="p-6 rounded-3xl bg-white border border-[#E0D9CF] shadow-sm mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-[#E0D9CF]">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1C2B3A] block">
                      30 Mẫu hoa văn con dấu Mộc bản (Bộ Kit chính thức)
                    </span>
                    <span className="text-[11px] text-[#7B8A95]">
                      Nhấp để chọn mẫu hoa văn chuyển sang bước khắc gỗ và in sản phẩm
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#1E4976]/10 text-[#1E4976]">
                    Đang chọn: <strong>{activePattern?.title}</strong>
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 max-h-56 overflow-y-auto p-1.5 bg-[#FAFAF7] rounded-2xl border border-[#E0D9CF]">
                  {defaultPatterns.map((pat) => {
                    const isSelected = (state.selectedPatternId || defaultPatterns[0]?.id) === pat.id;
                    return (
                      <button
                        key={pat.id}
                        type="button"
                        onClick={() => dispatch({ type: "SELECT_PATTERN", patternId: pat.id })}
                        className={`p-2.5 rounded-xl text-left transition-all text-xs border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4976] ${
                          isSelected
                            ? "bg-[#1E4976] text-white border-[#1E4976] shadow-sm font-bold"
                            : "bg-white text-[#1C2B3A] border-[#E0D9CF] hover:border-[#C8860A] hover:bg-amber-50/30"
                        }`}
                      >
                        <div className="font-mono text-[10px] text-[#C8860A] font-bold">{pat.id}</div>
                        <div className="truncate text-xs">{pat.title}</div>
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

              {/* Notice Quy trình sư phạm đang chờ thẩm định */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-900 mb-6 text-xs sm:text-sm flex items-start gap-3">
                <Info size={20} className="text-amber-700 flex-shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong className="font-bold block mb-0.5">Trạng thái Quy trình: Chờ thẩm định sư phạm (Pending Official Procedure)</strong>
                  Các bước kỹ thuật thủ công dưới đây đóng vai trò khung mô phỏng trực quan. Quy chuẩn thao tác chi tiết sẽ được cập nhật đồng bộ theo cẩm nang thực hành chính thức của Đề tài T.26.XH.503.15.
                </div>
              </div>

              {/* 4 Thao tác đục khắc chuẩn hóa (Neutral Pedagogical Stages) */}
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
                    desc: "Quan sát và phân biệt các đường nét đồ họa chính - phụ cần giữ lại trên bản khắc nổi (dương bản).",
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
                  <span className="text-[#1C2B3A]">Tiến độ mô phỏng hoàn thành bản khắc</span>
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
                  Lăn mực đều lên ván khắc gỗ vừa hoàn thành, dập in lên túi vải canvas hoặc giấy dó mỹ thuật.
                </p>
              </div>

              {/* Inking & Pressing Stage Walkthrough (Neutral Pedagogical Stages) */}
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <div className="p-5 rounded-2xl bg-white border border-[#E0D9CF] shadow-sm text-center">
                  <div className="w-10 h-10 rounded-xl bg-[#1E4976]/10 text-[#1E4976] flex items-center justify-center mx-auto mb-3 font-bold text-xs">
                    01
                  </div>
                  <h6 className="font-bold text-sm text-[#1C2B3A] mb-1">Dàn đều mực in</h6>
                  <p className="text-xs text-[#556070]">Dùng con lăn chuyên dụng trong bộ kit dàn đều mực in chuyên dụng lên mặt ván nổi.</p>
                </div>
                <div className="p-5 rounded-2xl bg-white border border-[#E0D9CF] shadow-sm text-center">
                  <div className="w-10 h-10 rounded-xl bg-[#1E4976]/10 text-[#1E4976] flex items-center justify-center mx-auto mb-3 font-bold text-xs">
                    02
                  </div>
                  <h6 className="font-bold text-sm text-[#1C2B3A] mb-1">Căn chỉnh chất liệu in</h6>
                  <p className="text-xs text-[#556070]">Đặt túi vải canvas hoặc giấy dó mỹ thuật phẳng phiu lên trên bề mặt ván khắc.</p>
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
                  <div className="animate-fadeIn">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={36} />
                    </div>
                    <h5 className="text-xl font-bold text-[#1C2B3A] mb-2">
                      In dập thành công!
                    </h5>
                    <p className="text-sm text-[#556070] max-w-md mx-auto mb-6">
                      Sản phẩm in ấn thủ công mang dấu ấn cá nhân và hoa văn di sản Mộc bản đã hoàn thành hoàn hảo.
                    </p>
                    <button
                      type="button"
                      onClick={() => dispatch({ type: "COMPLETE_EXPERIENCE" })}
                      className="btn-academic !px-8 !py-3 text-sm inline-flex items-center gap-2 shadow-academic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4976] focus-visible:ring-offset-2"
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
                      Sẵn sàng in dập tác phẩm
                    </h5>
                    <p className="text-xs sm:text-sm text-[#556070] max-w-md mx-auto mb-6">
                      Nhấn nút bên dưới để mô phỏng thao tác dập mực và nghiệm thu sản phẩm cuối cùng.
                    </p>
                    <button
                      type="button"
                      onClick={() => dispatch({ type: "EXECUTE_PRINT" })}
                      className="px-8 py-3 rounded-xl bg-[#7C5C2E] hover:bg-[#A37840] text-white font-bold text-sm transition-colors shadow-sm inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C5C2E] focus-visible:ring-offset-2"
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
                Bạn đã trải qua trọn vẹn chuỗi học tập từ tiếp cận tri thức di sản, giải đố suy luận,
                định hình nét vẽ, đục khắc ván gỗ đến tự tay in sản phẩm mang đậm dấu ấn cá nhân.
              </p>

              {/* 5-Step Completion Summary Checklist */}
              <div className="p-6 rounded-3xl bg-white border border-[#E0D9CF] shadow-sm mb-8 text-left space-y-3">
                {BAT_MA_STEPS.map((step) => (
                  <div key={step.step} className="flex items-center gap-3 text-xs sm:text-sm text-[#1C2B3A] font-medium">
                    <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" />
                    <span className="font-bold text-[#1E4976] w-14">Bước {step.step}:</span>
                    <span className="flex-1 text-[#556070]">{step.action}</span>
                  </div>
                ))}
              </div>

              {/* Future Certificate Slot Placeholder (Gated & Neutral) */}
              <div className="p-5 rounded-2xl bg-[#FAFAF7] border border-dashed border-[#E0D9CF] mb-8 text-xs text-[#7B8A95] leading-relaxed">
                <div className="font-bold text-[#1C2B3A] mb-1 flex items-center justify-center gap-2">
                  <Award size={16} className="text-[#C8860A]" />
                  <span>Khung lưu giữ thành tích trải nghiệm (Pending Requirement)</span>
                </div>
                <span>
                  Phôi Giấy Chứng nhận / Thẻ vinh danh chính thức sẽ được cập nhật khi có quy chuẩn phê duyệt từ đơn vị chủ quản đề tài (Trường ĐH Sư phạm – ĐH Huế).
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => dispatch({ type: "RESET" })}
                  className="px-6 py-3.5 rounded-xl border-2 border-[#1E4976] text-[#1E4976] font-bold text-sm hover:bg-[#1E4976] hover:text-white transition-colors inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E4976] focus-visible:ring-offset-2"
                >
                  <RotateCcw size={16} />
                  <span>Trải nghiệm lại từ đầu</span>
                </button>
                <Link
                  href="/sang-tao"
                  className="btn-wood !px-8 !py-3.5 text-sm inline-flex items-center gap-2 shadow-academic focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8860A] focus-visible:ring-offset-2"
                >
                  <span>Khám phá Góc Sáng tạo Học sinh</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Inline fallback lightbulb icon if needed
function LightbulbIcon(props: { size?: number }) {
  return (
    <svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}
