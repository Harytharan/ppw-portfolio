"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";
import Link from "next/link";
import { heroTechBadges } from "@/lib/data";

export type HeroProfileProps = {
  fullName: string;
  title: string;
  tagline?: string;
  careerGoal: string;
  cvUrl: string | null;
  heroEyebrow?: string;
};

export function Hero({
  fullName,
  title,
  tagline,
  careerGoal,
  cvUrl,
  heroEyebrow,
}: HeroProfileProps) {
  const parts = fullName.trim().split(/\s+/);
  const first = parts.slice(0, -1).join(" ");
  const last = parts.length > 1 ? parts[parts.length - 1] : fullName;

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden border-b border-surface-border/60"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-violet/10 via-transparent to-transparent" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-24 pt-16 sm:px-6 sm:pt-20 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="max-w-xl lg:max-w-lg">
          {heroEyebrow ? (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-surface-border bg-glass/60 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-muted backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
              </span>
              {heroEyebrow}
            </motion.p>
          ) : null}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
          >
            {first}{" "}
            <span className="text-gradient">{last}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="mt-4 text-lg font-medium text-foreground/90"
          >
            {title}
          </motion.p>

          {tagline ? (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-4 max-w-md text-base leading-relaxed text-muted"
            >
              {tagline}
            </motion.p>
          ) : null}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.26 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="#projects"
              className={clsx(
                "ring-focus inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-violet to-accent-cyan px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-violet/30 transition hover:brightness-110",
              )}
            >
              View Portfolio
              <ArrowDownRight className="size-4" aria-hidden />
            </Link>
            {cvUrl ? (
              <a
                href={cvUrl}
                download
                className="ring-focus inline-flex items-center gap-2 rounded-xl border border-surface-border bg-glass/70 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-md transition hover:border-accent-violet/40 hover:bg-accent-violet/10"
              >
                <Download className="size-4" aria-hidden />
                Download CV
              </a>
            ) : null}
          </motion.div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none lg:flex-1">
          <div className="glass-panel relative aspect-square max-h-[420px] overflow-hidden rounded-[2rem] p-8 sm:aspect-[5/4] lg:aspect-square lg:max-h-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--orb-violet),transparent_55%),radial-gradient(circle_at_70%_80%,var(--orb-cyan),transparent_50%)] opacity-80" />
            <div className="relative flex h-full flex-col justify-between">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                Tech orbit
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {heroTechBadges.map((badge, i) => {
                  const Icon = badge.icon;
                  return (
                    <motion.div
                      key={badge.label}
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.15 + i * 0.06, duration: 0.4 }}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 dark:bg-white/[0.04]"
                    >
                      <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                          duration: 4 + i * 0.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.2,
                        }}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-violet/90 to-accent-cyan/80 text-white shadow-md"
                      >
                        <Icon className="size-5" aria-hidden />
                      </motion.div>
                      <span className="text-sm font-semibold text-foreground">
                        {badge.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
              <p className="text-right text-xs text-muted">
                Goal: {careerGoal}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
