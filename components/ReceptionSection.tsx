import EventCard from "./EventCard";
import Reveal from "./Reveal";
import { Lotus } from "./Ornaments";
import { events } from "@/data/venues";
import { mapsDirectionsUrl, mapsSearchUrl } from "@/lib/maps";
import type { InvitationContent } from "@/data/types";

export default function ReceptionSection({
  content,
}: {
  content: InvitationContent;
}) {
  const ev = events.reception;
  const { ui, reception } = content;
  const mapUrl = ev.mapsUrl ?? mapsSearchUrl(ev.mapsQuery);

  return (
    <section
      id="reception"
      aria-label={ui.nav.reception}
      className="bg-kolam-light scroll-mt-16 px-4 py-16 sm:py-20"
    >
      <Reveal>
        <EventCard
          id="reception"
          icon={<Lotus className="h-9 w-14" />}
          content={reception}
          mapUrl={mapUrl}
          directionsUrl={mapsDirectionsUrl(ev.mapsQuery)}
          viewLabel={ui.viewLocation}
          directionsLabel={ui.getDirections}
          countdown={{
            start: ev.start,
            end: ev.end,
            heading: reception.countdown.heading,
            ariaLabel: reception.countdown.ariaLabel,
            ongoing: reception.countdown.ongoing,
            done: reception.countdown.done,
            labels: ui.countdownLabels,
          }}
        />
      </Reveal>
    </section>
  );
}
