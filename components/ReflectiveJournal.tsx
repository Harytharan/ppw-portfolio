import type { JournalEntry } from "@/lib/data";
import { GlassCard } from "./ui/GlassCard";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function ReflectiveJournal({ entries }: { entries: JournalEntry[] }) {
  return (
    <section
      id="journal"
      aria-labelledby="journal-heading"
      className="relative border-b border-surface-border/50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="journal-heading"
            eyebrow="Reflection"
            title="Reflective Journal"
            subtitle="A short reflection on the professional communication, career development, and workplace skills I gained through the Preparing for Professional World module."
          />
        </Reveal>

        <div className="relative">
          <div
            className="absolute left-[11px] top-6 bottom-6 hidden w-px bg-gradient-to-b from-accent-violet via-accent-cyan to-accent-violet md:block"
            aria-hidden
          />
          <ul className="grid gap-6 md:grid-cols-2 md:gap-8">
            {entries.map((entry, i) => {
              const Icon = entry.icon;
              return (
                <Reveal key={`${entry.learningArea}-${i}`} delay={0.05 * (i % 4)}>
                  <li className="relative md:pl-10">
                    <span className="absolute left-0 top-8 hidden size-6 items-center justify-center rounded-full border border-accent-violet/40 bg-background md:flex">
                      <span className="size-2 rounded-full bg-accent-cyan" />
                    </span>
                    <GlassCard className="h-full">
                      <div className="mb-4 flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-violet/90 to-accent-cyan/75 text-white shadow-lg">
                          <Icon className="size-6" aria-hidden />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {entry.learningArea}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted">
                            <span className="font-semibold text-foreground/90">
                              What I learned:{" "}
                            </span>
                            {entry.learned}
                          </p>
                        </div>
                      </div>
                      <div className="rounded-xl border border-surface-border bg-background/40 px-4 py-3 dark:bg-white/[0.03]">
                        <p className="text-xs font-semibold uppercase tracking-wide text-accent-violet">
                          Career impact
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {entry.careerImpact}
                        </p>
                      </div>
                    </GlassCard>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
