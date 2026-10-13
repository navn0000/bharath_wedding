# Wedding Invitation — R. Bharathkumar & P. Moniha

Mobile-first, bilingual (Tamil / English) wedding invitation. Next.js 15 · TypeScript · Tailwind CSS. Fully static — no backend.

| Page | Path |
| --- | --- |
| Tamil | `/tamil` |
| English | `/english` |
| Language chooser | `/` |

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000/tamil  and  /english
npm run build && npm start   # production check
```

## Deploy to Vercel (public links)

**Option A — Vercel CLI**

```bash
npm install -g vercel
vercel login
vercel            # first deploy (preview) - accept the defaults
vercel --prod     # publish to production
```

**Option B — GitHub + Vercel dashboard**

1. Push this folder to a GitHub repository.
2. On vercel.com choose **Add New → Project**, import the repository, keep the defaults (Framework: Next.js), and press **Deploy**.

Your links will be:

```
https://YOUR-PROJECT.vercel.app/tamil
https://YOUR-PROJECT.vercel.app/english
```

With a custom domain (Vercel → Project → Settings → Domains):

```
https://YOUR-DOMAIN/tamil
https://YOUR-DOMAIN/english
```

## Environment variables (all optional)

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Your final domain, e.g. `https://your-domain.com`. Used for WhatsApp/Facebook preview URLs. On Vercel the `*.vercel.app` URL is detected automatically; set this only when you add a custom domain, then redeploy. |
| `NEXT_PUBLIC_MUSIC_SRC` | Path of a music file, e.g. `/audio/music.mp3`. Put the file in `public/audio/`. If unset, the music button is hidden. Music never autoplays. |

## Editing content

- Tamil text: `data/tamil.ts` · English text: `data/english.ts`
- Dates, times and map searches: `data/venues.ts`
- Exact map pin: open the place in Google Maps → Share → copy link → paste into `mapsUrl` in `data/venues.ts`.

## WhatsApp preview tip

WhatsApp caches link previews. After changing the domain or content, share the link with `?v=2` at the end to force a fresh preview.
