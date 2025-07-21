import { ComponentConfig } from "@/lib/component-config-types";
import {
  Navbar,
  NavbarDivider,
  NavbarItem,
  NavbarLabel,
  NavbarSection,
} from "./navbar";

export const componentConfig: ComponentConfig = {
  id: "navbar",
  name: "Navbar",
  description: "A navigation bar component with branding, sections, and items.",
  category: "ui",
  importStatement: 'import { Navbar } from "@/components/ui/navbar"',
  componentId: "Navbar",
  props: [],
  examples: [
    {
      id: "basic",
      title: "Basic Navbar",
      description: "A simple navigation bar",
      code: `<Navbar>
  <NavbarSection>
    <NavbarItem href="#home">
      <NavbarLabel>Home</NavbarLabel>
    </NavbarItem>
    <NavbarItem href="#about">
      <NavbarLabel>About</NavbarLabel>
    </NavbarItem>
    <NavbarItem href="#contact">
      <NavbarLabel>Contact</NavbarLabel>
    </NavbarItem>
  </NavbarSection>
</Navbar>`,
    },
    {
      id: "with-divider",
      title: "Navbar with Divider",
      description: "Navigation bar with sections separated by dividers",
      code: `<Navbar>
  <NavbarSection>
    <NavbarItem href="#home">
      <NavbarLabel>Home</NavbarLabel>
    </NavbarItem>
    <NavbarItem href="#about">
      <NavbarLabel>About</NavbarLabel>
    </NavbarItem>
  </NavbarSection>
  <NavbarDivider />
  <NavbarSection>
    <NavbarItem href="#login">
      <NavbarLabel>Login</NavbarLabel>
    </NavbarItem>
    <NavbarItem href="#signup">
      <NavbarLabel>Sign Up</NavbarLabel>
    </NavbarItem>
  </NavbarSection>
</Navbar>`,
    },
  ],
};
