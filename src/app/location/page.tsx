import type { Metadata } from "next";
import { Location } from "@/components/sections/Location";

export const metadata: Metadata = {
  title: "입지안내 | 상동역 롯데캐슬 시그니처",
};

export default function LocationPage() {
  return (
    <main className="pt-16">
      <Location />
    </main>
  );
}
