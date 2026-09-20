// ─── Dữ liệu chi tiết 4 Trang con Mộc bản (Trích từ tài liệu khách hàng) ───

export interface SubpageContent {
  slug: string;
  categoryNumber: string;
  title: string;
  subtitle: string;
  lead: string;
  sections: {
    heading: string;
    subheading?: string;
    paragraphs: string[];
    items?: { title: string; desc: string }[];
    works?: {
      name: string;
      hanName?: string;
      desc: string;
      details: string[];
    }[];
  }[];
}

export const mocbanSubpagesData: Record<string, SubpageContent> = {
  "lich-su": {
    slug: "lich-su",
    categoryNumber: "01",
    title: "Dấu ấn lịch sử",
    subtitle: "Những trang sử được lưu giữ trên Mộc bản",
    lead: "Mộc bản triều Nguyễn không chỉ là những tấm gỗ được dùng để in sách. Qua các bộ sử, địa chí và những văn bản của triều Nguyễn, Mộc bản lưu giữ một hệ thống thông tin phong phú về lịch sử, con người, tổ chức nhà nước, địa lý và quá trình quản lý đất nước.",
    sections: [
      {
        heading: "Lịch sử qua những bộ sử lớn",
        subheading: "Những trang sách được khắc trên gỗ",
        paragraphs: [
          "Tiếp cận Mộc bản như một nguồn tư liệu giúp chúng ta không chỉ tìm hiểu lịch sử đã diễn ra như thế nào, mà còn đặt câu hỏi: Những thông tin ấy được ghi lại ở đâu, bằng cách nào và có thể giúp chúng ta nhận thức quá khứ ra sao?",
          "Dưới đây là 3 bộ sách tiêu biểu được nghiên cứu sử dụng để minh họa giá trị lịch sử của Mộc bản triều Nguyễn:"
        ],
        works: [
          {
            name: "Đại Nam thực lục",
            hanName: "大南寔錄",
            desc: "Bộ sử biên niên lớn nhất của triều Nguyễn do Quốc Sử Quán tổ chức biên soạn, ghi lại các sự kiện theo trình tự thời gian từ các chúa Nguyễn đến triều vua Khải Định.",
            details: [
              "Tiền biên (12 quyển): Kể về 9 đời chúa Nguyễn từ khi Nguyễn Hoàng vào trấn thủ Thuận Hóa năm 1558 đến năm 1777, phản ánh quá trình hình thành và phát triển của Đàng Trong.",
              "Chính biên: Ghi chép chi tiết các triều vua Nguyễn từ Gia Long đến Khải Định về chính trị, quân sự, kinh tế, giáo dục, văn hóa và đời sống xã hội.",
              "Bản khắc gỗ: Nội dung được khắc ngược trên gỗ thị để in thành nhiều bản sách phục vụ việc lưu truyền tri thức và quản lý quốc gia."
            ]
          },
          {
            name: "Khâm định Việt sử Thông giám cương mục",
            hanName: "欽定越史通鑑綱目",
            desc: "Bộ quốc sử hệ thống hóa tiến trình lịch sử dân tộc Việt Nam từ thời lập quốc xa xưa đến cuối thế kỷ XVIII, do các sử quan triều Nguyễn biên soạn và đích thân vua định đoạt.",
            details: [
              "Hệ thống hóa lịch sử: Trình bày sự kiện theo lối biên niên cương mục (cương là tóm tắt sự kiện, mục là giải thích chi tiết), giúp người đọc theo dõi mạch lạc từng triều đại.",
              "Nhân vật và biến cố: Cung cấp góc nhìn về các cuộc chiến tranh bảo vệ bờ cõi, tổ chức chính quyền và vai trò của các nhân vật lịch sử qua nhiều thời kỳ.",
              "Chứng cứ vật chất: Mộc bản của tác phẩm là minh chứng vật thể sống động về cách thức sử quan triều đình biên soạn, hiệu đính và truyền lại lịch sử."
            ]
          },
          {
            name: "Đại Nam nhất thống chí",
            hanName: "大南一統志",
            desc: "Bộ địa chí lớn nhất thời Nguyễn, ghi chép toàn diện về địa lý, núi sông, bờ cõi, thành trì, sản vật và phong tục của từng địa phương trên toàn bộ đất nước.",
            details: [
              "Bản đồ bằng chữ: Mô tả cụ thể đường sá, sông núi, địa giới hành chính, giúp người đọc hình dung không gian lãnh thổ đất nước dưới thời Nguyễn.",
              "Chủ quyền lãnh thổ: Lưu giữ những tư liệu khẳng định việc thực thi chủ quyền đối với các vùng đất, hải đảo, trong đó có Hoàng Sa và Trường Sa.",
              "Giá trị đương đại: Nhiều địa danh, danh lam và sản vật được ghi trong Mộc bản vẫn có thể nhận diện và đối chiếu trong không gian địa lý ngày nay."
            ]
          }
        ]
      }
    ]
  },

  "van-hoa": {
    slug: "van-hoa",
    categoryNumber: "02",
    title: "Mạch nguồn văn hóa",
    subtitle: "Những giá trị văn hóa và tư tưởng qua di sản",
    lead: "Từ phong tục, tín ngưỡng, văn học đến những quan niệm về đạo đức và đời sống, Mộc bản phản ánh thế giới văn hóa và tư tưởng của xã hội đương thời. Khám phá Mộc bản là cuộc đối thoại sinh động giữa các giá trị truyền thống và xã hội hiện đại.",
    sections: [
      {
        heading: "01. Văn hóa trong những trang Mộc bản",
        subheading: "Người xưa đã sống, nghĩ và ứng xử như thế nào?",
        paragraphs: [
          "Những điều tưởng như rất gần gũi với đời sống – cách tổ chức lễ nghi, những phong tục được duy trì, niềm tin tín ngưỡng hay những quan niệm về đạo đức – đều có thể trở thành dấu vết để chúng ta tìm hiểu văn hóa của một thời kỳ."
        ],
        items: [
          { title: "Lễ nghi", desc: "Các quy tắc ứng xử, nghi lễ triều đình và sinh hoạt dân gian phản ánh trật tự và chuẩn mực xã hội." },
          { title: "Phong tục", desc: "Tập quán sinh hoạt của cộng đồng tại các vùng miền, thể hiện sự đa dạng văn hóa địa phương." },
          { title: "Tín ngưỡng", desc: "Đời sống tâm linh, niềm tin và sự tôn kính trời đất, tổ tiên của người xưa." },
          { title: "Văn học & Ngôn từ", desc: "Các tác phẩm thơ văn chữ Hán, Nôm thể hiện tư duy mỹ cảm và tiếng nói tinh thần của thời đại." }
        ]
      },
      {
        heading: "02. Nhìn văn hóa qua tư tưởng Nho giáo",
        subheading: "Những chuẩn mực từng định hình cách học tập và ứng xử",
        paragraphs: [
          "Trong đời sống xã hội dưới triều Nguyễn, Nho giáo có ảnh hưởng sâu rộng, đặc biệt trong giáo dục, đạo đức, gia đình và các mối quan hệ xã hội. Những quan niệm về việc học, tu dưỡng bản thân, cách ứng xử, trách nhiệm và trật tự xã hội được phản ánh qua nhiều văn bản được lưu giữ trên Mộc bản."
        ],
        items: [
          { title: "Việc học", desc: "Học tập được xem là con đường trau dồi tri thức, rèn luyện đạo đức và hoàn thiện nhân cách." },
          { title: "Tu dưỡng bản thân", desc: "Con người được khuyến khích rèn luyện phẩm chất, biết tiết chế và tự điều chỉnh hành vi." },
          { title: "Gia đình & Xã hội", desc: "Đề cao lòng hiếu kính, sự hòa thuận, tinh thần trọng nghĩa và trách nhiệm công dân đối với đất nước." }
        ]
      },
      {
        heading: "03. Từ giá trị xưa đến suy ngẫm hôm nay",
        subheading: "Điều gì còn lại với chúng ta?",
        paragraphs: [
          "Tìm hiểu di sản không phải là sự tiếp nhận thụ động, mà là đặt ra những câu hỏi phản biện: Điều gì vẫn còn giá trị hôm nay? Điều gì đã thay đổi theo bối cảnh mới? Điều gì đáng được tiếp nối và phát huy?",
          "Từ hiểu biết về cội nguồn văn hóa, học sinh bước sang giai đoạn học cùng di sản và vì di sản, hình thành ý thức tự hào và trách nhiệm bảo tồn di sản dân tộc trong kỷ nguyên hội nhập."
        ]
      }
    ]
  },

  "dao-hoc": {
    slug: "dao-hoc",
    categoryNumber: "03",
    title: "Đạo học và nhân tài",
    subtitle: "Những bài học về học tập, giáo dục và nhân cách",
    lead: "Đối với triều Nguyễn, giáo dục và việc học giữ vị trí tối thượng trong việc đào tạo con người và xây dựng xã hội. Những tư liệu trên Mộc bản lưu giữ quan niệm về mục đích của việc học, đạo làm thầy, sự kiên trì vượt khó và chính sách trọng dụng hiền tài.",
    sections: [
      {
        heading: "01. Học để tu dưỡng",
        subheading: "Việc học không chỉ để tích lũy kiến thức",
        paragraphs: [
          "Trong quan niệm giáo dục truyền thống, học tập không chỉ nhằm tiếp nhận tri thức mà còn là quá trình rèn luyện và hoàn thiện con người. Người học được hướng đến việc mở rộng hiểu biết, đồng thời tu dưỡng đạo đức, điều chỉnh cách ứng xử và hình thành những phẩm chất cần thiết để sống có trách nhiệm với bản thân, gia đình và xã hội."
        ],
        items: [
          { title: "Học để hiểu biết", desc: "Mở mang tri thức, hiểu biết thế giới và hiểu chính bản thân mình." },
          { title: "Học để rèn mình", desc: "Kiến thức phải đi liền với phẩm chất đạo đức; biết nhiều mà không có đức thì không thể thành tài." },
          { title: "Học để sống có trách nhiệm", desc: "Sử dụng tri thức để đóng góp cho gia đình, làng xóm và cống hiến cho đất nước." }
        ]
      },
      {
        heading: "02. Giáo dục và Khoa cử",
        subheading: "Con đường học tập và tuyển chọn người tài",
        paragraphs: [
          "Dưới triều Nguyễn, khoa cử là thiết chế quan trọng để tuyển chọn nhân tài vào bộ máy quản lý nhà nước. Hành trình từ lúc đi học đến khi đỗ đạt là con đường thử thách ý chí và tinh thần hiếu học."
        ],
        items: [
          { title: "Học gì?", desc: "Học Tứ thư, Ngũ kinh, sử học, văn chương và các phép tắc quản lý xã hội." },
          { title: "Học như thế nào?", desc: "Quá trình dùi mài kinh sử bền bỉ qua nhiều năm, vượt qua gian nan thiếu thốn để theo đuổi chí hướng." },
          { title: "Thi cử ra sao?", desc: "Hệ thống các kỳ thi nghiêm ngặt: Thi Hương (tại địa phương), Thi Hội và Thi Đình (tại kinh đô Huế)." }
        ]
      },
      {
        heading: "03. Trọng dụng nhân tài",
        subheading: "Người có tài được đặt ở đâu trong xã hội?",
        paragraphs: [
          "Nhân tài được nhìn nhận trên cả hai phương diện: Có Tài (năng lực chuyên môn) và Có Đức (đạo lý làm người). Triều đình có nhiều chính sách vinh danh người đỗ đạt như khắc tên bảng vàng, ban yến, ban mũ áo vinh quy bái tổ, nhưng đồng thời cũng đòi hỏi tinh thần phụng sự liêm chính."
        ]
      }
    ]
  },

  "su-lieu": {
    slug: "su-lieu",
    categoryNumber: "04",
    title: "Mộc bản – Nguồn sử liệu",
    subtitle: "Khi những bản khắc trở thành chứng cứ lịch sử",
    lead: "Mộc bản là nguồn tư liệu gốc chứa đựng nhiều thông tin có giá trị cho việc nghiên cứu và nhận thức lịch sử. Khai thác Mộc bản giúp người học biết cách đọc, phân tích, đối chiếu và đánh giá tư liệu theo phương pháp khoa học lịch sử.",
    sections: [
      {
        heading: "Mộc bản lưu giữ những gì?",
        subheading: "Từ bản khắc chữ đến chứng cứ quá khứ",
        paragraphs: [
          "Mộc bản ghi chép mọi mặt của đời sống: sự kiện bang giao, cải cách thể chế, tổ chức quân đội, quy chế thi cử, phân bổ ruộng đất, đắp đê, phòng chống thiên tai.",
          "Khi tiếp cận một bản Mộc bản, câu hỏi đặt ra không chỉ là 'Tư liệu nói gì?', mà còn là 'Tư liệu này được khắc trong hoàn cảnh nào, do ai biên soạn và có ý nghĩa gì đối với xã hội đương thời?'"
        ]
      },
      {
        heading: "Cách đọc và đối chiếu một bản Mộc bản",
        subheading: "Kỹ năng nghiên cứu sử học cho học sinh THPT",
        paragraphs: [
          "Để đọc hiểu một bản mộc bản, người học cần thực hiện các bước tiếp cận khoa học:"
        ],
        items: [
          { title: "Bước 1: Quan sát hình thể", desc: "Xem xét chất liệu gỗ, loại chữ khắc (chữ Hán/Nôm), phong cách nét chữ, ấn triện và tình trạng bản khắc." },
          { title: "Bước 2: Phân tích nội dung", desc: "Xác định thời gian, địa danh, nhân vật và sự kiện chính được ghi chép." },
          { title: "Bước 3: Đối chiếu nguồn tư liệu", desc: "So sánh nội dung trên mộc bản với các châu bản, văn bia hoặc hồi ký cùng thời kỳ để kiểm chứng độ chính xác." },
          { title: "Bước 4: Đánh giá giá trị lịch sử", desc: "Rút ra kết luận lịch sử dựa trên chứng cứ khách quan thay vì chỉ ghi nhớ máy móc." }
        ]
      },
      {
        heading: "Từ di sản đến học liệu trực quan",
        subheading: "Chuyển hóa mộc bản trong dạy học lịch sử hiện đại",
        paragraphs: [
          "Khi được đưa vào lớp học, Mộc bản không còn là hiện vật bảo tàng xa lạ. Những bản khắc trở thành học liệu trực quan, khơi gợi trí tò mò, rèn luyện tư duy phản biện và năng lực nghiên cứu khoa học cho học sinh."
        ]
      }
    ]
  }
};
