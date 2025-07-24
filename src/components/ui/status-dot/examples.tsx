import React from "react";
import { StatusDot } from "./status-dot";

// Default example - matches config "default" id
export function DefaultExample() {
  return (
    <div className="flex items-center gap-4">
      <StatusDot variant="default" />
      <StatusDot variant="success" />
      <StatusDot variant="warning" />
      <StatusDot variant="error" />
      <StatusDot variant="info" />
    </div>
  );
}

// With labels example - matches config "with-labels" id
export function WithLabelsExample() {
  return (
    <div className="space-x-6">
      <StatusDot variant="success" label="Online" />
      <StatusDot variant="warning" label="Away" />
      <StatusDot variant="error" label="Busy" />
      <StatusDot variant="neutral" label="Offline" />
    </div>
  );
}

// Colors example - matches config "colors" id
export function ColorsExample() {
  return (
    <div className="flex items-center gap-4">
      <StatusDot variant="purple" />
      <StatusDot variant="pink" />
      <StatusDot variant="orange" />
      <StatusDot variant="emerald" />
      <StatusDot variant="sky" />
    </div>
  );
}

// Sizes example - matches config "sizes" id
export function SizesExample() {
  return (
    <div className="flex items-center gap-4">
      <StatusDot size="sm" variant="success" />
      <StatusDot size="default" variant="success" />
      <StatusDot size="lg" variant="success" />
    </div>
  );
}

// Animated example - matches config "animated" id
export function AnimatedExample() {
  return (
    <div className="space-x-6">
      <StatusDot variant="success" label="Live" animated />
      <StatusDot variant="error" label="Recording" animated />
      <StatusDot variant="info" label="Processing" animated />
    </div>
  );
}

// Additional examples that were in the original file
export function BasicExample() {
  return (
    <div className="space-y-4">
      <StatusDot variant="success" label="Ready" />
      <StatusDot variant="info" label="Processing" animated />
      <StatusDot variant="warning" label="Queued" />
      <StatusDot variant="error" label="Failed" />
      <StatusDot variant="neutral" label="Canceled" />
      <StatusDot variant="warning" label="Warning" />
      <StatusDot variant="default" label="Pending" />
    </div>
  );
}

export function WithVariantsExample() {
  return (
    <div className="space-y-4">
      <StatusDot variant="success" label="Success" />
      <StatusDot variant="info" label="Info" />
      <StatusDot variant="warning" label="Warning" />
      <StatusDot variant="error" label="Error" />
      <StatusDot variant="neutral" label="Neutral" />
      <StatusDot variant="default" label="Default" />
    </div>
  );
}

export function ColorVariantsExample() {
  return (
    <div className="space-y-4">
      <StatusDot variant="purple" label="Purple" />
      <StatusDot variant="pink" label="Pink" />
      <StatusDot variant="orange" label="Orange" />
      <StatusDot variant="emerald" label="Emerald" />
      <StatusDot variant="sky" label="Sky" />
      <StatusDot variant="amber" label="Amber" />
    </div>
  );
}

export function WithoutLabelsExample() {
  return (
    <div className="flex items-center gap-3">
      <StatusDot variant="success" />
      <StatusDot variant="info" />
      <StatusDot variant="warning" />
      <StatusDot variant="error" />
      <StatusDot variant="neutral" />
      <StatusDot variant="purple" />
      <StatusDot variant="emerald" />
    </div>
  );
}

export function DeploymentStatusExample() {
  return (
    <div className="space-y-4">
      <div className="border rounded-lg p-4 space-y-3">
        <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
          Recent Deployments
        </h3>

        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <StatusDot variant="success" size="sm" />
              <span className="font-medium">main branch</span>
            </div>
            <span className="text-zinc-500 text-xs">2 minutes ago</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <StatusDot variant="info" size="sm" animated />
              <span className="font-medium">feature/new-ui</span>
            </div>
            <span className="text-zinc-500 text-xs">Building...</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <StatusDot variant="warning" size="sm" />
              <span className="font-medium">hotfix/critical-bug</span>
            </div>
            <span className="text-zinc-500 text-xs">In queue</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <StatusDot variant="error" size="sm" />
              <span className="font-medium">develop</span>
            </div>
            <span className="text-zinc-500 text-xs">Failed 1 hour ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SystemHealthExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="border rounded-lg p-4">
        <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-3">
          Services
        </h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <StatusDot variant="success" label="API Gateway" size="sm" />
            <span className="text-xs text-green-600">99.9% uptime</span>
          </div>
          <div className="flex items-center justify-between">
            <StatusDot variant="success" label="Database" size="sm" />
            <span className="text-xs text-green-600">100% uptime</span>
          </div>
          <div className="flex items-center justify-between">
            <StatusDot variant="warning" label="Cache Layer" size="sm" />
            <span className="text-xs text-orange-600">High memory usage</span>
          </div>
          <div className="flex items-center justify-between">
            <StatusDot
              variant="info"
              label="Background Jobs"
              size="sm"
              animated
            />
            <span className="text-xs text-blue-600">Processing queue</span>
          </div>
        </div>
      </div>

      <div className="border rounded-lg p-4">
        <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 mb-3">
          Environments
        </h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <StatusDot variant="success" label="Production" size="sm" />
            <span className="text-xs text-zinc-500">v2.1.0</span>
          </div>
          <div className="flex items-center justify-between">
            <StatusDot variant="success" label="Staging" size="sm" />
            <span className="text-xs text-zinc-500">v2.2.0-beta</span>
          </div>
          <div className="flex items-center justify-between">
            <StatusDot variant="default" label="Development" size="sm" />
            <span className="text-xs text-zinc-500">Pending deploy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
