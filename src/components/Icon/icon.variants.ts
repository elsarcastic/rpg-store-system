import { cva } from "class-variance-authority";

export const iconVariants = cva(
  "flex items-center justify-center",
  {
    variants: {
      size: {
        sm: "h-8 w-8",
        md: "h-12 w-12",
        lg: "h-16 w-16",
      },

      shape: {
        square: "",
        circle: "rounded-full",
      },
    },

    compoundVariants: [
      {
        size: "sm",
        shape: "square",
        className: "rounded-lg",
      },

      {
        size: "md",
        shape: "square",
        className: "rounded-xl",
      },

      {
        size: "lg",
        shape: "square",
        className: "rounded-2xl",
      },
    ],

    defaultVariants: {
      size: "md",
      shape: "square",
    },
  }
);

export const imageVariants = cva(
  "object-contain",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-8 w-8",
      },
    },

    defaultVariants: {
      size: "md",
    },
  }
);