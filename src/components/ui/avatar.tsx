// Avatar Component [v1.0.0]

import { cx } from "@/lib/utils";
import { Avatar as BaseAvatar } from "@base-ui-components/react/avatar";
import * as React from "react";

interface AvatarProps {
  src?: string | null;
  square?: boolean;
  initials?: string;
  alt?: string;
  className?: string;
}

const Avatar = React.forwardRef<
  HTMLSpanElement,
  AvatarProps & React.ComponentPropsWithoutRef<"span">
>(
  (
    { src = null, square = false, initials, alt = "", className, ...props },
    ref
  ) => (
    <span
      ref={ref}
      {...props}
      className={cx(
        // Basic layout - using CSS Grid like Catalyst for better layering
        "inline-grid shrink-0 align-middle [--avatar-radius:20%] *:col-start-1 *:row-start-1",
        // Outline for better visual definition
        "outline outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10",
        // Default size
        "size-10",
        // Border radius based on square prop
        square
          ? "rounded-[--avatar-radius] *:rounded-[--avatar-radius]"
          : "rounded-full *:rounded-full",
        className
      )}
    >
      {initials && (
        <svg
          className="size-full fill-current p-[5%] text-[48px] font-medium uppercase select-none"
          viewBox="0 0 100 100"
          aria-hidden={alt ? undefined : "true"}
        >
          {alt && <title>{alt}</title>}
          <text
            x="50%"
            y="50%"
            alignmentBaseline="middle"
            dominantBaseline="middle"
            textAnchor="middle"
            dy=".125em"
          >
            {initials}
          </text>
        </svg>
      )}
      {src && <img className="size-full object-cover" src={src} alt={alt} />}
    </span>
  )
);
Avatar.displayName = "Avatar";

// Keep Base UI version for when you need automatic fallback behavior
const AvatarWithFallback = React.forwardRef<
  React.ElementRef<typeof BaseAvatar.Root>,
  React.ComponentPropsWithoutRef<typeof BaseAvatar.Root>
>(({ className, ...props }, ref) => (
  <BaseAvatar.Root
    ref={ref}
    className={cx(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      "outline outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10",
      className
    )}
    {...props}
  />
));
AvatarWithFallback.displayName = "AvatarWithFallback";

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof BaseAvatar.Image>,
  React.ComponentPropsWithoutRef<typeof BaseAvatar.Image>
>(({ className, ...props }, ref) => (
  <BaseAvatar.Image
    ref={ref}
    className={cx("aspect-square h-full w-full object-cover", className)}
    {...props}
  />
));
AvatarImage.displayName = "AvatarImage";

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof BaseAvatar.Fallback>,
  React.ComponentPropsWithoutRef<typeof BaseAvatar.Fallback>
>(({ className, ...props }, ref) => (
  <BaseAvatar.Fallback
    ref={ref}
    className={cx(
      "flex h-full w-full items-center justify-center rounded-full bg-gray-100 text-sm font-medium text-gray-900",
      "dark:bg-gray-800 dark:text-gray-50",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = "AvatarFallback";

export {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarWithFallback,
  type AvatarProps,
};
