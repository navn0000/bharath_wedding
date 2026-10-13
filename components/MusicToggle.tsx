"use client";

import { useEffect, useRef, useState } from "react";
import { Music, Pause } from "lucide-react";

const MUSIC_SRC = "/music/wedding-song.mp3";

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
    const audio = new Audio(MUSIC_SRC);

    audio.loop = true;
    audio.preload = "auto";

    audio.addEventListener("play", () => setPlaying(true));
    audio.addEventListener("pause", () => setPlaying(false));
    audio.addEventListener("ended", () => setPlaying(false));

    audioRef.current = audio;

    // Try to autoplay
    audio
      .play()
      .then(() => {
        setPlaying(true);
      })
      .catch(() => {
        // Browser blocked autoplay.
        // User can start it using the button.
        setPlaying(false);
      });

    return () => {
      audio.pause();
      audio.removeEventListener("play", () => setPlaying(true));
      audio.removeEventListener("pause", () => setPlaying(false));
      audio.removeEventListener("ended", () => setPlaying(false));
      audioRef.current = null;
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
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
      className="fixed bottom-5 right-4 z-50 flex h-12 w-12
        items-center justify-center rounded-full
        border border-gold-400 bg-white
        text-gold-700
        shadow-[0_6px_20px_rgba(150,113,51,0.18)]
        transition active:scale-95
        hover:bg-cream-100
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-gold-300
        focus-visible:ring-offset-2"
    >
      {playing ? (
        <Pause className="h-5 w-5" aria-hidden="true" />
      ) : (
        <Music className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
}