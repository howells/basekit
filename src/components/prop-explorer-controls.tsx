"use client";

import { Subheading } from "@/components/ui/heading";
import { ComponentConfig } from "@/lib/component-configs";
import React from "react";
import { Field } from "./forms/field";
import { Input } from "./inputs/input";
import { usePropExplorer } from "./prop-explorer-context";
import { Button } from "./ui/button";
import { IconSelect } from "./ui/icon-select";
import {
  Inspector,
  InspectorBody,
  InspectorGroup,
  InspectorHeader,
  InspectorSection,
} from "./ui/inspector";
import { Label } from "./ui/label";

interface PropExplorerControlsProps {
  config: ComponentConfig["propExplorer"];
}

export function PropExplorerControls({ config }: PropExplorerControlsProps) {
  const { props, updateProp, resetProps } = usePropExplorer();

  if (!config) return null;

  // Check if component supports icons
  const supportsIcons =
    config.props?.some((prop) => prop.name === "icon") || false;

  // Check if component supports children
  const supportsChildren =
    config.props?.some((prop) => prop.name === "children") || false;

  return (
    <Inspector>
      <InspectorHeader>
        <Subheading level={3}>Props</Subheading>
        <Button onClick={resetProps} variant="ghost">
          Reset
        </Button>
      </InspectorHeader>

      <InspectorBody>
        <InspectorSection>
          {/* Variants */}
          {config.variants?.map((variant) => (
            <InspectorGroup key={variant.name}>
              <Field>
                <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {variant.name}
                </Label>
                <select
                  value={String(props[variant.name] || "")}
                  onChange={(e) => updateProp(variant.name, e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-zinc-300 rounded-md bg-white dark:bg-zinc-800 dark:border-zinc-600 dark:text-zinc-100"
                >
                  {variant.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label || option.value}
                    </option>
                  ))}
                </select>
                {variant.description && (
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {variant.description}
                  </p>
                )}
              </Field>
            </InspectorGroup>
          ))}

          {/* Icon Selector */}
          {supportsIcons && (
            <InspectorGroup>
              <Field>
                <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Icon
                </Label>
                <IconSelect
                  value={String(props.icon || "")}
                  onValueChange={(value) => updateProp("icon", value)}
                />
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Lucide icon component to display
                </p>
              </Field>
            </InspectorGroup>
          )}

          {/* Children */}
          {supportsChildren && (
            <InspectorGroup>
              <Field>
                <Label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  Children
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
            </InspectorGroup>
          )}

          {/* Show message if no configurable props */}
          {(!config.variants || config.variants.length === 0) &&
            !supportsIcons &&
            !supportsChildren && (
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                No configurable properties available
              </p>
            )}
        </InspectorSection>
      </InspectorBody>
    </Inspector>
  );
}

// Keep the Inspector export for backward compatibility
export { Inspector } from "./ui/inspector";
