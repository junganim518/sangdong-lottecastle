import Link from "next/link";
import { Hero } from "@/components/sections/Hero";

const quickLinks = [
  {
    num: "01",
    title: "사업개요",
    href: "/overview",
    desc: "위치·규모·시공사 안내",
  },
  {
    num: "02",
    title: "입지안내",
    href: "/location",
    desc: "교통 및 생활 인프라",
  },
  {
    num: "03",
    title: "단지배치도",
    href: "/site-plan",
    desc: "단지 배치 및 조경 계획",
  },
  {
    num: "04",
    title: "평면타입",
    href: "/unit-types",
    desc: "아파트 타입별 면적 안내",
  },
];

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />

      <section className="bg-ivory py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-charcoal/10">
            {quickLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-ivory p-8 flex flex-col gap-3 hover:bg-charcoal transition-colors"
              >
                <span className="tnum text-sm text-gold">{item.num}</span>
                <span className="text-display text-xl font-bold text-charcoal group-hover:text-ivory transition-colors">
                  {item.title}
                </span>
                <span className="text-sm text-charcoal/55 group-hover:text-stone transition-colors leading-relaxed">
                  {item.desc}
                </span>
                <span className="mt-auto text-gold/60 group-hover:text-gold transition-colors text-lg">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
