"use client";

import { useState } from "react";
import { SelectNative } from "./select-native";

interface SelectNativeExampleProps {
  hasError?: boolean;
  disabled?: boolean;
}

export function SelectNativeExample({
  hasError = false,
  disabled = false,
}: SelectNativeExampleProps) {
  const [basicValue, setBasicValue] = useState("");
  const [countryValue, setCountryValue] = useState("");
  const [productValue, setProductValue] = useState("");
  const [requiredValue, setRequiredValue] = useState("");
  const [multipleSelected, setMultipleSelected] = useState<string[]>([]);

  const showError = hasError || (!requiredValue && requiredValue !== "");

  return (
    <div className="space-y-8">
      {/* Basic select */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Basic Select</h3>
        <SelectNative
          value={basicValue}
          onChange={(e) => setBasicValue(e.target.value)}
          hasError={hasError}
          disabled={disabled}
        >
          <option value="">Choose an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </SelectNative>
        <p className="text-sm text-zinc-600">Selected: {basicValue || "None"}</p>
      </div>

      {/* With label */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">With Label</h3>
        <div className="space-y-2">
          <label htmlFor="country" className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
            Country
          </label>
          <SelectNative
            id="country"
            value={countryValue}
            onChange={(e) => setCountryValue(e.target.value)}
            hasError={hasError}
            disabled={disabled}
          >
            <option value="">Select a country</option>
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="uk">United Kingdom</option>
            <option value="de">Germany</option>
            <option value="fr">France</option>
          </SelectNative>
        </div>
      </div>

      {/* Grouped options */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Grouped Options</h3>
        <div className="space-y-2">
          <label htmlFor="product" className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
            Product
          </label>
          <SelectNative
            id="product"
            value={productValue}
            onChange={(e) => setProductValue(e.target.value)}
            hasError={hasError}
            disabled={disabled}
          >
            <option value="">Choose a product</option>
            <optgroup label="Software">
              <option value="web-app">Web Application</option>
              <option value="mobile-app">Mobile App</option>
              <option value="desktop-app">Desktop Software</option>
            </optgroup>
            <optgroup label="Services">
              <option value="consulting">Consulting</option>
              <option value="support">Support</option>
              <option value="training">Training</option>
            </optgroup>
          </SelectNative>
          <p className="text-sm text-zinc-600">Selected: {productValue || "None"}</p>
        </div>
      </div>

      {/* Error state */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Error State</h3>
        <div className="space-y-2">
          <label htmlFor="required-select" className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
            Required Field *
          </label>
          <SelectNative
            id="required-select"
            value={requiredValue}
            onChange={(e) => setRequiredValue(e.target.value)}
            hasError={showError}
            disabled={disabled}
          >
            <option value="">Please select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </SelectNative>
          {showError && (
            <p className="text-sm text-red-600">This field is required.</p>
          )}
        </div>
      </div>

      {/* Disabled states */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Disabled States</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
              Disabled (no value)
            </label>
            <SelectNative disabled hasError={hasError}>
              <option value="">Choose an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </SelectNative>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
              Disabled (with value)
            </label>
            <SelectNative disabled value="option1" hasError={hasError}>
              <option value="">Choose an option</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </SelectNative>
          </div>
        </div>
      </div>

      {/* Multiple selection */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Multiple Selection</h3>
        <div className="space-y-2">
          <label htmlFor="multiple-select" className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
            Programming Languages
          </label>
          <SelectNative
            id="multiple-select"
            multiple
            size={4}
            value={multipleSelected}
            onChange={(e) => {
              const values = Array.from(e.target.selectedOptions, option => option.value);
              setMultipleSelected(values);
            }}
            className="h-auto py-1"
            hasError={hasError}
            disabled={disabled}
          >
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="csharp">C#</option>
            <option value="go">Go</option>
          </SelectNative>
          <p className="text-sm text-zinc-600">
            Selected: {multipleSelected.length > 0 ? multipleSelected.join(', ') : 'None'}
          </p>
        </div>
      </div>

      {/* Large option list */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Large Option List</h3>
        <div className="space-y-2">
          <label htmlFor="timezone" className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
            Timezone
          </label>
          <SelectNative
            id="timezone"
            defaultValue=""
            hasError={hasError}
            disabled={disabled}
          >
            <option value="">Select timezone</option>
            <option value="utc-12">(UTC-12:00) Baker Island</option>
            <option value="utc-11">(UTC-11:00) American Samoa</option>
            <option value="utc-10">(UTC-10:00) Hawaii</option>
            <option value="utc-9">(UTC-09:00) Alaska</option>
            <option value="utc-8">(UTC-08:00) Pacific Time</option>
            <option value="utc-7">(UTC-07:00) Mountain Time</option>
            <option value="utc-6">(UTC-06:00) Central Time</option>
            <option value="utc-5">(UTC-05:00) Eastern Time</option>
            <option value="utc-4">(UTC-04:00) Atlantic Time</option>
            <option value="utc-3">(UTC-03:00) Argentina Time</option>
            <option value="utc-2">(UTC-02:00) South Georgia</option>
            <option value="utc-1">(UTC-01:00) Azores</option>
            <option value="utc+0">(UTC+00:00) London</option>
            <option value="utc+1">(UTC+01:00) Central European</option>
            <option value="utc+2">(UTC+02:00) Eastern European</option>
            <option value="utc+3">(UTC+03:00) Moscow Time</option>
            <option value="utc+4">(UTC+04:00) Gulf Time</option>
            <option value="utc+5">(UTC+05:00) Pakistan Time</option>
            <option value="utc+6">(UTC+06:00) Bangladesh Time</option>
            <option value="utc+7">(UTC+07:00) Indochina Time</option>
            <option value="utc+8">(UTC+08:00) China Time</option>
            <option value="utc+9">(UTC+09:00) Japan Time</option>
            <option value="utc+10">(UTC+10:00) Australia East</option>
            <option value="utc+11">(UTC+11:00) Solomon Islands</option>
            <option value="utc+12">(UTC+12:00) New Zealand</option>
          </SelectNative>
        </div>
      </div>
    </div>
  );
}