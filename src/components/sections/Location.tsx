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

        {/* 지도 — 풀 너비, 와이드 비율 */}
        <div className="mt-14">
          {locationInfo.mapEmbedSrc ? (
            <iframe
              src={locationInfo.mapEmbedSrc}
              className="w-full aspect-[16/7] border border-line"
              loading="lazy"
              title="단지 위치 지도"
            />
          ) : (
            <div className="relative w-full aspect-[16/7] border border-line overflow-hidden shadow-lg">
              <Image
                src="/images/location-map.png"
                alt="상동역 롯데캐슬 단지 위치 지도"
                fill
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="object-cover object-center"
              />
            </div>
          )}
        </div>

        {/* 교통 + 생활인프라 — 지도 아래 2단 그리드 */}
        <div className="mt-12 grid sm:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h3 className="text-base tracking-eyebrow uppercase text-gold mb-5">
              교통
            </h3>
            <ul className="space-y-4">
              {locationInfo.transitPoints.map((p) => (
                <li key={p.label} className="flex gap-4 border-b border-line pb-4">
                  <span className="text-gold-soft font-semibold w-16 shrink-0 text-base">
                    {p.label}
                  </span>
                  <span className="text-stone text-base leading-relaxed">
                    {p.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base tracking-eyebrow uppercase text-gold mb-5">
              생활 인프라
            </h3>
            <ul className="space-y-4">
              {locationInfo.amenityPoints.map((p) => (
                <li key={p.label} className="flex gap-4 border-b border-line pb-4">
                  <span className="text-gold-soft font-semibold w-16 shrink-0 text-base">
                    {p.label}
                  </span>
                  <span className="text-stone text-base leading-relaxed">
                    {p.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
