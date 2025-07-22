// Tremor Context Menu [v1.0.0] - Base UI

/**
 * Context Menu Components
 * 
 * A collection of components for creating context menus that appear on right-click
 * or long press. Built on Base UI Context Menu (https://base-ui.com/react/components/context-menu)
 * for accessibility and keyboard navigation.
 * 
 * Features:
 * - Right-click and long-press activation
 * - Nested submenu support
 * - Checkbox and radio item types
 * - Keyboard shortcuts and hints
 * - Accessible design with proper ARIA attributes
 * - Smooth animations and positioning
 * 
 * @example
 * ```tsx
 * // Basic context menu
 * <ContextMenu>
 *   <ContextMenuTrigger>
 *     <div className="p-4 border rounded">Right-click me</div>
 *   </ContextMenuTrigger>
 *   <ContextMenuContent>
 *     <ContextMenuItem>Cut</ContextMenuItem>
 *     <ContextMenuItem>Copy</ContextMenuItem>
 *     <ContextMenuItem>Paste</ContextMenuItem>
 *   </ContextMenuContent>
 * </ContextMenu>
 * 
 * // With shortcuts and separators
 * <ContextMenu>
 *   <ContextMenuTrigger>
 *     <span>Right-click for options</span>
 *   </ContextMenuTrigger>
 *   <ContextMenuContent>
 *     <ContextMenuItem shortcut="⌘X">Cut</ContextMenuItem>
 *     <ContextMenuItem shortcut="⌘C">Copy</ContextMenuItem>
 *     <ContextMenuItem shortcut="⌘V">Paste</ContextMenuItem>
 *     <ContextMenuSeparator />
 *     <ContextMenuItem>Delete</ContextMenuItem>
 *   </ContextMenuContent>
 * </ContextMenu>
 * 
 * // With checkbox and radio items
 * <ContextMenu>
 *   <ContextMenuTrigger>
 *     <button>Options</button>
 *   </ContextMenuTrigger>
 *   <ContextMenuContent>
 *     <ContextMenuLabel>View Options</ContextMenuLabel>
 *     <ContextMenuCheckboxItem checked>Show sidebar</ContextMenuCheckboxItem>
 *     <ContextMenuCheckboxItem>Show toolbar</ContextMenuCheckboxItem>
 *     <ContextMenuSeparator />
 *     <ContextMenuLabel>Theme</ContextMenuLabel>
 *     <ContextMenuRadioGroup value="light">
 *       <ContextMenuRadioItem value="light">Light</ContextMenuRadioItem>
 *       <ContextMenuRadioItem value="dark">Dark</ContextMenuRadioItem>
 *       <ContextMenuRadioItem value="system">System</ContextMenuRadioItem>
 *     </ContextMenuRadioGroup>
 *   </ContextMenuContent>
 * </ContextMenu>
 * 
 * // With submenu
 * <ContextMenu>
 *   <ContextMenuTrigger>
 *     <div>Right-click for nested menu</div>
 *   </ContextMenuTrigger>
 *   <ContextMenuContent>
 *     <ContextMenuItem>New File</ContextMenuItem>
 *     <ContextMenuSubmenu>
 *       <ContextMenuSubmenuTrigger>Export As</ContextMenuSubmenuTrigger>
 *       <ContextMenuSubmenuContent>
 *         <ContextMenuItem>PDF</ContextMenuItem>
 *         <ContextMenuItem>PNG</ContextMenuItem>
 *         <ContextMenuItem>SVG</ContextMenuItem>
 *       </ContextMenuSubmenuContent>
 *     </ContextMenuSubmenu>
 *     <ContextMenuItem>Settings</ContextMenuItem>
 *   </ContextMenuContent>
 * </ContextMenu>
 * 
 * // With icons
 * <ContextMenu>
 *   <ContextMenuTrigger>
 *     <img src="/image.jpg" alt="Context menu trigger" />
 *   </ContextMenuTrigger>
 *   <ContextMenuContent>
 *     <ContextMenuItem>
 *       <ContextMenuIconWrapper>
 *         <Edit className="w-4 h-4" />
 *       </ContextMenuIconWrapper>
 *       Edit Image
 *     </ContextMenuItem>
 *     <ContextMenuItem>
 *       <ContextMenuIconWrapper>
 *         <Download className="w-4 h-4" />
 *       </ContextMenuIconWrapper>
 *       Download
 *     </ContextMenuItem>
 *     <ContextMenuSeparator />
 *     <ContextMenuItem>
 *       <ContextMenuIconWrapper>
 *         <Trash className="w-4 h-4" />
 *       </ContextMenuIconWrapper>
 *       Delete
 *     </ContextMenuItem>
 *   </ContextMenuContent>
 * </ContextMenu>
 * ```
 */

