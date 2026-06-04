"use client";

import { useRef, useState } from "react";

export function BackgroundAudio({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  async function toggleAudio() {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.02;

    if (audio.paused) {
      await audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }
  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src={src} type="audio/mpeg" />
      </audio>
    </>
  );
}
