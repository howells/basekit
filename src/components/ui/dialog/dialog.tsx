// Tremor Dialog [v1.0.0] - Base UI

import { Dialog as BaseDialog } from "@base-ui-components/react/dialog";
import React from "react";

import { cx, focusRing } from "@/lib/utils";

const Dialog = BaseDialog.Root;
Dialog.displayName = "Dialog";

const DialogTrigger = BaseDialog.Trigger;
DialogTrigger.displayName = "DialogTrigger";

const DialogClose = BaseDialog.Close;
DialogClose.displayName = "DialogClose";

const DialogPortal = BaseDialog.Portal;
DialogPortal.displayName = "DialogPortal";

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof BaseDialog.Backdrop>,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Backdrop>
>(({ className, ...props }, forwardedRef) => {
  return (
    <BaseDialog.Backdrop
      ref={forwardedRef}
      className={cx(
        // base
        "fixed inset-0 z-50 overflow-y-auto",
        // background color
        "bg-black/70",
        // transition - match Base UI pattern
        "transition-all duration-150",
        "data-[starting-style]:opacity-0",
        "data-[ending-style]:opacity-0",
        className
      )}
      {...props}
    />
  );
});
DialogOverlay.displayName = "DialogOverlay";

const DialogContent = React.forwardRef<
  React.ElementRef<typeof BaseDialog.Popup>,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Popup>
>(({ className, ...props }, forwardedRef) => {
  return (
    <DialogPortal>
      <DialogOverlay />
      <BaseDialog.Popup
        ref={forwardedRef}
        className={cx(
          // base
          "fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-md border p-6 shadow-lg",
          // border color
          "border-zinc-200 dark:border-zinc-900",
          // background color
          "bg-white dark:bg-[#090E1A]",
          // transition - match Base UI pattern with scale and opacity
          "transition-all duration-150",
          "data-[starting-style]:scale-90 data-[starting-style]:opacity-0",
          "data-[ending-style]:scale-90 data-[ending-style]:opacity-0",
          focusRing,
          className
        )}
        tremor-id="tremor-raw"
        {...props}
      />
    </DialogPortal>
  );
});
DialogContent.displayName = "DialogContent";

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cx("flex flex-col gap-y-1", className)} {...props} />;
};
DialogHeader.displayName = "DialogHeader";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof BaseDialog.Title>,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Title>
>(({ className, ...props }, forwardedRef) => (
  <BaseDialog.Title
    ref={forwardedRef}
    className={cx(
      // base
      "text-lg font-semibold",
      // text color
      "text-zinc-900 dark:text-zinc-50",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = "DialogTitle";

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof BaseDialog.Description>,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Description>
>(({ className, ...props }, forwardedRef) => {
  return (
    <BaseDialog.Description
      ref={forwardedRef}
      className={cx("text-zinc-500 dark:text-zinc-500", className)}
      {...props}
    />
  );
});
DialogDescription.displayName = "DialogDescription";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cx(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      )}
      {...props}
    />
  );
};
DialogFooter.displayName = "DialogFooter";

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
};
