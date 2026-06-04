// hooks/useDictionary.ts
"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/languageContext";

const dictionaries = {
  en: () => import("@/lib/dictionaries/en-US.json"),
  pt: () => import("@/lib/dictionaries/pt-BR.json"),
};

type Locale = keyof typeof dictionaries;

export function useDictionary() {
  const { language } = useLanguage();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dictionary, setDictionary] = useState<any>(null);

  useEffect(() => {
    dictionaries[language as Locale]().then((module) => {
      setDictionary(module.default);
    });
  }, [language]);

  return dictionary;
}