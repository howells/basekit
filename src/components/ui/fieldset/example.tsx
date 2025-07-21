"use client";

import { Fieldset, FieldsetLegend } from "./fieldset";

export function Example({ disabled = false, ...props }: { disabled?: boolean; [key: string]: any }) {
  return (
    <Fieldset disabled={disabled} {...props}>
      <FieldsetLegend>Account Settings</FieldsetLegend>
      <div className="space-y-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Full Name
          </label>
          <input 
            type="text" 
            disabled={disabled}
            className="px-3 py-2 border border-zinc-200 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 disabled:bg-zinc-100 dark:disabled:bg-zinc-800 disabled:text-zinc-500"
            defaultValue="John Doe"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Email Address
          </label>
          <input 
            type="email" 
            disabled={disabled}
            className="px-3 py-2 border border-zinc-200 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 disabled:bg-zinc-100 dark:disabled:bg-zinc-800 disabled:text-zinc-500"
            defaultValue="john@example.com"
          />
        </div>
        <div className="flex items-center gap-2">
          <input 
            type="checkbox" 
            disabled={disabled}
            className="rounded border-zinc-200 dark:border-zinc-700"
            defaultChecked
          />
          <label className="text-sm text-zinc-700 dark:text-zinc-300">
            Send me email notifications
          </label>
        </div>
      </div>
    </Fieldset>
  );
}