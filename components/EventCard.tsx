import type { ReactNode } from "react";
import { Clock, MapPin } from "lucide-react";
import Countdown, { type CountdownProps } from "./Countdown";
import LocationButton from "./LocationButton";
import { OrnamentDivider } from "./Ornaments";
import type { EventContent } from "@/data/types";

interface EventCardProps {
  id: string;
  icon: ReactNode;
  content: EventContent;
  /** Optional block between the venue and the buttons (e.g. panchangam). */
  extra?: ReactNode;
  mapUrl: string;
  directionsUrl: string;
  viewLabel: string;
  directionsLabel: string;
  countdown: CountdownProps;
}

export default function EventCard({
  id,
  icon,
  content,
  extra,
  mapUrl,
  directionsUrl,
  viewLabel,
  directionsLabel,
  countdown,
}: EventCardProps) {
  const { date } = content;

  return (
    <article
      aria-labelledby={`${id}-title`}
      className="relative mx-auto w-full max-w-md"
    >
      <div className="relative rounded-t-[7rem] rounded-b-3xl border border-gold-500/70 bg-cream-50 px-5 pb-8 pt-12 shadow-[0_18px_40px_-24px_rgba(92,15,31,0.45)] sm:px-8">
        {/* inner arch line */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-1.5 rounded-t-[6.6rem] rounded-b-[1.3rem] border border-gold-400/50"
        />

        <div className="relative flex flex-col items-center text-center">
          <div className="text-maroon-700 motion-safe:animate-float">{icon}</div>

          <h2
            id={`${id}-title`}
            className="mt-4 text-balance text-[1.55rem] font-semibold leading-snug text-maroon-800"
          >
            {content.title}
          </h2>

          <OrnamentDivider className="my-5" />

          {/* Date */}
          <div className="flex flex-col items-center">
            <span className="text-[4.25rem] font-semibold leading-none text-maroon-800">
              {date.day}
            </span>
            <span className="eyebrow mt-2">{date.month}</span>
            <span className="mt-2 text-lg text-ink">
              {date.weekday} · {date.numeric}
            </span>
          </div>

          {/* Time */}
          <div className="mt-6 flex w-full flex-col items-center rounded-2xl border border-gold-400/50 bg-cream px-4 py-4">
            <span className="eyebrow flex items-center gap-2">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {content.timeLabel}
            </span>
            <span className="mt-1.5 text-xl font-semibold text-maroon-800">
              {content.time}
            </span>
          </div>

          {extra}

          {/* Venue */}
          <div className="mt-6 flex w-full flex-col items-center">
            <span className="eyebrow flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {content.venueLabel}
            </span>
            <p className="mt-2 text-balance text-xl font-semibold leading-snug text-maroon-800">
              {content.venueName}
            </p>
            {content.venueLines.map((line) => (
              <p key={line} className="mt-0.5 text-balance text-ink">
                {line}
              </p>
            ))}
            {content.venueExtra && (
              <p className="mt-2 text-[0.95rem] italic text-gold-700">
                {content.venueExtra}
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="mt-7 flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row">
            <LocationButton href={mapUrl} label={viewLabel} variant="primary" />
            <LocationButton
              href={directionsUrl}
              label={directionsLabel}
              variant="outline"
              icon="directions"
            />
          </div>

          <div className="w-full">
            <Countdown {...countdown} />
          </div>
        </div>
      </div>
    </article>
  );
}
