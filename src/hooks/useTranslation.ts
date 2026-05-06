"use client";

import { useDictionary } from "./useDictionary";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getByPath(obj: any, path: string) {
  return path
    .split(".")
    .reduce((acc, key) => acc?.[key], obj);
}

export function useTranslation(namespace?: string) {
  const dict = useDictionary();

  function t(key: string) {
    if (!dict) return "";

    const base = namespace ? getByPath(dict, namespace) : dict;

    return getByPath(base, key) ?? "";
  }

  return { t };
}