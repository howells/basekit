// Prop Configuration Generator [v1.0.0]
// Utilities to help generate prop configurations from TypeScript types and tailwind-variants

import { VariantProps } from "tailwind-variants";
import {
  createEventPropMetadata,
  createPropMetadata,
  createVariantOption,
  createVariantPropMetadata,
  EventPropMetadata,
  PropCategory,
  PropMetadata,
  VariantOption,
  VariantPropMetadata,
} from "./prop-explorer";

/**
 * Generate prop metadata for common HTML attributes
 */
export function generateHTMLProps(elementType: string): PropMetadata[] {
  const commonProps: PropMetadata[] = [
    createPropMetadata("id", "string", {
      description: "Unique identifier for the element",
      category: "accessibility",
    }),
    createPropMetadata("className", "string", {
      description: "Additional CSS classes to apply",
      category: "appearance",
      examples: ["mx-2", "font-bold", "shadow-lg"],
    }),
    createPropMetadata("style", "React.CSSProperties", {
      description: "Inline styles to apply to the element",
      category: "appearance",
    }),
  ];

  // Add element-specific props
  switch (elementType) {
    case "button":
      return [
        ...commonProps,
        createPropMetadata("type", '"button" | "submit" | "reset"', {
          description: "The button type",
          category: "behavior",
          defaultValue: "button",
          examples: ["button", "submit", "reset"],
        }),
        createPropMetadata("disabled", "boolean", {
          description: "Whether the button is disabled",
          category: "behavior",
          defaultValue: false,
        }),
        createPropMetadata("autoFocus", "boolean", {
          description: "Whether the button should be focused on mount",
          category: "behavior",
          defaultValue: false,
        }),
      ];

    case "input":
      return [
        ...commonProps,
        createPropMetadata("type", "string", {
          description: "The input type",
          category: "behavior",
          defaultValue: "text",
          examples: ["text", "email", "password", "number"],
        }),
        createPropMetadata("placeholder", "string", {
          description: "Placeholder text",
          category: "content",
        }),
        createPropMetadata("value", "string", {
          description: "The input value",
          category: "data",
        }),
        createPropMetadata("defaultValue", "string", {
          description: "The default input value",
          category: "data",
        }),
        createPropMetadata("disabled", "boolean", {
          description: "Whether the input is disabled",
          category: "behavior",
          defaultValue: false,
        }),
        createPropMetadata("required", "boolean", {
          description: "Whether the input is required",
          category: "behavior",
          defaultValue: false,
        }),
        createPropMetadata("readOnly", "boolean", {
          description: "Whether the input is read-only",
          category: "behavior",
          defaultValue: false,
        }),
      ];

    case "span":
    case "div":
    default:
      return commonProps;
  }
}

/**
 * Generate accessibility props
 */
export function generateAccessibilityProps(): PropMetadata[] {
  return [
    createPropMetadata("role", "string", {
      description: "ARIA role for accessibility",
      category: "accessibility",
      examples: ["button", "link", "status", "alert"],
    }),
    createPropMetadata("aria-label", "string", {
      description: "Accessible label for screen readers",
      category: "accessibility",
    }),
    createPropMetadata("aria-labelledby", "string", {
      description: "ID of element that labels this element",
      category: "accessibility",
    }),
    createPropMetadata("aria-describedby", "string", {
      description: "ID of element that describes this element",
      category: "accessibility",
    }),
    createPropMetadata("aria-expanded", "boolean", {
      description: "Whether a collapsible element is expanded",
      category: "accessibility",
    }),
    createPropMetadata("aria-hidden", "boolean", {
      description: "Whether the element is hidden from screen readers",
      category: "accessibility",
    }),
    createPropMetadata("tabIndex", "number", {
      description: "Tab order for keyboard navigation",
      category: "accessibility",
      examples: [0, -1],
    }),
  ];
}

/**
 * Generate common event handler props
 */
