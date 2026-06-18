import type { Metadata } from "next";
import { UnitTypes } from "@/components/sections/UnitTypes";

export const metadata: Metadata = {
  title: "평면타입 | 상동역 롯데캐슬",
};

export default function UnitTypesPage() {
  return (
    <main className="pt-16">
      <UnitTypes />
    </main>
  );
}