import { cx } from "@/lib/utils";
import { ContextMenu as BaseContextMenu } from "@base-ui-components/react/context-menu";
import { Check, ChevronRight, Circle, CircleDot } from "lucide-react";
import * as React from "react";

/**
 * Root context menu component.
 * 
 * Based on Base UI Context Menu (https://base-ui.com/react/components/context-menu),
 * creates the context menu context that appears on right-click or long press.
 * Provides accessible, unstyled foundation for context menus.
 */
const ContextMenu = BaseContextMenu.Root;

/**
 * Context menu trigger component.
 * 
 * Defines the area that will open the context menu when right-clicked or long-pressed.
 * Wraps content that should respond to context menu interactions.
 */
const ContextMenuTrigger = BaseContextMenu.Trigger;

/**
 * Context menu group component.
 * 
 * Groups related menu items together for better organization and accessibility.
 * Used to create logical sections within the menu.
 */
const ContextMenuGroup = BaseContextMenu.Group;

/**
 * Context menu submenu root component.
 * 
 * Creates nested submenu functionality within context menus.
 * Provides context for submenu triggers and content.
 */
const ContextMenuSubmenu = BaseContextMenu.SubmenuRoot;

/**
 * Context menu radio group component.
 * 
 * Groups radio items together for mutually exclusive selection.
 * Only one radio item can be selected within a group.
 */
const ContextMenuRadioGroup = BaseContextMenu.RadioGroup;

/**
 * Context menu submenu trigger component.
 * 
 * Trigger element for opening nested submenus. Displays a chevron
 * indicator and handles submenu positioning and interaction.
 *
 * @param className - Additional CSS classes
 * @param children - Content of the submenu trigger
 */
const ContextMenuSubmenuTrigger = React.forwardRef<
  React.ElementRef<typeof BaseContextMenu.SubmenuTrigger>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.SubmenuTrigger>
