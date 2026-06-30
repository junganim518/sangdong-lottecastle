import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { contactInfo, locationInfo } from "@/data/project";

export const metadata: Metadata = {
  title: "오시는길 | 상동역 롯데캐슬 시그니처",
};

const infoItems = [
  {
    label: "모델하우스 주소",
    value: contactInfo.modelHouseAddress,
  },
  {
    label: "오픈 일정",
    value: contactInfo.modelHouseOpenDate,
  },
  {
    label: "운영 시간",
    value: contactInfo.modelHouseHours,
  },
  {
    label: "주차 안내",
    value: contactInfo.modelHouseParkingInfo,
  },
  {
    label: "상담 전화",
    value: contactInfo.phone,
  },
];

const TBD_VALUES = ["추후 안내", "모델하우스 주소 추후 안내"];

export default function DirectionsPage() {
  return (
    <main className="pt-16">
      <section className="bg-ivory py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <SectionHeading
            eyebrow="Directions"
            title="오시는길"
            description="모델하우스 위치 및 방문 안내입니다. 오픈 일정과 정확한 주소는 확정 즉시 업데이트됩니다."
          />

          {/* 지도 자리 */}
          <div className="mt-14">
            <ImagePlaceholder
              label="모델하우스 약도 / 지도 (확정 후 업데이트 예정)"
              aspect="aspect-[16/7]"
            />
          </div>

          {/* 안내 정보 그리드 */}
          <dl className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-charcoal/10">
            {infoItems.map((item) => {
              const isPending = TBD_VALUES.includes(item.value);
              return (
                <div
                  key={item.label}
                  className="border-b border-r border-charcoal/10 px-6 py-7 first:lg:border-l"
                >
                  <dt className="text-sm tracking-eyebrow uppercase text-gold">
                    {item.label}
                  </dt>
                  <dd
                    className={`mt-3 text-lg font-medium leading-snug ${
                      isPending
                        ? "text-charcoal/30 italic text-base"
                        : "text-charcoal"
                    }`}
                  >
                    {item.value}
                  </dd>
                </div>
              );
            })}
          </dl>

          {/* 대중교통 안내 — locationInfo 재활용 */}
          <div className="mt-16 grid lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-base tracking-eyebrow uppercase text-gold mb-5">
                대중교통
              </h3>
              <ul className="space-y-4">
                {locationInfo.transitPoints.map((p) => (
                  <li
                    key={p.label}
                    className="flex gap-4 border-b border-charcoal/10 pb-4"
                  >
                    <span className="text-gold-soft font-semibold w-16 shrink-0 text-base">
                      {p.label}
                    </span>
                    <span className="text-charcoal/70 text-base leading-relaxed">
                      {p.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base tracking-eyebrow uppercase text-gold mb-5">
                주변 인프라
              </h3>
              <ul className="space-y-4">
                {locationInfo.amenityPoints.map((p) => (
                  <li
                    key={p.label}
                    className="flex gap-4 border-b border-charcoal/10 pb-4"
                  >
                    <span className="text-gold-soft font-semibold w-16 shrink-0 text-base">
                      {p.label}
                    </span>
                    <span className="text-charcoal/70 text-base leading-relaxed">
                      {p.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
