"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Play,
  Film,
  Sparkles,
  ExternalLink,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";

interface HeritageVideoPlayerProps {
  assetKey?: string;
  youtubeId?: string;
  videoUrl?: string;
  mediaSrc?: string;
  posterSrc: string;
  title: string;
  caption?: string;
  creditText?: string;
  aspectRatio?: "16/9" | "4/3" | "21/9";
  className?: string;
}

// ── Bảng ánh xạ video YouTube chính thức ─────────────────────────────────────
const YOUTUBE_MAPPINGS: Record<
  string,
  { id: string; url: string; duration: string; sourceBadge: string }
> = {
  "mocban-van-hoa-1": {
    id: "htDVbFpPAJw",
    url: "https://www.youtube.com/watch?v=htDVbFpPAJw",
    duration: "05:51",
    sourceBadge: "Trung tâm Lưu trữ Quốc gia I (LTQGI)",
  },
  "mocban-su-lieu-1": {
    id: "wyIDxPrlsS8",
    url: "https://www.youtube.com/watch?v=wyIDxPrlsS8",
    duration: "18:53",
    sourceBadge: "Mộc Bản Thanh Liễu",
  },
};

export default function HeritageVideoPlayer({
  assetKey,
  youtubeId: customYoutubeId,
  videoUrl: customVideoUrl,
  mediaSrc = "",
  posterSrc,
  title,
  caption,
  creditText,
  aspectRatio = "16/9",
  className = "",
}: HeritageVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Nhận diện YouTube ID từ props hoặc assetKey hoặc URL
  const mapping = assetKey ? YOUTUBE_MAPPINGS[assetKey] : undefined;
  const youtubeId =
    customYoutubeId ||
    mapping?.id ||
    (mediaSrc.includes("htDVbFpPAJw")
      ? "htDVbFpPAJw"
      : mediaSrc.includes("wyIDxPrlsS8")
      ? "wyIDxPrlsS8"
      : undefined);

  const videoUrl =
    customVideoUrl ||
    mapping?.url ||
    (youtubeId ? `https://www.youtube.com/watch?v=${youtubeId}` : undefined);

  const durationText = mapping?.duration || "Full HD";
  const sourceBadge = mapping?.sourceBadge;

  return (
    <figure className={`w-full ${className}`}>
      {/* ── Khung Video 16:9 Chuẩn Di Sản ─────────────────────────── */}
      <div
        className="relative w-full aspect-video rounded-2xl md:rounded-[1.25rem] overflow-hidden bg-[#0A1118] shadow-2xl border border-[#E0D9CF]/90 select-none group focus:outline-none"
        role="region"
        aria-label={`Video tư liệu di sản: ${title}`}
      >
        {isPlaying && youtubeId ? (
          /* ── Trình phát nhúng YouTube HD ────────────────────────── */
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={title}
            className="w-full h-full border-0 absolute inset-0 z-20"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          /* ── Khung Xem trước (Poster Preview with Imperial Play CTA) ── */
          <div
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 z-10 cursor-pointer group/poster"
          >
            {/* Ảnh bìa tư liệu siêu nét */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image
                src={posterSrc}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover/poster:scale-105"
              />
              {/* Lớp phủ điện ảnh cổ điển */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/50" />
              <div className="absolute inset-0 bg-[#163558]/20 mix-blend-multiply" />
            </div>

            {/* Thẻ huy hiệu trên cùng */}
            <div className="absolute top-3.5 sm:top-4 inset-x-3.5 sm:inset-x-5 z-20 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-black/75 backdrop-blur-md text-[#E8A820] border border-white/15 shadow-sm">
                  <Film size={12} className="text-[#E8A820]" />
                  <span>Phim Tư liệu Gốc</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/20">
                  YouTube 1080p
                </span>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono text-[#FDF5E4] border border-white/15">
                <span>⏱ {durationText}</span>
              </div>
            </div>

            {/* Nút Play lớn ở trung tâm */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4">
              <div className="relative group/play flex items-center justify-center">
                {/* Vòng hào quang nhấp nháy thu hút */}
                <span className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#C8860A]/40 animate-ping opacity-75" />
                <button
                  type="button"
                  aria-label={`Bấm để phát video tư liệu: ${title}`}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#E8A820] hover:bg-[#F2BA3B] text-[#163558] flex items-center justify-center shadow-[0_10px_35px_rgba(200,134,10,0.6)] border-2 border-white transition-all duration-300 group-hover/poster:scale-110 active:scale-95"
                >
                  <Play
                    size={32}
                    className="translate-x-0.5 text-[#163558] fill-[#163558]"
                  />
                </button>
              </div>

              <div className="mt-4 flex flex-col items-center gap-1 text-center">
                <span className="text-xs sm:text-sm font-bold text-white bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-md">
                  Nhấn để xem video chính thức
                </span>
                {sourceBadge && (
                  <span className="text-[11px] text-[#FDF5E4]/80 drop-shadow flex items-center gap-1 mt-0.5">
                    <ShieldCheck size={12} className="text-[#E8A820]" />
                    <span>Nguồn tư liệu: {sourceBadge}</span>
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Thông tin Thuyết minh & Nguồn Tư liệu Học thuật ─────────── */}
      <figcaption className="mt-3.5 p-4 sm:p-5 rounded-xl bg-white border border-[#E0D9CF]/70 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 mb-1.5">
          <h5
            className="text-base sm:text-lg font-bold text-[#1C2B3A] leading-snug flex items-center gap-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span>{title}</span>
            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
              Video Chính thức
            </span>
          </h5>
          {creditText && (
            <span className="text-[11px] text-[#7C5C2E] font-medium italic flex-shrink-0">
              {creditText}
            </span>
          )}
        </div>

        {caption && (
          <p className="text-xs sm:text-sm text-[#556070] leading-relaxed mb-3.5">
            {caption}
          </p>
        )}

        {/* Thanh công cụ bổ trợ */}
        <div className="pt-3 border-t border-[#E0D9CF]/60 flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2 text-xs text-[#556070]">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#FAF6EE] text-[#163558] font-medium border border-[#E0D9CF]">
              <Sparkles size={12} className="text-[#C8860A]" />
              <span>Chất lượng: HD 1080p mượt mà</span>
            </span>
            <span className="hidden sm:inline text-[#7B8A95] font-mono">
              Thời lượng: {durationText}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {isPlaying && (
              <button
                type="button"
                onClick={() => setIsPlaying(false)}
                className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-[#556070] hover:text-[#1C2B3A] bg-[#FAFAF7] hover:bg-[#F3EDE2] rounded-lg border border-[#E0D9CF] transition-colors"
                title="Đóng trình phát để xem ảnh bìa"
              >
                <RotateCcw size={12} />
                <span>Xem lại bìa</span>
              </button>
            )}

            {videoUrl && (
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-[#163558] hover:bg-[#204772] rounded-lg shadow-xs transition-colors"
              >
                <span>Xem trên YouTube</span>
                <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
