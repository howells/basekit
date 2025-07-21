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
import { componentConfig as cardConfig } from "@/components/ui/card/config";
import { componentConfig as carouselConfig } from "@/components/ui/carousel/config";
import { componentConfig as categoryBarConfig } from "@/components/ui/category-bar/config";
import { componentConfig as checkboxGroupConfig } from "@/components/ui/checkbox-group/config";
import { componentConfig as checkboxConfig } from "@/components/ui/checkbox/config";
import { componentConfig as codeBlockConfig } from "@/components/ui/code-block/config";
import { componentConfig as collapsibleConfig } from "@/components/ui/collapsible/config";
import { componentConfig as copyButtonConfig } from "@/components/ui/copy-button/config";
import { componentConfig as dividerConfig } from "@/components/ui/divider/config";
import { inputConfig } from "@/components/ui/input/config";
import { componentConfig as loaderConfig } from "@/components/ui/loader/config";
import { componentConfig as meterConfig } from "@/components/ui/meter/config";
import { componentConfig as separatorConfig } from "@/components/ui/separator/config";

// TODO: Update these components to use new ComponentConfig structure
import {
  ComponentConfig,
  ComponentConfigRegistry,
} from "./component-config-types";

// Placeholder configs for components not yet converted to three-file structure
const createPlaceholderConfig = (
  id: string,
  name: string,
  category: "ui" | "inputs" | "forms" | "charts" = "ui"
): ComponentConfig => ({
  id,
  name,
  description: `${name} component - conversion to new structure pending`,
  category,
  badge: category.toUpperCase(),
  importStatement: `// TODO: Convert to new structure`,
  componentId: `${name.replace(/\s+/g, "")}Example`,
  props: [],
  examples: [
    {
      id: "default",
      title: "Default",
      description: `Basic ${name.toLowerCase()} example`,
      code: `// TODO: Add example code`,
    },
  ],
});

// Placeholder configurations for components not yet converted to three-file structure
// (Only for components that don't already have imports above)
const comboboxConfig = createPlaceholderConfig("combobox", "Combobox");
const commandConfig = createPlaceholderConfig("command", "Command");
const contextMenuConfig = createPlaceholderConfig(
  "context-menu",
  "Context Menu"
);
const descriptionListConfig = createPlaceholderConfig(
  "description-list",
  "Description List"
);
const dialogConfig = createPlaceholderConfig("dialog", "Dialog");
const drawerConfig = createPlaceholderConfig("drawer", "Drawer");
const headingConfig = createPlaceholderConfig("heading", "Heading");
const labelConfig = createPlaceholderConfig("label", "Label");
const menuConfig = createPlaceholderConfig("menu", "Menu");
const menuBarConfig = createPlaceholderConfig("menu-bar", "Menu Bar");
const navbarConfig = createPlaceholderConfig("navbar", "Navbar");
const navigationMenuConfig = createPlaceholderConfig(
  "navigation-menu",
  "Navigation Menu"
);
const paginationConfig = createPlaceholderConfig("pagination", "Pagination");
const popoverConfig = createPlaceholderConfig("popover", "Popover");
const previewCardConfig = createPlaceholderConfig(
  "preview-card",
  "Preview Card"
);
const progressConfig = createPlaceholderConfig("progress", "Progress");
const progressCircleConfig = createPlaceholderConfig(
  "progress-circle",
  "Progress Circle"
);
const responsiveDrawerConfig = createPlaceholderConfig(
  "responsive-drawer",
  "Responsive Drawer"
);
const scrollAreaConfig = createPlaceholderConfig("scroll-area", "Scroll Area");
const sheetConfig = createPlaceholderConfig("sheet", "Sheet");
const sidebarConfig = createPlaceholderConfig("sidebar", "Sidebar");
const skeletonConfig = createPlaceholderConfig("skeleton", "Skeleton");
const tabNavigationConfig = createPlaceholderConfig(
  "tab-navigation",
  "Tab Navigation"
);
const tableConfig = createPlaceholderConfig("table", "Table");
const tabsConfig = createPlaceholderConfig("tabs", "Tabs");
const tagConfig = createPlaceholderConfig("tag", "Tag");
const textConfig = createPlaceholderConfig("text", "Text");
const toastConfig = createPlaceholderConfig("toast", "Toast");
const toggleConfig = createPlaceholderConfig("toggle", "Toggle");
const toggleGroupConfig = createPlaceholderConfig(
  "toggle-group",
  "Toggle Group"
);
const toolbarConfig = createPlaceholderConfig("toolbar", "Toolbar");
const tooltipConfig = createPlaceholderConfig("tooltip", "Tooltip");
const touchTargetConfig = createPlaceholderConfig(
  "touch-target",
  "Touch Target"
);
const trackerConfig = createPlaceholderConfig("tracker", "Tracker");

