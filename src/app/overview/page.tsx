import type { Metadata } from "next";
import { Overview } from "@/components/sections/Overview";

export const metadata: Metadata = {
  title: "사업개요 | 상동역 롯데캐슬 시그니처",
};

export default function OverviewPage() {
  return (
    <main className="pt-16">
      <Overview />
    </main>
  );
}
