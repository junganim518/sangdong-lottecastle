import { overviewItems, highlights } from "@/data/project";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Overview() {
  return (
    <section id="overview" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionHeading
          eyebrow="Project Overview"
          title="사업개요"
          description="아파트 1,859세대로 구성된 대단지 프로젝트의 기본 정보입니다."
        />

        {/* 스펙 카드 그리드 — 표 대신 카드로, 헤어라인 구분 */}
        <dl className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-charcoal/10">
          {overviewItems.map((item) => (
            <div
              key={item.label}
              className="border-b border-r border-charcoal/10 px-6 py-7 first:lg:border-l"
              style={{ borderLeftWidth: undefined }}
            >
              <dt className="text-sm tracking-eyebrow uppercase text-gold">
                {item.label}
              </dt>
              <dd className="mt-3 text-lg sm:text-xl font-medium leading-snug text-charcoal">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* 특장점 — 4개, 번호는 실제 순번 정보를 담고 있진 않으므로 단순 인덱스 라벨로 사용 */}
        <div className="mt-24">
          <h3 className="text-display text-3xl font-bold text-charcoal mb-10">
            왜 {`상동역 롯데캐슬`}인가
          </h3>
          <div className="grid sm:grid-cols-2 gap-px bg-charcoal/10">
            {highlights.map((h) => (
              <div key={h.number} className="bg-ivory p-8 sm:p-10">
                <span className="tnum text-base text-gold">{h.number}</span>
                <h4 className="text-display mt-3 text-2xl font-bold text-charcoal">
                  {h.title}
                </h4>
                <p className="mt-3 text-base sm:text-lg text-charcoal/65 leading-relaxed">
                  {h.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
