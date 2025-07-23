import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog";
import { Button } from "../button/button";

// Default alert dialog
export const DefaultExample = () => (
  <AlertDialog>
    <AlertDialogTrigger>
      <Button>Delete Account</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
      <div className="flex justify-end space-x-2">
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </div>
    </AlertDialogContent>
  </AlertDialog>
);

// Destructive alert dialog
export const DestructiveExample = () => (
  <AlertDialog>
    <AlertDialogTrigger>
      <Button variant="destructive">Delete Account</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogTitle>Delete Account</AlertDialogTitle>
      <AlertDialogDescription>
        This will permanently delete your account and all associated data.
        This action cannot be undone.
      </AlertDialogDescription>
      <div className="flex justify-end space-x-2">
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction variant="destructive">Delete Account</AlertDialogAction>
      </div>
    </AlertDialogContent>
  </AlertDialog>
);