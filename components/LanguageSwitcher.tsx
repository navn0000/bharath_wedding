import Link from "next/link";
import type { Lang } from "@/data/types";

const options = [
  { lang: "ta", href: "/tamil", label: "தமிழ்" },
  { lang: "en", href: "/english", label: "English" },
] as const;

export default function LanguageSwitcher({
  current,
  label,
}: {
  current: Lang;
  label: string;
}) {
  return (
    <nav
      aria-label={label}
      className="flex items-center rounded-full border border-gold-400/60 p-0.5"
    >
      {options.map((o) => {
        const active = o.lang === current;
        return (
          <Link
            key={o.lang}
            href={o.href}
            lang={o.lang}
            hrefLang={o.lang}
            aria-current={active ? "page" : undefined}
            className={`flex min-h-[2.5rem] min-w-[3.25rem] items-center justify-center rounded-full px-3 text-[0.95rem] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 ${
              o.lang === "ta" ? "font-tamil" : "font-display"
            } ${
              active
                ? "bg-gold-300 text-maroon-950"
                : "text-gold-200 hover:bg-maroon-700"
            }`}
          >
            {o.label}
          </Link>
        );
      })}
    </nav>
  );
}
