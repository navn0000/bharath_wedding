import type { InvitationContent } from "./types";

export const english: InvitationContent = {
  lang: "en",
  path: "/english",
  meta: {
    title: "Wedding Invitation | R. Bharathkumar & P. Moniha",
    description:
      "You are warmly invited to the wedding of R. Bharathkumar & P. Moniha. Reception: 13 December 2026, 6:00 PM – 9:00 PM at CD Foundation, Coimbatore. Muhurtham: 14 December 2026, 5:30 AM – 6:30 AM, Othakkal Mandapam, Coimbatore.",
    siteName: "Wedding Invitation",
    ogLocale: "en_IN",
    alternateLocale: "ta_IN",
  },
  ui: {
    skip: "Skip to invitation",
    navLabel: "Invitation sections",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    languageLabel: "Language",
    nav: { home: "Home", reception: "Reception", muhurtham: "Muhurtham" },
    viewLocation: "View Location",
    viewTempleLocation: "View Temple Location",
    getDirections: "Get Directions",
    scrollDown: "Scroll to the invitation details",
    countdownLabels: {
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
    music: { play: "Play music", pause: "Pause music" },
  },
  hero: {
    monogram: "B & M",
    blessing1: "Arulmigu Sri Angalamman Thunai",
    blessing2: "Om Namah Shivaya Tiruchitrambalam",
    groom: "R. Bharathkumar",
    bride: "P. Moniha",
    title: "Wedding Invitation",
    message:
      "With the blessings of the Almighty and our elders, we joyfully invite you and your family to bless the couple on this auspicious occasion.",
    dates: [
      { date: "13 December 2026", label: "Reception" },
      { date: "14 December 2026", label: "Muhurtham" },
    ],
  },
  reception: {
    title: "Wedding Reception Invitation",
    date: {
      day: "13",
      month: "December 2026",
      weekday: "Sunday",
      numeric: "13.12.2026",
    },
    timeLabel: "Time",
    time: "6:00 PM – 9:00 PM",
    venueLabel: "Venue",
    venueName: "CD Foundation",
    venueLines: ["Pothanur–Chettipalayam Road", "Coimbatore"],
    venueExtra: "B.R. Puram, Hope College",
    countdown: {
      heading: "Counting down to the reception",
      ariaLabel: "Time remaining until the wedding reception",
      ongoing: "The reception is underway. Thank you for celebrating with us.",
      done: "The reception was celebrated with your love and blessings. Thank you.",
    },
  },
  couple: {
    groom: {
      label: "Groom",
      name: "R. Bharathkumar",
      degree: "B.E (Mechanical)",
      company: "PSG Foundry",
    },
    bride: {
      label: "Bride",
      name: "P. Moniha",
      degree: "DGNM CPC",
      company: "Omega Health Care",
    },
    together: "Together with their families",
  },
  muhurtham: {
    title: "Wedding Ceremony Invitation",
    date: {
      day: "14",
      month: "December 2026",
      weekday: "Monday",
      numeric: "14.12.2026",
    },
    timeLabel: "Muhurtham",
    time: "5:30 AM – 6:30 AM",
    venueLabel: "Venue",
    venueName:
      "Arulnirai Sri Puttridangondeeswarar, Arulmigu Poongothai Nayagiamman Thirukkovil",
    venueLines: ["Othakkal Mandapam, Coimbatore"],
    countdown: {
      heading: "Counting down to the muhurtham",
      ariaLabel: "Time remaining until the wedding muhurtham",
      ongoing: "The auspicious muhurtham is underway.",
      done: "The wedding ceremony was held with your blessings. Thank you.",
    },
    panchangam: [
      "Waxing Moon · Panchami Tithi",
      "Thiruvonam Nakshatra",
      "Siddha Yoga",
    ],
  },
  receptionNote: {
    heading: "Wedding Reception",
    text: "Wedding Reception will be held on 13 December 2026 from 6:00 PM to 9:00 PM at CD Foundation, Pothanur–Chettipalayam Road, Coimbatore.",
  },
  kural: {
    tamil: [
      "அறத்தாற்றின் இல்வாழ்க்கை ஆற்றின் புறத்தாற்றில்",
      "போய்ப் பெறுவது எவன்?",
    ],
    english: [
      "What greater gain can there be in the life of virtue",
      "than a well-conducted household life?",
    ],
    englishCaption: "A concise English rendering",
    ref: "— Thirukkural 46",
  },
  footer: {
    blessing: "With love and blessings from our families",
    family: "PSR SONS & COMPOUNDER FAMILY",
    address: "B.R. Puram, Hope College, CBE",
    host: "CD FOUNDATION",
  },
};
