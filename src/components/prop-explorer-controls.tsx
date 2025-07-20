"use client";

import { Subheading } from "@/components/ui/heading";
import { ComponentConfig } from "@/lib/component-configs";
import { PropMetadata } from "@/lib/prop-explorer";
import React from "react";
import { Field } from "./forms/field";
import { Input } from "./inputs/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./inputs/select";
import { Switch } from "./inputs/switch";
import { usePropExplorer } from "./prop-explorer-context";
import { Button } from "./ui/button";
import { IconSelect } from "./ui/icon-select";
import { Label } from "./ui/label";

interface PropExplorerContentProps {
  config: ComponentConfig["propExplorer"];
}

// Helper function to get string options from a prop
function getStringOptions(prop: PropMetadata): string[] {
  if (!prop.options) return [];
  if (typeof prop.options[0] === "string") {
    return prop.options as string[];
  }
  // If it's VariantOption[], extract the value property
  return (prop.options as { value: string }[]).map((opt) => opt.value);
}

export function PropExplorerContent({ config }: PropExplorerContentProps) {
  const { props, updateProp, resetProps } = usePropExplorer();

  if (!config) {
    return (
      <div className="space-y-6">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          No configurable properties available
        </p>
      </div>
    );
  }

  // Check if component supports icons
  const supportsIcons =
    config.props?.some((prop) => prop.name === "icon") || false;

  // Check if component supports children
  const supportsChildren =
    config.props?.some((prop) => prop.name === "children") || false;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Subheading level={3}>props</Subheading>
        <Button onClick={resetProps} variant="ghost">
          Reset
        </Button>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {/* Variants */}
        {config.variants?.map((variant) => {
          // Check if this is a boolean variant (has only true/false options)
          const isBooleanVariant =
            variant.options.length === 2 &&
            variant.options.every(
              (opt) => opt.value === "true" || opt.value === "false"
            );

          return (
            <div key={variant.name} className="space-y-2">
              <Field>
                <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {variant.name}
                </Label>
                {isBooleanVariant ? (
                  <Switch
                    checked={String(props[variant.name]) === "true"}
                    onCheckedChange={(checked) =>
                      updateProp(variant.name, String(checked))
                    }
                    label={
                      // Don't show label for icon-only buttons (no space)
                      props.size === "icon"
                        ? undefined
                        : String(props[variant.name]) === "true"
                        ? "true"
                        : "false"
                    }
                  />
                ) : (
                  <Select
                    value={String(props[variant.name] || "")}
                    onValueChange={(value) => updateProp(variant.name, value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {variant.options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.value}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
                {variant.description && (
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {variant.description}
                  </p>
                )}
              </Field>
            </div>
          );
        })}

        {/* Icon Selectors */}
        {config.props?.some((prop) => prop.name === "leftIcon") && (
          <div className="space-y-2">
            <Field>
              <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                leftIcon
              </Label>
              <IconSelect
                value={String(props.leftIcon || "")}
                onValueChange={(value) => updateProp("leftIcon", value)}
              />
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Icon to display on the left side
              </p>
            </Field>
          </div>
        )}

        {config.props?.some((prop) => prop.name === "rightIcon") && (
          <div className="space-y-2">
            <Field>
              <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                rightIcon
              </Label>
              <IconSelect
                value={String(props.rightIcon || "")}
                onValueChange={(value) => updateProp("rightIcon", value)}
              />
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Icon to display on the right side
              </p>
            </Field>
          </div>
        )}

        {/* Generic Props Renderer */}
        {config.props?.map((prop) => {
          // Skip special props that are handled separately
          if (
            prop.name === "leftIcon" ||
            prop.name === "rightIcon" ||
            prop.name === "children"
          ) {
            return null;
          }

          return (
            <div key={prop.name} className="space-y-2">
              <Field>
                <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {prop.name}
                </Label>

                {/* Boolean props */}
                {prop.type === "boolean" && (
                  <Switch
                    checked={String(props[prop.name]) === "true"}
                    onCheckedChange={(checked) =>
                      updateProp(prop.name, String(checked))
                    }
                    label={
                      String(props[prop.name]) === "true" ? "true" : "false"
                    }
                  />
                )}

                {/* Select props */}
                {prop.type === "select" && prop.options && (
                  <Select
                    value={String(props[prop.name] ?? prop.defaultValue ?? "")}
                    onValueChange={(value) => updateProp(prop.name, value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {getStringOptions(prop).map((option: string) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}

                {/* String props */}
                {prop.type === "string" && (
                  <Input
                    value={String(props[prop.name] || "")}
                    onChange={(e) => updateProp(prop.name, e.target.value)}
                    placeholder={
                      prop.name === "loadingText"
                        ? "Loading..."
                        : prop.description || `Enter ${prop.name}`
                    }
                  />
                )}

                {/* Icon props */}
                {prop.type === "icon" && (
                  <IconSelect
                    value={String(props[prop.name] || "")}
                    onValueChange={(value) => updateProp(prop.name, value)}
                  />
                )}

                {prop.description && (
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {prop.description}
                  </p>
                )}
              </Field>
            </div>
          );
        })}

        {/* Children - Special handling */}
        {config.props?.some((prop) => prop.name === "children") && (
          <div className="space-y-2">
            <Field>
              <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                children
              </Label>
              <Input
                value={String(props.children || "")}
                onChange={(e) => updateProp("children", e.target.value)}
                placeholder={`${
                  config.displayName || config.componentName
                } text`}
              />
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                The content to display inside the component
              </p>
            </Field>
          </div>
        )}

        {/* Show message if no configurable props */}
        {(!config.variants || config.variants.length === 0) &&
          !supportsIcons &&
          !supportsChildren && (
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              No configurable properties available
            </p>
          )}
      </div>
    </div>
  );
}
