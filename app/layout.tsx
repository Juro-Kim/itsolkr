import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ITSOLKR - 풀스택 AI 개발 솔루션",
  description: "ITSOLKR은 풀스택 모바일·웹 개발 및 AI 솔루션을 제공합니다. 배달 플랫폼, 데이팅 앱, 맞춤형 소프트웨어 외주 개발.",
  keywords: ["풀스택 개발", "모바일 앱", "React Native", "Next.js", "외주 개발", "ITSOLKR"],
  verification: {
    google: "CRgQbsGpIcZ8qPVye51xcZUsyW9FFPw8CBfjJJhB6EI",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${inter.className} flex flex-col min-h-screen bg-white text-gray-900`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
