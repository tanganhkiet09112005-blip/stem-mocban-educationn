"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Film,
  Sparkles,
} from "lucide-react";

interface HeritageVideoPlayerProps {
  mediaSrc: string; // File âm thanh hoặc video thực tế
  posterSrc: string; // Ảnh nền bìa video di sản
  title: string;
  caption?: string;
  creditText?: string;
  aspectRatio?: "16/9" | "4/3" | "21/9";
  className?: string;
}

export default function HeritageVideoPlayer({
  mediaSrc,
  posterSrc,
  title,
  caption,
  creditText,
  aspectRatio = "16/9",
  className = "",
}: HeritageVideoPlayerProps) {
  const mediaRef = useRef<HTMLAudioElement | HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);

  // Format time (mm:ss)
  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Toggle Play / Pause
  const togglePlay = () => {
    if (!mediaRef.current) return;
    if (isPlaying) {
      mediaRef.current.pause();
      setIsPlaying(false);
    } else {
      mediaRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
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

  // Toggle Mute
  const toggleMute = () => {
    if (!mediaRef.current) return;
    mediaRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
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

  // Time & duration listeners
  useEffect(() => {
    const el = mediaRef.current;
    if (!el) return;

    const onTimeUpdate = () => setCurrentTime(el.currentTime);
    const onLoadedMetadata = () => setDuration(el.duration);
    const onEnded = () => setIsPlaying(false);

    el.addEventListener("timeupdate", onTimeUpdate);
    el.addEventListener("loadedmetadata", onLoadedMetadata);
    el.addEventListener("ended", onEnded);

    return () => {
      el.removeEventListener("timeupdate", onTimeUpdate);
      el.removeEventListener("loadedmetadata", onLoadedMetadata);
      el.removeEventListener("ended", onEnded);
    };
  }, []);

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;

  return (
    <figure className={`w-full ${className}`}>
      {/* ── Main Video Screen Container ──────────────────────────── */}
      <div
        ref={containerRef}
        onMouseEnter={() => setControlsVisible(true)}
        onMouseLeave={() => isPlaying && setControlsVisible(false)}
        className="relative w-full aspect-video rounded-2xl md:rounded-[1.25rem] overflow-hidden bg-[#0F1923] shadow-card border border-[#E0D9CF]/70 select-none group"
      >
        {/* Hidden/Embedded Audio Engine providing pristine audio */}
        <audio ref={mediaRef as React.RefObject<HTMLAudioElement>} preload="metadata">
          <source src={mediaSrc} type="audio/mpeg" />
        </audio>

        {/* Video Poster Background with subtle pan on play */}
        <div className="absolute inset-0 z-0">
          <Image
            src={posterSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
            className={`object-cover transition-transform duration-1000 ${
              isPlaying ? "scale-105" : "scale-100"
            }`}
          />
          {/* Cinematic lighting gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/45" />
          <div className="absolute inset-0 bg-[#163558]/25 mix-blend-multiply" />
        </div>

        {/* Top Header Badge */}
        <div className="absolute top-3.5 sm:top-4 inset-x-3.5 sm:inset-x-5 z-20 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-black/60 backdrop-blur-md text-[#E8A820] border border-white/15 shadow-sm">
              <Film size={12} className="text-[#E8A820]" />
              <span>Tư liệu Video Di sản</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/20">
              HD 1080p
            </span>
          </div>

          {isPlaying && (
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-[11px] font-mono text-emerald-400 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Đang phát</span>
            </div>
          )}
        </div>

        {/* Center Play / Pause Big Button Overlay */}
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Tạm dừng video" : "Phát video tư liệu"}
          className={`absolute inset-0 z-20 flex flex-col items-center justify-center transition-opacity duration-300 ${
            isPlaying && !controlsVisible ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="relative group/play flex items-center justify-center">
            {/* Pulsing ring aura */}
            {!isPlaying && (
              <span className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#C8860A]/30 animate-ping opacity-75" />
            )}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 hover:bg-white text-[#163558] flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.5)] border-2 border-white/80 transition-transform duration-200 group-hover/play:scale-110">
              {isPlaying ? (
                <Pause size={28} className="text-[#163558]" />
              ) : (
                <Play size={32} className="translate-x-0.5 text-[#163558] fill-[#163558]" />
              )}
            </div>
          </div>

          {!isPlaying && (
            <span className="mt-3.5 text-xs sm:text-sm font-bold text-white bg-black/60 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/20 shadow-sm">
              Nhấn để phát video tư liệu
            </span>
          )}
        </button>

        {/* Live Audio Equalizer Wave Effect (Displays when playing) */}
        {isPlaying && (
          <div className="absolute inset-x-6 bottom-16 sm:bottom-20 z-10 flex items-end justify-center gap-1 sm:gap-1.5 h-10 pointer-events-none opacity-80">
            {[35, 65, 45, 90, 75, 40, 85, 95, 60, 45, 70, 85, 55, 30, 80, 65, 40, 75].map(
              (h, i) => (
                <span
                  key={i}
                  className="w-1 sm:w-1.5 bg-gradient-to-t from-[#E8A820] to-[#FAFAF7] rounded-full animate-pulse"
                  style={{
                    height: `${h}%`,
                    animationDuration: `${0.4 + (i % 5) * 0.15}s`,
                    animationDelay: `${(i % 4) * 0.1}s`,
                  }}
                />
              )
            )}
          </div>
        )}

        {/* ── Bottom Controls Bar (Glassmorphic) ────────────────────── */}
        <div
          className={`absolute bottom-0 inset-x-0 z-30 p-3 sm:p-4 bg-gradient-to-t from-black/95 via-black/75 to-transparent backdrop-blur-[2px] transition-opacity duration-300 ${
            controlsVisible || !isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Progress Seek Bar */}
          <div className="relative w-full mb-2 flex items-center group/slider">
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1.5 sm:h-2 bg-white/25 rounded-full appearance-none cursor-pointer accent-[#E8A820] focus:outline-none"
              style={{
                background: `linear-gradient(to right, #E8A820 ${progressPercent}%, rgba(255,255,255,0.25) ${progressPercent}%)`,
              }}
              aria-label="Thanh tiến trình phát"
            />
          </div>

          <div className="flex items-center justify-between text-white text-xs gap-3">
            {/* Left Controls: Play + Time */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={togglePlay}
                className="p-1.5 rounded-lg hover:bg-white/20 transition-colors text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label={isPlaying ? "Tạm dừng" : "Phát"}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} className="fill-white" />}
              </button>

              <span className="font-mono text-[11px] sm:text-xs text-white/90">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            {/* Right Controls: Volume + Fullscreen */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleMute}
                className="p-1.5 rounded-lg hover:bg-white/20 transition-colors text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label={isMuted ? "Bật âm thanh" : "Tắt tiếng"}
              >
                {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
              </button>

              <button
                type="button"
                onClick={toggleFullscreen}
                className="p-1.5 rounded-lg hover:bg-white/20 transition-colors text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label={isFullscreen ? "Thoát toàn màn hình" : "Toàn màn hình"}
              >
                {isFullscreen ? <Minimize size={17} /> : <Maximize size={17} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Captions & Academic Provenance (Below Video Frame) ─────── */}
      <figcaption className="mt-3.5 p-4 rounded-xl bg-white border border-[#E0D9CF]/70 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 mb-1">
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
          <p className="text-xs sm:text-sm text-[#556070] leading-relaxed">
            {caption}
          </p>
        )}
      </figcaption>
    </figure>
  );
}
