// Tremor Breadcrumbs [v1.0.0] - Simplified

import { cx } from "@/lib/utils";
import { mergeProps } from "@base-ui-components/react/merge-props";
import { useRender } from "@base-ui-components/react/use-render";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const breadcrumbVariants = tv({
  slots: {
    root: [
      // base
      "w-full",
    ],
    list: [
      // base
      "flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
      // text color
      "text-zinc-500 dark:text-zinc-400",
    ],
    item: [
      // base
      "inline-flex items-center gap-1.5",
    ],
    link: [
      // base
      "transition-colors",
      // hover
      "hover:text-zinc-900 dark:hover:text-zinc-50",
      // focus
      "focus:outline-none focus:text-zinc-900 dark:focus:text-zinc-50",
    ],
    page: [
      // base
      "font-normal",
      // text color
      "text-zinc-900 dark:text-zinc-50",
    ],
    separator: [
      // base
      "[&>svg]:size-3.5",
      // text color
      "text-zinc-400 dark:text-zinc-500",
    ],
    ellipsis: [
      // base
      "flex size-9 items-center justify-center",
      // text color
      "text-zinc-400 dark:text-zinc-500",
    ],
  },
});

// Root Breadcrumb component
const Breadcrumb = React.forwardRef<HTMLElement, React.ComponentProps<"nav">>(
  ({ className, ...props }, ref) => {
    const { root } = breadcrumbVariants();
    return (
      <nav
        ref={ref}
        aria-label="breadcrumb"
        className={cx(root(), className)}
        {...props}
      />
    );
  }
);
Breadcrumb.displayName = "Breadcrumb";

// Breadcrumb List component
const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentProps<"ol">
>(({ className, ...props }, ref) => {
  const { list } = breadcrumbVariants();
  return <ol ref={ref} className={cx(list(), className)} {...props} />;
});
BreadcrumbList.displayName = "BreadcrumbList";

// Breadcrumb Item component
const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => {
  const { item } = breadcrumbVariants();
  return <li ref={ref} className={cx(item(), className)} {...props} />;
});
BreadcrumbItem.displayName = "BreadcrumbItem";

// Breadcrumb Link component
const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  useRender.ComponentProps<"a">
>(({ className, render = <a />, ...props }, ref) => {
  const { link } = breadcrumbVariants();

  const element = useRender({
    render,
    ref,
    props: mergeProps<"a">({ className: cx(link(), className) }, props),
  });

  return element;
});
BreadcrumbLink.displayName = "BreadcrumbLink";

// Breadcrumb Page component
const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentProps<"span">
>(({ className, ...props }, ref) => {
  const { page } = breadcrumbVariants();
  return (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cx(page(), className)}
      {...props}
    />
  );
});
BreadcrumbPage.displayName = "BreadcrumbPage";

// Breadcrumb Separator component
const BreadcrumbSeparator = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ children, className, ...props }, ref) => {
  const { separator } = breadcrumbVariants();
  return (
    <li
      ref={ref}
      role="presentation"
      aria-hidden="true"
      className={cx(separator(), className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  );
});
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

// Breadcrumb Ellipsis component
const BreadcrumbEllipsis = React.forwardRef<
  HTMLSpanElement,
  React.ComponentProps<"span">
>(({ className, ...props }, ref) => {
  const { ellipsis } = breadcrumbVariants();
  return (
    <span
      ref={ref}
      role="presentation"
      aria-hidden="true"
      className={cx(ellipsis(), className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  );
});
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";

// Example component for preview system
export const BreadcrumbsExample = ({
  showEllipsis = false,
  ...props
}: {
  showEllipsis?: string | boolean;
  [key: string]: unknown;
}) => {
  const shouldShowEllipsis = showEllipsis === true || showEllipsis === "true";

  return (
    <Breadcrumb {...props}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {shouldShowEllipsis && (
          <>
            <BreadcrumbItem>
              <BreadcrumbEllipsis />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}
        <BreadcrumbItem>
          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumbs</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

// PropExplorer configuration
export const breadcrumbsPropConfig = {
  componentName: "Breadcrumbs",
  displayName: "Breadcrumbs",
  description:
    "A navigation component that shows the current page's location within a navigational hierarchy.",
  variants: [],
  props: [
    {
      name: "showEllipsis",
      type: "boolean",
      description: "Whether to show ellipsis for collapsed items.",
      defaultValue: false,
    },
  ],
  examples: [
    {
      id: "default-breadcrumbs",
      title: "Default Breadcrumbs",
      description: "Basic breadcrumb navigation.",
      props: { showEllipsis: false },
      preview: <BreadcrumbsExample />,
    },
    {
      id: "with-ellipsis",
      title: "With Ellipsis",
      description: "Breadcrumbs with collapsed items.",
      props: { showEllipsis: true },
      preview: <BreadcrumbsExample showEllipsis={true} />,
    },
  ],
};

// Component configuration for documentation
export const componentConfig = {
  id: "breadcrumbs",
  name: "Breadcrumbs",
  description:
    "A navigation component that shows the current page's location within a navigational hierarchy.",
  category: "ui" as const,
  badge: "UI",
  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumbs";`,
  componentId: "BreadcrumbsExample",
  propExplorer: breadcrumbsPropConfig,
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic breadcrumb navigation.",
      preview: <BreadcrumbsExample />,
      code: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumbs</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
    },
    {
      id: "with-ellipsis",
      title: "With Ellipsis",
      description: "Breadcrumbs with collapsed items.",
      preview: <BreadcrumbsExample showEllipsis={true} />,
      code: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbEllipsis />
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumbs</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
    },
  ],
};

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
};
