import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "navbar",
  name: "Navbar",
  description: "A navigation bar component with branding, sections, and items.",
  category: "navigation" as const,
  icon: "Navigation",

  installation: {
    npm: "@base-ui-components/react"
  },
  importStatement: `import {
  Navbar,
  NavbarDivider,
  NavbarItem,
  NavbarLabel,
  NavbarSection
} from "@/components/ui/navbar/navbar";`,
  componentId: "NavbarExample",
  props: [],
  examples: [
    {
      id: "default",
      title: "Basic Navbar",
      description: "A navigation bar component with branding, sections, and items.",
      code: `<Navbar>
  <NavbarSection>
    <NavbarLabel>Brand</NavbarLabel>
  </NavbarSection>
  <NavbarSection>
    <NavbarItem href="/">Home</NavbarItem>
    <NavbarItem href="/about">About</NavbarItem>
    <NavbarItem href="/services">Services</NavbarItem>
    <NavbarItem href="/contact">Contact</NavbarItem>
  </NavbarSection>
</Navbar>`
    },
    {
      id: "with-divider",
      title: "Navbar with Divider",
      description: "Navigation bar with sections separated by dividers",
      code: `<Navbar>
  <NavbarSection>
    <NavbarLabel>Brand</NavbarLabel>
  </NavbarSection>
  <NavbarDivider />
  <NavbarSection>
    <NavbarItem href="/">Home</NavbarItem>
    <NavbarItem href="/products">Products</NavbarItem>
  </NavbarSection>
  <NavbarDivider />
  <NavbarSection>
    <NavbarItem href="/account">Account</NavbarItem>
    <NavbarItem href="/settings">Settings</NavbarItem>
  </NavbarSection>
</Navbar>`
    },
  ]
};