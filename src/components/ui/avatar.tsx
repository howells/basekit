// Avatar Component [v1.0.0]

import { cx } from "@/lib/utils";
import { Avatar as BaseAvatar } from "@base-ui-components/react/avatar";
import Image from "next/image";
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

// Example component for preview system
export const AvatarExample = ({
  src,
  square = false,
  initials = "JD",
  alt = "Avatar",
  ...props
}: {
  src?: string;
  square?: string | boolean;
  initials?: string;
  alt?: string;
  [key: string]: unknown;
}) => {
  const isSquare = square === true || square === "true";

  return (
    <Avatar
      src={src || null}
      square={isSquare}
      initials={initials}
      alt={alt}
      {...props}
    />
  );
};

// PropExplorer configuration for the avatar
export const avatarPropConfig = {
  componentName: "Avatar",
  displayName: "Avatar",
  description:
    "A circular or square avatar component with support for images and initials fallback.",
  variants: [],
  props: [
    {
      name: "src",
      type: "select",
      description: "The image source URL for the avatar.",
      defaultValue: "",
      options: [
        "",
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face",
      ],
    },
    {
      name: "square",
      type: "boolean",
      description: "If true, displays a square avatar instead of circular.",
      defaultValue: false,
    },
    {
      name: "initials",
      type: "string",
      description: "The initials to display when no image is provided.",
      defaultValue: "JD",
    },
    {
      name: "alt",
      type: "string",
      description: "Alt text for the avatar image.",
      defaultValue: "Avatar",
    },
  ],
  examples: [
    {
      id: "image-avatar",
      title: "Image Avatar",
      description: "Avatar with a profile image.",
      props: {
        src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face",
        square: false,
        initials: "JD",
        alt: "John Doe",
      },
      preview: (
        <AvatarExample
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face"
          square={false}
          initials="JD"
          alt="John Doe"
        />
      ),
    },
    {
      id: "initials-avatar",
      title: "Initials Avatar",
      description: "Avatar displaying initials when no image is available.",
      props: {
        src: "",
        square: false,
        initials: "AB",
        alt: "Avatar",
      },
      preview: (
        <AvatarExample src="" square={false} initials="AB" alt="Avatar" />
      ),
    },
    {
      id: "square-avatar",
      title: "Square Avatar",
      description: "Square-shaped avatar with an image.",
      props: {
        src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
        square: true,
        initials: "MJ",
        alt: "Square Avatar",
      },
      preview: (
        <AvatarExample
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
          square={true}
          initials="MJ"
          alt="Square Avatar"
        />
      ),
    },
  ],
};

// Component configuration for the registry
export const componentConfig = {
  id: "avatar",
  name: "Avatar",
  description:
    "A circular or square avatar component with support for images and initials fallback.",
  category: "ui" as const,
  badge: "UI",
  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import { Avatar } from "@/components/ui/avatar";`,
  componentId: "AvatarExample",
  propExplorer: avatarPropConfig,
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic avatar with initials.",
      code: `<Avatar initials="JD" alt="John Doe" />`,
      preview: <AvatarExample />,
    },
    {
      id: "with-image",
      title: "With Image",
      description: "Avatar with a profile image.",
      code: `<Avatar
  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face"
  alt="Profile picture"
/>`,
      preview: (
        <AvatarExample src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face" />
      ),
    },
    {
      id: "square",
      title: "Square",
      description: "Square-shaped avatar.",
      code: `<Avatar
  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
  square
  alt="Square avatar"
/>`,
      preview: (
        <AvatarExample
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
          square={true}
        />
      ),
    },
  ],
};
