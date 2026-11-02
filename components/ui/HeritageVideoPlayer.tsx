"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Film,
  Sparkles,
  Subtitles,
  Layers,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export interface SlideItem {
  src: string;
  caption: string;
}

export interface ChapterItem {
  start: number;
  end: number;
  tag: string;
  title: string;
}

interface HeritageVideoPlayerProps {
  assetKey?: string;
  mediaSrc: string; // File âm thanh hoặc video thực tế
  posterSrc: string; // Ảnh nền bìa video di sản
  title: string;
  caption?: string;
  creditText?: string;
  aspectRatio?: "16/9" | "4/3" | "21/9";
  className?: string;
  slides?: SlideItem[];
  chapters?: ChapterItem[];
}

// ── Kho tư liệu hình ảnh và phân đoạn chương học thuật cho 2 tư liệu video ──
const HERITAGE_VIDEO_PRESETS: Record<
  string,
  { slides: SlideItem[]; chapters: ChapterItem[] }
> = {
  "mocban-van-hoa-1": {
    slides: [
      {
        src: "/assets/mocban/mocban-header-citadel.webp",
        caption: "Điện Thái Hòa & Hoàng Thành Huế — Nơi cử hành nghi thức thiết đại triều nghi",
      },
      {
        src: "/assets/mocban/mocban-book-1.webp",
        caption: "Mộc bản Đại Nam Thực Lục — Ghi chép điển chế, phẩm trật và lễ nghi cung đình",
      },
      {
        src: "/assets/mocban/mocban-van-hoa-kylan.webp",
        caption: "Họa tiết Kỳ Lân & Hoa văn hoàng gia — Biểu trưng quyền uy vương triều Nguyễn",
      },
      {
        src: "/assets/homepage/cta-mocban-archive.webp",
        caption: "Kho tàng lưu trữ Mộc bản Quốc Sử Quán — Ký ức văn hiến di sản nhân loại",
      },
      {
        src: "/assets/mocban/mocban-book-2.webp",
        caption: "Khâm Định Việt Sử Thông Giám Cương Mục — Điển lệ chính sử triều Nguyễn",
      },
    ],
    chapters: [
      {
        start: 0,
        end: 85,
        tag: "Chương I",
        title: "Thiết chế cung đình và quy định triều nghi triều Nguyễn",
      },
      {
        start: 85,
        end: 170,
        tag: "Chương II",
        title: "Quy định phẩm phục, thứ bậc và vị trí đứng của bá quan",
      },
      {
        start: 170,
        end: 255,
        tag: "Chương III",
        title: "Trình tự đại triều tại Điện Thái Hòa qua ghi chép Mộc bản",
      },
      {
        start: 255,
        end: 351,
        tag: "Chương IV",
        title: "Giá trị điển chế lịch sử lưu truyền trên Mộc bản Quốc Sử Quán",
      },
    ],
  },
  "mocban-su-lieu-1": {
    slides: [
      {
        src: "/assets/mocban/mocban-unesco-hands.webp",
        caption: "Bàn tay nghệ nhân san khắc — Tinh hoa làng nghề khắc ván in Thanh Liễu",
      },
      {
        src: "/assets/homepage/hero-woodblock-brush.webp",
        caption: "Bút lông và mực nho — Kỹ thuật quét mực thảo tự Hán Nôm lên mặt gỗ",
      },
      {
        src: "/assets/kit/bat-ma-co-thu-practice.webp",
        caption: "Bộ dao trổ chuyên dụng — Từng nhát đục tỉ mỉ tạo độ nổi sắc nét",
      },
      {
        src: "/assets/mocban/mocban-dao-hoc-1.webp",
        caption: "Bản khắc ván in nguyên bản — Nghệ thuật khắc ngược chữ Hán truyền đời",
      },
      {
        src: "/assets/kit/bat-ma-co-thu-kit.webp",
        caption: "Quy trình in dập thủ công — Giữ gìn di sản Mộc bản trong thời đại số",
      },
    ],
    chapters: [
      {
        start: 0,
        end: 225,
        tag: "Chương I",
        title: "Làng nghề san khắc Mộc bản Thanh Liễu cổ truyền",
      },
      {
        start: 225,
        end: 510,
        tag: "Chương II",
        title: "Kỹ thuật chọn gỗ thị, xử lý ván chống mối mọt qua trăm năm",
      },
      {
        start: 510,
        end: 825,
        tag: "Chương III",
        title: "Nghệ thuật viết chữ Hán Nôm ngược và kỹ pháp trổ nét đục",
      },
      {
        start: 825,
        end: 1133,
        tag: "Chương IV",
        title: "Bảo tồn giá trị văn hiến và di sản san khắc thủ công",
      },
    ],
  },
};

