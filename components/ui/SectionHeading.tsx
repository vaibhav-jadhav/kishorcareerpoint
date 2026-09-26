type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
  tone = "light",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  const titleColor = tone === "dark" ? "text-white" : "text-ink";
  const bodyColor = tone === "dark" ? "text-white/75" : "text-muted";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
        {eyebrow}
      </p>
      <h2 className={`mt-3 text-3xl font-semibold tracking-tight sm:text-4xl ${titleColor}`}>
        {title}
      </h2>
      {body ? <p className={`mt-4 text-base leading-7 ${bodyColor}`}>{body}</p> : null}
    </div>
  );
}
