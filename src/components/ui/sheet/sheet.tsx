/**
 * Sheet Components (Desktop Drawer)
 *
 * A desktop-optimized drawer/sheet implementation built on Base UI Dialog.
 * Provides side panel overlays that slide in from the right side of the screen,
 * perfect for detailed forms, settings panels, and navigation menus on desktop.
 *
 * Features:
 * - Base UI Dialog integration for full accessibility
 * - Slides in from the right side of the screen
 * - Semi-transparent backdrop overlay
 * - Smooth slide and fade animations
 * - Focus management and keyboard navigation
 * - Automatic close button in header
 * - Flexible layout with header, body, and footer sections
 * - Dark mode support
 * - Responsive sizing and positioning
 *
 * Built on Base UI Dialog documentation:
 * https://base-ui.com/react/components/dialog
 *
 * @example
 * ```tsx
 * // Basic sheet
 * <Drawer>
 *   <DrawerTrigger>
 *     <button>Open Settings</button>
 *   </DrawerTrigger>
 *   <DrawerContent>
 *     <DrawerHeader>
 *       <DrawerTitle>Settings</DrawerTitle>
 *       <DrawerDescription>Manage your account settings</DrawerDescription>
 *     </DrawerHeader>
 *     <DrawerBody>
 *       <div className="space-y-4">
 *         <div>Setting 1</div>
 *         <div>Setting 2</div>
 *       </div>
 *     </DrawerBody>
 *     <DrawerFooter>
 *       <DrawerClose>
 *         <button>Cancel</button>
 *       </DrawerClose>
 *       <button>Save Changes</button>
 *     </DrawerFooter>
 *   </DrawerContent>
 * </Drawer>
 *
 * // Controlled sheet
 * const [open, setOpen] = useState(false);
 *
 * <Drawer open={open} onOpenChange={setOpen}>
 *   <DrawerTrigger>
 *     <button>Open Form</button>
 *   </DrawerTrigger>
 *   <DrawerContent>
 *     <DrawerHeader>
 *       <DrawerTitle>User Profile</DrawerTitle>
 *       <DrawerDescription>Update your profile information</DrawerDescription>
 *     </DrawerHeader>
 *     <DrawerBody>
 *       <form className="space-y-4">
 *         <input type="text" placeholder="Name" />
 *         <input type="email" placeholder="Email" />
 *         <textarea placeholder="Bio"></textarea>
 *       </form>
 *     </DrawerBody>
 *     <DrawerFooter>
 *       <DrawerClose>
 *         <button>Cancel</button>
 *       </DrawerClose>
 *       <button onClick={() => handleSave()}>Save</button>
 *     </DrawerFooter>
 *   </DrawerContent>
 * </Drawer>
 *
 * // Navigation sheet
 * <Drawer>
 *   <DrawerTrigger>
 *     <button>Menu</button>
 *   </DrawerTrigger>
 *   <DrawerContent>
 *     <DrawerHeader>
 *       <DrawerTitle>Navigation</DrawerTitle>
 *     </DrawerHeader>
 *     <DrawerBody>
 *       <nav className="space-y-2">
 *         <a href="/dashboard" className="block p-2 hover:bg-zinc-100">
 *           Dashboard
 *         </a>
 *         <a href="/projects" className="block p-2 hover:bg-zinc-100">
 *           Projects
 *         </a>
 *         <a href="/settings" className="block p-2 hover:bg-zinc-100">
 *           Settings
 *         </a>
 *       </nav>
 *     </DrawerBody>
 *   </DrawerContent>
 * </Drawer>
 * ```
 */

import { Dialog } from "@base-ui-components/react/dialog";
import { X } from "lucide-react";
import * as React from "react";

import { cx, focusRing } from "@/lib/utils";

import { Button } from "../button/button";

