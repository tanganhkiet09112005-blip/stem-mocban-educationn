// ─── Homepage Content Data (STEAM MOCBAN EDUCATION) ───────────────

export const heroContent = {
  brand: "STEAM MOCBAN EDUCATION",
  tagline: "Di sản • Giáo dục • Công nghệ • Trải nghiệm • Sáng tạo",
  headline: "Khám phá Mộc bản triều Nguyễn bằng một cách mới.",
  fundingNotice: "Sản phẩm nghiên cứu này được tài trợ bởi Trường Đại học Sư phạm, Đại học Huế trong nhiệm vụ mã số T.26.XH.503.15",
  cta1: { label: "Khám phá Mộc bản", href: "/mocban" },
  cta2: { label: "Bắt đầu học tập", href: "/hoc-tap" },
  rightCard: {
    badge: "Trải nghiệm tương tác",
    title: "Không gian trải nghiệm",
    description: "Khám phá giá trị Mộc bản qua trò chơi, hoạt động tương tác và trải nghiệm sáng tạo.",
  },
};

// 3 thống kê trang chủ — cập nhật theo yêu cầu khách hàng
export const statsData = [
  { value: "34.619", label: "Tấm mộc bản",  sub: "Được bảo tồn" },
  { value: "2009",   label: "UNESCO",        sub: "Di sản thế giới" },
  { value: "Huế",    label: "Triển khai",    sub: "Các trường THPT" },
];

// Khối 5 thành tố STEAM tích hợp Di sản
export interface SteamElement {
  letter: string;
  name: string;
  action: string;
  description: string;
  color: string;
}

export const steamFramework: SteamElement[] = [
  {
    letter: "S",
    name: "Science",
    action: "Khám phá",
    description: "Lịch sử, chất liệu gỗ thị, kỹ thuật chế tác và giá trị học thuật của Mộc bản.",
    color: "#1E4976",
  },
  {
    letter: "T",
    name: "Technology",
    action: "Số hóa",
    description: "Website di sản, mã QR tương tác, học liệu số và giải mã trên nền tảng web.",
    color: "#0284C7",
  },
  {
    letter: "E",
    name: "Engineering",
    action: "Thiết kế",
    description: "Cơ chế trò chơi cờ bàn, cấu trúc bộ kit và quy trình khắc in thủ công.",
    color: "#7C5C2E",
  },
  {
    letter: "A",
    name: "Arts",
    action: "Sáng tạo",
    description: "Thư pháp chữ Hán - Nôm, mỹ thuật dân gian, phác họa hoa văn và ấn phẩm thủ công.",
    color: "#C8860A",
  },
  {
    letter: "M",
    name: "Mathematics",
    action: "Phân tích",
    description: "Tư duy logic chiến thuật, quản lý tài nguyên Xu Phi Long, khảo sát và đánh giá số liệu.",
    color: "#0D9488",
  },
];

export interface FeatureItem {
  id: string;
  step: string;
  icon: string;
  title: string;
  description: string;
  href: string;
  color: "academic" | "wood" | "gold";
}

