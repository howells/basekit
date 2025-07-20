// Tremor ResponsiveDrawer [v1.0.0] - Vaul + Base UI

"use client";

import React from "react";

import { useIsMobile } from "@/hooks/use-mobile";

// Mobile drawer (Vaul)
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";

// Desktop sheet (Base UI Dialog)
import {
  Drawer as Sheet,
  DrawerBody as SheetBody,
  DrawerClose as SheetClose,
  DrawerContent as SheetContent,
  DrawerDescription as SheetDescription,
  DrawerFooter as SheetFooter,
  DrawerHeader as SheetHeader,
  DrawerTitle as SheetTitle,
  DrawerTrigger as SheetTrigger,
} from "./sheet";

interface ResponsiveDrawerProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

interface ResponsiveDrawerTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

interface ResponsiveDrawerContentProps {
  children: React.ReactNode;
  className?: string;
}

interface ResponsiveDrawerHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface ResponsiveDrawerTitleProps {
  children: React.ReactNode;
  className?: string;
}

interface ResponsiveDrawerDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

interface ResponsiveDrawerBodyProps {
  children: React.ReactNode;
  className?: string;
}

interface ResponsiveDrawerFooterProps {
  children: React.ReactNode;
  className?: string;
}

interface ResponsiveDrawerCloseProps {
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}

const ResponsiveDrawer: React.FC<ResponsiveDrawerProps> = ({
  children,
  ...props
}) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <Drawer {...props}>{children}</Drawer>;
  }

  return <Sheet {...props}>{children}</Sheet>;
};

const ResponsiveDrawerTrigger: React.FC<ResponsiveDrawerTriggerProps> = ({
  children,
  ...props
}) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <DrawerTrigger {...props}>{children}</DrawerTrigger>;
  }

  return <SheetTrigger {...props}>{children}</SheetTrigger>;
};

const ResponsiveDrawerContent: React.FC<ResponsiveDrawerContentProps> = ({
  children,
  ...props
}) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <DrawerContent {...props}>{children}</DrawerContent>;
  }

  return <SheetContent {...props}>{children}</SheetContent>;
};

const ResponsiveDrawerHeader: React.FC<ResponsiveDrawerHeaderProps> = ({
  children,
  ...props
}) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <DrawerHeader {...props}>{children}</DrawerHeader>;
  }

  return <SheetHeader {...props}>{children}</SheetHeader>;
};

const ResponsiveDrawerTitle: React.FC<ResponsiveDrawerTitleProps> = ({
  children,
  ...props
}) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <DrawerTitle {...props}>{children}</DrawerTitle>;
  }

  return <SheetTitle {...props}>{children}</SheetTitle>;
};

const ResponsiveDrawerDescription: React.FC<
  ResponsiveDrawerDescriptionProps
> = ({ children, ...props }) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <DrawerDescription {...props}>{children}</DrawerDescription>;
  }

  return <SheetDescription {...props}>{children}</SheetDescription>;
};

const ResponsiveDrawerBody: React.FC<ResponsiveDrawerBodyProps> = ({
  children,
  ...props
}) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    // Mobile drawer doesn't have a specific body component, just use a div
    return (
      <div className="px-4" {...props}>
        {children}
      </div>
    );
  }

  return <SheetBody {...props}>{children}</SheetBody>;
};

const ResponsiveDrawerFooter: React.FC<ResponsiveDrawerFooterProps> = ({
  children,
  ...props
}) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <DrawerFooter {...props}>{children}</DrawerFooter>;
  }

  return <SheetFooter {...props}>{children}</SheetFooter>;
};

const ResponsiveDrawerClose: React.FC<ResponsiveDrawerCloseProps> = ({
  children,
  ...props
}) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <DrawerClose {...props}>{children}</DrawerClose>;
  }

  return <SheetClose {...props}>{children}</SheetClose>;
};

export {
  ResponsiveDrawer,
  ResponsiveDrawerBody,
  ResponsiveDrawerClose,
  ResponsiveDrawerContent,
  ResponsiveDrawerDescription,
  ResponsiveDrawerFooter,
  ResponsiveDrawerHeader,
  ResponsiveDrawerTitle,
  ResponsiveDrawerTrigger,
};
