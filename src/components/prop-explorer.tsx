"use client";

import { Input } from "@/components/inputs/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/inputs/select";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PropExplorerConfig } from "@/lib/prop-explorer";
import { cx } from "@/lib/utils";
import React, { useState } from "react";

interface PropExplorerProps {
  config: PropExplorerConfig;
  className?: string;
}

export const PropExplorer: React.FC<PropExplorerProps> = ({
  config,
  className,
}) => {
  // Get only variant props (the ones that change appearance)
  const variantProps = config.variants || [];

  // State for current prop values
  const [propValues, setPropValues] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    variantProps.forEach((prop) => {
      initial[prop.name] = prop.defaultOption || prop.options[0]?.value || "";
    });
    return initial;
  });

  // Get the component for live preview
  const Component = config.componentName === "Badge" ? Badge : Badge; // Fallback for now

  return (
    <div className={cx("flex gap-6 px-8 py-8", className)}>
      {/* Main content - Live preview */}
      <div className="flex-1">
        <div className="space-y-4">
          {/* Live Preview */}
          <Card className="p-8 bg-gray-50/50">
            <div className="flex items-center justify-center min-h-[120px]">
              <Component {...propValues}>Badge</Component>
            </div>
          </Card>
        </div>
      </div>

      {/* Right sidebar - Properties inspector */}
      <div className="w-80 border-l bg-gray-50/30 p-4">
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">
            Properties
          </h4>

          {variantProps.length === 0 ? (
            <p className="text-sm text-gray-500">No configurable properties</p>
          ) : (
            <div className="space-y-4">
              {variantProps.map((prop) => (
                <div key={prop.name} className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 capitalize">
                    {prop.name}
                  </label>

                  <Select
                    value={propValues[prop.name]}
                    onValueChange={(value) =>
                      setPropValues((prev) => ({ ...prev, [prop.name]: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {prop.options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label || option.value}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {prop.description && (
                    <p className="text-xs text-gray-500">{prop.description}</p>
                  )}
                </div>
              ))}

              {/* Text content input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  children
                </label>
                <Input
                  value={propValues.children || "Badge"}
                  onChange={(e) =>
                    setPropValues((prev) => ({
                      ...prev,
                      children: e.target.value,
                    }))
                  }
                  placeholder="Badge text"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