/**
 * Root sheet/drawer component for desktop side panels.
 *
 * Container component that manages the sheet's open state and provides
 * context for all child components. Built on Base UI Dialog.Root for
 * full accessibility support.
 *
 * @param props - All Base UI Dialog.Root props (open, onOpenChange, etc.)
 *
 * @component
 * @example
 * ```tsx
 * // Uncontrolled sheet
 * <Drawer>
 *   <DrawerTrigger>Open</DrawerTrigger>
 *   <DrawerContent>Content</DrawerContent>
 * </Drawer>
 *
 * // Controlled sheet
 * <Drawer open={isOpen} onOpenChange={setIsOpen}>
 *   <DrawerTrigger>Toggle</DrawerTrigger>
 *   <DrawerContent>Content</DrawerContent>
 * </Drawer>
 * ```
 */
const Drawer = (props: React.ComponentPropsWithoutRef<typeof Dialog.Root>) => {
  return <Dialog.Root {...props} />;
};
Drawer.displayName = "Drawer";

/**
 * Sheet trigger component that opens the sheet when activated.
 *
 * Interactive element that opens the sheet panel. Can be any clickable
 * element like a button, link, or custom component with proper event handling.
 *
 * @param className - Additional CSS classes
 * @param props - Additional Base UI Trigger props
 *
 * @component
 * @example
 * ```tsx
 * <DrawerTrigger>
 *   <button className="px-4 py-2 bg-blue-500 text-white rounded">
 *     Open Panel
 *   </button>
 * </DrawerTrigger>
 *
 * <DrawerTrigger asChild>
 *   <div className="cursor-pointer">Custom trigger</div>
 * </DrawerTrigger>
 * ```
 */
const DrawerTrigger = React.forwardRef<
  React.ElementRef<typeof Dialog.Trigger>,
  React.ComponentPropsWithoutRef<typeof Dialog.Trigger>
>(({ className, ...props }, ref) => {
  return <Dialog.Trigger ref={ref} className={cx(className)} {...props} />;
});
DrawerTrigger.displayName = "Drawer.Trigger";

/**
 * Sheet close component for dismissing the sheet.
 *
 * Interactive element that closes the sheet when activated. Automatically
 * handles focus return to the trigger element upon closure.
 *
 * @param className - Additional CSS classes
 * @param props - Additional Base UI Close props
 *
 * @component
 * @example
 * ```tsx
 * <DrawerClose>
 *   <button className="px-3 py-1 border rounded">Cancel</button>
 * </DrawerClose>
 *
 * <DrawerClose asChild>
 *   <button className="custom-close-button">Done</button>
 * </DrawerClose>
 * ```
 */
const DrawerClose = React.forwardRef<
  React.ElementRef<typeof Dialog.Close>,
  React.ComponentPropsWithoutRef<typeof Dialog.Close>
>(({ className, ...props }, ref) => {
  return <Dialog.Close ref={ref} className={cx(className)} {...props} />;
});
DrawerClose.displayName = "Drawer.Close";

/**
 * Portal component for rendering sheet content outside normal DOM flow.
 *
 * Ensures sheet content is rendered at the document root to avoid z-index
 * conflicts and enable proper layering. Used internally by DrawerContent.
 *
 * @component
 * @example
 * ```tsx
 * // Used internally by DrawerContent
 * <DrawerPortal>
 *   <DrawerOverlay />
 *   <Dialog.Popup>Sheet content</Dialog.Popup>
 * </DrawerPortal>
 * ```
 */
const DrawerPortal = Dialog.Portal;

/**
 * Overlay/backdrop component that appears behind the sheet.
 *
 * Semi-transparent backdrop that covers the entire viewport when the sheet
 * is open. Provides visual focus and can close the sheet when clicked.
 * Features smooth fade animations.
 *
 * @param className - Additional CSS classes
 * @param props - Additional Base UI Backdrop props
 *
 * @component
 * @example
 * ```tsx
 * // Used internally by DrawerContent
 * <DrawerOverlay />
 *
 * // Custom overlay styling
 * <DrawerOverlay className="bg-blue-500/20" />
 * ```
 */
