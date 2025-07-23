# Component Examples Migration Guide

This guide helps migrate components from the old string-based example system to the new render function system.

## Migration Steps for Each Component

1. **Create `examples.tsx` file** in the component directory
2. **Import necessary dependencies**:
   ```tsx
   import React from "react";
   import { ComponentName } from "./component-name";
   import { /* any icons needed */ } from "lucide-react";
   ```

3. **Create example functions** for each example in config:
   ```tsx
   export const defaultExample = () => (
     <ComponentName>Content</ComponentName>
   );
   ```

4. **Update `config.tsx`**:
   - Import jsxToString and example functions
   - Replace hardcoded code strings with jsxToString calls
   - Add render property to each example

## Example Pattern

### Before (in config.tsx):
```tsx
{
  id: "default",
  title: "Default",
  description: "Basic component",
  code: `<Component>Text</Component>`,
}
```

### After (in config.tsx):
```tsx
import { jsxToString } from "@/lib/jsx-to-string";
import { defaultExample } from "./examples";

{
  id: "default", 
  title: "Default",
  description: "Basic component",
  code: jsxToString(defaultExample()),
  render: defaultExample,
}
```

## Components to Migrate

The following components need migration (check off as completed):

- [x] Button
- [x] Card
- [ ] Accordion
- [ ] Alert Dialog
- [ ] Area Chart
- [ ] Avatar
- [ ] Badge
- [ ] Bar Chart
- [ ] Bar List
- [ ] Breadcrumbs
- [ ] Calendar
- [ ] Callout
- [ ] Carousel
- [ ] Category Bar
- [ ] Checkbox
- [ ] Checkbox Group
- [ ] Code Block
- [ ] Collapsible
- [ ] Combo Chart
- [ ] Combobox
- [ ] Command
- [ ] Context Menu
- [ ] Copy Button
- [ ] Date Picker
- [ ] Date Range Picker
- [ ] Description List
- [ ] Dialog
- [ ] Divider
- [ ] Donut Chart
- [ ] Drawer
- [ ] Empty State
- [ ] Field
- [ ] Fieldset
- [ ] Form
- [ ] Grid
- [ ] Heading
- [ ] Icon Select
- [ ] Input
- [ ] Inspector
- [ ] Label
- [ ] Line Chart
- [ ] Loader
- [ ] Menu
- [ ] Menu Bar
- [ ] Meter
- [ ] Navbar
- [ ] Navigation Menu
- [ ] Number Field
- [ ] Pagination
- [ ] Popover
- [ ] Preview Card
- [ ] Progress
- [ ] Progress Circle
- [ ] Radio
- [ ] Radio Card Group
- [ ] Radio Group
- [ ] Responsive Drawer
- [ ] Scroll Area
- [ ] Select
- [ ] Select Native
- [ ] Separator
- [ ] Sheet
- [ ] Sidebar
- [ ] Skeleton
- [ ] Slider
- [ ] Spark Chart
- [ ] Split Button
- [ ] Stack
- [ ] Stacked List
- [ ] Status Dot
- [ ] Subheading
- [ ] Switch
- [ ] Tab Navigation
- [ ] Table
- [ ] Tabs
- [ ] Tag
- [ ] Text
- [ ] Textarea
- [ ] Toast
- [ ] Toggle
- [ ] Toggle Group
- [ ] Toolbar
- [ ] Tooltip
- [ ] Touch Target
- [ ] Tracker

## Notes

- The jsx-to-string utility handles icon components automatically
- Complex examples with multiple components should be broken down
- The old renderSpecificExample functions in component-examples.tsx can be removed once all components are migrated