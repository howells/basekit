// Sidebar Layout Component for Documentation

"use client";

import { getComponentsByCategory } from "@/lib/component-registry";
import { useWindowSize } from "@uidotdev/usehooks";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { Pilcrow } from "lucide-react";
import { usePathname, useSelectedLayoutSegments } from "next/navigation";
import React, { createContext, useContext, useState } from "react";
import { ComponentSearch } from "./component-search";
import { Badge } from "./ui/badge/badge";
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
  const { isCollapsed, toggleCollapsed } = useSidebar();

  // Get components by category from the registry
  const allUiComponents = getComponentsByCategory("ui").sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const allInputComponents = getComponentsByCategory("inputs").sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const allFormComponents = getComponentsByCategory("forms").sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const allChartComponents = getComponentsByCategory("charts").sort((a, b) =>
    a.name.localeCompare(b.name)
  );

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
        <div className="relative w-full h-full flex items-center">
          {/* Logo */}
          <div
            className={clsx(
              "absolute top-2",
              isCollapsed ? "left-2" : "left-4"
            )}
          >
            <Pilcrow className="h-6 w-6 text-zinc-600 dark:text-zinc-400 scale-x-[-1]" />
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

        {allUiComponents.length > 0 && (
          <SidebarSection
            title={
              <div className="flex items-center gap-2">
                <span>UI Components</span>
                <Badge variant="neutral" size="sm">
                  {allUiComponents.length}
                </Badge>
              </div>
            }
            href="/ui"
            defaultOpen={true}
            isCollapsed={isCollapsed}
          >
            {allUiComponents.map((config) => {
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

        {allUiComponents.length > 0 && (
          <SidebarDivider isCollapsed={isCollapsed} />
        )}

        {allInputComponents.length > 0 && (
          <SidebarSection
            title={
              (
                <div className="flex items-center gap-2">
                  <span>Input Components</span>
                  <Badge variant="neutral" size="sm">
                    {allInputComponents.length}
                  </Badge>
                </div>
              ) as any
            }
            href="/inputs"
            defaultOpen={true}
            isCollapsed={isCollapsed}
          >
            {allInputComponents.map((config) => {
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

        {allInputComponents.length > 0 && (
          <SidebarDivider isCollapsed={isCollapsed} />
        )}

        {allFormComponents.length > 0 && (
          <SidebarSection
            title={
              (
                <div className="flex items-center gap-2">
                  <span>Form Components</span>
                  <Badge variant="neutral" size="sm">
                    {allFormComponents.length}
                  </Badge>
                </div>
              ) as any
            }
            href="/forms"
            defaultOpen={true}
            isCollapsed={isCollapsed}
          >
            {allFormComponents.map((config) => {
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

        {allFormComponents.length > 0 && (
          <SidebarDivider isCollapsed={isCollapsed} />
        )}

        {allChartComponents.length > 0 && (
          <SidebarSection
            title={
              (
                <div className="flex items-center gap-2">
                  <span>Chart Components</span>
                  <Badge variant="neutral" size="sm">
                    {allChartComponents.length}
                  </Badge>
                </div>
              ) as any
            }
            href="/charts"
            defaultOpen={true}
            isCollapsed={isCollapsed}
          >
            {allChartComponents.map((config) => {
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
      </SidebarBody>
    </>
  );
}

function MainContent({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebar();
  const { width } = useWindowSize();
  const isMobile = width !== null && width < 1024;

  return (
    <motion.div
      className="flex-1 flex flex-col"
      initial={false}
      animate={{
        "--sidebar-width": isCollapsed ? "3rem" : "16rem",
      }}
      transition={{
        duration: 0.3,
        ease: [0.32, 0.72, 0, 1], // Custom easing for smoother animation
      }}
      style={{
        marginLeft: isMobile ? "0" : "var(--sidebar-width)",
      }}
    >
      <div className="flex flex-col min-h-0 flex-1">
        {/* Header matching sidebar header height */}
        <header className="h-16 px-6 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-end">
          <ComponentSearch />
        </header>
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </motion.div>
  );
}

export function SidebarLayout({ children }: SidebarLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleCollapsed }}>
      <motion.div
        className="flex h-screen bg-white dark:bg-zinc-900"
        initial={false}
        animate={{
          "--sidebar-width": isCollapsed ? "3rem" : "16rem",
        }}
        transition={{
          duration: 0.3,
          ease: [0.32, 0.72, 0, 1],
        }}
      >
        {/* Sidebar */}
        <div className="hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:bg-zinc-100 lg:dark:border-zinc-800 lg:dark:bg-zinc-900 transition-all duration-200">
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
      </motion.div>
    </SidebarContext.Provider>
  );
}
