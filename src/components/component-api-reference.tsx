"use client";

import { ComponentConfig } from "@/lib/component-configs";
import { isVariantProp } from "@/lib/prop-explorer";
import { ApiReference } from "./api-reference";

interface ComponentApiReferenceProps {
  api?: ComponentConfig["api"];
  propExplorer?: ComponentConfig["propExplorer"];
  componentName?: string;
}

export function ComponentApiReference({
  api,
  propExplorer,
  componentName,
}: ComponentApiReferenceProps) {
  // If we have propExplorer config, generate props from it (Subframe approach)
  if (propExplorer) {
    const allProps = [];

    // Add variant props
    if (propExplorer.variants) {
      allProps.push(
        ...propExplorer.variants.map((variant) => ({
          name: variant.name,
          type: variant.type,
          default: variant.defaultOption ? `"${variant.defaultOption}"` : "-",
          description: variant.description || `${variant.name} variant`,
        }))
      );
    }

    // Add regular props
    if (propExplorer.props) {
      allProps.push(
        ...propExplorer.props.map((prop) => ({
          name: prop.name,
          type: prop.type,
          default: "-",
          description: prop.description || `${prop.name} prop`,
        }))
      );
    }

    if (allProps.length === 0) return null;

    return (
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          Props
        </h2>
        <ApiReference
          title={`${componentName || propExplorer.componentName} Props`}
          description={propExplorer.description}
          props={allProps}
        />
      </div>
    );
  }

  // Fallback to manual API config
  if (!api || api.length === 0) return null;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        API Reference
      </h2>
      {api.map((component) => (
        <ApiReference
          key={component.name}
          title={component.name}
          description={component.description}
          props={component.properties.map((prop) => ({
            name: prop.name,
            type: prop.type,
            default: prop.default,
            description: prop.description,
          }))}
        />
      ))}
    </div>
  );
}
