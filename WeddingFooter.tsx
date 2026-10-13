import { Diya, Lotus, OrnamentFrame } from "./components/Ornaments";
import Reveal from "./components/Reveal";
import type { InvitationContent } from "@/data/types";

export default function WeddingFooter({
  content,
}: {
  content: InvitationContent;
}) {
  const { footer } = content;
  return (
    <footer className="relative isolate overflow-hidden bg-maroon-900 bg-kolam px-6 pb-28 pt-16 text-center text-cream">
      <OrnamentFrame />
      <Reveal className="relative mx-auto flex w-full max-w-md flex-col items-center">
        <div aria-hidden="true" className="flex items-center gap-4 text-gold-400">
          <Diya className="h-8 w-8" />
          <Lotus className="h-9 w-14 text-gold-300" />
          <Diya className="h-8 w-8" />
        </div>

        <p className="mt-6 text-balance text-[1.4rem] italic leading-snug text-gold-200">
          {footer.blessing}
        </p>

        <span aria-hidden="true" className="my-6 h-px w-20 bg-gold-400/60" />

        <p className="text-balance text-xl font-semibold tracking-wide text-cream">
          {footer.family}
        </p>
        <p className="mt-1.5 text-cream/85">{footer.address}</p>
      </Reveal>
    </footer>
  );
}
