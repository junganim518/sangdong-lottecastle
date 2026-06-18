type EyebrowProps = {
  children: React.ReactNode;
  dark?: boolean;
};

/** 섹션 상단의 작은 라벨. 골드 컬러 + 넓은 자간으로 고급스러운 톤 부여 */
export function Eyebrow({ children, dark }: EyebrowProps) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-sm tracking-eyebrow uppercase ${
        dark ? "text-gold-soft" : "text-gold"
      }`}
    >
      <span className="h-px w-6 bg-gold" aria-hidden="true" />
      {children}
    </span>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  dark?: boolean;
  align?: "left" | "center";
};

/** 각 섹션 상단에 공통으로 쓰는 헤딩 블록 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  dark,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2
        className={`text-display mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
          dark ? "text-ivory" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${dark ? "text-stone" : "text-charcoal/70"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
