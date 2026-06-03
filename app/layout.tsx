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
    default: "STEM MOCBAN EDUCATION — Giáo dục Di sản Khoa học",
    template: "%s | STEM MOCBAN EDUCATION",
  },
  description:
    "Khám phá di sản Mộc bản triều Nguyễn qua lăng kính STEM — giáo dục liên ngành kết nối lịch sử, khoa học và công nghệ cho học sinh Việt Nam.",
  keywords: [
    "mộc bản triều Nguyễn",
    "STEM giáo dục",
    "di sản UNESCO",
    "nghiên cứu khoa học",
    "giáo dục di sản",
    "học sinh THPT",
    "Đà Lạt",
    "lưu trữ quốc gia",
  ],
  authors: [{ name: "STEM MOCBAN EDUCATION" }],
  creator: "STEM MOCBAN EDUCATION",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://stemmocban.edu.vn",
    siteName: "STEM MOCBAN EDUCATION",
    title: "STEM MOCBAN EDUCATION — Giáo dục Di sản Khoa học",
    description:
      "Khám phá di sản Mộc bản triều Nguyễn qua lăng kính STEM — kết nối nghiên cứu khoa học với giáo dục di sản.",
  },
  twitter: {
    card: "summary_large_image",
    title: "STEM MOCBAN EDUCATION",
    description: "Giáo dục di sản Mộc bản qua lăng kính STEM",
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
