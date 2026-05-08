import { Flag, Mountain, Rocket } from "lucide-react";
import type { PortfolioData } from "@/lib/data";
import { GlassCard } from "./ui/GlassCard";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const pillarDefs = [
  {
    key: "short" as const,
    title: "Short-term",
    horizon: "0–12 months",
    icon: Flag,
    chipClass:
      "bg-gradient-to-r from-emerald-400/90 to-cyan-400/80 shadow-emerald-500/20",
  },
  {
    key: "medium" as const,
    title: "Medium-term",
    horizon: "1–3 years",
    icon: Mountain,
    chipClass:
      "bg-gradient-to-r from-accent-violet to-indigo-400/90 shadow-accent-violet/25",
  },
  {
    key: "long" as const,
    title: "Long-term",
    horizon: "3–7 years",
    icon: Rocket,
    chipClass:
      "bg-gradient-to-r from-fuchsia-500/90 to-accent-cyan shadow-fuchsia-500/20",
  },
];

export function CareerPlan({
  career,
}: {
  career: PortfolioData["career"];
}) {
  return (
    <section
      id="career"
      aria-labelledby="career-heading"
      className="relative border-b border-surface-border/50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="career-heading"
            eyebrow="Future focus"
            title="Career development plan"
            subtitle="A living roadmap for technical depth, professional growth, and leadership ambition."
          />
        </Reveal>

        <div className="relative grid gap-8 lg:grid-cols-3 lg:gap-6">
          <div
            className="pointer-events-none absolute left-0 right-0 top-[52px] hidden h-0.5 bg-gradient-to-r from-accent-violet/40 via-accent-cyan/50 to-accent-violet/40 lg:block"
            aria-hidden
          />

          {pillarDefs.map((pillar, i) => {
            const Icon = pillar.icon;
            const items = career[pillar.key];
            return (
              <Reveal key={pillar.key} delay={0.08 * i}>
                <GlassCard className="relative flex h-full flex-col pt-2">
                  <div className="absolute -top-3 left-6 hidden h-3 w-3 rounded-full border-2 border-background bg-accent-cyan shadow-[0_0_12px_var(--accent-cyan)] lg:block" />
                  <div
                    className={`mb-6 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-md ${pillar.chipClass}`}
                  >
                    <Icon className="size-3.5" aria-hidden />
                    {pillar.horizon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                  <ul className="mt-6 flex flex-1 flex-col gap-4">
                    {items.map((item) => (
                      <li key={item.title + item.timeline} className="flex gap-3">
                        <span
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent-violet"
                          aria-hidden
                        />
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-foreground">
                            {item.title}
                          </p>
                          {item.description ? (
                            <p className="mt-1 text-sm leading-relaxed text-muted">
                              {item.description}
                            </p>
                          ) : null}
                          {item.timeline &&
                          item.timeline !== pillar.horizon ? (
                            <p className="mt-1 text-xs text-accent-cyan">
                              {item.timeline}
                            </p>
                          ) : null}
                        </div>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
