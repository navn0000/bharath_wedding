"use client";

import { useRef, useState } from "react";
import { ChevronDown, Music } from "lucide-react";
import { Diya, Lotus, OrnamentFrame } from "./Ornaments";

export default function WeddingEntry() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [entering, setEntering] = useState(false);

  const handleEnter = async () => {
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio("/music/wedding-song.mp3");
        audioRef.current.loop = true;
        audioRef.current.volume = 0.5;
      }

      await audioRef.current.play();

      setEntering(true);
    } catch (error) {
      console.error("Unable to play wedding music:", error);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] overflow-hidden
        bg-cream-100 px-5
        transition-all duration-1000 ease-out
        ${entering ? "pointer-events-none opacity-0" : "opacity-100"}`}
    >
      {/* Soft background glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(200,164,93,0.13),transparent_42%)]"
      />

      {/* Subtle top/bottom gold glow */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2
          rounded-full bg-gold-300/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 h-40 w-72 -translate-x-1/2
          rounded-full bg-gold-300/10 blur-3xl"
      />

      {/* Decorative frame */}
      <div className="absolute inset-4 rounded-[2rem] border border-gold-400/30 sm:inset-8">
        <div className="absolute inset-2 rounded-[1.7rem] border border-gold-300/20" />
      </div>

      {/* Corner ornaments */}
      <div className="absolute left-7 top-7 opacity-70 sm:left-12 sm:top-12">
        <OrnamentFrame className="h-12 w-12 text-gold-600" />
      </div>

      <div className="absolute right-7 top-7 rotate-90 opacity-70 sm:right-12 sm:top-12">
        <OrnamentFrame className="h-12 w-12 text-gold-600" />
      </div>

      <div className="absolute bottom-7 left-7 -rotate-90 opacity-70 sm:bottom-12 sm:left-12">
        <OrnamentFrame className="h-12 w-12 text-gold-600" />
      </div>

      <div className="absolute bottom-7 right-7 rotate-180 opacity-70 sm:bottom-12 sm:right-12">
        <OrnamentFrame className="h-12 w-12 text-gold-600" />
      </div>

      {/* Main content */}
      <div className="relative flex min-h-full items-center justify-center">
        <div
          className={`relative w-full max-w-md text-center
            transition-all duration-1000
            ${entering ? "translate-y-4 scale-95" : "translate-y-0 scale-100"}`}
        >
          {/* Diya */}
          <div className="mb-5 flex justify-center">
            <div
              className="relative flex h-20 w-20 items-center justify-center
                rounded-full border border-gold-400/40
                bg-white/70 shadow-[0_8px_35px_rgba(150,113,51,0.12)]"
            >
              <div className="absolute inset-2 rounded-full border border-gold-300/30" />

              <Diya className="h-10 w-10 text-gold-600" />

              {/* Glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 rounded-full
                  bg-gold-300/20 blur-xl"
              />
            </div>
          </div>

          {/* Small heading */}
          <p
            className="mb-4 text-[10px] font-semibold uppercase
              tracking-[0.45em] text-ink-600"
          >
            With Love & Blessings
          </p>

          {/* Decorative divider */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500" />

            <Lotus className="h-5 w-5 text-gold-600" />

            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500" />
          </div>

          {/* Main title */}
          <h1
            className="font-serif text-5xl font-semibold leading-tight
              tracking-tight text-ink-900 sm:text-6xl"
          >
            Our Wedding
          </h1>

          {/* Subtitle */}
          <p
            className="mx-auto mt-4 max-w-xs font-serif text-lg
              leading-relaxed text-ink-600"
          >
            Together with our families,
            <br />
            we invite you to celebrate our special day
          </p>

          {/* Gold divider */}
          <div className="mx-auto my-7 flex items-center justify-center gap-2">
            <span className="h-px w-16 bg-gold-400/60" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" />
            <span className="h-px w-16 bg-gold-400/60" />
          </div>

          {/* Names */}
          <p className="font-serif text-2xl font-semibold text-ink-900">
            Bride & Groom
          </p>

          <p className="mt-1 text-sm tracking-[0.2em] text-gold-700">
            JOY • LOVE • FOREVER
          </p>

          {/* Enter button */}
          <div className="mt-9">
            <button
              type="button"
              onClick={handleEnter}
              className="group relative inline-flex min-w-[190px]
                items-center justify-center gap-3 overflow-hidden
                rounded-full border border-gold-600
                bg-gold-700 px-8 py-3.5
                text-sm font-semibold tracking-[0.12em] text-white
                shadow-[0_10px_30px_rgba(150,113,51,0.22)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-gold-600
                hover:shadow-[0_14px_35px_rgba(150,113,51,0.28)]
                active:translate-y-0"
            >
              {/* Shine */}
              <span
                aria-hidden="true"
                className="absolute inset-y-0 -left-10 w-8
                  rotate-[25deg] bg-white/20
                  transition-all duration-700
                  group-hover:left-[110%]"
              />

              <Music className="relative h-4 w-4" />

              <span className="relative">Enter Invitation</span>
            </button>
          </div>

          {/* Music hint */}
          <div className="mt-5 flex items-center justify-center gap-2">
            <span className="flex gap-0.5">
              <span className="h-2 w-0.5 animate-pulse bg-gold-500" />
              <span className="h-3 w-0.5 animate-pulse bg-gold-500 [animation-delay:150ms]" />
              <span className="h-2 w-0.5 animate-pulse bg-gold-500 [animation-delay:300ms]" />
            </span>

            {/* <p className="text-[11px] tracking-wide text-ink-500">
              Tap to enter with music
            </p> */}

            <span className="flex gap-0.5">
              <span className="h-2 w-0.5 animate-pulse bg-gold-500 [animation-delay:300ms]" />
              <span className="h-3 w-0.5 animate-pulse bg-gold-500 [animation-delay:150ms]" />
              <span className="h-2 w-0.5 animate-pulse bg-gold-500" />
            </span>
          </div>

          {/* Bottom ornament */}
          <div className="mt-8 flex justify-center opacity-60">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold-400" />
              <ChevronDown className="h-4 w-4 text-gold-600" />
              <span className="h-px w-8 bg-gold-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}