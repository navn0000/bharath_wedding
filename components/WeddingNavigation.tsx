"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
    <header className="sticky top-0 z-40 border-b border-gold-400/15 bg-maroon-950/90 text-cream-50 shadow-[0_4px_30px_rgba(28,11,18,0.12)] backdrop-blur-xl supports-[backdrop-filter]:bg-maroon-950/75">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
          aria-label={`${hero.monogram} — ${ui.nav.home}`}
        >
          <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-gold-400/40 bg-maroon-900/60 p-1.5 transition-all duration-300 group-hover:border-gold-300 group-hover:bg-maroon-800">
            <Image
              src="/images/logo.png"
              alt={`${hero.monogram} wedding logo`}
              width={48}
              height={48}
              priority
              className="h-full w-full object-contain"
            />
          </span>
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label={ui.navLabel}
          className="hidden md:block"
        >
          <ul className="flex items-center gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative rounded-full px-4 py-2 text-sm font-medium tracking-wide text-cream-100/85 transition-colors duration-300 hover:text-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                >
                  {link.label}

                  <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gold-400 transition-all duration-300 group-hover:w-8" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher
            current={lang}
            label={ui.languageLabel}
          />

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/30 bg-maroon-900/40 text-gold-300 transition-all duration-300 hover:border-gold-400/60 hover:bg-maroon-800 hover:text-gold-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 md:hidden"
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? ui.menuClose : ui.menuOpen}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X
                className="h-5 w-5"
                aria-hidden="true"
              />
            ) : (
              <Menu
                className="h-5 w-5"
                aria-hidden="true"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="site-menu"
          aria-label={ui.navLabel}
          className="border-t border-gold-400/10 bg-maroon-950/98 backdrop-blur-xl md:hidden"
        >
          <ul className="mx-auto max-w-6xl px-4 py-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[3.25rem] items-center rounded-xl px-4 text-base font-medium text-cream-100/90 transition-colors hover:bg-maroon-900 hover:text-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}