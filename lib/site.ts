/**
 * Public site URL used for canonical links and share previews.
 * Priority: NEXT_PUBLIC_SITE_URL -> Vercel production domain -> localhost.
 */
const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const fromVercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();

export const siteUrl = (
  fromEnv || (fromVercel ? `https://${fromVercel}` : "http://localhost:3000")
).replace(/\/+$/, "");
