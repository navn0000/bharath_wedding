"use client";

import { useEffect, useRef, useState } from "react";
import { Music, Pause } from "lucide-react";

/**
 * Optional background music. Never autoplays: audio starts only after a tap.
 * Renders nothing unless NEXT_PUBLIC_MUSIC_SRC is set, so there is never a
 * broken audio source.
 */
const MUSIC_SRC = process.env.NEXT_PUBLIC_MUSIC_SRC?.trim() ?? "";

export default function MusicToggle({
  playLabel,
  pauseLabel,
}: {
  playLabel: string;
  pauseLabel: string;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  if (!MUSIC_SRC) return null;

  const toggle = async () => {
    if (!audioRef.current) {
      const audio = new Audio(MUSIC_SRC);
      audio.loop = true;
      audio.preload = "none";
      audio.addEventListener("pause", () => setPlaying(false));
      audio.addEventListener("play", () => setPlaying(true));
      audioRef.current = audio;
    }
    const audio = audioRef.current;
    try {
      if (audio.paused) await audio.play();
      else audio.pause();
    } catch {
      setPlaying(false);
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={playing}
      aria-label={playing ? pauseLabel : playLabel}
      className="fixed bottom-5 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-gold-400 bg-maroon-800 text-gold-200 shadow-lg transition active:scale-95 hover:bg-maroon-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300 focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
    >
      {playing ? (
        <Pause className="h-5 w-5" aria-hidden="true" />
      ) : (
        <Music className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
}
