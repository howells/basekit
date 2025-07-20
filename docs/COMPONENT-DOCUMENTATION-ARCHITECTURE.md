# Component Documentation Architecture

## Overview

This project uses a **configuration-driven approach** to generate component documentation pages. Instead of creating individual page files for each component, we use a centralized configuration system that scales efficiently.

## Architecture Benefits

### ✅ **Configuration over Layout**

- Single source of truth for component documentation
- Consistent structure across all components
- Easy to maintain and update

### ✅ **Scalable**

- Add new components by creating a config file
- No need to duplicate page layouts
- Automatic route generation

### ✅ **Type-Safe**

- Full TypeScript support
- Validated configuration structure
- Compile-time error checking

### ✅ **DRY (Don't Repeat Yourself)**

- Reusable documentation templates
- Shared components for common patterns
- Helper utilities for consistency

## File Structure

```
src/
├── lib/
│   ├── component-configs.ts      # Type definitions
│   ├── component-registry.ts     # Central registry
│   ├── config-helpers.ts         # Helper utilities
│   └── configs/
│       ├── accordion-config.tsx  # Example component config
│       ├── button-config.tsx     # Add more as needed
│       └── ...
├── components/
│   ├── component-documentation-page.tsx  # Main template
│   ├── doc-example.tsx                   # Example component
│   └── api-reference.tsx                 # API documentation
├── app/
│   ├── [category]/
│   │   ├── page.tsx                      # Category overview
│   │   └── [component]/
│   │       └── page.tsx                  # Dynamic component page
│   └── ui/accordion/page.tsx             # Legacy (redirects)
```

## How It Works

### 1. Component Configuration

Each component has a configuration file that defines:

```typescript
export const buttonConfig: ComponentConfig = {
  id: "button",
  name: "Button",
  description: "A clickable button component with multiple variants.",
  category: "ui",
  badge: "UI",

  installation: {
    npm: "npm install @base-ui-components/react",
  },

  importStatement: `import { Button } from "@/components/ui/button";`,

  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic button usage.",
      preview: <Button>Click me</Button>,
      code: `<Button>Click me</Button>`,
    },
    // More examples...
  ],

  api: [
    {
      name: "Button",
      description: "The main button component.",
      properties: [
        {
          name: "variant",
          type: '"primary" | "secondary" | "outline"',
          default: '"primary"',
          description: "The visual style of the button.",
        },
        // More properties...
      ],
    },
  ],

  accessibility: {
    pattern: {
      name: "Button WAI-ARIA design pattern",
      url: "https://www.w3.org/WAI/ARIA/apg/patterns/button/",
    },
    keyboardShortcuts: [
      {
        key: "Space",
        description: "Activates the button.",
      },
      // More shortcuts...
    ],
  },
};
```

### 2. Dynamic Routes

The system uses Next.js dynamic routes:

- `/[category]` - Shows all components in a category (ui, inputs, forms, charts)
- `/[category]/[component]` - Shows documentation for a specific component

### 3. Component Registry

All configurations are registered in a central registry:

```typescript
export const componentRegistry: ComponentConfigRegistry = {
  button: buttonConfig,
  accordion: accordionConfig,
  input: inputConfig,
  // Add more components...
};
```

## Adding New Components

### Step 1: Create Component Configuration

Create a new file in `src/lib/configs/`:

```typescript
// src/lib/configs/your-component-config.tsx
import React from "react";
import { ComponentConfig } from "../component-configs";
import { YourComponent } from "@/components/ui/your-component";

export const yourComponentConfig: ComponentConfig = {
  id: "your-component",
  name: "Your Component",
  description: "Description of what your component does.",
  category: "ui", // or "inputs", "forms", "charts"

  importStatement: `import { YourComponent } from "@/components/ui/your-component";`,

  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic usage example.",
      preview: <YourComponent />,
      code: `<YourComponent />`,
    },
  ],

  // Add API reference, accessibility info, etc.
};
```

