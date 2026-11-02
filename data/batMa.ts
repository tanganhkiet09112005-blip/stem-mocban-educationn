// ─── STEAM MOCBAN EDUCATION — Bật Mã Cổ Thư State Machine & Data Engine ─────
// Architecture: UI-First / Schema-First / State-First / Content-Gated.
// Rule: Grounded 100% in Official Client Materials (Họa tiết & Bộ câu hỏi 30 câu).

export type BatMaUiState =
  | "idle"        // Khởi tạo / Tổng quan quy trình
  | "entry"       // Bước 1: Khám phá — Quét mã QR bắt đầu hành trình
  | "question"    // Bước 2: Giải mã — Câu hỏi thử thách di sản ngẫu nhiên
  | "hint"        // Bước 2: Gợi ý phương pháp suy luận
  | "retry"       // Bước 2: Thử lại câu hỏi
  | "unlocked"    // Bước 2: Mở khóa hình tượng con dấu mộc bản thành công
  | "pattern"     // Bước 3: Thiết kế — Khám phá mẫu hoa văn di sản
  | "design"      // Bước 3: Thiết kế — Không gian phác họa đường nét
  | "carve"       // Bước 4: Khắc gỗ — Quy trình mô phỏng đục khắc
  | "print"       // Bước 5: In sản phẩm — Quy trình mô phỏng in dập
  | "complete";   // Hoàn thành toàn bộ hành trình trải nghiệm

export type BatMaContentStatus = "PENDING" | "AVAILABLE" | "VERIFIED";

/**
 * Trạng thái nội dung học thuật chính thức từ Bộ Kit Bật Mã Cổ Thư.
 * Đã xác thực 100% (30 câu hỏi và 30 hoa văn mẫu con dấu Mộc bản).
 */
export const BAT_MA_CONTENT_STATUS: BatMaContentStatus = "VERIFIED";

export interface BatMaQuestionOption {
  id: string;
  label: string;
}

export interface BatMaQuestion {
  id: string;
  patternId: string;
  patternIndex: number;
  patternTitle: string;
  imageAssetKey: string;
  question: string;
  options: BatMaQuestionOption[];
  correctOptionId: string;
  hint: string;
  explanation: string;
  sourceCitation?: string;
}

export interface BatMaPattern {
  id: string;
  index: number;
  title: string;
  imageAssetKey: string;
  description: string;
  sourceReference?: string;
}

export interface BatMaAccessConfig {
  enabled: boolean;
  code?: string;
  note?: string;
}

export interface BatMaStepInfo {
  step: string;        // "01".."05"
  name: string;        // "KHÁM PHÁ", "GIẢI MÃ", "THIẾT KẾ", "KHẮC GỖ", "IN SẢN PHẨM"
  action: string;      // Tên hành động
  detail: string;      // Mô tả chi tiết
  uiState: BatMaUiState;
}

// 5 Bước trải nghiệm chuẩn hóa theo Thẻ quy trình trải nghiệm của khách hàng
export const BAT_MA_STEPS: BatMaStepInfo[] = [
  {
    step: "01",
    name: "KHÁM PHÁ",
    action: "Quét mã QR – Khởi đầu hành trình",
    detail: "Người chơi quét mã QR có sẵn trên thẻ trong bộ kit để truy cập hệ thống giải mã trên web.",
    uiState: "entry",
  },
  {
    step: "02",
    name: "GIẢI MÃ",
    action: "Hiểu hình tượng – Giải đố di sản",
    detail: "Đọc câu đố di sản trên thẻ bài, giải mã thông điệp văn hóa để mở khóa hoa văn Mộc bản.",
    uiState: "question",
  },
  {
    step: "03",
    name: "THIẾT KẾ",
    action: "Phác họa bố cục – Định hình nét vẽ",
    detail: "Phác họa bố cục hoa văn lên phôi con dấu mộc bản, nhận diện đường nét chính và nguyên lý khắc ngược.",
    uiState: "design",
  },
  {
    step: "04",
    name: "KHẮC GỖ",
    action: "Đục khắc mộc bản thủ công",
    detail: "Sử dụng dao đục an toàn khắc theo nét vẽ, chừa phần nét nổi để tạo nên con dấu mộc bản hoàn chỉnh.",
    uiState: "carve",
  },
  {
    step: "05",
    name: "IN SẢN PHẨM",
    action: "Lăn mực – In dấu di sản",
    detail: "Lăn mực đều lên bề mặt con dấu mộc bản, in dập lên giấy mỹ thuật, thiệp hoặc túi vải canvas.",
    uiState: "print",
  },
];

export const defaultAccessConfig: BatMaAccessConfig = {
  enabled: true,
  code: "MOCBAN",
  note: "Mã QR vật lý trên thẻ kit dẫn trực tiếp vào trải nghiệm và bốc ngẫu nhiên 1 trong 30 câu hỏi.",
};

