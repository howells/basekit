"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "./switch";

interface SwitchExampleProps {
  size?: "default" | "small";
  disabled?: boolean;
}

export function SwitchExample({
  size = "default",
  disabled = false,
}: SwitchExampleProps) {
  const [basicChecked, setBasicChecked] = useState(false);
  const [labelChecked, setLabelChecked] = useState(true);
  const [defaultSizeChecked, setDefaultSizeChecked] = useState(true);
  const [smallSizeChecked, setSmallSizeChecked] = useState(false);
  const [controlledChecked, setControlledChecked] = useState(false);
  const [settings, setSettings] = useState({
    notifications: true,
    autoSave: false,
    darkMode: true,
  });

  return (
    <div className="space-y-8">
      {/* Basic switch */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Basic Switch</h3>
        <Switch
          checked={basicChecked}
          onCheckedChange={setBasicChecked}
          size={size}
          disabled={disabled}
        />
        <p className="text-sm text-zinc-600">
          Status: {basicChecked ? "On" : "Off"}
        </p>
      </div>

      {/* With label */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Label</h3>
        <Switch
          checked={labelChecked}
          onCheckedChange={setLabelChecked}
          label="Enable notifications"
          size={size}
          disabled={disabled}
        />
      </div>

      {/* Different sizes */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Different Sizes</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch
              checked={defaultSizeChecked}
              onCheckedChange={setDefaultSizeChecked}
              disabled={disabled}
            />
            <span className="text-sm">Default size</span>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              size="small"
              checked={smallSizeChecked}
              onCheckedChange={setSmallSizeChecked}
              disabled={disabled}
            />
            <span className="text-sm">Small size</span>
          </div>
        </div>
      </div>

      {/* Disabled states */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Disabled States</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch disabled checked={false} size={size} />
            <span className="text-sm text-zinc-600">Disabled (off)</span>
          </div>

          <div className="flex items-center space-x-2">
            <Switch disabled checked={true} size={size} />
            <span className="text-sm text-zinc-600">Disabled (on)</span>
          </div>
        </div>
      </div>

      {/* Controlled example */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Controlled Switch</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch
              checked={controlledChecked}
              onCheckedChange={setControlledChecked}
              size={size}
              disabled={disabled}
            />
            <span className="text-sm">
              Status: {controlledChecked ? "Enabled" : "Disabled"}
            </span>
          </div>

          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setControlledChecked(true)}
            >
              Turn On
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setControlledChecked(false)}
            >
              Turn Off
            </Button>
          </div>
        </div>
      </div>

      {/* Form example */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Form Example</h3>
        <div className="space-y-4 max-w-sm">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Push Notifications</label>
            <Switch
              checked={settings.notifications}
              onCheckedChange={(checked) =>
                setSettings((prev) => ({ ...prev, notifications: checked }))
              }
              size={size}
              disabled={disabled}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Auto Save</label>
            <Switch
              checked={settings.autoSave}
              onCheckedChange={(checked) =>
                setSettings((prev) => ({ ...prev, autoSave: checked }))
              }
              size={size}
              disabled={disabled}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Dark Mode</label>
            <Switch
              checked={settings.darkMode}
              onCheckedChange={(checked) =>
                setSettings((prev) => ({ ...prev, darkMode: checked }))
              }
              size={size}
              disabled={disabled}
            />
          </div>

          <div className="text-xs text-zinc-600 pt-2">
            <div>Notifications: {settings.notifications ? "On" : "Off"}</div>
            <div>Auto Save: {settings.autoSave ? "On" : "Off"}</div>
            <div>Dark Mode: {settings.darkMode ? "On" : "Off"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}