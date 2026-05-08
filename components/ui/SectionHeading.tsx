import clsx from "clsx";

type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-violet">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted">{subtitle}</p>
      ) : null}
      <div
        className={clsx(
          "mt-6 h-px w-24 bg-gradient-to-r from-accent-violet to-accent-cyan",
          align === "center" && "mx-auto",
        )}
        aria-hidden
      />
    </div>
  );
}