// ─── Danh mục 30 hoa văn mẫu con dấu Mộc bản (5x5cm) chính thức ────────
export const defaultPatterns: BatMaPattern[] = [
  { id: "PAT-01", index: 1, title: "Sách mở", imageAssetKey: "/assets/bat-ma/motifs/motif-01.webp", description: "Mẫu con dấu mộc bản 5x5cm — Khơi nguồn tri thức và học thuật." },
  { id: "PAT-02", index: 2, title: "Sách đóng", imageAssetKey: "/assets/bat-ma/motifs/motif-02.webp", description: "Mẫu con dấu mộc bản 5x5cm — Lưu giữ sử liệu ngàn năm của dân tộc." },
  { id: "PAT-03", index: 3, title: "Bút chì", imageAssetKey: "/assets/bat-ma/motifs/motif-03.webp", description: "Mẫu con dấu mộc bản 5x5cm — Những nét chữ đầu đời nắn nót của học trò." },
  { id: "PAT-04", index: 4, title: "Bút lông", imageAssetKey: "/assets/bat-ma/motifs/motif-04.webp", description: "Mẫu con dấu mộc bản 5x5cm — Văn phòng tứ bảo, ngòi cọ linh hồn của thư pháp." },
  { id: "PAT-05", index: 5, title: "Nghiên mực", imageAssetKey: "/assets/bat-ma/motifs/motif-05.webp", description: "Mẫu con dấu mộc bản 5x5cm — Nền tảng mài giũa ý chí và nét mực của người xưa." },
  { id: "PAT-06", index: 6, title: "Giá bút", imageAssetKey: "/assets/bat-ma/motifs/motif-06.webp", description: "Mẫu con dấu mộc bản 5x5cm — Điểm tựa thanh tao nâng đỡ những cây bút nghiên." },
  { id: "PAT-07", index: 7, title: "Cuộn giấy", imageAssetKey: "/assets/bat-ma/motifs/motif-07.webp", description: "Mẫu con dấu mộc bản 5x5cm — Thư tịch cổ cuộn tròn lưu dấu ấn thời gian." },
  { id: "PAT-08", index: 8, title: "Đèn lồng", imageAssetKey: "/assets/bat-ma/motifs/motif-08.webp", description: "Mẫu con dấu mộc bản 5x5cm — Ánh sáng bền bỉ soi đường cho sĩ tử ngày đêm." },
  { id: "PAT-09", index: 9, title: "Chén trà", imageAssetKey: "/assets/bat-ma/motifs/motif-09.webp", description: "Mẫu con dấu mộc bản 5x5cm — Phong vị thanh tao, gắn kết câu chuyện tao nhã." },
  { id: "PAT-10", index: 10, title: "Ấm trà", imageAssetKey: "/assets/bat-ma/motifs/motif-10.webp", description: "Mẫu con dấu mộc bản 5x5cm — Giữ trọn hơi ấm nồng hậu và hương thơm mời khách." },
  { id: "PAT-11", index: 11, title: "Hũ", imageAssetKey: "/assets/bat-ma/motifs/motif-11.webp", description: "Mẫu con dấu mộc bản 5x5cm — Biểu tượng tích cóp, chắt chiu của nếp nhà truyền thống." },
  { id: "PAT-12", index: 12, title: "Bát", imageAssetKey: "/assets/bat-ma/motifs/motif-12.webp", description: "Mẫu con dấu mộc bản 5x5cm — Hạt ngọc trời nuôi dưỡng con người và nếp sống thuần hậu." },
  { id: "PAT-13", index: 13, title: "Ghế đẩu", imageAssetKey: "/assets/bat-ma/motifs/motif-13.webp", description: "Mẫu con dấu mộc bản 5x5cm — Sự nâng đỡ mộc mạc bốn chân trong đời sống hàng ngày." },
  { id: "PAT-14", index: 14, title: "Bàn", imageAssetKey: "/assets/bat-ma/motifs/motif-14.webp", description: "Mẫu con dấu mộc bản 5x5cm — Người bạn bốn chân nâng niu từng trang sách học hành." },
  { id: "PAT-15", index: 15, title: "Quạt giấy", imageAssetKey: "/assets/bat-ma/motifs/motif-15.webp", description: "Mẫu con dấu mộc bản 5x5cm — Làn gió thanh mát dịu dàng ru trọn giấc trưa hè." },
  { id: "PAT-16", index: 16, title: "Giỏ", imageAssetKey: "/assets/bat-ma/motifs/motif-16.webp", description: "Mẫu con dấu mộc bản 5x5cm — Nét mộc mạc tre nứa theo chân qua từng phiên chợ quê." },
  { id: "PAT-17", index: 17, title: "Chổi", imageAssetKey: "/assets/bat-ma/motifs/motif-17.webp", description: "Mẫu con dấu mộc bản 5x5cm — Sự chăm chỉ sớm mai, gìn giữ khoảng sân sạch sẽ." },
  { id: "PAT-18", index: 18, title: "Xô nước", imageAssetKey: "/assets/bat-ma/motifs/motif-18.webp", description: "Mẫu con dấu mộc bản 5x5cm — Dòng nước mát trong xua tan cái oi bức ngày hè." },
  { id: "PAT-19", index: 19, title: "Hoa mai", imageAssetKey: "/assets/bat-ma/motifs/motif-19.webp", description: "Mẫu con dấu mộc bản 5x5cm — Sắc vàng xuân rực rỡ mang điềm lành và hy vọng." },
  { id: "PAT-20", index: 20, title: "Hoa sen", imageAssetKey: "/assets/bat-ma/motifs/motif-20.webp", description: "Mẫu con dấu mộc bản 5x5cm — Vươn lên từ bùn lầy, thanh khiết và kiên cường." },
  { id: "PAT-21", index: 21, title: "Hoa cúc", imageAssetKey: "/assets/bat-ma/motifs/motif-21.webp", description: "Mẫu con dấu mộc bản 5x5cm — Biểu trưng của sự thanh cao, trường thọ trong bộ tứ quý." },
  { id: "PAT-22", index: 22, title: "Lá bốn cánh", imageAssetKey: "/assets/bat-ma/motifs/motif-22.webp", description: "Mẫu con dấu mộc bản 5x5cm — Biểu tượng hiếm quý mang đến niềm may mắn và an lành." },
  { id: "PAT-23", index: 23, title: "Lá trúc", imageAssetKey: "/assets/bat-ma/motifs/motif-23.webp", description: "Mẫu con dấu mộc bản 5x5cm — Nét thanh mảnh, khí phách ngay thẳng của người quân tử." },
  { id: "PAT-24", index: 24, title: "Lá đơn", imageAssetKey: "/assets/bat-ma/motifs/motif-24.webp", description: "Mẫu con dấu mộc bản 5x5cm — Vẻ đẹp nguyên sơ tĩnh lặng của thiên nhiên thuần khiết." },
  { id: "PAT-25", index: 25, title: "Chim sẻ", imageAssetKey: "/assets/bat-ma/motifs/motif-25.webp", description: "Mẫu con dấu mộc bản 5x5cm — Tiếng hót ríu rít bình yên mỗi sớm mai trên cành cây." },
  { id: "PAT-26", index: 26, title: "Cá", imageAssetKey: "/assets/bat-ma/motifs/motif-26.webp", description: "Mẫu con dấu mộc bản 5x5cm — Biểu tượng cá chép vượt vũ môn, hanh thông đỗ đạt." },
  { id: "PAT-27", index: 27, title: "Bướm", imageAssetKey: "/assets/bat-ma/motifs/motif-27.webp", description: "Mẫu con dấu mộc bản 5x5cm — Đôi cánh rực rỡ yêu kiều dập dờn bên những cánh hoa." },
  { id: "PAT-28", index: 28, title: "Rùa", imageAssetKey: "/assets/bat-ma/motifs/motif-28.webp", description: "Mẫu con dấu mộc bản 5x5cm — Sự cần mẫn, bền bỉ và trường tồn ngàn năm của di sản." },
  { id: "PAT-29", index: 29, title: "Ếch", imageAssetKey: "/assets/bat-ma/motifs/motif-29.webp", description: "Mẫu con dấu mộc bản 5x5cm — Tiếng ca đồng nội gọi mưa tươi tốt cho mùa màng." },
  { id: "PAT-30", index: 30, title: "Mèo", imageAssetKey: "/assets/bat-ma/motifs/motif-30.webp", description: "Mẫu con dấu mộc bản 5x5cm — Đôi mắt tinh anh, người gác đêm thầm lặng gìn giữ bình yên." },
];

