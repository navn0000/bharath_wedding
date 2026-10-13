"use client";

import { useEffect, useState } from "react";
import { Diya } from "./Ornaments";

export interface CountdownProps {
  start: string;
  end: string;
  heading: string;
  ariaLabel: string;
  ongoing: string;
  done: string;
  labels: { days: string; hours: string; minutes: string; seconds: string };
}

const pad = (n: number) => String(n).padStart(2, "0");

function split(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

export default function Countdown({
  start,
  end,
  heading,
  ariaLabel,
  ongoing,
  done,
  labels,
}: CountdownProps) {
  const startMs = Date.parse(start);
  const endMs = Date.parse(end);
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => {
      const t = Date.now();
      setNow(t);
      if (t >= endMs) window.clearInterval(id);
    }, 1000);
    return () => window.clearInterval(id);
  }, [endMs]);

  // After the event, show a gentle message instead of negative numbers.
  if (now !== null && now >= startMs) {
    const finished = now >= endMs;
    return (
      <div
        role="status"
        className="mt-7 flex flex-col items-center gap-2 rounded-2xl border border-gold-400/60 bg-cream px-4 py-5 text-center"
      >
        <Diya className="h-8 w-8 text-gold-600" />
        <p className="text-maroon-800">{finished ? done : ongoing}</p>
      </div>
    );
  }

  const t = now === null ? null : split(startMs - now);
  const cells: [string, string][] = [
    [t ? String(t.days).padStart(2, "0") : "--", labels.days],
    [t ? pad(t.hours) : "--", labels.hours],
    [t ? pad(t.minutes) : "--", labels.minutes],
    [t ? pad(t.seconds) : "--", labels.seconds],
  ];

  return (
    <div className="mt-7">
      <p className="eyebrow mb-3 text-center">{heading}</p>
      <div
        role="timer"
        aria-label={ariaLabel}
        className="grid grid-cols-4 gap-2"
      >
        {cells.map(([value, label]) => (
          <div
            key={label}
            className="flex min-w-0 flex-col items-center rounded-xl border border-gold-400/60 bg-cream px-1 py-3"
          >
            <span className="font-display text-[1.7rem] font-semibold leading-none lining-nums tabular-nums text-maroon-800 sm:text-3xl">
              {value}
            </span>
            <span className="mt-1.5 max-w-full truncate text-[0.7rem] uppercase tracking-wider text-gold-700 [&:lang(ta)]:text-[0.8rem] [&:lang(ta)]:normal-case [&:lang(ta)]:tracking-normal">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
