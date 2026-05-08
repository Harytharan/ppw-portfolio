import { Github, Globe } from "lucide-react";
import type { ProjectData } from "@/lib/data";
import { GlassCard } from "./ui/GlassCard";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Projects({ projects }: { projects: ProjectData[] }) {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative border-b border-surface-border/50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="projects-heading"
            eyebrow="Selected work"
            title="Projects"
            subtitle="Highlights spanning academic research systems, enterprise ERP contributions, and modern web delivery."
          />
        </Reveal>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <Reveal key={project.title} delay={0.05 * (i % 3)}>
                <li>
                  <GlassCard className="flex h-full flex-col">
                    {project.imageUrl ? (
                      <div className="-mx-2 -mt-2 mb-4 overflow-hidden rounded-xl">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={project.imageUrl}
                          alt=""
                          className="aspect-video w-full object-cover"
                        />
                      </div>
                    ) : null}
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-violet/90 to-accent-cyan/75 text-white shadow-lg">
                        <Icon className="size-6" aria-hidden />
                      </div>
                      <div className="flex gap-2">
                        {project.githubLink ? (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg border border-surface-border p-2 text-muted hover:text-foreground"
                            aria-label="GitHub"
                          >
                            <Github className="size-4" />
                          </a>
                        ) : null}
                        {project.liveLink ? (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg border border-surface-border p-2 text-muted hover:text-foreground"
                            aria-label="Live demo"
                          >
                            <Globe className="size-4" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((t) => (
                        <li
                          key={t}
                          className="rounded-md bg-accent-violet/10 px-2 py-0.5 text-[11px] font-medium text-accent-violet"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
