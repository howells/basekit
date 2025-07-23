"use client";

import React from "react";

interface ComponentExampleRendererProps {
  componentId: string;
  exampleId: string;
}

// Dynamic component renderer that loads examples on the client side
export function ComponentExampleRenderer({
  componentId,
  exampleId,
}: ComponentExampleRendererProps) {
  const [ExampleComponent, setExampleComponent] =
    React.useState<React.ComponentType | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadExample() {
      try {
        setLoading(true);
        setError(null);

        // Dynamically import the examples file
        const examplesModule = await import(
          `@/components/ui/${componentId}/examples`
        );

        // Convert exampleId to PascalCase component name
        const componentName =
          exampleId
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join("") + "Example";

        const Component = examplesModule[componentName];

        if (!Component) {
          setError(
            `Example component ${componentName} not found in ${componentId}/examples`
          );
          return;
        }

        setExampleComponent(() => Component);
      } catch (err) {
        console.error("Error loading example:", err);
        setError(`Failed to load example: ${(err as Error).message}`);
      } finally {
        setLoading(false);
      }
    }

    loadExample();
  }, [componentId, exampleId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[80px] text-zinc-500">
        <div className="animate-pulse">Loading example...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-sm p-4 border border-red-200 rounded bg-red-50 dark:bg-red-950/20">
        <p className="font-medium">Example Load Error</p>
        <p className="text-xs mt-1">{error}</p>
      </div>
    );
  }

  if (!ExampleComponent) {
    return (
      <div className="text-amber-600 text-sm p-4 border border-amber-200 rounded bg-amber-50 dark:bg-amber-950/20">
        <p className="font-medium">Example Not Found</p>
        <p className="text-xs mt-1">
          Could not find example component for {exampleId}
        </p>
      </div>
    );
  }

  try {
    return <ExampleComponent />;
  } catch (renderError) {
    return (
      <div className="text-red-500 text-sm p-4 border border-red-200 rounded bg-red-50 dark:bg-red-950/20">
        <p className="font-medium">Render Error</p>
        <p className="text-xs mt-1">{(renderError as Error).message}</p>
      </div>
    );
  }
}
