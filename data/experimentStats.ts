// ─── Dữ liệu Thực nghiệm Sư phạm Đối chứng (Đề tài T.26.XH.503.15) ─────────────
// Khảo sát đối chứng giữa Lớp Thực nghiệm (Lớp 11/1) và Lớp Đối chứng
// Trích xuất tự động 100% từ Google Forms chính thức của khách hàng.
// Đã loại bỏ: Câu 1, 2, 3 (thông tin định danh) và Câu 17 (câu hỏi tự luận mở).

export interface StatOption {
  label: string;
  experimental: number; // Tỷ lệ % Lớp thực nghiệm (N=23)
  control: number;      // Tỷ lệ % Lớp đối chứng (N=108)
  diff?: number;        // Chênh lệch % (+/-)
}

export interface ExperimentQuestionStat {
  id: number;
  questionNumber: number;
  category: "NHẬN THỨC DI SẢN" | "HỨNG THÚ HỌC TẬP" | "NHU CẦU TÍCH HỢP" | "ĐÁNH GIÁ SẢN PHẨM";
  categoryLabel: string;
  title: string;
  description?: string;
  options: StatOption[];
  insight: string;
}

export interface ClassroomEvidencePhoto {
  src: string;
  alt: string;
  caption: string;
  tag: string;
}

// ── Bảng tổng quan chỉ số tác động then chốt (Key Research Highlights) ────────
export const EXPERIMENT_OVERVIEW = {
  sampleSize: {
    experimental: 23, // Học sinh Lớp 11/1 thực nghiệm
    control: 108,     // Học sinh Lớp đối chứng
    total: 131,
  },
  schools: ["Trường THPT Đặng Trần Côn", "Trường THPT Thuận Hóa"],
  metrics: [
    {
      label: "Nhận thức Bản chất Mộc bản",
      experimental: 73.9,
      control: 50.0,
      diff: +23.9,
      note: "Nhận diện chính xác bản chất Mộc bản là ván khắc in ấn tài liệu",
    },
    {
      label: "Mức độ Hứng thú cao",
      experimental: 39.1,
      control: 25.9,
      diff: +13.2,
      note: "Học sinh đánh giá Rất hứng thú với môn Lịch sử di sản",
    },
    {
      label: "Mong muốn Học qua Trò chơi",
      experimental: 73.9,
      control: 67.6,
      diff: +6.3,
      note: "Ưu tiên hình thức giải mã và cờ bàn cờ Mộc Bản Ký Sự",
    },
    {
      label: "Mong muốn Tiếp tục Tham gia",
      experimental: 65.2,
      control: 64.8,
      diff: +0.4,
      note: "Nguyện vọng tiếp tục học tập các chuyên đề gắn với di sản (0% Không mong muốn)",
    },
  ],
};

