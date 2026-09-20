import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ── Page Header ─────────────────────────────────── */}
      <div className="page-header pt-32 md:pt-40 pb-20 md:pb-28 flex-1 flex items-center">
        <div className="container-main text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#E8A820] mb-4">
            Mã lỗi 404 • Không tìm thấy tư liệu
          </p>
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-heading font-serif text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Trang không tồn tại
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal mb-10">
            Trang bạn đang tìm kiếm có thể đã được di chuyển, đổi tên hoặc tạm thời chưa phát hành trong phiên bản hiện tại. Quý độc giả vui lòng trở về trang chủ hoặc khám phá các không gian di sản khác.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-4">
            <CTAButton href="/" variant="primary" className="!px-7 !py-3.5 text-base shadow-academic">
              <Home size={18} className="mr-2" />
              <span>Về Trang chủ</span>
            </CTAButton>
            <CTAButton href="/mocban" variant="secondary" className="!px-7 !py-3.5 text-base !text-white !border-white/40 hover:!bg-white/10">
              <Compass size={18} className="mr-2" />
              <span>Khám phá Mộc bản</span>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}
