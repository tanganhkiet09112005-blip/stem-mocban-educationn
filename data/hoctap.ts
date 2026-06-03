// ─── Học tập page data ────────────────────────────────────────

export type HocLieuCategory = "Tất cả" | "Học liệu số" | "Chuyên đề" | "Giáo án" | "Ngân hàng câu hỏi" | "Hoạt động";

export const hoctapCategories: HocLieuCategory[] = [
  "Tất cả", "Học liệu số", "Chuyên đề", "Giáo án", "Ngân hàng câu hỏi", "Hoạt động"
];

export const hoctapResources = [
  {
    id: "hl1",
    category: "Học liệu số",
    type: "Bài đọc",
    title: "Tìm hiểu chế độ khoa cử triều Nguyễn",
    desc: "Bài đọc tóm tắt về các kỳ thi Hương, thi Hội, thi Đình và quy chế thi cử.",
    audience: "Học sinh",
    fileUrl: "#",
  },
  {
    id: "hl2",
    category: "Học liệu số",
    type: "Video",
    title: "Quy trình làm Mộc bản",
    desc: "Video mô phỏng 3D quá trình từ chọn gỗ, khắc chữ đến in ấn sách.",
    audience: "Học sinh",
    fileUrl: "#",
  },
  {
    id: "hl3",
    category: "Học liệu số",
    type: "Trò chơi",
    title: "Quiz: Nhận diện ấn triện",
    desc: "Trò chơi tương tác giúp học sinh nhận biết các loại ấn triện trên văn bản.",
    audience: "Học sinh",
    fileUrl: "#",
  },
  {
    id: "cd1",
    category: "Chuyên đề",
    type: "Tài liệu",
    title: "Chuyên đề Giáo dục thời Nguyễn",
    desc: "Tài liệu chuyên sâu về hệ thống trường học, thầy đồ và sách giáo khoa xưa.",
    audience: "Giáo viên",
    fileUrl: "#",
  },
  {
    id: "cd2",
    category: "Chuyên đề",
    type: "Tài liệu",
    title: "Chuyên đề Văn hóa & Lịch sử",
    desc: "Các giá trị văn hóa được lưu giữ qua Mộc bản.",
    audience: "Giáo viên, Học sinh",
    fileUrl: "#",
  },
  {
    id: "ga1",
    category: "Giáo án",
    type: "Word",
    title: "Giáo án Lịch sử 10 - Chủ đề 1: Vai trò của Sử học",
    desc: "Giáo án minh họa tích hợp di sản Mộc bản vào giảng dạy Lịch sử lớp 10.",
    audience: "Giáo viên",
    fileUrl: "#",
  },
  {
    id: "ch1",
    category: "Ngân hàng câu hỏi",
    type: "PDF",
    title: "Bộ câu hỏi kiểm tra đánh giá",
    desc: "100 câu hỏi trắc nghiệm và tự luận về Mộc bản và lịch sử triều Nguyễn.",
    audience: "Giáo viên",
    fileUrl: "#",
  },
  {
    id: "hd1",
    category: "Hoạt động",
    type: "Hướng dẫn",
    title: "Phiếu hoạt động cá nhân",
    desc: "Các bài tập điền khuyết, ghép nối thông tin cho học sinh tự học.",
    audience: "Học sinh",
    fileUrl: "#",
  },
  {
    id: "hd2",
    category: "Hoạt động",
    type: "Hướng dẫn",
    title: "Phiếu hoạt động nhóm",
    desc: "Hướng dẫn tổ chức tranh biện, dự án nhỏ tìm hiểu về các nhân vật lịch sử.",
    audience: "Giáo viên, Học sinh",
    fileUrl: "#",
  },
];
