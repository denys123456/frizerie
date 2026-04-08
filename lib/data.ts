import type { StaticImageData } from "next/image";

import heroImage from "@/assets/landing page.jpeg";
import aboutImageAward01 from "@/assets/about me/WhatsApp Image 2026-04-04 at 18.44.35.jpeg";
import aboutImageAward02 from "@/assets/about me/WhatsApp Image 2026-04-04 at 18.44.38 (1).jpeg";
import aboutImageAward03 from "@/assets/about me/WhatsApp Image 2026-04-04 at 18.44.38 (2).jpeg";
import aboutImageMain from "@/assets/about me/WhatsApp Image 2026-04-04 at 18.56.12.jpeg";
import aboutImageSecondary from "@/assets/about me/WhatsApp Image 2026-04-04 at 18.56.21.jpeg";
import salonImage from "@/assets/salon/WhatsApp Image 2026-04-04 at 18.44.40.jpeg";
import salonImageWide from "@/assets/salon/WhatsApp Image 2026-04-04 at 18.44.40 (1).jpeg";
import galleryImage01 from "@/assets/gallery/WhatsApp Image 2026-04-04 at 18.44.35 (1).jpeg";
import galleryImage02 from "@/assets/gallery/WhatsApp Image 2026-04-04 at 18.44.36.jpeg";
import galleryImage03 from "@/assets/gallery/WhatsApp Image 2026-04-04 at 18.44.36 (1).jpeg";
import galleryImage04 from "@/assets/gallery/WhatsApp Image 2026-04-04 at 18.44.36 (2).jpeg";
import galleryImage05 from "@/assets/gallery/WhatsApp Image 2026-04-04 at 18.44.36 (3).jpeg";
import galleryImage06 from "@/assets/gallery/WhatsApp Image 2026-04-04 at 18.44.36 (4).jpeg";
import galleryImage07 from "@/assets/gallery/WhatsApp Image 2026-04-04 at 18.44.37 (1).jpeg";
import galleryImage08 from "@/assets/gallery/WhatsApp Image 2026-04-04 at 18.44.37 (2).jpeg";
import galleryImage09 from "@/assets/gallery/WhatsApp Image 2026-04-04 at 18.44.37 (3).jpeg";
import galleryImage10 from "@/assets/gallery/WhatsApp Image 2026-04-04 at 18.56.21 (1).jpeg";
import galleryImage11 from "@/assets/gallery/WhatsApp Image 2026-04-04 at 18.56.22.jpeg";
import galleryImage12 from "@/assets/gallery/WhatsApp Image 2026-04-04 at 18.56.22 (4).jpeg";

export const siteConfig = {
  name: "Virgil Agu",
  slogan: "Cursuri de frizerie, LIVE-uri si executie premium.",
  description:
    "Virgil Agu organizeaza cursuri de frizerie pentru incepatori, perfectionare 1 la 1 si sesiuni LIVE, bazate pe peste 10 ani de experienta si sute de cursanti formati.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  socials: {
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/40785571176",
    phone: "tel:+40785571176",
    mero: "https://mero.ro/p/provide-beauty"
  }
};

export const brandImages = {
  hero: heroImage,
  aboutMain: aboutImageMain,
  aboutSecondary: aboutImageSecondary,
  salon: salonImage,
  salonWide: salonImageWide
};

export const services = [
  {
    name: "Curs Incepatori",
    description: "Curs fizic de la 0, organizat impreuna cu Scoala Comerciala si de Servicii Bacau.",
    price: "3650 RON"
  },
  {
    name: "Perfectionare 1 la 1",
    description: "Experienta intensiva cu 2 modele reale, corectii in timp real si lucru direct alaturi de Virgil Agu.",
    price: "Format fizic"
  },
  {
    name: "LIVE Barber Experience",
    description: "Sesiuni lunare LIVE cu explicatii pas cu pas, tehnici reale si context clar de salon.",
    price: "100 RON / sesiune"
  }
];

export const subscriptionPlans = [
  {
    name: "Abonament Live",
    price: "de la 19 EUR / luna",
    description: "Acces la live-uri, replay-uri si continut educational pentru frizeri care vor sa creasca real.",
    features: [
      "Acces la live stream",
      "Acces la arhiva de sesiuni",
      "Intrebari si raspunsuri in timpul sesiunilor",
      "Continut educational actualizat"
    ]
  },
  {
    name: "Sesiune individuala",
    price: "de la 15 EUR",
    description: "Deblochezi o sesiune singulara fara abonament recurent, pentru acces rapid la o demonstratie concreta.",
    features: [
      "Acces one-time",
      "Ideal pentru sesiuni punctuale",
      "Plata simpla",
      "Perfect pentru testarea platformei"
    ]
  }
];

export const homepageStats = [
  ["10+", "ani experienta"],
  ["4.98", "rating MERO"],
  ["300+", "cursanti formati"],
  ["2x", "master barber romania"]
] as const;

export const aboutHighlights = [
  ["Experienta reala", "Peste 10 ani in domeniu, zeci de seminarii si workshopuri, atat ca trainer, cat si ca participant."],
  ["Cursuri fizice", "Atat cursul de incepatori, cat si perfectionarea 1 la 1 sunt construite practic, cu modele reale."],
  ["Palmares", "Fast Fade Dublin, Master Barber Romania doi ani consecutiv si multe alte clasari de top."],
  ["Progres clar", "Accent pe executie, ritm de lucru, claritate in explicatii si rezultate care pot fi aplicate imediat in salon."]
] as const;

