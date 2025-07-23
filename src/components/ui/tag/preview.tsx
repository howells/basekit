"use client";

import { Tag } from "./tag";

export function TagExample({
  label = "Label",
  value = "Value",
  count,
  countClassName,
  removable = true,
  onRemove,
  avatar,
  removeAriaLabel,
  avatarSrc,
  avatarAlt,
  avatarInitials,
  ...props
}: {
  label?: string;
  value?: string;
  count?: string | number;
  countClassName?: string;
  removable?: boolean;
  onRemove?: () => void;
  avatar?: {
    src?: string;
    alt?: string;
    initials?: string;
  };
  removeAriaLabel?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  avatarInitials?: string;
  [key: string]: unknown;
}) {
  // Build avatar object from individual props if provided
  const avatarConfig =
    avatar ||
    (avatarSrc || avatarAlt || avatarInitials
      ? {
          src: avatarSrc,
          alt: avatarAlt,
          initials: avatarInitials,
        }
      : undefined);

  return (
    <div className="flex flex-wrap gap-2">
      <Tag
        label={label}
        value={value}
        count={count}
        countClassName={countClassName}
        removable={removable}
        onRemove={onRemove}
        avatar={avatarConfig}
        removeAriaLabel={removeAriaLabel}
        {...props}
      />
    </div>
  );
}
