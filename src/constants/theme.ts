export type ColorToken =
  | "primary"
  | "secondary"
  | "base-100"
  | "base-200"
  | "base-300"
  | "base-350"
  | "light-red";

export type OpacityToken =
  | 10
  | 20
  | 30
  | 40
  | 50
  | 60
  | 70
  | 80
  | 90
  | 100;

export const backgrounds = {
  primary: {
    10: "bg-primary/10",
    20: "bg-primary/20",
    30: "bg-primary/30",
    40: "bg-primary/40",
    50: "bg-primary/50",
    60: "bg-primary/60",
    70: "bg-primary/70",
    80: "bg-primary/80",
    90: "bg-primary/90",
    100: "bg-primary",
  },
  secondary: {
    10: "bg-secondary/10",
    20: "bg-secondary/20",
    30: "bg-secondary/30",
    40: "bg-secondary/40",
    50: "bg-secondary/50",
    60: "bg-secondary/60",
    70: "bg-secondary/70",
    80: "bg-secondary/80",
    90: "bg-secondary/90",
    100: "bg-secondary",
  },
  "base-100": {
    10: "bg-base-100/10",
    20: "bg-base-100/20",
    30: "bg-base-100/30",
    40: "bg-base-100/40",
    50: "bg-base-100/50",
    60: "bg-base-100/60",
    70: "bg-base-100/70",
    80: "bg-base-100/80",
    90: "bg-base-100/90",
    100: "bg-base-100",
  },
  "base-200": {
    10: "bg-base-200/10",
    20: "bg-base-200/20",
    30: "bg-base-200/30",
    40: "bg-base-200/40",
    50: "bg-base-200/50",
    60: "bg-base-200/60",
    70: "bg-base-200/70",
    80: "bg-base-200/80",
    90: "bg-base-200/90",
    100: "bg-base-200",
  },
  "base-300": {
    10: "bg-base-300/10",
    20: "bg-base-300/20",
    30: "bg-base-300/30",
    40: "bg-base-300/40",
    50: "bg-base-300/50",
    60: "bg-base-300/60",
    70: "bg-base-300/70",
    80: "bg-base-300/80",
    90: "bg-base-300/90",
    100: "bg-base-300",
  },
  "base-350": {
    10: "bg-base-350/10",
    20: "bg-base-350/20",
    30: "bg-base-350/30",
    40: "bg-base-350/40",
    50: "bg-base-350/50",
    60: "bg-base-350/60",
    70: "bg-base-350/70",
    80: "bg-base-350/80",
    90: "bg-base-350/90",
    100: "bg-base-350",
  },
  "light-red": {
    10: "bg-red-300/10",
    20: "bg-red-300/20",
    30: "bg-red-300/30",
    40: "bg-red-300/40",
    50: "bg-red-300/50",
    60: "bg-red-300/60",
    70: "bg-red-300/70",
    80: "bg-red-300/80",
    90: "bg-red-300/90",
    100: "bg-red-300",
  },
} as const;