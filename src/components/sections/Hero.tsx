"use client";

import Image from "next/image";
import Link from "next/link";
import { projectInfo } from "@/data/project";
import { Eyebrow } from "@/components/ui/SectionHeading";

export function Hero() {
  return (
    <section className="relative min-h-[55vh] sm:min-h-screen flex items-center text-ivory overflow-hidden">
      {/* 배경 이미지 + 오버레이 */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-main.jpg"
          alt="상동역 롯데캐슬 시그니처 단지 조감도"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top sm:object-center"
        />
        {/* 하단에서 올라오는 어두운 그라디언트 — 텍스트 가독성 확보 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />
      </div>

      <div className="w-full max-w-7xl px-6 sm:px-10 lg:px-16 py-8 sm:py-32 flex flex-col items-start text-left">
        <Eyebrow dark>{projectInfo.subwayLine} 초역세권 분양</Eyebrow>

        <h1 className="text-display mt-5 text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.6rem] font-bold leading-[1.2] text-ivory max-w-2xl">
          7호선 초역세권,<br />부천의 새로운 랜드마크
        </h1>

        <p
          className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-ivory/85 leading-relaxed max-w-xl"
          style={{ textShadow: "0 1px 10px rgba(0,0,0,0.85)" }}
        >
          {projectInfo.subTagline}. {projectInfo.location}에서&nbsp;
          {projectInfo.scale} 규모로 선보입니다.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
          <button
            onClick={() =>
              window.dispatchEvent(new CustomEvent("open-contact"))
            }
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gold text-charcoal text-sm font-semibold tracking-wide hover:bg-gold-soft transition-colors"
          >
            상담 신청하기
          </button>
          <Link
            href="/overview"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-ivory/30 text-ivory text-sm font-semibold tracking-wide hover:border-gold hover:text-gold transition-colors"
          >
            사업개요 보기
          </Link>
        </div>

        <dl className="mt-12 sm:mt-16 grid grid-cols-3 gap-6 sm:gap-10 border-t border-white/20 pt-6 sm:pt-8">
          <div className="flex flex-col items-start">
            <dt className="text-xs text-stone tracking-wide">규모</dt>
            <dd className="tnum mt-1 text-xl sm:text-2xl text-gold-soft">{projectInfo.scaleShort}</dd>
          </div>
          <div className="flex flex-col items-start">
            <dt className="text-xs text-stone tracking-wide">세대수</dt>
            <dd className="tnum mt-1 text-xl sm:text-2xl text-gold-soft">1,859</dd>
          </div>
          <div className="flex flex-col items-start">
            <dt className="text-xs text-stone tracking-wide">분양</dt>
            <dd className="tnum mt-1 text-xl sm:text-2xl text-gold-soft">{projectInfo.saleDateShort}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
