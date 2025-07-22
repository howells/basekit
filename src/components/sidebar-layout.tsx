// Sidebar Layout Component for Documentation

"use client";

import logo from "@/images/logo.png";
import { getComponentsByCategory } from "@/lib/component-registry";
import { clsx } from "clsx";
import Image from "next/image";
import { usePathname, useSelectedLayoutSegments } from "next/navigation";
import React, { createContext, useContext, useState } from "react";
import { Input } from "./ui/input/input";
import {
  Sidebar,
  SidebarBody,
  SidebarDivider,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from "./ui/sidebar";

interface SidebarLayoutProps {
  children: React.ReactNode;
}

interface SidebarContextType {
  isCollapsed: boolean;
  toggleCollapsed: () => void;
}

const SidebarContext = createContext<SidebarContextType | null>(null);

function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

function SidebarContent() {
  const pathname = usePathname();
  const segments = useSelectedLayoutSegments();
  const [searchTerm, setSearchTerm] = React.useState("");
  const { isCollapsed, toggleCollapsed } = useSidebar();

  // Get components by category from the registry
  const allUiComponents = getComponentsByCategory("ui");
  const allInputComponents = getComponentsByCategory("inputs");
  const allFormComponents = getComponentsByCategory("forms");
  const allChartComponents = getComponentsByCategory("charts");

  // Filter components based on search term and sort alphabetically
  const filterComponents = (components: typeof allUiComponents) => {
    let filtered = components;
    if (searchTerm) {
      filtered = components.filter(
        (config) =>
          config.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          config.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    // Sort alphabetically by name
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
  };

  const uiComponents = filterComponents(allUiComponents);
  const inputComponents = filterComponents(allInputComponents);
  const formComponents = filterComponents(allFormComponents);
  const chartComponents = filterComponents(allChartComponents);

  // Check if current path matches a component using segments
  const isCurrentComponent = (category: string, componentId: string) => {
    return (
      segments.length >= 2 &&
      segments[0] === category &&
      segments[1] === componentId
    );
  };

  return (
    <>
      <SidebarHeader isCollapsed={isCollapsed}>
        <div className="relative h-11 w-full p-2">
          {/* Logo */}
          <div className={clsx("absolute", "left-2 top-2")}>
            <Image
              src={logo}
              alt="Patternmode"
              width={32}
              height={32}
              className="shrink-0"
            />
          </div>
        </div>
      </SidebarHeader>
      <SidebarBody isCollapsed={isCollapsed}>
        <SidebarSection
          title="Getting Started"
          defaultOpen={true}
          isCollapsed={isCollapsed}
        >
          <SidebarItem href="/" isCollapsed={isCollapsed}>
            <SidebarLabel isCollapsed={isCollapsed}>Overview</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/installation" isCollapsed={isCollapsed}>
            <SidebarLabel isCollapsed={isCollapsed}>Installation</SidebarLabel>
          </SidebarItem>
        </SidebarSection>

        <SidebarDivider isCollapsed={isCollapsed} />

        {/* Search input for components only */}
        {!isCollapsed && (
          <SidebarSection>
            <div className="pb-3 px-4">
              <Input
                placeholder="Search components..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                size="sm"
                type="search"
                prefixStyling={false}
              />
            </div>
          </SidebarSection>
        )}

        {uiComponents.length > 0 && (
          <SidebarSection
            title={`UI Components (${uiComponents.length})`}
            defaultOpen={true}
            isCollapsed={isCollapsed}
          >
            {uiComponents.map((config) => {
              return (
                <SidebarItem
                  key={config.id}
                  href={`/ui/${config.id}`}
                  current={isCurrentComponent("ui", config.id)}
                  isCollapsed={isCollapsed}
                >
                  <SidebarLabel isCollapsed={isCollapsed}>
                    {config.name}
                  </SidebarLabel>
                </SidebarItem>
              );
            })}
          </SidebarSection>
        )}

        {uiComponents.length > 0 && (
          <SidebarDivider isCollapsed={isCollapsed} />
        )}

        {inputComponents.length > 0 && (
          <SidebarSection
            title={`Input Components (${inputComponents.length})`}
            defaultOpen={true}
            isCollapsed={isCollapsed}
          >
            {inputComponents.map((config) => {
              return (
                <SidebarItem
                  key={config.id}
                  href={`/inputs/${config.id}`}
                  current={isCurrentComponent("inputs", config.id)}
                  isCollapsed={isCollapsed}
                >
                  <SidebarLabel isCollapsed={isCollapsed}>
                    {config.name}
                  </SidebarLabel>
                </SidebarItem>
              );
            })}
          </SidebarSection>
        )}

        {inputComponents.length > 0 && (
          <SidebarDivider isCollapsed={isCollapsed} />
        )}

        {formComponents.length > 0 && (
          <SidebarSection
            title={`Form Components (${formComponents.length})`}
            defaultOpen={true}
            isCollapsed={isCollapsed}
          >
            {formComponents.map((config) => {
              return (
                <SidebarItem
                  key={config.id}
                  href={`/forms/${config.id}`}
                  current={isCurrentComponent("forms", config.id)}
                  isCollapsed={isCollapsed}
                >
                  <SidebarLabel isCollapsed={isCollapsed}>
                    {config.name}
                  </SidebarLabel>
                </SidebarItem>
              );
            })}
          </SidebarSection>
        )}

        {formComponents.length > 0 && (
          <SidebarDivider isCollapsed={isCollapsed} />
        )}

        {chartComponents.length > 0 && (
          <SidebarSection
            title={`Chart Components (${chartComponents.length})`}
            defaultOpen={true}
            isCollapsed={isCollapsed}
          >
            {chartComponents.map((config) => {
              return (
                <SidebarItem
                  key={config.id}
                  href={`/charts/${config.id}`}
                  current={isCurrentComponent("charts", config.id)}
                  isCollapsed={isCollapsed}
                >
                  <SidebarLabel isCollapsed={isCollapsed}>
                    {config.name}
                  </SidebarLabel>
                </SidebarItem>
              );
            })}
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
    </>
  );
}

function MainContent({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebar();

  return (
    <div
      className="flex flex-1 flex-col transition-all duration-200"
      style={{
        marginLeft: `${isCollapsed ? 3 : 16}rem`,
      }}
    >
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}

export function SidebarLayout({ children }: SidebarLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapsed = () => setIsCollapsed((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleCollapsed }}>
      <div className="flex h-screen bg-white dark:bg-zinc-900">
        {/* Sidebar */}
        <div className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:border-r lg:border-zinc-200 lg:bg-white lg:dark:border-zinc-800 lg:dark:bg-zinc-900 transition-all duration-200">
          <Sidebar
            isCollapsed={isCollapsed}
            onToggle={toggleCollapsed}
            showToggle={true}
          >
            <SidebarContent />
          </Sidebar>
        </div>

        {/* Main Content */}
        <MainContent>{children}</MainContent>
      </div>
    </SidebarContext.Provider>
  );
}
