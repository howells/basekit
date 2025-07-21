import type { ComponentConfig } from "@/lib/component-config-types";

export const componentConfig: ComponentConfig = {
  id: "split-button",
  name: "Split Button",
  description:
    "A split button component that combines a primary action button with a dropdown menu for additional actions.",
  category: "ui" as const,
  badge: "UI",
  installation: {
    npm: "@base-ui-components/react",
  },
  importStatement: `import { SplitButton } from "@/components/ui/split-button/split-button";
import { MenuItem, MenuSeparator, MenuLabel } from "@/components/ui/menu";`,
  componentId: "SplitButtonExample",
  props: [
    {
      name: "variant",
      type: "select",
      options: ["default", "secondary", "destructive", "outline", "ghost"],
      defaultValue: "default",
      description: "The visual style variant of the split button.",
    },
    {
      name: "size",
      type: "select",
      options: ["default", "sm"],
      defaultValue: "default",
      description: "The size of the split button.",
    },
    {
      name: "rounded",
      type: "boolean",
      defaultValue: false,
      description: "Makes the split button fully rounded.",
    },
    {
      name: "buttonContent",
      type: "string",
      defaultValue: "Save",
      description: "The content to display inside the main button.",
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
      description: "Disables the split button interaction.",
    },
    {
      name: "isLoading",
      type: "boolean",
      defaultValue: false,
      description: "Shows loading spinner on the main button and disables it.",
    },
    {
      name: "loadingText",
      type: "string",
      description: "Text to show when the main button is loading (optional).",
    },
    {
      name: "leftIcon",
      type: "icon",
      description: "Icon to display on the left side of the main button.",
    },
    {
      name: "dropdownIcon",
      type: "icon",
      description:
        "Icon to display on the dropdown trigger (defaults to ChevronDown).",
    },
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic split button with default styling.",
      code: `<SplitButton
  buttonContent="Save"
  onButtonClick={() => console.log('Save clicked')}
>
  <MenuItem>Save as Draft</MenuItem>
  <MenuItem>Save as Template</MenuItem>
  <MenuSeparator />
  <MenuItem>Export</MenuItem>
</SplitButton>`,
    },
    {
      id: "variants",
      title: "Variants",
      description: "Split buttons with different visual styles.",
      code: `<div className="flex gap-2">
  <SplitButton variant="default" buttonContent="Default">
    <MenuItem>Action 1</MenuItem>
    <MenuItem>Action 2</MenuItem>
  </SplitButton>

  <SplitButton variant="secondary" buttonContent="Secondary">
    <MenuItem>Action 1</MenuItem>
    <MenuItem>Action 2</MenuItem>
  </SplitButton>

  <SplitButton variant="outline" buttonContent="Outline">
    <MenuItem>Action 1</MenuItem>
    <MenuItem>Action 2</MenuItem>
  </SplitButton>
</div>`,
    },
    {
      id: "with-icons",
      title: "With Icons",
      description: "Split button with left icon and custom dropdown icon.",
      code: `<SplitButton
  buttonContent="Download"
  leftIcon={DownloadIcon}
  dropdownIcon={ChevronDownIcon}
>
  <MenuItem>
    <MenuIconWrapper>
      <FileIcon className="size-4" />
    </MenuIconWrapper>
    Download PDF
  </MenuItem>
  <MenuItem>
    <MenuIconWrapper>
      <ImageIcon className="size-4" />
    </MenuIconWrapper>
    Download Image
  </MenuItem>
  <MenuItem>
    <MenuIconWrapper>
      <CodeIcon className="size-4" />
    </MenuIconWrapper>
    Download Source
  </MenuItem>
</SplitButton>`,
    },
    {
      id: "sizes",
      title: "Sizes",
      description: "Different split button sizes.",
      code: `<div className="flex items-center gap-2">
  <SplitButton size="sm" buttonContent="Small">
    <MenuItem>Action 1</MenuItem>
    <MenuItem>Action 2</MenuItem>
  </SplitButton>

  <SplitButton size="default" buttonContent="Default">
    <MenuItem>Action 1</MenuItem>
    <MenuItem>Action 2</MenuItem>
  </SplitButton>
</div>`,
    },
    {
      id: "loading-state",
      title: "Loading State",
      description: "Split button in loading state.",
      code: `<SplitButton
  buttonContent="Processing"
  isLoading={true}
  loadingText="Saving..."
>
  <MenuItem>Save as Draft</MenuItem>
  <MenuItem>Save as Template</MenuItem>
</SplitButton>`,
    },
    {
      id: "disabled",
      title: "Disabled",
      description: "Disabled split button.",
      code: `<SplitButton
  buttonContent="Disabled"
  disabled={true}
>
  <MenuItem>Action 1</MenuItem>
  <MenuItem>Action 2</MenuItem>
</SplitButton>`,
    },
    {
      id: "complex-menu",
      title: "Complex Menu",
      description: "Split button with a complex dropdown menu.",
      code: `<SplitButton
  buttonContent="Publish"
  onButtonClick={() => console.log('Publish clicked')}
>
  <MenuLabel>Publish Options</MenuLabel>
  <MenuItem>Publish Now</MenuItem>
  <MenuItem>Schedule for Later</MenuItem>
  <MenuSeparator />

  <MenuLabel>Save Options</MenuLabel>
  <MenuItem>Save as Draft</MenuItem>
  <MenuItem>Save as Template</MenuItem>
  <MenuSeparator />

  <MenuItem>Preview</MenuItem>
  <MenuItem>Export</MenuItem>
</SplitButton>`,
    },
  ],
};
