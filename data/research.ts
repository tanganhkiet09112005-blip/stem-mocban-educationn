// ─── Research page data ────────────────────────────────────────

export const researchProject = {
  title: "Tích hợp giáo dục giá trị di sản Mộc bản triều Nguyễn trong dạy học và hoạt động giáo dục ở trường Trung học phổ thông Thành phố Huế",
  objectives: [
    "Nghiên cứu cơ sở lý luận và thực tiễn về giáo dục di sản tại trường THPT.",
    "Thiết kế các sản phẩm giáo dục (Boardgame, Bộ kit) mang tính tương tác cao, lấy chất liệu từ Mộc bản triều Nguyễn.",
    "Đánh giá tính khả thi và hiệu quả của các sản phẩm qua thực nghiệm sư phạm tại các trường THPT ở Huế."
  ],
  questions: [
    "Làm thế nào để học sinh tiếp cận Di sản Mộc bản một cách chủ động và hứng thú?",
    "Các sản phẩm trò chơi giáo dục (Gamification) có tác động như thế nào đến kết quả học tập môn Lịch sử?",
    "Giáo viên cần những công cụ hỗ trợ nào để triển khai hiệu quả giáo dục di sản?"
  ],
  members: [
    { name: "TS. Nguyễn Thị A", role: "Chủ nhiệm đề tài", org: "Trường Đại học Sư phạm - Đại học Huế" },
    { name: "ThS. Trần Văn B", role: "Thành viên chính", org: "Trường Đại học Sư phạm - Đại học Huế" },
    { name: "ThS. Lê Thị C", role: "Thành viên", org: "Giáo viên THPT chuyên Quốc Học" }
  ]
};

export const publications = [
  {
    type: "Bài báo khoa học",
    title: "Vận dụng trò chơi hóa (Gamification) trong dạy học Lịch sử địa phương tại Thừa Thiên Huế",
    journal: "Tạp chí Giáo dục",
    year: "2023",
    link: "#"
  },
  {
    type: "Báo cáo Hội thảo",
    title: "Thiết kế bộ kit giáo dục 'Bật Mã Cổ Thư' nhằm phát triển năng lực tìm hiểu lịch sử cho học sinh THPT",
    journal: "Hội thảo Quốc gia về Giáo dục Di sản",
    year: "2024",
    link: "#"
  },
  {
    type: "Tạp chí",
    title: "Bảo tồn và phát huy giá trị di sản Mộc bản triều Nguyễn qua các hoạt động trải nghiệm",
    journal: "Tạp chí Nghiên cứu Lịch sử",
    year: "2024",
    link: "#"
  }
];

// Mock data cho Recharts
export const surveyData = [
  {
    category: "Mức độ hứng thú",
    "Trước trải nghiệm": 45,
    "Sau trải nghiệm": 85,
  },
  {
    category: "Kiến thức Mộc bản",
    "Trước trải nghiệm": 30,
    "Sau trải nghiệm": 90,
  },
  {
    category: "Kỹ năng làm việc nhóm",
    "Trước trải nghiệm": 60,
    "Sau trải nghiệm": 88,
  },
  {
    category: "Thái độ học tập",
    "Trước trải nghiệm": 55,
    "Sau trải nghiệm": 92,
  },
];

export const researchResults = {
  summary: "Kết quả thực nghiệm trên 500 học sinh tại 3 trường THPT ở Huế (THPT Chuyên Quốc Học, THPT Hai Bà Trưng, THPT Nguyễn Huệ) cho thấy sự gia tăng rõ rệt về cả nhận thức và thái độ.",
  highlights: [
    "92% học sinh đánh giá cao hình thức học tập qua Boardgame và Bộ kit giải mã.",
    "Điểm số bài kiểm tra kiến thức lịch sử liên quan đến triều Nguyễn tăng trung bình 3.5 điểm (thang điểm 10).",
    "Giáo viên ghi nhận sự chủ động, tích cực tham gia phát biểu và tương tác nhóm của học sinh tăng lên đáng kể."
  ],
  recommendations: [
    "Tiếp tục mở rộng mô hình đến các trường THPT khác trên địa bàn tỉnh Thừa Thiên Huế.",
    "Số hóa các sản phẩm giáo dục để dễ dàng tiếp cận qua môi trường Internet.",
    "Tổ chức các khóa tập huấn cho giáo viên về phương pháp sử dụng Bộ kit và Boardgame trong giảng dạy."
  ]
};
