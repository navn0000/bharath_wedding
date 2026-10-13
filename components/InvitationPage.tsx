'use client';
import WeddingNavigation from "./WeddingNavigation";
import WeddingHero from "./WeddingHero";
import ReceptionSection from "./ReceptionSection";
import CoupleSection from "./CoupleSection";
import MuhurthamSection from "./MuhurthamSection";
import ThirukkuralSection from "./ThirukkuralSection";
import WeddingFooter from "./WeddingFooter";
import MusicToggle from "./MusicToggle";
import type { InvitationContent } from "@/data/types";
import WeddingEntry from "./WeddingEntry";

/** One shared page layout; only the `content` differs between Tamil and English. */
export default function InvitationPage({
  content,
}: {
  content: InvitationContent;
}) {


  return (
    <div
      lang={content.lang}
      className={`min-h-screen bg-cream ${
        content.lang === "ta" ? "font-tamil" : "font-display"
      }`}
    >
      <a
        href="#main"
        className="sr-only z-50 rounded-md bg-gold-300 px-4 py-2 font-semibold text-maroon-950 focus:not-sr-only focus:fixed focus:left-3 focus:top-3"
      >
        {content.ui.skip}
      </a>
      <WeddingNavigation content={content} />
      <main id="main">
        <WeddingHero content={content} />
        <ReceptionSection content={content} />
        <CoupleSection content={content} />
        <MuhurthamSection content={content} />
        <ThirukkuralSection content={content} />
      </main>
      <WeddingFooter content={content} />
      {/* <WeddingEntry /> */}
      <MusicToggle
        playLabel={content.ui.music.play}
        pauseLabel={content.ui.music.pause}
      />
    </div>
  );
}
