"use client";

import { Input } from "@/components/inputs/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/inputs/select";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { IconSelect, getIconByName } from "@/components/ui/icon-select";
import {
  PropExplorerConfig,
  PropMetadata,
  isVariantProp,
} from "@/lib/prop-explorer";
import { cx } from "@/lib/utils";
import React, { useMemo, useState } from "react";

// Component registry for client-side resolution
const componentRegistry: Record<
  string,
  React.ComponentType<Record<string, unknown>>
> = {
  Badge,
};

interface PropExplorerProps {
  config: PropExplorerConfig;
  componentId?: string;
  className?: string;
}

export const PropExplorer: React.FC<PropExplorerProps> = ({
  config,
  componentId,
  className,
}) => {
  // Get all configurable props (variants + regular props that have examples or are marked as configurable)
  const configurableProps = useMemo(() => {
    const allProps: PropMetadata[] = [];

    // Add variant props (these are always configurable)
    if (config.variants) {
      allProps.push(...config.variants);
    }

    // Add regular props that have examples (indicating they're meant to be configurable)
    if (config.props) {
      const configurableRegularProps = config.props.filter(
        (prop) => prop.examples && prop.examples.length > 0
      );
      allProps.push(...configurableRegularProps);
    }

    return allProps;
  }, [config]);

  // Resolve component from componentId
  const Component = componentId ? componentRegistry[componentId] : undefined;

  // Initialize state for current prop values
  const [propValues, setPropValues] = useState<Record<string, unknown>>(() => {
    const initial: Record<string, unknown> = {};

    configurableProps.forEach((prop) => {
      if (isVariantProp(prop)) {
        // For variant props, use defaultOption or first option
        initial[prop.name] = prop.defaultOption || prop.options[0]?.value || "";
      } else if (prop.examples && prop.examples.length > 0) {
        // For regular props with examples, use first example
        initial[prop.name] = prop.examples[0];
      } else if (prop.defaultValue !== undefined) {
        // Use default value if available
        initial[prop.name] = prop.defaultValue;
      }
    });

    return initial;
  });

  // State for special props that need custom handling
  const [specialProps, setSpecialProps] = useState<Record<string, unknown>>({
    icon: "",
    children: getDefaultChildrenValue(),
  });

  // Get default children value based on component type or config
  function getDefaultChildrenValue(): string {
    // Check if there's a children prop with examples
    const childrenProp = config.props?.find((prop) => prop.name === "children");
    if (childrenProp?.examples && childrenProp.examples.length > 0) {
      return String(childrenProp.examples[0]);
    }

    // Fallback based on component name
    return config.displayName || config.componentName;
  }

  // Check if component supports icons
  const supportsIcons = useMemo(() => {
    return config.props?.some((prop) => prop.name === "icon") || false;
  }, [config.props]);

  // Check if component supports children
  const supportsChildren = useMemo(() => {
    return config.props?.some((prop) => prop.name === "children") || false;
  }, [config.props]);

  // Get the icon component from the selected name
  const iconComponent =
    specialProps.icon && typeof specialProps.icon === "string"
      ? getIconByName(specialProps.icon as string)
      : undefined;

  // Create final props for the component
  const componentProps = useMemo(() => {
    const finalProps: Record<string, unknown> = { ...propValues };

    // Add icon if supported and selected
    if (supportsIcons && iconComponent) {
      finalProps.icon = iconComponent;
    }

    // Add children if supported
    if (supportsChildren) {
      finalProps.children = specialProps.children || getDefaultChildrenValue();
    }

    return finalProps;
  }, [
    propValues,
    specialProps,
    iconComponent,
    supportsIcons,
    supportsChildren,
  ]);

  // Render a configurable prop control
  const renderPropControl = (prop: PropMetadata) => {
    if (isVariantProp(prop)) {
      // Render select for variant props
      return (
        <div key={prop.name} className="space-y-2">
          <label className="text-sm font-medium text-gray-700 capitalize">
            {prop.name}
          </label>
          <Select
            value={String(propValues[prop.name] || "")}
            onValueChange={(value) =>
              setPropValues((prev) => ({ ...prev, [prop.name]: value }))
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {prop.options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label || option.value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {prop.description && (
            <p className="text-xs text-gray-500">{prop.description}</p>
          )}
        </div>
      );
    } else if (prop.examples && prop.examples.length > 0) {
      // Render select for props with examples
      return (
        <div key={prop.name} className="space-y-2">
          <label className="text-sm font-medium text-gray-700 capitalize">
            {prop.name}
          </label>
          <Select
            value={String(propValues[prop.name] || "")}
            onValueChange={(value) => {
              // Try to parse the value to the correct type
              let parsedValue: unknown = value;
              if (prop.type === "number") {
                parsedValue = Number(value);
              } else if (prop.type === "boolean") {
                parsedValue = value === "true";
              }
              setPropValues((prev) => ({ ...prev, [prop.name]: parsedValue }));
            }}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {prop.examples.map((example, index) => (
                <SelectItem key={index} value={String(example)}>
                  {String(example)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {prop.description && (
            <p className="text-xs text-gray-500">{prop.description}</p>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <div className={cx("flex gap-6", className)}>
      {/* Main content - Live preview */}
      <div className="flex-1">
        <div className="space-y-4">
          {/* Live Preview */}
          <Card className="p-8 bg-gray-50/50">
            <div className="flex items-center justify-center min-h-[120px]">
              {Component ? (
                <Component {...componentProps} />
              ) : (
                <div className="p-4 text-center text-zinc-500">
                  Component preview not available
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>

      {/* Right sidebar - Properties inspector */}
      <div className="w-80 border-l bg-gray-50/30 p-4">
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">
            Properties
          </h4>

          {configurableProps.length === 0 ? (
            <p className="text-sm text-gray-500">No configurable properties</p>
          ) : (
            <div className="space-y-4">
              {/* Render configurable props */}
              {configurableProps.map(renderPropControl)}

              {/* Icon selector (if supported) */}
              {supportsIcons && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    icon
                  </label>
                  <IconSelect
                    value={String(specialProps.icon || "")}
                    onValueChange={(value) =>
                      setSpecialProps((prev) => ({ ...prev, icon: value }))
                    }
                    placeholder="Select an icon..."
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500">
                    Lucide icon component to display
                  </p>
                </div>
              )}

              {/* Children text input (if supported) */}
              {supportsChildren && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    children
                  </label>
                  <Input
                    value={String(specialProps.children || "")}
                    onChange={(e) =>
                      setSpecialProps((prev) => ({
                        ...prev,
                        children: e.target.value,
                      }))
                    }
                    placeholder={`${
                      config.displayName || config.componentName
                    } text`}
                  />
                  <p className="text-xs text-gray-500">
                    The content to display inside the component
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
