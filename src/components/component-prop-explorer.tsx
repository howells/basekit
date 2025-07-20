"use client";

import { ComponentConfig } from "@/lib/component-configs";
import { ComponentPreview } from "./component-preview";
import { PropExplorerProvider } from "./prop-explorer-context";
import { PropExplorerControls } from "./prop-explorer-controls";

interface ComponentPropExplorerProps {
  propExplorer: ComponentConfig["propExplorer"];
  componentId: ComponentConfig["componentId"];
  category?: string;
  componentPath?: string;
}

export function ComponentPropExplorer({
  propExplorer,
  componentId,
  category,
  componentPath,
}: ComponentPropExplorerProps) {
  if (!propExplorer) return null;

  // Extract default values from variants
  const defaultProps: Record<string, unknown> = {};
  propExplorer.variants?.forEach((variant) => {
    if (variant.defaultOption) {
      defaultProps[variant.name] = variant.defaultOption;
    }
  });

  // Add default values for special props
  defaultProps.children =
    propExplorer.displayName || propExplorer.componentName;

  return (
    <PropExplorerProvider defaultProps={defaultProps}>
      <div className="flex gap-6">
        {/* Main content - Live preview */}
        <div className="flex-1">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Preview</h2>
            <ComponentPreview
              componentId={componentId || "Unknown"}
              category={category}
              componentPath={componentPath}
            />
          </div>
        </div>

        {/* Right sidebar - Properties inspector */}
        <PropExplorerControls config={propExplorer} />
      </div>
    </PropExplorerProvider>
  );
}
