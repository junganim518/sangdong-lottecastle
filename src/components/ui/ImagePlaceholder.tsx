type ImagePlaceholderProps = {
  label: string;
  aspect?: string; // 예: "aspect-[16/9]", "aspect-square"
  dark?: boolean;
  className?: string;
};

/**
 * 실제 이미지가 준비되기 전까지 사용하는 자리표시 박스.
 * src/data/project.ts 에서 해당 이미지 경로를 채우면
 * 이 컴포넌트를 <Image> 로 교체하면 됩니다.
 */
export function ImagePlaceholder({
  label,
  aspect = "aspect-[16/10]",
  dark = false,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`${aspect} ${className} flex flex-col items-center justify-center gap-2 border ${
        dark
          ? "border-line bg-charcoal-soft text-stone"
          : "border-gold/30 bg-ivory text-charcoal/40"
      }`}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span className="text-xs tracking-wide">{label}</span>
    </div>
  );
}