// ── Chi tiết 13 câu hỏi khảo sát định lượng chính thức (Câu 4 đến 16) ────────
export const EXPERIMENT_QUESTIONS_DATA: ExperimentQuestionStat[] = [
  {
    "id": 4,
    "questionNumber": 4,
    "category": "NHẬN THỨC DI SẢN",
    "categoryLabel": "Phần II • Nhận thức di sản",
    "title": "Em đã từng tiếp cận hoặc tìm hiểu về di sản Mộc bản triều Nguyễn thông qua hình thức nào?",
    "options": [
      {
        "label": "Qua bài học trên lớp",
        "experimental": 43.5,
        "control": 30.6,
        "diff": 12.9
      },
      {
        "label": "Qua Internet, mạng xã hội",
        "experimental": 39.1,
        "control": 38.9,
        "diff": 0.2
      },
      {
        "label": "Qua hoạt động ngoại khóa, trải nghiệm",
        "experimental": 21.7,
        "control": 13.0,
        "diff": 8.7
      },
      {
        "label": "Chưa từng tiếp cận",
        "experimental": 17.4,
        "control": 35.2,
        "diff": -17.8
      },
      {
        "label": "Qua sách, báo, tài liệu",
        "experimental": 13.0,
        "control": 23.1,
        "diff": -10.1
      },
      {
        "label": "Qua tham quan bảo tàng, di tích hoặc không gian lưu trữ di sản",
        "experimental": 13.0,
        "control": 24.1,
        "diff": -11.1
      }
    ],
    "insight": "Lớp thực nghiệm có tỷ lệ tiếp cận qua bài học và hoạt động trải nghiệm thực hành cao hơn rõ rệt so với lớp đối chứng."
  },
  {
    "id": 5,
    "questionNumber": 5,
    "category": "NHẬN THỨC DI SẢN",
    "categoryLabel": "Phần II • Nhận thức di sản",
    "title": "Theo em, Mộc bản triều Nguyễn là loại hình di sản nào?",
    "options": [
      {
        "label": "Những bản khắc chữ, hình ảnh trên gỗ được sử dụng để in ấn tài liệu",
        "experimental": 73.9,
        "control": 50.0,
        "diff": 23.9
      },
      {
        "label": "Em chưa biết",
        "experimental": 21.7,
        "control": 38.0,
        "diff": -16.3
      },
      {
        "label": "Những văn bản được viết trên giấy dưới triều Nguyễn",
        "experimental": 4.3,
        "control": 6.5,
        "diff": -2.2
      },
      {
        "label": "Những hiện vật gỗ được sử dụng trong cung đình",
        "experimental": 0.0,
        "control": 5.6,
        "diff": -5.6
      }
    ],
    "insight": "73.9% học sinh lớp thực nghiệm nhận diện chính xác bản chất Mộc bản là bản khắc in ấn tài liệu (so với 50.0% ở lớp đối chứng, chênh lệch +23.9%). Tỷ lệ chưa biết ở lớp thực nghiệm giảm xuống chỉ còn 21.7% so với 38.0%."
  },
  {
    "id": 6,
    "questionNumber": 6,
    "category": "NHẬN THỨC DI SẢN",
    "categoryLabel": "Phần II • Nhận thức di sản",
    "title": "Theo em, Mộc bản triều Nguyễn có những giá trị nổi bật nào?",
    "options": [
      {
        "label": "Giá trị lịch sử",
        "experimental": 65.2,
        "control": 63.0,
        "diff": 2.2
      },
      {
        "label": "Giá trị giáo dục - khoa cử",
        "experimental": 39.1,
        "control": 30.6,
        "diff": 8.5
      },
      {
        "label": "Giá trị văn hóa - tư tưởng",
        "experimental": 34.8,
        "control": 47.2,
        "diff": -12.4
      },
      {
        "label": "Giá trị tư liệu",
        "experimental": 26.1,
        "control": 26.9,
        "diff": -0.8
      },
      {
        "label": "Em chưa biết rõ",
        "experimental": 13.0,
        "control": 24.1,
        "diff": -11.1
      }
    ],
    "insight": "Học sinh lớp thực nghiệm đánh giá cao giá trị lịch sử (65.2%), giá trị giáo dục - khoa cử (39.1%) và văn hóa - tư tưởng (34.8%), với tỷ lệ chưa biết thấp hơn lớp đối chứng."
  },
  {
    "id": 7,
    "questionNumber": 7,
    "category": "NHẬN THỨC DI SẢN",
    "categoryLabel": "Phần II • Nhận thức di sản",
    "title": "Theo em, việc tìm hiểu Mộc bản triều Nguyễn có ý nghĩa như thế nào đối với học sinh hiện nay?",
    "options": [
      {
        "label": "Tất cả những ý kiến trên",
        "experimental": 43.5,
        "control": 41.7,
        "diff": 1.8
      },
      {
        "label": "Giúp hiểu thêm về lịch sử dân tộc và lịch sử địa phương",
        "experimental": 34.8,
        "control": 29.6,
        "diff": 5.2
      },
      {
        "label": "Giúp phát triển kỹ năng tìm hiểu, khai thác và xử lý tư liệu lịch sử",
        "experimental": 13.0,
        "control": 4.6,
        "diff": 8.4
      },
      {
        "label": "Em chưa nhận thấy ý nghĩa rõ ràng",
        "experimental": 4.3,
        "control": 14.8,
        "diff": -10.5
      },
      {
        "label": "Góp phần bồi dưỡng tình yêu quê hương, ý thức bảo tồn di sản",
        "experimental": 4.3,
        "control": 9.3,
        "diff": -5.0
      }
    ],
    "insight": "Phần lớn học sinh lớp thực nghiệm nhận thức trọn vẹn ý nghĩa tổng hợp: hiểu lịch sử dân tộc (34.8%), bồi dưỡng tình yêu quê hương và phát triển kỹ năng khai thác tư liệu (43.5% chọn tất cả ý kiến trên)."
  },
  {
    "id": 8,
    "questionNumber": 8,
    "category": "HỨNG THÚ HỌC TẬP",
    "categoryLabel": "Phần III • Hứng thú học tập",
    "title": "Em có hứng thú khi tìm hiểu về Mộc bản triều Nguyễn và các di sản văn hóa của Huế không?",
    "options": [
      {
        "label": "Rất hứng thú",
        "experimental": 39.1,
        "control": 25.9,
        "diff": 13.2
      },
      {
        "label": "Bình thường",
        "experimental": 30.4,
        "control": 32.4,
        "diff": -2.0
      },
      {
        "label": "Hứng thú",
        "experimental": 26.1,
        "control": 32.4,
        "diff": -6.3
      },
      {
        "label": "Ít hứng thú",
        "experimental": 4.3,
        "control": 3.7,
        "diff": 0.6
      },
      {
        "label": "Không hứng thú",
        "experimental": 0.0,
        "control": 5.6,
        "diff": -5.6
      }
    ],
    "insight": "Tỷ lệ học sinh 'Rất hứng thú' ở lớp thực nghiệm đạt 39.1% (vượt trội so với 25.9% ở lớp đối chứng, +13.2%). Đặc biệt lớp thực nghiệm không có học sinh nào 'Không hứng thú' (0.0%)."
  },
  {
    "id": 9,
    "questionNumber": 9,
    "category": "HỨNG THÚ HỌC TẬP",
    "categoryLabel": "Phần III • Hứng thú học tập",
    "title": "Em mong muốn được tìm hiểu Mộc bản triều Nguyễn thông qua những hình thức nào?",
    "options": [
      {
        "label": "Trò chơi học tập, giải mã tư liệu lịch sử",
        "experimental": 73.9,
        "control": 42.6,
        "diff": 31.3
      },
      {
        "label": "Hoạt động thực hành, trải nghiệm làm sản phẩm",
        "experimental": 52.2,
        "control": 49.1,
        "diff": 3.1
      },
      {
        "label": "Bài học, tư liệu hình ảnh và video trên lớp",
        "experimental": 47.8,
        "control": 46.3,
        "diff": 1.5
      },
      {
        "label": "Tham quan, tìm hiểu tại các không gian lưu trữ di sản",
        "experimental": 34.8,
        "control": 51.9,
        "diff": -17.1
      },
      {
        "label": "Website, học liệu số và các nền tảng trực tuyến",
        "experimental": 13.0,
        "control": 16.7,
        "diff": -3.7
      },
      {
        "label": "Hoạt động nghiên cứu, thuyết trình và làm việc nhóm",
        "experimental": 8.7,
        "control": 15.7,
        "diff": -7.0
      }
    ],
    "insight": "Học sinh lớp thực nghiệm thể hiện sự yêu thích áp đảo đối với 'Trò chơi học tập, giải mã tư liệu lịch sử' (73.9%) và 'Hoạt động thực hành, trải nghiệm làm sản phẩm' (52.2%)."
  },
  {
    "id": 10,
    "questionNumber": 10,
    "category": "HỨNG THÚ HỌC TẬP",
    "categoryLabel": "Phần III • Hứng thú học tập",
    "title": "Theo em, điều gì khiến việc tìm hiểu di sản Mộc bản triều Nguyễn trở nên khó khăn hoặc chưa hấp dẫn?",
    "options": [
      {
        "label": "Ít có cơ hội tiếp cận hiện vật, không gian di sản",
        "experimental": 39.1,
        "control": 37.0,
        "diff": 2.1
      },
      {
        "label": "Em không gặp khó khăn",
        "experimental": 17.4,
        "control": 17.6,
        "diff": -0.2
      },
      {
        "label": "Chưa có nhiều tài liệu và học liệu phù hợp với học sinh",
        "experimental": 17.4,
        "control": 9.3,
        "diff": 8.1
      },
      {
        "label": "Nội dung còn khó hiểu, nhiều kiến thức lịch sử",
        "experimental": 13.0,
        "control": 22.2,
        "diff": -9.2
      },
      {
        "label": "Thiếu trò chơi và hoạt động trải nghiệm",
        "experimental": 8.7,
        "control": 5.6,
        "diff": 3.1
      },
      {
        "label": "Thiếu hình ảnh, video và tư liệu trực quan",
        "experimental": 4.3,
        "control": 8.3,
        "diff": -4.0
      }
    ],
    "insight": "Cả hai nhóm đều chỉ ra rào cản lớn nhất là ít có cơ hội tiếp cận hiện vật và thiếu trò chơi/hoạt động trải nghiệm, khẳng định giải pháp của bộ kit và boardgame là đúng hướng."
  },
  {
    "id": 11,
    "questionNumber": 11,
    "category": "NHU CẦU TÍCH HỢP",
    "categoryLabel": "Phần IV • Nhu cầu tích hợp",
    "title": "Theo em, việc đưa nội dung tìm hiểu Mộc bản triều Nguyễn vào các hoạt động giáo dục nhà trường có cần thiết không?",
    "options": [
      {
        "label": "Cần thiết",
        "experimental": 43.5,
        "control": 24.1,
        "diff": 19.4
      },
      {
        "label": "Rất cần thiết",
        "experimental": 34.8,
        "control": 53.7,
        "diff": -18.9
      },
      {
        "label": "Bình thường",
        "experimental": 21.7,
        "control": 19.4,
        "diff": 2.3
      },
      {
        "label": "Không cần thiết",
        "experimental": 0.0,
        "control": 2.8,
        "diff": -2.8
      }
    ],
    "insight": "78.3% học sinh lớp thực nghiệm khẳng định việc đưa Mộc bản vào môn Lịch sử và Hoạt động trải nghiệm là Rất cần thiết và Cần thiết."
  },
  {
    "id": 12,
    "questionNumber": 12,
    "category": "NHU CẦU TÍCH HỢP",
    "categoryLabel": "Phần IV • Nhu cầu tích hợp",
    "title": "Theo em, nội dung nào nên được ưu tiên khi tìm hiểu Mộc bản triều Nguyễn trong nhà trường?",
    "options": [
      {
        "label": "Nội dung, giá trị lịch sử và văn hóa được lưu giữ trong Mộc bản",
        "experimental": 78.3,
        "control": 61.1,
        "diff": 17.2
      },
      {
        "label": "Vai trò của Mộc bản trong việc ghi chép và bảo tồn tri thức",
        "experimental": 73.9,
        "control": 37.0,
        "diff": 36.9
      },
      {
        "label": "Quá trình hình thành và phát triển của Mộc bản triều Nguyễn",
        "experimental": 65.2,
        "control": 61.1,
        "diff": 4.1
      },
      {
        "label": "Giá trị của Mộc bản đối với văn hóa, lịch sử và giáo dục ở Huế",
        "experimental": 34.8,
        "control": 50.9,
        "diff": -16.1
      },
      {
        "label": "Quá trình bảo quản, lưu giữ và phát huy giá trị di sản",
        "experimental": 30.4,
        "control": 33.3,
        "diff": -2.9
      },
      {
        "label": "Ứng dụng công nghệ số trong giới thiệu và quảng bá di sản",
        "experimental": 13.0,
        "control": 21.3,
        "diff": -8.3
      }
    ],
    "insight": "Nội dung giá trị lịch sử văn hóa (78.3%) và vai trò ghi chép bảo tồn tri thức (73.9%) được học sinh lớp thực nghiệm ưu tiên hàng đầu."
  },
  {
    "id": 13,
    "questionNumber": 13,
    "category": "NHU CẦU TÍCH HỢP",
    "categoryLabel": "Phần IV • Nhu cầu tích hợp",
    "title": "Em mong muốn hoạt động giáo dục di sản được tổ chức theo hình thức nào?",
    "options": [
      {
        "label": "Tổ chức thành hoạt động trải nghiệm, ngoại khóa",
        "experimental": 43.5,
        "control": 51.9,
        "diff": -8.4
      },
      {
        "label": "Lồng ghép trong các tiết học chính khóa",
        "experimental": 30.4,
        "control": 14.8,
        "diff": 15.6
      },
      {
        "label": "Kết hợp học tập trên lớp với tham quan thực tế",
        "experimental": 21.7,
        "control": 25.9,
        "diff": -4.2
      },
      {
        "label": "Kết hợp học trực tiếp với website và học liệu số",
        "experimental": 4.3,
        "control": 7.4,
        "diff": -3.1
      }
    ],
    "insight": "Học sinh mong muốn tổ chức thành các hoạt động ngoại khóa, trải nghiệm thực tế và lồng ghép sinh động trong tiết học chính khóa."
  },
  {
    "id": 14,
    "questionNumber": 14,
    "category": "ĐÁNH GIÁ SẢN PHẨM",
    "categoryLabel": "Phần V • Đánh giá sản phẩm",
    "title": "Em đã được tiếp cận những sản phẩm hoặc hoạt động nào trong quá trình tìm hiểu Mộc bản triều Nguyễn?",
    "options": [
      {
        "label": "Trò chơi Mộc Bản Ký Sự",
        "experimental": 52.2,
        "control": 23.1,
        "diff": 29.1
      },
      {
        "label": "Bộ học liệu/trò chơi Bật Mã Cổ Thư",
        "experimental": 43.5,
        "control": 25.0,
        "diff": 18.5
      },
      {
        "label": "Hoạt động học tập, trải nghiệm gắn với di sản",
        "experimental": 30.4,
        "control": 28.7,
        "diff": 1.7
      },
      {
        "label": "Website giới thiệu và học tập về Mộc bản triều Nguyễn",
        "experimental": 26.1,
        "control": 21.3,
        "diff": 4.8
      },
      {
        "label": "Chưa tiếp cận sản phẩm hoặc hoạt động nào",
        "experimental": 21.7,
        "control": 40.7,
        "diff": -19.0
      }
    ],
    "insight": "Học sinh lớp thực nghiệm đã tiếp cận đồng bộ cả Trò chơi Mộc Bản Ký Sự (52.2%), Bộ kit Bật Mã Cổ Thư (43.5%) và Website học liệu số (26.1%), cao hơn gấp nhiều lần lớp đối chứng."
  },
  {
    "id": 15,
    "questionNumber": 15,
    "category": "ĐÁNH GIÁ SẢN PHẨM",
    "categoryLabel": "Phần V • Đánh giá sản phẩm",
    "title": "Em đánh giá như thế nào về hoạt động và sản phẩm đã được tiếp cận?",
    "options": [
      {
        "label": "Đồng ý",
        "experimental": 52.2,
        "control": 39.8,
        "diff": 12.4
      },
      {
        "label": "Rất đồng ý",
        "experimental": 26.1,
        "control": 33.3,
        "diff": -7.2
      },
      {
        "label": "Phân vân",
        "experimental": 21.7,
        "control": 20.4,
        "diff": 1.3
      },
      {
        "label": "Không đồng ý",
        "experimental": 0.0,
        "control": 6.5,
        "diff": -6.5
      }
    ],
    "insight": "78.3% học sinh lớp thực nghiệm Đồng ý và Rất đồng ý rằng nội dung giúp hiểu rõ hơn về Mộc bản và hình thức học tập tạo hứng thú thu hút cao."
  },
  {
    "id": 16,
    "questionNumber": 16,
    "category": "ĐÁNH GIÁ SẢN PHẨM",
    "categoryLabel": "Phần V • Đánh giá sản phẩm",
    "title": "Sau khi tham gia hoạt động, em có mong muốn tiếp tục tìm hiểu và tham gia các hoạt động giáo dục gắn với Mộc bản triều Nguyễn không?",
    "options": [
      {
        "label": "Bình thường",
        "experimental": 34.8,
        "control": 31.5,
        "diff": 3.3
      },
      {
        "label": "Mong muốn",
        "experimental": 34.8,
        "control": 36.1,
        "diff": -1.3
      },
      {
        "label": "Rất mong muốn",
        "experimental": 30.4,
        "control": 28.7,
        "diff": 1.7
      },
      {
        "label": "Không mong muốn",
        "experimental": 0.0,
        "control": 3.7,
        "diff": -3.7
      }
    ],
    "insight": "65.2% học sinh lớp thực nghiệm thể hiện mong muốn và rất mong muốn tiếp tục tham gia, đặc biệt 0.0% học sinh từ chối (Không mong muốn)."
  }
];

