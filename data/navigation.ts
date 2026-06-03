// ─── Navigation data ───────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const navItems: NavItem[] = [
  { label: "Trang chủ",                    href: "/" },
  { label: "Tìm hiểu Mộc bản",             href: "/mocban",      description: "Lịch sử và giá trị di sản" },
  { label: "Học tập cùng Mộc bản",         href: "/hoc-tap",     description: "Học liệu cho học sinh THPT" },
  { label: "Trải nghiệm giáo dục di sản",  href: "/trai-nghiem", description: "Hoạt động tương tác thực tế" },
  { label: "Không gian sáng tạo",          href: "/sang-tao",    description: "Dự án sáng tạo học sinh" },
  { label: "Nghiên cứu khoa học",          href: "/nghien-cuu",  description: "Công trình & ấn phẩm" },
  { label: "Liên hệ",                      href: "/lien-he" },
];