// 6 Bước Hành trình học tập (Learning Journey)
export const features: FeatureItem[] = [
  {
    id: "kham-pha",
    step: "01",
    icon: "BookOpen",
    title: "Tìm hiểu Mộc bản",
    description: "Khám phá lịch sử, giá trị văn hóa và các bộ sử lớn qua từng bản khắc.",
    href: "/mocban",
    color: "academic",
  },
  {
    id: "hoc-tap",
    step: "02",
    icon: "GraduationCap",
    title: "Khám phá tư liệu",
    description: "Học liệu số, bài đọc, chuyên đề và giáo án minh họa chuẩn GDPT 2018.",
    href: "/hoc-tap",
    color: "wood",
  },
  {
    id: "choi",
    step: "03",
    icon: "Landmark",
    title: "Mộc Bản Ký Sự",
    description: "Boardgame chiến thuật tái hiện hành trình học tập và khoa cử của sĩ tử triều Nguyễn.",
    href: "/trai-nghiem#moc-ban-ky-su",
    color: "gold",
  },
  {
    id: "trai-nghiem",
    step: "04",
    icon: "Lightbulb",
    title: "Bật Mã Cổ Thư",
    description: "Bộ kit giải mã QR, phác họa hoa văn và trải nghiệm tự khắc, in mộc bản.",
    href: "/trai-nghiem#bat-ma-co-thu",
    color: "academic",
  },
  {
    id: "sang-tao",
    step: "05",
    icon: "Palette",
    title: "Tạo sản phẩm",
    description: "Không gian trưng bày các tác phẩm sáng tạo và tiếng nói cảm nhận của học sinh.",
    href: "/sang-tao",
    color: "wood",
  },
  {
    id: "khao-sat",
    step: "06",
    icon: "FlaskConical",
    title: "Chia sẻ trải nghiệm",
    description: "Khảo sát, đánh giá hiệu quả học tập và đóng góp ý kiến nâng cao đề tài.",
    href: "/nghien-cuu#khao-sat",
    color: "gold",
  },
];

export const aboutContent = {
  eyebrow: "Về dự án",
  title: "Giáo dục Di sản qua Lăng kính Sáng tạo",
  paragraphs: [
    "Mộc bản triều Nguyễn là Di sản tư liệu thế giới được UNESCO ghi danh năm 2009, lưu giữ những giá trị phong phú về lịch sử, văn hóa và giáo dục. Từ nguồn tư liệu quý giá ấy, đề tài hướng đến việc đưa giá trị Mộc bản vào dạy học và hoạt động giáo dục ở trường THPT tại thành phố Huế.",
    "Thông qua các phương pháp và sản phẩm giáo dục phù hợp, Mộc bản được chuyển hóa thành những trải nghiệm học tập gần gũi, trực quan và sáng tạo, góp phần phát triển phẩm chất, năng lực và ý thức gìn giữ di sản cho học sinh.",
  ],
  focusList: [
    "Khai thác giá trị lịch sử, văn hóa và giáo dục của Mộc bản",
    "Tích hợp Mộc bản vào dạy học Lịch sử, Giáo dục địa phương và hoạt động giáo dục",
    "Phát triển học liệu và sản phẩm giáo dục theo định hướng phát triển phẩm chất, năng lực",
    "Tổ chức trải nghiệm và thực nghiệm sư phạm để đánh giá tính khả thi, hiệu quả",
  ],
  cta: { label: "Tìm hiểu thêm về Mộc bản", href: "/mocban" },
};

export const highlightedProducts = [
  {
    id: "moc-ban-ky-su",
    subtitle: "Boardgame giáo dục",
    title: "Mộc Bản Ký Sự",
    intro: "Tái hiện hành trình học tập, khoa cử và lập thân của sĩ tử thời Nguyễn thông qua cơ chế cờ bàn chiến thuật và tài nguyên Xu Phi Long.",
  },
  {
    id: "bat-ma-co-thu",
    subtitle: "Bộ kit trải nghiệm",
    title: "Bật Mã Cổ Thư",
    intro: "Trải nghiệm chuỗi 5 bước: Quét mã QR ➔ Giải đố trên web ➔ Phác họa họa tiết ➔ Khắc ván gỗ ➔ In ấn sản phẩm cá nhân.",
  },
];

export const ctaBannerContent = {
  title: "Kết nối Di sản thông qua STEAM",
  subtitle: "Phương thức mới cho giáo dục di sản hiện đại — Chuyển hóa Mộc bản triều Nguyễn thành những trải nghiệm học tập sinh động cho thế hệ trẻ.",
  cta1: { label: "Khám phá trải nghiệm", href: "/trai-nghiem" },
  cta2: { label: "Đăng ký kết nối", href: "/lien-he" },
};
