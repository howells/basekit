"use client";

import React, { useState } from "react";
import { Switch } from "./switch";
import { Button } from "../button";

export function Default() {
  const [checked, setChecked] = useState(false);

  return <Switch checked={checked} onCheckedChange={setChecked} />;
}

export function WithLabel() {
  const [notifications, setNotifications] = useState(true);

  return (
    <Switch
      checked={notifications}
      onCheckedChange={setNotifications}
      label="Enable notifications"
    />
  );
}

export function Sizes() {
  const [defaultChecked, setDefaultChecked] = useState(true);
  const [smallChecked, setSmallChecked] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch
          checked={defaultChecked}
          onCheckedChange={setDefaultChecked}
        />
        <span className="text-sm">Default size</span>
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          size="small"
          checked={smallChecked}
          onCheckedChange={setSmallChecked}
        />
        <span className="text-sm">Small size</span>
      </div>
    </div>
  );
}

export function Disabled() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch disabled checked={false} />
        <span className="text-sm text-zinc-600">Disabled (off)</span>
      </div>

      <div className="flex items-center space-x-2">
        <Switch disabled checked={true} />
        <span className="text-sm text-zinc-600">Disabled (on)</span>
      </div>
    </div>
  );
}

export function Controlled() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch
          checked={isEnabled}
          onCheckedChange={setIsEnabled}
        />
        <span className="text-sm">
          Status: {isEnabled ? "Enabled" : "Disabled"}
        </span>
      </div>

      <div className="flex gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() => setIsEnabled(true)}
        >
          Turn On
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => setIsEnabled(false)}
        >
          Turn Off
        </Button>
      </div>
    </div>
  );
}

export function FormExample() {
  const [settings, setSettings] = useState({
    notifications: true,
    autoSave: false,
    darkMode: true,
  });

  return (
    <div className="space-y-4 max-w-sm">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">
          Push Notifications
        </label>
        <Switch
          checked={settings.notifications}
          onCheckedChange={(checked) =>
            setSettings(prev => ({ ...prev, notifications: checked }))
          }
        />
      </div>

      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">
          Auto Save
        </label>
        <Switch
          checked={settings.autoSave}
          onCheckedChange={(checked) =>
            setSettings(prev => ({ ...prev, autoSave: checked }))
          }
        />
      </div>

      <div className="flex items-center justify-between">
        <label className="text-sm font-medium">
          Dark Mode
        </label>
        <Switch
          checked={settings.darkMode}
          onCheckedChange={(checked) =>
            setSettings(prev => ({ ...prev, darkMode: checked }))
          }
        />
      </div>
    </div>
  );
}