import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "STEAM MOCBAN EDUCATION — Di sản • Giáo dục • Công nghệ • Trải nghiệm • Sáng tạo",
    template: "%s | STEAM MOCBAN EDUCATION",
  },
  description:
    "Khám phá Mộc bản triều Nguyễn bằng một cách mới — Chuyển hóa di sản tư liệu thế giới thành các trải nghiệm học tập STEAM sáng tạo cho học sinh THPT.",
  keywords: [
    "mộc bản triều Nguyễn",
    "STEAM giáo dục",
    "giáo dục di sản",
    "nghiên cứu khoa học",
    "học sinh THPT",
    "Huế",
    "Đại Nam thực lục",
    "Mộc Bản Ký Sự",
    "Bật Mã Cổ Thư",
  ],
  authors: [{ name: "STEAM MOCBAN EDUCATION" }],
  creator: "STEAM MOCBAN EDUCATION",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://steam-mocban.vercel.app",
    siteName: "STEAM MOCBAN EDUCATION",
    title: "STEAM MOCBAN EDUCATION — Di sản • Giáo dục • Công nghệ • Trải nghiệm • Sáng tạo",
    description:
      "Khám phá Mộc bản triều Nguyễn bằng một cách mới — Chuyển hóa di sản tư liệu thế giới thành các trải nghiệm học tập STEAM sáng tạo cho học sinh THPT.",
  },
  twitter: {
    card: "summary_large_image",
    title: "STEAM MOCBAN EDUCATION",
    description: "Khám phá Mộc bản triều Nguyễn bằng một cách mới",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="flex flex-col min-h-screen font-sans antialiased bg-[#FAFAF7] text-[#1C2B3A]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
