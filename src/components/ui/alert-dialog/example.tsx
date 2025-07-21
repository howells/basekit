import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog";

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
