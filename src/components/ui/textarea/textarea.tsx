// Tremor Textarea [v1.0.0]

import React from "react";

import { cx, focusInput, hasErrorInput } from "@/lib/utils";

/**
 * Props for the Textarea component.
 *
 * @interface TextareaProps
 * @extends React.TextareaHTMLAttributes<HTMLTextAreaElement>
 */
interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Whether to display error styling */
  hasError?: boolean;
}

/**
 * A multi-line text input component with Tremor-inspired styling.
 * 
 * Provides a resizable textarea for longer text input with consistent styling
 * that matches the Input component. Features error states for form validation,
 * proper focus management, and dark mode support.
 *
 * @component
 * @example
 * ```tsx
 * // Basic textarea
 * <Textarea placeholder="Enter your message" />
 * 
 * // With error state
 * <Textarea hasError placeholder="Required field" />
 * 
 * // Controlled with resize constraints
 * <Textarea 
 *   value={message} 
 *   onChange={handleChange}
 *   rows={5}
 *   resize="vertical"
 * />
 * 
 * // Form integration
 * <Textarea
 *   name="description"
 *   required
 *   placeholder="Describe your request"
 *   minLength={10}
 *   maxLength={500}
 * />
 * ```
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, hasError, ...props }: TextareaProps, forwardedRef) => {
    return (
      <textarea
        ref={forwardedRef}
        className={cx(
          // base
          "flex min-h-[4rem] w-full rounded-md border px-3 py-1.5 shadow-xs outline-hidden transition-colors sm:text-sm",
          // text color
          "text-zinc-900 dark:text-zinc-50",
          // border color
          "border-zinc-300 dark:border-zinc-800",
          // background color
          "bg-white dark:bg-zinc-950",
          // placeholder color
          "placeholder-zinc-400 dark:placeholder-zinc-500",
          // disabled
          "disabled:border-zinc-300 disabled:bg-zinc-100 disabled:text-zinc-300",
          "dark:disabled:border-zinc-700 dark:disabled:bg-zinc-800 dark:disabled:text-zinc-500",
          // focus
          focusInput,
          // error
          hasError ? hasErrorInput : "",
          // invalid (optional)
          // "dark:aria-invalid:ring-red-400/20 aria-invalid:ring-2 aria-invalid:ring-red-200 aria-invalid:border-red-500 invalid:ring-2 invalid:ring-red-200 invalid:border-red-500"
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea, type TextareaProps };