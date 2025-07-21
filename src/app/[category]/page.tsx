import { Badge } from "@/components/ui/badge/badge";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { getComponentsByCategory } from "@/lib/component-registry";
import Link from "next/link";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

const categoryInfo = {
  ui: {
    title: "UI Components",
    description:
      "Essential user interface components for building modern applications.",
  },
  inputs: {
    title: "Input Components",
    description:
      "Form inputs and interactive controls for user data collection.",
  },
  forms: {
    title: "Form Components",
    description:
      "Form layouts and validation components for complex data entry.",
  },
  charts: {
    title: "Chart Components",
    description:
      "Data visualization components for displaying metrics and analytics.",
  },
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;

  // Validate category
  if (!(category in categoryInfo)) {
    notFound();
  }

  const info = categoryInfo[category as keyof typeof categoryInfo];
  const components = getComponentsByCategory(category);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Heading level={1}>{info.title}</Heading>
          <Badge variant="neutral">{components.length} components</Badge>
        </div>
        <Text className="text-lg">{info.description}</Text>
      </div>

      {/* Component Grid */}
      {components.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component) => (
            <Link
              key={component.id}
              href={`/${category}/${component.id}`}
              className="group"
            >
              <Card className="h-full p-6 hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {component.name}
                    </h3>
                    {component.badge && (
                      <Badge variant="neutral" className="text-xs">
                        {component.badge}
                      </Badge>
                    )}
                  </div>
                  <Text className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                    {component.description}
                  </Text>
                  <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-500">
                    <span>{component.examples.length} examples</span>
                    {component.api && <span>• API reference</span>}
                    {component.accessibility && <span>• Accessible</span>}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Text className="text-zinc-500 dark:text-zinc-400">
            No components available in this category yet.
          </Text>
        </div>
      )}
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { category: "ui" },
    { category: "inputs" },
    { category: "forms" },
    { category: "charts" },
  ];
}
