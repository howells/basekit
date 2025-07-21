import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "grid",
  name: "Grid",
  description:
    "A sophisticated grid layout component with visual guides, responsive columns/rows, cell overlays, and guide clipping features. Perfect for complex layouts and design systems.",
  category: "ui" as const,
  badge: "Layout",
  importStatement: `import { Grid, GridCell, GridAuto } from "@/components/ui/grid";`,
  componentId: "GridExample",
  props: [
    {
      name: "columns",
      type: "number",
      defaultValue: 3,
      min: 1,
      max: 12,
      description:
        "Number of columns. Can be responsive object: { sm: 2, lg: 6 }",
    },
    {
      name: "rows",
      type: "number",
      defaultValue: 3,
      min: 1,
      max: 10,
      description:
        "Number of rows. Can be responsive object. Auto if not specified.",
    },
    {
      name: "gap",
      type: "number",
      defaultValue: 4,
      min: 0,
      max: 12,
      description: "Gap between grid items using Tailwind spacing scale.",
    },
    {
      name: "showColumnGuides",
      type: "boolean",
      defaultValue: true,
      description: "Whether to show vertical column guide lines.",
    },
    {
      name: "showRowGuides",
      type: "boolean",
      defaultValue: true,
      description: "Whether to show horizontal row guide lines.",
    },
    {
      name: "useAutoGrid",
      type: "boolean",
      defaultValue: false,
      description: "Use GridAuto component for automatically numbered cells.",
    },
    {
      name: "cellCount",
      type: "number",
      defaultValue: 9,
      min: 1,
      max: 50,
      description:
        "Number of cells to generate (when using auto grid or basic grid).",
    },
    {
      name: "solidCells",
      type: "boolean",
      defaultValue: false,
      description:
        "Whether cells should have solid backgrounds (occludes guides).",
    },
    {
      name: "showSpanning",
      type: "boolean",
      defaultValue: false,
      description: "Show example with cells that span multiple columns/rows.",
    },
    {
      name: "showOverlay",
      type: "boolean",
      defaultValue: false,
      description:
        "Show example with overlay cells that have elevated styling.",
    },
  ],
  examples: [
    {
      id: "basic",
      title: "Basic Grid",
      description: "Simple 6-column grid with visual guides.",
      code: `<Grid columns={6} gap={4}>
  <GridCell>1</GridCell>
  <GridCell>2</GridCell>
  <GridCell>3</GridCell>
  <GridCell>4</GridCell>
  <GridCell>5</GridCell>
  <GridCell>6</GridCell>
</Grid>`,
    },
    {
      id: "responsive",
      title: "Responsive Grid",
      description: "Grid that adapts columns at different breakpoints.",
      code: `<Grid
  columns={{ sm: 2, md: 4, lg: 6 }}
  gap={4}
>
  <GridCell>1</GridCell>
  <GridCell>2</GridCell>
  <GridCell>3</GridCell>
  <GridCell>4</GridCell>
  <GridCell>5</GridCell>
  <GridCell>6</GridCell>
  <GridCell>7</GridCell>
  <GridCell>8</GridCell>
</Grid>`,
    },
    {
      id: "spanning-cells",
      title: "Spanning Cells",
      description: "Cells that span multiple columns or rows.",
      code: `<Grid columns={6} rows={3} gap={4}>
  <GridCell colSpan={2}>Span 2 cols</GridCell>
  <GridCell>3</GridCell>
  <GridCell>4</GridCell>
  <GridCell rowSpan={2}>Span 2 rows</GridCell>
  <GridCell>6</GridCell>

  <GridCell>7</GridCell>
  <GridCell colSpan={3}>Span 3 cols</GridCell>

  <GridCell colStart={2} colSpan={2}>Start col 2</GridCell>
  <GridCell>Last</GridCell>
</Grid>`,
    },
    {
      id: "solid-cells",
      title: "Solid Cells",
      description: "Cells with solid backgrounds that occlude grid guides.",
      code: `<Grid columns={4} gap={4}>
  <GridCell solid>Solid 1</GridCell>
  <GridCell>Regular 2</GridCell>
  <GridCell solid>Solid 3</GridCell>
  <GridCell>Regular 4</GridCell>

  <GridCell>Regular 5</GridCell>
  <GridCell solid colSpan={2}>Solid Spanning</GridCell>
  <GridCell>Regular 8</GridCell>
</Grid>`,
    },
    {
      id: "overlay-cells",
      title: "Overlay Cells",
      description: "Cells that overlay other cells with elevated styling.",
      code: `<Grid columns={4} gap={4}>
  <GridCell>1</GridCell>
  <GridCell overlay>Overlay</GridCell>
  <GridCell>3</GridCell>
  <GridCell>4</GridCell>

  <GridCell>5</GridCell>
  <GridCell>6</GridCell>
  <GridCell overlay solid colSpan={2}>
    Overlay + Solid
  </GridCell>
</Grid>`,
    },
    {
      id: "guide-control",
      title: "Guide Control",
      description: "Control visibility of column and row guides.",
      code: `<div className="space-y-6">
  <Grid columns={4} showColumnGuides={true} showRowGuides={false} gap={4}>
    <GridCell>Columns only</GridCell>
    <GridCell>2</GridCell>
    <GridCell>3</GridCell>
    <GridCell>4</GridCell>
  </Grid>

  <Grid columns={4} showColumnGuides={false} showRowGuides={true} gap={4}>
    <GridCell>Rows only</GridCell>
    <GridCell>2</GridCell>
    <GridCell>3</GridCell>
    <GridCell>4</GridCell>
  </Grid>

  <Grid columns={4} showColumnGuides={false} showRowGuides={false} gap={4}>
    <GridCell solid>No guides</GridCell>
    <GridCell solid>2</GridCell>
    <GridCell solid>3</GridCell>
    <GridCell solid>4</GridCell>
  </Grid>
</div>`,
    },
    {
      id: "auto-grid",
      title: "Auto Grid",
      description: "Automatically generate numbered cells with GridAuto.",
      code: `<GridAuto
  columns={5}
  cellCount={10}
  gap={4}
  solidCells={true}
/>`,
    },
    {
      id: "custom-layout",
      title: "Custom Layout",
      description: "Complex grid layout with mixed cell types.",
      code: `<Grid columns={6} rows={4} gap={3}>
  {/* Header */}
  <GridCell solid colSpan={6} className="bg-blue-100 dark:bg-blue-900">
    Header
  </GridCell>

  {/* Sidebar */}
  <GridCell solid rowSpan={2} className="bg-green-100 dark:bg-green-900">
    Sidebar
  </GridCell>

  {/* Main content */}
  <GridCell overlay colSpan={4} className="bg-white dark:bg-zinc-800">
    Main Content
  </GridCell>

  <GridCell solid className="bg-purple-100 dark:bg-purple-900">
    Widget
  </GridCell>

  {/* Cards */}
  <GridCell colSpan={2}>Card 1</GridCell>
  <GridCell colSpan={2}>Card 2</GridCell>
  <GridCell>Extra</GridCell>

  {/* Footer */}
  <GridCell solid colSpan={6} className="bg-gray-100 dark:bg-gray-800">
    Footer
  </GridCell>
</Grid>`,
    },
    {
      id: "dashboard",
      title: "Dashboard Layout",
      description: "Real-world dashboard layout example.",
      code: `<Grid columns={12} rows={6} gap={4} className="h-[400px]">
  {/* Top metrics */}
  <GridCell solid colSpan={3} className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800">
    <div className="text-center">
      <div className="text-2xl font-bold">1,234</div>
      <div className="text-xs opacity-75">Users</div>
    </div>
  </GridCell>
  <GridCell solid colSpan={3} className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900 dark:to-green-800">
    <div className="text-center">
      <div className="text-2xl font-bold">$12.3K</div>
      <div className="text-xs opacity-75">Revenue</div>
    </div>
  </GridCell>
  <GridCell solid colSpan={3} className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800">
    <div className="text-center">
      <div className="text-2xl font-bold">98.5%</div>
      <div className="text-xs opacity-75">Uptime</div>
    </div>
  </GridCell>
  <GridCell solid colSpan={3} className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800">
    <div className="text-center">
      <div className="text-2xl font-bold">156</div>
      <div className="text-xs opacity-75">Orders</div>
    </div>
  </GridCell>

  {/* Main chart */}
  <GridCell overlay colSpan={8} rowSpan={3} className="bg-white dark:bg-zinc-900">
    Analytics Chart
  </GridCell>

  {/* Side widgets */}
  <GridCell solid colSpan={4} rowSpan={2} className="bg-gray-50 dark:bg-gray-800">
    Recent Activity
  </GridCell>
  <GridCell solid colSpan={4} className="bg-yellow-50 dark:bg-yellow-900">
    Notifications
  </GridCell>

  {/* Bottom section */}
  <GridCell colSpan={4}>Tasks</GridCell>
  <GridCell colSpan={4}>Performance</GridCell>
  <GridCell colSpan={4}>Settings</GridCell>
</Grid>`,
    },
  ],
};
