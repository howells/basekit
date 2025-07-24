/**
 * Keyboard Shortcut Display Component
 *
 * A component for displaying keyboard shortcuts in a consistent, styled format.
 * Commonly used in buttons, menus, and tooltips to show available keyboard
 * shortcuts to users.
 *
 * Features:
 * - Consistent styling across light and dark modes
 * - Support for modifier keys (⌘, ⌃, ⌥, ⇧)
 * - Automatic platform detection (Mac vs PC)
 * - Flexible key combinations
 * - Accessible markup with proper semantics
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Kbd>K</Kbd>
 * <Kbd>Enter</Kbd>
 * <Kbd>Escape</Kbd>
 *
 * // With modifiers
 * <Kbd keys={["⌘", "K"]}>⌘K</Kbd>
 * <Kbd keys={["Ctrl", "C"]}>Ctrl+C</Kbd>
 * <Kbd keys={["⌘", "⇧", "P"]}>⌘⇧P</Kbd>
 *
 * // Auto-detect platform
 * <Kbd keys={["mod", "K"]}>⌘K / Ctrl+K</Kbd>
 *
 * // In buttons
 * <Button>
 *   Search
 *   <Kbd keys={["⌘", "K"]} />
 * </Button>
 *
 * // Custom styling
 * <Kbd className="ml-2" size="sm">
 *   ⌘K
 * </Kbd>
 * ```
 */

import { cx } from "@/lib/utils";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const kbdVariants = tv({
  base: [
    // Base styling
    "pointer-events-none inline-flex items-center gap-1 rounded border font-mono font-medium",
  ],
  variants: {
    variant: {
      default: [
        // Light mode
        "border-zinc-200 bg-zinc-100 text-zinc-600",
        // Dark mode
        "dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400",
      ],
      onDarkButton: [
        // For use on dark buttons (default, destructive)
        "border-white/20 bg-white/10 text-white/90",
        "dark:border-white/20 dark:bg-white/10 dark:text-white/90",
      ],
      onLightButton: [
        // For use on light buttons (secondary, outline, ghost)
        "border-zinc-900/20 bg-zinc-900/10 text-zinc-900/90",
        "dark:border-zinc-100/20 dark:bg-zinc-100/10 dark:text-zinc-100/90",
      ],
    },
    size: {
      xs: "h-4 px-1 text-[9px]",
      sm: "h-5 px-1.5 text-[10px]",
      base: "h-6 px-2 text-xs",
      lg: "h-7 px-2.5 text-sm",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "sm",
  },
});

/**
 * Props for the Kbd component.
 */
interface KbdProps
  extends React.ComponentPropsWithoutRef<"kbd">,
    VariantProps<typeof kbdVariants> {
  /** Array of keys to display (for complex combinations) */
  keys?: string[];
  /** Whether to show platform-specific shortcuts */
  platform?: "mac" | "pc" | "auto";
  /** Visual variant - use 'onDarkButton' or 'onLightButton' when inside buttons */
  variant?: "default" | "onDarkButton" | "onLightButton";
}

/**
 * Keyboard shortcut display component.
 *
 * Renders keyboard shortcuts in a consistent, accessible format with proper
 * styling for light and dark modes. Supports simple keys and complex
 * key combinations.
 *
 * @param className - Additional CSS classes
 * @param children - Key text to display (for simple shortcuts)
 * @param keys - Array of keys for complex combinations
 * @param platform - Platform for modifier key display
 * @param size - Size variant
 * @param props - Additional kbd element props
 */
const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  (
    { className, children, keys, platform = "auto", size, variant, ...props },
    ref
  ) => {
    // Detect platform for modifier keys
    const isMac = React.useMemo(() => {
      if (platform === "mac") return true;
      if (platform === "pc") return false;
      if (typeof window === "undefined") return false;
      return /Mac|iPhone|iPad|iPod/.test(navigator.userAgent);
    }, [platform]);

    // Convert platform-agnostic keys to platform-specific
    const processKeys = (keyList: string[]) => {
      return keyList.map((key) => {
        switch (key.toLowerCase()) {
          case "mod":
          case "cmd":
          case "command":
            return isMac ? "⌘" : "Ctrl";
          case "ctrl":
          case "control":
            return isMac ? "⌃" : "Ctrl";
          case "alt":
          case "option":
            return isMac ? "⌥" : "Alt";
          case "shift":
            return isMac ? "⇧" : "Shift";
          case "meta":
            return isMac ? "⌘" : "Win";
          default:
            return key;
        }
      });
    };

    // For multiple keys, render each as separate kbd elements
    if (keys && keys.length > 0) {
      const processedKeys = processKeys(keys);
      return (
        <span
          className={cx("inline-flex items-center gap-1", className)}
          {...props}
        >
          {processedKeys.map((key, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span className="text-zinc-400 text-xs">+</span>}
              <kbd className={cx(kbdVariants({ size, variant }))}>{key}</kbd>
            </React.Fragment>
          ))}
        </span>
      );
    }

    // For single keys or children, render as single kbd
    return (
      <kbd
        ref={ref}
        className={cx(kbdVariants({ size, variant }), className)}
        {...props}
      >
        {children}
      </kbd>
    );
  }
);

Kbd.displayName = "Kbd";

export { Kbd, kbdVariants, type KbdProps };
