"use client";

import { pause, play } from "@/assets/svg";
import { useAudio } from "@/contexts/audioContext";
import { Icon } from "../Icon/Icon";

type AudioButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function AudioButton({ className = "", ...rest }: AudioButtonProps) {
  const { isPlaying, toggle, currentLabel } = useAudio();

  return (
    <button
      className={`bg-secondary hover:bg-secondary/80 p-2 rounded-lg ${className}`}
      onClick={toggle}
      title={currentLabel ?? "Ambiência sonora"}
      {...rest}
    >
      {isPlaying ? <Icon src={pause} /> : <Icon src={play} />}
    </button>
  );
}
