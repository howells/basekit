import { componentConfig as accordionConfig } from "@/components/ui/accordion/config";
import { componentConfig as alertDialogConfig } from "@/components/ui/alert-dialog/config";
import { componentConfig as areaChartConfig } from "@/components/ui/area-chart/config";
import { componentConfig as avatarConfig } from "@/components/ui/avatar/config";
import { componentConfig as badgeConfig } from "@/components/ui/badge/config";
import { componentConfig as barChartConfig } from "@/components/ui/bar-chart/config";
import { componentConfig as barListConfig } from "@/components/ui/bar-list/config";
import { componentConfig as breadcrumbsConfig } from "@/components/ui/breadcrumbs/config";
import { componentConfig as buttonConfig } from "@/components/ui/button/config";
import { componentConfig as calendarConfig } from "@/components/ui/calendar/config";
import { componentConfig as calloutConfig } from "@/components/ui/callout/config";
// TODO: Update these components to use new ComponentConfig structure
import {
  ComponentConfig,
  ComponentConfigRegistry,
} from "./component-config-types";

// Component registry with components using new config structure
export const componentRegistry: ComponentConfigRegistry = {
  accordion: accordionConfig,
  "alert-dialog": alertDialogConfig,
  "area-chart": areaChartConfig,
  avatar: avatarConfig,
  badge: badgeConfig,
  "bar-chart": barChartConfig,
  "bar-list": barListConfig,
  breadcrumbs: breadcrumbsConfig,
  button: buttonConfig,
  calendar: calendarConfig,
  callout: calloutConfig,
  // TODO: Re-add these after converting to new config structure
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
