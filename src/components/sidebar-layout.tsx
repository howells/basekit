// Sidebar Layout Component for Documentation

"use client";

import { COMPONENT_LIST } from "@/lib/component-registry";
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
              {COMPONENT_LIST.ui.map((componentId) => {
                const name = componentId
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ");
                return (
                  <SidebarItem key={componentId} href={`/ui/${componentId}`}>
                    <SidebarLabel>{name}</SidebarLabel>
                  </SidebarItem>
                );
              })}
            </SidebarSection>

            <SidebarDivider />

            <SidebarSection>
              <SidebarHeading>Input Components</SidebarHeading>
              {COMPONENT_LIST.inputs.map((componentId) => {
                const name = componentId
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ");
                return (
                  <SidebarItem
                    key={componentId}
                    href={`/inputs/${componentId}`}
                  >
                    <SidebarLabel>{name}</SidebarLabel>
                  </SidebarItem>
                );
              })}
            </SidebarSection>

            <SidebarDivider />

            <SidebarSection>
              <SidebarHeading>Form Components</SidebarHeading>
              {COMPONENT_LIST.forms.map((componentId) => {
                const name = componentId
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ");
                return (
                  <SidebarItem key={componentId} href={`/forms/${componentId}`}>
                    <SidebarLabel>{name}</SidebarLabel>
                  </SidebarItem>
                );
              })}
            </SidebarSection>

            <SidebarDivider />

            <SidebarSection>
              <SidebarHeading>Chart Components</SidebarHeading>
              {COMPONENT_LIST.charts.map((componentId) => {
                const name = componentId
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ");
                return (
                  <SidebarItem
                    key={componentId}
                    href={`/charts/${componentId}`}
                  >
                    <SidebarLabel>{name}</SidebarLabel>
                  </SidebarItem>
                );
              })}
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
