"use client";

import { useState, type FormEvent } from "react";
import { contactInfo, projectInfo } from "@/data/project";
import { SectionHeading } from "@/components/ui/SectionHeading";

type SubmitState = "idle" | "submitting" | "success" | "error";

/**
 * 상담 신청 폼.
 * 필드 구성(이름 / 연락처 / 생년월일 6자리 / 개인정보 동의)은 참고 사이트와 동일하게 유지.
 * 제출 로직은 자리만 잡아두었고, 추후 Google Sheets 또는 Supabase 연동 시
 * handleSubmit 내부의 TODO 부분만 교체하면 됩니다.
 */
export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [agreed, setAgreed] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!agreed) return;

    setState("submitting");
    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      birth: formData.get("birth"),
    };

    try {
      // TODO: 구글 시트 / Supabase 연동 — 예: await fetch("/api/contact", { method: "POST", body: JSON.stringify(payload) })
      console.log("상담 신청 접수(연동 전 임시 로그):", payload);
      await new Promise((r) => setTimeout(r, 600));
      setState("success");
      e.currentTarget.reset();
      setAgreed(false);
    } catch {
      setState("error");
    }
  }

  return (
    <section id="contact" className="bg-charcoal-soft text-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 sm:px-10">
        <SectionHeading
          eyebrow="Contact"
          title="상담 신청"
          description={`${projectInfo.shortName} 분양에 관한 문의사항을 남겨주시면 상담원이 안내드립니다.`}
          dark
          align="center"
        />

        <form onSubmit={handleSubmit} className="mt-14 space-y-6">
          <div>
            <label htmlFor="name" className="block text-base text-stone mb-2">
              성함
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="w-full bg-transparent border-b border-line focus:border-gold outline-none py-3 text-ivory placeholder:text-stone/50 transition-colors"
              placeholder="홍길동"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-base text-stone mb-2">
              연락처
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              pattern="[0-9\-]{9,13}"
              className="w-full bg-transparent border-b border-line focus:border-gold outline-none py-3 text-ivory placeholder:text-stone/50 transition-colors"
              placeholder="010-0000-0000"
            />
          </div>

          <div>
            <label htmlFor="birth" className="block text-base text-stone mb-2">
              생년월일 (6자리)
            </label>
            <input
              id="birth"
              name="birth"
              type="text"
              required
              inputMode="numeric"
              pattern="[0-9]{6}"
              maxLength={6}
              className="w-full bg-transparent border-b border-line focus:border-gold outline-none py-3 text-ivory placeholder:text-stone/50 transition-colors"
              placeholder="901231"
            />
          </div>

          {/* 개인정보 수집동의 */}
          <div className="border border-line p-5 text-base text-stone leading-relaxed">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 accent-gold"
              />
              <span className="text-ivory">개인정보 수집동의 (필수)</span>
            </label>
            <div className="mt-3 space-y-1 text-sm text-stone/80">
              <p>1. 수집/이용 목적: 예약, 문의 등 고객요청 처리 및 결과 회신</p>
              <p>2. 수집하는 항목: 이름, 연락처, 생년월일</p>
              <p>3. 보유/이용 기간: 고객요청 처리 후 3개월</p>
              <p>4. 동의를 거부할 수 있으며, 거부 시 상담 신청이 제한될 수 있습니다.</p>
            </div>
          </div>

          <button
            type="submit"
            disabled={state === "submitting"}
            className="w-full py-4 bg-gold text-charcoal text-base font-semibold tracking-wide hover:bg-gold-soft transition-colors disabled:opacity-60"
          >
            {state === "submitting" ? "접수 중..." : "상담 신청하기"}
          </button>

          {state === "success" && (
            <p className="text-base text-gold-soft text-center">
              신청이 접수되었습니다. 빠르게 연락드리겠습니다.
            </p>
          )}
          {state === "error" && (
            <p className="text-base text-red-400 text-center">
              접수 중 문제가 발생했습니다. 다시 시도해주세요.
            </p>
          )}
        </form>

        <p className="mt-10 text-center text-sm text-stone">
          전화 상담 {contactInfo.phone}
        </p>
      </div>
    </section>
  );
}
