import {
  AlertCircle,
  ArrowRight,
  Check,
  Clock,
  Info,
  Star,
  TrendingUp,
  X,
} from "lucide-react";
import React from "react";
import { Badge } from "./badge";

// Default badge
export const DefaultExample = () => <Badge>Badge</Badge>;

// Badge with icons
export const WithIconsExample = () => (
  <Badge leftIcon={Check} rightIcon={ArrowRight} variant="success">
    Success
  </Badge>
);

// All variants
export const VariantsExample = () => (
  <div className="flex flex-wrap gap-2">
    <Badge variant="default">Default</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="error">Error</Badge>
    <Badge variant="warning">Warning</Badge>
    <Badge variant="neutral">Neutral</Badge>
  </div>
);

// Different sizes
export const SizesExample = () => (
  <div className="flex items-center gap-2">
    <Badge size="sm">Small</Badge>
    <Badge size="base">Base</Badge>
    <Badge size="lg">Large</Badge>
  </div>
);

// Bordered vs borderless
export const BorderedExample = () => (
  <div className="flex flex-wrap gap-2">
    <Badge bordered={true}>With Border</Badge>
    <Badge bordered={false}>Without Border</Badge>
    <Badge bordered={true} variant="success">
      Bordered Success
    </Badge>
    <Badge bordered={false} variant="success">
      Borderless Success
    </Badge>
  </div>
);

// Badge with left icon only
export const LeftIconExample = () => (
  <div className="flex flex-wrap gap-2">
    <Badge leftIcon={Check} variant="success">
      Approved
    </Badge>
    <Badge leftIcon={X} variant="error">
      Rejected
    </Badge>
    <Badge leftIcon={AlertCircle} variant="warning">
      Pending
    </Badge>
    <Badge leftIcon={Info} variant="neutral">
      Info
    </Badge>
  </div>
);

// Badge with right icon only
export const RightIconExample = () => (
  <div className="flex flex-wrap gap-2">
    <Badge rightIcon={ArrowRight}>Continue</Badge>
    <Badge rightIcon={TrendingUp} variant="success">
      Growing
    </Badge>
    <Badge rightIcon={Clock} variant="warning">
      In Progress
    </Badge>
  </div>
);

// Status badges
export const StatusExample = () => (
  <div className="flex flex-wrap gap-2">
    <Badge variant="success" leftIcon={Check}>
      Active
    </Badge>
    <Badge variant="warning" leftIcon={Clock}>
      Pending
    </Badge>
    <Badge variant="error" leftIcon={X}>
      Inactive
    </Badge>
    <Badge variant="neutral" leftIcon={Info}>
      Draft
    </Badge>
  </div>
);

// Category badges
export const CategoryExample = () => (
  <div className="flex flex-wrap gap-2">
    <Badge variant="default">Feature</Badge>
    <Badge variant="success">New</Badge>
    <Badge variant="warning">Beta</Badge>
    <Badge variant="error">Deprecated</Badge>
  </div>
);

// Custom styled badge
export const CustomStyleExample = () => (
  <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
    Custom Style
  </Badge>
);

// Badge group
export const GroupExample = () => (
  <div className="flex items-center gap-2">
    <Badge size="sm" leftIcon={Star}>
      Featured
    </Badge>
    <Badge size="sm" variant="success">
      Popular
    </Badge>
    <Badge size="sm" variant="warning">
      Limited
    </Badge>
  </div>
);

// Borderless variations
export const BorderlessVariantsExample = () => (
  <div className="flex flex-wrap gap-2">
    <Badge bordered={false} variant="default">
      Default
    </Badge>
    <Badge bordered={false} variant="success">
      Success
    </Badge>
    <Badge bordered={false} variant="error">
      Error
    </Badge>
    <Badge bordered={false} variant="warning">
      Warning
    </Badge>
    <Badge bordered={false} variant="neutral">
      Neutral
    </Badge>
  </div>
);
