"use client";

import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-charcoal/90 backdrop-blur-sm border-b border-line">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between">
        {/* 로고 */}
        <Link
          href="/"
          onClick={closeMenu}
          className="text-display text-lg font-bold text-ivory tracking-wide shrink-0"
        >
          {projectInfo.shortName}
        </Link>

        {/* 데스크탑 네비게이션 */}
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

        {/* 모바일 햄버거 버튼 */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={menuOpen}
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] text-ivory"
        >
          <span
            className={`block h-[1.5px] w-6 bg-current transition-transform duration-200 origin-center ${
              menuOpen ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-current transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-current transition-transform duration-200 origin-center ${
              menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      <div
        className={`sm:hidden overflow-hidden transition-[max-height,opacity] duration-250 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="모바일 메뉴" className="bg-charcoal/95 border-t border-line">
          <ul className="px-6 py-4 flex flex-col">
            <li>
              <Link
                href="/"
                onClick={closeMenu}
                className={`flex items-center py-3 text-sm border-b border-line/50 transition-colors ${
                  pathname === "/" ? "text-gold-soft" : "text-stone hover:text-gold-soft"
                }`}
              >
                홈
              </Link>
            </li>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className={`flex items-center py-3 text-sm border-b border-line/50 last:border-0 transition-colors ${
                    pathname === item.href
                      ? "text-gold-soft"
                      : "text-stone hover:text-gold-soft"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <button
                onClick={() => {
                  closeMenu();
                  window.dispatchEvent(new CustomEvent("open-contact"));
                }}
                className="w-full py-3 bg-gold text-charcoal text-sm font-semibold tracking-wide hover:bg-gold-soft transition-colors"
              >
                관심 고객 등록
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
