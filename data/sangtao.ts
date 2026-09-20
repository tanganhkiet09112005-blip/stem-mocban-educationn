// ─── Góc sáng tạo Page Data (STEAM MOCBAN EDUCATION) ───────────────

export interface StudentCreation {
  id: string;
  name: string;
  creator: string;
  shareStory: string;
  mediaPlaceholderKey: string;
  mediaType: "image" | "video";
}

export const studentProducts: StudentCreation[] = [
  {
    id: "sp1",
    name: "Mô hình 3D Quốc Sử Quán Huế",
    creator: "Nhóm Sĩ tử trẻ — Trường THPT Thuận Hóa",
    shareStory: "Tụi em đã cùng nhau tìm hiểu kiến trúc Quốc Sử Quán qua các trang địa chí và dùng vật liệu tái chế kết hợp bìa mô hình để tái dựng không gian nơi người xưa biên soạn, khắc in những bộ sử lớn.",
    mediaPlaceholderKey: "student-artwork-3d-model",
    mediaType: "image",
  },
  {
    id: "sp2",
    name: "Bản khắc gỗ hoa văn Rồng triều Nguyễn",
    creator: "Học sinh Nguyễn Văn A — Trường THPT Đặng Trần Côn",
    shareStory: "Sau khi giải mã thành công câu đố trên web Bật Mã Cổ Thư, em đã tự tay cầm dao khắc từng đường nét vảy rồng lên miếng gỗ thị nhỏ. Cảm giác lúc lăn mực in dấu ấn lên túi vải thực sự rất tự hào!",
    mediaPlaceholderKey: "student-wood-print",
    mediaType: "image",
  },
  {
    id: "sp3",
    name: "Bài thơ: Lời gỗ trăm năm",
    creator: "Học sinh Trần Thị B — Trường THPT Đặng Trần Côn",
    shareStory: "Bài thơ lục bát em sáng tác sau tiết học lịch sử có sử dụng Mộc bản, bày tỏ lòng biết ơn đối với những người thợ khắc vô danh đã tỉ mẩn lưu giữ linh hồn dân tộc trên từng thớ gỗ.",
    mediaPlaceholderKey: "student-poem-calligraphy",
    mediaType: "image",
  },
];

export const studentExperiences = [
  {
    id: "exp1",
    author: "Lê Minh C.",
    school: "Học sinh Trường THPT Thuận Hóa",
    content: "Lần đầu tiên em được chơi Boardgame Mộc Bản Ký Sự và dùng đồng Xu Phi Long để vượt qua các kỳ thi Hương, thi Hội. Việc ghi nhớ các mốc lịch sử triều Nguyễn trở nên vô cùng tự nhiên và cuốn hút!",
    color: "academic",
  },
  {
    id: "exp2",
    author: "Phạm Hữu D.",
    school: "Học sinh Trường THPT Đặng Trần Côn",
    content: "Tham gia giải mã Bật Mã Cổ Thư cùng các bạn rất hào hứng. Tụi em phải phối hợp kiến thức Văn, Sử và sự khéo léo của môn Mỹ thuật mới tạo ra được chiếc túi in họa tiết hoàn chỉnh.",
    color: "wood",
  },
  {
    id: "exp3",
    author: "Giáo viên bộ môn Lịch sử",
    school: "Trường THPT tại Thành phố Huế",
    content: "Các sản phẩm giáo dục STEAM Mộc bản là công cụ hỗ trợ đổi mới phương pháp giảng dạy rất hiệu quả. Học sinh tích cực trao đổi, chủ động tìm tòi thay vì chỉ tiếp thu kiến thức một chiều.",
    color: "gold",
  },
];
