"use client";

import { Tracker } from "./tracker";

export function Example() {
  const trackerData = [
    { color: "emerald", tooltip: "Completed tasks: 85%" },
    { color: "blue", tooltip: "In progress: 10%" },
    { color: "amber", tooltip: "Pending review: 3%" },
    { color: "red", tooltip: "Failed: 2%" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-2">Project Progress Tracker</h3>
        <Tracker data={trackerData} />
        <div className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          Hover over blocks to see detailed tooltips
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">System Status</h3>
        <Tracker
          data={[
            { color: "emerald", tooltip: "Healthy services: 95%" },
            { color: "amber", tooltip: "Warning: 4%" },
            { color: "red", tooltip: "Critical: 1%" },
          ]}
        />
      </div>
      
      <div className="grid grid-cols-4 gap-2 text-xs">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-emerald-500 rounded-sm"></div>
          <span>Completed</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
          <span>In Progress</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-amber-500 rounded-sm"></div>
          <span>Pending</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
          <span>Failed</span>
        </div>
      </div>
    </div>
  );
}