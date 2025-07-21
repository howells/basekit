import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "date-range-picker",
  name: "Date Range Picker",
  description:
    "A comprehensive date range picker component with time selection, presets, and dual month view built on React Aria.",
  category: "inputs" as const,
  badge: "Input",
  importStatement: `import { DateRangePicker } from "@/components/ui/date-range-picker";`,
  componentId: "DateRangePickerExample",
  props: [
    {
      name: "placeholder",
      type: "string",
      defaultValue: "Select date range",
      description: "Placeholder text for the date range picker.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
      description: "Whether the date range picker is disabled.",
    },
    {
      name: "hasError",
      type: "boolean",
      defaultValue: false,
      description: "Whether the date range picker has an error state.",
    },
    {
      name: "showTimePicker",
      type: "boolean",
      defaultValue: false,
      description:
        "Whether to show time selection controls for start and end dates.",
    },
    {
      name: "enableYearNavigation",
      type: "boolean",
      defaultValue: false,
      description: "Whether to enable year navigation in the calendar.",
    },
    {
      name: "align",
      type: "select",
      options: ["start", "center", "end"],
      defaultValue: "center",
      description: "Alignment of the popover relative to the trigger.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic date range picker for selecting start and end dates.",
      code: `<DateRangePicker placeholder="Select date range" />`,
    },
    {
      id: "with-time",
      title: "With Time Picker",
      description:
        "Date range picker with time selection for both start and end dates.",
      code: `<DateRangePicker
  placeholder="Select date range with time"
  showTimePicker
/>`,
    },
    {
      id: "with-presets",
      title: "With Presets",
      description: "Date range picker with common range presets.",
      code: `const today = new Date();
const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000);
const nextWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

const presets = [
  {
    label: "Today",
    dateRange: { from: today, to: today },
  },
  {
    label: "Tomorrow",
    dateRange: { from: tomorrow, to: tomorrow },
  },
  {
    label: "This Week",
    dateRange: { from: today, to: nextWeek },
  },
];

<DateRangePicker
  placeholder="Select or choose preset"
  presets={presets}
/>`,
    },
    {
      id: "disabled",
      title: "Disabled",
      description: "Disabled date range picker.",
      code: `<DateRangePicker
  placeholder="Cannot select dates"
  disabled
/>`,
    },
    {
      id: "error-state",
      title: "Error State",
      description: "Date range picker with error styling.",
      code: `<DateRangePicker
  placeholder="Date range required"
  hasError
/>`,
    },
    {
      id: "controlled",
      title: "Controlled",
      description: "Controlled date range picker with external state.",
      code: `const [dateRange, setDateRange] = useState<{from: Date | undefined, to?: Date | undefined} | undefined>();

<div className="space-y-2">
  <DateRangePicker
    placeholder="Pick date range"
    value={dateRange}
    onChange={setDateRange}
  />
  {dateRange?.from && (
    <p className="text-sm text-zinc-600">
      Range: {dateRange.from.toLocaleDateString()}
      {dateRange.to && \` - \${dateRange.to.toLocaleDateString()}\`}
    </p>
  )}
</div>`,
    },
  ],
};
