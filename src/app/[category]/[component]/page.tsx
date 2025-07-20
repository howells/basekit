import { ComponentDocumentationPage } from "@/components/component-documentation-page";
import { COMPONENT_LIST, getComponentConfig } from "@/lib/component-registry";
import { createComponentConfig } from "@/lib/config-helpers";
import { notFound } from "next/navigation";
import React from "react";

interface ComponentPageProps {
  params: {
    category: string;
    component: string;
  };
}

// Function to dynamically load component config
async function loadComponentConfig(componentId: string, category: string) {
  // First try to get existing config
  const config = getComponentConfig(componentId);

  if (config) {
    return config;
  }

  // If no config exists, try to load from component file
  try {
    let componentModule;

    switch (category) {
      case "ui":
        componentModule = await import(`@/components/ui/${componentId}`);
        break;
      case "inputs":
        componentModule = await import(`@/components/inputs/${componentId}`);
        break;
      case "forms":
        componentModule = await import(`@/components/forms/${componentId}`);
        break;
      case "charts":
        componentModule = await import(`@/components/charts/${componentId}`);
        break;
      default:
        throw new Error(`Unknown category: ${category}`);
    }

    // Check if component exports a config
    if (componentModule.componentConfig) {
      return componentModule.componentConfig;
    }

    // Check if component exports a prop explorer config
    const propConfigKey = `${componentId.replace(/-/g, "")}PropConfig`;

    if (componentModule[propConfigKey]) {
      // Create a basic component config with prop explorer
      const name = componentId
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      return createComponentConfig(
        componentId,
        name,
        componentModule[propConfigKey].description || `${name} component`,
        category as "ui" | "inputs" | "forms" | "charts",
        {
          propExplorer: componentModule[propConfigKey],
          examples: componentModule[propConfigKey].examples || [
            {
              id: "basic",
              title: "Basic Usage",
              description: "Basic component usage",
              preview: (
                <div className="p-4 text-center text-zinc-500">
                  See Props section for interactive examples
                </div>
              ),
              code: `// See Props section for examples`,
            },
          ],
        }
      );
    }
  } catch (error) {
    console.warn(`Could not load component: ${componentId}`, error);
  }

  // Create placeholder config if component exists in our list
  const componentList = COMPONENT_LIST[category as keyof typeof COMPONENT_LIST];
  if (componentList?.includes(componentId as never)) {
    const name = componentId
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return createComponentConfig(
      componentId,
      name,
      `${name} component - documentation coming soon.`,
      category as "ui" | "inputs" | "forms" | "charts",
      {
        examples: [
          {
            id: "placeholder",
            title: "Coming Soon",
            description: "Documentation for this component is being prepared.",
            preview: (
              <div className="p-4 text-center text-zinc-500">
                Preview coming soon
              </div>
            ),
            code: `// ${name} example coming soon`,
          },
        ],
      }
    );
  }

  return null;
}

export default async function ComponentPage({ params }: ComponentPageProps) {
  const { category, component } = params;

  // Load component configuration
  const config = await loadComponentConfig(component, category);

  // Check if component exists and belongs to the correct category
  if (!config || config.category !== category) {
    notFound();
  }

  return <ComponentDocumentationPage config={config} />;
}

// Generate static paths for all components (optional for performance)
export async function generateStaticParams() {
  const paths: { category: string; component: string }[] = [];

  // Generate paths for all components in each category
  Object.entries(COMPONENT_LIST).forEach(([category, components]) => {
    components.forEach((component) => {
      paths.push({ category, component });
    });
  });

  return paths;
}
