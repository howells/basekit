// API Reference Component

import { cx } from "@/lib/utils";
import React from "react";

interface ApiProp {
  name: string;
  type: string;
  default?: string;
  description: string;
}

interface ApiReferenceProps {
  title: string;
  description?: string;
  props: ApiProp[];
  className?: string;
}

export const ApiReference = React.forwardRef<HTMLDivElement, ApiReferenceProps>(
  ({ title, description, props, className }, ref) => {
    return (
      <div ref={ref} className={cx("space-y-4", className)}>
        <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        )}

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-800">
                <th className="text-left p-3 font-medium text-zinc-900 dark:text-zinc-50">
                  Prop
                </th>
                <th className="text-left p-3 font-medium text-zinc-900 dark:text-zinc-50">
                  Type
                </th>
                <th className="text-left p-3 font-medium text-zinc-900 dark:text-zinc-50">
                  Default
                </th>
                <th className="text-left p-3 font-medium text-zinc-900 dark:text-zinc-50">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {props.map((prop, index) => (
                <tr
                  key={prop.name}
                  className={cx(
                    "border-b border-zinc-100 dark:border-zinc-900",
                    index === props.length - 1 && "border-b-0"
                  )}
                >
                  <td className="p-3 font-mono text-xs text-zinc-900 dark:text-zinc-50">
                    {prop.name}
                  </td>
                  <td className="p-3 text-zinc-600 dark:text-zinc-400">
                    {prop.type}
                  </td>
                  <td className="p-3 text-zinc-600 dark:text-zinc-400">
                    {prop.default || "-"}
                  </td>
                  <td className="p-3 text-zinc-600 dark:text-zinc-400">
                    {prop.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
);

ApiReference.displayName = "ApiReference";