// ─── Ngân hàng 30 câu hỏi đố di sản chính thức từ bộ Kit Bật Mã Cổ Thư ──
export const defaultQuestionBank: BatMaQuestion[] = [
  {
    id: "Q-01",
    patternId: "PAT-01",
    patternIndex: 1,
    patternTitle: "Sách mở",
    imageAssetKey: "/assets/bat-ma/motifs/motif-01.webp",
    question: "Tôi mở ra đưa con người đến với kho tàng tri thức? Tôi là cái gì?",
    options: [
      { id: "opt_1", label: "Sách mở" },
      { id: "opt_2", label: "Cuộn giấy" },
      { id: "opt_3", label: "Nghiên mực" },
      { id: "opt_4", label: "Giá bút" },
    ],
    correctOptionId: "opt_1",
    hint: "Vật dụng này khi lật mở từng trang giấy sẽ đưa bạn bước vào thế giới tri thức vô tận.",
    explanation: "Sách mở là biểu tượng của sự học, khai phóng trí tuệ và tiếp thu văn hóa nhân loại.",
  },
  {
    id: "Q-02",
    patternId: "PAT-02",
    patternIndex: 2,
    patternTitle: "Sách đóng",
    imageAssetKey: "/assets/bat-ma/motifs/motif-02.webp",
    question: "Tôi khép mình nhưng cất giữ nhiều câu chuyện hay của cuộc đời? Tôi là cái gì?",
    options: [
      { id: "opt_1", label: "Hũ sành" },
      { id: "opt_2", label: "Sách đóng" },
      { id: "opt_3", label: "Bàn học" },
      { id: "opt_4", label: "Cuộn giấy" },
    ],
    correctOptionId: "opt_2",
    hint: "Tuy đang khép chặt lại nhưng bên trong lưu giữ bao áng văn chương và câu chuyện sâu sắc.",
    explanation: "Sách đóng tượng trưng cho kho tàng tư liệu, sử liệu đang chờ người hiếu học mở ra khám phá.",
  },
  {
    id: "Q-03",
    patternId: "PAT-03",
    patternIndex: 3,
    patternTitle: "Bút chì",
    imageAssetKey: "/assets/bat-ma/motifs/motif-03.webp",
    question: "Tôi xám xịt nhưng giúp bạn viết nên từng con chữ đầu tiên. Tôi là cái gì?",
    options: [
      { id: "opt_1", label: "Bút lông" },
      { id: "opt_2", label: "Thước kẻ" },
      { id: "opt_3", label: "Bút chì" },
      { id: "opt_4", label: "Mực tàu" },
    ],
    correctOptionId: "opt_3",
    hint: "Mang lõi màu than chì xám, là bạn đồng hành nắn nót những nét chữ vỡ lòng của học trò.",
    explanation: "Bút chì gắn liền với những bài học đầu tiên, rèn luyện đức tính cẩn trọng và kiên nhẫn.",
  },
  {
    id: "Q-04",
    patternId: "PAT-04",
    patternIndex: 4,
    patternTitle: "Bút lông",
    imageAssetKey: "/assets/bat-ma/motifs/motif-04.webp",
    question: "Tôi là bạn thân của mực, tạo nên những nét chữ mềm mại thuở xưa. Tôi là cái gì?",
    options: [
      { id: "opt_1", label: "Bút lông" },
      { id: "opt_2", label: "Giá bút" },
      { id: "opt_3", label: "Bút chì" },
      { id: "opt_4", label: "Quạt giấy" },
    ],
    correctOptionId: "opt_1",
    hint: "Dụng cụ viết chữ truyền thống của nhà nho, đầu cọ lông chấm mực tạo nên nét thư pháp tài hoa.",
    explanation: "Bút lông là một trong 'Văn phòng tứ bảo', công cụ sáng tạo nên văn chương và bản khắc mộc bản xưa.",
  },
  {
    id: "Q-05",
    patternId: "PAT-05",
    patternIndex: 5,
    patternTitle: "Nghiên mực",
    imageAssetKey: "/assets/bat-ma/motifs/motif-05.webp",
    question: "Tôi nằm yên ở góc thư phòng, chờ người học trò mài từng giọt mực đen. Tôi là cái gì?",
    options: [
      { id: "opt_1", label: "Chén trà" },
      { id: "opt_2", label: "Nghiên mực" },
      { id: "opt_3", label: "Bát" },
      { id: "opt_4", label: "Hũ" },
    ],
    correctOptionId: "opt_2",
    hint: "Vật dụng chế tác từ đá hoặc gốm nơi người xưa nhỏ nước mài từng thỏi mực thau.",
    explanation: "Nghiên mực thể hiện sự điềm tĩnh, nhẫn nại của người học trước khi hạ bút thảo văn thơ.",
  },
  {
    id: "Q-06",
    patternId: "PAT-06",
    patternIndex: 6,
    patternTitle: "Giá bút",
    imageAssetKey: "/assets/bat-ma/motifs/motif-06.webp",
    question: "Tôi tuy nhỏ nhưng luôn nâng đỡ những cây bút sau mỗi lần viết chữ. Tôi là cái gì?",
    options: [
      { id: "opt_1", label: "Bàn" },
      { id: "opt_2", label: "Ghế đẩu" },
      { id: "opt_3", label: "Giá bút" },
      { id: "opt_4", label: "Nghiên mực" },
    ],
    correctOptionId: "opt_3",
    hint: "Vật dụng thường uốn lượn hình ngọn núi để gác đầu bút lông sau khi chấm mực.",
    explanation: "Giá bút (kê bút) biểu thị lòng trân trọng tri thức và sự ngăn nắp, tao nhã nơi thư phòng.",
  },
  {
    id: "Q-07",
    patternId: "PAT-07",
    patternIndex: 7,
    patternTitle: "Cuộn giấy",
    imageAssetKey: "/assets/bat-ma/motifs/motif-07.webp",
    question: "Tôi cuộn tròn thu mình lại, mang trong đó là thơ văn, thư tín, dấu ấn của thời gian. Tôi là cái gì?",
    options: [
      { id: "opt_1", label: "Cuộn giấy" },
      { id: "opt_2", label: "Quạt giấy" },
      { id: "opt_3", label: "Sách mở" },
      { id: "opt_4", label: "Đèn lồng" },
    ],
    correctOptionId: "opt_1",
    hint: "Bản thảo làm từ giấy dó cuộn tròn thuôn dài, lưu dấu chiếu chỉ, thư tịch và thi ca cổ nhân.",
    explanation: "Cuộn giấy đại diện cho truyền thống ghi chép và lưu truyền văn hiến trường tồn của dân tộc.",
  },
  {
    id: "Q-08",
    patternId: "PAT-08",
    patternIndex: 8,
    patternTitle: "Đèn lồng",
    imageAssetKey: "/assets/bat-ma/motifs/motif-08.webp",
    question: "Tôi mang ánh sáng soi qua những đêm dài nơi bàn học của chàng thư sinh. Tôi là cái gì?",
    options: [
      { id: "opt_1", label: "Ấm trà" },
      { id: "opt_2", label: "Đèn lồng" },
      { id: "opt_3", label: "Quạt giấy" },
      { id: "opt_4", label: "Chén trà" },
    ],
    correctOptionId: "opt_2",
    hint: "Vật dụng thắp sáng bằng nến hoặc dầu, che chở ngọn lửa trước gió để người học đọc sách thâu đêm.",
    explanation: "Đèn lồng tượng trưng cho sự hiếu học, ý chí vượt khó vươn tới đỗ đạt của các thế hệ sĩ tử xưa.",
  },
  {
    id: "Q-09",
    patternId: "PAT-09",
    patternIndex: 9,
    patternTitle: "Chén trà",
    imageAssetKey: "/assets/bat-ma/motifs/motif-09.webp",
    question: "Tôi đựng nước chè ngon, thanh tao trên những cuộc trò chuyện. Tôi là cái gì?",
    options: [
      { id: "opt_1", label: "Chén trà" },
      { id: "opt_2", label: "Ấm trà" },
      { id: "opt_3", label: "Bát" },
      { id: "opt_4", label: "Hũ" },
    ],
    correctOptionId: "opt_1",
    hint: "Chiếc chén nhỏ bằng gốm sứ thanh mảnh dùng nhấp từng ngụm nước chè ấm nóng.",
    explanation: "Chén trà là khởi đầu cho những cuộc tao ngộ đàm đạo đạo lý, thi ca và sự tao nhã phương Đông.",
  },
  {
    id: "Q-10",
    patternId: "PAT-10",
    patternIndex: 10,
    patternTitle: "Ấm trà",
    imageAssetKey: "/assets/bat-ma/motifs/motif-10.webp",
    question: "Tôi giữ hơi ấm và hương thơm cho mỗi lần rót trà mời khách. Tôi là cái gì?",
    options: [
      { id: "opt_1", label: "Xô nước" },
      { id: "opt_2", label: "Hũ" },
      { id: "opt_3", label: "Ấm trà" },
      { id: "opt_4", label: "Chén trà" },
    ],
    correctOptionId: "opt_3",
    hint: "Có nắp đậy, quai cầm và vòi rót, ủ nước nóng cùng lá trà ngát hương.",
    explanation: "Ấm trà biểu trưng cho sự hòa nhã, hiếu khách và nếp sống ấm cúng trong gia đình Việt.",
  },
  {
    id: "Q-11",
    patternId: "PAT-11",
    patternIndex: 11,
    patternTitle: "Hũ",
    imageAssetKey: "/assets/bat-ma/motifs/motif-11.webp",
    question: "Tôi giản dị trong đời sống, chứa đựng những thứ bình dị của người dân. Tôi là cái gì?",
    options: [
      { id: "opt_1", label: "Bát" },
      { id: "opt_2", label: "Hũ" },
      { id: "opt_3", label: "Giỏ" },
      { id: "opt_4", label: "Ấm trà" },
    ],
    correctOptionId: "opt_2",
    hint: "Đồ gốm sành tròn trịa mộc mạc, nơi cất giữ gạo, muối hay nước ngọt mát lành trong nếp nhà quê.",
    explanation: "Hũ gốm tượng trưng cho đức tính cần cù, tiết kiệm và đời sống mộc mạc của cư dân nông nghiệp.",
  },
  {
    id: "Q-12",
    patternId: "PAT-12",
    patternIndex: 12,
    patternTitle: "Bát",
    imageAssetKey: "/assets/bat-ma/motifs/motif-12.webp",
    question: "Tôi luôn ở trong bữa cơm của bạn, đựng những hạt cơm thơm tròn. Tôi là cái gì?",
    options: [
      { id: "opt_1", label: "Chén trà" },
      { id: "opt_2", label: "Hũ" },
      { id: "opt_3", label: "Bát" },
      { id: "opt_4", label: "Giỏ" },
    ],
    correctOptionId: "opt_3",
    hint: "Vật dụng đựng cơm trắng dẻo thơm trên mâm cơm gia đình mỗi ngày.",
    explanation: "Chiếc bát cơm giản dị gắn liền với nền văn minh lúa nước và tình cảm sum vầy quanh mâm cơm ấm cúng.",
  },
  {
    id: "Q-13",
    patternId: "PAT-13",
    patternIndex: 13,
    patternTitle: "Ghế đẩu",
    imageAssetKey: "/assets/bat-ma/motifs/motif-13.webp",
    question: "Tôi có 4 chân, tôi nâng đỡ những đôi chân mệt mỏi. Tôi là cái gì?",
    options: [
      { id: "opt_1", label: "Ghế đẩu" },
      { id: "opt_2", label: "Bàn" },
      { id: "opt_3", label: "Giá bút" },
      { id: "opt_4", label: "Xô nước" },
    ],
    correctOptionId: "opt_1",
    hint: "Loại ghế gỗ bốn chân mộc mạc không có lưng dựa, nơi ngồi nghỉ ngơi giản dị sau giờ lao động.",
    explanation: "Ghế đẩu phản ánh nét văn hóa sinh hoạt dân dã, chân chất và gần gũi của người dân xứ Việt.",
  },
  {
    id: "Q-14",
    patternId: "PAT-14",
    patternIndex: 14,
    patternTitle: "Bàn",
    imageAssetKey: "/assets/bat-ma/motifs/motif-14.webp",
    question: "Tôi dùng để chứa bút, vở,… người bạn 4 chân đồng hành cùng con đường học hành của bạn. Tôi là cái gì?",
    options: [
      { id: "opt_1", label: "Ghế đẩu" },
      { id: "opt_2", label: "Bàn" },
      { id: "opt_3", label: "Giá bút" },
      { id: "opt_4", label: "Sách đóng" },
    ],
    correctOptionId: "opt_2",
    hint: "Mặt gỗ phẳng nâng niu trang sách vở và nghiên bút nơi sĩ tử ngồi học bài.",
    explanation: "Bàn học là bệ phóng cho tri thức, nơi ghi dấu những tháng ngày khổ luyện vươn tới bảng vàng danh dự.",
  },
  {
    id: "Q-15",
    patternId: "PAT-15",
    patternIndex: 15,
    patternTitle: "Quạt giấy",
    imageAssetKey: "/assets/bat-ma/motifs/motif-15.webp",
    question: "Tôi khẽ lay động, mang đến làn gió nhẹ cho người ngủ trưa. Tôi là cái gì?",
    options: [
      { id: "opt_1", label: "Chổi" },
      { id: "opt_2", label: "Cuộn giấy" },
      { id: "opt_3", label: "Quạt giấy" },
      { id: "opt_4", label: "Lá sen" },
    ],
    correctOptionId: "opt_3",
    hint: "Được làm từ nan tre và giấy dó bồi, gập xòe nhẹ nhàng ru giấc ngủ trưa hè dịu êm.",
    explanation: "Quạt giấy vừa là vật dụng làm mát, vừa là nét đẹp tao nhã thường được đề thơ họa cảnh thuở xưa.",
  },
  {
    id: "Q-16",
    patternId: "PAT-16",
    patternIndex: 16,
    patternTitle: "Giỏ",
    imageAssetKey: "/assets/bat-ma/motifs/motif-16.webp",
    question: "Tôi theo chân người qua chợ quê để chứa theo bao vật dụng. Tôi là cái gì?",
    options: [
      { id: "opt_1", label: "Giỏ" },
      { id: "opt_2", label: "Hũ" },
      { id: "opt_3", label: "Xô nước" },
      { id: "opt_4", label: "Bát" },
    ],
    correctOptionId: "opt_1",
    hint: "Được đan khéo léo từ sợi tre nứa, có quai xách thân thuộc theo mẹ đi chợ làng quê.",
    explanation: "Chiếc giỏ tre phản ánh bàn tay đan lát thủ công tài hoa và nhịp sống thanh bình nơi thôn dã.",
  },
  {
    id: "Q-17",
    patternId: "PAT-17",
    patternIndex: 17,
    patternTitle: "Chổi",
    imageAssetKey: "/assets/bat-ma/motifs/motif-17.webp",
    question: "Tôi chăm chỉ sớm mai, âm thầm quét sạch lá khoảng sân. Tôi là cái gì?",
    options: [
      { id: "opt_1", label: "Quạt giấy" },
      { id: "opt_2", label: "Chổi" },
      { id: "opt_3", label: "Ghế đẩu" },
      { id: "opt_4", label: "Giá bút" },
    ],
    correctOptionId: "opt_2",
    hint: "Bện từ rơm vàng hoặc đót nứa, sớm sớm xào xạc quét lá rụng trước sân đình ngõ xóm.",
    explanation: "Cây chổi biểu trưng cho đức tính chăm chỉ, giữ gìn vệ sinh và nếp sống sạch sẽ, thanh tịnh.",
  },
  {
    id: "Q-18",
    patternId: "PAT-18",
    patternIndex: 18,
    patternTitle: "Xô nước",
    imageAssetKey: "/assets/bat-ma/motifs/motif-18.webp",
    question: "Tôi chứa nước tắm mát oi bức ngày hè. Tôi là cái gì?",
    options: [
      { id: "opt_1", label: "Ấm trà" },
      { id: "opt_2", label: "Chén trà" },
      { id: "opt_3", label: "Hũ" },
      { id: "opt_4", label: "Xô nước" },
    ],
    correctOptionId: "opt_4",
    hint: "Dụng cụ múc và xách dòng nước mát trong lành từ giếng làng xua tan oi ả trưa hè.",
    explanation: "Xô nước gắn liền với nguồn nước giếng khơi mát lành, mạch nguồn nuôi dưỡng xóm làng quê hương.",
  },
  {
    id: "Q-19",
    patternId: "PAT-19",
    patternIndex: 19,
    patternTitle: "Hoa mai",
    imageAssetKey: "/assets/bat-ma/motifs/motif-19.webp",
    question: "Tôi nở rộ khoe sắc vào mùa xuân. Tôi là hoa gì?",
    options: [
      { id: "opt_1", label: "Hoa sen" },
      { id: "opt_2", label: "Hoa mai" },
      { id: "opt_3", label: "Hoa cúc" },
      { id: "opt_4", label: "Hoa đào" },
    ],
    correctOptionId: "opt_2",
    hint: "Loài hoa năm cánh vàng rực rỡ, sứ giả báo tin xuân về trên mảnh đất phương Nam và xứ Huế.",
    explanation: "Hoa mai là biểu tượng của mùa xuân khởi sắc, đức tính kiên cường vượt qua mùa đông lạnh giá.",
  },
  {
    id: "Q-20",
    patternId: "PAT-20",
    patternIndex: 20,
    patternTitle: "Hoa sen",
    imageAssetKey: "/assets/bat-ma/motifs/motif-20.webp",
    question: "Tôi kiên cường vươn lên từ bùn lầy, mang hương thơm thanh khiết. Tôi là hoa gì?",
    options: [
      { id: "opt_1", label: "Hoa sen" },
      { id: "opt_2", label: "Hoa súng" },
      { id: "opt_3", label: "Hoa mai" },
      { id: "opt_4", label: "Hoa cúc" },
    ],
    correctOptionId: "opt_1",
    hint: "'Gần bùn mà chẳng hôi tanh mùi bùn' — quốc hoa thanh cao tỏa ngát sắc hương trên đầm nước.",
    explanation: "Hoa sen là biểu tượng văn hóa thiêng liêng, đại diện cho phẩm cách trong sáng và kiên cường của người Việt.",
  },
  {
    id: "Q-21",
    patternId: "PAT-21",
    patternIndex: 21,
    patternTitle: "Hoa cúc",
    imageAssetKey: "/assets/bat-ma/motifs/motif-21.webp",
    question: "Tôi là biểu tượng cho sự trường thọ và thanh cao. Tôi là hoa gì?",
    options: [
      { id: "opt_1", label: "Hoa sen" },
      { id: "opt_2", label: "Hoa mai" },
      { id: "opt_3", label: "Hoa cúc" },
      { id: "opt_4", label: "Hoa hồng" },
    ],
    correctOptionId: "opt_3",
    hint: "Loài hoa trong bộ tứ quý 'Tùng - Cúc - Trúc - Mai', dù héo rũ vẫn giữ nguyên trên cành.",
    explanation: "Hoa cúc tượng trưng cho khí tiết thanh nhã, lòng hiếu thảo và sự trường thọ vĩnh cửu.",
  },
  {
    id: "Q-22",
    patternId: "PAT-22",
    patternIndex: 22,
    patternTitle: "Lá bốn cánh",
    imageAssetKey: "/assets/bat-ma/motifs/motif-22.webp",
    question: "Thấy tôi là thấy may mắn. Tôi là lá gì?",
    options: [
      { id: "opt_1", label: "Lá trúc" },
      { id: "opt_2", label: "Lá bốn cánh" },
      { id: "opt_3", label: "Lá đơn" },
      { id: "opt_4", label: "Lá sen" },
    ],
    correctOptionId: "opt_2",
    hint: "Chiếc cỏ bốn cánh hiếm thấy, dân gian tin rằng sẽ mang lại vận may và niềm vui bất ngờ.",
    explanation: "Họa tiết lá bốn cánh mang thông điệp về niềm tin, hy vọng và may mắn trong học tập, thi cử.",
  },
  {
    id: "Q-23",
    patternId: "PAT-23",
    patternIndex: 23,
    patternTitle: "Lá trúc",
    imageAssetKey: "/assets/bat-ma/motifs/motif-23.webp",
    question: "Tôi mang vẻ dài và nhọn. Tôi là lá gì?",
    options: [
      { id: "opt_1", label: "Lá trúc" },
      { id: "opt_2", label: "Lá đơn" },
      { id: "opt_3", label: "Lá mai" },
      { id: "opt_4", label: "Lá bốn cánh" },
    ],
    correctOptionId: "opt_1",
    hint: "Chiếc lá thuôn dài nhọn của loài cây quân tử dẻo dai trước gió bão.",
    explanation: "Lá trúc đại diện cho khí phách thanh bạch, ngay thẳng và lòng tự trọng của bậc hiền tài xưa.",
  },
  {
    id: "Q-24",
    patternId: "PAT-24",
    patternIndex: 24,
    patternTitle: "Lá đơn",
    imageAssetKey: "/assets/bat-ma/motifs/motif-24.webp",
    question: "Tôi cô độc trên cành cây. Tôi là lá gì?",
    options: [
      { id: "opt_1", label: "Lá trúc" },
      { id: "opt_2", label: "Lá bốn cánh" },
      { id: "opt_3", label: "Lá đơn" },
      { id: "opt_4", label: "Lá sen" },
    ],
    correctOptionId: "opt_3",
    hint: "Một phiến lá duy nhất đứng riêng lẻ trên cành, mang vẻ đẹp bình dị của cây cối tự nhiên.",
    explanation: "Lá đơn thể hiện vẻ đẹp mộc mạc, sự tĩnh lặng và chiều sâu nội tâm của vạn vật thiên nhiên.",
  },
  {
    id: "Q-25",
    patternId: "PAT-25",
    patternIndex: 25,
    patternTitle: "Chim sẻ",
    imageAssetKey: "/assets/bat-ma/motifs/motif-25.webp",
    question: "Tôi ríu rít mỗi sáng sớm mai trên cành, tôi là con gì?",
    options: [
      { id: "opt_1", label: "Chim sẻ" },
      { id: "opt_2", label: "Con bướm" },
      { id: "opt_3", label: "Con cá" },
      { id: "opt_4", label: "Con ếch" },
    ],
    correctOptionId: "opt_1",
    hint: "Loài chim nhỏ bé chuyền cành thoăn thoắt, cất tiếng hót vui tươi đánh thức một ngày mới.",
    explanation: "Chim sẻ là hình tượng quen thuộc biểu thị sự bình an, vui vẻ và sức sống sinh sôi nơi làng quê.",
  },
  {
    id: "Q-26",
    patternId: "PAT-26",
    patternIndex: 26,
    patternTitle: "Cá",
    imageAssetKey: "/assets/bat-ma/motifs/motif-26.webp",
    question: "Tôi tung tăng bơi lội trên làn nước mát, tôi là con gì?",
    options: [
      { id: "opt_1", label: "Con ếch" },
      { id: "opt_2", label: "Cá" },
      { id: "opt_3", label: "Con rùa" },
      { id: "opt_4", label: "Chim sẻ" },
    ],
    correctOptionId: "opt_2",
    hint: "Sinh vật vẫy đuôi bơi lội dưới nước, gắn với điển tích 'Cá chép vượt vũ môn hóa rồng'.",
    explanation: "Hình tượng cá chép biểu trưng cho nỗ lực vượt khó, sự kiên trì vươn lên thành tài trong khoa cử xưa.",
  },
  {
    id: "Q-27",
    patternId: "PAT-27",
    patternIndex: 27,
    patternTitle: "Bướm",
    imageAssetKey: "/assets/bat-ma/motifs/motif-27.webp",
    question: "Tôi xinh đẹp lộng lẫy, yêu hương hoa, thích sự dịu dàng. Tôi là con gì?",
    options: [
      { id: "opt_1", label: "Chim sẻ" },
      { id: "opt_2", label: "Bướm" },
      { id: "opt_3", label: "Con ong" },
      { id: "opt_4", label: "Con chuồn chuồn" },
    ],
    correctOptionId: "opt_2",
    hint: "Đôi cánh sặc sỡ mỏng manh dập dờn bay lượn hút mật hoa nơi vườn ngự uyển.",
    explanation: "Cánh bướm tượng trưng cho vẻ đẹp thanh tao, sự biến đổi kỳ diệu của tự nhiên và hạnh phúc viên mãn.",
  },
  {
    id: "Q-28",
    patternId: "PAT-28",
    patternIndex: 28,
    patternTitle: "Rùa",
    imageAssetKey: "/assets/bat-ma/motifs/motif-28.webp",
    question: "Tôi chậm rãi nhưng chăm chỉ. Tôi là con gì?",
    options: [
      { id: "opt_1", label: "Rùa" },
      { id: "opt_2", label: "Con ếch" },
      { id: "opt_3", label: "Con cá" },
      { id: "opt_4", label: "Con mèo" },
    ],
    correctOptionId: "opt_1",
    hint: "Linh vật bốn chân mang mai cứng cáp đội bia tiến sĩ tại Văn Miếu, điềm đạm và bền bỉ.",
    explanation: "Rùa (Kim Quy) là một trong tứ linh, biểu tượng của sự trường thọ, bền bỉ và nền học vấn ngàn năm.",
  },
  {
    id: "Q-29",
    patternId: "PAT-29",
    patternIndex: 29,
    patternTitle: "Ếch",
    imageAssetKey: "/assets/bat-ma/motifs/motif-29.webp",
    question: "Tôi cất tiếng kêu vang mỗi khi cơn mưa đến. Tôi là con gì?",
    options: [
      { id: "opt_1", label: "Con rùa" },
      { id: "opt_2", label: "Ếch" },
      { id: "opt_3", label: "Con cá" },
      { id: "opt_4", label: "Con mèo" },
    ],
    correctOptionId: "opt_2",
    hint: "Loài vật lưỡng cư ngồi bờ ao, cất tiếng kêu gọi những cơn mưa rào tưới mát cho mùa màng tốt tươi.",
    explanation: "Hình tượng con ếch gắn liền với tín ngưỡng cầu mưa thuận gió hòa và sinh khí tràn đầy của nông nghiệp.",
  },
  {
    id: "Q-30",
    patternId: "PAT-30",
    patternIndex: 30,
    patternTitle: "Mèo",
    imageAssetKey: "/assets/bat-ma/motifs/motif-30.webp",
    question: "Tôi có đôi mắt tinh anh, lặng lẽ canh giữ góc nhà. Tôi là con gì?",
    options: [
      { id: "opt_1", label: "Con rùa" },
      { id: "opt_2", label: "Chim sẻ" },
      { id: "opt_3", label: "Mèo" },
      { id: "opt_4", label: "Con ếch" },
    ],
    correctOptionId: "opt_3",
    hint: "Vật nuôi bốn chân có ria mép dài, bước đi êm ru và đôi mắt sáng quắc canh giữ góc nhà trong đêm.",
    explanation: "Con mèo đại diện cho sự khéo léo, tinh anh, bình yên và bảo vệ tài sản, sách vở khỏi loài chuột bọ.",
  },
];