### Step 2: Register Component

Add to the registry in `src/lib/component-registry.ts`:

```typescript
import { yourComponentConfig } from "./configs/your-component-config";

export const componentRegistry: ComponentConfigRegistry = {
  // ... existing components
  "your-component": yourComponentConfig,
};
```

### Step 3: That's It!

Your component documentation is now available at:

- `/ui/your-component` (or whatever category you chose)

## Helper Utilities

Use the helper functions in `config-helpers.ts` for consistency:

```typescript
import {
  createExample,
  createAPIProperty,
  createComponentConfig,
} from "@/lib/config-helpers";

// Create examples easily
const defaultExample = createExample(
  "default",
  "Default",
  "Basic usage",
  `<Button>Click me</Button>`,
  <Button>Click me</Button>
);

// Create API properties
const variantProp = createAPIProperty(
  "variant",
  '"primary" | "secondary"',
  "The button style",
  { default: '"primary"' }
);

// Use template for basic config
const config = createComponentConfig(
  "button",
  "Button",
  "A clickable button",
  "ui",
  {
    examples: [defaultExample],
    api: [
      {
        name: "Button",
        description: "Main component",
        properties: [variantProp],
      },
    ],
  }
);
```

## Configuration Validation

Use the validation helper to ensure your config is complete:

```typescript
import { validateConfig } from "@/lib/config-helpers";

const errors = validateConfig(yourComponentConfig);
if (errors.length > 0) {
  console.error("Configuration errors:", errors);
}
```

## Best Practices

### 1. **Comprehensive Examples**

- Include at least one basic example
- Show all major variants and props
- Include real-world usage scenarios

### 2. **Clear API Documentation**

- Document all public props
- Include default values
- Provide clear descriptions

### 3. **Accessibility Information**

- Link to WAI-ARIA patterns when applicable
- Document keyboard shortcuts
- Include accessibility notes

### 4. **Consistent Naming**

- Use kebab-case for component IDs
- Match component names to actual exports
- Use descriptive example IDs

### 5. **Code Examples**

- Keep code examples concise but complete
- Use proper formatting and indentation
- Include necessary imports in descriptions

## Migration Guide

### From Individual Pages

If you have existing component pages (like the old accordion page):

1. Extract the content into a configuration file
2. Update the old page to redirect to the new route
3. Remove the old page once migration is complete

### Legacy Support

The system supports gradual migration:

- Old pages can redirect to new routes
- New components use the configuration system
- Both approaches can coexist during transition

## Advanced Features

### Custom Sections

Add custom sections to your documentation:

```typescript
sections: [
  {
    title: "Advanced Usage",
    content: <div>Your custom React content here</div>,
  },
  {
    title: "Migration Guide",
    content: "String content for simple sections",
  },
];
```

### Example Wrappers

Wrap examples in containers for better presentation:

```typescript
{
  id: "in-card",
  title: "In Card",
  description: "Component wrapped in a card",
  preview: <YourComponent />,
  code: `<YourComponent />`,
  wrapper: ({ children }) => <Card className="p-4">{children}</Card>
}
```

### Installation Instructions

Specify package dependencies:

```typescript
installation: {
  npm: "npm install @your-package/component",
  dependencies: [
    "npm install lucide-react",
    "npm install @base-ui-components/react"
  ]
}
```

## Performance Considerations

- **Static Generation**: Use `generateStaticParams` for better performance
- **Code Splitting**: Component configs are only loaded when needed
- **Type Safety**: Configuration errors are caught at build time
- **Bundle Size**: Only the needed configuration is included in each page

## Future Enhancements

Potential improvements to consider:

1. **Auto-generation**: Generate configs from component source code
2. **Interactive Examples**: Add live editing capabilities
3. **Search Integration**: Add search across all component documentation
4. **Theme Variants**: Show components in different themes
5. **Export Utilities**: Export documentation as JSON/markdown

This architecture provides a solid foundation that can grow with your component library while maintaining consistency and developer experience.
