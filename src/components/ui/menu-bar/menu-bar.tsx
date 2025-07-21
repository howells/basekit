// Tremor MenuBar [v1.0.0] - Base UI

import { cx } from "@/lib/utils";
import { Menubar as BaseMenubar } from "@base-ui-components/react/menubar";
import { ChevronRight } from "lucide-react";
import React from "react";
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuSubmenu,
  MenuSubmenuContent,
  MenuSubmenuTrigger,
  MenuTrigger,
} from "../menu";

const MenuBar = React.forwardRef<
  React.ElementRef<typeof BaseMenubar>,
  React.ComponentPropsWithoutRef<typeof BaseMenubar>
>(({ className, ...props }, ref) => (
  <BaseMenubar
    ref={ref}
    className={cx(
      // base
      "flex rounded-md border p-0.5",
      // background color
      "bg-zinc-50 dark:bg-zinc-900",
      // border color
      "border-zinc-200 dark:border-zinc-800",
      className
    )}
    {...props}
  />
));
MenuBar.displayName = "MenuBar";

const MenuBarMenu = Menu;

const MenuBarTrigger = React.forwardRef<
  React.ElementRef<typeof MenuTrigger>,
  React.ComponentPropsWithoutRef<typeof MenuTrigger>
>(({ className, ...props }, ref) => (
  <MenuTrigger
    ref={ref}
    className={cx(
      // base
      "h-8 rounded px-3 text-sm font-medium outline-hidden select-none transition-colors",
      // text color
      "text-zinc-600 dark:text-zinc-400",
      // hover
      "hover:bg-zinc-100 dark:hover:bg-zinc-800",
      // focus
      "focus-visible:bg-zinc-100 dark:focus-visible:bg-zinc-800",
      // active/open
      "data-[popup-open]:bg-zinc-100 dark:data-[popup-open]:bg-zinc-800",
      // disabled
      "data-disabled:opacity-50 data-disabled:pointer-events-none",
      className
    )}
    {...props}
  />
));
MenuBarTrigger.displayName = "MenuBarTrigger";

const MenuBarContent = React.forwardRef<
  React.ElementRef<typeof MenuContent>,
  React.ComponentPropsWithoutRef<typeof MenuContent>
>(({ className, sideOffset = 6, ...props }, ref) => (
  <MenuContent
    ref={ref}
    className={className}
    sideOffset={sideOffset}
    {...props}
  />
));
MenuBarContent.displayName = "MenuBarContent";

const MenuBarItem = MenuItem;
const MenuBarSeparator = MenuSeparator;
const MenuBarSubmenu = MenuSubmenu;
const MenuBarSubmenuTrigger = MenuSubmenuTrigger;
const MenuBarSubmenuContent = MenuSubmenuContent;

export {
  MenuBar,
  MenuBarContent,
  MenuBarItem,
  MenuBarMenu,
  MenuBarSeparator,
  MenuBarSubmenu,
  MenuBarSubmenuContent,
  MenuBarSubmenuTrigger,
  MenuBarTrigger,
};