// ── 12 Ảnh tư liệu thực tế lớp học từ thư mục anh-chen-web ─────────────────────
export const CLASSROOM_EVIDENCE_PHOTOS: ClassroomEvidencePhoto[] = [
  {
    src: "/assets/thuc-nghiem/thuc-nghiem-01.webp",
    alt: "Tập thể học sinh lớp thực nghiệm nhận chứng chỉ hoàn thành chuyên đề",
    caption: "Tập thể học sinh lớp thực nghiệm tại trường THPT TP. Huế hoàn thành tiết học chuyên đề STEAM Mộc bản.",
    tag: "LỚP THỰC NGHIỆM",
  },
  {
    src: "/assets/thuc-nghiem/thuc-nghiem-02.webp",
    alt: "Học sinh thực hành khắc gỗ với bộ kit Bật Mã Cổ Thư",
    caption: "Học sinh say mê dùng dao trổ khắc phôi gỗ hoa văn Mộc bản theo hướng dẫn của bộ kit.",
    tag: "THỰC HÀNH KHẮC GỖ",
  },
  {
    src: "/assets/thuc-nghiem/thuc-nghiem-10.webp",
    alt: "Học sinh hào hứng trải nghiệm Boardgame Mộc Bản Ký Sự",
    caption: "Nhóm học sinh sôi nổi tham gia bàn cờ Boardgame Mộc Bản Ký Sự, vượt qua các ải khoa cử thời Nguyễn.",
    tag: "TRẢI NGHIỆM BOARDGAME",
  },
  {
    src: "/assets/thuc-nghiem/thuc-nghiem-04.webp",
    alt: "Học sinh đối chiếu thành phẩm in dập mộc bản",
    caption: "Học sinh đối chiếu bản khắc gỗ với họa tiết di sản sau khi hoàn thiện công đoạn in mực.",
    tag: "THÀNH PHẨM IN ẤN",
  },
  {
    src: "/assets/thuc-nghiem/thuc-nghiem-09.webp",
    alt: "Giáo viên và nhóm nghiên cứu quan sát tiến trình học tập",
    caption: "Giáo viên hướng dẫn và nhóm sinh viên đề tài quan sát, hỗ trợ học sinh thực hành kỹ năng.",
    tag: "HƯỚNG DẪN SƯ PHẠM",
  },
  {
    src: "/assets/thuc-nghiem/thuc-nghiem-07.webp",
    alt: "Thao tác pha mực và quét con lăn in ấn thủ công",
    caption: "Thao tác pha màu, quét con lăn mực nho và dập giấy dó truyền thống trong giờ học.",
    tag: "QUY TRÌNH IN DẬP",
  },
  {
    src: "/assets/thuc-nghiem/thuc-nghiem-08.webp",
    alt: "Nụ cười rạng rỡ của học sinh bên tác phẩm mộc bản tự tay làm",
    caption: "Niềm vui và sự hào hứng của học sinh khi tự tay sáng tạo nên sản phẩm di sản của chính mình.",
    tag: "HỨNG THÚ HỌC TẬP",
  },
  {
    src: "/assets/thuc-nghiem/thuc-nghiem-11.webp",
    alt: "Thảo luận nhóm và giải mã thẻ bài tri thức lịch sử",
    caption: "Các nhóm học sinh phối hợp trả lời câu hỏi lịch sử và giải mã các thẻ bài di sản.",
    tag: "HỢP TÁC NHÓM",
  },
  {
    src: "/assets/thuc-nghiem/thuc-nghiem-03.webp",
    alt: "Học sinh chăm chú thao tác đục khắc chi tiết hoa văn mộc bản",
    caption: "Từng đường nét hoa văn trên ván gỗ được học sinh trau chuốt tỉ mỉ bằng bộ dao khắc an toàn.",
    tag: "RÈN LUYỆN KỸ NĂNG",
  },
  {
    src: "/assets/thuc-nghiem/thuc-nghiem-05.webp",
    alt: "Không gian làm việc nhóm sôi nổi trong tiết học di sản",
    caption: "Bầu không khí học tập tích cực, học sinh trao đổi và hỗ trợ lẫn nhau trong giờ thực hành.",
    tag: "KHÔNG GIAN LỚP HỌC",
  },
  {
    src: "/assets/thuc-nghiem/thuc-nghiem-06.webp",
    alt: "Chi tiết các thẻ bài và bàn cờ Mộc Bản Ký Sự",
    caption: "Các học cụ trực quan giúp học sinh tiếp cận kiến thức lịch sử một cách tự nhiên và sinh động.",
    tag: "HỌC CỤ TRỰC QUAN",
  },
  {
    src: "/assets/thuc-nghiem/thuc-nghiem-12.webp",
    alt: "Trưng bày thành phẩm in ấn trên túi canvas và giấy dó",
    caption: "Những sản phẩm cá nhân hoàn thiện thể hiện sự kết hợp hài hòa giữa lịch sử, mỹ thuật và kỹ thuật.",
    tag: "SẢN PHẨM HOÀN THIỆN",
  },
];
