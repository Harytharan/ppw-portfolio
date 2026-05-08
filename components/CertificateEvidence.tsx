import { Award, ExternalLink } from "lucide-react";
import type { CertificateData } from "@/lib/data";
import { GlassCard } from "./ui/GlassCard";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function CertificateEvidence({
  certificates,
}: {
  certificates: CertificateData[];
}) {
  return (
    <section
      id="certificate"
      aria-labelledby="certificate-heading"
      className="relative border-b border-surface-border/50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="certificate-heading"
            eyebrow="Evidence"
            title="Certificate / course completion"
            subtitle="Evidence of professional learning, course completion, and skill development."
          />
        </Reveal>

        <ul className="grid gap-6 md:grid-cols-2">
          {certificates.map((cert, idx) => (
            <Reveal key={cert.id || cert.courseName + idx} delay={0.06 * idx}>
              <li>
                <GlassCard className="h-full">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-violet to-accent-cyan text-white shadow-lg">
                      <Award className="size-8" aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1 space-y-3">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {cert.courseName}
                        </h3>
                        <p className="mt-1 text-sm text-muted">
                          Platform:{" "}
                          <span className="text-foreground/90">
                            {cert.platform}
                          </span>
                        </p>
                      </div>
                      {cert.description ? (
                        <p className="text-sm text-muted">{cert.description}</p>
                      ) : null}
                      <dl className="grid gap-2 text-sm sm:grid-cols-2">
                        <div>
                          <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                            Completed
                          </dt>
                          <dd className="mt-0.5 font-medium text-foreground">
                            {cert.completedYear}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                            Skill improved
                          </dt>
                          <dd className="mt-0.5 font-medium text-foreground">
                            {cert.skillImproved}
                          </dd>
                        </div>
                      </dl>
                      <div className="flex flex-wrap gap-3 pt-2">
                        {cert.fileUrl || cert.imageUrl ? (
                          <a
                            href={cert.fileUrl ?? cert.imageUrl ?? "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ring-focus inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-violet to-accent-cyan px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:brightness-110"
                          >
                            View certificate
                            <ExternalLink className="size-4" aria-hidden />
                          </a>
                        ) : null}
                        {cert.fileUrl ? (
                          <a
                            href={cert.fileUrl}
                            download
                            className="ring-focus inline-flex items-center rounded-xl border border-surface-border px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent-violet/40 hover:bg-accent-violet/10"
                          >
                            Download PDF
                          </a>
                        ) : null}
                      </div>
                      {cert.imageUrl ? (
                        <div className="pt-2">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={cert.imageUrl}
                            alt=""
                            className="max-h-48 rounded-xl border border-surface-border object-contain"
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                </GlassCard>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
