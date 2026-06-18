"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { projectInfo } from "@/data/project";

const navItems = [
  { label: "사업개요", href: "/overview" },
  { label: "입지안내", href: "/location" },
  { label: "단지배치도", href: "/site-plan" },
  { label: "평면타입", href: "/unit-types" },
  { label: "오시는길", href: "/directions" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-charcoal/90 backdrop-blur-sm border-b border-line">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-display text-lg font-bold text-ivory tracking-wide shrink-0"
        >
          {projectInfo.shortName}
        </Link>

        <nav aria-label="주요 섹션 이동" className="lg:pr-[280px]">
          <ul className="hidden sm:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm transition-colors ${
                    pathname === item.href
                      ? "text-gold-soft"
                      : "text-stone hover:text-gold-soft"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 모바일 상담신청 버튼 — 바텀시트 열기 */}
        <button
          onClick={() =>
            window.dispatchEvent(new CustomEvent("open-contact"))
          }
          className="sm:hidden text-sm text-gold-soft border border-gold/40 px-4 py-2"
        >
          상담신청
        </button>
      </div>
    </header>
  );
}