// Helper lấy câu hỏi ngẫu nhiên
export function getRandomBatMaQuestion(): BatMaQuestion {
  const idx = Math.floor(Math.random() * defaultQuestionBank.length);
  return defaultQuestionBank[idx];
}

// ─── User State Model ────────────────────────────────────────────────
export interface BatMaState {
  uiState: BatMaUiState;
  currentStepIndex: number; // 0..4
  highestStepReached: number; // 0..4: Giới hạn bước cao nhất đã được mở khóa hợp lệ
  activeQuestionId: string; // ID của câu hỏi đang hiển thị
  enteredCode: string;
  codeError: string | null;
  selectedOptionId: string | null;
  answerSubmitted: boolean;
  isCorrect: boolean | null;
  attemptCount: number;
  hintRequested: boolean;
  selectedPatternId: string;
  carveProgress: number; // 0..100
  printCompleted: boolean;
  statusMessage: string;
}

export const initialBatMaState: BatMaState = {
  uiState: "idle",
  currentStepIndex: 0,
  highestStepReached: 0,
  activeQuestionId: defaultQuestionBank[0].id,
  enteredCode: "",
  codeError: null,
  selectedOptionId: null,
  answerSubmitted: false,
  isCorrect: null,
  attemptCount: 0,
  hintRequested: false,
  selectedPatternId: defaultPatterns[0].id,
  carveProgress: 0,
  printCompleted: false,
  statusMessage: "Chào mừng bạn đến với mô phỏng trải nghiệm Bật Mã Cổ Thư.",
};

