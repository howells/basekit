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
  extends useRender.ComponentProps<"a">,
    BreadcrumbVariants {}

const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ className, size, render = <a />, ...props }, ref) => {
    const { link } = breadcrumbVariants({ size });

    const element = useRender({
      render,
      ref,
      props: mergeProps<"a">({ className: cx(link(), className) }, props),
    });

    return element;
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

// Component configuration for documentation
export const componentConfig = {
  id: "breadcrumbs",
  name: "Breadcrumbs",
  description:
    "A navigation component that shows the current page's location within a navigational hierarchy.",
  category: "ui" as const,

  importStatement: `import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumbs";`,

  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic breadcrumb navigation.",
      preview: (
        <Breadcrumb>
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
        </Breadcrumb>
      ),
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
      id: "custom-render",
      title: "Custom Render Elements",
      description:
        "Using the render prop to customize the underlying elements.",
      preview: (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" render={<button type="button" />}>
                Home (Button)
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components" render={<span />}>
                Components (Span)
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumbs</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      ),
      code: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink
        href="/"
        render={<button type="button" />}
      >
        Home (Button)
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink
        href="/components"
        render={<span />}
      >
        Components (Span)
      </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumbs</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
    },
    {
      id: "sizes",
      title: "Sizes",
      description: "Different breadcrumb sizes.",
      preview: (
        <div className="space-y-4">
          <Breadcrumb size="sm">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Small</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Breadcrumb size="default">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Default</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Breadcrumb size="lg">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Large</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      ),
      code: `<div className="space-y-4">
  <Breadcrumb size="sm">
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Small</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>

  <Breadcrumb size="default">
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Default</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>

  <Breadcrumb size="lg">
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Large</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</div>`,
    },
  ],

  api: [
    {
      name: "Breadcrumb",
      description: "The root breadcrumb container.",
      properties: [
        {
          name: "size",
          type: '"sm" | "default" | "lg"',
          default: '"default"',
          description: "The size of the breadcrumb.",
        },
      ],
    },
    {
      name: "BreadcrumbList",
      description: "The breadcrumb list container.",
      properties: [
        {
          name: "size",
          type: '"sm" | "default" | "lg"',
          default: '"default"',
          description: "The size of the breadcrumb list.",
        },
      ],
    },
    {
      name: "BreadcrumbItem",
      description: "A breadcrumb item container.",
      properties: [
        {
          name: "size",
          type: '"sm" | "default" | "lg"',
          default: '"default"',
          description: "The size of the breadcrumb item.",
        },
      ],
    },
    {
      name: "BreadcrumbLink",
      description: "A breadcrumb link component with render prop support.",
      properties: [
        {
          name: "href",
          type: "string",
          description: "The URL the link points to.",
          required: true,
        },
        {
          name: "render",
          type: "React.ReactElement | ((props: React.ComponentProps<'a'>) => React.ReactElement)",
          default: "<a />",
          description:
            "Override the default rendered element. Can be a React element or render function.",
        },
        {
          name: "size",
          type: '"sm" | "default" | "lg"',
          default: '"default"',
          description: "The size of the breadcrumb link.",
        },
      ],
    },
    {
      name: "BreadcrumbPage",
      description: "The current page indicator.",
      properties: [
        {
          name: "size",
          type: '"sm" | "default" | "lg"',
          default: '"default"',
          description: "The size of the breadcrumb page.",
        },
      ],
    },
    {
      name: "BreadcrumbSeparator",
      description: "A separator between breadcrumb items.",
      properties: [
        {
          name: "size",
          type: '"sm" | "default" | "lg"',
          default: '"default"',
          description: "The size of the breadcrumb separator.",
        },
      ],
    },
  ],

  accessibility: {
    pattern: {
      name: "Breadcrumb",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/",
    },
    keyboardShortcuts: [
      {
        key: "Tab",
        description: "Moves focus to the next focusable element.",
      },
      {
        key: "Shift + Tab",
        description: "Moves focus to the previous focusable element.",
      },
    ],
    notes: [
      "Uses proper ARIA attributes for navigation landmarks.",
      "Current page is marked with aria-current='page'.",
      "Separators are hidden from screen readers with aria-hidden.",
    ],
  },
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
