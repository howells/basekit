import type { ComponentConfig } from "@/lib/component-config-types";
import { jsxToString } from "@/lib/jsx-to-string";
import { DefaultExample, WithFormExample, ConfirmationExample, ControlledExample  } from "./examples";

export const componentConfig: ComponentConfig = {
  id: "dialog",
  name: "Dialog",
  description:
    "Modal dialog component built on Base UI with overlay and focus management.",
  category: "ui" as const,
  icon: "MessageSquare",

  importStatement: `import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";`,
  componentId: "DialogExample",
  props: [
    {
      name: "size",
      type: "select",
      options: ["sm", "md", "lg", "xl"],
      defaultValue: "md",
      description: "Size of the dialog content."
    },
    {
      name: "showCloseButton",
      type: "boolean",
      defaultValue: true,
      description: "Whether to show the close button in the header."
    },
    {
      name: "closeOnOverlayClick",
      type: "boolean",
      defaultValue: true,
      description: "Whether clicking the overlay closes the dialog."
    }
  ],
  examples: [
    {
      id: "default",
      title: "Default",
      description: "Basic dialog with trigger button and content.",
      code: `<Dialog>
  <DialogTrigger render={<Button />}>
    Open Dialog
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        This is a dialog description that explains what the dialog is for.
      </DialogDescription>
    </DialogHeader>
    <div className="py-4">
      <p>Dialog content goes here.</p>
    </div>
    <DialogFooter>
      <DialogClose render={<Button variant="secondary" />}>
        Cancel
      </DialogClose>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`
    },
    {
      id: "with-form",
      title: "With Form",
      description: "Dialog containing a form with input fields.",
      code: jsxToString(<WithFormExample />)},
    {
      id: "confirmation",
      title: "Confirmation",
      description: "Dialog for confirming destructive actions.",
      code: jsxToString(<ConfirmationExample />)},
    {
      id: "controlled",
      title: "Controlled",
      description: "Dialog with controlled open state.",
      code: `const ControlledExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button />}>
        Open Controlled Dialog
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Controlled Dialog</DialogTitle>
          <DialogDescription>
            This dialog's open state is controlled externally.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>Current state: {open ? 'Open' : 'Closed'}</p>
          <Button onClick={() => setOpen(false)}>
            Close from inside
          </Button>
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="secondary" />}>
            Close
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};`}
  ]
};
