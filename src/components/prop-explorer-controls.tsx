"use client";

import { Subheading } from "@/components/ui/subheading";
import { Text } from "@/components/ui/text/text";
import { ComponentConfig } from "@/lib/component-config-types";
import { PropMetadata } from "@/lib/prop-explorer";
import React from "react";
import { usePropExplorer } from "./prop-explorer-context";
import { Button } from "./ui/button/button";
import { DatePicker } from "./ui/date-picker";
import { Field, FieldControl, FieldDescription, FieldLabel } from "./ui/field";
import { IconSelect } from "./ui/icon-select";
import { Input } from "./ui/input";
import { NumberField } from "./ui/number-field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Switch } from "./ui/switch";

interface PropExplorerContentProps {
  config?: ComponentConfig;
}

// Helper function to get string options from a prop
function getStringOptions(prop: PropMetadata): string[] {
  if (!prop.options) return [];
  if (typeof prop.options[0] === "string") {
    return prop.options as string[];
  }
  // If it's VariantOption[], extract the value property
  return (prop.options as { value: string }[]).map((opt) => opt.value);
}

export function PropExplorerContent({ config }: PropExplorerContentProps) {
  const { props, updateProp, resetProps } = usePropExplorer();

  if (!config || !config.props) {
    return (
      <div className="space-y-6">
        <Text>No configurable properties available for this component.</Text>
      </div>
    );
  }

  // Check if component supports icons
  const supportsIcons = config.props.some(
    (prop: PropMetadata) => prop.name === "icon" || prop.name.endsWith("Icon")
  );

  // Check if component supports children
  const supportsChildren = config.props.some(
    (prop: PropMetadata) => prop.name === "children"
  );

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Subheading level={3}>Props</Subheading>
        <Button onClick={resetProps} variant="ghost">
          Reset
        </Button>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {/* Props */}
        {config.props.map((prop: PropMetadata) => {
          const currentValue = props[prop.name];

          // Handle different prop types
          if (prop.type === "boolean") {
            return (
              <div key={prop.name} className="space-y-2">
                <Field>
                  <FieldLabel>{prop.name}</FieldLabel>
                  {prop.description && (
                    <FieldDescription>{prop.description}</FieldDescription>
                  )}
                  <FieldControl
                    render={() => (
                      <Switch
                        checked={currentValue === true}
                        onCheckedChange={(checked) =>
                          updateProp(prop.name, checked)
                        }
                      />
                    )}
                  />
                </Field>
              </div>
            );
          }

          if (prop.type === "select" && prop.options) {
            const options = getStringOptions(prop);
            return (
              <div key={prop.name} className="space-y-2">
                <Field>
                  <FieldLabel>{prop.name}</FieldLabel>
                  {prop.description && (
                    <FieldDescription>{prop.description}</FieldDescription>
                  )}
                  <FieldControl
                    render={() => (
                      <Select
                        value={(currentValue as string) ?? ""}
                        onValueChange={(value) => updateProp(prop.name, value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {options.map((option: string) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </Field>
              </div>
            );
          }

          if (prop.type === "icon") {
            return (
              <div key={prop.name} className="space-y-2">
                <Field>
                  <FieldLabel>{prop.name}</FieldLabel>
                  {prop.description && (
                    <FieldDescription>{prop.description}</FieldDescription>
                  )}
                  <FieldControl
                    render={() => (
                      <IconSelect
                        value={currentValue as string}
                        onValueChange={(value) => updateProp(prop.name, value)}
                      />
                    )}
                  />
                </Field>
              </div>
            );
          }

          if (prop.type === "number") {
            return (
              <div key={prop.name} className="space-y-2">
                <Field>
                  <FieldLabel>{prop.name}</FieldLabel>
                  {prop.description && (
                    <FieldDescription>{prop.description}</FieldDescription>
                  )}
                  <FieldControl
                    render={() => (
                      <NumberField
                        value={currentValue as number}
                        onValueChange={(value) => updateProp(prop.name, value)}
                        placeholder={String(prop.defaultValue || "")}
                        min={prop.min}
                        max={prop.max}
                        fullWidth
                      />
                    )}
                  />
                </Field>
              </div>
            );
          }

          if (prop.type === "date") {
            return (
              <div key={prop.name} className="space-y-2">
                <Field>
                  <FieldLabel>{prop.name}</FieldLabel>
                  {prop.description && (
                    <FieldDescription>{prop.description}</FieldDescription>
                  )}
                  <FieldControl
                    render={() => (
                      <DatePicker
                        value={currentValue as Date | undefined}
                        onChange={(date) => updateProp(prop.name, date)}
                        placeholder="Select date"
                      />
                    )}
                  />
                </Field>
              </div>
            );
          }

          // Default to string input
          return (
            <div key={prop.name} className="space-y-2">
              <Field>
                <FieldLabel>{prop.name}</FieldLabel>
                {prop.description && (
                  <FieldDescription>{prop.description}</FieldDescription>
                )}
                <FieldControl
                  render={(controlProps) => {
                    const { children, ...inputProps } = controlProps;
                    return (
                      <Input
                        {...inputProps}
                        value={(currentValue as string) || ""}
                        onChange={(e) => updateProp(prop.name, e.target.value)}
                        placeholder={prop.defaultValue as string}
                      />
                    );
                  }}
                />
              </Field>
            </div>
          );
        })}
      </div>
    </div>
  );
}
