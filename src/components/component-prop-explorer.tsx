"use client";

import { ComponentConfig } from "@/lib/component-configs";
import { PropExplorer } from "./prop-explorer";

interface ComponentPropExplorerProps {
  propExplorer: ComponentConfig["propExplorer"];
  componentId: ComponentConfig["componentId"];
}

export function ComponentPropExplorer({
  propExplorer,
  componentId,
}: ComponentPropExplorerProps) {
  if (!propExplorer) return null;

  return (
    <div className="space-y-6">
      <PropExplorer config={propExplorer} componentId={componentId} />
    </div>
  );
}
