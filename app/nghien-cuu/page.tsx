import type { Metadata } from "next";
import SectionTitle from "@/components/ui/SectionTitle";
import CTAButton from "@/components/ui/CTAButton";
import { researchProject, publications, experimentStatus } from "@/data/research";
import {
  Users,
  Target,
  HelpCircle,
  Clock,
  School,
  FileText,
  Award,
  BookOpen,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Nghiên cứu khoa học — STEAM MOCBAN EDUCATION",
  description:
    "Đề tài nghiên cứu khoa học: Tích hợp giáo dục giá trị di sản Mộc bản triều Nguyễn trong dạy học và hoạt động giáo dục tại các trường THPT trên địa bàn TP. Huế (Mã số: T.26.XH.503.15).",
};

export default function NghienCuuPage() {
  return (
    <>
      {/* ── Page Header ─────────────────────────────────── */}
      <div className="page-header pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="container-main">
          <ScrollReveal delay={0}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#C8860A] text-xs font-bold uppercase tracking-wider mb-4">
              Nhiệm vụ NCKH cấp Trường • Mã số: {researchProject.taskCode}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white mb-4 max-w-5xl leading-[1.16] text-balance"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {researchProject.titleMain}
            </h1>
            <p className="text-white/80 text-base md:text-lg font-bold uppercase tracking-wider mb-6 text-[#E8A820]">
              {researchProject.titleSub}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-white/80 text-base md:text-lg max-w-4xl leading-relaxed font-normal">
              {researchProject.summary}
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Thông tin đề tài: Academic Editorial Layout ─── */}
      <section className="section-padding bg-[#FAFAF7]" id="gioi-thieu">
        <div className="container-main">
          <div className="grid lg:grid-cols-[1.55fr_1fr] gap-12 lg:gap-16 items-start">
            
            {/* Cột trái: Mục tiêu, Câu hỏi & Địa bàn — Academic Editorial Flow */}
            <div className="space-y-14">
              {/* Mục tiêu nghiên cứu */}
              <ScrollReveal delay={0.1}>
                <div className="pb-10 border-b border-[#E0D9CF]/50">
                  <div className="flex items-center gap-2.5 mb-5 pb-2.5 border-b border-[#E0D9CF]/40">
                    <Target size={22} className="text-[#C8860A]" />
                    <h2
                      className="text-2xl sm:text-3xl font-bold text-[#1C2B3A]"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Mục tiêu nghiên cứu
                    </h2>
                  </div>
                  <ul className="space-y-4">
                    {researchProject.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-3.5 text-[#556070] text-base leading-relaxed font-normal">
                        <span className="w-2 h-2 rounded-full bg-[#C8860A] mt-2 flex-shrink-0" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Câu hỏi nghiên cứu */}
              <ScrollReveal delay={0.15}>
                <div className="pb-10 border-b border-[#E0D9CF]/50">
                  <div className="flex items-center gap-2.5 mb-5 pb-2.5 border-b border-[#E0D9CF]/40">
                    <HelpCircle size={22} className="text-[#1E4976]" />
                    <h2
                      className="text-2xl sm:text-3xl font-bold text-[#1C2B3A]"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Câu hỏi nghiên cứu
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {researchProject.questions.map((q, i) => (
                      <div key={i} className="flex items-start gap-3.5 pb-3.5 border-b border-[#E0D9CF]/35 last:border-b-0">
                        <span
                          className="text-[#1E4976] font-bold text-lg flex-shrink-0 leading-tight"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          Q{i + 1}.
                        </span>
                        <p className="text-[#1C2B3A] font-medium text-base leading-relaxed">
                          {q}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Địa bàn thực nghiệm sư phạm */}
              <ScrollReveal delay={0.2}>
                <div>
                  <div className="flex items-center gap-2.5 mb-5 pb-2.5 border-b border-[#E0D9CF]/40">
                    <School size={22} className="text-[#7C5C2E]" />
                    <h2
                      className="text-2xl sm:text-3xl font-bold text-[#1C2B3A]"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Địa bàn thực nghiệm sư phạm
                    </h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {researchProject.experimentSchools.map((school, i) => (
                      <div key={i} className="p-5 rounded-xl bg-white border border-[#E0D9CF]/60 shadow-[0_2px_8px_rgba(28,43,58,0.02)]">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1E4976] mb-1.5 block">
                          Trường thực nghiệm #{i + 1}
                        </span>
                        <h3
                          className="text-lg font-bold text-[#1C2B3A] mb-1"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {school.name}
                        </h3>
                        <p className="text-xs text-[#7B8A95] mb-3">
                          {school.address}
                        </p>
                        <span className="inline-block text-[0.6875rem] font-semibold text-[#1E4976] bg-[#1E4976]/[0.07] px-2.5 py-1 rounded">
                          {school.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Cột phải: Cố vấn & Nhóm thực hiện — Clean Faculty Column */}
            <ScrollReveal delay={0.2} direction="left">
              <div className="space-y-8 lg:sticky lg:top-28">
                {/* Cố vấn khoa học */}
                <div className="bg-white p-7 rounded-2xl border border-[#E0D9CF]/60 shadow-[0_2px_10px_rgba(28,43,58,0.03)]">
                  <div className="flex items-center gap-2 mb-4 pb-2.5 border-b border-[#E0D9CF]/40">
                    <Award size={18} className="text-[#C8860A]" />
                    <h3 className="text-base font-bold text-[#1C2B3A] uppercase tracking-wider">
                      Cố vấn khoa học
                    </h3>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#C8860A]/10 text-[#C8860A] flex items-center justify-center font-bold text-sm flex-shrink-0">
                      TS
                    </div>
                    <div>
                      <h4
                        className="text-base font-bold text-[#1C2B3A]"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {researchProject.advisor.name}
                      </h4>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#7C5C2E] mb-1">
                        {researchProject.advisor.title}
                      </p>
                      <p className="text-xs text-[#556070] leading-relaxed">
                        {researchProject.advisor.role}
                      </p>
                      <p className="text-xs text-[#7B8A95] mt-1">
                        {researchProject.advisor.org}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Nhóm sinh viên thực hiện */}
                <div className="bg-white p-7 rounded-2xl border border-[#E0D9CF]/60 shadow-[0_2px_10px_rgba(28,43,58,0.03)]">
                  <div className="flex items-center gap-2 mb-4 pb-2.5 border-b border-[#E0D9CF]/40">
                    <Users size={18} className="text-[#1E4976]" />
                    <h3 className="text-base font-bold text-[#1C2B3A] uppercase tracking-wider">
                      Nhóm sinh viên thực hiện
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {researchProject.members.map((mem, i) => (
                      <li key={i} className="flex items-start gap-3 pb-3 border-b border-[#E0D9CF]/30 last:border-b-0">
                        <span className="text-xs font-bold text-[#7B8A95] mt-0.5 w-4">
                          0{i + 1}.
                        </span>
                        <div>
                          <h4 className="text-sm font-bold text-[#1C2B3A]">{mem.name}</h4>
                          <span className="text-[0.6875rem] font-semibold text-[#7C5C2E]">
                            {mem.role}
                          </span>
                          <p className="text-xs text-[#7B8A95]">{mem.org}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── Trạng thái Thực nghiệm Sư phạm ── */}
      <section className="section-padding bg-[#163558] text-white relative overflow-hidden" id="khao-sat">
        <div className="absolute inset-0 pattern-heritage opacity-10 pointer-events-none" />
        <div className="container-main relative z-10">
          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl mb-10">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.22em] text-[#C8860A] mb-2.5">
                Thực nghiệm sư phạm
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Tiến độ Khảo sát & Thực nghiệm
              </h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed font-normal">
                Đề tài được tiến hành thực nghiệm nghiêm túc trên nhóm học sinh thực nghiệm và đối chứng tại 2 trường THPT trên địa bàn TP. Huế.
              </p>
            </div>
          </ScrollReveal>

          {/* Pending Experiment Status Box — Clean Single Surface */}
          <ScrollReveal delay={0.15} direction="up">
            <div className="p-7 sm:p-10 rounded-2xl bg-white/[0.07] border border-white/15 max-w-4xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#C8860A]/20 border border-[#C8860A]/35 flex items-center justify-center text-[#E8A820] flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#C8860A]/20 text-[#E8A820] text-xs font-bold uppercase tracking-wider mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8A820] animate-pulse" />
                    Đang tiến hành
                  </div>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {experimentStatus.noticeTitle}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed font-normal">
                    {experimentStatus.noticeContent}
                  </p>
                </div>
              </div>

              <div className="pt-5 border-t border-white/10 grid sm:grid-cols-2 gap-5 text-sm">
                <div className="p-3.5 rounded-lg bg-white/[0.04]">
                  <div className="font-bold text-white text-xs mb-1">Phương pháp đo lường:</div>
                  <div className="text-white/70 text-xs leading-relaxed font-normal">
                    Khảo sát trước – sau trải nghiệm (Pre-test & Post-test), quan sát thái độ và đánh giá hồ sơ học tập/sản phẩm sáng tạo.
                  </div>
                </div>
                <div className="p-3.5 rounded-lg bg-white/[0.04]">
                  <div className="font-bold text-white text-xs mb-1">Báo cáo nghiệm thu:</div>
                  <div className="text-white/70 text-xs leading-relaxed font-normal">
                    Số liệu định lượng chính thức kèm biểu đồ phân tích thống kê SPSS/Excel sẽ được xuất bản công khai sau nghiệm thu đề tài.
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Công bố khoa học (2 ấn phẩm) ─────── */}
      <section className="section-padding bg-white" id="cong-bo">
        <div className="container-main">
          <ScrollReveal delay={0.1}>
            <SectionTitle
              eyebrow="Minh chứng học thuật"
              title="Công bố Khoa học & Báo cáo"
              description="Các ấn phẩm khoa học đã và đang công bố khẳng định nền tảng lý luận vững chắc của mô hình STEAM Mộc bản."
              className="max-w-3xl mb-14"
            />
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {publications.map((pub, i) => (
              <ScrollReveal key={i} delay={0.08 * (i + 1)} direction="up">
                <div className="p-7 sm:p-8 rounded-2xl bg-[#FAFAF7] border border-[#E0D9CF]/60 shadow-[0_2px_8px_rgba(28,43,58,0.02)] flex flex-col h-full">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider text-[#1E4976] bg-[#1E4976]/[0.07]">
                      {pub.type}
                    </span>
                    <span className="text-xs font-bold text-[#A37840]">
                      Năm {pub.year}
                    </span>
                  </div>

                  <h3
                    className="text-lg sm:text-xl font-bold text-[#1C2B3A] mb-3 leading-snug"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {pub.title}
                  </h3>
                  <p className="text-sm text-[#556070] leading-relaxed mb-6 flex-1 font-normal">
                    <span className="font-semibold text-[#1C2B3A]">Xuất bản tại: </span>
                    {pub.journal}
                  </p>

                  <div className="pt-4 border-t border-[#E0D9CF]/40 flex items-center justify-between text-xs font-bold text-[#1E4976]">
                    <span>Tài liệu lưu hành học thuật</span>
                    <FileText size={16} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Phiếu khảo sát trực tuyến ─────────────────────── */}
      <section id="form" className="py-20 bg-[#F5F0E8] text-center border-t border-[#E0D9CF]/50 relative overflow-hidden">
        <div className="container-main relative z-10 max-w-2xl">
          <ScrollReveal delay={0.1} direction="up">
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#1C2B3A] mb-3 leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Khảo sát & Đóng góp ý kiến
            </h2>
            <p className="text-[#556070] text-sm sm:text-base mb-8 leading-relaxed font-normal">
              Quý thầy cô và các bạn học sinh đã trải nghiệm các sản phẩm STEAM Mộc bản có thể điền vào phiếu khảo sát trực tuyến để đóng góp dữ liệu cho đề tài nghiên cứu.
            </p>
            <div className="bg-white border border-[#E0D9CF]/60 rounded-2xl p-8 shadow-xs flex flex-col items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#1E4976]/[0.08] text-[#1E4976] flex items-center justify-center mb-1">
                <BookOpen size={24} />
              </div>
              <h3
                className="text-lg font-bold text-[#1C2B3A]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Biểu mẫu khảo sát sư phạm trực tuyến
              </h3>
              <p className="text-xs text-[#7B8A95] max-w-md">
                Khu vực tích hợp biểu mẫu điện tử dành cho giáo viên và học sinh tham gia tiết dạy thực nghiệm.
              </p>
              <div className="mt-3">
                <CTAButton href="/lien-he" variant="primary" className="!px-7 !py-3 text-sm">
                  Liên hệ nhóm để nhận link khảo sát
                </CTAButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
