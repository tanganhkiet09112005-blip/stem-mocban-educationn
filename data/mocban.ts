// ─── Mộc bản page data ────────────────────────────────────────

// A. Mộc bản triều Nguyễn là gì?
export const mocbanIntro = {
  eyebrow: "Khái niệm và Lịch sử",
  title: "Mộc bản triều Nguyễn là gì?",
  description: "Mộc bản là những tấm gỗ quý được khắc ngược chữ Hán, Nôm dùng để in thành sách, phổ biến trong xã hội phong kiến. Mộc bản triều Nguyễn là di sản tư liệu thế giới quý giá, ghi chép lại mọi mặt của đời sống xã hội dưới triều Nguyễn.",
  sections: [
    {
      title: "Lịch sử hình thành & Quá trình khắc in",
      content: "Ra đời từ nhu cầu in ấn và lưu trữ các bộ sách lớn của triều đình, quá trình khắc in mộc bản đòi hỏi sự tỉ mỉ, công phu từ khâu chọn gỗ (thường là gỗ thị, gỗ nha đồng), xử lý mộc, đến người thợ khắc tài hoa."
    },
    {
      title: "Vai trò của Quốc Sử Quán",
      content: "Quốc Sử Quán không chỉ là cơ quan biên soạn lịch sử mà còn đóng vai trò quan trọng trong việc tổ chức khắc in, bảo quản các mộc bản, đảm bảo tính toàn vẹn và độ chính xác của các tư liệu quốc gia."
    },
    {
      title: "Giá trị của Di sản",
      content: "Mộc bản không chỉ mang giá trị Lịch sử (nguồn sử liệu gốc) mà còn có giá trị Văn hóa (thể hiện nghệ thuật điêu khắc, chế tác) và giá trị Giáo dục (bài học về sự hiếu học, tinh thần bảo vệ chủ quyền)."
    },
    {
      title: "Hành trình UNESCO",
      content: "Với những giá trị to lớn, năm 2009, Mộc bản triều Nguyễn tự hào được UNESCO ghi danh là Di sản Tư liệu Thế giới, trở thành di sản tư liệu đầu tiên của Việt Nam nhận được vinh dự này."
    }
  ]
};

// B. Câu chuyện về Mộc bản (Chuyên đề)
export const mocbanStories = [
  {
    id: "khoa-cu",
    title: "Hành trình khoa cử triều Nguyễn",
    excerpt: "Quy trình tổ chức các kỳ thi: Thi Hương (tại các địa phương), Thi Hội (tại kinh đô), và Thi Đình (do đích thân nhà vua ra đề).",
    icon: "Scroll",
    color: "academic",
  },
  {
    id: "hieu-hoc",
    title: "Hiếu học và trọng dụng nhân tài",
    excerpt: "Các chính sách khuyến học, biểu dương người tài như khắc tên lên bia tiến sĩ, ban yến tiệc, vinh quy bái tổ.",
    icon: "GraduationCap",
    color: "wood",
  },
  {
    id: "ton-su",
    title: "Tôn sư trọng đạo",
    excerpt: "Những mộc bản ghi chép về đạo làm thầy, sự tôn kính của vua quan và nhân dân đối với người thầy.",
    icon: "BookOpen",
    color: "gold",
  },
  {
    id: "chu-quyen",
    title: "Chủ quyền lãnh thổ",
    excerpt: "Các tư liệu quý giá về việc xác lập, quản lý và bảo vệ chủ quyền biển đảo, đặc biệt là Hoàng Sa và Trường Sa.",
    icon: "Map",
    color: "academic",
  },
];

// C. Tư liệu học tập
export const mocbanResources = [
  {
    category: "Infographic",
    items: [
      { title: "Hệ thống khoa cử triều Nguyễn", type: "Image" },
      { title: "Các đời vua Nguyễn", type: "Image" },
      { title: "Giá trị của Mộc bản", type: "Image" },
    ]
  },
  {
    category: "Timeline",
    items: [
      { title: "Lịch sử hình thành Mộc bản", type: "Interactive" },
      { title: "Hành trình UNESCO ghi danh", type: "Interactive" },
    ]
  },
  {
    category: "Video",
    items: [
      { title: "Giới thiệu chung về Mộc bản", type: "Video" },
      { title: "Quy trình khắc in sách", type: "Video" },
    ]
  },
  {
    category: "Tài liệu đọc",
    items: [
      { title: "Phiếu đọc hiểu Mộc bản", type: "PDF" },
      { title: "Bài đọc ngắn về thi cử xưa", type: "PDF" },
      { title: "Tư liệu tham khảo chuyên sâu", type: "PDF" },
    ]
  },
];
