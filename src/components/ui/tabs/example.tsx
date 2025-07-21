"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";

export function Example({ defaultValue = "overview", ...props }: { defaultValue?: string; [key: string]: any }) {
  return (
    <Tabs defaultValue={defaultValue} {...props}>
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview" className="space-y-4">
        <h3 className="text-lg font-medium">Overview</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          This is the overview tab content. Here you can see a summary of your account activity, 
          recent updates, and key metrics at a glance.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">1,234</div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">Total Users</div>
          </div>
          <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg">
            <div className="text-2xl font-bold text-green-600">5,678</div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">Active Sessions</div>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="analytics" className="space-y-4">
        <h3 className="text-lg font-medium">Analytics</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          View detailed analytics and insights about your application usage, 
          performance metrics, and user engagement statistics.
        </p>
        <div className="h-32 bg-zinc-100 dark:bg-zinc-800 rounded-lg flex items-center justify-center">
          <span className="text-zinc-500">Analytics Chart Placeholder</span>
        </div>
      </TabsContent>
      
      <TabsContent value="reports" className="space-y-4">
        <h3 className="text-lg font-medium">Reports</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Generate and download various reports including user activity, 
          system performance, and custom data exports.
        </p>
        <div className="space-y-2">
          <button className="w-full p-3 text-left border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800">
            <div className="font-medium">Monthly Activity Report</div>
            <div className="text-sm text-zinc-500">Last generated: 2 days ago</div>
          </button>
          <button className="w-full p-3 text-left border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800">
            <div className="font-medium">Performance Summary</div>
            <div className="text-sm text-zinc-500">Last generated: 1 week ago</div>
          </button>
        </div>
      </TabsContent>
      
      <TabsContent value="notifications" className="space-y-4">
        <h3 className="text-lg font-medium">Notifications</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Manage your notification preferences and view recent system alerts.
        </p>
        <div className="space-y-3">
          <label className="flex items-center gap-3">
            <input type="checkbox" defaultChecked className="rounded" />
            <span className="text-sm">Email notifications</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" className="rounded" />
            <span className="text-sm">Push notifications</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="checkbox" defaultChecked className="rounded" />
            <span className="text-sm">Weekly summary emails</span>
          </label>
        </div>
      </TabsContent>
    </Tabs>
  );
}