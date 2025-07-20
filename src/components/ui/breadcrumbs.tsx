// Tremor Breadcrumbs [v1.0.0] - Base UI

import { cx } from "@/lib/utils";
import { useRender } from "@base-ui-components/react/utils/use-render";
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
      "text-gray-500 dark:text-gray-400",
    ],
    item: [
      // base
      "inline-flex items-center gap-1.5",
    ],
    link: [
      // base
      "transition-colors",
      // hover
      "hover:text-gray-900 dark:hover:text-gray-50",
      // focus
      "focus:outline-none focus:text-gray-900 dark:focus:text-gray-50",
    ],
    page: [
      // base
      "font-normal",
      // text color
      "text-gray-900 dark:text-gray-50",
    ],
    separator: [
      // base
      "[&>svg]:size-3.5",
      // text color
      "text-gray-400 dark:text-gray-500",
    ],
    ellipsis: [
      // base
      "flex size-9 items-center justify-center",
      // text color
      "text-gray-400 dark:text-gray-500",
    ],
  },
  variants: {
    size: {
      sm: {
        list: "gap-1 text-xs sm:gap-1.5",
        separator: "[&>svg]:size-3",
        ellipsis: "size-7",
      },
      default: {
        list: "gap-1.5 text-sm sm:gap-2.5",
        separator: "[&>svg]:size-3.5",
        ellipsis: "size-9",
      },
      lg: {
        list: "gap-2 text-base sm:gap-3",
        separator: "[&>svg]:size-4",
        ellipsis: "size-10",
      },
    },
  },
  defaultVariants: {
    size: "default",
  },
});

type BreadcrumbVariants = VariantProps<typeof breadcrumbVariants>;

// Root Breadcrumb component
interface BreadcrumbProps
  extends React.ComponentProps<"nav">,
    BreadcrumbVariants {}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, size, ...props }, ref) => {
    const { root } = breadcrumbVariants({ size });
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
interface BreadcrumbListProps
  extends React.ComponentProps<"ol">,
    BreadcrumbVariants {}

const BreadcrumbList = React.forwardRef<HTMLOListElement, BreadcrumbListProps>(
  ({ className, size, ...props }, ref) => {
    const { list } = breadcrumbVariants({ size });
    return <ol ref={ref} className={cx(list(), className)} {...props} />;
  }
);
BreadcrumbList.displayName = "BreadcrumbList";

// Breadcrumb Item component
interface BreadcrumbItemProps
  extends React.ComponentProps<"li">,
    BreadcrumbVariants {}

const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ className, size, ...props }, ref) => {
    const { item } = breadcrumbVariants({ size });
    return <li ref={ref} className={cx(item(), className)} {...props} />;
  }
);
BreadcrumbItem.displayName = "BreadcrumbItem";

// Breadcrumb Link component
interface BreadcrumbLinkProps
  extends React.ComponentProps<"a">,
    BreadcrumbVariants {
  asChild?: boolean;
  render?:
    | React.ReactElement
    | ((props: React.ComponentProps<"a">) => React.ReactElement);
}

const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ className, size, asChild, render, ...props }, ref) => {
    const { link } = breadcrumbVariants({ size });

    const mergedProps = {
      ...props,
      ref,
      className: cx(link(), className),
    };

    const { renderElement } = useRender({
      className: mergedProps.className,
      render: render || (asChild ? undefined : undefined),
      ...mergedProps,
    });

    if (render) {
      return renderElement;
    }

    if (asChild && React.Children.count(props.children) === 1) {
      const child = React.Children.only(props.children) as React.ReactElement;
      return React.cloneElement(child, {
        ...mergedProps,
        ...child.props,
        className: cx(mergedProps.className, child.props?.className),
      });
    }

    return <a ref={ref} className={cx(link(), className)} {...props} />;
  }
);
BreadcrumbLink.displayName = "BreadcrumbLink";

// Breadcrumb Page component
interface BreadcrumbPageProps
  extends React.ComponentProps<"span">,
    BreadcrumbVariants {}

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, BreadcrumbPageProps>(
  ({ className, size, ...props }, ref) => {
    const { page } = breadcrumbVariants({ size });
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
  }
);
BreadcrumbPage.displayName = "BreadcrumbPage";

// Breadcrumb Separator component
interface BreadcrumbSeparatorProps
  extends React.ComponentProps<"li">,
    BreadcrumbVariants {}

const BreadcrumbSeparator = React.forwardRef<
  HTMLLIElement,
  BreadcrumbSeparatorProps
>(({ children, className, size, ...props }, ref) => {
  const { separator } = breadcrumbVariants({ size });
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
interface BreadcrumbEllipsisProps
  extends React.ComponentProps<"span">,
    BreadcrumbVariants {}

const BreadcrumbEllipsis = React.forwardRef<
  HTMLSpanElement,
  BreadcrumbEllipsisProps
>(({ className, size, ...props }, ref) => {
  const { ellipsis } = breadcrumbVariants({ size });
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

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
};