>(({ className, children, ...props }, forwardedRef) => (
  <BaseContextMenu.SubmenuTrigger
    ref={forwardedRef}
    className={cx(
      // base
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-1 outline-hidden transition-colors data-checked:font-semibold sm:text-sm",
      // text color
      "text-zinc-900 dark:text-zinc-50",
      // disabled
      "data-disabled:pointer-events-none data-disabled:text-zinc-400 data-disabled:hover:bg-none dark:data-disabled:text-zinc-600",
      // focus
      "focus-visible:bg-zinc-100 data-[popup-open]:bg-zinc-100 dark:focus-visible:bg-zinc-900 dark:data-[popup-open]:bg-zinc-900",
      // hover
      "data-highlighted:bg-zinc-100 dark:data-highlighted:bg-zinc-900",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto size-4 shrink-0" aria-hidden="true" />
  </BaseContextMenu.SubmenuTrigger>
));

/**
 * Context menu submenu content component.
 * 
 * Container for submenu items with proper positioning and styling.
 * Appears adjacent to the parent menu with smooth animations.
 *
 * @param className - Additional CSS classes
 */
const ContextMenuSubmenuContent = React.forwardRef<
  React.ElementRef<typeof BaseContextMenu.Popup>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.Popup>
>(({ className, ...props }, forwardedRef) => (
  <BaseContextMenu.Portal>
    <BaseContextMenu.Positioner sideOffset={8} collisionPadding={8}>
      <BaseContextMenu.Popup
        ref={forwardedRef}
        className={cx(
          // base
          "relative z-50 overflow-hidden rounded-md border p-1 shadow-xl shadow-black/[2.5%]",
          // widths
          "min-w-32",
          // heights
          "max-h-[var(--context-menu-available-height)]",
          // background color
          "bg-white dark:bg-zinc-950",
          // text color
          "text-zinc-900 dark:text-zinc-50",
          // border color
          "border-zinc-200 dark:border-zinc-800",
          // transition
          "will-change-[transform,opacity]",
          "data-[starting-style]:animate-hide",
          "data-[ending-style]:animate-hide",
          "data-[side=bottom]:animate-slide-down-and-fade data-[side=left]:animate-slide-left-and-fade data-[side=right]:animate-slide-right-and-fade data-[side=top]:animate-slide-up-and-fade",
          className
        )}
        {...props}
      />
    </BaseContextMenu.Positioner>
  </BaseContextMenu.Portal>
));

/**
 * Main context menu content component.
 * 
 * Container for menu items with positioning, styling, and animation support.
 * Appears at the pointer location with configurable offset and alignment.
 *
 * @param className - Additional CSS classes
 * @param sideOffset - Distance from trigger (default: 8)
 * @param collisionPadding - Padding for collision detection (default: 8)
 * @param align - Menu alignment relative to trigger
 */
const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof BaseContextMenu.Popup>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.Popup> & {
    /** Distance from trigger element */
    sideOffset?: number;
    /** Padding for collision detection */
    collisionPadding?: number;
    /** Menu alignment relative to trigger */
    align?: "start" | "center" | "end";
  }
>(
  (
    {
      className,
      sideOffset = 8,
      collisionPadding = 8,
      align = "center",
      ...props
    },
    forwardedRef
  ) => (
    <BaseContextMenu.Portal>
      <BaseContextMenu.Positioner
        sideOffset={sideOffset}
        align={align}
        collisionPadding={collisionPadding}
      >
        <BaseContextMenu.Popup
          ref={forwardedRef}
          className={cx(
            // base - reusing Menu styling for consistency
            "relative z-50 overflow-hidden rounded-md border p-1 shadow-xl shadow-black/[2.5%]",
            // widths
            "min-w-48",
            // heights
            "max-h-[var(--context-menu-available-height)]",
            // background color
            "bg-white dark:bg-zinc-950",
            // text color
            "text-zinc-900 dark:text-zinc-50",
            // border color
            "border-zinc-200 dark:border-zinc-800",
            // transition
            "will-change-[transform,opacity]",
            "data-[starting-style]:animate-hide",
            "data-[ending-style]:animate-hide",
            "data-[side=bottom]:animate-slide-down-and-fade data-[side=left]:animate-slide-left-and-fade data-[side=right]:animate-slide-right-and-fade data-[side=top]:animate-slide-up-and-fade",
            className
          )}
          {...props}
        />
      </BaseContextMenu.Positioner>
    </BaseContextMenu.Portal>
  )
);

/**
 * Context menu item component.
 * 
 * Individual interactive menu item with support for shortcuts and hints.
 * Provides hover and focus states with accessible keyboard navigation.
 *
 * @param className - Additional CSS classes
 * @param shortcut - Keyboard shortcut text to display
 * @param hint - Hint text to display on the right side
 * @param children - Content of the menu item
 */
const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof BaseContextMenu.Item>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.Item> & {
    /** Keyboard shortcut text to display */
    shortcut?: string;
    /** Hint text to display on the right side */
    hint?: string;
  }
>(({ className, shortcut, hint, children, ...props }, forwardedRef) => (
  <BaseContextMenu.Item
    ref={forwardedRef}
    className={cx(
      // base - matching Menu component styling exactly
      "group/ContextMenuItem relative flex cursor-pointer select-none items-center rounded-sm py-1.5 pl-2 pr-1 outline-hidden transition-colors sm:text-sm",
      // text color
      "text-zinc-900 dark:text-zinc-50",
      // disabled
      "data-disabled:pointer-events-none data-disabled:text-zinc-400 data-disabled:hover:bg-none dark:data-disabled:text-zinc-600",
      // focus
      "focus-visible:bg-zinc-100 dark:focus-visible:bg-zinc-900",
      // hover
      "data-highlighted:bg-zinc-100 dark:data-highlighted:bg-zinc-900",
      className
    )}
    tremor-id="tremor-raw"
    {...props}
  >
    {children}
    {hint && (
      <span
        className={cx("ml-auto pl-2 text-sm text-zinc-400 dark:text-zinc-600")}
      >
        {hint}
      </span>
    )}
    {shortcut && (
      <span
        className={cx("ml-auto pl-2 text-sm text-zinc-400 dark:text-zinc-600")}
      >
        {shortcut}
      </span>
    )}
  </BaseContextMenu.Item>
));

/**
 * Context menu checkbox item component.
 * 
 * Menu item with checkbox functionality for toggleable options.
 * Shows check indicator when selected with optional shortcuts and hints.
 *
 * @param className - Additional CSS classes
 * @param hint - Hint text to display on the right side
 * @param shortcut - Keyboard shortcut text to display
 * @param checked - Whether the checkbox is checked
 * @param children - Content of the checkbox item
 */
const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof BaseContextMenu.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.CheckboxItem> & {
    /** Keyboard shortcut text to display */
    shortcut?: string;
    /** Hint text to display on the right side */
    hint?: string;
  }
>(
  (
    { className, hint, shortcut, children, checked, ...props },
    forwardedRef
  ) => (
    <BaseContextMenu.CheckboxItem
      ref={forwardedRef}
      className={cx(
        // base - matching Menu component styling exactly
        "relative flex cursor-pointer select-none items-center gap-x-2 rounded-sm py-1.5 pl-8 pr-1 outline-hidden transition-colors data-checked:font-semibold sm:text-sm",
        // text color
        "text-zinc-900 dark:text-zinc-50",
        // disabled
        "data-disabled:pointer-events-none data-disabled:text-zinc-400 data-disabled:hover:bg-none dark:data-disabled:text-zinc-600",
        // focus
        "focus-visible:bg-zinc-100 dark:focus-visible:bg-zinc-900",
        // hover
        "data-highlighted:bg-zinc-100 dark:data-highlighted:bg-zinc-900",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex size-4 items-center justify-center">
        <BaseContextMenu.CheckboxItemIndicator>
          <Check
            aria-hidden="true"
            className="size-full shrink-0 text-zinc-800 dark:text-zinc-200"
          />
        </BaseContextMenu.CheckboxItemIndicator>
      </span>
      {children}
      {hint && (
        <span
          className={cx(
            "ml-auto text-sm font-normal text-zinc-400 dark:text-zinc-600"
          )}
        >
          {hint}
        </span>
      )}
      {shortcut && (
        <span
          className={cx(
            "ml-auto text-sm font-normal tracking-widest text-zinc-400 dark:border-zinc-800 dark:text-zinc-600"
          )}
        >
          {shortcut}
        </span>
      )}
    </BaseContextMenu.CheckboxItem>
  )
);

/**
 * Context menu radio item component.
 * 
 * Menu item with radio button functionality for mutually exclusive selection.
 * Shows dot indicator when selected with optional shortcuts and hints.
 *
 * @param className - Additional CSS classes
 * @param hint - Hint text to display on the right side
 * @param shortcut - Keyboard shortcut text to display
 * @param children - Content of the radio item
 */
const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof BaseContextMenu.RadioItem>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.RadioItem> & {
    /** Keyboard shortcut text to display */
    shortcut?: string;
    /** Hint text to display on the right side */
    hint?: string;
  }
>(({ className, hint, shortcut, children, ...props }, forwardedRef) => (
  <BaseContextMenu.RadioItem
    ref={forwardedRef}
    className={cx(
      // base - matching Menu component styling exactly
      "group/ContextMenuRadioItem relative flex cursor-pointer select-none items-center gap-x-2 rounded-sm py-1.5 pl-8 pr-1 outline-hidden transition-colors data-checked:font-semibold sm:text-sm",
      // text color
      "text-zinc-900 dark:text-zinc-50",
      // disabled
      "data-disabled:pointer-events-none data-disabled:text-zinc-400 data-disabled:hover:bg-none dark:data-disabled:text-zinc-600",
      // focus
      "focus-visible:bg-zinc-100 dark:focus-visible:bg-zinc-900",
      // hover
      "data-highlighted:bg-zinc-100 dark:data-highlighted:bg-zinc-900",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex size-4 items-center justify-center">
      <BaseContextMenu.RadioItemIndicator>
        <CircleDot
          aria-hidden="true"
          className="size-full shrink-0 text-blue-500 dark:text-blue-500"
        />
      </BaseContextMenu.RadioItemIndicator>
      <span className="data-checked:hidden">
        <Circle
          aria-hidden="true"
          className="size-full shrink-0 text-zinc-300 dark:text-zinc-700"
        />
      </span>
    </span>
    {children}
    {hint && (
      <span
        className={cx(
          "ml-auto text-sm font-normal text-zinc-400 dark:text-zinc-600"
        )}
      >
        {hint}
      </span>
    )}
    {shortcut && (
      <span
        className={cx(
          "ml-auto text-sm font-normal tracking-widest text-zinc-400 dark:border-zinc-800 dark:text-zinc-600"
        )}
      >
        {shortcut}
      </span>
    )}
  </BaseContextMenu.RadioItem>
));

/**
 * Context menu label component.
 * 
 * Label for menu groups providing section headers and organization.
 * Displays as non-interactive text with subtle styling.
 *
 * @param className - Additional CSS classes
 */
const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof BaseContextMenu.GroupLabel>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.GroupLabel>
>(({ className, ...props }, forwardedRef) => (
  <BaseContextMenu.GroupLabel
    ref={forwardedRef}
    className={cx(
      // base - matching Menu component styling exactly
      "px-2 py-2 text-xs font-medium tracking-wide",
      // text color
      "text-zinc-500 dark:text-zinc-500",
      className
    )}
    {...props}
  />
));

/**
 * Context menu separator component.
 * 
 * Visual divider between menu sections for better organization.
 * Renders as a subtle horizontal line.
 *
 * @param className - Additional CSS classes
 */
const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof BaseContextMenu.Separator>,
  React.ComponentPropsWithoutRef<typeof BaseContextMenu.Separator>
>(({ className, ...props }, forwardedRef) => (
  <BaseContextMenu.Separator
    ref={forwardedRef}
    className={cx(
      // base - matching Menu component styling exactly
      "-mx-1 my-1 h-px border-t border-zinc-200 dark:border-zinc-800",
      className
    )}
    {...props}
  />
));

/**
 * Context menu icon wrapper component.
 * 
 * Wrapper for icons in menu items with consistent styling and theming.
 * Provides proper color states for normal and disabled items.
 *
 * @param className - Additional CSS classes
 */
const ContextMenuIconWrapper = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <div
      className={cx(
        // text color - matching Menu component styling exactly
        "text-zinc-600 dark:text-zinc-400",
        // disabled
        "group-data-disabled/ContextMenuItem:text-zinc-400 dark:group-data-disabled/ContextMenuItem:text-zinc-700",
        className
      )}
      {...props}
    />
  );
};

export {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuIconWrapper,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSubmenu,
  ContextMenuSubmenuContent,
  ContextMenuSubmenuTrigger,
  ContextMenuTrigger,
};
