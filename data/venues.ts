/**
 * Language-independent event data (shared by Tamil and English pages).
 *
 * Times are written with the explicit +05:30 offset (India Standard Time), so the
 * countdown is correct for every guest wherever their device clock/time zone is.
 *
 * Map links use Google Maps *search* queries - no coordinates are invented.
 * For an exact pin, open the place in Google Maps -> Share -> copy link, and paste
 * it into `mapsUrl` below (optional).
 */
export const events = {
  reception: {
    start: "2026-12-13T18:00:00+05:30",
    end: "2026-12-13T21:00:00+05:30",
    mapsQuery: "CD Foundation, Pothanur Chettipalayam Road, Coimbatore",
    mapsUrl: undefined as string | undefined,
  },
  muhurtham: {
    start: "2026-12-14T05:30:00+05:30",
    end: "2026-12-14T06:30:00+05:30",
    mapsQuery: "Puttridangondeeswarar Temple, Othakkal Mandapam, Coimbatore",
    mapsUrl: undefined as string | undefined,
  },
} as const;
