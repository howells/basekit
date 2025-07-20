"use client";

import { ComponentConfig } from "@/lib/component-configs";
import { Badge } from "./ui/badge";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";

interface ComponentHeaderProps {
  config: ComponentConfig;
}

export function ComponentHeader({ config }: ComponentHeaderProps) {
  return (
    <div className="space-y-2 px-8 py-8 border-b">
      <div className="flex items-center gap-3">
        <Heading level={1}>{config.name}</Heading>
        {config.badge && <Badge variant="neutral">{config.badge}</Badge>}
      </div>
      <Text>{config.description}</Text>
    </div>
  );
}
