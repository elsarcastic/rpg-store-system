import { backgrounds, ColorToken, OpacityToken } from "@/constants/theme";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";
import { iconVariants, imageVariants } from "./icon.variants";

type IconShape = "square" | "circle";

interface IconProps {
  src: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  shape?: IconShape;
  withBackground?: boolean;
  backgroundColor?: ColorToken;
  opacity?: OpacityToken;
  className?: string;
}

export function Icon({
  src,
  alt = "",
  size = "md",
  shape = "square",
  withBackground = false,
  backgroundColor = "primary",
  opacity = 100,
  className,
}: IconProps) {
  const image = (
    <Image
      src={src}
      alt={alt}
      className={imageVariants({
        size,
      })}
    />
  );

  if (!withBackground) {
    return (
      <span className={cn("flex items-center justify-center", className)}>
        {image}
      </span>
    );
  }

  return (
    <span
      className={cn(
        iconVariants({
          size,
          shape,
        }),
        backgrounds[backgroundColor][opacity],
        className,
      )}
    >
      {image}
    </span>
  );
}
