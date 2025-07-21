import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "code-block",
  name: "Code Block",
  description: "A code block component with syntax highlighting, language display, and copy functionality.",
  category: "ui" as const,
  badge: "UI",
  importStatement: `import { CodeBlock } from "@/components/ui/code-block";`,
  componentId: "CodeBlockExample",
  props: [
    {
      name: "children",
      type: "string",
      defaultValue: `const greeting = "Hello, World!";\nconsole.log(greeting);`,
      description: "The code content to display.",
      required: true,
    },
    {
      name: "language",
      type: "select",
      options: ["tsx", "javascript", "typescript", "jsx", "css", "html", "json", "bash", "python"],
      defaultValue: "tsx",
      description: "The programming language for the code block header.",
    },
    {
      name: "theme",
      type: "select",
      options: ["auto", "light", "dark"],
      defaultValue: "auto",
      description: "The color theme for syntax highlighting.",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic code block with TypeScript syntax.",
      code: `<CodeBlock>
{\`const greeting = "Hello, World!";\nconsole.log(greeting);\`}
</CodeBlock>`,
    },
    {
      id: "javascript",
      title: "JavaScript",
      description: "Code block displaying JavaScript code.",
      code: `<CodeBlock language="javascript">
{\`function calculateSum(a, b) {\n  return a + b;\n}\n\nconst result = calculateSum(5, 3);\nconsole.log(result);\`}
</CodeBlock>`,
    },
    {
      id: "css",
      title: "CSS",
      description: "Code block showing CSS styles.",
      code: `<CodeBlock language="css">
{\`.button {\n  background-color: #3b82f6;\n  color: white;\n  padding: 0.5rem 1rem;\n  border-radius: 0.25rem;\n  border: none;\n  cursor: pointer;\n}\n\n.button:hover {\n  background-color: #2563eb;\n}\`}
</CodeBlock>`,
    },
    {
      id: "json",
      title: "JSON",
      description: "Code block for JSON configuration.",
      code: `<CodeBlock language="json">
{\`{\n  "name": "my-project",\n  "version": "1.0.0",\n  "dependencies": {\n    "react": "^18.0.0",\n    "typescript": "^4.9.0"\n  }\n}\`}
</CodeBlock>`,
    },
    {
      id: "bash",
      title: "Bash",
      description: "Code block for shell commands.",
      code: `<CodeBlock language="bash">
{\`npm install\nnpm run dev\n\n# Start the development server\nnpm start\`}
</CodeBlock>`,
    },
  ],
};