"use client";

import { useEffect } from "react";
import { useAudio } from "@/contexts/audioContext";

type AmbienceKey =
  | "landing"
  | "marketplace"
  | "blacksmith"
  | "alchemy"
  | "city-map";

export function useAmbience(ambience: AmbienceKey) {
  const { setAmbience } = useAudio();

  useEffect(() => {
    setAmbience(ambience);
  }, [ambience, setAmbience]);
}