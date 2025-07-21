// Avatar Component [v1.0.0]

import { getColorFromName } from "@/lib/colors";
import { cx } from "@/lib/utils";
import { Avatar as BaseAvatar } from "@base-ui-components/react/avatar";
import Image from "next/image";
import * as React from "react";

/**
 * Props for the Avatar component.
 *
 * @interface AvatarProps
 */
interface AvatarProps {
  /** Image source URL for the avatar */
  src?: string | null;
  /** Whether to render the avatar with square corners instead of circular */
  square?: boolean;
  /** Initials to display when no image is provided */
  initials?: string;
  /** Alt text for accessibility */
  alt?: string;
  /** Whether to use a dynamic background color based on initials/alt text */
  dynamicBackground?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * A user profile picture display component with initials fallback.
 *
 * Displays user profile pictures with automatic fallback to initials when no image is provided.
 * Supports both circular and square variants with proper layering using CSS Grid.
 * Uses Next.js Image component for optimized loading.
 *
 * @component
 * @example
 * ```tsx
 * // With image
 * <Avatar src="/profile.jpg" alt="John Doe" />
 *
 * // With initials fallback
 * <Avatar initials="JD" alt="John Doe" />
 *
 * // Square variant
 * <Avatar src="/profile.jpg" square alt="John Doe" />
 * ```
 */
const Avatar = React.forwardRef<
  HTMLSpanElement,
  AvatarProps & React.ComponentPropsWithoutRef<"span">
>(
  (
    {
      src = null,
      square = false,
      initials,
      alt = "",
      dynamicBackground = false,
      className,
      ...props
    },
    ref
  ) => {
    // Generate background color from initials or alt text when dynamicBackground is true
    const backgroundColor = dynamicBackground
      ? getColorFromName(initials || alt || "default")
      : undefined;

    return (
      <span
        ref={ref}
        {...props}
        className={cx(
          // Basic layout - using CSS Grid like Catalyst for better layering
          "inline-grid shrink-0 align-middle [--avatar-radius:20%] *:col-start-1 *:row-start-1",
          // Semi-transparent inset ring for better visual definition
          "inset-ring-1 inset-ring-black/15 dark:inset-ring-white/15",
          // Default size
          "size-10",
          // Border radius based on square prop
          square
            ? "rounded-[--avatar-radius] *:rounded-[--avatar-radius]"
            : "rounded-full *:rounded-full",
          className
        )}
        style={backgroundColor ? { backgroundColor } : undefined}
      >
        {initials && (
          <svg
            className="size-full fill-current p-[5%] text-[36px] font-medium uppercase select-none"
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
              fill={dynamicBackground ? "white" : "currentColor"}
            >
              {initials?.slice(0, 2)}
            </text>
          </svg>
        )}
        {src && (
          <Image
            className="size-full object-cover"
            src={src}
            alt={alt}
            width={40}
            height={40}
            sizes="40px"
          />
        )}
      </span>
    );
  }
);
Avatar.displayName = "Avatar";

/**
 * Avatar root container built on Base UI's Avatar primitive for automatic fallback behavior.
 *
 * Based on Base UI's Avatar (https://base-ui.com/react/components/avatar),
 * providing automatic image loading states and fallback management.
 * Use this when you need built-in loading state handling.
 *
 * @component
 * @example
 * ```tsx
 * <AvatarWithFallback>
 *   <AvatarImage src="/profile.jpg" alt="John Doe" />
 *   <AvatarFallback>JD</AvatarFallback>
 * </AvatarWithFallback>
 * ```
 *
 * @see https://base-ui.com/react/components/avatar - Base UI documentation
 */
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

/**
 * Avatar image component with automatic loading state handling.
 *
 * Renders the avatar image with built-in loading state management.
 * Automatically shows the fallback when image fails to load or is unavailable.
 * Use within AvatarWithFallback for complete fallback behavior.
 *
 * @example
 * ```tsx
 * <AvatarImage src="/profile.jpg" alt="John Doe" />
 * ```
 */
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

/**
 * Fallback content displayed when avatar image fails to load or is unavailable.
 *
 * Automatically appears when the avatar image cannot be displayed.
 * Typically contains user initials or a placeholder icon.
 * Features background color and proper text styling for readability.
 *
 * @example
 * ```tsx
 * <AvatarFallback>JD</AvatarFallback>
 * <AvatarFallback>
 *   <UserIcon className="h-4 w-4" />
 * </AvatarFallback>
 * ```
 */
const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof BaseAvatar.Fallback>,
  React.ComponentPropsWithoutRef<typeof BaseAvatar.Fallback>
>(({ className, ...props }, ref) => (
  <BaseAvatar.Fallback
    ref={ref}
    className={cx(
      "flex h-full w-full items-center justify-center rounded-full bg-zinc-100 text-sm font-medium text-zinc-900",
      "dark:bg-zinc-800 dark:text-zinc-50",
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
