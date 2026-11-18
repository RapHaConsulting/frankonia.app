const CONFIG = {
  appName: "KDStV Frankonia-Czernowitz",
  appShortTitle: "Frankonia App",
  appSlug: "frankonia-czernowitz",
  semesterText: "Wintersemester 2026/2027",
  appVersion: "v0.1.1",
  semesterprogrammSeiten: 12,

  // Footer & Support
  footerText: "KDStV Frankonia-Czernowitz im CV zu Erlangen • Friedrichstraße 41, 91054 Erlangen",
  supportEmail: "info@frankonia-czernowitz.de",
  instagramHandle: "frankoniaczernowitz",

  // GitHub-Steuerung für das Admin-Panel
  github: {
    owner: "RapHaCon",
    repo: "app.frankonia-czernowitz",
    branch: "dev"
  },

  // Haus-Erkennung für den ICS-Kalender
  houseLocationName: "Verbindungshaus, Friedrichstraße 41, 91054 Erlangen",
  houseAddressKeywords: ["verbindungshaus", "friedrichstraße 41", "friedrichstrasse 41", "frankonia"],
  houseMapUrl: "https://maps.google.com/?q=Friedrichstra%C3%9Fe+41,+91054+Erlangen",

  icsUrl: "./calendar.ics",

  // Design-System: Weiß-Schwarz-Gold mit grüner Perkussion
  theme: {
    farbe1: "#ffffff",          // Bandfarbe 1 (oben) -> Weiß
    farbe2: "#111111",          // Bandfarbe 2 (Mitte) -> Schwarz
    farbe3: "#d4af37",          // Bandfarbe 3 (unten) -> Gold
    perkussion: "#006b2d",      // Grüne Perkussion (Header-Abschluss & Rahmen)
    perkussionLight: "#dce8e0", // Helle Rahmenvariante passend zur Perkussion

    // UI-Farben: Edles Schwarz/Anthrazit als Hauptfarbe, Gold als Akzent
    uiPrimary: "#1a1a1a",
    uiAccent: "#c59b27",

    white: "#ffffff",
    black: "#000000",
    bgColor: "#f6f6f4",
    cardBg: "#ffffff",
    textColor: "#222222",
    textMuted: "#555555"
  },

  assets: {
    favicon: "./assets/favicon.png",
    appIcon: "./assets/app-icon-new.png",
    appSymbol: "./assets/wappenschild.png",
    headerWappen: "./assets/wappen-header.png",
    headerBg: "./assets/header-bg.jpg",
    chargen: "./assets/chargen.jpg",
    philisterchargen: "./assets/philisterchargen.jpg",
    instaAvatar: "./assets/insta-avatar.jpg",
    contentImages: "./assets/img/",
    pdfFile: "./semesterprogramm.pdf",
    navShield: "./assets/wappenschild.png"
  },

  urls: {
    website: "https://frankonia-czernowitz.de",
    ical: "webcal://frankonia-czernowitz.de/?post_type=tribe_events&ical=1&eventDisplay=list",
    googleCal: "https://calendar.google.com/calendar/r?cid=webcal%3A%2F%2Ffrankonia-czernowitz.de%2F%3Fpost_type%3Dtribe_events%26ical%3D1%26eventDisplay%3Dlist",
    cvDachverband: "https://www.cartellverband.de/",
    impressum: "https://frankonia-czernowitz.de/impressum/",
    datenschutz: "https://frankonia-czernowitz.de/datenschutzerklaerung/",
    bildnachweise: "https://frankonia-czernowitz.de/impressum/"
  }
};