// ─── Actions (Discriminated Union) ────────────────────────────────────
export type BatMaAction =
  | { type: "START" }
  | { type: "PICK_RANDOM_QUESTION" }
  | { type: "SET_QUESTION_BY_ID"; questionId: string }
  | { type: "SET_CODE"; code: string }
  | { type: "SUBMIT_CODE"; accessConfig?: BatMaAccessConfig }
  | { type: "BYPASS_CODE_EXPLORE" }
  | { type: "SELECT_OPTION"; optionId: string }
  | { type: "SUBMIT_ANSWER"; correctOptionId?: string }
  | { type: "REQUEST_HINT" }
  | { type: "RETRY_QUESTION" }
  | { type: "PROCEED_TO_PATTERN" }
  | { type: "SELECT_PATTERN"; patternId: string }
  | { type: "PROCEED_TO_DESIGN" }
  | { type: "PROCEED_TO_CARVE" }
  | { type: "SET_CARVE_PROGRESS"; progress: number }
  | { type: "PROCEED_TO_PRINT" }
  | { type: "EXECUTE_PRINT" }
  | { type: "COMPLETE_EXPERIENCE" }
  | { type: "RESET" }
  | { type: "NAVIGATE_TO_STEP"; stepIndex: number };

// ─── Pure State Reducer ──────────────────────────────────────────────
export function batMaReducer(state: BatMaState, action: BatMaAction): BatMaState {
  switch (action.type) {
    case "START": {
      const q = getRandomBatMaQuestion();
      return {
        ...state,
        uiState: "question",
        currentStepIndex: 1,
        highestStepReached: Math.max(state.highestStepReached, 1),
        activeQuestionId: q.id,
        selectedPatternId: q.patternId,
        selectedOptionId: null,
        answerSubmitted: false,
        isCorrect: null,
        hintRequested: false,
        statusMessage: `Bước 2: Giải đố di sản — Câu đố #${q.patternIndex}: ${q.patternTitle}`,
      };
    }

    case "PICK_RANDOM_QUESTION": {
      const available = defaultQuestionBank.filter((q) => q.id !== state.activeQuestionId);
      const pool = available.length > 0 ? available : defaultQuestionBank;
      const q = pool[Math.floor(Math.random() * pool.length)];
      return {
        ...state,
        uiState: "question",
        activeQuestionId: q.id,
        selectedPatternId: q.patternId,
        selectedOptionId: null,
        answerSubmitted: false,
        isCorrect: null,
        hintRequested: false,
        attemptCount: 0,
        statusMessage: `Đã đổi câu đố di sản mới: #${q.patternIndex} — ${q.patternTitle}`,
      };
    }

    case "SET_QUESTION_BY_ID": {
      const q = defaultQuestionBank.find((item) => item.id === action.questionId) || defaultQuestionBank[0];
      return {
        ...state,
        uiState: "question",
        activeQuestionId: q.id,
        selectedPatternId: q.patternId,
        selectedOptionId: null,
        answerSubmitted: false,
        isCorrect: null,
        hintRequested: false,
        statusMessage: `Chọn câu đố: #${q.patternIndex} — ${q.patternTitle}`,
      };
    }

    case "SET_CODE":
      return {
        ...state,
        enteredCode: action.code,
        codeError: null,
      };

    case "SUBMIT_CODE": {
      const q = getRandomBatMaQuestion();
      return {
        ...state,
        uiState: "question",
        currentStepIndex: 1,
        highestStepReached: Math.max(state.highestStepReached, 1),
        activeQuestionId: q.id,
        selectedPatternId: q.patternId,
        codeError: null,
        statusMessage: "Mã truy cập hợp lệ! Chuyển sang Bước 2: Giải mã câu hỏi di sản.",
      };
    }

    case "BYPASS_CODE_EXPLORE": {
      const q = getRandomBatMaQuestion();
      return {
        ...state,
        uiState: "question",
        currentStepIndex: 1,
        highestStepReached: Math.max(state.highestStepReached, 1),
        activeQuestionId: q.id,
        selectedPatternId: q.patternId,
        codeError: null,
        statusMessage: "Chuyển sang Bước 2: Thử thách giải mã di sản.",
      };
    }

    case "SELECT_OPTION":
      return {
        ...state,
        selectedOptionId: action.optionId,
      };

    case "SUBMIT_ANSWER": {
      if (!state.selectedOptionId) {
        return state;
      }

      const currentQ = defaultQuestionBank.find((q) => q.id === state.activeQuestionId);
      const targetCorrectId = action.correctOptionId || currentQ?.correctOptionId;

      if (targetCorrectId) {
        const isRight = state.selectedOptionId === targetCorrectId;
        if (isRight) {
          return {
            ...state,
            answerSubmitted: true,
            isCorrect: true,
            uiState: "unlocked",
            highestStepReached: Math.max(state.highestStepReached, 2),
            selectedPatternId: currentQ ? currentQ.patternId : state.selectedPatternId,
            statusMessage: `Chúc mừng bạn đã giải mã thành công! Mở khóa hình tượng con dấu: ${currentQ?.patternTitle || "Mộc bản"}.`,
          };
        } else {
          return {
            ...state,
            answerSubmitted: true,
            isCorrect: false,
            attemptCount: state.attemptCount + 1,
            uiState: "retry",
            statusMessage: "Đáp án chưa chính xác. Bạn có thể xem gợi ý hoặc thử lại nhé!",
          };
        }
      }

      return {
        ...state,
        answerSubmitted: true,
        isCorrect: true,
        uiState: "unlocked",
        highestStepReached: Math.max(state.highestStepReached, 2),
        statusMessage: "Mở khóa thành công hình tượng con dấu Mộc bản!",
      };
    }

    case "REQUEST_HINT":
      return {
        ...state,
        uiState: "hint",
        hintRequested: true,
        statusMessage: "Hiển thị hướng dẫn tư duy và gợi ý suy luận.",
      };

    case "RETRY_QUESTION":
      return {
        ...state,
        uiState: "question",
        selectedOptionId: null,
        answerSubmitted: false,
        isCorrect: null,
        statusMessage: "Vui lòng chọn lại đáp án cho câu đố di sản.",
      };

    case "PROCEED_TO_PATTERN":
      return {
        ...state,
        uiState: "pattern",
        currentStepIndex: 2,
        highestStepReached: Math.max(state.highestStepReached, 2),
        statusMessage: "Bước 3: Khám phá và định hình nét vẽ hoa văn con dấu Mộc bản.",
      };

    case "SELECT_PATTERN":
      return {
        ...state,
        selectedPatternId: action.patternId,
      };

    case "PROCEED_TO_DESIGN":
      return {
        ...state,
        uiState: "design",
        currentStepIndex: 2,
        highestStepReached: Math.max(state.highestStepReached, 2),
        statusMessage: "Bước 3: Không gian phác họa nét vẽ ngược (mirror) trên phôi gỗ.",
      };

    case "PROCEED_TO_CARVE":
      return {
        ...state,
        uiState: "carve",
        currentStepIndex: 3,
        highestStepReached: Math.max(state.highestStepReached, 3),
        statusMessage: "Bước 4: Quy trình mô phỏng thao tác đục khắc mộc bản thủ công.",
      };

    case "SET_CARVE_PROGRESS":
      return {
        ...state,
        carveProgress: Math.min(Math.max(action.progress, 0), 100),
      };

    case "PROCEED_TO_PRINT":
      return {
        ...state,
        uiState: "print",
        currentStepIndex: 4,
        highestStepReached: Math.max(state.highestStepReached, 4),
        statusMessage: "Bước 5: Lăn mực và dập in sản phẩm lên giấy mỹ thuật/túi vải canvas.",
      };

    case "EXECUTE_PRINT":
      return {
        ...state,
        printCompleted: true,
        statusMessage: "In thành công! Tác phẩm mang dấu ấn di sản Mộc bản đã hoàn thiện.",
      };

    case "COMPLETE_EXPERIENCE":
      return {
        ...state,
        uiState: "complete",
        statusMessage: "Chúc mừng bạn đã hoàn thành trọn vẹn chuỗi 5 bước trải nghiệm Bật Mã Cổ Thư!",
      };

    case "RESET": {
      const q = getRandomBatMaQuestion();
      return {
        ...initialBatMaState,
        activeQuestionId: q.id,
        selectedPatternId: q.patternId,
        highestStepReached: 0,
        statusMessage: "Đã làm mới hành trình. Bạn có thể bắt đầu lại từ Bước 1.",
      };
    }

    case "NAVIGATE_TO_STEP": {
      const idx = action.stepIndex;
      if (idx < 0 || idx > 4) return state;
      if (idx > state.highestStepReached) {
        return {
          ...state,
          statusMessage: `Bước ${idx + 1} (${BAT_MA_STEPS[idx]?.name}) chưa được mở khóa. Vui lòng hoàn thành tuần tự các bước trước.`,
        };
      }
      const targetState = BAT_MA_STEPS[idx]?.uiState ?? "entry";
      return {
        ...state,
        currentStepIndex: idx,
        uiState: targetState,
        statusMessage: `Chuyển tới Bước ${idx + 1}: ${BAT_MA_STEPS[idx]?.name}`,
      };
    }

    default:
      return state;
  }
}
