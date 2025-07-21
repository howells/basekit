import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "calendar",
  name: "Calendar",
  description: "A date picker calendar component with support for single date and date range selection.",
  category: "ui" as const,
  badge: "UI",
  installation: {
    npm: "react-day-picker date-fns",
  },
  importStatement: `import { Calendar } from "@/components/ui/calendar";`,
  componentId: "CalendarExample",
  props: [
    {
      name: "mode",
      type: "select",
      options: ["single", "range"],
      defaultValue: "single",
      description: "The selection mode of the calendar.",
    },
    {
      name: "numberOfMonths",
      type: "number",
      defaultValue: 1,
      description: "Number of months to display at once.",
    },
    {
      name: "enableYearNavigation",
      type: "boolean",
      defaultValue: false,
      description: "Enable year navigation buttons.",
    },
    {
      name: "disableNavigation",
      type: "boolean",
      defaultValue: false,
      description: "Disable all navigation controls.",
    },
    {
      name: "weekStartsOn",
      type: "select",
      options: ["0", "1", "2", "3", "4", "5", "6"],
      defaultValue: "1",
      description: "Which day of the week to start on (0 = Sunday, 1 = Monday, etc.).",
    },
    {
      name: "selected",
      type: "date",
      description: "The selected date (for single mode).",
    },
    {
      name: "defaultSelected",
      type: "date",
      description: "Default selected date (for single mode).",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic calendar with single date selection.",
      code: `<Calendar />`,
    },
    {
      id: "range-mode",
      title: "Range Selection",
      description: "Calendar with date range selection.",
      code: `<Calendar mode="range" />`,
    },
    {
      id: "multiple-months",
      title: "Multiple Months",
      description: "Calendar showing multiple months at once.",
      code: `<Calendar numberOfMonths={2} />`,
    },
    {
      id: "with-year-navigation",
      title: "With Year Navigation",
      description: "Calendar with year navigation buttons.",
      code: `<Calendar enableYearNavigation />`,
    },
    {
      id: "week-starts-sunday",
      title: "Week Starts Sunday",
      description: "Calendar starting week on Sunday.",
      code: `<Calendar weekStartsOn={0} />`,
    },
    {
      id: "disabled-navigation",
      title: "Disabled Navigation",
      description: "Calendar with navigation disabled.",
      code: `<Calendar disableNavigation />`,
    },
    {
      id: "with-preselected",
      title: "With Pre-selected Date",
      description: "Calendar with a pre-selected date.",
      code: `<Calendar defaultSelected={new Date()} />`,
    },
    {
      id: "range-with-multiple-months",
      title: "Range with Multiple Months",
      description: "Range selection with multiple months displayed.",
      code: `<Calendar mode="range" numberOfMonths={2} />`,
    },
  ],
};