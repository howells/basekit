// Tremor Drawer [v1.0.0] - Base UI

import { Dialog } from "@base-ui-components/react/dialog";
import { X } from "lucide-react";
import * as React from "react";

import { cx, focusRing } from "@/lib/utils";

import { Button } from "./button/button";

const Drawer = (props: React.ComponentPropsWithoutRef<typeof Dialog.Root>) => {
  return <Dialog.Root {...props} />;
};
Drawer.displayName = "Drawer";

const DrawerTrigger = React.forwardRef<
  React.ElementRef<typeof Dialog.Trigger>,
  React.ComponentPropsWithoutRef<typeof Dialog.Trigger>
>(({ className, ...props }, ref) => {
  return <Dialog.Trigger ref={ref} className={cx(className)} {...props} />;
});
DrawerTrigger.displayName = "Drawer.Trigger";

const DrawerClose = React.forwardRef<
  React.ElementRef<typeof Dialog.Close>,
  React.ComponentPropsWithoutRef<typeof Dialog.Close>
>(({ className, ...props }, ref) => {
  return <Dialog.Close ref={ref} className={cx(className)} {...props} />;
});
DrawerClose.displayName = "Drawer.Close";

const DrawerPortal = Dialog.Portal;

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

const DrawerBody = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cx("flex-1 py-4", className)} {...props} />;
});
DrawerBody.displayName = "Drawer.Body";

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
