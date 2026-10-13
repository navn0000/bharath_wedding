import EventCard from "./EventCard";
import Reveal from "./Reveal";
import { Diya, Gopuram } from "./Ornaments";
import { events } from "@/data/venues";
import { mapsDirectionsUrl, mapsSearchUrl } from "@/lib/maps";
import type { InvitationContent } from "@/data/types";

export default function MuhurthamSection({
  content,
}: {
  content: InvitationContent;
}) {
  const ev = events.muhurtham;
  const { ui, muhurtham, receptionNote } = content;
  const mapUrl = ev.mapsUrl ?? mapsSearchUrl(ev.mapsQuery);

  const panchangam = (
    <ul className="mt-4 w-full divide-y divide-gold-400/40 rounded-2xl border border-gold-400/50 bg-cream px-4 text-center">
      {muhurtham.panchangam.map((item) => (
        <li key={item} className="py-2.5 text-lg text-maroon-800">
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <section
      id="muhurtham"
      aria-label={ui.nav.muhurtham}
      className="bg-kolam-light scroll-mt-16 px-4 py-16 sm:py-20"
    >
      <Reveal>
        <EventCard
          id="muhurtham"
          icon={<Gopuram className="h-10 w-14" />}
          content={muhurtham}
          extra={panchangam}
          mapUrl={mapUrl}
          directionsUrl={mapsDirectionsUrl(ev.mapsQuery)}
          viewLabel={ui.viewTempleLocation}
          directionsLabel={ui.getDirections}
          countdown={{
            start: ev.start,
            end: ev.end,
            heading: muhurtham.countdown.heading,
            ariaLabel: muhurtham.countdown.ariaLabel,
            ongoing: muhurtham.countdown.ongoing,
            done: muhurtham.countdown.done,
            labels: ui.countdownLabels,
          }}
        />
      </Reveal>

      {/* Highlighted reception reminder */}
      <Reveal className="mx-auto mt-8 w-full max-w-md">
        <aside
          aria-label={receptionNote.heading}
          className="relative overflow-hidden rounded-3xl border border-gold-400 bg-maroon-800 px-6 py-7 text-center text-cream"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-1.5 rounded-[1.3rem] border border-gold-300/40"
          />
          <div className="relative flex flex-col items-center">
            <Diya className="h-8 w-8 text-gold-300" />
            <p className="eyebrow eyebrow-on-dark mt-2">{receptionNote.heading}</p>
            <p className="mt-3 text-balance text-[1.1rem] leading-relaxed text-cream">
              {receptionNote.text}
            </p>
          </div>
        </aside>
      </Reveal>
    </section>
  );
}
