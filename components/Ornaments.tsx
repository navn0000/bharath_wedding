import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
} as const;

export function Lotus(props: IconProps) {
  return (
    <svg viewBox="0 0 64 40" {...base} {...props}>
      <path d="M32 3C38.5 12 38.5 25 32 34C25.5 25 25.5 12 32 3Z" fill="currentColor" fillOpacity=".14" />
      <path d="M32 34C22 31 14.5 24 12 13C21 14 28.5 21.5 32 34Z" fill="currentColor" fillOpacity=".1" />
      <path d="M32 34C42 31 49.5 24 52 13C43 14 35.5 21.5 32 34Z" fill="currentColor" fillOpacity=".1" />
      <path d="M32 36C20 37 8 32.5 3 23C13 21.5 25 27 32 36Z" fill="currentColor" fillOpacity=".08" />
      <path d="M32 36C44 37 56 32.5 61 23C51 21.5 39 27 32 36Z" fill="currentColor" fillOpacity=".08" />
    </svg>
  );
}

export function Diya(props: IconProps) {
  return (
    <svg viewBox="0 0 40 40" {...base} {...props}>
      <path
        className="flame motion-safe:animate-flicker"
        d="M20 3C24.5 9 25 13.5 20 19C15 13.5 15.5 9 20 3Z"
        fill="currentColor"
        fillOpacity=".4"
      />
      <path d="M4 22H36C35 30 28.5 35 20 35C11.5 35 5 30 4 22Z" fill="currentColor" fillOpacity=".15" />
      <path d="M14 38H26" />
    </svg>
  );
}

/** Stepped gopuram (temple tower) silhouette. */
export function Gopuram(props: IconProps) {
  return (
    <svg viewBox="0 0 64 48" {...base} {...props}>
      <path d="M12 46V38H52V46Z" fill="currentColor" fillOpacity=".12" />
      <path d="M17 38V31H47V38" fill="currentColor" fillOpacity=".1" />
      <path d="M21 31V25H43V31" fill="currentColor" fillOpacity=".1" />
      <path d="M25 25V19H39V25" fill="currentColor" fillOpacity=".08" />
      <path d="M29 19V14H35V19" fill="currentColor" fillOpacity=".08" />
      <path d="M32 14V9" />
      <circle cx="32" cy="6" r="2.2" fill="currentColor" fillOpacity=".4" />
      <path d="M8 46H56" />
    </svg>
  );
}

/** Gold line - lotus - gold line divider. */
export function OrnamentDivider({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center gap-3 text-gold-500 ${className}`}
    >
      <span className="h-px w-12 bg-current opacity-70 sm:w-16" />
      <Lotus className="h-5 w-8" />
      <span className="h-px w-12 bg-current opacity-70 sm:w-16" />
    </div>
  );
}

function Corner({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      width="36"
      height="36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      className={`absolute ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M1 35V11C1 5.5 5.5 1 11 1H35" />
      <circle cx="11" cy="11" r="2.2" fill="currentColor" />
    </svg>
  );
}

/** Traditional double border with corner motifs; place inside a `relative` parent. */
export function OrnamentFrame({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-3 border border-gold-400/50 text-gold-400/80 sm:inset-5 ${className}`}
    >
      <div className="absolute inset-1.5 border border-gold-400/25" />
      <Corner className="-left-px -top-px" />
      <Corner className="-right-px -top-px rotate-90" />
      <Corner className="-bottom-px -right-px rotate-180" />
      <Corner className="-bottom-px -left-px -rotate-90" />
    </div>
  );
}
