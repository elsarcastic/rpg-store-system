"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";

type AmbienceKey =
  | "landing"
  | "marketplace"
  | "blacksmith"
  | "alchemy"
  | "city-map";

const ambiences: Record<
  AmbienceKey,
  {
    src: string;
    label: string;
    volume: number;
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

type AudioContextType = {
  currentAmbience: AmbienceKey | null;
  currentLabel: string | null;
  isPlaying: boolean;
  volume: number;
  setAmbience: (ambience: AmbienceKey) => void;
  play: () => Promise<void>;
  pause: () => void;
  toggle: () => void;
  setVolume: (value: number) => void;
};

const AudioContext = createContext<AudioContextType | null>(null);

export function AudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [currentAmbience, setCurrentAmbience] = useState<AmbienceKey | null>(
    null,
  );

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(0.15);

  function ensureAudio() {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.loop = true;
      audioRef.current.preload = "auto";
      audioRef.current.volume = volume;
    }

    return audioRef.current;
  }

  const play = useCallback(async () => {
    const audio = ensureAudio();

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      setIsPlaying(false);
      console.warn("Audio play blocked or failed:", error);
    }
  }, []);

  const pause = useCallback(() => {
    const audio = ensureAudio();

    audio.pause();
    setIsPlaying(false);
  }, []);

  const setVolume = useCallback((value: number) => {
    const safeValue = Math.min(Math.max(value, 0), 1);
    const audio = ensureAudio();

    audio.volume = safeValue;
    setVolumeState(safeValue);
  }, []);

  const setAmbience = useCallback(
    (ambience: AmbienceKey) => {
      if (currentAmbience === ambience) return;

      const nextAmbience = ambiences[ambience];
      const audio = ensureAudio();

      audio.src = nextAmbience.src;
      audio.volume = nextAmbience.volume;
      audio.load();

      setCurrentAmbience(ambience);
      setVolumeState(nextAmbience.volume);

      if (isPlaying) {
        audio.play().catch((error) => {
          setIsPlaying(false);
          console.warn("Audio ambience change failed:", error);
        });
      }
    },
    [currentAmbience, isPlaying],
  );

  const toggle = useCallback(() => {
    if (isPlaying) {
      pause();
      return;
    }

    play();
  }, [isPlaying, pause, play]);

  const currentLabel = currentAmbience
    ? ambiences[currentAmbience].label
    : null;

  return (
    <AudioContext.Provider
      value={{
        currentAmbience,
        currentLabel,
        isPlaying,
        volume,
        setAmbience,
        play,
        pause,
        toggle,
        setVolume,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);

  if (!context) {
    throw new Error("useAudio must be used inside AudioProvider");
  }

  return context;
}
