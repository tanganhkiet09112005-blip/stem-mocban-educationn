// ─── Homepage Content Data ─────────────────────────────────────
import type { LucideIcon } from "lucide-react";

export const heroContent = {
  eyebrow: "Khám phá di sản – Học tập sáng tạo – Kết nối quá khứ với hiện tại",
  title: "Giáo dục Di sản",
  titleHighlight: "Mộc bản triều Nguyễn",
  subtitle: "TÍCH HỢP GIÁO DỤC GIÁ TRỊ DI SẢN MỘC BẢN TRIỀU NGUYỄN TRONG DẠY HỌC VÀ HOẠT ĐỘNG GIÁO DỤC Ở TRƯỜNG TRUNG HỌC PHỔ THÔNG THÀNH PHỐ HUẾ",
  cta1: { label: "Tìm hiểu Mộc bản", href: "/mocban" },
  cta2: { label: "Trải nghiệm ngay", href: "/trai-nghiem" },
};

export const statsData = [
  { value: "34.619", label: "Tấm mộc bản", sub: "được bảo tồn" },
  { value: "152",    label: "Đầu sách",    sub: "tư liệu quý" },
  { value: "2009",   label: "UNESCO",      sub: "Di sản thế giới" },
  { value: "Huế",    label: "Triển khai",  sub: "Các trường THPT" },
];

export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  href: string;
  color: "academic" | "wood" | "gold";
}

export const features: FeatureItem[] = [
  {
    id: "mocban",
    icon: "BookOpen",
    title: "Tìm hiểu Mộc bản",
    description: "Khám phá lịch sử, giá trị văn hóa và ý nghĩa của Di sản Mộc bản.",
    href: "/mocban",
    color: "academic",
  },
  {
    id: "hoc-tap",
    icon: "GraduationCap",
    title: "Học tập cùng Mộc bản",
    description: "Học liệu số, bài giảng, trò chơi và tài liệu giáo án điện tử.",
    href: "/hoc-tap",
    color: "wood",
  },
  {
    id: "moc-ban-ky-su",
    icon: "Landmark",
    title: "Mộc Bản Ký Sự",
    description: "Trải nghiệm Boardgame tái hiện hành trình khoa cử triều Nguyễn.",
    href: "/trai-nghiem#moc-ban-ky-su",
    color: "gold",
  },
  {
    id: "bat-ma-co-thu",
    icon: "Lightbulb",
    title: "Bật Mã Cổ Thư",
    description: "Bộ kit giải mã di sản với mật thư và thử thách tương tác.",
    href: "/trai-nghiem#bat-ma-co-thu",
    color: "academic",
  },
  {
    id: "khao-sat",
    icon: "FlaskConical",
    title: "Khảo sát trải nghiệm",
    description: "Đánh giá hứng thú và hiệu quả học tập trước và sau trải nghiệm.",
    href: "/nghien-cuu#khao-sat",
    color: "wood",
  },
  {
    id: "nghien-cuu",
    icon: "Library",
    title: "Nghiên cứu khoa học",
    description: "Công trình nghiên cứu, bài báo và kết quả triển khai thực nghiệm.",
    href: "/nghien-cuu",
    color: "gold",
  },
];

export const aboutContent = {
  eyebrow: "Về dự án",
  title: "Giáo dục Di sản qua Lăng kính Sáng tạo",
  paragraphs: [
    "Mộc bản triều Nguyễn là di sản tư liệu thế giới đầu tiên của Việt Nam được UNESCO công nhận. Đây là những tấm gỗ quý được khắc ngược chữ Hán, Nôm dùng để in sách lưu hành nội bộ và phục vụ giáo dục, khoa cử thời Nguyễn.",
    "Giáo dục di sản đóng vai trò quan trọng trong việc khơi dậy lòng tự hào dân tộc, giúp học sinh trân trọng giá trị lịch sử và kết nối quá khứ với hiện tại. Thông qua các phương pháp học tập sáng tạo, di sản không còn khô khan mà trở nên gần gũi, sinh động.",
    "Mục tiêu của website là tạo ra một không gian số tích hợp các học liệu, sản phẩm giáo dục như Boardgame và Bộ kit giải mã, giúp giáo viên và học sinh tại TP. Huế dễ dàng tiếp cận và ứng dụng di sản Mộc bản vào giảng dạy và học tập.",
  ],
  cta: { label: "Tìm hiểu thêm về Mộc bản", href: "/mocban" },
  images: [
    { src: "/images/mocban-1.jpg", alt: "Mộc bản triều Nguyễn" },
    { src: "/images/mocban-2.jpg", alt: "Hoạt động trải nghiệm di sản" },
  ],
};

export const ctaBannerContent = {
  title: "Lan tỏa Giá trị Di sản",
  subtitle: "Sử dụng các tài nguyên học tập và sản phẩm giáo dục sáng tạo để đưa Mộc bản triều Nguyễn đến gần hơn với thế hệ trẻ.",
  cta1: { label: "Xem sản phẩm trải nghiệm", href: "/trai-nghiem" },
  cta2: { label: "Đóng góp ý kiến", href: "/lien-he" },
};

export const highlightedProducts = [
  {
    id: "moc-ban-ky-su",
    subtitle: "Boardgame",
    title: "Mộc Bản Ký Sự",
    intro: "Trải nghiệm hành trình khoa cử triều Nguyễn từ kỳ thi Hương đến thi Đình thông qua trò chơi cờ bàn chiến thuật.",
  },
  {
    id: "bat-ma-co-thu",
    subtitle: "Bộ kit giải mã",
    title: "Bật Mã Cổ Thư",
    intro: "Hành trình giải mã các bí ẩn lịch sử thông qua hệ thống mật thư, thẻ bài và các thử thách tương tác tư duy.",
  },
];
