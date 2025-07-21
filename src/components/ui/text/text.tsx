import clsx from "clsx";
import Link from "next/link";
import { tv, type VariantProps } from "tailwind-variants";

const textVariants = tv({
  base: "m-0 text-zinc-500 dark:text-zinc-400",
  variants: {
    size: {
      xs: "text-xs/4",
      sm: "text-sm/5",
      base: "text-base/6 sm:text-sm/6",
      lg: "text-lg/7",
      xl: "text-xl/8",
    },
  },
  defaultVariants: {
    size: "base",
  },
});

interface TextProps
  extends React.ComponentPropsWithoutRef<"p">,
    VariantProps<typeof textVariants> {}

export function Text({ className, size, ...props }: TextProps) {
  return (
    <p
      data-slot="text"
      {...props}
      className={clsx(textVariants({ size }), className)}
    />
  );
}

export function TextLink({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        "text-zinc-950 underline decoration-zinc-950/50 data-hover:decoration-zinc-950 dark:text-white dark:decoration-white/50 dark:data-hover:decoration-white"
      )}
    />
  );
}

export function Strong({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"strong">) {
  return (
    <strong
      {...props}
      className={clsx(className, "font-medium text-zinc-950 dark:text-white")}
    />
  );
}

export function Code({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"code">) {
  return (
    <code
      {...props}
      className={clsx(
        className,
        "rounded-sm border border-zinc-950/10 bg-zinc-950/2.5 px-0.5 text-sm font-medium text-zinc-950 sm:text-[0.8125rem] dark:border-white/20 dark:bg-white/5 dark:text-white"
      )}
    />
  );
}
