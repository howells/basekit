// Tremor Badge [v1.0.0]

import { mergeProps } from "@base-ui-components/react/merge-props";
import { useRender } from "@base-ui-components/react/use-render";
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

import {
  createPropExplorerConfig,
  createPropMetadata,
} from "@/lib/prop-explorer";
import { cx, iconUtils, type ComponentWithIconsProps } from "@/lib/utils";

// Define variants structure once - single source of truth
const badgeVariantsDefinition = {
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
    size: {
      sm: "px-1.5 py-0.5 text-xs",
      base: "px-2 py-1 text-xs",
      lg: "px-2.5 py-1.5 text-sm",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "base",
  },
} as const;

const badgeVariants = tv({
  base: cx(
    "inline-flex items-center gap-x-1.5 whitespace-nowrap rounded-md font-medium ring-1 ring-inset"
  ),
  ...badgeVariantsDefinition,
});

// Map badge sizes to icon sizes
const badgeToIconSizeMap = {
  sm: "xs",
  base: "sm",
  lg: "base",
} as const;

interface BadgeProps
  extends useRender.ComponentProps<"span">,
    VariantProps<typeof badgeVariants>,
    ComponentWithIconsProps {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      render = <span />,
      variant,
      size = "base",
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      children,
      ...otherProps
    }: BadgeProps,
    forwardedRef
  ) => {
    const hasChildren = children != null && children !== "";
    const hasLeftIcon = LeftIcon != null;
    const hasRightIcon = RightIcon != null;

    // Get appropriate icon size for badge size
    const iconSize = badgeToIconSizeMap[size];
    const iconSizeClass = iconUtils.getIconSize(iconSize);
    const iconClassName = `${iconSizeClass} shrink-0`;

    const renderBadgeContent = () => {
      return (
        <>
          {hasLeftIcon && <LeftIcon className={iconClassName} />}
          {hasChildren && children}
          {hasRightIcon && <RightIcon className={iconClassName} />}
        </>
      );
    };

    const defaultProps: useRender.ElementProps<"span"> = {
      className: cx(badgeVariants({ variant, size })),
      children: renderBadgeContent(),
    };

    const element = useRender({
      render,
      ref: forwardedRef,
      props: mergeProps<"span">(defaultProps, otherProps),
    });

    return element;
  }
);

Badge.displayName = "Badge";

// Example component for preview system
export const BadgeExample = ({
  variant = "default",
  size = "base",
  leftIcon,
  rightIcon,
  children = "Badge",
  ...props
}: {
  variant?: "default" | "neutral" | "success" | "error" | "warning";
  size?: "sm" | "base" | "lg";
  leftIcon?: string;
  rightIcon?: string;
  children?: string;
  [key: string]: unknown;
}) => {
  // Simple icon components for demo
  const CheckIcon = ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );

  const ExclamationIcon = ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
      />
    </svg>
  );

  const ArrowRightIcon = ({ className }: { className?: string }) => (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  );

  // Map icon names to components
  const iconMap = {
    check: CheckIcon,
    exclamation: ExclamationIcon,
    arrow: ArrowRightIcon,
  };

  const LeftIconComponent = leftIcon
    ? iconMap[leftIcon as keyof typeof iconMap]
    : undefined;
  const RightIconComponent = rightIcon
    ? iconMap[rightIcon as keyof typeof iconMap]
    : undefined;

  return (
    <Badge
      variant={variant}
      size={size}
      leftIcon={LeftIconComponent}
      rightIcon={RightIconComponent}
      {...props}
    >
      {children}
    </Badge>
  );
};

// Generate Prop Explorer Configuration - TRUE single source of truth!
const badgePropConfig = {
  componentName: "Badge",
  displayName: "Badge",
  description: "A label used to show a status or category.",
  variants: [],
  props: [
    {
      name: "leftIcon",
      type: "select",
      description: "Icon component to display on the left side",
      defaultValue: "",
      options: ["", "check", "exclamation", "arrow"],
    },
    {
      name: "rightIcon",
      type: "select",
      description: "Icon component to display on the right side",
      defaultValue: "",
      options: ["", "check", "exclamation", "arrow"],
    },
    {
      name: "children",
      type: "string",
      description: "The content to display inside the badge",
      defaultValue: "Badge",
    },
  ],
  examples: [
    {
      id: "default-badge",
      title: "Default Badge",
      description: "Basic badge with default styling.",
      props: { children: "Badge" },
      preview: <BadgeExample />,
    },
    {
      id: "icon-badge",
      title: "Badge with Icons",
      description: "Badge with left and right icons.",
      props: {
        leftIcon: "check",
        rightIcon: "arrow",
        variant: "success",
        children: "Success",
      },
      preview: (
        <BadgeExample leftIcon="check" rightIcon="arrow" variant="success">
          Success
        </BadgeExample>
      ),
    },
  ],
};

export { Badge, badgePropConfig, badgeVariants, type BadgeProps };

// Component configuration for the registry
export const componentConfig = {
  id: "badge",
  name: "Badge",
  description: "A label used to show a status or category.",
  category: "ui" as const,
  badge: "UI",
  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import { Badge } from "@/components/ui/badge";`,
  componentId: "BadgeExample",
  propExplorer: badgePropConfig,
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic badge with default styling.",
      code: `<Badge>Badge</Badge>`,
      preview: <BadgeExample />,
    },
    {
      id: "with-icons",
      title: "With Icons",
      description: "Badge with left and right icons.",
      code: `<Badge leftIcon={CheckIcon} rightIcon={ArrowIcon}>Success</Badge>`,
      preview: (
        <BadgeExample leftIcon="check" rightIcon="arrow" variant="success">
          Success
        </BadgeExample>
      ),
    },
    {
      id: "variants",
      title: "Variants",
      description: "Different badge variants.",
      code: `<Badge variant="error">Error</Badge>`,
      preview: (
        <BadgeExample variant="error" leftIcon="exclamation">
          Error
        </BadgeExample>
      ),
    },
  ],
};
