"use client";

import React from "react";
import {
  Drawer as Sheet,
  DrawerClose as SheetClose,
  DrawerContent as SheetContent,
  DrawerDescription as SheetDescription,
  DrawerFooter as SheetFooter,
  DrawerHeader as SheetHeader,
  DrawerTitle as SheetTitle,
  DrawerTrigger as SheetTrigger,
} from "./sheet";

export function BasicSheet() {
  return (
    <Sheet>
      <SheetTrigger>
        <button>Open Sheet</button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>
            This is a description of the sheet content.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p>Sheet content goes here.</p>
        </div>
        <SheetFooter>
          <SheetClose>
            <button>Close</button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export function SheetWithForm() {
  return (
    <Sheet>
      <SheetTrigger>
        <button>Edit Profile</button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here.
          </SheetDescription>
        </SheetHeader>
        <form className="space-y-4 py-4">
          <div>
            <label>Name</label>
            <input type="text" defaultValue="John Doe" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" defaultValue="john@example.com" />
          </div>
        </form>
        <SheetFooter>
          <button type="submit">Save Changes</button>
          <SheetClose>
            <button>Cancel</button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}