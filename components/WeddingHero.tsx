import { ChevronDown } from "lucide-react";
import { Diya, Lotus, OrnamentFrame } from "./Ornaments";
import Reveal from "./Reveal";
import type { InvitationContent } from "@/data/types";

export default function WeddingHero({ content }: { content: InvitationContent }) {
  const { hero, ui } = content;

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[calc(100svh-4rem)] scroll-mt-16 items-center justify-center overflow-hidden bg-maroon-900 bg-kolam px-6 pb-24 pt-14 text-cream"
    >
      <OrnamentFrame />

      {/* soft floating lotus accents */}
      <Lotus
        aria-hidden="true"
        className="pointer-events-none absolute -left-6 top-24 h-16 w-24 -rotate-12 text-gold-400/20 motion-safe:animate-float"
      />
      <Lotus
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 bottom-32 h-16 w-24 rotate-12 text-gold-400/20 motion-safe:animate-float"
      />

      <div className="relative mx-auto flex w-full max-w-md flex-col items-center text-center">
        <Reveal className="flex flex-col items-center">
          <p className="eyebrow eyebrow-on-dark text-balance">{hero.blessing1}</p>
          <p className="eyebrow eyebrow-on-dark mt-1.5 text-balance">
            {hero.blessing2}
          </p>
          <Lotus className="mt-6 h-9 w-14 text-gold-300" />
        </Reveal>

        <Reveal delay={150}>
          <h1
            id="hero-title"
            className="hero-name mt-6 text-balance text-cream"
          >
            <span className="block">{hero.groom}</span>
            <span
              aria-hidden="true"
              className="block py-1 font-display text-[0.62em] italic font-medium text-gold-300"
            >
              &amp;
            </span>
            <span className="sr-only"> and </span>
            <span className="block">{hero.bride}</span>
          </h1>
        </Reveal>

        <Reveal delay={300} className="flex flex-col items-center">
          <div
            aria-hidden="true"
            className="mt-7 flex items-center gap-3 text-gold-400"
          >
            <span className="h-px w-10 bg-current opacity-70" />
            <Diya className="h-7 w-7" />
            <span className="h-px w-10 bg-current opacity-70" />
          </div>

          <p className="mt-4 text-2xl font-semibold tracking-wide text-gold-200">
            {hero.title}
          </p>
          <p className="mt-3 max-w-xs text-balance text-[1.05rem] leading-relaxed text-cream/85">
            {hero.message}
          </p>

          <ul className="mt-8 w-full divide-y divide-gold-400/30 rounded-2xl border border-gold-400/40 bg-maroon-950/30">
            {hero.dates.map((d) => (
              <li
                key={d.date}
                className="flex flex-col items-center px-4 py-3.5"
              >
                <span className="text-xl font-semibold text-cream">{d.date}</span>
                <span className="eyebrow eyebrow-on-dark mt-0.5">{d.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <a
        href="#reception"
        aria-label={ui.scrollDown}
        className="absolute bottom-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full text-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
      >
        <ChevronDown
          className="h-7 w-7 motion-safe:animate-cue"
          aria-hidden="true"
        />
      </a>
    </section>
  );
}
