import Image from "next/image";
import { locationInfo } from "@/data/project";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Location() {
  return (
    <section id="location" className="bg-charcoal text-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionHeading
          eyebrow="Location"
          title="입지 안내"
          description={`${locationInfo.address}. 7호선 상동역과 바로 연결되는 초역세권 입지입니다.`}
          dark
        />

        {/* 입지 안내 이미지 — 전체 너비, 원본 비율 그대로 (세로로 긴 이미지) */}
        <div className="mt-14">
          <Image
            src="/images/location-info.jpg"
            alt="상동역 롯데캐슬 시그니처 입지 안내도"
            width={1160}
            height={2294}
            sizes="100vw"
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
