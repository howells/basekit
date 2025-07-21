// Tremor Raw cx [v0.0.0]

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cx(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Tremor focusInput [v0.0.2]

export const focusInput = [
  // base
  "focus:ring-2",
  // ring color
  "focus:ring-blue-200 dark:focus:ring-blue-700/30",
  // border color
  "focus:border-blue-500 dark:focus:border-blue-700",
];

// Tremor Raw focusRing [v0.0.1]

export const focusRing = [
  // base
  "outline outline-offset-2 outline-0 focus-visible:outline-2",
  // outline color
  "outline-blue-500 dark:outline-blue-500",
];

// Tremor Raw hasErrorInput [v0.0.1]

export const hasErrorInput = [
  // base
  "ring-2",
  // border color
  "border-red-500 dark:border-red-700",
  // ring color
  "ring-red-200 dark:ring-red-700/30",
];

// Apple's signature easing curves
// These match the easing used in iOS, macOS, and Apple's design guidelines
export const appleEasing = {
  // Standard ease-in: slow start, accelerating
  easeIn: [0.42, 0, 1, 1] as const,

  // Standard ease-out: fast start, decelerating (most common)
  easeOut: [0.16, 1, 0.3, 1] as const,

  // Standard ease-in-out: slow start and end, fast middle
  easeInOut: [0.4, 0, 0.2, 1] as const,

  // Apple's signature "ease" (similar to easeInOut but slightly different)
  ease: [0.25, 0.1, 0.25, 1] as const,

  // Spring-like easing for more playful animations
  spring: [0.68, -0.55, 0.265, 1.55] as const,
} as const;

// CSS cubic-bezier strings for use with Tailwind or CSS
export const appleEasingCSS = {
  easeIn: "cubic-bezier(0.42, 0, 1, 1)",
  easeOut: "cubic-bezier(0, 0, 0.58, 1)",
  easeInOut: "cubic-bezier(0.42, 0, 0.58, 1)",
  ease: "cubic-bezier(0.25, 0.1, 0.25, 1)",
  spring: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
} as const;

// Shared icon utilities
export const iconUtils = {
  // Get icon size class based on component size
  getIconSize: (size: "xs" | "sm" | "base" | "lg" | "xl" = "base") => {
    switch (size) {
      case "xs":
        return "size-2.5";
      case "sm":
        return "size-3";
      case "base":
        return "size-3.5";
      case "lg":
        return "size-4";
      case "xl":
        return "size-5";
      default:
        return "size-3.5";
    }
  },

  // Common icon props interface
  iconProps: {
    className: "shrink-0",
  } as const,

  // Icon positioning utilities
  positioning: {
    left: "[&>svg]:order-first",
    right: "[&>svg]:order-last",
  } as const,
};

// Shared icon component props interface
export interface IconComponentProps {
  className?: string;
}

// Shared component props for components that support left/right icons
export interface ComponentWithIconsProps {
  leftIcon?: React.ComponentType<IconComponentProps>;
  rightIcon?: React.ComponentType<IconComponentProps>;
}
