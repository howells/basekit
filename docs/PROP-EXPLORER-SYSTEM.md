# StencilUI Prop Explorer System

A comprehensive, self-documenting prop exploration system for StencilUI components that provides a Subframe-style interface for exploring component props with full TypeScript integration.

## Overview

The Prop Explorer System consists of several key components:

1. **Type-safe prop metadata** - All prop information is defined using TypeScript interfaces
2. **Categorized organization** - Props are organized by logical categories (appearance, behavior, content, etc.)
3. **Variant exploration** - Special handling for tailwind-variants props with live previews
4. **Event documentation** - Detailed information about event handlers and their parameters
5. **Interactive examples** - Live examples with highlighted props and code snippets
6. **Search functionality** - Search through all props by name, type, or description
7. **Colocation** - Prop configurations live directly in component files for better maintainability

## Architecture

### Core Types

```typescript
interface PropMetadata {
  name: string;
  type: string;
  defaultValue?: string | number | boolean;
  required?: boolean;
  description?: string;
  category?: PropCategory;
  deprecated?: boolean | string;
  since?: string;
  examples?: (string | number | boolean)[];
  docLink?: string;
}

interface VariantPropMetadata extends PropMetadata {
  options: VariantOption[];
  defaultOption?: string;
}

interface EventPropMetadata extends PropMetadata {
  signature: string;
  parameters: EventParameter[];
  trigger: string;
}
```

### Categories

Props are organized into logical categories:

- **appearance** - Visual styling, colors, sizes
- **behavior** - Component behavior, disabled state, etc.
- **content** - Text content, children, labels
- **interaction** - User interaction handlers
- **layout** - Positioning, spacing, alignment
- **accessibility** - ARIA attributes, roles, labels
- **data** - Data binding, values, form integration
- **event** - Event handlers and callbacks
- **advanced** - Advanced or rarely used props

## Usage

### 1. Colocated Prop Configuration (Recommended)

Define the prop configuration directly in your component file:

```typescript
// src/components/ui/my-component.tsx
import React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import {
  PropExplorerConfig,
  createPropMetadata,
  createVariantPropMetadata,
  createVariantOption,
} from "@/lib/prop-explorer";

// Component implementation
const myComponentVariants = tv({
  base: "...",
  variants: {
    variant: {
      default: "...",
      secondary: "...",
    },
  },
});

interface MyComponentProps
  extends React.ComponentPropsWithoutRef<"div">,
    VariantProps<typeof myComponentVariants> {}

const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={myComponentVariants({ variant, className })}
        {...props}
      />
    );
  }
);

MyComponent.displayName = "MyComponent";

// Prop Explorer Configuration (colocated)
export const myComponentPropConfig: PropExplorerConfig = {
  componentName: "MyComponent",
  displayName: "My Component",
  description: "A description of what this component does",

  props: [
    createPropMetadata("children", "React.ReactNode", {
      description: "The content to display",
      category: "content",
      required: true,
    }),
    // ... other props
  ],

  variants: [
    createVariantPropMetadata("variant", [
      createVariantOption("default", {
        label: "Default",
        description: "Default styling",
        preview: <MyComponent variant="default">Default</MyComponent>,
        classes: ["bg-blue-50", "text-blue-900"],
      }),
      // ... other variants
    ]),
  ],

  examples: [
    {
      id: "basic",
      title: "Basic Usage",
      props: { children: "Hello" },
      preview: <MyComponent>Hello</MyComponent>,
      code: `<MyComponent>Hello</MyComponent>`,
    },
  ],
};

export { MyComponent, myComponentPropConfig, type MyComponentProps };
```

### 2. Separate File Configuration (Alternative)

If you prefer to keep configurations separate:

```typescript
// src/lib/prop-configs/my-component-props.tsx
import {
  PropExplorerConfig,
  createPropMetadata,
  createVariantPropMetadata,
} from "../prop-explorer";
import { MyComponent } from "@/components/ui/my-component";

export const myComponentPropConfig: PropExplorerConfig = {
  // ... configuration
};
```

### 3. Use PropExplorer Component

Display the prop explorer in your documentation:

```tsx
import { PropExplorer } from "@/components/prop-explorer";
import { myComponentPropConfig } from "@/components/ui/my-component";

export default function MyComponentDocs() {
  return (
    <div>
      <h1>My Component</h1>
      <PropExplorer config={myComponentPropConfig} />
    </div>
  );
}
```

## Benefits of Colocation

### 1. Single Source of Truth

- Component implementation and documentation live together
- Reduces the chance of documentation becoming stale
- Easier to update both code and docs in the same PR

### 2. Better Developer Experience

- No need to navigate between multiple files
- Immediate visibility of what props are documented
- IntelliSense works better with colocated exports

### 3. Improved Maintainability

- When you change a prop, the documentation is right there
- Easier to spot missing documentation during code reviews
- Less cognitive overhead when working on components

