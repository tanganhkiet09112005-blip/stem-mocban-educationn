// ─── Mộc bản Page Data (STEAM MOCBAN EDUCATION) ─────────────────

export const mocbanIntro = {
  eyebrow: "Khái niệm & Giá trị di sản",
  title: "Mộc bản triều Nguyễn là gì?",
  description:
    "Mộc bản triều Nguyễn là những bản khắc chữ Hán – Nôm trên gỗ được sử dụng để in sách dưới triều Nguyễn. Đây là nguồn tư liệu quý, lưu giữ những tri thức phong phú về lịch sử, văn hóa, giáo dục, pháp luật và đời sống xã hội.",
  sections: [
    {
      code: "A",
      title: "Một kho tư liệu về quá khứ",
      content:
        "Mộc bản ghi chép nhiều nội dung về lịch sử, khoa cử và giáo dục, luật pháp, văn học – tư tưởng, địa lý và hành chính. Qua đó, di sản giúp người học tiếp cận những dấu tích của xã hội Việt Nam dưới triều Nguyễn.",
    },
    {
      code: "B",
      title: "Những giá trị được lưu giữ",
      content:
        "Mộc bản mang nhiều giá trị, nổi bật là giá trị lịch sử, văn hóa – tư tưởng, giáo dục và tư liệu. Đây vừa là nguồn chứng cứ để tìm hiểu quá khứ, vừa chứa đựng những giá trị văn hóa và giáo dục có thể khai thác trong nhà trường.",
    },
    {
      code: "C",
      title: "Từ di sản đến học liệu",
      content:
        "Giá trị của Mộc bản có thể được chuyển hóa thành các hình thức học liệu phù hợp với mục tiêu của Chương trình Giáo dục phổ thông 2018: phân tích tư liệu, chuyên đề, hoạt động trải nghiệm, trò chơi học tập và dự án học tập.",
    },
    {
      code: "D",
      title: "Di sản tư liệu thế giới",
      content:
        "Năm 2009, Mộc bản triều Nguyễn được UNESCO ghi danh vào Chương trình Ký ức Thế giới (Memory of the World), khẳng định giá trị đặc biệt của khối tư liệu đối với lịch sử và văn hóa Việt Nam.",
    },
    {
      code: "E",
      title: "Từ di sản đến lớp học",
      content:
        "Mộc bản không chỉ để nghiên cứu và bảo tồn. Những giá trị được lưu giữ trong di sản có thể trở thành nguồn học liệu, hoạt động trải nghiệm và sản phẩm giáo dục, giúp học sinh tiếp cận lịch sử bằng những cách trực quan, chủ động và sáng tạo.",
    },
  ],
};

export const timelineMilestones = [
  {
    year: "Đầu thế kỷ XIX",
    title: "Hình thành và phát triển",
    desc: "Mộc bản được chế tác để phục vụ việc biên soạn, khắc in và lưu giữ các bộ sách của triều Nguyễn, trở thành phương tiện quan trọng trong việc lưu truyền tri thức.",
    badgeColor: "#1E4976",
  },
  {
    year: "Năm 1858",
    title: "Bước vào thời kỳ biến động",
    desc: "Từ khi thực dân Pháp bắt đầu xâm lược Việt Nam, xã hội và hoạt động của triều Nguyễn có nhiều biến chuyển. Mộc bản cũng bước vào một giai đoạn tồn tại trong bối cảnh lịch sử nhiều biến động.",
    badgeColor: "#C8860A",
  },
  {
    year: "Năm 1885",
    title: "Qua biến động của Kinh đô Huế",
    desc: "Biến cố năm 1885 tác động sâu sắc đến triều Nguyễn và kinh đô Huế. Trong những biến chuyển ấy, hệ thống tư liệu của triều đình, trong đó có Mộc bản, bước sang một giai đoạn mới về quản lý và lưu giữ.",
    badgeColor: "#7C5C2E",
  },
  {
    year: "Năm 1945",
    title: "Chuyển sang một hành trình mới",
    desc: "Sự chấm dứt của triều Nguyễn đánh dấu bước chuyển quan trọng trong lịch sử Mộc bản. Từ những tư liệu phục vụ hoạt động của triều đình, Mộc bản dần trở thành nguồn tư liệu cần được gìn giữ và bảo tồn.",
    badgeColor: "#1E4976",
  },
  {
    year: "Năm 1960",
    title: "Từ Huế đến Đà Lạt",
    desc: "Khối Mộc bản triều Nguyễn được chuyển từ Huế vào Đà Lạt, mở ra một chặng đường mới trong quá trình lưu giữ và bảo quản di sản.",
    badgeColor: "#7C5C2E",
  },
  {
    year: "Năm 2009",
    title: "Được ghi danh vào Ký ức Thế giới",
    desc: "Mộc bản triều Nguyễn được UNESCO ghi danh vào Chương trình Ký ức Thế giới (Memory of the World), ghi nhận giá trị đặc biệt của khối tư liệu đối với lịch sử và văn hóa Việt Nam.",
    badgeColor: "#C8860A",
  },
];

export interface MocbanTopicItem {
  id: string;
  order: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  color: "academic" | "wood" | "gold";
  icon: string;
  tag: string;
}

export const mocbanTopics: MocbanTopicItem[] = [
  {
    id: "lich-su",
    order: "01",
    title: "Dấu ấn lịch sử",
    subtitle: "Những trang sử được lưu giữ trên Mộc bản",
    description: "Mộc bản ghi lại nhiều sự kiện, nhân vật, thể chế, địa danh và đời sống xã hội dưới triều Nguyễn qua 3 bộ sử lớn: Đại Nam thực lục, Khâm định Việt sử Thông giám cương mục, Đại Nam nhất thống chí.",
    href: "/mocban/lich-su",
    color: "academic",
    icon: "Scroll",
    tag: "3 bộ sử lớn",
  },
  {
    id: "van-hoa",
    order: "02",
    title: "Mạch nguồn văn hóa",
    subtitle: "Những giá trị văn hóa và tư tưởng qua di sản",
    description: "Từ phong tục, tín ngưỡng, văn học đến những quan niệm về đạo đức và tư tưởng Nho giáo, Mộc bản mở ra góc nhìn sâu sắc về đời sống tinh thần và sự tiếp nối văn hóa xưa – nay.",
    href: "/mocban/van-hoa",
    color: "wood",
    icon: "BookOpen",
    tag: "Tư tưởng & Đời sống",
  },
  {
    id: "dao-hoc",
    order: "03",
    title: "Đạo học và nhân tài",
    subtitle: "Bài học về học tập, giáo dục và nhân cách",
    description: "Quan niệm giáo dục học để tu dưỡng, rèn luyện con người; con đường thi cử khoa cử; và chính sách trọng dụng người có đức có tài của triều Nguyễn gắn với Mộc bản minh chứng.",
    href: "/mocban/dao-hoc",
    color: "gold",
    icon: "GraduationCap",
    tag: "Khoa cử & Tu dưỡng",
  },
  {
    id: "su-lieu",
    order: "04",
    title: "Mộc bản – Nguồn sử liệu",
    subtitle: "Khi những bản khắc trở thành chứng cứ lịch sử",
    description: "Mộc bản là nguồn tư liệu gốc chứa đựng nhiều thông tin vô giá. Hướng dẫn học sinh phương pháp đọc bản khắc, biến thông tin thành chứng cứ và đối chiếu sử liệu khoa học.",
    href: "/mocban/su-lieu",
    color: "academic",
    icon: "FileCheck",
    tag: "Phương pháp sử liệu",
  },
];
