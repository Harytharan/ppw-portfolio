import clsx from "clsx";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={clsx(
        "glass-panel rounded-2xl p-6 transition duration-300",
        hover &&
          "hover:-translate-y-0.5 hover:border-accent-violet/30 hover:shadow-[0_0_40px_-12px_var(--accent-glow)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
