import { renderOg } from "@/lib/og";

export const alt =
  "Wedding invitation of R. Bharathkumar and P. Moniha — 13 and 14 December 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOg();
}