export function generateEventProps(elementType: string): EventPropMetadata[] {
  const commonEvents: EventPropMetadata[] = [
    createEventPropMetadata(
      "onClick",
      `(event: React.MouseEvent<HTML${
        elementType.charAt(0).toUpperCase() + elementType.slice(1)
      }Element>) => void`,
      "When the element is clicked",
      [
        {
          name: "event",
          type: `React.MouseEvent<HTML${
            elementType.charAt(0).toUpperCase() + elementType.slice(1)
          }Element>`,
          description: "The click event",
        },
      ],
      {
        description: "Handler called when the element is clicked",
      }
    ),
    createEventPropMetadata(
      "onMouseEnter",
      `(event: React.MouseEvent<HTML${
        elementType.charAt(0).toUpperCase() + elementType.slice(1)
      }Element>) => void`,
      "When the mouse enters the element",
      [
        {
          name: "event",
          type: `React.MouseEvent<HTML${
            elementType.charAt(0).toUpperCase() + elementType.slice(1)
          }Element>`,
          description: "The mouse enter event",
        },
      ],
      {
        description: "Handler called when mouse enters the element",
      }
    ),
    createEventPropMetadata(
      "onMouseLeave",
      `(event: React.MouseEvent<HTML${
        elementType.charAt(0).toUpperCase() + elementType.slice(1)
      }Element>) => void`,
      "When the mouse leaves the element",
      [
        {
          name: "event",
          type: `React.MouseEvent<HTML${
            elementType.charAt(0).toUpperCase() + elementType.slice(1)
          }Element>`,
          description: "The mouse leave event",
        },
      ],
      {
        description: "Handler called when mouse leaves the element",
      }
    ),
    createEventPropMetadata(
      "onFocus",
      `(event: React.FocusEvent<HTML${
        elementType.charAt(0).toUpperCase() + elementType.slice(1)
      }Element>) => void`,
      "When the element receives focus",
      [
        {
          name: "event",
          type: `React.FocusEvent<HTML${
            elementType.charAt(0).toUpperCase() + elementType.slice(1)
          }Element>`,
          description: "The focus event",
        },
      ],
      {
        description: "Handler called when the element receives focus",
      }
    ),
    createEventPropMetadata(
      "onBlur",
      `(event: React.FocusEvent<HTML${
        elementType.charAt(0).toUpperCase() + elementType.slice(1)
      }Element>) => void`,
      "When the element loses focus",
      [
        {
          name: "event",
          type: `React.FocusEvent<HTML${
            elementType.charAt(0).toUpperCase() + elementType.slice(1)
          }Element>`,
          description: "The blur event",
        },
      ],
      {
        description: "Handler called when the element loses focus",
      }
    ),
  ];

  // Add element-specific events
  switch (elementType) {
    case "input":
    case "textarea":
      return [
        ...commonEvents,
        createEventPropMetadata(
          "onChange",
          `(event: React.ChangeEvent<HTML${
            elementType.charAt(0).toUpperCase() + elementType.slice(1)
          }Element>) => void`,
          "When the input value changes",
          [
            {
              name: "event",
              type: `React.ChangeEvent<HTML${
                elementType.charAt(0).toUpperCase() + elementType.slice(1)
              }Element>`,
              description: "The change event",
            },
          ],
          {
            description: "Handler called when the input value changes",
          }
        ),
        createEventPropMetadata(
          "onInput",
          `(event: React.FormEvent<HTML${
            elementType.charAt(0).toUpperCase() + elementType.slice(1)
          }Element>) => void`,
          "When the input receives input",
          [
            {
              name: "event",
              type: `React.FormEvent<HTML${
                elementType.charAt(0).toUpperCase() + elementType.slice(1)
              }Element>`,
              description: "The input event",
            },
          ],
          {
            description: "Handler called when the input receives input",
          }
        ),
      ];

    case "form":
      return [
        ...commonEvents,
        createEventPropMetadata(
          "onSubmit",
          "(event: React.FormEvent<HTMLFormElement>) => void",
          "When the form is submitted",
          [
            {
              name: "event",
              type: "React.FormEvent<HTMLFormElement>",
              description: "The submit event",
            },
          ],
          {
            description: "Handler called when the form is submitted",
          }
        ),
      ];

    default:
      return commonEvents;
  }
}

/**
 * Helper to generate variant options from a tailwind-variants config
 * This is a manual helper since we can't automatically extract variant info at runtime
 */
export function generateVariantOptions(
  variantName: string,
  options: Record<
    string,
    { label?: string; description?: string; classes?: string[] }
  >,
  defaultOption?: string
): VariantPropMetadata {
  const variantOptions: VariantOption[] = Object.entries(options).map(
    ([value, config]) =>
      createVariantOption(value, {
        label: config.label || value,
        description: config.description,
        classes: config.classes,
      })
  );

  return createVariantPropMetadata(variantName, variantOptions, {
    description: `The visual style variant`,
    defaultOption,
    category: "appearance",
  });
}

/**
 * Template for generating a complete component prop configuration
 */
export interface ComponentPropTemplate {
  componentName: string;
  displayName?: string;
  description?: string;
  elementType: string;
  customProps?: PropMetadata[];
  variants?: VariantPropMetadata[];
  includeHTMLProps?: boolean;
  includeAccessibilityProps?: boolean;
  includeEventProps?: boolean;
  relatedComponents?: string[];
}

/**
 * Generate a complete prop configuration from a template
 */
