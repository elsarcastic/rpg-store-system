"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface FloatingNavbarProps {
  children: ReactNode;
  className?: string;
  delayToShow?: number;
  topThreshold?: number;
}

export function FloatingNavbar({
  children,
  className = "",
  delayToShow = 200,
  topThreshold = 20,
}: FloatingNavbarProps) {
  const [normalVisible, setNormalVisible] = useState(true);
  const [floatingVisible, setFloatingVisible] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function clearTimer() {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    }

    function handleScroll() {
      const isAtTop = window.scrollY <= topThreshold;

      clearTimer();

      if (isAtTop) {
        setNormalVisible(true);

        timeoutRef.current = setTimeout(() => {
          setFloatingVisible(false);
        }, 150);

        return;
      }

      setNormalVisible(false);

      if (!floatingVisible) {
        timeoutRef.current = setTimeout(() => {
          setFloatingVisible(true);
        }, delayToShow);
      }
    }

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimer();
    };
  }, [delayToShow, topThreshold, floatingVisible]);

  return (
    <>
      <header
        className={`transition-opacity duration-300
          ${normalVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
          ${className}
        `}
      >
        {children}
      </header>

      <header
        className={`fixed z-20 w-full
          ${floatingVisible ? "translate-y-0 opacity-100 transition-all duration-300" : "-translate-y-8 opacity-0 pointer-events-none"}
          ${className}
        `}
      >
        {children}
      </header>
    </>
  );
}
