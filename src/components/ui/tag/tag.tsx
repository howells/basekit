// Tremor Tag [v1.0.0] - Base UI

import { mergeProps } from "@base-ui-components/react/merge-props";
import { useRender } from "@base-ui-components/react/use-render";
import { X } from "lucide-react";
import React from "react";

import { cx } from "@/lib/utils";
import { Avatar, type AvatarProps } from "../avatar/avatar";

/**
 * Get padding classes based on avatar and removable state
 */
function getPaddingClasses(
  avatar: TagProps["avatar"],
  removable: boolean
): string {
  if (avatar) {
    // With avatar: less left padding since avatar provides visual weight
    return removable ? "pl-1 pr-1" : "pl-1 pr-3";
  } else {
    // No avatar: standard padding
    return removable ? "pl-2.5 pr-1" : "px-3";
  }
}

interface TagProps extends useRender.ComponentProps<"span"> {
  /**
   * The label text (e.g., "Department", "Location")
   */
  label?: string;
  /**
   * The value text (e.g., "Sales", "Zurich")
   */
  value: string;
  /**
   * Optional count or secondary text to display after the value
   */
  count?: string | number;
  /**
   * Custom CSS classes for the count element
   */
  countClassName?: string;
  /**
   * Whether the tag can be removed
   */
  removable?: boolean;
  /**
   * Callback when the remove button is clicked
   */
  onRemove?: () => void;
  /**
   * Avatar configuration for user tags
   */
  avatar?: {
    src?: string;
    alt?: string;
    initials?: string;
  };
  /**
   * Aria label for the remove button
   */
  removeAriaLabel?: string;
}

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      render = <span />,
      label,
      value,
      count,
      countClassName,
      removable = false,
      onRemove,
      avatar,
      className,
      removeAriaLabel = "Remove",
      ...props
    },
    forwardedRef
  ) => {
    const defaultProps: useRender.ElementProps<"span"> = {
      className: cx(
        // base
        "inline-flex items-center gap-x-2 rounded-full py-1 text-xs",
        // padding logic
        getPaddingClasses(avatar, removable),
        // background color
        "bg-white dark:bg-[#090E1A]",
        // text color
        "text-zinc-700 dark:text-zinc-300",
        // border
        "ring-1 ring-inset ring-zinc-200 dark:ring-zinc-800",
        className
      ),
      children: (
        <>
          {avatar && (
            <Avatar
              src={avatar.src}
              alt={avatar.alt}
              initials={avatar.initials}
              className="size-6"
            />
          )}
          {label && (
            <>
              <span className="text-xs text-zinc-700 dark:text-zinc-300">
                {label}
              </span>
              <span className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />
            </>
          )}
          <span className="text-xs font-medium text-zinc-900 dark:text-zinc-50">
            {value}
            {count !== undefined && count !== "" && (
              <span
                className={cx(
                  // default knocked-back styling
                  "ml-1.5 text-xs font-normal text-zinc-500 dark:text-zinc-400",
                  countClassName
                )}
              >
                {count}
              </span>
            )}
          </span>
          {removable && (
            <button
              type="button"
              onClick={onRemove}
              className={cx(
                // base - adjust margin based on whether there's a count
                count !== undefined && count !== "" ? "-ml-1.5" : "-ml-1",
                "flex size-5 items-center justify-center rounded-full",
                // text color
                "text-zinc-500 dark:text-zinc-400",
                // hover
                "hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200",
                // focus
                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
              )}
              aria-label={removeAriaLabel}
            >
              <X className="size-3 shrink-0" aria-hidden="true" />
            </button>
          )}
        </>
      ),
    };

    const element = useRender({
      render,
      ref: forwardedRef,
      props: mergeProps<"span">(defaultProps, props),
    });

    return element;
  }
);

Tag.displayName = "Tag";

export { Tag, type TagProps };
