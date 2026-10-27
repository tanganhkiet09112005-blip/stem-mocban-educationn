import Image from "next/image";
import { getMediaAsset } from "@/data/media";
import { Volume2 } from "lucide-react";

interface MediaPlaceholderProps {
  aspectRatio?: "16/9" | "4/3" | "1/1" | "21/9";
  assetKey: string;
  label?: string;
  className?: string;
  type?: "image" | "video" | "audio";
  showCaption?: boolean;
}

export default function MediaPlaceholder({
  aspectRatio,
  assetKey,
  label,
  className = "",
  type,
  showCaption = false,
}: MediaPlaceholderProps) {
  // Lấy siêu dữ liệu từ central registry nếu có
  const assetDef = getMediaAsset(assetKey);

  // Xử lý tư liệu âm thanh thuyết minh di sản (Audio Asset)
  if (assetDef?.audioSrc || assetDef?.mediaType === "audio") {
    return (
      <div
        className={`relative w-full rounded-2xl border border-[#E0D9CF] bg-gradient-to-br from-[#FAFAF7] via-[#FAF6EE] to-[#F3EDE2] p-6 sm:p-8 shadow-card flex flex-col justify-between overflow-hidden group ${className}`}
        data-asset-key={assetKey}
        role="region"
        aria-label={`Tư liệu âm thanh: ${assetDef.title}`}
      >
        <div className="absolute top-0 right-0 w-36 h-36 bg-[#C8860A]/5 rounded-bl-full pointer-events-none" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1E4976]/10 text-[#1E4976] border border-[#1E4976]/20">
              <Volume2 size={14} className="text-[#1E4976]" />
              <span>Tư liệu Thuyết minh Audio</span>
            </span>
            <span className="text-xs font-semibold text-[#A06E1A] bg-[#C8860A]/10 px-2.5 py-1 rounded-full border border-[#C8860A]/20">
              Di sản Mộc bản
            </span>
          </div>
          <h4
            className="text-lg sm:text-xl font-bold text-[#1C2B3A] mb-2 leading-snug"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {assetDef.title}
          </h4>
          <p className="text-sm text-[#556070] mb-5 leading-relaxed font-normal">
            {assetDef.captionText || assetDef.intendedPurpose}
          </p>
        </div>

        <div className="relative z-10 pt-4 border-t border-[#E0D9CF]/60">
          <audio controls className="w-full accent-[#1E4976] rounded-lg">
            <source src={assetDef.audioSrc || undefined} type="audio/mpeg" />
            Trình duyệt của bạn không hỗ trợ phát âm thanh trực tiếp.
          </audio>
          {assetDef.creditText && (
            <p className="text-xs text-[#7B8A95] mt-2.5 font-medium italic">
              {assetDef.creditText}
            </p>
          )}
        </div>
      </div>
    );
  }

  const effectiveRatio = aspectRatio ?? assetDef?.aspectRatio ?? "16/9";
  const effectiveType = type ?? assetDef?.mediaType ?? "image";
  const displayLabel = label ?? assetDef?.title ?? `[Vị trí tư liệu: ${assetKey}]`;
  const accessibleAlt = assetDef?.altText ?? displayLabel;

  const aspectClass = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "21/9": "aspect-[21/9]",
  }[effectiveRatio];

  // Category badge mapping
  const categoryLabel = {
    heritage: "Tư liệu Hiện vật Mộc bản",
    product: "Sản phẩm Giáo dục Thực nghiệm",
    student_creation: "Tác phẩm Sáng tạo Học sinh",
    learning_content: "Tư liệu Học tập GDPT 2018",
    research_evidence: "Minh chứng Nghiên cứu Sư phạm",
    decorative: "Đồ họa Minh họa Di sản",
  }[assetDef?.category ?? "heritage"];

  // Nếu trong tương lai có file ảnh thật được phê duyệt trong registry:
  if (assetDef?.src) {
    return (
      <figure
        className={`relative w-full ${aspectClass} rounded-2xl overflow-hidden shadow-sm border border-[#E0D9CF]/60 group ${className}`}
        data-asset-key={assetKey}
        role="figure"
        aria-label={accessibleAlt}
      >
        <Image
          src={assetDef.src}
          alt={accessibleAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`transition-transform duration-500 group-hover:scale-105 ${
            assetDef.responsiveBehavior.objectFit === "contain" ? "object-contain bg-[#FAFAF7]" : "object-cover"
          }`}
          priority={assetDef.priority === "P0"}
        />
        {(showCaption || assetDef.captionText) && (
          <figcaption className="absolute bottom-0 inset-x-0 p-3 bg-black/60 backdrop-blur-sm text-white text-xs font-medium">
            {assetDef.captionText}
          </figcaption>
        )}
      </figure>
    );
  }

  // Chế độ Khung chờ chuẩn hóa (Editorial Evidence Frame)
  return (
    <figure
      className={`relative w-full ${aspectClass} rounded-[1.25rem] border border-[#E0D9CF]/60 bg-gradient-to-br from-[#FAFAF7] via-[#F7F4EE] to-[#EFEAE1] overflow-hidden flex flex-col items-center justify-center p-6 sm:p-8 text-center shadow-[0_2px_12px_rgba(28,43,58,0.03)] group ${className}`}
      data-asset-key={assetKey}
      role="figure"
      aria-label={`Khung tư liệu: ${accessibleAlt}`}
    >
      {/* Editorial inner stroke frame */}
      <div className="absolute inset-2.5 sm:inset-3 border border-[#E0D9CF]/40 rounded-xl pointer-events-none z-10" aria-hidden="true" />
      
      {/* Heritage paper texture & pattern */}
      <div className="absolute inset-0 texture-paper opacity-30 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 pattern-heritage opacity-15 pointer-events-none" aria-hidden="true" />

      <div className="relative z-20 flex flex-col items-center max-w-sm px-2">
        {/* Icon slot */}
        <div className="w-12 h-12 rounded-xl bg-white/95 border border-[#E0D9CF]/60 flex items-center justify-center text-[#7C5C2E] shadow-sm mb-3 group-hover:scale-105 transition-transform duration-300">
          {effectiveType === "video" ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          )}
        </div>

        {/* Category Label */}
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#A37840] mb-1.5">
          {effectiveType === "video" ? "Tư liệu Video" : categoryLabel}
        </p>

        {/* Display Title */}
        <p className="text-sm sm:text-base font-bold text-[#1C2B3A] leading-snug">
          {displayLabel}
        </p>

        {/* Status indicator */}
        <span className="mt-2.5 text-[0.6875rem] font-medium text-[#7B8A95] bg-white/85 px-3 py-1 rounded-full border border-[#E0D9CF]/60 shadow-xs">
          Vị trí media chuẩn hóa • Sẵn sàng cập nhật ở Phase sau
        </span>
      </div>
    </figure>
  );
}
