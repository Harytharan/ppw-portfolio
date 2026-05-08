"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { SkillCategory } from "@/lib/data";
import { GlassCard } from "./ui/GlassCard";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

function SkillBar({ name, level }: { name: string; level: number }) {
  const reduce = useReducedMotion();

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-xs font-medium">
        <span className="text-foreground">{name}</span>
        <span className="tabular-nums text-muted">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-background/80 dark:bg-white/[0.06]">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan"
          initial={reduce ? { width: `${level}%` } : { width: 0 }}
          whileInView={reduce ? undefined : { width: `${level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export function Skills({
  categories,
}: {
  categories: SkillCategory[];
}) {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative border-b border-surface-border/50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="skills-heading"
            eyebrow="Capability map"
            title="Skills"
            subtitle="Balanced view of engineering tooling and collaboration strengths."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={0.06 * i}>
              <GlassCard className="h-full">
                <h3 className="text-lg font-semibold text-foreground">
                  {cat.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item.name}
                      className="rounded-lg border border-surface-border bg-background/40 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted dark:bg-white/[0.04]"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
                <div className="mt-6 space-y-5">
                  {cat.items.map((item) => (
                    <SkillBar
                      key={item.name}
                      name={item.name}
                      level={item.level}
                    />
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
