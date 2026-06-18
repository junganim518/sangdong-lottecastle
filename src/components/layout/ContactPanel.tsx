"use client";

import { useState, useEffect, type FormEvent } from "react";
import { projectInfo } from "@/data/project";

type SubmitState = "idle" | "submitting" | "success" | "error";

function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  if (digits.length < 4) return digits;
  if (digits.length < 8) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
}

function ContactFormFields() {
  const [state, setState] = useState<SubmitState>("idle");
  const [agreed, setAgreed] = useState(false);
  const [phone, setPhone] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!agreed) return;
    setState("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      birth: formData.get("birth"),
      message: formData.get("message"),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(await res.text());
      setState("success");
      form.reset();
      setPhone("");
      setAgreed(false);
    } catch {
      setState("error");
    }
  }

  const inputClass =
    "w-full bg-white/[0.07] border-b border-line focus:border-gold outline-none px-3 py-2 text-ivory placeholder:text-stone/50 transition-colors text-sm";
  const labelClass = "block text-sm text-stone mb-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="cf-name" className={labelClass}>성함</label>
        <input
          id="cf-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={inputClass}
          placeholder="홍길동"
        />
      </div>

      <div>
        <label htmlFor="cf-phone" className={labelClass}>연락처</label>
        <input
          id="cf-phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          pattern="[0-9\-]{9,13}"
          maxLength={13}
          value={phone}
          onChange={(e) => setPhone(formatPhone(e.target.value))}
          className={inputClass}
          placeholder="010-0000-0000"
        />
      </div>

      <div>
        <label htmlFor="cf-birth" className={labelClass}>생년월일 (6자리)</label>
        <input
          id="cf-birth"
          name="birth"
          type="text"
          required
          inputMode="numeric"
          pattern="[0-9]{6}"
          maxLength={6}
          className={inputClass}
          placeholder="901231"
        />
      </div>

      <div>
        <label htmlFor="cf-message" className={labelClass}>
          문의사항 <span className="text-stone/50 text-xs">(선택)</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={2}
          className={`${inputClass} resize-none`}
          placeholder="문의하실 내용을 남겨주세요"
        />
      </div>

      {/* 개인정보 수집동의 */}
      <div className="border border-line p-3">
        <label className="flex items-center gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="accent-gold shrink-0"
          />
          <span className="text-ivory text-sm">개인정보 수집동의 (필수)</span>
        </label>
        <div className="mt-2.5 h-[110px] overflow-y-auto bg-black/20 border border-white/[0.06] p-2.5 space-y-1.5 text-xs text-stone/70 leading-relaxed">
          <p className="font-medium text-stone/90">개인정보 수집 및 이용 동의</p>
          <p>
            1. 개인정보의 수집 및 이용 목적<br />
            본 홈페이지는 고객님의 문의사항에 대한 답변 및 안내를 위하여 필요한 최소한의 범위 내에서 개인정보를 수집하고 있습니다.
          </p>
          <p>
            2. 수집하는 개인정보의 항목<br />
            · 필수항목 : 이름, 연락처, 생년월일, 문의사항<br />
            · 수집방법 : 웹사이트에 고객이 직접 입력
          </p>
          <p>
            3. 개인정보의 처리 및 보유기간<br />
            본 홈페이지는 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.<br />
            · 보존 항목 : 이름, 연락처, 생년월일, 문의사항<br />
            · 보존 근거 : 소비자의 불만 또는 분쟁처리에 관한 기록 (전자상거래 등에서의 소비자보호에 관한 법률)<br />
            · 보존 기간 : 3년
          </p>
          <p>
            4. 부동의에 따른 고지사항<br />
            위 개인정보 제공에 대해서 부동의할 수 있으나, 이 경우 게시판의 내용 입력을 할 수 없어 관심고객 등록이 불가능합니다.
          </p>
        </div>
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full py-3 bg-gold text-charcoal text-sm font-semibold tracking-wide hover:bg-gold-soft transition-colors disabled:opacity-60"
      >
        {state === "submitting" ? "접수 중..." : "관심 고객 등록"}
      </button>

      {state === "success" && (
        <p className="text-sm text-gold-soft text-center">
          등록이 완료되었습니다. 빠르게 연락드리겠습니다.
        </p>
      )}
      {state === "error" && (
        <p className="text-sm text-red-400 text-center">
          접수 중 문제가 발생했습니다. 다시 시도해주세요.
        </p>
      )}
    </form>
  );
}

export function ContactPanel() {
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    const handler = () => setSheetOpen(true);
    window.addEventListener("open-contact", handler);
    return () => window.removeEventListener("open-contact", handler);
  }, []);

  useEffect(() => {
    if (sheetOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [sheetOpen]);

  return (
    <>
      {/* 데스크탑: 오른쪽 고정 패널 */}
      <aside
        className="hidden lg:flex fixed right-0 top-16 bottom-0 w-[360px] bg-charcoal-soft border-l border-gold/40 flex-col z-40 overflow-y-auto"
        style={{
          boxShadow: "-8px 0 32px rgba(0,0,0,0.55), -1px 0 0 rgba(201,163,104,0.12)",
        }}
      >
        {/* 상단 골드 강조선 */}
        <div className="h-[3px] bg-gold shrink-0" />

        {/* 헤더 */}
        <div className="px-5 pt-4 pb-3 border-b border-line shrink-0">
          <p className="flex items-center gap-2 text-xs tracking-eyebrow uppercase text-gold">
            <span className="h-px w-4 bg-gold" aria-hidden="true" />
            관심 고객 등록
          </p>
          <p className="mt-1.5 text-display text-base font-bold text-ivory leading-snug">
            {projectInfo.shortName}
          </p>
          <p className="mt-0.5 text-xs text-stone leading-relaxed">
            관심 고객으로 등록해주시면 분양 정보를 가장 빠르게 안내드립니다.
          </p>
        </div>

        <div className="flex-1 p-5">
          <ContactFormFields />
        </div>
      </aside>

      {/* 모바일: 하단 고정 버튼 */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-charcoal border-t border-line p-3">
        <button
          onClick={() => setSheetOpen(true)}
          className="w-full py-4 bg-gold text-charcoal text-base font-semibold tracking-wide hover:bg-gold-soft transition-colors"
        >
          상담 신청하기
        </button>
      </div>

      {/* 모바일: 바텀시트 */}
      {sheetOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end">
          {/* 오버레이 */}
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setSheetOpen(false)}
          />
          {/* 시트 */}
          <div className="relative bg-charcoal-soft rounded-t-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-charcoal-soft px-5 pt-5 pb-4 border-b border-line flex items-center justify-between z-10">
              <div>
                <p className="text-sm tracking-eyebrow uppercase text-gold">관심 고객 등록</p>
                <p className="mt-0.5 text-base font-semibold text-ivory">
                  {projectInfo.shortName}
                </p>
              </div>
              <button
                onClick={() => setSheetOpen(false)}
                aria-label="닫기"
                className="text-stone hover:text-ivory transition-colors p-1"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-5 py-6 pb-10">
              <ContactFormFields />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
