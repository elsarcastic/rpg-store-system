export type AmbienceKey =
  | "landing"
  | "marketplace"
  | "blacksmith"
  | "alchemy"
  | "city-map";

export const ambiences: Record<
  AmbienceKey,
  {
    src: string;
    label: string;
    volume?: number;
  }
> = {
  landing: {
    src: "/audio/landing.mp3",
    label: "Tema da Província",
    volume: 0.15,
  },
  marketplace: {
    src: "/audio/marketplace.mp3",
    label: "Mercado Central",
    volume: 0.18,
  },
  blacksmith: {
    src: "/audio/blacksmith.mp3",
    label: "Forja do Ferreiro",
    volume: 0.12,
  },
  alchemy: {
    src: "/audio/alchemy.mp3",
    label: "Loja de Poções",
    volume: 0.14,
  },
  "city-map": {
    src: "/audio/city-map.mp3",
    label: "Mapa da Cidade",
    volume: 0.12,
  },
};