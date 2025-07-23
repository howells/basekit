"use client";

import { ComponentConfig } from "@/lib/component-config-types";
import { ComponentPreview } from "./component-preview";
import { PropExplorerProvider } from "./prop-explorer-context";
import { PropExplorerContent } from "./prop-explorer-controls";

interface ComponentPropExplorerProps {
  config: ComponentConfig;
  category?: string;
  componentPath?: string;
}

export function ComponentPropExplorer({
  config,
  category,
  componentPath,
}: ComponentPropExplorerProps) {
  if (!config) return null;

  // Extract default values from props
  const defaultProps: Record<string, unknown> = {};
  config.props?.forEach((prop: any) => {
    if (prop.defaultValue !== undefined) {
      defaultProps[prop.name] = prop.defaultValue;
    }
  });

  // Add default values for special props
  defaultProps.children = config.name;

  return (
    <PropExplorerProvider defaultProps={defaultProps}>
      <div className="flex gap-6">
        {/* Main content - Live preview */}
        <div className="flex-1">
          <div className="space-y-4">
            <ComponentPreview
              componentId={config.componentId || "Unknown"}
              category={category}
              componentPath={componentPath}
            />
          </div>
        </div>

        {/* Right sidebar - Properties inspector */}
        <PropExplorerContent config={config} />
      </div>
    </PropExplorerProvider>
  );
}
