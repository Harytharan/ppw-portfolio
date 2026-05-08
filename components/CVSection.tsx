import { Mail, MapPin, Phone } from "lucide-react";
import type { CvData } from "@/lib/data";
import { GlassCard } from "./ui/GlassCard";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export type CVSectionProps = {
  cv: CvData;
  email: string;
  phone: string;
  university: string;
  address?: string | null;
  cvUrl: string | null;
};

export function CVSection({
  cv,
  email,
  phone,
  university,
  address,
  cvUrl,
}: CVSectionProps) {
  const locationLabel = [address?.trim(), university].filter(Boolean).join(" · ");

  return (
    <section
      id="cv"
      aria-labelledby="cv-heading"
      className="relative border-b border-surface-border/50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="cv-heading"
            eyebrow="Professional profile"
            title="Curriculum Vitae"
            subtitle="Structured overview of my education, experience, skills, projects, and achievements."
          />
        </Reveal>

        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-surface-border bg-glass/50 px-5 py-4 backdrop-blur-md">
          <div className="flex flex-wrap gap-6 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <Mail className="size-4 text-accent-violet" aria-hidden />
              {email}
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="size-4 text-accent-cyan" aria-hidden />
              {phone}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-accent-violet" aria-hidden />
              {locationLabel || university}
            </span>
          </div>
          {cvUrl ? (
            <div className="flex items-center gap-2">
              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ring-focus rounded-xl border border-surface-border bg-glass/70 px-5 py-2.5 text-sm font-semibold text-foreground backdrop-blur-md transition hover:border-accent-violet/40 hover:bg-accent-violet/10"
              >
                View CV
              </a>
              <a
                href={cvUrl}
                download
                className="ring-focus rounded-xl bg-gradient-to-r from-accent-violet to-accent-cyan px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent-violet/25 transition hover:brightness-110"
              >
                Download CV
              </a>
            </div>
          ) : null}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <GlassCard hover={false}>
              <h3 className="text-lg font-semibold text-foreground">
                Profile summary
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {cv.profileSummary}
              </p>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.06}>
            <GlassCard hover={false}>
              <h3 className="text-lg font-semibold text-foreground">
                Education
              </h3>
              <ul className="mt-4 space-y-4">
                {cv.education.map((ed) => (
                  <li key={ed.school + ed.degree}>
                    <p className="font-medium text-foreground">{ed.degree}</p>
                    <p className="text-sm text-muted">{ed.school}</p>
                    <p className="mt-1 text-sm text-muted">{ed.detail}</p>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.08}>
            <GlassCard hover={false} className="lg:col-span-2">
              <h3 className="text-lg font-semibold text-foreground">
                Work experience
              </h3>
              <ul className="mt-4 grid gap-6 md:grid-cols-2">
                {cv.experience.map((job) => (
                  <li
                    key={job.role + job.period}
                    className="rounded-xl border border-surface-border bg-background/30 p-4 dark:bg-white/[0.03]"
                  >
                    <p className="font-semibold text-foreground">{job.role}</p>
                    <p className="text-sm text-accent-cyan">{job.org}</p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted">
                      {job.period}
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-muted">
                      {job.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.1}>
            <GlassCard hover={false}>
              <h3 className="text-lg font-semibold text-foreground">
                Selected projects
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cv.projectHighlights.map((p) => (
                  <li
                    key={p}
                    className="rounded-lg border border-surface-border bg-background/40 px-3 py-1.5 text-xs font-medium text-foreground dark:bg-white/[0.04]"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.12}>
            <GlassCard hover={false}>
              <h3 className="text-lg font-semibold text-foreground">
                Technical skills
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cv.technicalSkills.map((s) => (
                  <li
                    key={s}
                    className="rounded-lg bg-accent-violet/10 px-3 py-1 text-xs font-medium text-accent-violet dark:text-accent-violet"
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <h4 className="mt-6 text-sm font-semibold text-foreground">
                Soft skills
              </h4>
              <p className="mt-2 text-sm text-muted">
                {cv.softSkillsParagraph}
              </p>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.14}>
            <GlassCard hover={false} className="lg:col-span-2">
              <h3 className="text-lg font-semibold text-foreground">
                Achievements
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                {cv.achievements.map((a) => (
                  <li
                    key={a}
                    className="rounded-xl border border-dashed border-accent-violet/30 bg-accent-violet/5 px-4 py-3 text-sm text-muted"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
