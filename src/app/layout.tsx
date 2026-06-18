import type { Metadata } from "next";
import { Noto_Serif_KR, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/sections/Header";
import { ContactPanel } from "@/components/layout/ContactPanel";
import { projectInfo } from "@/data/project";
import "./globals.css";

const notoSerifKR = Noto_Serif_KR({
  variable: "--font-noto-serif-kr",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "상동역 롯데캐슬 | 부천 상동 7호선 초역세권 아파트",
  description:
    "경기도 부천시 원미구 상동 540-1번지, 7호선 상동역 초역세권. 지하 8층~지상 49층 7개동, 아파트 1,859세대. 2026년 07월 분양 예정.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSerifKR.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
        />
        <style>{`:root{--font-pretendard: 'Pretendard', sans-serif;}`}</style>
      </head>
      <body className="min-h-full flex flex-col bg-ivory text-charcoal">
        <Header />
        {/* 데스크탑에서 오른쪽 고정 패널(360px) 공간 확보 */}
        <div className="flex-1 lg:pr-[360px] pb-20 lg:pb-0">
          {children}
        </div>
        <footer className="lg:pr-[360px] bg-charcoal text-stone text-xs py-10 pb-28 lg:pb-10 text-center border-t border-line">
          <p className="text-stone/70">
            COPYRIGHT ⓒ {projectInfo.shortName}. ALL RIGHTS RESERVED.
          </p>
          <p className="mt-2 text-stone/50 leading-relaxed max-w-2xl mx-auto px-4">
            ※ 본 웹사이트에 기재된 사업계획은 인·허가 과정에서 일부 변경될 수 있으며,
            사용된 CG 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다소 차이가 있을 수 있습니다.
          </p>
        </footer>
        <ContactPanel />
      </body>
    </html>
  );
}
