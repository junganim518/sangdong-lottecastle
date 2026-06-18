import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = {
  title: "단지배치도 | 상동역 롯데캐슬",
};

export default function SitePlanPage() {
  return (
    <main className="pt-16">
      <section className="bg-ivory py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <SectionHeading
            eyebrow="Site Plan"
            title="단지배치도"
            description="단지 전체의 동 배치 및 조경 계획을 확인하세요. 추후 실제 배치도 이미지로 교체됩니다."
          />

          <div className="mt-14">
            <ImagePlaceholder
              label="단지배치도 (이미지 교체 예정)"
              aspect="aspect-[16/9]"
            />
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-px bg-charcoal/10">
            <div className="bg-ivory p-8">
              <p className="text-sm tracking-eyebrow uppercase text-gold mb-3">
                동 배치
              </p>
              <p className="text-base text-charcoal/70 leading-relaxed">
                각 동의 배치와 동선 계획은 추후 확정 배치도로 업데이트될 예정입니다.
              </p>
            </div>
            <div className="bg-ivory p-8">
              <p className="text-sm tracking-eyebrow uppercase text-gold mb-3">
                조경 계획
              </p>
              <p className="text-base text-charcoal/70 leading-relaxed">
                단지 중앙 커뮤니티 공원 및 지하화 주차장 상부 조경으로
                쾌적한 보행 환경을 조성합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
