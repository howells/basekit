import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "textarea",
  name: "Textarea",
  description:
    "Displays a form textarea or a component that looks like a textarea.",
  category: "inputs" as const,

  installation: {
    npm: "@base-ui-components/react"
  },
  importStatement: `import { Textarea } from "@/components/ui/textarea/textarea";`,
  componentId: "TextareaExample",
  props: [
    {
      name: "placeholder",
      type: "string",
      description: "Placeholder text",
      defaultValue: "Type your message here."
    },
    {
      name: "disabled",
      type: "boolean",
      description: "Whether the textarea is disabled",
      defaultValue: false
    },
    {
      name: "rows",
      type: "number",
      description: "Number of visible text lines",
      defaultValue: 4
    },
  ],
  examples: [
    {
      id: "default",
      title: "Basic Textarea",
      description: "A simple textarea input",
      code: `<Textarea placeholder="Type your message here." />`
    },
    {
      id: "with-label",
      title: "Textarea with Label",
      description: "Textarea with a form label",
      code: `<div className="space-y-2">
  <label htmlFor="message" className="text-sm font-medium">
    Message
  </label>
  <Textarea
    id="message"
    placeholder="Enter your message"
    rows={6}
  />
</div>`
    },
    {
      id: "disabled",
      title: "Disabled Textarea",
      description: "Textarea in disabled state",
      code: `<Textarea
  placeholder="This textarea is disabled"
  disabled
  defaultValue="You cannot edit this content."
/>`
    },
    {
      id: "with-hint",
      title: "Textarea with Hint Text",
      description: "Textarea with helper text below",
      code: `<div className="space-y-2">
  <label htmlFor="bio" className="text-sm font-medium">
    Bio
  </label>
  <Textarea
    id="bio"
    placeholder="Tell us about yourself"
    rows={4}
  />
  <p className="text-sm text-zinc-600">
    Write a short bio. This will be displayed on your profile.
  </p>
</div>`
    },
    {
      id: "character-count",
      title: "With Character Count",
      description: "Textarea with character limit indicator",
      code: `<div className="space-y-2">
  <label htmlFor="tweet" className="text-sm font-medium">
    Compose Tweet
  </label>
  <Textarea
    id="tweet"
    placeholder="What's happening?"
    rows={3}
    maxLength={280}
  />
  <div className="flex justify-between text-sm">
    <span className="text-zinc-600">Max 280 characters</span>
    <span className="text-zinc-600">0/280</span>
  </div>
</div>`
    },
    {
      id: "form-example",
      title: "In a Form",
      description: "Textarea as part of a complete form",
      code: `<form className="space-y-4">
  <div className="space-y-2">
    <label htmlFor="name" className="text-sm font-medium">
      Name
    </label>
    <input
      id="name"
      type="text"
      placeholder="Your name"
      className="w-full rounded-md border border-zinc-300 px-3 py-2"
    />
  </div>
  <div className="space-y-2">
    <label htmlFor="feedback" className="text-sm font-medium">
      Feedback
    </label>
    <Textarea
      id="feedback"
      placeholder="Share your thoughts..."
      rows={5}
    />
  </div>
  <button
    type="submit"
    className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
  >
    Submit Feedback
  </button>
</form>`
    },
  ]
};
