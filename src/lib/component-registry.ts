import { accordionConfig } from "@/components/ui/accordion";
import { buttonConfig } from "@/components/ui/button";
import { ComponentConfig, ComponentConfigRegistry } from "./component-configs";

// Component registry with all components
// This will be populated dynamically or with inline configs
export const componentRegistry: ComponentConfigRegistry = {
  accordion: accordionConfig,
  button: buttonConfig,
};

// Helper to register a component config
export function registerComponent(config: ComponentConfig) {
  componentRegistry[config.id] = config;
}

// Helper functions
export function getComponentConfig(id: string) {
  return componentRegistry[id];
}

export function getComponentsByCategory(category: string) {
  return Object.values(componentRegistry).filter(
    (config) => config.category === category
  );
}

export function getAllComponents() {
  return Object.values(componentRegistry);
}

// List of all components by category for reference
export const COMPONENT_LIST = {
  ui: [
    "accordion",
    "alert-dialog",
    "avatar",
    "badge",
    "breadcrumbs",
    "button",
    "calendar",
    "callout",
    "card",
    "carousel",
    "code-block",
    "collapsible",
    "combobox",
    "command",
    "context-menu",
    "description-list",
    "dialog",
    "divider",
    "drawer",
    "heading",
    "label",
    "menu",
    "menu-bar",
    "meter",
    "navbar",
    "navigation-menu",
    "pagination",
    "popover",
    "preview-card",
    "progress",
    "progress-circle",
    "responsive-drawer",
    "scroll-area",
    "separator",
    "sheet",
    "sidebar",
    "skeleton",
    "tab-navigation",
    "table",
    "tabs",
    "tag",
    "text",
    "toast",
    "toggle",
    "toggle-group",
    "toolbar",
    "tooltip",
    "touch-target",
    "tracker",
  ],
  inputs: [
    "checkbox",
    "checkbox-group",
    "date-picker",
    "date-range-picker",
    "input",
    "number-field",
    "radio",
    "radio-card-group",
    "radio-group",
    "select",
    "select-native",
    "slider",
    "switch",
    "textarea",
  ],
  forms: ["field", "fieldset", "form"],
  charts: [
    "area-chart",
    "bar-chart",
    "bar-list",
    "category-bar",
    "combo-chart",
    "donut-chart",
    "line-chart",
    "spark-chart",
  ],
};

// Type for component IDs
export type ComponentId =
  | (typeof COMPONENT_LIST.ui)[number]
  | (typeof COMPONENT_LIST.inputs)[number]
  | (typeof COMPONENT_LIST.forms)[number]
  | (typeof COMPONENT_LIST.charts)[number];