const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof Dialog.Backdrop>,
  React.ComponentPropsWithoutRef<typeof Dialog.Backdrop>
>(({ className, ...props }, forwardedRef) => {
  return (
    <Dialog.Backdrop
      ref={forwardedRef}
      className={cx(
        // base
        "fixed inset-0 z-50 overflow-y-auto",
        // background color
        "bg-black/30",
        // transition
        "data-[closed]:animate-hide data-[open]:animate-dialog-overlay-show",
        className
      )}
      {...props}
      style={{
        animationDuration: "400ms",
        animationFillMode: "backwards",
      }}
    />
  );
});

DrawerOverlay.displayName = "DrawerOverlay";

/**
 * Main sheet content container with positioning and animations.
 *
 * Primary container for sheet content that slides in from the right side
 * of the screen. Includes backdrop overlay, smooth animations, responsive
 * sizing, and proper focus management.
 *
 * @param className - Additional CSS classes
 * @param props - Additional Base UI Popup props
 *
 * @component
 * @example
 * ```tsx
 * <DrawerContent>
 *   <DrawerHeader>
 *     <DrawerTitle>Sheet Title</DrawerTitle>
 *   </DrawerHeader>
 *   <DrawerBody>
 *     Sheet content here
 *   </DrawerBody>
 * </DrawerContent>
 *
 * // Custom width
 * <DrawerContent className="sm:max-w-xl">
 *   Wider sheet content
 * </DrawerContent>
 * ```
 */
const DrawerContent = React.forwardRef<
  React.ElementRef<typeof Dialog.Popup>,
  React.ComponentPropsWithoutRef<typeof Dialog.Popup>
>(({ className, ...props }, forwardedRef) => {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <Dialog.Popup
        ref={forwardedRef}
        className={cx(
          // base
          "fixed inset-y-2 z-50 mx-auto flex w-[95vw] flex-1 flex-col overflow-y-auto rounded-md border p-4 shadow-lg focus:outline-hidden max-sm:inset-x-2 sm:inset-y-2 sm:right-2 sm:max-w-lg sm:p-6",
          // border color
          "border-zinc-200 dark:border-zinc-900",
          // background color
          "bg-white dark:bg-[#090E1A]",
          // transition
          "data-[closed]:animate-drawer-slide-right-and-fade data-[open]:animate-drawer-slide-left-and-fade",
          focusRing,
          className
        )}
        {...props}
      />
    </DrawerPortal>
  );
});

DrawerContent.displayName = "DrawerContent";

/**
 * Sheet header component with title, description, and close button.
 *
 * Header section that typically contains the sheet title and description,
 * along with an automatic close button. Features bottom border separation
 * and responsive layout.
 *
 * @param children - Header content (title, description, other elements)
 * @param className - Additional CSS classes for content area
 * @param props - Additional HTML div props
 *
 * @component
 * @example
 * ```tsx
 * <DrawerHeader>
 *   <DrawerTitle>User Settings</DrawerTitle>
 *   <DrawerDescription>Manage your account preferences</DrawerDescription>
 * </DrawerHeader>
 *
 * <DrawerHeader className="text-center">
 *   <DrawerTitle>Confirmation</DrawerTitle>
 *   <DrawerDescription>This action cannot be undone</DrawerDescription>
 * </DrawerHeader>
 * ```
 */
const DrawerHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className="flex items-start justify-between gap-x-4 border-b border-zinc-200 pb-4 dark:border-zinc-900"
      {...props}
    >
      <div className={cx("mt-1 flex flex-col gap-y-1", className)}>
        {children}
      </div>
      <Dialog.Close
        render={
          <Button
            variant="ghost"
            className="aspect-square p-1 hover:bg-zinc-100 dark:hover:bg-zinc-400/10"
          />
        }
      >
        <X className="size-6" aria-hidden="true" />
      </Dialog.Close>
    </div>
  );
});

