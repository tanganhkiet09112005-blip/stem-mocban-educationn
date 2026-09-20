// ─── Học tập Page Data: TỪ DI SẢN ĐẾN HỌC LIỆU ─────────────────

export type HocLieuCategory =
  | "Tất cả"
  | "Bài đọc"
  | "Tư liệu trực quan"
  | "Trò chơi học tập"
  | "Chuyên đề"
  | "Giáo án"
  | "Câu hỏi"
  | "Hoạt động";

export const hoctapCategories: HocLieuCategory[] = [
  "Tất cả",
  "Bài đọc",
  "Tư liệu trực quan",
  "Trò chơi học tập",
  "Chuyên đề",
  "Giáo án",
  "Câu hỏi",
  "Hoạt động",
];

export interface HocLieuResource {
  id: string;
  category: HocLieuCategory;
  typeBadge: string;
  title: string;
  desc: string;
  audience: string;
  fileUrl: string;
  statusNote?: string;
}

export const hoctapResources: HocLieuResource[] = [
  {
    id: "hl1",
    category: "Bài đọc",
    typeBadge: "Bài đọc",
    title: "Tìm hiểu chế độ khoa cử triều Nguyễn",
    desc: "Bài đọc tóm lược về các kỳ thi Hương, thi Hội, thi Đình và chế độ khoa cử dưới triều Nguyễn.",
    audience: "Học sinh",
    fileUrl: "",
    statusNote: "Tài liệu học tập THPT (Đang cập nhật)",
  },
  {
    id: "hl2",
    category: "Tư liệu trực quan",
    typeBadge: "Tư liệu trực quan",
    title: "Quy trình làm Mộc bản",
    desc: "Tìm hiểu quá trình tạo nên một bản Mộc bản, từ lựa chọn gỗ thị, xử lý ván, khắc ngược chữ đến in thành sách.",
    audience: "Học sinh",
    fileUrl: "",
    statusNote: "Tư liệu minh họa (Đang cập nhật)",
  },
  {
    id: "hl3",
    category: "Trò chơi học tập",
    typeBadge: "Trò chơi học tập",
    title: "Quiz: Nhận diện họa tiết",
    desc: "Hoạt động tương tác giúp học sinh nhận biết và tìm hiểu các loại họa tiết, hoa văn xuất hiện trên văn bản Mộc bản.",
    audience: "Học sinh",
    fileUrl: "/trai-nghiem#bat-ma-co-thu",
    statusNote: "Tương tác Bật Mã Cổ Thư",
  },
  {
    id: "hl4",
    category: "Chuyên đề",
    typeBadge: "Chuyên đề",
    title: "Giáo dục thời Nguyễn",
    desc: "Tìm hiểu những đặc điểm của giáo dục, khoa cử, việc học và đào tạo nhân tài dưới triều Nguyễn.",
    audience: "Giáo viên",
    fileUrl: "",
    statusNote: "Tài liệu chuyên sâu (Đang cập nhật)",
  },
  {
    id: "hl5",
    category: "Chuyên đề",
    typeBadge: "Chuyên đề",
    title: "Văn hóa và lịch sử qua Mộc bản",
    desc: "Khám phá những giá trị lịch sử, văn hóa và tư tưởng được lưu giữ trong các tác phẩm khắc trên Mộc bản.",
    audience: "Giáo viên, Học sinh",
    fileUrl: "",
    statusNote: "Tài liệu chuyên sâu (Đang cập nhật)",
  },
  {
    id: "hl6",
    category: "Giáo án",
    typeBadge: "Giáo án minh họa",
    title: "Vai trò của sử học",
    desc: "Giáo án minh họa cách khai thác Mộc bản như một nguồn sử liệu trong dạy học Lịch sử ở trường THPT (Lớp 10, Chủ đề 1).",
    audience: "Giáo viên",
    fileUrl: "",
    statusNote: "Giáo án GDPT 2018 (Đang cập nhật)",
  },
  {
    id: "hl7",
    category: "Câu hỏi",
    typeBadge: "Ngân hàng câu hỏi",
    title: "Bộ câu hỏi kiểm tra, đánh giá",
    desc: "Hệ thống câu hỏi trắc nghiệm và tự luận giúp kiểm tra, đánh giá kiến thức về Mộc bản và lịch sử triều Nguyễn.",
    audience: "Giáo viên",
    fileUrl: "",
    statusNote: "Đề kiểm tra đánh giá (Đang cập nhật)",
  },
  {
    id: "hl8",
    category: "Hoạt động",
    typeBadge: "Hoạt động cá nhân",
    title: "Phiếu hoạt động cá nhân",
    desc: "Các nhiệm vụ đọc hiểu, tìm kiếm và xử lý thông tin giúp học sinh chủ động khám phá nội dung từ Mộc bản.",
    audience: "Học sinh",
    fileUrl: "",
    statusNote: "Phiếu học tập (Đang cập nhật)",
  },
  {
    id: "hl9",
    category: "Hoạt động",
    typeBadge: "Hoạt động nhóm",
    title: "Phiếu hoạt động nhóm",
    desc: "Hướng dẫn học sinh làm việc nhóm, trao đổi, thảo luận và trình bày kết quả tìm hiểu về lịch sử và di sản.",
    audience: "Giáo viên, Học sinh",
    fileUrl: "",
    statusNote: "Phiếu học tập nhóm (Đang cập nhật)",
  },
];
