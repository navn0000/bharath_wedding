import Reveal from "./Reveal";
import { Lotus, OrnamentDivider } from "./Ornaments";
import type { InvitationContent, PersonContent } from "@/data/types";

function PersonCard({ person }: { person: PersonContent }) {
  return (
    <div className="relative rounded-3xl border border-gold-500/70 bg-cream-50 px-5 py-8 text-center shadow-[0_18px_40px_-26px_rgba(92,15,31,0.45)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-1.5 rounded-[1.3rem] border border-gold-400/40"
      />
      <div className="relative flex flex-col items-center">
        <p className="eyebrow">{person.label}</p>
        {person.honorific && (
          <p className="mt-4 text-[0.95rem] text-gold-700">{person.honorific}</p>
        )}
        <h3
          className={`text-balance text-[1.7rem] font-semibold leading-snug text-maroon-800 ${
            person.honorific ? "mt-1" : "mt-4"
          }`}
        >
          {person.name}
        </h3>
        <span aria-hidden="true" className="my-4 h-px w-16 bg-gold-500/70" />
        <p className="text-lg text-ink">{person.degree}</p>
        <p className="mt-0.5 text-lg text-ink">{person.company}</p>
      </div>
    </div>
  );
}

export default function CoupleSection({
  content,
}: {
  content: InvitationContent;
}) {
  const { couple } = content;
  return (
    <section
      aria-label={`${couple.groom.label} · ${couple.bride.label}`}
      className="bg-cream px-4 py-14 sm:py-20"
    >
      <div className="mx-auto grid w-full max-w-md items-center gap-6 md:max-w-4xl md:grid-cols-[1fr_auto_1fr]">
        <Reveal>
          <PersonCard person={couple.groom} />
        </Reveal>

        <Reveal className="flex flex-col items-center px-2 text-center">
          <Lotus className="h-8 w-12 text-maroon-700" />
          <p className="mt-3 max-w-[14rem] text-balance text-xl italic text-maroon-800">
            {couple.together}
          </p>
          <OrnamentDivider className="mt-3" />
        </Reveal>

        <Reveal delay={120}>
          <PersonCard person={couple.bride} />
        </Reveal>
      </div>
    </section>
  );
}
