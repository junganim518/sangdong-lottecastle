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
          <div className="border border-line p-5">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 accent-gold shrink-0"
              />
              <span className="text-ivory text-base">개인정보 수집동의 (필수)</span>
            </label>
            <div className="mt-3 h-[120px] overflow-y-auto bg-black/20 border border-white/[0.06] p-3 space-y-2 text-xs text-stone/70 leading-relaxed">
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