// Placeholder configurations for inputs category
const datePickerConfig = createPlaceholderConfig(
  "date-picker",
  "Date Picker",
  "inputs"
);
const dateRangePickerConfig = createPlaceholderConfig(
  "date-range-picker",
  "Date Range Picker",
  "inputs"
);

const numberFieldConfig = createPlaceholderConfig(
  "number-field",
  "Number Field",
  "inputs"
);
const radioConfig = createPlaceholderConfig("radio", "Radio", "inputs");
const radioCardGroupConfig = createPlaceholderConfig(
  "radio-card-group",
  "Radio Card Group",
  "inputs"
);
const radioGroupConfig = createPlaceholderConfig(
  "radio-group",
  "Radio Group",
  "inputs"
);
const selectConfig = createPlaceholderConfig("select", "Select", "inputs");
const selectNativeConfig = createPlaceholderConfig(
  "select-native",
  "Select Native",
  "inputs"
);
const sliderConfig = createPlaceholderConfig("slider", "Slider", "inputs");
const switchConfig = createPlaceholderConfig("switch", "Switch", "inputs");
const textareaConfig = createPlaceholderConfig(
  "textarea",
  "Textarea",
  "inputs"
);

// Placeholder configurations for forms category
const fieldConfig = createPlaceholderConfig("field", "Field", "forms");
const fieldsetConfig = createPlaceholderConfig("fieldset", "Fieldset", "forms");
const formConfig = createPlaceholderConfig("form", "Form", "forms");

// Placeholder configurations for charts category
const comboChartConfig = createPlaceholderConfig(
  "combo-chart",
  "Combo Chart",
  "charts"
);
const donutChartConfig = createPlaceholderConfig(
  "donut-chart",
  "Donut Chart",
  "charts"
);
const lineChartConfig = createPlaceholderConfig(
  "line-chart",
  "Line Chart",
  "charts"
);
const sparkChartConfig = createPlaceholderConfig(
  "spark-chart",
  "Spark Chart",
  "charts"
);

// Component registry with components using new config structure
export const componentRegistry: ComponentConfigRegistry = {
  // UI Components (with proper configs)
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
  card: cardConfig,
  carousel: carouselConfig,
  "category-bar": categoryBarConfig,
  checkbox: checkboxConfig,
  "checkbox-group": checkboxGroupConfig,
  "code-block": codeBlockConfig,
  collapsible: collapsibleConfig,
  "copy-button": copyButtonConfig,
  divider: dividerConfig,
  loader: loaderConfig,
  meter: meterConfig,
  separator: separatorConfig,

  // UI Components (placeholders)
  combobox: comboboxConfig,
  command: commandConfig,
  "context-menu": contextMenuConfig,
  "description-list": descriptionListConfig,
  dialog: dialogConfig,
  drawer: drawerConfig,
  heading: headingConfig,
  label: labelConfig,
  menu: menuConfig,
  "menu-bar": menuBarConfig,
  navbar: navbarConfig,
  "navigation-menu": navigationMenuConfig,
  pagination: paginationConfig,
  popover: popoverConfig,
  "preview-card": previewCardConfig,
  progress: progressConfig,
  "progress-circle": progressCircleConfig,
  "responsive-drawer": responsiveDrawerConfig,
  "scroll-area": scrollAreaConfig,
  sheet: sheetConfig,
  sidebar: sidebarConfig,
  skeleton: skeletonConfig,
  "tab-navigation": tabNavigationConfig,
  table: tableConfig,
  tabs: tabsConfig,
  tag: tagConfig,
  text: textConfig,
  toast: toastConfig,
  toggle: toggleConfig,
  "toggle-group": toggleGroupConfig,
  toolbar: toolbarConfig,
  tooltip: tooltipConfig,
  "touch-target": touchTargetConfig,
  tracker: trackerConfig,

  // Input Components (placeholders)
  "date-picker": datePickerConfig,
  "date-range-picker": dateRangePickerConfig,
  input: inputConfig,
  "number-field": numberFieldConfig,
  radio: radioConfig,
  "radio-card-group": radioCardGroupConfig,
  "radio-group": radioGroupConfig,
  select: selectConfig,
  "select-native": selectNativeConfig,
  slider: sliderConfig,
  switch: switchConfig,
  textarea: textareaConfig,

  // Form Components (placeholders)
  field: fieldConfig,
  fieldset: fieldsetConfig,
  form: formConfig,

  // Chart Components (placeholders)
  "combo-chart": comboChartConfig,
  "donut-chart": donutChartConfig,
  "line-chart": lineChartConfig,
  "spark-chart": sparkChartConfig,
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
