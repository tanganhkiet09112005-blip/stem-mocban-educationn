type Align = "left" | "center";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: Align;
  className?: string;
}

export default function SectionTitle({
  eyebrow, title, description, align = "left", className = "",
}: SectionTitleProps) {
  const centered = align === "center";
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <div className={`flex items-center gap-2.5 mb-3 ${centered ? "justify-center" : ""}`}>
          <span className="w-5 h-0.5 bg-[#C8860A] rounded-full flex-shrink-0" />
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A37840]">
            {eyebrow}
          </p>
        </div>
      )}
      <h2
        className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#1C2B3A] leading-tight"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-3 text-[#556070] leading-relaxed max-w-2xl text-[0.9375rem] ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
