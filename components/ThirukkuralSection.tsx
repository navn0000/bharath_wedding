import Reveal from "./Reveal";
import { OrnamentDivider } from "./Ornaments";
import type { InvitationContent } from "@/data/types";

export default function ThirukkuralSection({
  content,
}: {
  content: InvitationContent;
}) {
  const { kural } = content;
  return (
    <section
      aria-label="Thirukkural"
      className="bg-cream px-4 py-16 sm:py-20"
    >
      <Reveal className="mx-auto w-full max-w-md text-center">
        <OrnamentDivider />
        <blockquote className="mt-7">
          <p
            lang="ta"
            className="font-tamil text-balance text-[1.35rem] font-medium leading-[1.9] text-maroon-800 sm:text-[1.6rem]"
          >
            {kural.tamil.map((line, i) => (
              <span key={line} className="block">
                {i === 0 ? "“" : ""}
                {line}
                {i === kural.tamil.length - 1 ? "”" : ""}
              </span>
            ))}
          </p>

          {kural.english && (
            <>
              <p className="mt-6 text-balance text-[1.2rem] italic leading-relaxed text-ink">
                {kural.english.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              {kural.englishCaption && (
                <p className="mt-2 text-sm text-gold-700">{kural.englishCaption}</p>
              )}
            </>
          )}

          <footer className="mt-5 text-lg font-semibold text-gold-700">
            {kural.ref}
          </footer>
        </blockquote>
        <OrnamentDivider className="mt-7" />
      </Reveal>
    </section>
  );
}
