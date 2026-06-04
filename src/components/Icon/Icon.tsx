import { backgrounds, ColorToken, OpacityToken } from "@/constants/theme";
import Image from "next/image";

interface IconProps {
  src: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  withBackground?: boolean;
  backgroundColor?: ColorToken;
  opacity?: OpacityToken;
  className?: string;
}

const sizes = {
  sm: {
    container: "h-8 w-8 rounded-lg",
    icon: "h-4 w-4",
  },
  md: {
    container: "h-12 w-12 rounded-xl",
    icon: "h-6 w-6",
  },
  lg: {
    container: "h-16 w-16 rounded-2xl",
    icon: "h-8 w-8",
  },
};

export function Icon({
  src,
  alt = "",
  size = "md",
  withBackground = false,
  backgroundColor = "primary",
  opacity = 100,
  className = "",
}: IconProps) {
  const currentSize = sizes[size];

  const image = (
    <Image
      src={src}
      alt={alt}
      className={`${currentSize.icon} object-contain`}
    />
  );

  if (!withBackground) {
    return (
      <span className={`flex items-center justify-center ${className}`}>
        {image}
      </span>
    );
  }

  return (
    <span
      className={`flex items-center justify-center ${currentSize.container}  ${backgrounds[backgroundColor][opacity]} ${className}`}
    >
      {image}
    </span>
  );
}
