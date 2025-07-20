"use client";

import { Card } from "@/components/ui/card";
import { getIconByName } from "@/components/ui/icon-select";
import dynamic from "next/dynamic";
import React from "react";
import { usePropExplorer } from "./prop-explorer-context";

interface ComponentPreviewProps {
  componentId: string;
  category?: string;
  componentPath?: string;
  className?: string;
}

// Map componentId to import path
const getComponentImportPath = (
  componentId: string,
  category?: string,
  componentPath?: string
): string => {
  // Use provided path if available
  if (componentPath) {
    return componentPath;
  }

  // Handle different component categories based on folder structure
  if (!category) {
    return `@/components/ui/${componentId.toLowerCase()}`;
  }

  switch (category) {
    case "charts":
      return `@/components/charts/${componentId
        .toLowerCase()
        .replace("chart", "-chart")}`;
    case "inputs":
      return `@/components/inputs/${componentId
        .toLowerCase()
        .replace(/([A-Z])/g, "-$1")
        .substring(1)}`;
    case "forms":
      return `@/components/forms/${componentId.toLowerCase()}`;
    case "ui":
    default:
      return `@/components/ui/${componentId.toLowerCase()}`;
  }
};

// Map kebab-case component names to their actual exported component names
const getExportedComponentName = (componentId: string): string => {
  // Handle kebab-case to PascalCase conversion
  if (componentId.includes("-")) {
    return componentId
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  }

  // Handle already PascalCase names
  return componentId.charAt(0).toUpperCase() + componentId.slice(1);
};

// Create dynamic component based on componentId and category
const createDynamicComponent = (
  componentId: string,
  category?: string,
  componentPath?: string
) => {
  return dynamic(
    () => {
      const importPath = getComponentImportPath(
        componentId,
        category,
        componentPath
      );
      const exportedName = getExportedComponentName(componentId);

      return import(importPath).then((mod) => ({ default: mod[exportedName] }));
    },
    {
      loading: () => (
        <div className="text-zinc-500">Loading {componentId}...</div>
      ),
      ssr: false,
    }
  ) as React.ComponentType<
    Record<string, unknown> & { children?: React.ReactNode }
  >;
};

export function ComponentPreview({
  componentId,
  category,
  componentPath,
  className,
}: ComponentPreviewProps) {
  const { props } = usePropExplorer();

  // Create dynamic component for this specific componentId
  const Component = React.useMemo(
    () => createDynamicComponent(componentId, category, componentPath),
    [componentId, category, componentPath]
  );

  // Get the icon components from the selected names
  const iconComponent =
    props.icon && typeof props.icon === "string" && props.icon.trim() !== ""
      ? getIconByName(props.icon as string)
      : undefined;

  const leftIconComponent =
    props.leftIcon &&
    typeof props.leftIcon === "string" &&
    props.leftIcon.trim() !== ""
      ? getIconByName(props.leftIcon as string)
      : undefined;

  const rightIconComponent =
    props.rightIcon &&
    typeof props.rightIcon === "string" &&
    props.rightIcon.trim() !== ""
      ? getIconByName(props.rightIcon as string)
      : undefined;

  // Create final props for the component
  const componentProps = React.useMemo(() => {
    const finalProps: Record<string, unknown> = { ...props };

    // Add icons if selected
    if (iconComponent) {
      finalProps.icon = iconComponent;
    } else if (props.icon === "") {
      delete finalProps.icon;
    }
    if (leftIconComponent) {
      finalProps.leftIcon = leftIconComponent;
    } else if (props.leftIcon === "") {
      delete finalProps.leftIcon;
    }
    if (rightIconComponent) {
      finalProps.rightIcon = rightIconComponent;
    } else if (props.rightIcon === "") {
      delete finalProps.rightIcon;
    }

    // Convert string booleans to actual booleans
    Object.entries(finalProps).forEach(([key, value]) => {
      if (value === "true") {
        finalProps[key] = true;
      } else if (value === "false") {
        finalProps[key] = false;
      }
    });

    return finalProps;
  }, [props, iconComponent, leftIconComponent, rightIconComponent]);

  // Render the component
  const renderComponent = () => {
    try {
      const childrenContent = String(props.children || componentId);
      return <Component {...componentProps}>{childrenContent}</Component>;
    } catch (renderError) {
      console.error("Error rendering component:", renderError);
      return <div className="text-red-500">Error rendering {componentId}</div>;
    }
  };

  return (
    <Card className="p-8 bg-gray-50/50">
      <div className="flex items-center justify-center min-h-[120px]">
        {renderComponent()}
      </div>
    </Card>
  );
}
