import { cx } from "@/lib/utils";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { Button } from "../button/button";

export function Pagination({
  "aria-label": ariaLabel = "Page navigation",
  className,
  ...props
}: React.ComponentPropsWithoutRef<"nav">) {
  return (
    <nav
      aria-label={ariaLabel}
      {...props}
      className={cx("flex items-center justify-center gap-2", className)}
    />
  );
}

export function PaginationPrevious({
  href,
  className,
  children = "Previous",
  disabled = false,
}: React.PropsWithChildren<{
  href?: string;
  className?: string;
  disabled?: boolean;
}>) {
  if (disabled || !href) {
    return (
      <Button
        variant="secondary"
        disabled={true}
        aria-label="Previous page"
        leftIcon={ChevronLeft}
        className={className}
      >
        <span className="sr-only sm:not-sr-only">{children}</span>
      </Button>
    );
  }

  return (
    <Button
      render={<Link href={href} aria-label="Previous page" />}
      variant="secondary"
      leftIcon={ChevronLeft}
      className={className}
    >
      <span className="sr-only sm:not-sr-only">{children}</span>
    </Button>
  );
}

export function PaginationNext({
  href,
  className,
  children = "Next",
  disabled = false,
}: React.PropsWithChildren<{
  href?: string;
  className?: string;
  disabled?: boolean;
}>) {
  if (disabled || !href) {
    return (
      <Button
        variant="secondary"
        disabled={true}
        aria-label="Next page"
        rightIcon={ChevronRight}
        className={className}
      >
        <span className="sr-only sm:not-sr-only">{children}</span>
      </Button>
    );
  }

  return (
    <Button
      render={<Link href={href} aria-label="Next page" />}
      variant="secondary"
      rightIcon={ChevronRight}
      className={className}
    >
      <span className="sr-only sm:not-sr-only">{children}</span>
    </Button>
  );
}

export function PaginationList({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"ul">) {
  return <ul {...props} className={cx("flex items-center gap-1", className)} />;
}

export function PaginationPage({
  href,
  className,
  current = false,
  children,
}: React.PropsWithChildren<{
  href: string;
  className?: string;
  current?: boolean;
}>) {
  if (current) {
    return (
      <li>
        <Button
          variant="default"
          aria-label={`Page ${children}`}
          aria-current="page"
          className={cx("min-w-10", className)}
        >
          {children}
        </Button>
      </li>
    );
  }

  return (
    <li>
      <Button
        render={<Link href={href} aria-label={`Page ${children}`} />}
        variant="ghost"
        className={cx("min-w-10", className)}
      >
        {children}
      </Button>
    </li>
  );
}

export function PaginationGap({
  className,
  children = <MoreHorizontal className="h-4 w-4" />,
  ...props
}: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      aria-hidden="true"
      {...props}
      className={cx(
        "flex h-9 w-9 items-center justify-center text-zinc-500 dark:text-zinc-400",
        className
      )}
    >
      {children}
    </span>
  );
}
