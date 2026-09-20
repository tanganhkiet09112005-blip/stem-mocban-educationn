// ─── Trải nghiệm Page Data (STEAM MOCBAN EDUCATION) ───────────────

export const trainghiemProducts = [
  {
    id: "moc-ban-ky-su",
    title: "MỘC BẢN KÝ SỰ",
    subtitle: "Boardgame chiến thuật",
    intro: "Một trò chơi cờ bàn chiến thuật lấy cảm hứng từ Mộc bản triều Nguyễn, tái hiện sinh động hành trình học tập, khoa cử và lập thân của sĩ tử xưa.",
    idea: "Được lấy cảm hứng từ những tư liệu về giáo dục và khoa cử được lưu giữ trên Mộc bản triều Nguyễn, trò chơi đưa người chơi vào hành trình của một sĩ tử: học tập, tích lũy tri thức, vượt qua các kỳ thi Hương, Hội, Đình và hướng đến những danh vị cao nhất.",
    target: "Giúp học sinh tiếp cận kiến thức lịch sử, khoa cử và truyền thống trọng học của dân tộc một cách chủ động, hào hứng thay vì học thuộc lòng máy móc.",
    eduValue: "Rèn luyện tư duy chiến thuật, khả năng ra quyết định, quản lý nguồn lực tài nguyên, giải quyết vấn đề và kỹ năng làm việc nhóm trong khi dung nạp kiến thức lịch sử tự nhiên.",
    components: [
      { name: "Bản đồ hành trình (Board)", desc: "Mô phỏng con đường học tập từ quê nhà qua các trường thi đến kinh đô Huế." },
      { name: "Thẻ nhân vật (Sĩ tử)", desc: "Đại diện cho người chơi và hành trình lập thân, tu dưỡng của sĩ tử." },
      { name: "Thẻ sự kiện lịch sử", desc: "Tái hiện các tình huống, biến cố xã hội và chính sách giáo dục thời Nguyễn." },
      { name: "Xu Phi Long (Tài nguyên)", desc: "Đơn vị tài nguyên chiến thuật dùng để mua sách, đóng lộ phí và ra quyết định." },
      { name: "Hệ thống danh hiệu", desc: "Các mốc thành đạt trên đường khoa cử: Tú tài, Cử nhân, Tiến sĩ, Trạng nguyên." },
    ],
    gameplay: "Người chơi nhập vai sĩ tử, di chuyển trên bản đồ hành trình, tích lũy và sử dụng Xu Phi Long, ứng phó với các thẻ sự kiện. Người chơi trả lời câu hỏi lịch sử, vận dụng chiến thuật và hoàn thành các kỳ thi để tiến lên chinh phục danh hiệu cao nhất.",
    videoPlaceholder: "Video mô phỏng và hướng dẫn luật chơi Boardgame Mộc Bản Ký Sự (Đang chuẩn bị)",
    assetKeys: [
      { key: "boardgame-map", label: "Bản đồ hành trình Mộc Bản Ký Sự" },
      { key: "boardgame-cards", label: "Hệ thống thẻ bài sự kiện & nhân vật" },
      { key: "boardgame-coins", label: "Đồng Xu Phi Long & Thẻ danh hiệu" },
    ],
  },
  {
    id: "bat-ma-co-thu",
    title: "BẬT MÃ CỔ THƯ",
    subtitle: "Bộ kit trải nghiệm",
    intro: "Trải nghiệm giải mã và sáng tạo họa tiết từ di sản — Kết hợp công nghệ số và thực hành thủ công khắc, in mộc bản.",
    idea: "Kết hợp công nghệ mã QR và hoạt động trải nghiệm thủ công để đưa những hình tượng văn hóa từ tư liệu Mộc bản đến gần hơn với học sinh. Người chơi quét mã QR chung để truy cập web giải mã, sau đó tự tay phác họa, khắc gỗ và in thành tác phẩm mang dấu ấn riêng.",
    target: "Giúp học sinh chủ động khám phá di sản thông qua thực hành 'Hand-on learning', rèn luyện tính kiên nhẫn, khiếu thẩm mỹ và tư duy liên môn Lịch sử – Mỹ thuật – Kỹ thuật.",
    eduValue: "Tạo ra chuỗi học tập khép kín từ tìm hiểu kiến thức đến thực hành tạo tác: hiểu giá trị họa tiết ➔ phác họa nét vẽ ➔ cảm nhận đường dao khắc gỗ ➔ in ấn thủ công.",
    components: [
      { name: "Thẻ mã QR chung", desc: "Thẻ truy cập nhanh vào hệ thống web trải nghiệm giải mã di sản." },
      { name: "Hệ thống câu hỏi & họa tiết", desc: "Ngân hàng tri thức về các biểu tượng, hoa văn mộc bản và mỹ thuật dân gian." },
      { name: "Giấy & dụng cụ phác họa", desc: "Dụng cụ dùng để phác thảo đường nét họa tiết sau khi giải mã thành công." },
      { name: "Miếng gỗ khắc mộc bản", desc: "Khối gỗ chuyên dụng để học sinh tập chạm khắc hoa văn thủ công." },
      { name: "Bộ dao khắc an toàn & mực in", desc: "Dụng cụ khắc ván gỗ và con lăn mực phục vụ công đoạn in ấn." },
      { name: "Túi vải canvas / Giấy in mỹ thuật", desc: "Vật phẩm hoàn thiện để in họa tiết và lưu giữ làm kỷ niệm." },
    ],
    // Quy trình 5 bước trải nghiệm chính thức
    workflow5Steps: [
      {
        step: "01",
        name: "KHÁM PHÁ",
        action: "Quét mã QR – Bắt đầu hành trình",
        detail: "Người chơi quét mã QR có sẵn trên thẻ trong bộ kit để truy cập hệ thống giải mã trên web.",
        ctaNote: "Mã QR chung cho toàn bộ thẻ trong bộ kit",
      },
      {
        step: "02",
        name: "GIẢI MÃ",
        action: "Trả lời câu hỏi – Mở khóa hình tượng",
        detail: "Hệ thống ngẫu nhiên đưa ra câu hỏi về họa tiết di sản. Trả lời đúng để mở khóa hình ảnh và thông điệp văn hóa; nếu chưa đúng hệ thống sẽ gợi ý suy luận.",
        ctaNote: "Hệ thống phát câu hỏi ngẫu nhiên và mở khóa mẫu",
      },
      {
        step: "03",
        name: "THIẾT KẾ",
        action: "Phác họa – Chuyển hình tượng thành nét vẽ",
        detail: "Quan sát hình tượng đã mở khóa trên màn hình, nhận diện đường nét chính và tự phác họa lại mẫu lên giấy hoặc ván gỗ thực hành.",
        ctaNote: "Tái tạo nét vẽ hoa văn di sản",
      },
      {
        step: "04",
        name: "KHẮC GỖ",
        action: "Từ bản phác họa đến bản khắc Mộc bản",
        detail: "Chuyển mẫu vẽ lên miếng gỗ khắc, sử dụng dao khắc theo hướng dẫn an toàn để tạo nên bản khắc nổi/chìm theo kỹ thuật truyền thống.",
        ctaNote: "Trải nghiệm cảm giác của người thợ khắc xưa",
      },
      {
        step: "05",
        name: "IN SẢN PHẨM",
        action: "In dấu họa tiết – Tạo sản phẩm riêng mình",
        detail: "Lăn mực đều lên ván khắc gỗ vừa hoàn thành, dập in lên túi bút canvas hoặc giấy dó mỹ thuật, hoàn thiện sản phẩm lưu niệm cá nhân.",
        ctaNote: "Hoàn thiện tác phẩm mang dấu ấn cá nhân",
      },
    ],
    assetKeys: [
      { key: "kit-box", label: "Hộp trọn bộ kit Bật Mã Cổ Thư" },
      { key: "kit-tools", label: "Bộ dao khắc và miếng gỗ thực hành" },
      { key: "kit-finished", label: "Túi bút canvas in họa tiết mộc bản hoàn thiện" },
    ],
  },
];
