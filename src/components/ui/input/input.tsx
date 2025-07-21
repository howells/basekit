// Tremor Input [v2.0.0] - Base UI

import { Input as BaseInput } from "@base-ui-components/react/input";
import { Eye, EyeOff, Search } from "lucide-react";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { cx, focusInput, focusRing, hasErrorInput } from "@/lib/utils";

const inputStyles = tv({
  base: [
    // base
    "relative block w-full appearance-none rounded-md border shadow-xs outline-hidden transition",
    // border color
    "border-zinc-300 dark:border-zinc-800",
    // text color
    "text-zinc-900 dark:text-zinc-50",
    // placeholder color
    "placeholder-zinc-400 dark:placeholder-zinc-500",
    // background color
    "bg-white dark:bg-zinc-950",
    // disabled
    "data-disabled:border-zinc-300 data-disabled:bg-zinc-100 data-disabled:text-zinc-400",
    "dark:data-disabled:border-zinc-700 dark:data-disabled:bg-zinc-800 dark:data-disabled:text-zinc-500",
    // focus
    focusInput,
    // invalid - Base UI uses data-invalid
    "data-invalid:ring-2 data-invalid:ring-red-200 data-invalid:border-red-500 dark:data-invalid:ring-red-400/20",
    // remove search cancel button (optional)
    "[&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden",
  ],
  variants: {
    size: {
      sm: [
        "px-2 py-1.5 text-xs",
        // file styles for sm
        "file:-my-1.5 file:-ml-2 file:px-2 file:py-1.5 file:[margin-inline-end:0.5rem]",
      ],
      base: [
        "px-2.5 py-2 text-sm",
        // file styles for base
        "file:-my-2 file:-ml-2.5 file:px-3 file:py-2 file:[margin-inline-end:0.75rem]",
      ],
      lg: [
        "px-3 py-2.5 text-base",
        // file styles for lg
        "file:-my-2.5 file:-ml-3 file:px-4 file:py-2.5 file:[margin-inline-end:1rem]",
      ],
    },
    hasError: {
      true: hasErrorInput,
    },
    // number input
    enableStepper: {
      false:
        "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
    },
  },
  defaultVariants: {
    size: "base",
  },
  compoundVariants: [
    // File input styles that are shared across all sizes
    {
      class: [
        "file:cursor-pointer file:rounded-l-[5px] file:rounded-r-none file:border-0 file:outline-hidden focus:outline-hidden data-disabled:pointer-events-none file:data-disabled:pointer-events-none",
        "file:border-solid file:border-zinc-300 file:bg-zinc-50 file:text-zinc-500 file:hover:bg-zinc-100 dark:file:border-zinc-800 dark:file:bg-zinc-950 dark:file:hover:bg-zinc-900/20 dark:file:data-disabled:border-zinc-700",
        "file:[border-inline-end-width:1px]",
        "file:data-disabled:bg-zinc-100 file:data-disabled:text-zinc-500 dark:file:data-disabled:bg-zinc-800",
      ],
    },
  ],
});

interface InputProps
  extends Omit<React.ComponentPropsWithoutRef<typeof BaseInput>, "size">,
    VariantProps<typeof inputStyles> {
  inputClassName?: string;
  type?: string;
}

const Input = React.forwardRef<React.ElementRef<typeof BaseInput>, InputProps>(
  (
    {
      className,
      inputClassName,
      hasError,
      enableStepper = true,
      size = "base",
      type,
      ...props
    }: InputProps,
    forwardedRef
  ) => {
    const [typeState, setTypeState] = React.useState(type);

    const isPassword = type === "password";
    const isSearch = type === "search";

    return (
      <div className={cx("relative w-full", className)}>
        <BaseInput
          ref={forwardedRef}
          type={isPassword ? typeState : type}
          className={cx(
            inputStyles({ hasError, enableStepper, size }),
            {
              "pl-7": isSearch && size === "sm",
              "pl-8": isSearch && size === "base",
              "pl-9": isSearch && size === "lg",
              "pr-9": isPassword && size === "sm",
              "pr-10": isPassword && size === "base",
              "pr-11": isPassword && size === "lg",
            },
            inputClassName
          )}
          {...props}
        />
        {isSearch && (
          <div
            className={cx(
              // base
              "pointer-events-none absolute bottom-0 flex h-full items-center justify-center",
              // text color
              "text-zinc-400 dark:text-zinc-600",
              // positioning based on size
              {
                "left-1.5": size === "sm",
                "left-2": size === "base",
                "left-2.5": size === "lg",
              }
            )}
          >
            <Search
              className={cx("shrink-0", {
                "size-3.5": size === "sm",
                "size-[1.125rem]": size === "base",
                "size-5": size === "lg",
              })}
              aria-hidden="true"
            />
          </div>
        )}
        {isPassword && (
          <div
            className={cx(
              "absolute bottom-0 right-0 flex h-full items-center justify-center",
              {
                "px-2": size === "sm",
                "px-3": size === "base" || size === "lg",
              }
            )}
          >
            <button
              aria-label="Change password visibility"
              className={cx(
                // base
                "h-fit w-fit rounded-xs outline-hidden transition-all",
                // text
                "text-zinc-400 dark:text-zinc-600",
                // hover
                "hover:text-zinc-500 dark:hover:text-zinc-500",
                focusRing
              )}
              type="button"
              onClick={() => {
                setTypeState(typeState === "password" ? "text" : "password");
              }}
            >
              <span className="sr-only">
                {typeState === "password" ? "Show password" : "Hide password"}
              </span>
              {typeState === "password" ? (
                <Eye
                  aria-hidden="true"
                  className={cx("shrink-0", {
                    "size-4": size === "sm",
                    "size-5": size === "base" || size === "lg",
                  })}
                />
              ) : (
                <EyeOff
                  aria-hidden="true"
                  className={cx("shrink-0", {
                    "size-4": size === "sm",
                    "size-5": size === "base" || size === "lg",
                  })}
                />
              )}
            </button>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input, type InputProps };
