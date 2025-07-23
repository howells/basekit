import React from "react";
import {
  StatusDot,
  StatusQueued,
  StatusBuilding,
  StatusReady,
  StatusError,
  StatusCanceled
} from "./status-dot";

export function Basic() {
  return (
    <div className="space-y-3">
      <StatusDot status="ready" label="Deployment Ready" />
      <StatusDot status="building" label="Building..." />
      <StatusDot status="queued" label="Queued" />
      <StatusDot status="error" label="Build Failed" />
      <StatusDot status="canceled" label="Canceled" />
      <StatusDot status="warning" label="Warning" />
      <StatusDot status="pending" label="Pending Review" />
    </div>
  );
}

export function WithoutLabels() {
  return (
    <div className="flex items-center gap-3">
      <StatusDot status="ready" />
      <StatusDot status="building" />
      <StatusDot status="queued" />
      <StatusDot status="error" />
      <StatusDot status="canceled" />
      <StatusDot status="warning" />
      <StatusDot status="pending" />
    </div>
  );
}

export function Sizes() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <StatusDot status="ready" label="Small" size="sm" />
        <StatusDot status="building" label="Default" size="default" />
        <StatusDot status="error" label="Large" size="lg" />
      </div>

      <div className="flex items-center gap-4">
        <StatusDot status="ready" size="sm" />
        <StatusDot status="building" size="default" />
        <StatusDot status="error" size="lg" />
      </div>
    </div>
  );
}

export function HelperComponents() {
  return (
    <div className="space-y-3">
      <StatusReady />
      <StatusBuilding />
      <StatusQueued />
      <StatusError />
      <StatusCanceled />
    </div>
  );
}

export function CustomLabels() {
  return (
    <div className="space-y-3">
      <StatusReady label="Production Deployed" />
      <StatusBuilding label="CI/CD Pipeline Running" />
      <StatusQueued label="Waiting in Queue" />
      <StatusError label="Deployment Failed" />
      <StatusCanceled label="Build Canceled by User" />
    </div>
  );
}

export function Animated() {
  return (
    <div className="space-y-3">
      <StatusDot status="building" label="Building (auto-animated)" />
      <StatusDot status="queued" label="Queued (auto-animated)" />
      <StatusDot status="pending" label="Pending (auto-animated)" />
      <StatusDot status="ready" label="Ready (forced animation)" animated />
      <StatusDot status="error" label="Error (forced animation)" animated />
    </div>
  );
}

export function DeploymentStatus() {
  return (
    <div className="space-y-4">
      <div className="border rounded-lg p-4 space-y-3">
        <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100">
          Recent Deployments
        </h3>

        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <StatusReady size="sm" />
              <span className="font-medium">main branch</span>
            </div>
            <span className="text-gray-500 text-xs">2 minutes ago</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <StatusBuilding size="sm" />
              <span className="font-medium">feature/new-ui</span>
            </div>
            <span className="text-gray-500 text-xs">Building...</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <StatusQueued size="sm" />
              <span className="font-medium">hotfix/critical-bug</span>
            </div>
            <span className="text-gray-500 text-xs">In queue</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <StatusError size="sm" />
              <span className="font-medium">develop</span>
            </div>
            <span className="text-gray-500 text-xs">Failed 1 hour ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SystemHealth() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="border rounded-lg p-4">
        <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-3">
          Services
        </h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <StatusDot status="ready" label="API Gateway" size="sm" />
            <span className="text-xs text-green-600">99.9% uptime</span>
          </div>
          <div className="flex items-center justify-between">
            <StatusDot status="ready" label="Database" size="sm" />
            <span className="text-xs text-green-600">100% uptime</span>
          </div>
          <div className="flex items-center justify-between">
            <StatusDot status="warning" label="Cache Layer" size="sm" />
            <span className="text-xs text-orange-600">High memory usage</span>
          </div>
          <div className="flex items-center justify-between">
            <StatusDot status="building" label="Background Jobs" size="sm" />
            <span className="text-xs text-blue-600">Processing queue</span>
          </div>
        </div>
      </div>

      <div className="border rounded-lg p-4">
        <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100 mb-3">
          Environments
        </h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <StatusDot status="ready" label="Production" size="sm" />
            <span className="text-xs text-gray-500">v2.1.0</span>
          </div>
          <div className="flex items-center justify-between">
            <StatusDot status="ready" label="Staging" size="sm" />
            <span className="text-xs text-gray-500">v2.2.0-beta</span>
          </div>
          <div className="flex items-center justify-between">
            <StatusDot status="pending" label="Development" size="sm" />
            <span className="text-xs text-gray-500">Pending deploy</span>
          </div>
        </div>
      </div>
    </div>
  );
}