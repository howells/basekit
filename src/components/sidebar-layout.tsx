// Sidebar Layout Component for Documentation

"use client";

import logo from "@/images/logo.png";
import { getComponentsByCategory } from "@/lib/component-registry";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible/collapsible";
import { Subheading } from "./ui/heading";
import { Input } from "./ui/input/input";
import {
  Sidebar,
  SidebarBody,
  SidebarDivider,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from "./ui/sidebar";

interface SidebarLayoutProps {
  children: React.ReactNode;
}

export function SidebarLayout({ children }: SidebarLayoutProps) {
  const pathname = usePathname();
  const [searchTerm, setSearchTerm] = React.useState("");

  // Get components by category from the registry
  const allUiComponents = getComponentsByCategory("ui");
  const allInputComponents = getComponentsByCategory("inputs");
  const allFormComponents = getComponentsByCategory("forms");
  const allChartComponents = getComponentsByCategory("charts");

  // Filter components based on search term
  const filterComponents = (components: typeof allUiComponents) => {
    if (!searchTerm) return components;
    return components.filter(
      (config) =>
        config.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        config.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const uiComponents = filterComponents(allUiComponents);
  const inputComponents = filterComponents(allInputComponents);
  const formComponents = filterComponents(allFormComponents);
  const chartComponents = filterComponents(allChartComponents);

  // Check if current path matches a component
  const isCurrentComponent = (category: string, componentId: string) => {
    return pathname === `/${category}/${componentId}`;
  };

  return (
    <div className="flex h-screen bg-white dark:bg-zinc-900">
      {/* Sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:border-r lg:border-zinc-200 lg:bg-white lg:dark:border-zinc-800 lg:dark:bg-zinc-900">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-1">
              <Image
                src={logo}
                alt="Patternmode"
                width={24}
                height={24}
                className="shrink-0"
              />
              <Subheading level={2}>Patternmode</Subheading>
            </div>
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              <Collapsible defaultOpen>
                <CollapsibleTrigger>
                  <SidebarHeading>Getting Started</SidebarHeading>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarItem href="/">
                    <SidebarLabel>Overview</SidebarLabel>
                  </SidebarItem>
                  <SidebarItem href="/installation">
                    <SidebarLabel>Installation</SidebarLabel>
                  </SidebarItem>
                </CollapsibleContent>
              </Collapsible>
            </SidebarSection>

            <SidebarDivider />

            {/* Search input for components only */}
            <SidebarSection>
              <div className="px-3 pb-3">
                <Input
                  placeholder="Search components..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  size="sm"
                />
              </div>
            </SidebarSection>

            {uiComponents.length > 0 && (
              <SidebarSection>
                <Collapsible defaultOpen>
                  <CollapsibleTrigger>
                    <SidebarHeading>
                      UI Components ({uiComponents.length})
                    </SidebarHeading>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    {uiComponents.map((config) => {
                      return (
                        <SidebarItem
                          key={config.id}
                          href={`/ui/${config.id}`}
                          current={isCurrentComponent("ui", config.id)}
                        >
                          <SidebarLabel>{config.name}</SidebarLabel>
                        </SidebarItem>
                      );
                    })}
                  </CollapsibleContent>
                </Collapsible>
              </SidebarSection>
            )}

            {uiComponents.length > 0 && <SidebarDivider />}

            {inputComponents.length > 0 && (
              <SidebarSection>
                <Collapsible defaultOpen>
                  <CollapsibleTrigger>
                    <SidebarHeading>
                      Input Components ({inputComponents.length})
                    </SidebarHeading>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    {inputComponents.map((config) => {
                      return (
                        <SidebarItem
                          key={config.id}
                          href={`/inputs/${config.id}`}
                          current={isCurrentComponent("inputs", config.id)}
                        >
                          <SidebarLabel>{config.name}</SidebarLabel>
                        </SidebarItem>
                      );
                    })}
                  </CollapsibleContent>
                </Collapsible>
              </SidebarSection>
            )}

            {inputComponents.length > 0 && <SidebarDivider />}

            {formComponents.length > 0 && (
              <SidebarSection>
                <Collapsible defaultOpen>
                  <CollapsibleTrigger>
                    <SidebarHeading>
                      Form Components ({formComponents.length})
                    </SidebarHeading>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    {formComponents.map((config) => {
                      return (
                        <SidebarItem
                          key={config.id}
                          href={`/forms/${config.id}`}
                          current={isCurrentComponent("forms", config.id)}
                        >
                          <SidebarLabel>{config.name}</SidebarLabel>
                        </SidebarItem>
                      );
                    })}
                  </CollapsibleContent>
                </Collapsible>
              </SidebarSection>
            )}

            {formComponents.length > 0 && <SidebarDivider />}

            {chartComponents.length > 0 && (
              <SidebarSection>
                <Collapsible defaultOpen>
                  <CollapsibleTrigger>
                    <SidebarHeading>
                      Chart Components ({chartComponents.length})
                    </SidebarHeading>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    {chartComponents.map((config) => {
                      return (
                        <SidebarItem
                          key={config.id}
                          href={`/charts/${config.id}`}
                          current={isCurrentComponent("charts", config.id)}
                        >
                          <SidebarLabel>{config.name}</SidebarLabel>
                        </SidebarItem>
                      );
                    })}
                  </CollapsibleContent>
                </Collapsible>
              </SidebarSection>
            )}

            {/* No results message */}
            {searchTerm &&
              uiComponents.length === 0 &&
              inputComponents.length === 0 &&
              formComponents.length === 0 &&
              chartComponents.length === 0 && (
                <SidebarSection>
                  <div className="px-3 py-4 text-center text-sm text-zinc-500 dark:text-zinc-400">
                    No components found for &ldquo;{searchTerm}&rdquo;
                  </div>
                </SidebarSection>
              )}
          </SidebarBody>
        </Sidebar>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col lg:pl-64">
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