export const galleryItems: Array<{
  id: string;
  title: string;
  category: string;
  imageUrl: StaticImageData;
}> = [
  { id: "g1", title: "Fast Fade Dublin", category: "Premii", imageUrl: galleryImage01 },
  { id: "g2", title: "Master Barber Romania", category: "Premii", imageUrl: galleryImage02 },
  { id: "g3", title: "Fade curat", category: "Galerie", imageUrl: galleryImage03 },
  { id: "g4", title: "Blend precis", category: "Galerie", imageUrl: galleryImage04 },
  { id: "g5", title: "Rezultat premium", category: "Galerie", imageUrl: galleryImage05 },
  { id: "g6", title: "Styling modern", category: "Galerie", imageUrl: galleryImage06 },
  { id: "g7", title: "Executie de salon", category: "Galerie", imageUrl: galleryImage07 },
  { id: "g8", title: "Detaliu de finish", category: "Galerie", imageUrl: galleryImage08 },
  { id: "g9", title: "Context de lucru real", category: "Salon", imageUrl: galleryImage09 },
  { id: "g10", title: "Fade si control", category: "Fade", imageUrl: galleryImage10 },
  { id: "g11", title: "Barbering modern", category: "Editorial", imageUrl: galleryImage11 },
  { id: "g12", title: "Rezultat final", category: "Salon", imageUrl: galleryImage12 }
];

const exactMeroReviews = [
  {
    id: "r1",
    name: "Onisim B.",
    rating: 5,
    text: "Recomand cu incredere. Curat, rapid si foarte atent la detalii.",
    source: "MERO"
  },
  {
    id: "r2",
    name: "Octav B.",
    rating: 5,
    text: "Atmosfera buna si rezultat foarte clean de fiecare data.",
    source: "MERO"
  },
  {
    id: "r3",
    name: "Sabin I.",
    rating: 5,
    text: "Programare usoara, executie precisa si look final premium.",
    source: "MERO"
  },
  {
    id: "r4",
    name: "Alex C.",
    rating: 5,
    text: "Unul dintre cele mai bune servicii de barbering pe care le-am avut.",
    source: "MERO"
  }
];

export const reviews = exactMeroReviews;

export const featuredReviews = reviews.slice(0, 3);
export const compactReviews = reviews.slice(0, 3);
export const homeGalleryPreview = galleryItems.slice(0, 4);
export const aboutMeGallery = [
  { id: "a1", title: "Award Moment", category: "Premii", imageUrl: aboutImageAward01 },
  { id: "a2", title: "Stage Presence", category: "Scena", imageUrl: aboutImageAward02 },
  { id: "a3", title: "Competition Energy", category: "Competition", imageUrl: aboutImageAward03 }
];
export const aboutMeAchievements = [
  "Master Barber Romania, 2 ani la rand",
  "Fast Fade Dublin",
  "Peste 300 de studenti pregatiti",
  "Peste 10 ani experienta"
] as const;

export const courses = {
  beginner: {
    title: "Curs de frizerie pentru incepatori (de la 0)",
    description: [
      "Organizat cu Scoala Comerciala si de Servicii Bacau",
      "Trainer: Virgil Agu",
      "Peste 10 ani experienta",
      "Peste 300 de studenti pregatiti"
    ],
    achievements: [
      "Fast Fade Dublin",
      "Master Barber Romania, 2 ani la rand",
      "Alte clasari de top in industrie"
    ],
    details: [
      "Pret: 3650 RON",
      "Numar maxim de participanti: 6"
    ]
  },
  advanced: {
    title: "Curs de perfectionare 1 la 1",
    description:
      "Experienta intensiva de o zi, personalizata in functie de nivelul, ritmul si obiectivele cursantului.",
    includes: [
      "1 zi completa de training",
      "2 modele reale",
      "Explicatie pas cu pas",
      "Practica hands-on",
      "Corectii in timp real",
      "Tips & tricks din peste 10 ani experienta"
    ],
    outcomes: [
      "Clean fades",
      "Adaptare la forma fetei",
      "Tehnici moderne de tuns",
      "Controlul sculelor"
    ]
  },
  liveExperience: {
    title: "LIVE Barber Experience",
    description: "Sesiuni lunare de tuns live, cu explicatii clare si context real de salon.",
    includes: [
      "Tunsori in timp real",
      "Explicatii step-by-step",
      "Q&A in timpul stream-ului",
      "Trenduri din industrie",
      "Tehnici de eficienta"
    ],
    outcomes: [
      "Optimizarea vitezei",
      "Tehnici de precizie",
      "Mindset profesionist"
    ],
    details: [
      "Pret: 100 RON / sesiune",
      "Frecventa: lunar"
    ]
  }
};

export const liveSessions = [
  {
    id: "live-1",
    title: "LIVE Barber Experience",
    description: "Tuns live cu explicatii, eficienta de lucru si corectii de executie in timp real.",
    scheduledFor: new Date("2026-04-20T18:00:00+03:00"),
    thumbnailUrl: salonImageWide,
    isLive: true,
    visibility: "SUBSCRIBERS",
    price: null,
    slug: "live-barber-experience"
  },
  {
    id: "live-2",
    title: "Fade Breakdown Session",
    description: "Structura unui fade curat, adaptare pe cap si ritm de lucru pentru salon.",
    scheduledFor: new Date("2026-04-27T18:00:00+03:00"),
    thumbnailUrl: salonImage,
    isLive: false,
    visibility: "SUBSCRIBERS",
    price: null,
    slug: "fade-breakdown-session"
  }
];
