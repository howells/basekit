"use client";

import { 
  Sidebar,
  SidebarHeader,
  SidebarBody,
  SidebarFooter,
  SidebarSection,
  SidebarItem,
  SidebarLabel
} from "./sidebar";

export function Example() {
  return (
    <div className="h-96 w-64 border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden bg-white dark:bg-zinc-900">
      <Sidebar>
        <SidebarHeader>
          <div className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            StencilUI
          </div>
          <div className="text-sm text-zinc-500 dark:text-zinc-400">
            Component Library
          </div>
        </SidebarHeader>
        
        <SidebarBody>
          <SidebarSection>
            <SidebarItem href="#overview" current>
              <SidebarLabel>Overview</SidebarLabel>
            </SidebarItem>
            <SidebarItem href="#components">
              <SidebarLabel>Components</SidebarLabel>
            </SidebarItem>
            <SidebarItem href="#examples">
              <SidebarLabel>Examples</SidebarLabel>
            </SidebarItem>
          </SidebarSection>
          
          <SidebarSection>
            <div className="px-2 py-1 text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              Resources
            </div>
            <SidebarItem href="#documentation">
              <SidebarLabel>Documentation</SidebarLabel>
            </SidebarItem>
            <SidebarItem href="#themes">
              <SidebarLabel>Themes</SidebarLabel>
            </SidebarItem>
            <SidebarItem href="#changelog">
              <SidebarLabel>Changelog</SidebarLabel>
            </SidebarItem>
          </SidebarSection>
          
          <SidebarSection>
            <div className="px-2 py-1 text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              Tools
            </div>
            <SidebarItem href="#playground">
              <SidebarLabel>Playground</SidebarLabel>
            </SidebarItem>
            <SidebarItem href="#inspector">
              <SidebarLabel>Inspector</SidebarLabel>
            </SidebarItem>
          </SidebarSection>
        </SidebarBody>
        
        <SidebarFooter>
          <SidebarSection>
            <SidebarItem href="#account">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs text-white font-medium">
                  U
                </div>
                <SidebarLabel>User Account</SidebarLabel>
              </div>
            </SidebarItem>
          </SidebarSection>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
}