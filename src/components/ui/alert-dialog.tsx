// Alert Dialog Component [v1.0.0]

import { cx } from "@/lib/utils";
import { AlertDialog as BaseAlertDialog } from "@base-ui-components/react/alert-dialog";
import * as React from "react";

const AlertDialog = BaseAlertDialog.Root;

const AlertDialogTrigger = React.forwardRef<
  React.ElementRef<typeof BaseAlertDialog.Trigger>,
  React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Trigger>
>(({ className, ...props }, ref) => (
  <BaseAlertDialog.Trigger
    ref={ref}
    className={cx(
      "inline-flex h-10 items-center justify-center rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm font-medium transition-colors",
      "hover:bg-zinc-50 hover:text-zinc-900",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      "dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
      className
    )}
    {...props}
  />
));
AlertDialogTrigger.displayName = "AlertDialogTrigger";

const AlertDialogPortal = BaseAlertDialog.Portal;

const AlertDialogBackdrop = React.forwardRef<
  React.ElementRef<typeof BaseAlertDialog.Backdrop>,
  React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Backdrop>
>(({ className, ...props }, ref) => (
  <BaseAlertDialog.Backdrop
    ref={ref}
    className={cx(
      "fixed inset-0 z-50 bg-black/50 transition-all duration-150",
      "data-[starting-style]:opacity-0 data-[ending-style]:opacity-0",
      "dark:bg-black/70",
      className
    )}
    {...props}
  />
));
AlertDialogBackdrop.displayName = "AlertDialogBackdrop";

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof BaseAlertDialog.Popup>,
  React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Popup>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogBackdrop />
    <BaseAlertDialog.Popup
      ref={ref}
      className={cx(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-zinc-200 bg-white p-6 shadow-lg duration-200 rounded-lg",
        "data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
        "data-[ending-style]:scale-95 data-[ending-style]:opacity-0",
        "dark:border-zinc-800 dark:bg-zinc-950",
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = "AlertDialogContent";

const AlertDialogHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cx(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
));
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cx(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
));
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof BaseAlertDialog.Title>,
  React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Title>
>(({ className, ...props }, ref) => (
  <BaseAlertDialog.Title
    ref={ref}
    className={cx(
      "text-lg font-semibold text-zinc-900 dark:text-zinc-50",
      className
    )}
    {...props}
  />
));
AlertDialogTitle.displayName = "AlertDialogTitle";

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof BaseAlertDialog.Description>,
  React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Description>
>(({ className, ...props }, ref) => (
  <BaseAlertDialog.Description
    ref={ref}
    className={cx("text-sm text-zinc-500 dark:text-zinc-400", className)}
    {...props}
  />
));
AlertDialogDescription.displayName = "AlertDialogDescription";

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof BaseAlertDialog.Close>,
  React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Close> & {
    variant?: "default" | "destructive";
  }
>(({ className, variant = "default", ...props }, ref) => (
  <BaseAlertDialog.Close
    ref={ref}
    className={cx(
      "inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      variant === "default" && [
        "bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90",
        "dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90",
      ],
      variant === "destructive" && [
        "bg-red-500 text-zinc-50 hover:bg-red-500/90",
        "dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-900/90",
      ],
      className
    )}
    {...props}
  />
));
AlertDialogAction.displayName = "AlertDialogAction";

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof BaseAlertDialog.Close>,
  React.ComponentPropsWithoutRef<typeof BaseAlertDialog.Close>
>(({ className, ...props }, ref) => (
  <BaseAlertDialog.Close
    ref={ref}
    className={cx(
      "mt-2 inline-flex h-10 items-center justify-center rounded-md border border-zinc-200 bg-transparent px-4 py-2 text-sm font-medium transition-colors",
      "hover:bg-zinc-100 hover:text-zinc-900",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      "dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
      "sm:mt-0",
      className
    )}
    {...props}
  />
));
AlertDialogCancel.displayName = "AlertDialogCancel";

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogBackdrop,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
};

// Example component for preview system
export const AlertDialogExample = ({
  destructive = false,
  ...props
}: {
  destructive?: string | boolean;
  [key: string]: unknown;
}) => {
  const isDestructive = destructive === true || destructive === "true";

  return (
    <AlertDialog {...props}>
      <AlertDialogTrigger>
        {isDestructive ? "Delete Account" : "Save Changes"}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {isDestructive ? "Are you absolutely sure?" : "Confirm Action"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {isDestructive
              ? "This action cannot be undone. This will permanently delete your account and remove your data from our servers."
              : "This action will save your changes and update your settings. You can modify these settings later if needed."}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            variant={isDestructive ? "destructive" : "default"}
          >
            {isDestructive ? "Delete Account" : "Save Changes"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

// PropExplorer configuration for the alert dialog
export const alertDialogPropConfig = {
  componentName: "AlertDialog",
  displayName: "Alert Dialog",
  description:
    "A modal dialog that interrupts the user with important content and expects a response.",
  variants: [],
  props: [
    {
      name: "destructive",
      type: "boolean",
      description:
        "If true, displays a destructive action variant with warning styling.",
      defaultValue: false,
    },
  ],
  examples: [
    {
      name: "Confirmation Dialog",
      description: "A standard confirmation dialog for safe actions.",
      props: { destructive: false },
    },
    {
      name: "Destructive Dialog",
      description: "A warning dialog for destructive actions like deletion.",
      props: { destructive: true },
    },
  ],
};

// Component configuration for the registry
export const componentConfig = {
  id: "alert-dialog",
  name: "Alert Dialog",
  description:
    "A modal dialog that interrupts the user with important content and expects a response.",
  category: "ui" as const,
  badge: "New",
  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";`,
  componentId: "AlertDialogExample",
  propExplorer: alertDialogPropConfig,
  examples: [
    {
      id: "default",
      title: "Default",
      description: "A standard confirmation dialog for safe actions.",
      code: `<AlertDialog>
  <AlertDialogTrigger>Save Changes</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Confirm Action</AlertDialogTitle>
      <AlertDialogDescription>
        This action will save your changes and update your settings.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Save Changes</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
      preview: <AlertDialogExample destructive="false" />,
    },
    {
      id: "destructive",
      title: "Destructive",
      description: "A warning dialog for destructive actions like deletion.",
      code: `<AlertDialog>
  <AlertDialogTrigger>Delete Account</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction variant="destructive">Delete Account</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
      preview: <AlertDialogExample destructive="true" />,
    },
  ],
};
