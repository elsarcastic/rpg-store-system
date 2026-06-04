"use client";

import { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

type InputSelectOption = {
  label: string;
  value: string;
};

interface InputSelectProps extends Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "children"
> {
  label?: string;
  placeholder?: string;
  options: InputSelectOption[];
  error?: string;
}

export function InputSelect({
  label,
  placeholder = "Selecione uma opção",
  options,
  error,
  className = "",
  id,
  ...rest
}: InputSelectProps) {
  const selectId = id ?? rest.name;

  return (
    <div className={`flex w-full flex-col gap-2 ${className}`}>
      {label && (
        <label
          htmlFor={selectId}
          className="text-xs font-bold uppercase tracking-[0.18em] text-primary"
        >
          {label}
        </label>
      )}

      <div className="relative">
        <select
          id={selectId}
          className={`
            h-12 w-full appearance-none rounded-none border border-primary/20
            bg-base-200/80 px-4 pr-11
            font-serif text-base text-primary
            outline-none transition
            placeholder:text-primary/40
            hover:border-primary/40
            focus:border-primary focus:bg-base-200
            disabled:cursor-not-allowed disabled:opacity-50
            ${error ? "border-red-400/70" : ""}
          `}
          defaultValue=""
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}

          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-base-200 text-primary"
            >
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={18}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-primary"
        />
      </div>

      {error && <span className="text-xs italic text-red-300">{error}</span>}
    </div>
  );
}
