"use client";

import { ComponentConfig } from "@/lib/component-config-types";
import { PropMetadata } from "@/lib/prop-explorer";
import React from "react";
import { ComponentPreview } from "./component-preview";
import { PropExplorerProvider } from "./prop-explorer-context";
import { PropExplorerContent } from "./prop-explorer-controls";
import { Inspector, InspectorBody, InspectorToggle } from "./ui/inspector";

interface ComponentPropExplorerProps {
  config: ComponentConfig;
  category: string;
  component: string;
}

export function ComponentPropExplorer({
  config,
  category,
  component,
}: ComponentPropExplorerProps) {
  const [isInspectorOpen, setIsInspectorOpen] = React.useState(false);

  // Extract default values from props if available
  const getDefaultProps = () => {
    if (!config.props) return {};

    const defaultProps: Record<string, unknown> = {};

    // Extract default values from props
    config.props.forEach((prop: PropMetadata) => {
      if (prop.defaultValue !== undefined) {
        defaultProps[prop.name] = prop.defaultValue;
      }
    });

    // Add default children if the component supports it
    const childrenProp = config.props.find(
      (prop: PropMetadata) => prop.name === "children"
    );
    if (childrenProp && childrenProp.defaultValue !== undefined) {
      defaultProps.children = childrenProp.defaultValue;
    } else if (childrenProp) {
      // Fallback to component name if no defaultValue is specified
      defaultProps.children = config.name;
    }

    return defaultProps;
  };

  // Create a serializable version of the config without render functions
  const serializableConfig = {
    ...config,
    examples:
      config.examples?.map((example: (typeof config.examples)[number]) => ({
        ...example,
        // Remove render function to avoid serialization issues
        render: undefined,
      })) || [],
  };

  return (
    <PropExplorerProvider defaultProps={getDefaultProps()}>
      <div className="flex flex-1 relative">
        {/* Main content - Live preview */}
        <div className="flex-1">
          <ComponentPreview
            componentId={config.componentId || component}
            category={category}
          />
        </div>

        {/* Desktop Inspector - Always visible on large screens */}
        <div className="hidden lg:block">
          <Inspector>
            <InspectorBody>
              <PropExplorerContent config={serializableConfig} />
            </InspectorBody>
          </Inspector>
        </div>

        {/* Mobile Inspector - Toggleable overlay */}
        <Inspector
          isOpen={isInspectorOpen}
          onToggle={() => setIsInspectorOpen(!isInspectorOpen)}
          asOverlay
          className="lg:hidden"
        >
          <InspectorBody>
            <PropExplorerContent config={serializableConfig} />
          </InspectorBody>
        </Inspector>

        {/* Toggle button for mobile */}
        <InspectorToggle
          isOpen={isInspectorOpen}
          onToggle={() => setIsInspectorOpen(!isInspectorOpen)}
        />
      </div>
    </PropExplorerProvider>
  );
}
