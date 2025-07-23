import React from "react";
import { Textarea } from "./textarea";

export function Default() {
  return <Textarea placeholder="Enter your message..." />;
}

export function WithRows() {
  return (
    <Textarea
      placeholder="Write a detailed description..."
      rows={5}
    />
  );
}

export function Disabled() {
  return (
    <Textarea
      placeholder="This field is disabled"
      disabled
      defaultValue="This content cannot be edited"
    />
  );
}

export function ErrorState() {
  return (
    <Textarea
      placeholder="This field has an error"
      hasError
      defaultValue="Invalid content"
    />
  );
}

export function ResizeOptions() {
  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Cannot be resized"
        className="resize-none"
      />
      <Textarea
        placeholder="Resize horizontally only"
        className="resize-x"
      />
      <Textarea
        placeholder="Resize vertically only (default)"
        className="resize-y"
      />
    </div>
  );
}

export function WithLabel() {
  return (
    <div className="space-y-2">
      <label htmlFor="feedback" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
        Feedback
      </label>
      <Textarea
        id="feedback"
        placeholder="Please share your thoughts..."
        rows={4}
      />
      <p className="text-xs text-zinc-500">Your feedback helps us improve our service.</p>
    </div>
  );
}

// Export with the expected naming convention
export const DefaultExample = Default;
export const WithLabelExample = WithLabel;
export const DisabledExample = Disabled;
export const WithHintExample = WithLabel; // Using WithLabel as placeholder
export const CharacterCountExample = Default; // Using Default as placeholder
export const FormExampleExample = WithLabel; // Using WithLabel as placeholder