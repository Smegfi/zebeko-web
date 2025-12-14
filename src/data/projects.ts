export interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  images: string[];
  category: string;
}

export const projects: Project[] = [
  {
    id: "klecany-kancelare",
    title: "Kancelářské a skladové prostory",
    location: "Klecany",
    description: "Realizace moderních kancelářských a skladových prostor s železobetonovou konstrukcí. Projekt zahrnoval kompletní nosný skelet a stavební práce včetně dokončovacích prací.",
    images: [
      "/images/projects/klecany-1.jpg",
      "/images/projects/klecany-2.jpg",
      "/images/projects/klecany-3.jpg",
    ],
    category: "Kancelářské stavby",
  },
  {
    id: "blank-tunel",
    title: "Tunelový komplex Blanka",
    location: "Praha",
    description: "Výpomoc při výstavbě tunelového komplexu Blanka. Spolupracovali jsme na realizaci železobetonových konstrukcí a nosných prvků tohoto rozsáhlého dopravního projektu.",
    images: [
      "/images/projects/blank-1.jpg",
      "/images/projects/blank-2.jpg",
      "/images/projects/blank-3.jpg",
    ],
    category: "Dopravní stavby",
  },
  {
    id: "liboc-klaster",
    title: "Oprava kláštera",
    location: "Praha - Liboc",
    description: "Náročná rekonstrukce historického kláštera v Praze Liboci. Projekt zahrnoval opravu a zpevnění nosných konstrukcí s respektem k historickému charakteru budovy.",
    images: [
      "/images/projects/liboc-1.jpg",
      "/images/projects/liboc-2.jpg",
      "/images/projects/liboc-3.jpg",
    ],
    category: "Rekonstrukce",
  },
  {
    id: "detske-hriste-1",
    title: "Dětské hřiště - Projekt Alpha",
    location: "Praha",
    description: "Realizace moderního dětského hřiště s betonovými prvky a bezpečnostními povrchy. Projekt zahrnoval výstavbu herních prvků a zpevněných ploch.",
    images: [
      "/images/projects/hriste-1.jpg",
      "/images/projects/hriste-2.jpg",
    ],
    category: "Drobná výstavba",
  },
];