DrawerHeader.displayName = "Drawer.Header";

/**
 * Sheet title component for the main heading.
 *
 * Semantic heading element that provides the primary title for the sheet
 * content. Essential for accessibility and screen reader support.
 *
 * @param className - Additional CSS classes
 * @param props - Additional Base UI Title props
 *
 * @component
 * @example
 * ```tsx
 * <DrawerTitle>Account Settings</DrawerTitle>
 *
 * <DrawerTitle className="text-lg text-blue-600">
 *   Custom Styled Title
 * </DrawerTitle>
 * ```
 */
const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof Dialog.Title>,
  React.ComponentPropsWithoutRef<typeof Dialog.Title>
>(({ className, ...props }, forwardedRef) => (
  <Dialog.Title
    ref={forwardedRef}
    className={cx(
      // base
      "text-base font-semibold",
      // text color
      "text-zinc-900 dark:text-zinc-50",
      className
    )}
    {...props}
  />
));

DrawerTitle.displayName = "DrawerTitle";

/**
 * Sheet body component for the main scrollable content area.
 *
 * Flexible container that holds the primary sheet content with automatic
 * vertical scrolling when content exceeds the available space.
 *
 * @param className - Additional CSS classes
 * @param props - Additional HTML div props
 *
 * @component
 * @example
 * ```tsx
 * <DrawerBody>
 *   <form className="space-y-4">
 *     <input type="text" placeholder="Name" />
 *     <input type="email" placeholder="Email" />
 *   </form>
 * </DrawerBody>
 *
 * <DrawerBody className="p-0">
 *   <nav className="space-y-1">
 *     <a href="/dashboard">Dashboard</a>
 *     <a href="/settings">Settings</a>
 *   </nav>
 * </DrawerBody>
 * ```
 */
const DrawerBody = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cx("flex-1 py-4", className)} {...props} />;
});
DrawerBody.displayName = "Drawer.Body";

/**
 * Sheet description component for explanatory text.
 *
 * Provides additional context and information about the sheet's purpose
 * or content. Features muted styling to create visual hierarchy with the title.
 *
 * @param className - Additional CSS classes
 * @param props - Additional Base UI Description props
 *
 * @component
 * @example
 * ```tsx
 * <DrawerDescription>
 *   Update your profile information and account settings
 * </DrawerDescription>
 *
 * <DrawerDescription className="text-red-500">
 *   Warning: This action cannot be undone
 * </DrawerDescription>
 * ```
 */
const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof Dialog.Description>,
  React.ComponentPropsWithoutRef<typeof Dialog.Description>
>(({ className, ...props }, forwardedRef) => {
  return (
    <Dialog.Description
      ref={forwardedRef}
      className={cx("text-zinc-500 dark:text-zinc-500", className)}
      {...props}
    />
  );
});

DrawerDescription.displayName = "DrawerDescription";

/**
 * Sheet footer component for action buttons and controls.
 *
 * Footer section typically containing action buttons like Save, Cancel, etc.
 * Features top border separation and responsive layout that stacks on mobile
 * and displays horizontally on desktop.
 *
 * @param className - Additional CSS classes
 * @param props - Additional HTML div props
 *
 * @component
 * @example
 * ```tsx
 * <DrawerFooter>
 *   <DrawerClose>
 *     <button className="px-4 py-2 border rounded">Cancel</button>
 *   </DrawerClose>
 *   <button className="px-4 py-2 bg-blue-500 text-white rounded">
 *     Save Changes
 *   </button>
 * </DrawerFooter>
 *
 * <DrawerFooter className="justify-center">
 *   <button>Single Action</button>
 * </DrawerFooter>
 * ```
 */
const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cx(
        "flex flex-col-reverse border-t border-zinc-200 pt-4 sm:flex-row sm:justify-end sm:space-x-2 dark:border-zinc-900",
        className
      )}
      {...props}
    />
  );
};

DrawerFooter.displayName = "DrawerFooter";

export {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
};
