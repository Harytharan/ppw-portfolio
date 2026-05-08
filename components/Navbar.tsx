"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 border-b transition-[background,backdrop-filter,border-color] duration-300",
        scrolled
          ? "border-surface-border/80 bg-glass/75 backdrop-blur-xl dark:bg-glass/60"
          : "border-transparent bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <Link
          href="#top"
          className="ring-focus group flex shrink-0 items-center gap-2 rounded-lg px-1"
          onClick={closeMenu}
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent-violet to-accent-cyan text-sm font-bold text-white shadow-lg shadow-accent-violet/25">
            HS
          </span>
          <div className="hidden leading-tight sm:block">
            <p className="text-sm font-semibold text-foreground">
              Harytharan S.
            </p>
            <p className="text-[11px] text-muted">Portfolio</p>
          </div>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="ring-focus rounded-lg px-3 py-2 text-sm font-medium text-muted transition hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="ring-focus flex h-10 w-10 items-center justify-center rounded-xl border border-surface-border bg-glass/80 backdrop-blur-md lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-surface-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <Link
                    href={link.href}
                    className="ring-focus block rounded-xl px-4 py-3 text-base font-medium text-foreground hover:bg-accent-violet/10"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
