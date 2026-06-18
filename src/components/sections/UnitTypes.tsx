"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { apartmentUnitTypes, TBD, type UnitType } from "@/data/project";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

function PendingValue({ value }: { value: string }) {
  if (value === TBD) {
    return <span className="text-charcoal/30 italic text-sm">{value}</span>;
  }
  return <>{value}</>;
}

// ─── 라이트박스 모달 ────────────────────────────────────────────────────────────

function LightboxModal({
  unit,
  onClose,
}: {
  unit: UnitType;
  onClose: () => void;
}) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeBtnRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${unit.typeName} 평면도`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
    >
      <div
        className="absolute inset-0 bg-black/75"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-3xl bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-charcoal/10">
          <h2 className="text-display text-lg font-bold text-charcoal">
            {unit.typeName} 평면도
            {unit.isPenthouse && (
              <span className="ml-2 text-sm text-gold font-normal">펜트하우스</span>
            )}
          </h2>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="닫기"
            className="p-1.5 text-charcoal/50 hover:text-charcoal transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M4 4l12 12M16 4L4 16" />
            </svg>
          </button>
        </div>

        <div className="aspect-[4/3] w-full">
          {unit.imageSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={unit.imageSrc}
              alt={`${unit.typeName} 평면도`}
              className="w-full h-full object-contain"
            />
          ) : (
            <ImagePlaceholder
              label={`${unit.typeName} 평면도 - 이미지 준비 중`}
              aspect="aspect-[4/3]"
              className="w-full h-full"
            />
          )}
        </div>

        <div className="px-6 py-4 border-t border-charcoal/10 flex flex-wrap gap-x-8 gap-y-1 text-sm">
          <span className="text-charcoal/55">전용면적 <strong className="tnum text-charcoal font-semibold">{unit.exclusiveArea}</strong></span>
          <span className="text-charcoal/55">공급면적 <PendingValue value={unit.supplyArea} /></span>
          <span className="text-charcoal/55">구성 <PendingValue value={unit.rooms} /></span>
          <span className="text-charcoal/55">세대수 <strong className="text-gold font-semibold">{unit.units}</strong></span>
        </div>
      </div>
    </div>
  );
}

// ─── 카드 ──────────────────────────────────────────────────────────────────────

function UnitCard({ u, onImageClick }: { u: UnitType; onImageClick: () => void }) {
  return (
    <div className="border border-charcoal/10">
      <button
        type="button"
        onClick={onImageClick}
        aria-label={`${u.typeName} 평면도 크게 보기`}
        className="block w-full text-left cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
      >
        <ImagePlaceholder
          label={`${u.typeName} 평면도 - 이미지 교체 예정`}
          aspect="aspect-[4/3]"
        />
      </button>

      <div className="p-5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-display text-xl font-bold text-charcoal">
            {u.typeName}
            {u.isPenthouse && (
              <span className="ml-2 text-xs text-gold font-normal tracking-wide">PH</span>
            )}
          </h3>
          <span className="text-sm text-gold tracking-wide shrink-0">
            {u.units}
          </span>
        </div>
        <dl className="mt-4 space-y-2 text-base">
          <div className="flex justify-between border-b border-charcoal/10 pb-2">
            <dt className="text-charcoal/55">전용면적</dt>
            <dd className="tnum text-charcoal">
              <PendingValue value={u.exclusiveArea} />
            </dd>
          </div>
          <div className="flex justify-between border-b border-charcoal/10 pb-2">
            <dt className="text-charcoal/55">공급면적</dt>
            <dd className="tnum text-charcoal">
              <PendingValue value={u.supplyArea} />
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-charcoal/55">구성</dt>
            <dd className="text-charcoal">
              <PendingValue value={u.rooms} />
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

// ─── 섹션 ──────────────────────────────────────────────────────────────────────

export function UnitTypes() {
  const [lightboxUnit, setLightboxUnit] = useState<UnitType | null>(null);

  const handleClose = useCallback(() => setLightboxUnit(null), []);

  return (
    <section id="unit-types" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionHeading
          eyebrow="Unit Types"
          title="평면도 / 타입 안내"
          description="아파트 타입별 면적과 구성을 확인하세요. 상세 스펙은 순차적으로 공개됩니다."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apartmentUnitTypes.map((u) => (
            <UnitCard key={u.id} u={u} onImageClick={() => setLightboxUnit(u)} />
          ))}
        </div>

        <p className="mt-8 text-sm text-charcoal/40 italic">
          * 공급면적·방 구성 등 상세 스펙은 분양 일정에 따라 순차 공개됩니다.
        </p>
      </div>

      {lightboxUnit && (
        <LightboxModal unit={lightboxUnit} onClose={handleClose} />
      )}
    </section>
  );
}
