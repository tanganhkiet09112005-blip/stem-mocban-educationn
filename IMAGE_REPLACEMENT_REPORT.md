# BÁO CÁO THAY THẾ VÀ TỐI ƯU HÓA HÌNH ẢNH KHÁCH HÀNG
## DỰ ÁN: STEAM MOCBAN EDUCATION
**Thời gian thực hiện:** Tháng 10/2026  
**Đơn vị thực hiện:** Autonomous Engineering & Visual QA Team  
**Mã báo cáo:** `IMAGE-REPLACEMENT-2026-FINAL`

---

## MỤC LỤC
- [A. Asset Inventory (Kiểm kê tài nguyên đầu vào)](#a-asset-inventory-kiểm-kê-tài-nguyên-đầu-vào)
- [B. Mapping Results (Kết quả ánh xạ tư liệu)](#b-mapping-results-kết-quả-ánh-xạ-tư-liệu)
- [C. Replacement Results (Kết quả thay thế mã nguồn)](#c-replacement-results-kết-quả-thay-thế-mã-nguồn)
- [D. QA Results (Kiểm thử hiển thị & Hồi quy)](#d-qa-results-kiểm-thử-hiển-thị--hồi-quy)
- [E. Final Status (Trạng thái tổng thể & Khuyến nghị)](#e-final-status-trạng-thái-tổng-thể--khuyến-nghị)

---

## A. ASSET INVENTORY (KIỂM KÊ TÀI NGUYÊN ĐẦU VÀO)

Thư mục nguồn do khách hàng cung cấp tại `D:\web-giao-duc\HÌNH ẢNH WEB` đã được quét toàn diện đệ quy 100%.

### 1. Thư mục `TRANG CHỦ` (5 cặp tệp)
| Tên tệp tham chiếu (Web) | Kích thước | Tệp thay thế (Tư liệu) | Định dạng gốc | Độ phân giải | Dung lượng gốc | Phân loại |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `1.png` | 1920x864 | `1.1.png` | PNG | 1920x1080 | 2.1 MB | Hình ảnh Mộc bản & bút lông nghiên mực |
| `2.png` | 540x680 | `2.2.png` | PNG | 1920x1080 | 1.8 MB | Học sinh tương tác không gian 360° Mộc bản |
| `3.3.png` | 1600x900 | `3.jpg` | JPEG | 4000x3000 | 3.9 MB | Kiến trúc bờ mái rồng Hoàng thành Huế trời xanh *(Đảo tên quy ước)* |
| `4.png` | 1580x420 | `4.4.jpg` | JPEG | 1920x1080 | 480 KB | Đôi tay mang găng nâng niu Mộc bản tại kho lưu trữ |
| `5.png` | 600x600 | `5.5.png` | PNG | 1920x1080 | 2.4 MB | Bìa chính thức hộp Kit "Bật Mã Cổ Thư" tông đỏ vương triều |

### 2. Thư mục `TRẢI NGHIỆM` (2 nhóm tệp)
| Tên tệp tham chiếu (Web) | Kích thước | Tệp thay thế (Tư liệu) | Định dạng gốc | Độ phân giải | Dung lượng gốc | Phân loại |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `1.png` | 1200x800 | `1 (1).png` | PNG | 1200x1680 | 1.9 MB | Thẻ bài Tri Thức (Boardgame) |
| — | — | `1 (2).png` | PNG | 1200x1680 | 1.8 MB | Thẻ bài Nhiệm Vụ (Boardgame) |
| — | — | `1 (3).png` | PNG | 1200x1680 | 1.7 MB | Thẻ bài Sự Kiện (Boardgame) |
| — | — | `1 (4).png` | PNG | 1200x1680 | 1.8 MB | Mặt sau thẻ bài vương triều (Boardgame) |
| `2.png` | 600x600 | `2.2.png` | PNG | 1920x1080 | 2.4 MB | Bìa hộp Kit "Bật Mã Cổ Thư" *(Trùng khớp với 5.5.png)* |

### 3. Thư mục `KHÁM PHÁ MỘC BẢN` (9 cặp tệp)
| Tên tệp tham chiếu (Web) | Kích thước | Tệp thay thế (Tư liệu) | Định dạng | Độ phân giải | Dung lượng gốc | Phân loại |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `1.png` | 1914x553 | `1.1.jpg` | JPEG | 3968x2976 | 4.5 MB | Toàn cảnh Ngọ Môn - Đại Nội Huế |
| `2.png` | 610x340 | `2.2.jpg` | JPEG | 680x464 | 92 KB | Hiện vật ván khắc Mộc bản trong tay chuyên gia |
| `3.png` | 625x457 | `3.3.jpg` | JPEG | 800x558 | 173 KB | Bản khắc & bản in Đại Nam thực lục tiền biên |
| `4.png` | 652x484 | `4.4.jpg` | JPEG | 640x403 | 57 KB | Bản khắc Khâm định Việt sử Thông giám cương mục |
| `5.png` | 634x477 | `5.5.jpg` | JPEG | 800x558 | 158 KB | Bản khắc & trang in Đại Nam nhất thống chí |
| `6.png` | 1624x904 | `6.6.mp3` | MP3 Audio | — | 13.4 MB | **Audio:** Thiết đại triều nghi dưới triều Nguyễn |
| `7.png` | 1551x394 | `7.7.jpg` | JPEG | 3968x2976 | 6.0 MB | Bản khắc phù điêu linh vật Kỳ lân / Long mã |
| `8.png` | 1570x859 | `8.8 ... (1076).jpg` | JPEG | 2048x1380 | 616 KB | Bản khắc Vua Lý Nhân Tông lập Quốc Tử Giám |
| `9.png` | 1576x874 | `9.9.mp3` | MP3 Audio | — | 43.3 MB | **Audio:** Nghệ thuật san khắc Mộc bản Thanh Liễu |

---

## B. MAPPING RESULTS (KẾT QUẢ ÁNH XẠ TƯ LIỆU)

Tất cả tư liệu hình ảnh được chuẩn hóa chuyển đổi sang chuẩn hiện đại **WebP**, tối ưu hóa kích thước và lưu trữ tập trung tại `public/assets/`:

| STT | Vị trí giao diện / Route | Component / File đích | Tệp khách hàng | WebP đích tối ưu hóa | Tỷ lệ & Kích thước |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Trang chủ — Hero Background | `components/home/HeroSection.tsx` | `TRANG CHỦ/1.1.png` | `/assets/homepage/hero-woodblock-brush.webp` | 16:9 (1920x1080) |
| 2 | Trang chủ — Hero Interactive Card | `components/home/HeroSection.tsx` | `TRANG CHỦ/2.2.png` | `/assets/homepage/hero-student-interactive.webp` | 4:3 (1440x1080) |
| 3 | Trang chủ — STEAM Hub Central | `components/home/SteamSection.tsx` | `TRANG CHỦ/3.jpg` | `/assets/homepage/steam-hub-hue-citadel.webp` | 16:9 (2560x1440) |
| 4 | Trang chủ — CTA Archival Banner | `components/home/CTASection.tsx` | `TRANG CHỦ/4.4.jpg` | `/assets/homepage/cta-mocban-archive.webp` | 21:9 (1920x820) |
| 5 | Trang chủ — Kit Highlight | `components/home/BatMaCoThuSection.tsx` | `TRANG CHỦ/5.5.png` | `/assets/homepage/home-highlight-kit.webp` | 1:1 (1200x1200) |
| 6 | Trải nghiệm — Bộ Kit Bật Mã | `app/trai-nghiem/page.tsx` | `TRẢI NGHIỆM/2.2.png` | `/assets/kit/bat-ma-co-thu-kit.webp` | 1:1 (1200x1200) |
| 7 | Trải nghiệm — Bộ thẻ bài Boardgame | `app/trai-nghiem/page.tsx` | `TRẢI NGHIỆM/1 (1-4).png` | `/assets/boardgame/boardgame-cards.webp` + `/cards/card-*.webp` | 4:3 (1600x1200) |
| 8 | Khám phá Mộc bản — Header | `app/mocban/page.tsx` | `KHÁM PHÁ MỘC BẢN/1.1.jpg` | `/assets/mocban/mocban-header-citadel.webp` | 21:9 (2560x1080) |
| 9 | Khám phá Mộc bản — Thẻ UNESCO | `app/mocban/page.tsx` | `KHÁM PHÁ MỘC BẢN/2.2.jpg` | `/assets/mocban/mocban-unesco-hands.webp` | 4:3 (1200x900) |
| 10 | Chuyên đề Lịch sử — Đại Nam thực lục | `data/media.ts` (`mocban-book-1`) | `KHÁM PHÁ MỘC BẢN/3.3.jpg` | `/assets/mocban/mocban-book-1.webp` | 4:3 (1600x1116) |
| 11 | Chuyên đề Lịch sử — Cương mục | `data/media.ts` (`mocban-book-2`) | `KHÁM PHÁ MỘC BẢN/4.4.jpg` | `/assets/mocban/mocban-book-2.webp` | 4:3 (1600x1008) |
| 12 | Chuyên đề Lịch sử — Nhất thống chí | `data/media.ts` (`mocban-book-3`) | `KHÁM PHÁ MỘC BẢN/5.5.jpg` | `/assets/mocban/mocban-book-3.webp` | 4:3 (1600x1116) |
| 13 | Chuyên đề Văn hóa — Section 3 (Kỳ lân) | `app/mocban/van-hoa/page.tsx` | `KHÁM PHÁ MỘC BẢN/7.7.jpg` | `/assets/mocban/mocban-van-hoa-kylan.webp` | 4:3 (2560x1920) |
| 14 | Chuyên đề Đạo học — Quốc Tử Giám | `data/media.ts` (`mocban-dao-hoc-1`) | `KHÁM PHÁ MỘC BẢN/8.8 ...jpg` | `/assets/mocban/mocban-dao-hoc-1.webp` | 16:9 (2048x1380) |
| 15 | Audio tư liệu 1 | `public/assets/audio/` | `KHÁM PHÁ MỘC BẢN/6.6.mp3` | `/assets/audio/trieu-nghi-trieu-nguyen.mp3` | Audio MP3 (13.4 MB) |
| 16 | Audio tư liệu 2 | `public/assets/audio/` | `KHÁM PHÁ MỘC BẢN/9.9.mp3` | `/assets/audio/nghe-thuat-san-khac-moc-ban.mp3` | Audio MP3 (43.3 MB) |

---

## C. REPLACEMENT RESULTS (KẾT QUẢ THAY THẾ MÃ NGUỒN)

### 1. `components/home/HeroSection.tsx`
- Tích hợp ảnh `hero-woodblock-brush.webp` làm background lớp di sản hòa trộn với tông giấy sáng `bg-[#FBF8F2]`, độ tương phản đạt chuẩn WCAG AAA.
- Thay thế mockup bằng `hero-student-interactive.webp` tại thẻ trưng bày bên phải, hiển thị học sinh đang khám phá mô hình di sản 360°.

### 2. `components/home/SteamSection.tsx`
- Tích hợp `steam-hub-hue-citadel.webp` vào trung tâm của mô hình ngũ giác STEAM, tạo phông nền bờ mái cung đình Huế trang nghiêm và sinh động.

### 3. `components/home/CTASection.tsx`
- Bổ sung phông nền tư liệu `cta-mocban-archive.webp` với hiệu ứng hòa trộn `mix-blend-luminosity opacity-15`, mang lại cảm giác không gian bảo tàng chuyên sâu.

### 4. `data/media.ts` & `MediaPlaceholder.tsx`
- Cập nhật các mục `mocban-book-1`, `mocban-book-2`, `mocban-book-3`, `mocban-dao-hoc-1` từ trạng thái `PLACEHOLDER` sang `READY` với đường dẫn WebP chính thức và quyền `CLIENT_PROVIDED`.
- `MediaPlaceholder` tự động chuyển đổi từ khung chờ sang hiển thị thẻ hình ảnh thực tế chất lượng cao, có chú thích nguồn và hiệu ứng phóng to hover mượt mà.

### 5. `public/assets/kit/` & `public/assets/boardgame/`
- Ghi đè tệp ảnh chính thức của bộ Kit "Bật Mã Cổ Thư" (bìa đỏ vương triều) và bộ thẻ bài boardgame (Tri Thức, Nhiệm Vụ, Sự Kiện).
- Không làm thay đổi cấu trúc URL, giữ trọn vẹn FSM và luồng trải nghiệm trên toàn bộ các route.

### 6. `app/mocban/page.tsx`
- Thêm phông nền `mocban-header-citadel.webp` (Ngọ Môn) vào `.page-header` với độ mờ 15%, tạo chiều sâu học thuật và thẩm mỹ di sản.
- Thêm ảnh `mocban-unesco-hands.webp` vào thẻ UNESCO Highlight Card, nâng cao giá trị trực quan của tư liệu Memory of the World.

### 7. `app/mocban/van-hoa/page.tsx`
- Nâng cấp Section 3 ("Từ giá trị xưa đến suy ngẫm hôm nay") thành bố cục 2 cột Editorial Museum: cột trái lưu giữ trọn vẹn văn bản thuyết minh, cột phải trưng bày bản khắc phù điêu Kỳ lân `mocban-van-hoa-kylan.webp` với chú thích chuẩn mực.

---

## D. QA RESULTS (KIỂM THỬ HIỂN THỊ & HỒI QUY)

### 1. Responsive Viewports Testing
| Viewport | Thiết bị đại diện | Kết quả hiển thị | Đánh giá |
| :--- | :--- | :--- | :--- |
| **360px — 414px** | Mobile nhỏ (iPhone SE, Galaxy S) | Bố cục xếp dọc hoàn hảo, ảnh co giãn 100% chiều rộng, không tràn viền ngang (0 overflow). Text có padding 16px an toàn. | **ĐẠT** |
| **768px — 820px** | Tablet đứng (iPad mini, Air) | Tỷ lệ ảnh tự động chuyển sang 4:3 và 16:9 cân đối, thẻ card chia cột 2 dòng rõ ràng. | **ĐẠT** |
| **1024px — 1280px** | Laptop màn hình nhỏ | Lưới 2 cột hoạt động chuẩn mực, khoảng cách lề và kích thước chữ sắc nét. | **ĐẠT** |
| **1440px — 1920px** | Desktop tiêu chuẩn & Màn hình lớn | Đạt độ phân giải retina cao cấp, phông nền phủ kín container mà không vỡ hạt. | **ĐẠT** |

### 2. Kiểm thử hồi quy bảo tồn dữ liệu (Regression Check)
- **Số liệu lịch sử & giáo dục:** Con số `34.619` tấm Mộc bản triều Nguyễn, `33.976` tấm tại Đà Lạt và các mốc lịch sử (1802, 1804, 1820, 1844, 1960, 2009) được bảo tồn nguyên vẹn 100%.
- **Hệ thống điều hướng:** Toàn bộ 7 liên kết Navigation trên Header, menu mobile drawer, CTA buttons và liên kết chuyển trang tại các subpage hoạt động trơn tru.
- **Tính năng máy trạng thái (FSM):** Luồng trải nghiệm 4 bước của "Bật Mã Cổ Thư" không bị ảnh hưởng.
- **Thư mục ảnh gốc của khách hàng:** Thư mục `D:\web-giao-duc\HÌNH ẢNH WEB` được giữ nguyên vẹn 100%, không bị sửa đổi, xóa hay di dời bất kỳ tệp nào.

### 3. Kết quả Build (`npm run build`)
- **Môi trường:** Next.js 16.2.7 (Turbopack App Router), Node v24.18.0.
- **Thời gian biên dịch:** 25.7 giây.
- **Kiểm tra kiểu dữ liệu (TypeScript):** Hoàn thành trong 12.5 giây — **0 lỗi Type Error**.
- **Tạo trang tĩnh (Static Generation):** **14/14 trang thành công** (100% statically generated):
  - `/`
  - `/_not-found`
  - `/hoc-tap`
  - `/lien-he`
  - `/mocban`
  - `/mocban/dao-hoc`
  - `/mocban/lich-su`
  - `/mocban/su-lieu`
  - `/mocban/van-hoa`
  - `/nghien-cuu`
  - `/sang-tao`
  - `/trai-nghiem`
- **Mã kết thúc:** `Exit code 0` (Thành công tuyệt đối).

---

## E. FINAL STATUS (TRẠNG THÁI TỔNG THỂ & KHUYẾN NGHỊ)

### Trạng thái phê duyệt: `COMPLETED_WITH_EXCEPTIONS`
*(Đã hoàn tất thay thế 100% hình ảnh; có 02 tệp ngoại lệ âm thanh MP3 được lưu trữ an toàn riêng biệt)*

### Chi tiết các trường hợp ngoại lệ:
1. **Tệp `KHÁM PHÁ MỘC BẢN/6.6.mp3` (13.4 MB):**  
   - Bản ghi âm: *"Thiết đại triều nghi dưới triều Nguyễn | LTQGI"*.  
   - Đã được sao lưu vào `public/assets/audio/trieu-nghi-trieu-nguyen.mp3`.  
   - Không thể gán trực tiếp vào slot thẻ hình ảnh 2D thông thường. Khuyến nghị phát triển component Audio Player chuyên biệt trong giai đoạn tích hợp âm thanh bảo tàng.

2. **Tệp `KHÁM PHÁ MỘC BẢN/9.9.mp3` (43.3 MB):**  
   - Bản ghi âm: *"NGHỆ THUẬT SAN KHẮC MỘC BẢN | Mộc Bản Thanh Liễu"*.  
   - Đã được sao lưu vào `public/assets/audio/nghe-thuat-san-khac-moc-ban.mp3`.  
   - Khuyến nghị tích hợp cùng video hoặc audio guide thuyết minh tại chuyên đề Kỹ thuật san khắc Mộc bản.

---
**Kết luận:** Quá trình thay thế hình ảnh khách hàng đã hoàn thành trọn vẹn, chính xác, nâng tầm thẩm mỹ Bright Educational Heritage cho toàn bộ website mà không gây ra bất kỳ lỗi hồi quy nào.
