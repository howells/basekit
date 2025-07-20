"use client";

import { Input } from "@/components/inputs/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/inputs/select";
import { IconSelect, getIconByName } from "@/components/ui/icon-select";
import { PropExplorerConfig, isVariantProp } from "@/lib/prop-explorer";
import React from "react";
import { usePropExplorer } from "./prop-explorer-context";

interface PropExplorerControlsProps {
  config: PropExplorerConfig;
}

export function PropExplorerControls({ config }: PropExplorerControlsProps) {
  const { props, updateProp } = usePropExplorer();

  // Get all configurable props (only variants are configurable)
  const configurableProps = config.variants || [];

  // Check if component supports icons
  const supportsIcons =
    config.props?.some((prop) => prop.name === "icon") || false;

  // Check if component supports children
  const supportsChildren =
    config.props?.some((prop) => prop.name === "children") || false;

  // Render a configurable prop control
  const renderPropControl = (prop: {
    name: string;
    options: Array<{ value: string; label?: string }>;
    description?: string;
  }) => {
    return (
      <div key={prop.name} className="space-y-2">
        <label className="text-sm font-medium text-gray-700 capitalize">
          {prop.name}
        </label>
        <Select
          value={String(props[prop.name] || "")}
          onValueChange={(value) => updateProp(prop.name, value)}
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
  };

  return (
    <div className="w-80 border-l bg-gray-50/30 p-4">
      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-gray-900 mb-3">Properties</h4>

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
                  value={String(props.icon || "")}
                  onValueChange={(value) => updateProp("icon", value)}
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
                  value={String(props.children || "")}
                  onChange={(e) => updateProp("children", e.target.value)}
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
  );
}
