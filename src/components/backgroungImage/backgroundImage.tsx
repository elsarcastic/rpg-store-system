"use client";

import { useEffect, useState } from "react";

type GradientType = "dark" | "light" | "none";

interface BackgroundImageProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  linkImage: string;
  mobileImage: string;
  gradient?: GradientType;
}

export function BackgroundImage({
  children,
  linkImage,
  mobileImage,
  gradient = "none",
  ...rest
}: BackgroundImageProps) {
  const [currentImage, setCurrentImage] = useState(linkImage);

  useEffect(() => {
    function updateImage() {
      setCurrentImage(window.innerWidth < 1020 ? mobileImage : linkImage);
    }

    updateImage();
    window.addEventListener("resize", updateImage);

    return () => window.removeEventListener("resize", updateImage);
  }, [linkImage, mobileImage]);

  const gradients = {
    none: "",
    dark: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
    light:
      "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundImage: gradients[gradient]
          ? `${gradients[gradient]}, url(${currentImage})`
          : `url(${currentImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
      {...rest}
    >
      {children}
    </main>
  );
}
