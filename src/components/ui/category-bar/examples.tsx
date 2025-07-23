import React from "react";
import { CategoryBar } from "./category-bar";

// Default category bar
export const DefaultExample = () => (
  <CategoryBar values={[40, 30, 20, 10]} />
);

// Category bar with marker
export const WithMarkerExample = () => (
  <CategoryBar
    values={[40, 30, 20, 10]}
    marker={{
      value: 50,
      tooltip: "Target: 50",
      showAnimation: true
    }}
  />
);

// No labels
export const NoLabelsExample = () => (
  <CategoryBar values={[25, 35, 25, 15]} showLabels={false} />
);

// Uneven distribution
export const UnevenDistributionExample = () => (
  <CategoryBar values={[60, 15, 15, 10]} />
);

// Many categories
export const ManyCategoriesExample = () => (
  <CategoryBar values={[20, 18, 16, 14, 12, 10, 8, 2]} />
);

// Performance metrics
export const PerformanceMetricsExample = () => (
  <div className="space-y-4">
    <div>
      <p className="text-sm font-medium mb-2">CPU Usage</p>
      <CategoryBar 
        values={[45, 30, 15, 10]} 
        colors={["emerald", "amber", "amber", "pink"]}
        showLabels={true}
      />
    </div>
    <div>
      <p className="text-sm font-medium mb-2">Memory Usage</p>
      <CategoryBar 
        values={[60, 25, 10, 5]} 
        colors={["blue", "cyan", "amber", "pink"]}
        marker={{
          value: 75,
          tooltip: "Warning threshold: 75%"
        }}
      />
    </div>
  </div>
);

// Budget allocation
export const BudgetAllocationExample = () => (
  <div className="space-y-2">
    <h3 className="text-sm font-medium">Budget Allocation</h3>
    <CategoryBar 
      values={[35, 25, 20, 15, 5]} 
      colors={["blue", "emerald", "violet", "amber", "gray"]}
    />
    <div className="flex justify-between text-xs text-zinc-600 dark:text-zinc-400">
      <span>Marketing (35%)</span>
      <span>R&D (25%)</span>
      <span>Operations (20%)</span>
      <span>Sales (15%)</span>
      <span>Other (5%)</span>
    </div>
  </div>
);

// Survey results
export const SurveyResultsExample = () => (
  <div className="space-y-2">
    <h3 className="text-sm font-medium">Customer Satisfaction Survey</h3>
    <CategoryBar 
      values={[45, 30, 15, 7, 3]} 
      colors={["emerald", "lime", "amber", "amber", "pink"]}
      showLabels={false}
    />
    <div className="grid grid-cols-5 gap-1 text-xs text-center">
      <span className="text-emerald-600">Excellent</span>
      <span className="text-lime-600">Good</span>
      <span className="text-amber-600">Fair</span>
      <span className="text-orange-600">Poor</span>
      <span className="text-red-600">Very Poor</span>
    </div>
  </div>
);

// Progress tracking
export const ProgressTrackingExample = () => (
  <div className="space-y-4">
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">Project Progress</span>
        <span className="text-sm text-zinc-600 dark:text-zinc-400">Q4 2024</span>
      </div>
      <CategoryBar 
        values={[65, 35]} 
        colors={["blue", "gray"]}
        marker={{
          value: 80,
          tooltip: "Q4 Target: 80%",
          showAnimation: true
        }}
      />
    </div>
  </div>
);

// Two categories (binary)
export const BinaryExample = () => (
  <div className="space-y-4">
    <div>
      <p className="text-sm font-medium mb-2">Success Rate</p>
      <CategoryBar 
        values={[85, 15]} 
        colors={["emerald", "pink"]}
        showLabels={false}
      />
      <div className="flex justify-between text-xs mt-1">
        <span className="text-emerald-600">Success: 85%</span>
        <span className="text-red-600">Failed: 15%</span>
      </div>
    </div>
  </div>
);

// Equal distribution
export const EqualDistributionExample = () => (
  <CategoryBar values={[25, 25, 25, 25]} colors={["blue", "emerald", "violet", "amber"]} />
);