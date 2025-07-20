// Tremor Input [v2.0.0] - Base UI

import { Input as BaseInput } from "@base-ui-components/react/input";
import { Eye, EyeOff, Search } from "lucide-react";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import { cx, focusInput, focusRing, hasErrorInput } from "@/lib/utils";

const inputStyles = tv({
  base: [
    // base
    "relative block w-full appearance-none rounded-md border px-2.5 py-2 shadow-xs outline-hidden transition sm:text-sm",
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
    // file
    [
      "file:-my-2 file:-ml-2.5 file:cursor-pointer file:rounded-l-[5px] file:rounded-r-none file:border-0 file:px-3 file:py-2 file:outline-hidden focus:outline-hidden data-disabled:pointer-events-none file:data-disabled:pointer-events-none",
      "file:border-solid file:border-zinc-300 file:bg-zinc-50 file:text-zinc-500 file:hover:bg-zinc-100 dark:file:border-zinc-800 dark:file:bg-zinc-950 dark:file:hover:bg-zinc-900/20 dark:file:data-disabled:border-zinc-700",
      "file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem]",
      "file:data-disabled:bg-zinc-100 file:data-disabled:text-zinc-500 dark:file:data-disabled:bg-zinc-800",
    ],
    // focus
    focusInput,
    // invalid - Base UI uses data-invalid
    "data-invalid:ring-2 data-invalid:ring-red-200 data-invalid:border-red-500 dark:data-invalid:ring-red-400/20",
    // remove search cancel button (optional)
    "[&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden",
  ],
  variants: {
    hasError: {
      true: hasErrorInput,
    },
    // number input
    enableStepper: {
      false:
        "[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
    },
  },
});

interface InputProps
  extends React.ComponentPropsWithoutRef<typeof BaseInput>,
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
            inputStyles({ hasError, enableStepper }),
            {
              "pl-8": isSearch,
              "pr-10": isPassword,
            },
            inputClassName
          )}
          {...props}
        />
        {isSearch && (
          <div
            className={cx(
              // base
              "pointer-events-none absolute bottom-0 left-2 flex h-full items-center justify-center",
              // text color
              "text-zinc-400 dark:text-zinc-600"
            )}
          >
            <Search className="size-[1.125rem] shrink-0" aria-hidden="true" />
          </div>
        )}
        {isPassword && (
          <div
            className={cx(
              "absolute bottom-0 right-0 flex h-full items-center justify-center px-3"
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
                <Eye aria-hidden="true" className="size-5 shrink-0" />
              ) : (
                <EyeOff aria-hidden="true" className="size-5 shrink-0" />
              )}
            </button>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

// Component configuration for documentation
export const componentConfig = {
  id: "input",
  name: "Input",
  description:
    "A versatile input field component with various types and states.",
  category: "inputs" as const,

  importStatement: `import { Input } from "@/components/inputs/input";`,

  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic text input field.",
      preview: <Input placeholder="Enter text..." />,
      code: `<Input placeholder="Enter text..." />`,
    },
    {
      id: "types",
      title: "Input Types",
      description: "Different input types for various data.",
      preview: (
        <div className="space-y-3">
          <Input type="text" placeholder="Text input" />
          <Input type="email" placeholder="Email input" />
          <Input type="password" placeholder="Password input" />
          <Input type="search" placeholder="Search input" />
        </div>
      ),
      code: `<div className="space-y-3">
  <Input type="text" placeholder="Text input" />
  <Input type="email" placeholder="Email input" />
  <Input type="password" placeholder="Password input" />
  <Input type="search" placeholder="Search input" />
</div>`,
    },
    {
      id: "states",
      title: "States",
      description: "Input with different states.",
      preview: (
        <div className="space-y-3">
          <Input placeholder="Default state" />
          <Input placeholder="Disabled state" disabled />
          <Input placeholder="Error state" hasError />
        </div>
      ),
      code: `<div className="space-y-3">
  <Input placeholder="Default state" />
  <Input placeholder="Disabled state" disabled />
  <Input placeholder="Error state" hasError />
</div>`,
    },
  ],

  api: [
    {
      name: "Input",
      description: "The main input component.",
      properties: [
        {
          name: "type",
          type: '"text" | "email" | "password" | "search" | "number" | ...',
          default: '"text"',
          description: "The type of input field.",
        },
        {
          name: "placeholder",
          type: "string",
          description: "Placeholder text for the input.",
        },
        {
          name: "hasError",
          type: "boolean",
          default: "false",
          description: "Shows error styling.",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Disables the input field.",
        },
        {
          name: "enableStepper",
          type: "boolean",
          default: "true",
          description: "Shows stepper controls for number inputs.",
        },
      ],
    },
  ],
};

export { Input, inputStyles, type InputProps };
