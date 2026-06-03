// ─── Contact & Footer Data ────────────────────────────────────
export const contactInfo = {
  organization: "STEM MOCBAN EDUCATION",
  unit: "Trường Đại học Sư phạm – Đại học Huế",
  address: "Nhóm nghiên cứu, Trường Đại học Sư phạm – Đại học Huế",
  email: "contact@stemmocban.edu.vn",
  phone: "(0234) 3 xxx xxx",
  hours: "Thứ Hai – Thứ Sáu: 7:30 – 17:00",
  socialLinks: [
    { name: "Facebook",  href: "https://facebook.com",  icon: "Facebook" },
    { name: "YouTube",   href: "https://youtube.com",   icon: "Youtube" },
    { name: "Email",     href: "mailto:contact@stemmocban.edu.vn", icon: "Mail" },
  ],
};

export const footerLinks = {
  explore: [
    { label: "Tìm hiểu Mộc bản",    href: "/mocban" },
    { label: "Học tập cùng Mộc bản", href: "/hoc-tap" },
    { label: "Mộc Bản Ký Sự",        href: "/trai-nghiem#moc-ban-ky-su" },
    { label: "Bật Mã Cổ Thư",        href: "/trai-nghiem#bat-ma-co-thu" },
  ],
  participate: [
    { label: "Khảo sát trải nghiệm", href: "/nghien-cuu#khao-sat" },
    { label: "Không gian sáng tạo",  href: "/sang-tao" },
    { label: "Nghiên cứu khoa học",  href: "/nghien-cuu" },
    { label: "Liên hệ hợp tác",      href: "/lien-he" },
  ],
};

export const contactFormFields = [
  { id: "name",    label: "Họ và tên",          type: "text",     placeholder: "Nguyễn Văn A",              required: true },
  { id: "email",   label: "Email",               type: "email",    placeholder: "email@example.com",         required: true },
  { id: "role",    label: "Vai trò",              type: "select",   placeholder: "",                         required: true,
    options: ["Học sinh", "Giáo viên", "Nhà nghiên cứu", "Khác"] },
  { id: "message", label: "Nội dung liên hệ",     type: "textarea", placeholder: "Chia sẻ thêm chi tiết…", required: true },
];
