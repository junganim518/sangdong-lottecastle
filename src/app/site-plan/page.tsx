import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "단지구성 | 상동역 롯데캐슬 시그니처",
};

export default function SitePlanPage() {
  return (
    <main className="pt-16">
      <section className="bg-ivory py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <SectionHeading
            eyebrow="Site Plan"
            title="단지구성"
            description="단지 배치도와 커뮤니티 시설을 확인하세요."
          />

          <div className="mt-14">
            <Image
              src="/images/site-plan.png"
              alt="상동역 롯데캐슬 시그니처 단지배치도"
              width={2428}
              height={1562}
              sizes="100vw"
              className="w-full h-auto"
              priority
            />
          </div>

          <div className="mt-14">
            <Image
              src="/images/community-info.jpg"
              alt="상동역 롯데캐슬 시그니처 단지구성 안내"
              width={1160}
              height={3479}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
