import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";
export const ogAlt =
  "Wedding invitation of R. Bharathkumar and P. Moniha — 13 and 14 December 2026";

async function font(file: string): Promise<ArrayBuffer> {
  const buf = await readFile(join(process.cwd(), "assets", "fonts", file));
  return buf.buffer.slice(
    buf.byteOffset,
    buf.byteOffset + buf.byteLength,
  ) as ArrayBuffer;
}

/**
 * Share-preview card (WhatsApp, Facebook, X...). Latin text only, because the
 * image renderer cannot shape Tamil script; names are shown as written in the invitation.
 */
export async function renderOg() {
  const [semibold, italic] = await Promise.all([
    font("CormorantGaramond-SemiBold.woff"),
    font("CormorantGaramond-MediumItalic.woff"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#5C0F1F",
          padding: 22,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            border: "2px solid #D4AC55",
            padding: 12,
            background: "#5C0F1F",
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(212,172,85,0.5)",
              background: "#FBF6EA",
              color: "#5C0F1F",
              fontFamily: "Cormorant",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 26,
                letterSpacing: 7,
                color: "#7E5E22",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Arulmigu Sri Angalamman Thunai
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 96,
                lineHeight: 1.05,
                marginTop: 30,
                fontWeight: 600,
              }}
            >
              R. Bharathkumar
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 54,
                fontStyle: "italic",
                color: "#9C7630",
                margin: "2px 0",
              }}
            >
              &amp;
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 96,
                lineHeight: 1.05,
                fontWeight: 600,
              }}
            >
              P. Moniha
            </div>
            <div
              style={{
                display: "flex",
                width: 220,
                height: 2,
                background: "#D4AC55",
                margin: "34px 0 24px",
              }}
            />
            <div
              style={{
                display: "flex",
                fontSize: 34,
                letterSpacing: 6,
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Wedding Invitation
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 34,
                fontStyle: "italic",
                color: "#7E5E22",
                marginTop: 10,
              }}
            >
              13 &amp; 14 December 2026 · Coimbatore
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Cormorant", data: semibold, weight: 600, style: "normal" },
        { name: "Cormorant", data: italic, weight: 500, style: "italic" },
      ],
    },
  );
}
