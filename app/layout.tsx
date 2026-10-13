import type { Metadata, Viewport } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/500-italic.css";
import "@fontsource/noto-serif-tamil/400.css";
import "@fontsource/noto-serif-tamil/500.css";
import "@fontsource/noto-serif-tamil/600.css";
import "./globals.css";
import { siteUrl } from "@/lib/site";
import { english } from "@/data/english";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: english.meta.title,
  description: english.meta.description,
  applicationName: "Wedding Invitation",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5C0F1F",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
