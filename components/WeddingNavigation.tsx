"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import type { InvitationContent } from "@/data/types";

export default function WeddingNavigation({
  content,
}: {
  content: InvitationContent;
}) {
  const { ui, hero, lang } = content;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = [
    { href: "#home", label: ui.nav.home },
    { href: "#reception", label: ui.nav.reception },
    { href: "#muhurtham", label: ui.nav.muhurtham },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-gold-400/30 bg-maroon-900/95 text-cream backdrop-blur supports-[backdrop-filter]:bg-maroon-900/90">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-2 px-3 sm:px-6">
        <a
          href="#home"
          className="rounded-md px-1 text-xl font-semibold tracking-wide text-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
          aria-label={`${hero.monogram} — ${ui.nav.home}`}
        >
          {hero.monogram}
        </a>

        {/* Desktop links */}
        <nav aria-label={ui.navLabel} className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-md px-2 py-2 text-base font-semibold text-cream/90 transition-colors hover:text-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher current={lang} label={ui.languageLabel} />
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/60 text-gold-200 transition-colors hover:bg-maroon-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 md:hidden"
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? ui.menuClose : ui.menuOpen}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="site-menu"
          aria-label={ui.navLabel}
          className="border-t border-gold-400/30 bg-maroon-900 md:hidden"
        >
          <ul className="mx-auto max-w-5xl px-3 py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[3.25rem] items-center rounded-lg px-3 text-lg font-semibold text-cream hover:bg-maroon-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
