"use client";

import React, { useRef, useState, useEffect, useCallback, useMemo } from "react";
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
  CheckCircle2,
} from "lucide-react";

export type MotionType =
  | "pan-right-to-left"
  | "zoom-in"
  | "macro-focus"
  | "pan-down"
  | "pan-left-to-right";

export interface StoryScene {
  start: number;
  end: number;
  tag: string;
  title: string;
  caption: string;
  src: string;
  badge?: string;
  motionType: MotionType;
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
  scenes?: StoryScene[];
}

// ── Kho cốt truyện phân cảnh & đồng bộ hóa theo lời thuyết minh di sản ────────
const HERITAGE_STORY_PRESETS: Record<string, StoryScene[]> = {
  // ── 1. Video Văn hóa: "Thiết đại triều nghi dưới triều Nguyễn" (351 giây = 5:51)
  "mocban-van-hoa-1": [
    {
      start: 0,
      end: 50,
      tag: "Cảnh 1",
      title: "Không gian Hoàng thành Huế & Cung điện Thái Hòa",
      caption: "Kinh thành Huế và Điện Thái Hòa — Nơi cử hành nghi lễ thiết đại triều trang nghiêm bậc nhất vương triều",
      src: "/assets/motion/motion-citadel.webp",
      badge: "MỞ ĐẦU HOÀNG TRIỀU",
      motionType: "zoom-in",
    },
    {
      start: 50,
      end: 110,
      tag: "Cảnh 2",
      title: "Thiết chế cung đình & Điển lệ ghi trên Mộc bản",
      caption: "Mộc bản Đại Nam Thực Lục ghi chép điển chế, phẩm trật và lễ nghi cung đình thời Nguyễn",
      src: "/assets/motion/motion-book.webp",
      badge: "ĐIỂN CHẾ MỘC BẢN",
      motionType: "pan-right-to-left",
    },
    {
      start: 110,
      end: 170,
      tag: "Cảnh 3",
      title: "Phẩm phục, thứ bậc & Họa tiết Kỳ Lân hoàng gia",
      caption: "Họa tiết Kỳ Lân và hoa văn hoàng gia — Biểu trưng quyền uy và tôn ti trật tự thời Nguyễn",
      src: "/assets/motion/motion-kylan.webp",
      badge: "HOA VĂN VƯƠNG TRIỀU",
      motionType: "macro-focus",
    },
    {
      start: 170,
      end: 240,
      tag: "Cảnh 4",
      title: "Nghi thức Đại triều tại Sân Điện Thái Hòa",
      caption: "Hàng bia đá Phẩm trật và vị trí đứng của văn võ bá quan trên sân Đại triều",
      src: "/assets/mocban/mocban-header-citadel.webp",
      badge: "NGHI THỨC ĐẠI TRIỀU",
      motionType: "pan-left-to-right",
    },
    {
      start: 240,
      end: 300,
      tag: "Cảnh 5",
      title: "Kho tàng lưu trữ Mộc bản Quốc Sử Quán",
      caption: "Tấm Mộc bản triều Nguyễn ghi chép chuẩn mực lễ nghi, lưu trữ qua hàng trăm năm",
      src: "/assets/motion/motion-archive.webp",
      badge: "KHO LƯU TRỮ QUỐC SỬ",
      motionType: "pan-down",
    },
    {
      start: 300,
      end: 351,
      tag: "Cảnh 6",
      title: "Giá trị trường tồn của Di sản Thế giới",
      caption: "Bảo tồn giá trị điển chế cung đình và văn hiến Mộc bản trong dòng chảy lịch sử",
      src: "/assets/homepage/cta-mocban-archive.webp",
      badge: "DI SẢN TRƯỜNG TỒN",
      motionType: "zoom-in",
    },
  ],

  // ── 2. Video Sử liệu: "Nghệ thuật San khắc Mộc bản Thanh Liễu" (1133 giây = 18:53)
  "mocban-su-lieu-1": [
    {
      start: 0,
      end: 180,
      tag: "Cảnh 1",
      title: "Hồn làng nghề San khắc Thanh Liễu cổ truyền",
      caption: "Làng nghề Thanh Liễu cổ truyền bên dòng sông Hương — Cái nôi của nghệ thuật san khắc Mộc bản",
      src: "/assets/mocban/mocban-unesco-hands.webp",
      badge: "LÀNG NGHỀ CỔ TRUYỀN",
      motionType: "zoom-in",
    },
    {
      start: 180,
      end: 345,
      tag: "Cảnh 2",
      title: "Bí quyết chọn gỗ thị dẻo dai & Xử lý ván",
      caption: "Gỗ thị thớ mịn không nứt vỡ, được cưa xẻ, mài phẳng và ngâm nước vôi chống mối mọt",
      src: "/assets/motion/motion-practice.webp",
      badge: "CHỌN GỖ & XỬ LÝ VÁN",
      motionType: "macro-focus",
    },
    {
      start: 345,
      end: 510,
      tag: "Cảnh 3",
      title: "Kỹ thuật viết chữ Hán Nôm ngược (Thảo tự)",
      caption: "Bút lông chấm mực nho viết chữ Hán Nôm ngược tinh xảo trên giấy bản mỏng dán úp lên mặt ván",
      src: "/assets/motion/motion-brush.webp",
      badge: "THẢO TỰ CHỮ NGƯỢC",
      motionType: "pan-right-to-left",
    },
    {
      start: 510,
      end: 720,
      tag: "Cảnh 4",
      title: "Kỹ pháp dao trổ điêu luyện của nghệ nhân",
      caption: "Bàn tay nghệ nhân điêu luyện dùng dao phạt, dao tỉa tách thớ gỗ quanh từng nét chữ",
      src: "/assets/motion/motion-hands.webp",
      badge: "KỸ PHÁP DAO TRỔ",
      motionType: "macro-focus",
    },
    {
      start: 720,
      end: 920,
      tag: "Cảnh 5",
      title: "Mộc bản hoàn thiện với nét chữ khắc nổi ngược",
      caption: "Tấm ván in hoàn thiện với từng đường khắc chữ Hán Nôm nổi khối sắc nét tuyệt đối",
      src: "/assets/motion/motion-daohoc.webp",
      badge: "VÁN KHẮC HOÀN THIỆN",
      motionType: "pan-right-to-left",
    },
    {
      start: 920,
      end: 1030,
      tag: "Cảnh 6",
      title: "Kỹ thuật quét mực nho & In dập giấy dó",
      caption: "Lăn đều mực nho, áp giấy dó truyền thống và dùng xơ dừa vuốt nhẹ để thu thành phẩm",
      src: "/assets/motion/motion-kit.webp",
      badge: "IN DẬP GIẤY DÓ",
      motionType: "pan-left-to-right",
    },
    {
      start: 1030,
      end: 1133,
      tag: "Cảnh 7",
      title: "Bảo tồn di sản & Trao truyền cho thế hệ trẻ",
      caption: "Tiếp nối tinh hoa di sản san khắc Mộc bản trong giáo dục STEAM và đời sống hiện đại",
      src: "/assets/kit/bat-ma-co-thu-practice.webp",
      badge: "TRAO TRUYỀN DI SẢN",
      motionType: "zoom-in",
    },
  ],
};

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
  scenes: customScenes,
}: HeritageVideoPlayerProps) {
  const mediaRef = useRef<HTMLAudioElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hideControlsTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Nhận diện danh sách phân cảnh theo cốt truyện
  const detectedKey =
    assetKey ||
    (mediaSrc.includes("trieu-nghi")
      ? "mocban-van-hoa-1"
      : mediaSrc.includes("san-khac")
      ? "mocban-su-lieu-1"
      : "");

  const scenes: StoryScene[] = useMemo(() => {
    if (customScenes && customScenes.length > 0) return customScenes;
    if (detectedKey && HERITAGE_STORY_PRESETS[detectedKey]) {
      return HERITAGE_STORY_PRESETS[detectedKey];
    }
    return [
      {
        start: 0,
        end: 99999,
        tag: "Tư liệu",
        title: title,
        caption: caption || title,
        src: posterSrc,
        badge: "TƯ LIỆU DI SẢN",
        motionType: "zoom-in",
      },
    ];
  }, [customScenes, detectedKey, title, caption, posterSrc]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [showSubtitles, setShowSubtitles] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Xác định phân cảnh hiện tại bám sát lời thuyết minh
  const activeSceneIndex = useMemo(() => {
    const idx = scenes.findIndex(
      (s) => currentTime >= s.start && currentTime < s.end
    );
    return idx !== -1 ? idx : 0;
  }, [scenes, currentTime]);

  const currentScene = scenes[activeSceneIndex] || scenes[0];

  // Kích hoạt hiệu ứng lóe sáng vàng nhẹ khi chuyển cảnh
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 800);
    return () => clearTimeout(timer);
  }, [activeSceneIndex]);

  // Format time (mm:ss)
  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

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

  // Nhảy trực tiếp đến một phân cảnh cốt truyện
  const jumpToScene = (sceneIndex: number) => {
    const targetScene = scenes[sceneIndex];
    if (!targetScene || !mediaRef.current) return;
    mediaRef.current.currentTime = targetScene.start;
    setCurrentTime(targetScene.start);
    if (!isPlaying) {
      mediaRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
    resetHideTimer();
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
      {/* ── CSS Animations for Visual Storytelling Motion ───────────── */}
      <style jsx>{`
        /* 1. Lia theo chiều đọc chữ Hán Nôm cổ (Phải sang Trái) */
        @keyframes motion-pan-rtl {
          0% {
            transform: scale(1.08) translate(3%, 0%);
          }
          50% {
            transform: scale(1.12) translate(0%, -1.5%);
          }
          100% {
            transform: scale(1.08) translate(-3%, 0%);
          }
        }

        /* 2. Dẫn dắt không gian hoàng cung tráng lệ (Zoom-in) */
        @keyframes motion-zoom-in {
          0% {
            transform: scale(1.02) translate(0%, 0%);
          }
          50% {
            transform: scale(1.10) translate(0%, -2%);
          }
          100% {
            transform: scale(1.14) translate(0%, -3%);
          }
        }

        /* 3. Cận cảnh tập trung mũi dao và ngón tay nghệ nhân (Macro Focus) */
        @keyframes motion-macro-focus {
          0% {
            transform: scale(1.06) translate(-1%, -1%);
          }
          50% {
            transform: scale(1.15) translate(1%, 1%);
          }
          100% {
            transform: scale(1.06) translate(-1%, -1%);
          }
        }

        /* 4. Khám phá kiến trúc bề thế từ trên xuống dưới */
        @keyframes motion-pan-down {
          0% {
            transform: scale(1.08) translate(0%, -2.5%);
          }
          50% {
            transform: scale(1.11) translate(0%, 0%);
          }
          100% {
            transform: scale(1.08) translate(0%, 2.5%);
          }
        }

        /* 5. Chuyển dịch tiến trình câu chuyện (Trái sang Phải) */
        @keyframes motion-pan-ltr {
          0% {
            transform: scale(1.08) translate(-3%, 0%);
          }
          50% {
            transform: scale(1.12) translate(0%, 1.5%);
          }
          100% {
            transform: scale(1.08) translate(3%, 0%);
          }
        }

        /* 6. Bụi sáng di sản lơ lửng */
        @keyframes ember-float {
          0% {
            transform: translateY(110%) translateX(0px) scale(0.6);
            opacity: 0;
          }
          20% {
            opacity: 0.85;
          }
          80% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-20%) translateX(35px) scale(1.1);
            opacity: 0;
          }
        }

        /* 7. Luồng sáng vàng quét qua thớ gỗ */
        @keyframes light-sweep {
          0% {
            transform: translateX(-150%) skewX(-20deg);
            opacity: 0;
          }
          30% {
            opacity: 0.35;
          }
          60% {
            opacity: 0.35;
          }
          100% {
            transform: translateX(250%) skewX(-20deg);
            opacity: 0;
          }
        }

        @keyframes eq-pulse-1 {
          0%, 100% { height: 16%; }
          50% { height: 92%; }
        }
        @keyframes eq-pulse-2 {
          0%, 100% { height: 35%; }
          50% { height: 98%; }
        }
        @keyframes eq-pulse-3 {
          0%, 100% { height: 60%; }
          50% { height: 26%; }
        }
        @keyframes eq-pulse-4 {
          0%, 100% { height: 22%; }
          50% { height: 85%; }
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
        aria-label={`Trình phát phim tư liệu di sản: ${title}`}
      >
        {/* Hidden Audio Engine providing high-fidelity streaming */}
        <audio
          ref={mediaRef}
          preload="metadata"
          src={mediaSrc}
        />

        {/* ── Dynamic Storytelling Scene Stack ────────────────────── */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          {scenes.map((scene, idx) => {
            const isActive = idx === activeSceneIndex;

            // Map motionType to corresponding CSS keyframe animation
            const animName =
              scene.motionType === "pan-right-to-left"
                ? "motion-pan-rtl"
                : scene.motionType === "macro-focus"
                ? "motion-macro-focus"
                : scene.motionType === "pan-down"
                ? "motion-pan-down"
                : scene.motionType === "pan-left-to-right"
                ? "motion-pan-ltr"
                : "motion-zoom-in";

            return (
              <div
                key={scene.src + idx}
                className={`absolute inset-0 transition-opacity duration-1200 ease-in-out ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Image
                  src={scene.src}
                  alt={scene.caption || scene.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"
                  priority={idx === 0}
                  unoptimized={scene.src.endsWith(".webp") && scene.src.includes("/motion/")}
                  className="object-cover will-change-transform"
                  style={{
                    animation: isPlaying
                      ? `${animName} ${12 + (idx % 3) * 2}s infinite ease-in-out`
                      : "none",
                  }}
                />
              </div>
            );
          })}

          {/* ── Soft Golden Dissolve Flash on Scene Change ─────────── */}
          <div
            className={`absolute inset-0 z-11 pointer-events-none bg-gradient-to-tr from-[#C8860A]/20 via-[#E8A820]/15 to-transparent transition-opacity duration-700 ${
              isTransitioning ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* ── Dynamic Light Sweep Beam across Woodblock Surface ── */}
          {isPlaying && (
            <div
              className="absolute inset-y-0 w-48 bg-gradient-to-r from-transparent via-[#FFD77A]/20 to-transparent pointer-events-none z-12"
              style={{
                animation: "light-sweep 6s infinite ease-in-out",
              }}
            />
          )}

          {/* ── Atmospheric Floating Golden Heritage Embers ────────── */}
          {isPlaying && (
            <div className="absolute inset-0 z-13 pointer-events-none overflow-hidden">
              {[
                { left: "12%", delay: "0s", dur: "7s", size: "w-1.5 h-1.5" },
                { left: "28%", delay: "1.8s", dur: "8.5s", size: "w-2 h-2" },
                { left: "44%", delay: "0.5s", dur: "6s", size: "w-1 h-1" },
                { left: "62%", delay: "3.2s", dur: "9s", size: "w-2 h-2" },
                { left: "78%", delay: "1.2s", dur: "7.5s", size: "w-1.5 h-1.5" },
                { left: "89%", delay: "2.4s", dur: "8s", size: "w-2.5 h-2.5" },
              ].map((p, i) => (
                <span
                  key={i}
                  className={`absolute bottom-0 rounded-full bg-gradient-to-t from-[#E8A820] to-[#FFF3D6] shadow-[0_0_8px_#E8A820] ${p.size}`}
                  style={{
                    left: p.left,
                    animation: `ember-float ${p.dur} infinite ease-out`,
                    animationDelay: p.delay,
                  }}
                />
              ))}
            </div>
          )}

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
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-black/75 backdrop-blur-md text-[#E8A820] border border-white/15 shadow-sm">
              <Film size={12} className="text-[#E8A820]" />
              <span>Phim Tư liệu Di sản</span>
            </span>

            {/* Phân cảnh cốt truyện hiện tại */}
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#C8860A]/40 backdrop-blur-md text-[#FDF5E4] border border-[#C8860A]/60">
              <Sparkles size={10} className="text-[#E8A820]" />
              <span>{currentScene.badge || currentScene.tag}</span>
            </span>

            <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/20">
              1080p HD
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Quick Scene Selector Dots */}
            {scenes.length > 1 && (
              <div className="hidden sm:flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-1 rounded-full border border-white/15">
                <Layers size={11} className="text-[#E8A820] mr-1" />
                {scenes.map((s, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      jumpToScene(i);
                    }}
                    aria-label={`Nhảy đến ${s.tag}: ${s.title}`}
                    title={`${s.tag}: ${s.title}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeSceneIndex
                        ? "w-4 bg-[#E8A820]"
                        : "w-2 bg-white/40 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            )}

            {isPlaying ? (
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md text-[11px] font-mono text-emerald-400 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold tracking-wide">ĐỒNG BỘ NỘI DUNG</span>
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-[10px] font-medium text-white/80 border border-white/10">
                <span>Di sản Mộc bản</span>
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
                Nhấn để phát phim tư liệu chuyển cảnh đồng bộ
              </span>
              <span className="text-[11px] text-white/75 drop-shadow flex items-center gap-1.5">
                <Sparkles size={11} className="text-[#E8A820]" />
                <span>Chuyển cảnh chuẩn xác theo từng mốc thuyết minh & hiệu ứng lia máy điện ảnh</span>
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
            <div className="inline-flex items-center gap-2 max-w-full sm:max-w-xl px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-black/85 backdrop-blur-md text-white border border-white/20 shadow-xl">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#E8A820] bg-[#C8860A]/30 px-2 py-0.5 rounded border border-[#C8860A]/40 flex-shrink-0">
                {currentScene.tag}
              </span>
              <span className="text-xs sm:text-sm font-medium text-white/95 truncate">
                {currentScene.title}
              </span>
            </div>
            {currentScene.caption && (
              <div className="mt-1 text-[11px] sm:text-xs text-white/85 font-normal drop-shadow-md text-center max-w-lg truncate px-2">
                🎬 {currentScene.caption}
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
              className="w-full h-1.5 sm:h-2 bg-white/25 rounded-full appearance-none cursor-pointer accent-[#E8A820] focus:outline-none transition-all z-10"
              style={{
                background: `linear-gradient(to right, #E8A820 ${progressPercent}%, rgba(255,255,255,0.25) ${progressPercent}%)`,
              }}
              aria-label="Thanh tiến trình phát video"
            />

            {/* Visual Scene Divider Ticks on Seek Bar */}
            {duration > 0 &&
              scenes.map((s, idx) => {
                if (idx === 0) return null;
                const pos = (s.start / duration) * 100;
                return (
                  <span
                    key={idx}
                    className="absolute top-0 bottom-0 w-0.5 bg-black/60 z-15 pointer-events-none"
                    style={{ left: `${pos}%` }}
                    title={`${s.tag}: ${s.title}`}
                  />
                );
              })}
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

      {/* ── Captions & Interactive Story Arc Navigation (Below Video Frame) ── */}
      <figcaption className="mt-3.5 p-4 sm:p-5 rounded-xl bg-white border border-[#E0D9CF]/70 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 mb-1.5">
          <h5
            className="text-base sm:text-lg font-bold text-[#1C2B3A] leading-snug flex items-center gap-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <span>{title}</span>
            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-100 text-[#7C5C2E] border border-amber-300">
              Chuyển cảnh Đồng bộ
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

        {/* ── Interactive Story Chapters / Visual Scenes Bar ───────── */}
        {scenes.length > 1 && (
          <div className="pt-3 border-t border-[#E0D9CF]/60">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-[#163558] uppercase tracking-wider flex items-center gap-1.5">
                <Layers size={13} className="text-[#C8860A]" />
                <span>Các phân cảnh kể chuyện lịch sử:</span>
              </span>
              <span className="text-[10px] text-[#7B8A95] font-medium">
                (Click vào cảnh để nhảy đến đúng thời điểm)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {scenes.map((s, idx) => {
                const isCurrent = idx === activeSceneIndex;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => jumpToScene(idx)}
                    className={`text-left p-2.5 rounded-xl transition-all border flex items-start gap-2.5 group ${
                      isCurrent
                        ? "bg-[#163558] text-white border-[#163558] shadow-sm"
                        : "bg-[#FAFAF7] hover:bg-[#F3EDE2] text-[#1C2B3A] border-[#E0D9CF]"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg overflow-hidden relative flex-shrink-0 border border-black/10">
                      <Image
                        src={s.src}
                        alt={s.title}
                        fill
                        sizes="40px"
                        unoptimized={s.src.endsWith(".webp") && s.src.includes("/motion/")}
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1 mb-0.5">
                        <span
                          className={`text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded ${
                            isCurrent
                              ? "bg-[#E8A820] text-[#163558]"
                              : "bg-[#163558]/10 text-[#163558]"
                          }`}
                        >
                          {s.tag}
                        </span>
                        <span
                          className={`text-[10px] font-mono ${
                            isCurrent ? "text-white/80" : "text-[#7B8A95]"
                          }`}
                        >
                          {formatTime(s.start)}
                        </span>
                      </div>
                      <p
                        className={`text-xs font-semibold truncate leading-tight ${
                          isCurrent ? "text-white" : "text-[#1C2B3A] group-hover:text-[#163558]"
                        }`}
                      >
                        {s.title}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </figcaption>
    </figure>
  );
}
