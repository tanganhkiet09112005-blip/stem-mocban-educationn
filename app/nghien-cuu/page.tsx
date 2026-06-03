"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import ContentCard from "@/components/ui/ContentCard";
import CTAButton from "@/components/ui/CTAButton";
import { researchProject, publications, surveyData, researchResults } from "@/data/research";
import { Users, Target, HelpCircle, CheckCircle2, TrendingUp, BookText, GraduationCap, ArrowUpRight, BarChart3, FileCheck2 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// CountUp Component for Dashboard metrics
function CountUp({ end, suffix = "" }: { end: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);

  return <span>{count}{suffix}</span>;
}

export default function NghienCuuPage() {
  return (
    <>
      <div className="page-header pt-24 md:pt-32">
        <div className="container-main">
          <ScrollReveal delay={0}>
            <p className="text-[0.8125rem] font-bold uppercase tracking-[0.25em] text-[#A37840] mb-4">
              Đề tài khoa học
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1
              className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white mb-8 max-w-6xl leading-[1.1]"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {researchProject.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-white/80 text-xl md:text-2xl max-w-4xl leading-relaxed font-medium">
              Nghiên cứu ứng dụng thực tiễn nhằm mang di sản tư liệu thế giới đến gần hơn với học sinh trung học phổ thông thông qua các giải pháp đổi mới phương pháp giảng dạy.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Thông tin đề tài */}
      <section className="section-padding bg-[#FAFAF7]" id="gioi-thieu">
        <div className="container-main">
          <div className="grid lg:grid-cols-[2fr_1fr] xl:grid-cols-[2.5fr_1fr] gap-16 lg:gap-24">
            
            {/* Nội dung chính */}
            <div className="space-y-20">
              <ScrollReveal delay={0.1}>
                <div>
                  <h3 className="flex items-center gap-4 text-3xl font-bold text-[#1C2B3A] mb-8 pb-4 border-b border-[#E0D9CF]" style={{ fontFamily: "var(--font-heading)" }}>
                    <Target size={32} className="text-[#C8860A]" /> Mục tiêu nghiên cứu
                  </h3>
                  <ul className="space-y-8">
                    {researchProject.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-5 text-[#556070] text-[1.125rem] leading-relaxed font-medium">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#C8860A] mt-2.5 flex-shrink-0 shadow-[0_0_12px_rgba(200,134,10,0.6)]" />
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <div>
                  <h3 className="flex items-center gap-4 text-3xl font-bold text-[#1C2B3A] mb-8 pb-4 border-b border-[#E0D9CF]" style={{ fontFamily: "var(--font-heading)" }}>
                    <HelpCircle size={32} className="text-[#1E4976]" /> Câu hỏi nghiên cứu
                  </h3>
                  <ul className="space-y-6">
                    {researchProject.questions.map((q, i) => (
                      <li key={i} className="flex items-start gap-5 text-[#1C2B3A] font-medium text-[1.125rem] leading-relaxed p-8 rounded-[1.5rem] bg-white border border-[#E0D9CF] shadow-sm hover:shadow-card transition-shadow">
                        <span className="text-[#1E4976] font-black text-2xl mt-0.5" style={{ fontFamily: "var(--font-heading)" }}>Q{i+1}.</span>
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Members sidebar */}
            <ScrollReveal delay={0.3} direction="left">
              <div className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-[#E0D9CF] shadow-card-lg h-fit sticky top-28">
                <h3 className="flex items-center gap-4 text-2xl font-bold text-[#1C2B3A] mb-10 pb-5 border-b border-[#E0D9CF]" style={{ fontFamily: "var(--font-heading)" }}>
                  <Users size={28} className="text-[#7C5C2E]" /> Nhóm thực hiện
                </h3>
                <ul className="space-y-10">
                  {researchProject.members.map((mem, i) => (
                    <li key={i} className="flex items-start gap-5 group">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F5F0E8] to-[#E0D9CF] border border-[#E0D9CF] flex items-center justify-center flex-shrink-0 font-bold text-[#1C2B3A] text-xl shadow-sm group-hover:-translate-y-1 transition-transform">
                        {mem.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-[#1C2B3A] text-lg mb-1 group-hover:text-[#1E4976] transition-colors">{mem.name}</div>
                        <div className="text-xs font-bold uppercase tracking-widest text-[#1E4976] mb-1.5">{mem.role}</div>
                        <div className="text-sm text-[#7B8A95] leading-snug font-medium">{mem.org}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Thực nghiệm & Kết quả - Dashboard Style */}
      <section className="section-padding bg-[#163558] text-white relative overflow-hidden" id="khao-sat">
        <div className="absolute inset-0 pattern-heritage opacity-15" />
        <div className="container-main relative z-10">
          
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
              <SectionTitle
                eyebrow="Khảo sát"
                title="Kết quả thực nghiệm"
                description="Dữ liệu phân tích hiệu quả của dự án sau khi triển khai tại các trường THPT trên địa bàn tỉnh Thừa Thiên Huế."
                className="mb-0 text-white [&_h2]:text-white [&_p]:text-white/70 max-w-3xl"
              />
            </div>
          </ScrollReveal>

          {/* Dashboard Summary Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Users, label: "Học sinh tham gia", num: 500, suffix: "+", color: "text-[#C8860A]" },
              { icon: GraduationCap, label: "Mức độ hiểu biết", num: 45, suffix: "%", color: "text-[#2D6A8E]" },
              { icon: TrendingUp, label: "Hứng thú học tập", num: 92, suffix: "%", color: "text-[#E8A820]" },
              { icon: FileCheck2, label: "Đánh giá tích cực", num: 4.8, suffix: "/5", color: "text-white" },
            ].map((metric, idx) => (
              <ScrollReveal key={idx} delay={0.1 * idx} direction="up">
                <div className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-[2rem] p-8 flex flex-col justify-center group hover:bg-white/15 transition-colors duration-300">
                  <metric.icon size={28} className={`${metric.color} mb-4`} />
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                     <CountUp end={metric.num} suffix={metric.suffix} />
                  </div>
                  <div className="text-base font-bold text-white/70 uppercase tracking-wider">{metric.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Chart & Results Grid */}
          <ScrollReveal delay={0.3} direction="up">
            <div className="grid xl:grid-cols-[1.5fr_1fr] gap-12 xl:gap-16 items-start bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-14 backdrop-blur-sm shadow-2xl">
              
              {/* Chart Wrapper */}
              <div className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-lg w-full">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-xl bg-[#1E4976]/10 flex items-center justify-center">
                    <BarChart3 size={24} className="text-[#1E4976]" />
                  </div>
                  <h4 className="text-[#1C2B3A] font-bold text-2xl" style={{ fontFamily: "var(--font-heading)" }}>
                    Mức độ hứng thú và hiểu biết của học sinh
                  </h4>
                </div>
                <div className="h-[450px] w-full">
                  <ResponsiveContainer width="100%" height="100%" minHeight={300}>
                    <BarChart data={surveyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E0D9CF" />
                      <XAxis dataKey="category" axisLine={false} tickLine={false} tick={{fill: '#7B8A95', fontSize: 14, fontWeight: 600}} dy={20} />
                      <YAxis axisLine={false} tickLine={false} tick={{fill: '#7B8A95', fontSize: 14, fontWeight: 600}} />
                      <Tooltip 
                        cursor={{fill: '#F5F0E8'}}
                        contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 12px 40px rgba(28,43,58,0.15)', padding: '20px' }}
                      />
                      <Legend iconType="circle" wrapperStyle={{ paddingTop: '40px', fontSize: '15px', fontWeight: 600, color: '#1C2B3A' }} />
                      <Bar dataKey="Trước trải nghiệm" fill="#9BA8B5" radius={[8, 8, 0, 0]} maxBarSize={56} />
                      <Bar dataKey="Sau trải nghiệm" fill="#1E4976" radius={[8, 8, 0, 0]} maxBarSize={56} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Results text */}
              <div className="space-y-10">
                <div className="inline-flex items-center gap-3 text-sm text-[#C8860A] font-bold uppercase tracking-[0.2em] bg-[#C8860A]/10 px-5 py-2.5 rounded-full border border-[#C8860A]/30">
                  <TrendingUp size={18} /> Nhận xét chung
                </div>
                <p className="text-white leading-relaxed text-xl font-medium">
                  {researchResults.summary}
                </p>
                
                <ul className="space-y-6">
                  {researchResults.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-5 text-white/90 text-lg leading-relaxed p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md">
                      <CheckCircle2 size={28} className="text-[#C8860A] flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-8">
                  <CTAButton href="#form" variant="wood" className="!px-10 !py-4 shadow-[0_12px_40px_rgba(200,134,10,0.4)] hover:-translate-y-1">Tham gia khảo sát ngay</CTAButton>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Công bố khoa học */}
      <section className="section-padding bg-white" id="cong-bo">
        <div className="container-main">
          <ScrollReveal delay={0.1}>
            <SectionTitle
              eyebrow="Ấn phẩm"
              title="Công bố khoa học"
              description="Các bài báo khoa học, báo cáo tại hội thảo và chuyên đề liên quan đến kết quả của dự án, minh chứng cho độ tin cậy học thuật."
              className="max-w-3xl mb-20"
            />
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {publications.map((pub, i) => (
              <ScrollReveal key={i} delay={0.1 * (i % 3)} direction="up">
                <ContentCard 
                  id={`pub-${i}`}
                  category={pub.type}
                  title={pub.title}
                  excerpt={pub.journal}
                  date={pub.year}
                  readTime="Xem tài liệu"
                  href={pub.link}
                  className="shadow-sm border border-[#E0D9CF]"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Form */}
      <section id="form" className="py-40 bg-[#F5F0E8] text-center border-t border-[#E0D9CF] relative overflow-hidden">
        <div className="absolute inset-0 texture-paper opacity-50 pointer-events-none" />
        <div className="container-main relative z-10">
          <ScrollReveal delay={0.1} direction="up">
            <div className="w-24 h-24 bg-white rounded-[2.5rem] border border-[#E0D9CF] shadow-card flex items-center justify-center mx-auto mb-10 transform -rotate-6">
              <BookText size={44} className="text-[#1E4976]" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-[#1C2B3A] mb-8" style={{ fontFamily: "var(--font-heading)" }}>
              Phiếu khảo sát trực tuyến
            </h2>
            <p className="text-[#556070] text-xl mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
              Mời quý thầy cô và các em học sinh điền vào phiếu khảo sát để đóng góp dữ liệu cho nhóm nghiên cứu tiếp tục cải thiện sản phẩm.
            </p>
            <div className="max-w-5xl mx-auto bg-white border border-[#E0D9CF] rounded-[3rem] h-[600px] flex items-center justify-center text-[#9BA8B5] shadow-card-lg relative overflow-hidden group">
               <div className="absolute inset-0 pattern-dots opacity-[0.05]" />
               <div className="relative border-2 border-dashed border-[#9BA8B5]/50 px-10 py-8 rounded-[2rem] bg-[#FAFAF7] flex flex-col items-center gap-4 group-hover:scale-105 transition-transform duration-500">
                 <ArrowUpRight size={32} className="text-[#1E4976]" />
                 <span className="font-bold text-[#1C2B3A] text-lg">Khu vực nhúng iframe khảo sát (Google Forms/Typeform)</span>
               </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