### 4. Simplified Imports

```typescript
// Single import for both component and its documentation
import { Badge, badgePropConfig } from "@/components/ui/badge";

// vs multiple imports
import { Badge } from "@/components/ui/badge";
import { badgePropConfig } from "@/lib/prop-configs/badge-props";
```

## Helper Functions

### generateHTMLProps

Automatically generate common HTML props:

```typescript
import { generateHTMLProps } from "@/lib/prop-generator";

const htmlProps = generateHTMLProps("button"); // Generates id, className, type, disabled, etc.
```

### generateEventProps

Generate common event handler props:

```typescript
import { generateEventProps } from "@/lib/prop-generator";

const events = generateEventProps("button"); // Generates onClick, onFocus, onBlur, etc.
```

### generatePropConfig

Generate a complete prop configuration from a template:

```typescript
import { generatePropConfig } from "@/lib/prop-generator";

const config = generatePropConfig({
  componentName: "Button",
  elementType: "button",
  description: "A clickable button component",
  customProps: [
    createPropMetadata("isLoading", "boolean", {
      description: "Whether the button shows loading state",
      category: "behavior",
    }),
  ],
  variants: [buttonVariants],
});
```

## Advanced Features

### Variant Integration

The system provides special handling for tailwind-variants:

```typescript
const variantProp = createVariantPropMetadata("variant", [
  createVariantOption("primary", {
    preview: <Button variant="primary">Primary</Button>,
    classes: ["bg-blue-600", "text-white"],
  }),
]);
```

### Event Documentation

Document event handlers with full parameter information:

```typescript
const clickEvent = createEventPropMetadata(
  "onClick",
  "(event: React.MouseEvent<HTMLButtonElement>) => void",
  "When the button is clicked",
  [
    {
      name: "event",
      type: "React.MouseEvent<HTMLButtonElement>",
      description: "The click event",
    },
  ]
);
```

### Interactive Examples

Create examples that highlight specific props:

```typescript
{
  id: "with-loading",
  title: "Loading State",
  props: { isLoading: true, children: "Loading..." },
  preview: <Button isLoading>Loading...</Button>,
  highlightedProps: ["isLoading"],
}
```

## Best Practices

### 1. Comprehensive Documentation

- Document all public props, including inherited HTML attributes
- Provide clear descriptions explaining when and how to use each prop
- Include examples for complex or commonly misused props

### 2. Consistent Categorization

- Use consistent categories across components
- Group related props together logically
- Use the `appearance` category for visual styling props

### 3. Variant Documentation

- Always provide live previews for variant options
- Document the CSS classes applied by each variant
- Include descriptions explaining when to use each variant

### 4. Example Quality

- Create examples that demonstrate real-world usage
- Highlight the specific props being demonstrated
- Include code snippets that users can copy

### 5. Accessibility

- Document all ARIA attributes and accessibility features
- Explain how to make components accessible
- Include accessibility examples

### 6. Colocation Strategy

- Keep prop configurations in the same file as the component
- Export both the component and its prop config
- Use clear naming conventions (e.g., `badgePropConfig`)

## Integration with Existing Systems

The prop explorer system is designed to work alongside existing documentation systems:

### Component Configs

Extend existing `componentConfig` objects:

```typescript
export const componentConfig = {
  // ... existing config
  propExplorer: myComponentPropConfig,
};
```

### Storybook Integration

Use prop configurations in Storybook:

```typescript
export default {
  title: "Components/Button",
  component: Button,
  argTypes: generateStorybookArgTypes(buttonPropConfig),
};
```

## Future Enhancements

### Planned Features

1. **Interactive Playground** - Live prop editing with instant preview
2. **Code Generation** - Generate component usage code from prop selections
3. **Theme Integration** - Show how props affect different themes
4. **Performance Metrics** - Show render performance impact of different props
5. **Accessibility Testing** - Automated accessibility validation
6. **Design Token Integration** - Link props to design tokens

### Extensibility

The system is designed to be extensible:

- Add new prop categories as needed
- Create custom prop metadata types for specialized use cases
- Integrate with external documentation systems
- Add custom UI components for specific prop types

## Examples

See the Badge component implementation in `src/components/ui/badge.tsx` for a complete example of the colocated approach, and visit `/prop-explorer-demo` to see the system in action.

## Contributing

When adding new components:

1. **Colocated Approach (Recommended)**:

   - Add prop configuration directly in the component file
   - Import prop explorer utilities at the top
   - Define the configuration after the component
   - Export both component and prop config

2. **Separate File Approach**:

   - Create a prop configuration file in `/src/lib/prop-configs/`
   - Use the helper functions to generate common props
   - Import and register the configuration

3. **Common Steps**:
   - Document all variants with live previews
   - Include comprehensive examples
   - Test the prop explorer interface

The prop explorer system helps maintain comprehensive, up-to-date documentation that scales with your component library while providing an excellent developer experience for component consumers.
