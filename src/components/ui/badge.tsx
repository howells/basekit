// Tremor Badge [v1.0.0]

import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import {
  PropExplorerConfig,
  createEventPropMetadata,
  createPropMetadata,
  createVariantOption,
  createVariantPropMetadata,
} from "@/lib/prop-explorer";
import { cx } from "@/lib/utils";

const badgeVariants = tv({
  base: cx(
    "inline-flex items-center gap-x-1 whitespace-nowrap rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
  ),
  variants: {
    variant: {
      default: [
        "bg-blue-50 text-blue-900 ring-blue-500/30",
        "dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30",
      ],
      neutral: [
        "bg-zinc-50 text-zinc-900 ring-zinc-500/30",
        "dark:bg-zinc-400/10 dark:text-zinc-400 dark:ring-zinc-400/20",
      ],
      success: [
        "bg-emerald-50 text-emerald-900 ring-emerald-600/30",
        "dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-emerald-400/20",
      ],
      error: [
        "bg-red-50 text-red-900 ring-red-600/20",
        "dark:bg-red-400/10 dark:text-red-400 dark:ring-red-400/20",
      ],
      warning: [
        "bg-yellow-50 text-yellow-900 ring-yellow-600/30",
        "dark:bg-yellow-400/10 dark:text-yellow-500 dark:ring-yellow-400/20",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface BadgeProps
  extends React.ComponentPropsWithoutRef<"span">,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }: BadgeProps, forwardedRef) => {
    return (
      <span
        ref={forwardedRef}
        className={cx(badgeVariants({ variant }), className)}
        tremor-id="tremor-raw"
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

// Prop Explorer Configuration
const badgePropConfig: PropExplorerConfig = {
  componentName: "Badge",
  displayName: "Badge",
  description: "A label used to show a status or category.",

  // Standard HTML props that Badge inherits from span
  props: [
    createPropMetadata("children", "React.ReactNode", {
      description: "The content to display inside the badge",
      category: "content",
      required: true,
      examples: ["New", "Beta", "Pro"],
    }),
    createPropMetadata("className", "string", {
      description: "Additional CSS classes to apply to the badge",
      category: "appearance",
      examples: ["mx-2", "font-bold", "shadow-lg"],
    }),
    createPropMetadata("id", "string", {
      description: "Unique identifier for the badge element",
      category: "accessibility",
    }),
    createPropMetadata("role", "string", {
      description: "ARIA role for accessibility",
      category: "accessibility",
      examples: ["status", "badge", "img"],
    }),
    createPropMetadata("aria-label", "string", {
      description: "Accessible label for screen readers",
      category: "accessibility",
      examples: ["New feature available", "Pro subscription required"],
    }),
    createPropMetadata("aria-describedby", "string", {
      description: "ID of element that describes the badge",
      category: "accessibility",
    }),
    createPropMetadata("tabIndex", "number", {
      description: "Tab order for keyboard navigation",
      category: "accessibility",
      examples: [0, -1],
    }),
  ],

  // Variant props from tailwind-variants
  variants: [
    createVariantPropMetadata(
      "variant",
      [
        createVariantOption("default", {
          label: "Default",
          description: "Blue badge for general use",
          preview: <Badge variant="default">Default</Badge>,
          classes: [
            "bg-blue-50",
            "text-blue-900",
            "ring-blue-500/30",
            "dark:bg-blue-400/10",
            "dark:text-blue-400",
            "dark:ring-blue-400/30",
          ],
        }),
        createVariantOption("neutral", {
          label: "Neutral",
          description: "Gray badge for neutral information",
          preview: <Badge variant="neutral">Neutral</Badge>,
          classes: [
            "bg-zinc-50",
            "text-zinc-900",
            "ring-zinc-500/30",
            "dark:bg-zinc-400/10",
            "dark:text-zinc-400",
            "dark:ring-zinc-400/20",
          ],
        }),
        createVariantOption("success", {
          label: "Success",
          description: "Green badge for positive states",
          preview: <Badge variant="success">Success</Badge>,
          classes: [
            "bg-emerald-50",
            "text-emerald-900",
            "ring-emerald-600/30",
            "dark:bg-emerald-400/10",
            "dark:text-emerald-400",
            "dark:ring-emerald-400/20",
          ],
        }),
        createVariantOption("error", {
          label: "Error",
          description: "Red badge for error states",
          preview: <Badge variant="error">Error</Badge>,
          classes: [
            "bg-red-50",
            "text-red-900",
            "ring-red-600/20",
            "dark:bg-red-400/10",
            "dark:text-red-400",
            "dark:ring-red-400/20",
          ],
        }),
        createVariantOption("warning", {
          label: "Warning",
          description: "Yellow badge for warning states",
          preview: <Badge variant="warning">Warning</Badge>,
          classes: [
            "bg-yellow-50",
            "text-yellow-900",
            "ring-yellow-600/30",
            "dark:bg-yellow-400/10",
            "dark:text-yellow-500",
            "dark:ring-yellow-400/20",
          ],
        }),
      ],
      {
        description: "The visual style variant of the badge",
        defaultOption: "default",
        category: "appearance",
      }
    ),
  ],

  // Event handlers
  events: [
    createEventPropMetadata(
      "onClick",
      "(event: React.MouseEvent<HTMLSpanElement>) => void",
      "When the badge is clicked",
      [
        {
          name: "event",
          type: "React.MouseEvent<HTMLSpanElement>",
          description: "The click event",
        },
      ],
      {
        description: "Handler called when the badge is clicked",
      }
    ),
    createEventPropMetadata(
      "onMouseEnter",
      "(event: React.MouseEvent<HTMLSpanElement>) => void",
      "When the mouse enters the badge",
      [
        {
          name: "event",
          type: "React.MouseEvent<HTMLSpanElement>",
          description: "The mouse enter event",
        },
      ],
      {
        description: "Handler called when mouse enters the badge",
      }
    ),
    createEventPropMetadata(
      "onMouseLeave",
      "(event: React.MouseEvent<HTMLSpanElement>) => void",
      "When the mouse leaves the badge",
      [
        {
          name: "event",
          type: "React.MouseEvent<HTMLSpanElement>",
          description: "The mouse leave event",
        },
      ],
      {
        description: "Handler called when mouse leaves the badge",
      }
    ),
    createEventPropMetadata(
      "onFocus",
      "(event: React.FocusEvent<HTMLSpanElement>) => void",
      "When the badge receives focus",
      [
        {
          name: "event",
          type: "React.FocusEvent<HTMLSpanElement>",
          description: "The focus event",
        },
      ],
      {
        description: "Handler called when the badge receives focus",
      }
    ),
    createEventPropMetadata(
      "onBlur",
      "(event: React.FocusEvent<HTMLSpanElement>) => void",
      "When the badge loses focus",
      [
        {
          name: "event",
          type: "React.FocusEvent<HTMLSpanElement>",
          description: "The blur event",
        },
      ],
      {
        description: "Handler called when the badge loses focus",
      }
    ),
  ],

  // Related components
  relatedComponents: ["Button", "Tag", "Callout"],

  // Examples showing different prop combinations
  examples: [
    {
      id: "basic",
      title: "Basic Usage",
      description: "Simple badge with default styling",
      props: { children: "New" },
      preview: <Badge>New</Badge>,
      code: `<Badge>New</Badge>`,
      highlightedProps: ["children"],
    },
    {
      id: "variants",
      title: "All Variants",
      description: "Badge in different visual styles",
      props: { variant: "success" },
      preview: (
        <div className="flex gap-2 flex-wrap">
          <Badge variant="default">Default</Badge>
          <Badge variant="neutral">Neutral</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="warning">Warning</Badge>
        </div>
      ),
      code: `<Badge variant="default">Default</Badge>
<Badge variant="neutral">Neutral</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="warning">Warning</Badge>`,
      highlightedProps: ["variant"],
    },
    {
      id: "interactive",
      title: "Interactive Badge",
      description: "Badge with custom styling for interactive use",
      props: {
        variant: "default",
        className: "cursor-pointer hover:scale-105 transition-transform",
      },
      preview: (
        <Badge
          variant="default"
          className="cursor-pointer hover:scale-105 transition-transform"
        >
          Hover me
        </Badge>
      ),
      code: `<Badge
  variant="default"
  className="cursor-pointer hover:scale-105 transition-transform"
>
  Hover me
</Badge>`,
      highlightedProps: ["className"],
    },
    {
      id: "accessibility",
      title: "Accessible Badge",
      description: "Badge with proper accessibility attributes",
      props: {
        variant: "success",
        role: "status",
        "aria-label": "Order completed successfully",
      },
      preview: (
        <Badge
          variant="success"
          role="status"
          aria-label="Order completed successfully"
        >
          Completed
        </Badge>
      ),
      code: `<Badge
  variant="success"
  role="status"
  aria-label="Order completed successfully"
>
  Completed
</Badge>`,
      highlightedProps: ["role", "aria-label"],
    },
  ],
};

export { Badge, badgePropConfig, badgeVariants, type BadgeProps };
