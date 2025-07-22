"use client";

import * as Headless from "@headlessui/react";
import clsx from "clsx";
import { LayoutGroup, motion } from "framer-motion";
import { PanelLeftClose } from "lucide-react";
import Link from "next/link";
import React, { forwardRef, useId } from "react";
import { Button } from "../button";
import { ScrollArea } from "../scroll-area";
import { TouchTarget } from "../touch-target";

export function Sidebar({
  className,
  children,
  isCollapsed = false,
  ...props
}: React.ComponentPropsWithoutRef<"nav"> & {
  isCollapsed?: boolean;
}) {
  return (
    <motion.nav
      {...props}
      className={clsx(
        className,
        "flex h-full min-h-0 flex-col transition-all duration-200"
      )}
      animate={{ width: isCollapsed ? "3rem" : "16rem" }}
      initial={false}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      {children}
    </motion.nav>
  );
}

export function SidebarToggle({
  className,
  isCollapsed,
  onToggle,
  ...props
}: React.ComponentPropsWithoutRef<"button"> & {
  isCollapsed?: boolean;
  onToggle?: () => void;
}) {
  return (
    <Button
      {...props}
      onClick={onToggle}
      variant="ghost"
      size="icon-sm"
      className={clsx(className)}
      aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
    >
      <PanelLeftClose
        size={16}
        className={clsx("transition-transform duration-200", {
          "rotate-180": isCollapsed,
        })}
      />
    </Button>
  );
}

export function SidebarHeader({
  className,
  isCollapsed,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & {
  isCollapsed?: boolean;
}) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        "flex flex-col border-b border-zinc-950/5 dark:border-white/5 transition-all duration-200",
        "[&>[data-slot=section]+[data-slot=section]]:mt-2.5"
      )}
    />
  );
}

export function SidebarBody({
  className,
  isCollapsed,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & {
  isCollapsed?: boolean;
}) {
  return (
    <ScrollArea
      className={clsx(className, "flex-1")}
      viewportClassName={clsx(
        "transition-all duration-200 [&>[data-slot=section]+[data-slot=section]]:mt-8",
        isCollapsed ? "p-2" : "p-4"
      )}
      {...props}
    />
  );
}

export function SidebarFooter({
  className,
  isCollapsed,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & {
  isCollapsed?: boolean;
}) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        "flex flex-col border-t border-zinc-950/5 dark:border-white/5 transition-all duration-200",
        isCollapsed ? "p-2" : "p-4",
        "[&>[data-slot=section]+[data-slot=section]]:mt-2.5"
      )}
    />
  );
}

export function SidebarSection({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const id = useId();

  return (
    <LayoutGroup id={id}>
      <div
        {...props}
        data-slot="section"
        className={clsx(className, "flex flex-col gap-0.5")}
      />
    </LayoutGroup>
  );
}

export function SidebarDivider({
  className,
  isCollapsed,
  ...props
}: React.ComponentPropsWithoutRef<"hr"> & {
  isCollapsed?: boolean;
}) {
  if (isCollapsed) return null;

  return (
    <hr
      {...props}
      className={clsx(
        className,
        "my-4 border-t border-zinc-950/5 lg:-mx-4 dark:border-white/5"
      )}
    />
  );
}

export function SidebarSpacer({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      aria-hidden="true"
      {...props}
      className={clsx(className, "mt-8 flex-1")}
    />
  );
}

export function SidebarHeading({
  className,
  isCollapsed,
  ...props
}: React.ComponentPropsWithoutRef<"h3"> & {
  isCollapsed?: boolean;
}) {
  if (isCollapsed) return null;

  return (
    <h3
      {...props}
      className={clsx(
        className,
        "mb-1 text-xs/6 font-medium text-zinc-500 dark:text-zinc-400"
      )}
    />
  );
}

export const SidebarItem = forwardRef(function SidebarItem(
  {
    current,
    className,
    children,
    isCollapsed,
    ...props
  }: {
    current?: boolean;
    className?: string;
    children: React.ReactNode;
    isCollapsed?: boolean;
  } & (
    | Omit<Headless.ButtonProps, "as" | "className">
    | Omit<Headless.ButtonProps<typeof Link>, "as" | "className">
  ),
  ref: React.ForwardedRef<HTMLAnchorElement | HTMLButtonElement>
) {
  const classes = clsx(
    // Base
    "flex w-full items-center gap-3 rounded-lg text-left text-base/6 font-medium text-zinc-950 sm:text-sm/5 transition-all duration-200",
    isCollapsed ? "px-2 py-2 justify-center" : "px-2 py-2.5 sm:py-2",
    // Leading icon/icon-only
    "*:data-[slot=icon]:size-6 *:data-[slot=icon]:shrink-0 *:data-[slot=icon]:fill-zinc-500 sm:*:data-[slot=icon]:size-5",
    // Trailing icon (down chevron or similar)
    "*:last:data-[slot=icon]:ml-auto *:last:data-[slot=icon]:size-5 sm:*:last:data-[slot=icon]:size-4",
    // Avatar
    "*:data-[slot=avatar]:-m-0.5 *:data-[slot=avatar]:size-7 sm:*:data-[slot=avatar]:size-6",
    // Hover
    "data-hover:bg-zinc-950/5 data-hover:*:data-[slot=icon]:fill-zinc-950",
    // Active
    "data-active:bg-zinc-950/5 data-active:*:data-[slot=icon]:fill-zinc-950",
    // Current
    "data-current:bg-zinc-950/10 data-current:text-zinc-950 data-current:*:data-[slot=icon]:fill-zinc-950",
    // Dark mode
    "dark:text-white dark:*:data-[slot=icon]:fill-zinc-400",
    "dark:data-hover:bg-white/5 dark:data-hover:*:data-[slot=icon]:fill-white",
    "dark:data-active:bg-white/5 dark:data-active:*:data-[slot=icon]:fill-white",
    "dark:data-current:bg-white/10 dark:data-current:text-white dark:data-current:*:data-[slot=icon]:fill-white"
  );

  return (
    <span className={clsx(className, "relative")}>
      {current && !isCollapsed && (
        <motion.span
          layoutId="current-indicator"
          className="absolute inset-y-2 -left-4 w-0.5 rounded-full bg-zinc-950 dark:bg-white"
        />
      )}
      {"href" in props ? (
        <Headless.CloseButton
          as={Link}
          {...props}
          className={classes}
          data-current={current ? "true" : undefined}
          ref={ref}
          title={
            isCollapsed && typeof children === "string" ? children : undefined
          }
        >
          <TouchTarget>{children}</TouchTarget>
        </Headless.CloseButton>
      ) : (
        <Headless.Button
          {...props}
          className={clsx("cursor-default", classes)}
          data-current={current ? "true" : undefined}
          ref={ref}
          title={
            isCollapsed && typeof children === "string" ? children : undefined
          }
        >
          <TouchTarget>{children}</TouchTarget>
        </Headless.Button>
      )}
    </span>
  );
});

export function SidebarLabel({
  className,
  isCollapsed,
  ...props
}: React.ComponentPropsWithoutRef<"span"> & {
  isCollapsed?: boolean;
}) {
  return (
    <span
      {...props}
      className={clsx(
        className,
        "truncate transition-opacity duration-200",
        isCollapsed && "opacity-0 w-0 overflow-hidden"
      )}
    />
  );
}
