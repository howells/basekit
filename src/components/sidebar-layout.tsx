// Sidebar Layout Component for Documentation

"use client";

import React from "react";
import { Heading } from "./ui/heading";
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
  return (
    <div className="flex h-screen bg-white dark:bg-zinc-900">
      {/* Sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:border-r lg:border-zinc-200 lg:bg-white lg:dark:border-zinc-800 lg:dark:bg-zinc-900">
        <Sidebar>
          <SidebarHeader>
            <Heading level={2} className="text-lg">
              Stencil UI
            </Heading>
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              <SidebarHeading>Getting Started</SidebarHeading>
              <SidebarItem href="/">
                <SidebarLabel>Overview</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/installation">
                <SidebarLabel>Installation</SidebarLabel>
              </SidebarItem>
            </SidebarSection>

            <SidebarDivider />

            <SidebarSection>
              <SidebarHeading>UI Components</SidebarHeading>
              <SidebarItem href="/ui/accordion" current>
                <SidebarLabel>Accordion</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/ui/badge">
                <SidebarLabel>Badge</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/ui/button">
                <SidebarLabel>Button</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/ui/card">
                <SidebarLabel>Card</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/ui/dialog">
                <SidebarLabel>Dialog</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/ui/input">
                <SidebarLabel>Input</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/ui/select">
                <SidebarLabel>Select</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/ui/switch">
                <SidebarLabel>Switch</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/ui/tabs">
                <SidebarLabel>Tabs</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/ui/tooltip">
                <SidebarLabel>Tooltip</SidebarLabel>
              </SidebarItem>
            </SidebarSection>

            <SidebarDivider />

            <SidebarSection>
              <SidebarHeading>Charts</SidebarHeading>
              <SidebarItem href="/charts/area-chart">
                <SidebarLabel>Area Chart</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/charts/bar-chart">
                <SidebarLabel>Bar Chart</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/charts/line-chart">
                <SidebarLabel>Line Chart</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/charts/donut-chart">
                <SidebarLabel>Donut Chart</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
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
