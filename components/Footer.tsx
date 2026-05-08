import Link from "next/link";
import { navLinks } from "@/lib/data";

export function Footer({
  fullName,
  footerText,
}: {
  fullName: string;
  footerText: string;
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border bg-background/80 py-12 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold text-foreground">{fullName}</p>
          <p className="mt-1 max-w-md text-sm text-muted">{footerText}</p>
          <p className="mt-4 text-xs text-muted">
            Built with Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="ring-focus text-sm text-muted transition hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-surface-border/60 px-4 pt-8 text-center text-xs text-muted sm:px-6 lg:px-8">
        © {year} {fullName}. Crafted as a portfolio.
      </div>
    </footer>
  );
}
