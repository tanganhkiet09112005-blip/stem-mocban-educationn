// ─── Navigation data ───────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const navItems: NavItem[] = [
  { label: "Trang chủ",        href: "/" },
  { label: "Khám phá Mộc bản", href: "/mocban",      description: "Lịch sử, văn hóa và sử liệu" },
  { label: "Học tập",          href: "/hoc-tap",     description: "Từ di sản đến học liệu" },
  { label: "Trải nghiệm",      href: "/trai-nghiem", description: "Boardgame & Bộ kit sáng tạo" },
  { label: "Góc sáng tạo",     href: "/sang-tao",    description: "Sản phẩm & tiếng nói học sinh" },
  { label: "Nghiên cứu",       href: "/nghien-cuu",  description: "Đề tài khoa học & công bố" },
  { label: "Kết nối",          href: "/lien-he",     description: "Đưa sản phẩm vào thực tiễn" },
];
