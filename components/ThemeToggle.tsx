"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="ring-focus relative flex h-10 w-10 items-center justify-center rounded-xl border border-surface-border bg-glass/80 text-foreground backdrop-blur-md transition hover:border-accent-violet/40 hover:bg-accent-violet/10"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <Sun
        className={`size-[18px] transition-all ${isDark ? "scale-0 opacity-0 rotate-90" : "scale-100 opacity-100 rotate-0"}`}
      />
      <Moon
        className={`absolute size-[18px] transition-all ${isDark ? "scale-100 opacity-100 rotate-0" : "scale-0 opacity-0 -rotate-90"}`}
      />
    </button>
  );
}
