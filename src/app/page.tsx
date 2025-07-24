import { Heading } from "@/components/ui/heading/heading";
import { Text } from "@/components/ui/text/text";

export default function Home() {
  return (
    <div className="p-8">
      <Heading level={1}>Welcome to Patternmode</Heading>
      <Text size="lg">
        A modern React component library built with Base UI, Tailwind CSS, and
        TypeScript.
      </Text>
    </div>
  );
}
