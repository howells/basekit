import { ComponentConfig } from "@/lib/component-config-types";
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from "./sidebar";

export const componentConfig: ComponentConfig = {
  id: "sidebar",
  name: "Sidebar",
  description:
    "A navigation sidebar component with sections, items, and animated indicators.",
  category: "ui",
  importStatement: 'import { Sidebar } from "@/components/ui/sidebar"',
  componentId: "Sidebar",
  props: [],
  examples: [
    {
      id: "basic",
      title: "Basic Sidebar",
      description: "A simple sidebar with navigation items",
      code: `<Sidebar>
  <SidebarHeader>
    <div className="text-lg font-semibold">My App</div>
  </SidebarHeader>
  <SidebarBody>
    <SidebarSection>
      <SidebarItem href="#dashboard" current>
        <SidebarLabel>Dashboard</SidebarLabel>
      </SidebarItem>
      <SidebarItem href="#projects">
        <SidebarLabel>Projects</SidebarLabel>
      </SidebarItem>
      <SidebarItem href="#team">
        <SidebarLabel>Team</SidebarLabel>
      </SidebarItem>
    </SidebarSection>
  </SidebarBody>
</Sidebar>`,
    },
    {
      id: "with-sections",
      title: "Sidebar with Sections and Footer",
      description: "A sidebar with multiple sections and a footer",
      code: `<Sidebar>
  <SidebarHeader>
    <div className="text-lg font-semibold">Workspace</div>
    <div className="text-sm text-zinc-500">Team Alpha</div>
  </SidebarHeader>
  <SidebarBody>
    <SidebarSection>
      <SidebarItem href="#home">
        <SidebarLabel>Home</SidebarLabel>
      </SidebarItem>
      <SidebarItem href="#analytics" current>
        <SidebarLabel>Analytics</SidebarLabel>
      </SidebarItem>
    </SidebarSection>
    <SidebarSection>
      <SidebarItem href="#settings">
        <SidebarLabel>Settings</SidebarLabel>
      </SidebarItem>
      <SidebarItem href="#help">
        <SidebarLabel>Help</SidebarLabel>
      </SidebarItem>
    </SidebarSection>
  </SidebarBody>
  <SidebarFooter>
    <SidebarSection>
      <SidebarItem href="#profile">
        <SidebarLabel>John Doe</SidebarLabel>
      </SidebarItem>
    </SidebarSection>
  </SidebarFooter>
</Sidebar>`,
    },
  ],
};
