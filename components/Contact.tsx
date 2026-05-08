"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import type { PortfolioData } from "@/lib/data";
import { GlassCard } from "./ui/GlassCard";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Contact({
  contact,
}: {
  contact: PortfolioData["contact"];
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Portfolio Inquiry");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitMessage(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        throw new Error(data.error ?? "Message could not be sent.");
      }

      setSubmitMessage({
        type: "success",
        text: "Thank you! Your message has been sent successfully.",
      });
      setName("");
      setEmail("");
      setSubject("Portfolio Inquiry");
      setMessage("");
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            id="contact-heading"
            eyebrow="Let's connect"
            title="Contact"
            subtitle="Reach out for academic collaboration, internship references, or professional opportunities."
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal delay={0.06}>
            <div className="grid gap-4 sm:grid-cols-2">
              <GlassCard className="flex flex-col justify-between">
                <Mail className="size-8 text-accent-violet" aria-hidden />
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Email
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="ring-focus mt-1 block break-all text-sm font-medium text-foreground hover:text-accent-violet"
                  >
                    {contact.email}
                  </a>
                </div>
              </GlassCard>
              <GlassCard className="flex flex-col justify-between">
                <Phone className="size-8 text-accent-cyan" aria-hidden />
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Phone
                  </p>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="ring-focus mt-1 block text-sm font-medium text-foreground hover:text-accent-cyan"
                  >
                    {contact.phone}
                  </a>
                </div>
              </GlassCard>
              <GlassCard className="flex flex-col justify-between sm:col-span-2">
                <div className="flex flex-wrap gap-4">
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ring-focus inline-flex flex-1 min-w-[140px] items-center justify-center gap-2 rounded-xl border border-surface-border bg-background/40 px-4 py-3 text-sm font-semibold text-foreground transition hover:border-accent-violet/40 hover:bg-accent-violet/10 dark:bg-white/[0.04]"
                  >
                    <Linkedin className="size-5 text-[#0A66C2]" aria-hidden />
                    LinkedIn
                  </a>
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ring-focus inline-flex flex-1 min-w-[140px] items-center justify-center gap-2 rounded-xl border border-surface-border bg-background/40 px-4 py-3 text-sm font-semibold text-foreground transition hover:border-accent-violet/40 hover:bg-accent-violet/10 dark:bg-white/[0.04]"
                  >
                    <Github className="size-5" aria-hidden />
                    GitHub
                  </a>
                </div>
              </GlassCard>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <GlassCard hover={false}>
              <div className="mb-4 flex items-center gap-2 text-foreground">
                <Send className="size-5 text-accent-violet" aria-hidden />
                <h3 className="text-lg font-semibold">Quick message</h3>
              </div>
              <p className="text-sm text-muted">
                Send a message directly from this form. I will receive it by
                email and get back to you soon.
              </p>
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-semibold uppercase tracking-wide text-muted"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-2 w-full rounded-xl border border-surface-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none ring-focus dark:bg-white/[0.04]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-semibold uppercase tracking-wide text-muted"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-2 w-full rounded-xl border border-surface-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none ring-focus dark:bg-white/[0.04]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="text-xs font-semibold uppercase tracking-wide text-muted"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="mt-2 w-full rounded-xl border border-surface-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none ring-focus dark:bg-white/[0.04]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-body"
                    className="text-xs font-semibold uppercase tracking-wide text-muted"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-body"
                    name="message"
                    rows={4}
                    placeholder="Write your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="mt-2 w-full resize-y rounded-xl border border-surface-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none ring-focus dark:bg-white/[0.04]"
                  />
                </div>
                {submitMessage ? (
                  <p
                    className={
                      submitMessage.type === "success"
                        ? "text-sm font-medium text-emerald-400"
                        : "text-sm font-medium text-rose-400"
                    }
                  >
                    {submitMessage.text}
                  </p>
                ) : null}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="ring-focus w-full rounded-xl bg-gradient-to-r from-accent-violet to-accent-cyan py-3 text-sm font-semibold text-white shadow-lg shadow-accent-violet/25 transition hover:brightness-110"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
              </form>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
