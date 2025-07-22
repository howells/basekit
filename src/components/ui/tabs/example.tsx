"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

export function TabsExample({
  defaultValue = "overview",
  variant = "line",
  hideDivider = false,
  hideBorder = false,
  ...props
}: {
  defaultValue?: string;
  variant?: "solid" | "line";
  hideDivider?: boolean;
  hideBorder?: boolean;
} & React.ComponentProps<typeof Tabs>) {
  return (
    <Tabs defaultValue={defaultValue} {...props}>
      <TabsList
        variant={variant}
        hideDivider={hideDivider}
        hideBorder={hideBorder}
      >
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="mt-6"></TabsContent>

      <TabsContent value="analytics" className="mt-6"></TabsContent>

      <TabsContent value="reports" className="mt-6"></TabsContent>

      <TabsContent value="notifications" className="mt-6"></TabsContent>
    </Tabs>
  );
}
