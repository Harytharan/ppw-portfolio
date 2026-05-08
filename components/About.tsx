"use client";

import { aboutStats } from "@/lib/data";
import { GlassCard } from "./ui/GlassCard";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export type AboutProps = {
  fullName: string;
  university: string;
  degree: string;
  introduction: string;
  profileImageUrl: string;
};

export function About({
  fullName,
  university,
  degree,
  introduction,
  profileImageUrl,
}: AboutProps) {
  const paragraphs = introduction
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative border-b border-surface-border/50 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-violet/40 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="about-heading"
            eyebrow="Introduction"
            title="About me"
            subtitle="A concise introduction to my academic journey and industry experience."
          />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:items-start lg:gap-14">
          <Reveal delay={0.06}>
            <GlassCard className="relative overflow-hidden p-0">
              <div className="relative aspect-[4/5] w-full bg-gradient-to-br from-accent-violet/20 to-accent-cyan/15">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={profileImageUrl}
                  alt={`${fullName} — portrait`}
                  onError={(e) => {
                    e.currentTarget.src = "/avatar.svg";
                  }}
                  className="size-full object-cover object-center"
                />
              </div>
              <div className="border-t border-surface-border p-5">
                <p className="text-sm font-semibold text-foreground">
                  {fullName}
                </p>
                <p className="mt-1 text-xs text-muted">{university}</p>
                <p className="mt-0.5 text-[11px] text-muted">{degree}</p>
              </div>
            </GlassCard>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={0.1}>
              <GlassCard hover={false} className="space-y-4">
                {paragraphs.map((p) => (
                  <p
                    key={p.slice(0, 48)}
                    className="text-base leading-relaxed text-muted"
                  >
                    {p}
                  </p>
                ))}
              </GlassCard>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {aboutStats.map((stat, i) => (
                <Reveal key={stat.label} delay={0.08 + i * 0.04}>
                  <GlassCard className="h-full">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent-cyan">
                      {stat.label}
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-foreground">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-muted">{stat.sub}</p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
