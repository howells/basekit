"use client";

import {
  Navbar,
  NavbarDivider,
  NavbarSection,
  NavbarSpacer,
  NavbarItem,
  NavbarLabel,
} from "./navbar";

export function Example() {
  return (
    <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
      <Navbar className="px-4 py-2 bg-white dark:bg-zinc-900">
        <NavbarSection>
          <NavbarItem href="#" current>
            <NavbarLabel>Dashboard</NavbarLabel>
          </NavbarItem>
          <NavbarItem href="#">
            <NavbarLabel>Projects</NavbarLabel>
          </NavbarItem>
          <NavbarItem href="#">
            <NavbarLabel>Team</NavbarLabel>
          </NavbarItem>
        </NavbarSection>
        <NavbarDivider />
        <NavbarSection>
          <NavbarItem href="#">
            <NavbarLabel>Analytics</NavbarLabel>
          </NavbarItem>
          <NavbarItem href="#">
            <NavbarLabel>Reports</NavbarLabel>
          </NavbarItem>
        </NavbarSection>
        <NavbarSpacer />
        <NavbarSection>
          <NavbarItem href="#">
            <NavbarLabel>Settings</NavbarLabel>
          </NavbarItem>
          <NavbarItem href="#">
            <NavbarLabel>Profile</NavbarLabel>
          </NavbarItem>
        </NavbarSection>
      </Navbar>
    </div>
  );
}