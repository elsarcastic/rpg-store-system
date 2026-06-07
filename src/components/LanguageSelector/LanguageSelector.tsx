"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Language = "pt" | "en";

interface LanguageSelectorProps {
  value: Language;
  onChange: (language: Language) => void;
}

const languages = [
  {
    value: "pt",
    label: "PT",
  },
  {
    value: "en",
    label: "EN",
  },
] as const;

export function LanguageSelector({ value, onChange }: LanguageSelectorProps) {
  const [open, setOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 border border-primary/20 bg-transparent p-2 text-sm font-semibold text-primary transition-all rounded hover:border-primary/50 hover:bg-primary/5"
      >
        {value.toUpperCase()}

        <ChevronDown
          size={16}
          className={`transition-transform duration-100
            ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full overflow-hidden border border-primary/20 bg-base-200 shadow-xl z-50">
          {languages.map((language) => (
            <button
              key={language.value}
              type="button"
              onClick={() => {
                onChange(language.value);
                setOpen(false);
              }}
              className={`w-full px-4 py-2 text-left text-sm text-primary transition-colors hover:bg-primary/10
                ${value === language.value ? "bg-primary/10" : ""}
              `}
            >
              {language.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