// 4 hiệu ứng Ken Burns luân phiên lia ống kính chuyển động điện ảnh
const KEN_BURNS_MOTIONS = [
  "scale-[1.14] translate-x-3 -translate-y-2",
  "scale-[1.10] -translate-x-3 translate-y-1",
  "scale-[1.16] -translate-x-2 -translate-y-3",
  "scale-[1.12] translate-x-2 translate-y-2",
];

const SPEED_OPTIONS = [1, 1.25, 1.5];

export default function HeritageVideoPlayer({
  assetKey,
  mediaSrc,
  posterSrc,
  title,
  caption,
  creditText,
  aspectRatio = "16/9",
  className = "",
  slides: customSlides,
  chapters: customChapters,
}: HeritageVideoPlayerProps) {
  const mediaRef = useRef<HTMLAudioElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hideControlsTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Nhận diện dữ liệu slides & chapters từ presets nếu không truyền custom
  const detectedKey =
    assetKey ||
    (mediaSrc.includes("trieu-nghi")
      ? "mocban-van-hoa-1"
      : mediaSrc.includes("san-khac")
      ? "mocban-su-lieu-1"
      : "");

  const preset = detectedKey ? HERITAGE_VIDEO_PRESETS[detectedKey] : undefined;

  const slides: SlideItem[] =
    customSlides ||
    preset?.slides || [
      { src: posterSrc, caption: title },
      { src: "/assets/mocban/mocban-header-citadel.webp", caption: "Di sản tư liệu Mộc bản triều Nguyễn" },
      { src: "/assets/mocban/mocban-unesco-hands.webp", caption: "Kỹ nghệ san khắc Mộc bản truyền thống" },
    ];

  const chapters: ChapterItem[] =
    customChapters ||
    preset?.chapters || [
      { start: 0, end: 99999, tag: "Tư liệu", title: title },
    ];

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [showSubtitles, setShowSubtitles] = useState(true);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Format time (mm:ss)
  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Xác định chương hiện tại dựa trên currentTime
  const currentChapter =
    chapters.find((c) => currentTime >= c.start && currentTime < c.end) ||
    chapters[0];

  // Tự động chuyển đổi slide ảnh tư liệu sau mỗi 7 giây khi đang phát
  useEffect(() => {
    if (!isPlaying || slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  // Quản lý ẩn/hiện thanh điều khiển khi đang phát
  const resetHideTimer = useCallback(() => {
    setControlsVisible(true);
    if (hideControlsTimerRef.current) {
      clearTimeout(hideControlsTimerRef.current);
    }
    if (isPlaying) {
      hideControlsTimerRef.current = setTimeout(() => {
        setControlsVisible(false);
      }, 3500);
    }
  }, [isPlaying]);

  const handleMouseMove = () => {
    resetHideTimer();
  };

  // Toggle Play / Pause
  const togglePlay = () => {
    if (!mediaRef.current) return;
    if (isPlaying) {
      mediaRef.current.pause();
      setIsPlaying(false);
      setControlsVisible(true);
    } else {
      mediaRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          resetHideTimer();
        })
        .catch(() => {});
    }
  };

  // Seek bar handler
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (mediaRef.current) {
      mediaRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  // Quick jump: -10s / +10s
  const handleJump = (delta: number) => {
    if (!mediaRef.current) return;
    const target = Math.min(Math.max(0, mediaRef.current.currentTime + delta), duration);
    mediaRef.current.currentTime = target;
    setCurrentTime(target);
    resetHideTimer();
  };

  // Toggle Mute
  const toggleMute = () => {
    if (!mediaRef.current) return;
    mediaRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Change Volume
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (mediaRef.current) {
      mediaRef.current.volume = val;
      mediaRef.current.muted = val === 0;
      setIsMuted(val === 0);
    }
  };

  // Cycle Playback Speed
  const cyclePlaybackRate = () => {
    const nextIdx = (SPEED_OPTIONS.indexOf(playbackRate) + 1) % SPEED_OPTIONS.length;
    const newRate = SPEED_OPTIONS[nextIdx];
    setPlaybackRate(newRate);
    if (mediaRef.current) {
      mediaRef.current.playbackRate = newRate;
    }
  };

  // Toggle Fullscreen
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  // Synchronize fullscreen state on external escape
  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  // Time & duration listeners
  useEffect(() => {
    const el = mediaRef.current;
    if (!el) return;

    const onTimeUpdate = () => setCurrentTime(el.currentTime);
    const onLoadedMetadata = () => {
      setDuration(el.duration);
      if (el.playbackRate !== playbackRate) {
        el.playbackRate = playbackRate;
      }
    };
    const onEnded = () => {
      setIsPlaying(false);
      setControlsVisible(true);
      setCurrentSlideIndex(0);
    };

    el.addEventListener("timeupdate", onTimeUpdate);
    el.addEventListener("loadedmetadata", onLoadedMetadata);
    el.addEventListener("ended", onEnded);

    return () => {
      el.removeEventListener("timeupdate", onTimeUpdate);
      el.removeEventListener("loadedmetadata", onLoadedMetadata);
      el.removeEventListener("ended", onEnded);
    };
  }, [playbackRate]);

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <figure className={`w-full ${className}`}>
      {/* ── CSS Keyframes for Soundwave and Pulse ───────────────────── */}
      <style jsx>{`
        @keyframes eq-pulse-1 {
          0%, 100% { height: 18%; }
          50% { height: 88%; }
        }
        @keyframes eq-pulse-2 {
          0%, 100% { height: 35%; }
          50% { height: 96%; }
        }
        @keyframes eq-pulse-3 {
          0%, 100% { height: 55%; }
          50% { height: 28%; }
        }
        @keyframes eq-pulse-4 {
          0%, 100% { height: 20%; }
          50% { height: 75%; }
        }
      `}</style>

      {/* ── Main Video Screen Container ──────────────────────────── */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchStart={resetHideTimer}
        className="relative w-full aspect-video rounded-2xl md:rounded-[1.25rem] overflow-hidden bg-[#0A1118] shadow-2xl border border-[#E0D9CF]/80 select-none group focus:outline-none"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === " " || e.key === "k") {
            e.preventDefault();
            togglePlay();
          } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            handleJump(-10);
          } else if (e.key === "ArrowRight") {
            e.preventDefault();
            handleJump(10);
          } else if (e.key === "f") {
            e.preventDefault();
            toggleFullscreen();
          } else if (e.key === "m") {
            e.preventDefault();
            toggleMute();
          }
        }}
        role="region"
        aria-label={`Trình phát video di sản: ${title}`}
      >
        {/* Hidden Audio Engine providing high-fidelity streaming */}
        <audio
          ref={mediaRef}
          preload="metadata"
          src={mediaSrc}
        />

        {/* ── Dynamic Multi-Scene Documentary Background Slideshow ── */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          {slides.map((slide, idx) => {
            const isActive = idx === currentSlideIndex;
            const motionClass =
              KEN_BURNS_MOTIONS[idx % KEN_BURNS_MOTIONS.length];

            return (
              <div
                key={slide.src + idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.caption || title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"
                  priority={idx === 0}
                  className={`object-cover transition-all duration-[7500ms] ease-out will-change-transform ${
                    isActive && isPlaying
                      ? motionClass
                      : "scale-100 translate-x-0 translate-y-0"
                  }`}
                />
              </div>
            );
          })}

          {/* Cinematic lighting gradients & antique patina */}
          <div className="absolute inset-0 z-15 bg-gradient-to-t from-black/90 via-black/35 to-black/55 pointer-events-none" />
          <div className="absolute inset-0 z-15 bg-radial-vignette from-transparent via-black/20 to-black/75 pointer-events-none" />
          <div className="absolute inset-0 z-15 bg-[#163558]/20 mix-blend-multiply pointer-events-none" />
        </div>

        {/* ── Top Header Bar ───────────────────────────────────────── */}
        <div
          className={`absolute top-3.5 sm:top-4 inset-x-3.5 sm:inset-x-5 z-30 flex items-center justify-between transition-opacity duration-300 ${
            controlsVisible || !isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-black/70 backdrop-blur-md text-[#E8A820] border border-white/15 shadow-sm">
              <Film size={12} className="text-[#E8A820]" />
              <span>Phim Tư liệu Di sản</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/20">
              1080p HD
            </span>
            {currentChapter && (
              <span className="hidden md:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#C8860A]/30 backdrop-blur-md text-[#FDF5E4] border border-[#C8860A]/40">
                {currentChapter.tag}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Quick slide thumbnail preview switcher */}
            {slides.length > 1 && (
              <div className="hidden sm:flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-1 rounded-full border border-white/15">
                <Layers size={11} className="text-[#E8A820] mr-1" />
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentSlideIndex(i);
                    }}
                    aria-label={`Chuyển đến cảnh tư liệu ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === currentSlideIndex
                        ? "w-4 bg-[#E8A820]"
                        : "w-2 bg-white/40 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            )}

            {isPlaying ? (
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono text-emerald-400 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold tracking-wide">ĐANG PHÁT</span>
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-[10px] font-medium text-white/80 border border-white/10">
                <span>Tư liệu chuẩn hóa</span>
              </div>
            )}
          </div>
        </div>

        {/* ── Center Play / Pause Large Button Overlay ────────────── */}
        <div
          onClick={togglePlay}
          className={`absolute inset-0 z-20 flex flex-col items-center justify-center cursor-pointer transition-opacity duration-300 ${
            isPlaying && !controlsVisible ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="relative group/play flex items-center justify-center">
            {/* Pulsing ring aura when paused */}
            {!isPlaying && (
              <span className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#C8860A]/40 animate-ping opacity-75" />
            )}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              aria-label={isPlaying ? "Tạm dừng video tư liệu" : "Phát video tư liệu di sản"}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 hover:bg-white text-[#163558] flex items-center justify-center shadow-[0_10px_35px_rgba(0,0,0,0.6)] border-2 border-white/80 transition-all duration-200 group-hover/play:scale-110 active:scale-95"
            >
              {isPlaying ? (
                <Pause size={28} className="text-[#163558]" />
              ) : (
                <Play size={32} className="translate-x-0.5 text-[#163558] fill-[#163558]" />
              )}
            </button>
          </div>

          {!isPlaying && (
            <div className="mt-4 flex flex-col items-center gap-1">
              <span className="text-xs sm:text-sm font-bold text-white bg-black/75 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-md">
                Nhấn để phát phim tư liệu di sản
              </span>
              <span className="text-[11px] text-white/70 drop-shadow">
                Âm thanh thuyết minh gốc & Hình ảnh tư liệu lịch sử
              </span>
            </div>
          )}
        </div>

        {/* ── Live Soundwave Equalizer (Visible when playing) ──────── */}
        {isPlaying && (
          <div className="absolute inset-x-0 bottom-24 sm:bottom-28 z-20 flex items-end justify-center gap-1 sm:gap-1.5 h-10 pointer-events-none px-6 opacity-85">
            {[
              "eq-pulse-1",
              "eq-pulse-2",
              "eq-pulse-3",
              "eq-pulse-4",
              "eq-pulse-2",
              "eq-pulse-1",
              "eq-pulse-3",
              "eq-pulse-4",
              "eq-pulse-2",
              "eq-pulse-1",
              "eq-pulse-4",
              "eq-pulse-3",
              "eq-pulse-2",
              "eq-pulse-1",
              "eq-pulse-3",
              "eq-pulse-2",
              "eq-pulse-4",
              "eq-pulse-1",
            ].map((anim, i) => (
              <span
                key={i}
                className="w-1 sm:w-1.5 bg-gradient-to-t from-[#E8A820] via-[#FDF5E4] to-white rounded-full"
                style={{
                  animation: `${anim} ${0.45 + (i % 6) * 0.12}s infinite ease-in-out`,
                  animationDelay: `${(i % 5) * 0.08}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* ── Subtitle & Dynamic Scene Caption Badge ────────────────── */}
        {showSubtitles && (
          <div
            className={`absolute bottom-16 sm:bottom-20 inset-x-4 z-25 flex flex-col items-center pointer-events-none transition-all duration-300 ${
              controlsVisible || isPlaying ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 max-w-full sm:max-w-xl px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-black/80 backdrop-blur-md text-white border border-white/20 shadow-xl">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#E8A820] bg-[#C8860A]/25 px-2 py-0.5 rounded border border-[#C8860A]/40 flex-shrink-0">
                {currentChapter.tag}
              </span>
              <span className="text-xs sm:text-sm font-medium text-white/95 truncate">
                {currentChapter.title}
              </span>
            </div>
            {slides[currentSlideIndex]?.caption && (
              <div className="mt-1 text-[11px] sm:text-xs text-white/80 font-normal drop-shadow-md text-center max-w-lg truncate px-2">
                📸 {slides[currentSlideIndex].caption}
              </div>
            )}
          </div>
        )}

        {/* ── Bottom Controls Bar (Glassmorphic) ────────────────────── */}
        <div
          className={`absolute bottom-0 inset-x-0 z-30 p-3 sm:p-4 bg-gradient-to-t from-black/95 via-black/80 to-transparent backdrop-blur-[3px] transition-opacity duration-300 ${
            controlsVisible || !isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Progress Seek Bar with Chapter Markers */}
          <div className="relative w-full mb-2.5 flex items-center group/slider">
            <input
              type="range"
              min={0}
              max={duration || 100}
              step={0.5}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1.5 sm:h-2 bg-white/25 rounded-full appearance-none cursor-pointer accent-[#E8A820] focus:outline-none transition-all"
              style={{
                background: `linear-gradient(to right, #E8A820 ${progressPercent}%, rgba(255,255,255,0.25) ${progressPercent}%)`,
              }}
              aria-label="Thanh tiến trình phát video"
            />
          </div>

          <div className="flex items-center justify-between text-white text-xs gap-2 sm:gap-4">
            {/* Left Controls: Play + Jump -10s / +10s + Time */}
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              <button
                type="button"
                onClick={togglePlay}
                className="p-1.5 rounded-lg hover:bg-white/20 transition-colors text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label={isPlaying ? "Tạm dừng" : "Phát"}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} className="fill-white" />}
              </button>

              <button
                type="button"
                onClick={() => handleJump(-10)}
                className="p-1.5 rounded-lg hover:bg-white/20 transition-colors text-white/90 hover:text-white"
                aria-label="Lùi lại 10 giây"
                title="Lùi 10s"
              >
                <RotateCcw size={16} />
              </button>

              <button
                type="button"
                onClick={() => handleJump(10)}
                className="p-1.5 rounded-lg hover:bg-white/20 transition-colors text-white/90 hover:text-white"
                aria-label="Tua nhanh 10 giây"
                title="Tua 10s"
              >
                <RotateCw size={16} />
              </button>

              <span className="font-mono text-[11px] sm:text-xs text-white/90 ml-1">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            {/* Right Controls: Subtitles + Speed + Volume + Fullscreen */}
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Toggle Subtitles */}
              <button
                type="button"
                onClick={() => setShowSubtitles(!showSubtitles)}
                className={`p-1.5 rounded-lg transition-colors text-xs font-bold ${
                  showSubtitles
                    ? "bg-[#E8A820]/30 text-[#E8A820] border border-[#E8A820]/50"
                    : "text-white/70 hover:bg-white/20 hover:text-white"
                }`}
                aria-label={showSubtitles ? "Tắt phụ đề" : "Bật phụ đề"}
                title="Phụ đề / Phân cảnh (CC)"
              >
                <Subtitles size={16} />
              </button>

              {/* Speed Selector */}
              <button
                type="button"
                onClick={cyclePlaybackRate}
                className="px-2 py-1 rounded-lg hover:bg-white/20 transition-colors text-[11px] font-bold text-white/90 font-mono"
                aria-label={`Tốc độ phát: ${playbackRate}x`}
                title="Tốc độ phát"
              >
                {playbackRate}x
              </button>

              {/* Volume Slider & Toggle */}
              <div className="hidden sm:flex items-center gap-1.5 group/vol">
                <button
                  type="button"
                  onClick={toggleMute}
                  className="p-1.5 rounded-lg hover:bg-white/20 transition-colors text-white"
                  aria-label={isMuted ? "Bật âm thanh" : "Tắt tiếng"}
                >
                  {isMuted || volume === 0 ? <VolumeX size={17} /> : <Volume2 size={17} />}
                </button>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-14 h-1.5 bg-white/30 rounded-full appearance-none cursor-pointer accent-[#E8A820]"
                  aria-label="Âm lượng"
                />
              </div>

              {/* Fullscreen Button */}
              <button
                type="button"
                onClick={toggleFullscreen}
                className="p-1.5 rounded-lg hover:bg-white/20 transition-colors text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label={isFullscreen ? "Thoát toàn màn hình" : "Toàn màn hình"}
                title="Toàn màn hình"
              >
                {isFullscreen ? <Minimize size={17} /> : <Maximize size={17} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Captions & Academic Provenance (Below Video Frame) ─────── */}
      <figcaption className="mt-3.5 p-4 sm:p-5 rounded-xl bg-white border border-[#E0D9CF]/70 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 mb-1.5">
          <h5
            className="text-base sm:text-lg font-bold text-[#1C2B3A] leading-snug"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {title}
          </h5>
          {creditText && (
            <span className="text-[11px] text-[#7C5C2E] font-medium italic flex-shrink-0">
              {creditText}
            </span>
          )}
        </div>
        {caption && (
          <p className="text-xs sm:text-sm text-[#556070] leading-relaxed mb-3">
            {caption}
          </p>
        )}

        {/* Chapter Quick Jump Tags */}
        {chapters.length > 1 && (
          <div className="pt-3 border-t border-[#E0D9CF]/60 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold text-[#163558] uppercase tracking-wider">
              Các chương nội dung:
            </span>
            {chapters.map((ch, idx) => {
              const isCurrent = currentTime >= ch.start && currentTime < ch.end;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    if (mediaRef.current) {
                      mediaRef.current.currentTime = ch.start;
                      setCurrentTime(ch.start);
                      if (!isPlaying) {
                        mediaRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
                      }
                    }
                  }}
                  className={`text-[11px] px-2.5 py-1 rounded-lg transition-all font-medium flex items-center gap-1 ${
                    isCurrent
                      ? "bg-[#163558] text-white shadow-xs"
                      : "bg-[#FAFAF7] hover:bg-[#F3EDE2] text-[#556070] border border-[#E0D9CF]"
                  }`}
                  aria-label={`Nhảy đến ${ch.tag}: ${ch.title}`}
                >
                  <span className="font-bold text-[#E8A820]">{ch.tag}:</span>
                  <span className="truncate max-w-[140px] sm:max-w-none">{ch.title}</span>
                </button>
              );
            })}
          </div>
        )}
      </figcaption>
    </figure>
  );
}
