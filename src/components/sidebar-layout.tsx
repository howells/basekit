// Sidebar Layout Component for Documentation

"use client";

import type { ComponentConfig } from "@/lib/component-config-types";
import {
  COMPONENT_LIST,
  getComponentsByCategory,
} from "@/lib/component-registry";
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

  // Category display names and order
  const categoryConfig = [
    { key: "text", name: "Text" },
    { key: "layout", name: "Layout" },
    { key: "navigation", name: "Navigation" },
    { key: "feedback", name: "Feedback" },
    { key: "overlay", name: "Overlay" },
    { key: "data", name: "Data" },
    { key: "media", name: "Media" },
    { key: "utility", name: "Utility" },
    { key: "inputs", name: "Inputs" },
    { key: "forms", name: "Forms" },
    { key: "charts", name: "Charts" },
  ] as const;

  // Check if current path matches a component using segments
  const isCurrentComponent = (category: string, componentId: string) => {
    return (
      segments.length >= 2 &&
      segments[0] === category &&
      segments[1] === componentId
    );
  };

  // Helper function to render a category section
  const renderCategorySection = (
    categoryName: string,
    categoryPath: string,
    components: ComponentConfig[],
    showDivider: boolean = true
  ) => {
    if (components.length === 0) return null;

    return (
      <>
        <SidebarSection
          title={categoryName}
          href={`/${categoryPath}`}
          defaultOpen={true}
          isCollapsed={isCollapsed}
        >
          {components.map((config) => (
            <SidebarItem
              key={config.id}
              href={`/${categoryPath}/${config.id}`}
              current={isCurrentComponent(categoryPath, config.id)}
              isCollapsed={isCollapsed}
            >
              <SidebarLabel isCollapsed={isCollapsed}>
                {config.name}
              </SidebarLabel>
            </SidebarItem>
          ))}
        </SidebarSection>
        {showDivider && components.length > 0 && (
          <SidebarDivider isCollapsed={isCollapsed} />
        )}
      </>
    );
  };

  return (
    <>
      <SidebarHeader isCollapsed={isCollapsed}>
        <div className="relative w-full h-full flex items-center">
          {/* Logo */}
          <div
            className={clsx(
              "absolute top-4.5",
              isCollapsed ? "left-2" : "left-3"
            )}
          >
            <Pilcrow
              className="size-7 text-zinc-600 dark:text-zinc-400 scale-x-[-1]"
              strokeWidth={1.5}
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

        {categoryConfig.map((category, index) => {
          const components = getComponentsByCategory(
            category.key as keyof typeof COMPONENT_LIST
          ).sort((a, b) => a.name.localeCompare(b.name));
          const isLastCategory = index === categoryConfig.length - 1;
          return (
            <React.Fragment key={category.key}>
              {renderCategorySection(
                category.name,
                category.key,
                components,
                !isLastCategory
              )}
            </React.Fragment>
          );
        })}
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