export function generatePropConfig(template: ComponentPropTemplate) {
  const props: PropMetadata[] = [];
  const events: EventPropMetadata[] = [];

  // Add children prop for most components
  if (template.elementType !== "input") {
    props.push(
      createPropMetadata("children", "React.ReactNode", {
        description: "The content to display inside the component",
        category: "content",
        required: true,
      })
    );
  }

  // Add custom props
  if (template.customProps) {
    props.push(...template.customProps);
  }

  // Add HTML props
  if (template.includeHTMLProps !== false) {
    props.push(...generateHTMLProps(template.elementType));
  }

  // Add accessibility props
  if (template.includeAccessibilityProps !== false) {
    props.push(...generateAccessibilityProps());
  }

  // Add event props
  if (template.includeEventProps !== false) {
    events.push(...generateEventProps(template.elementType));
  }

  return {
    componentName: template.componentName,
    displayName: template.displayName || template.componentName,
    description: template.description,
    props,
    variants: template.variants,
    events,
    relatedComponents: template.relatedComponents,
  };
}

/**
 * Generate a complete prop configuration from tailwind-variants
 */
export function generatePropConfigFromVariants(
  componentName: string,
  displayName: string,
  description: string,
  variants: any, // tailwind-variants instance
  additionalProps: Record<
    string,
    { type: string; description: string; optional?: boolean }
  > = {}
) {
  const props: PropMetadata[] = [];
  const variantProps: VariantPropMetadata[] = [];

  // Extract variants from tailwind-variants
  const variantsConfig = variants.config?.variants || {};
  const defaultVariants = variants.config?.defaultVariants || {};

  // Generate variant props
  Object.entries(variantsConfig).forEach(([variantName, variantOptions]) => {
    const options: VariantOption[] = Object.keys(
      variantOptions as Record<string, unknown>
    ).map((optionKey) =>
      createVariantOption(optionKey, {
        label: optionKey.charAt(0).toUpperCase() + optionKey.slice(1),
        description: `${optionKey} variant`,
      })
    );

    variantProps.push(
      createVariantPropMetadata(variantName, {
        description: `${
          variantName.charAt(0).toUpperCase() + variantName.slice(1)
        } variant`,
        options,
        defaultValue: defaultVariants[variantName] || options[0]?.value,
      })
    );
  });

  // Add additional props
  Object.entries(additionalProps).forEach(([propName, propConfig]) => {
    props.push(
      createPropMetadata(propName, propConfig.type, {
        description: propConfig.description,
        category: "content",
        required: !propConfig.optional,
      })
    );
  });

  // Add common HTML props
  props.push(...generateHTMLProps("span"));

  return {
    componentName,
    displayName,
    description,
    props,
    variants: variantProps,
    events: [],
    relatedComponents: [],
  };
}

/**
 * Common variant configurations for reuse
 */
export const commonVariants = {
  size: generateVariantOptions(
    "size",
    {
      sm: {
        label: "Small",
        description: "Small size variant",
        classes: ["text-sm", "px-2", "py-1"],
      },
      md: {
        label: "Medium",
        description: "Medium size variant",
        classes: ["text-base", "px-3", "py-2"],
      },
      lg: {
        label: "Large",
        description: "Large size variant",
        classes: ["text-lg", "px-4", "py-3"],
      },
    },
    "md"
  ),

  variant: generateVariantOptions(
    "variant",
    {
      primary: {
        label: "Primary",
        description: "Primary variant for main actions",
        classes: ["bg-blue-600", "text-white"],
      },
      secondary: {
        label: "Secondary",
        description: "Secondary variant for secondary actions",
        classes: ["bg-gray-200", "text-gray-900"],
      },
      ghost: {
        label: "Ghost",
        description: "Transparent variant",
        classes: ["bg-transparent", "hover:bg-gray-100"],
      },
    },
    "primary"
  ),
};

/**
 * JSDoc comment parser (basic implementation)
 * In a real implementation, you might use a proper JSDoc parser
 */
export function parseJSDocComment(comment: string): Partial<PropMetadata> {
  const lines = comment
    .split("\n")
    .map((line) => line.trim().replace(/^\*\s?/, ""));
  const result: Partial<PropMetadata> = {};

  for (const line of lines) {
    if (line.startsWith("@description ")) {
      result.description = line.replace("@description ", "");
    } else if (line.startsWith("@category ")) {
      result.category = line.replace("@category ", "") as PropCategory;
    } else if (line.startsWith("@defaultValue ")) {
      const defaultStr = line.replace("@defaultValue ", "");
      result.defaultValue =
        defaultStr === "true"
          ? true
          : defaultStr === "false"
          ? false
          : defaultStr;
    } else if (line.startsWith("@example ")) {
      const example = line.replace("@example ", "");
      result.examples = result.examples || [];
      result.examples.push(example);
    } else if (line.startsWith("@since ")) {
      result.since = line.replace("@since ", "");
    } else if (line.startsWith("@deprecated ")) {
      result.deprecated = line.replace("@deprecated ", "") || true;
    } else if (line.startsWith("@docLink ")) {
      result.docLink = line.replace("@docLink ", "");
    }
  }

  return result;
}
