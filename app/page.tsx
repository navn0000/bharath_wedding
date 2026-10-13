'use client';
import Link from "next/link";
import { OrnamentFrame, Lotus } from "@/components/Ornaments";

/** Simple language chooser for anyone who opens the bare domain. */
export default function Home() {

  return (
    <main className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-maroon-900 bg-kolam px-6 py-16 text-center text-cream">
      <OrnamentFrame />
      
      <div className="relative flex w-full max-w-sm flex-col items-center">
        <Lotus className="h-10 w-16 text-gold-300" />
        <h1 className="hero-name mt-5 text-cream">
          R. Bharathkumar
          <span className="block py-1 text-[0.6em] italic text-gold-300">&amp;</span>
          P. Moniha
        </h1>
        <p className="eyebrow eyebrow-on-dark mt-6">Wedding Invitation</p>
        <div className="mt-9 flex w-full flex-col gap-3">
          <Link href="/tamil" lang="ta" hrefLang="ta" className="btn btn-gold font-tamil sm:w-full">
            தமிழ்
          </Link>
          <Link href="/english" lang="en" hrefLang="en" className="btn btn-gold sm:w-full">
            English
          </Link>
        </div>
      </div>
    </main>
  );
}
