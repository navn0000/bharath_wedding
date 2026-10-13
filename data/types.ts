export type Lang = "ta" | "en";

export interface DateInfo {
  day: string;
  month: string;
  weekday: string;
  numeric: string;
}

export interface CountdownContent {
  heading: string;
  ariaLabel: string;
  ongoing: string;
  done: string;
}

export interface EventContent {
  title: string;
  date: DateInfo;
  timeLabel: string;
  time: string;
  venueLabel: string;
  venueName: string;
  venueLines: string[];
  venueExtra?: string;
  countdown: CountdownContent;
}

export interface PersonContent {
  label: string;
  honorific?: string;
  name: string;
  degree: string;
  company: string;
}

export interface InvitationContent {
  lang: Lang;
  path: "/tamil" | "/english";
  meta: {
    title: string;
    description: string;
    siteName: string;
    ogLocale: string;
    alternateLocale: string;
  };
  ui: {
    skip: string;
    navLabel: string;
    menuOpen: string;
    menuClose: string;
    languageLabel: string;
    nav: { home: string; reception: string; muhurtham: string };
    viewLocation: string;
    viewTempleLocation: string;
    getDirections: string;
    scrollDown: string;
    countdownLabels: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
    music: { play: string; pause: string };
  };
  hero: {
    monogram: string;
    blessing1: string;
    blessing2: string;
    groom: string;
    bride: string;
    title: string;
    message: string;
    dates: { date: string; label: string }[];
  };
  reception: EventContent;
  couple: {
    groom: PersonContent;
    bride: PersonContent;
    together: string;
  };
  muhurtham: EventContent & {
    panchangam: string[];
  };
  receptionNote: { heading: string; text: string };
  kural: {
    tamil: string[];
    english?: string[];
    englishCaption?: string;
    ref: string;
  };
  footer: {
    blessing: string;
    family: string;
    address: string;
    host: string;
  };
}
