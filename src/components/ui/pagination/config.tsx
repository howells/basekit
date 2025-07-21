import { ComponentConfig } from "@/lib/component-config-types";
import { PaginationExample } from "./example";

export const componentConfig: ComponentConfig = {
  id: "pagination",
  name: "Pagination",
  description:
    "A pagination component for navigating through multiple pages of content.",
  category: "ui",
  importStatement: 'import { Pagination } from "@/components/ui/pagination"',
  componentId: "PaginationExample",
  component: PaginationExample,
  props: [
    {
      name: "currentPage",
      type: "number",
      defaultValue: 3,
      description: "The currently active page number",
      control: "NumberField",
      min: 1,
      max: 50,
    },
    {
      name: "totalPages",
      type: "number",
      defaultValue: 10,
      description: "Total number of pages",
      control: "NumberField",
      min: 1,
      max: 100,
    },
    {
      name: "maxVisible",
      type: "number",
      defaultValue: 7,
      description: "Maximum number of page numbers to show before using gaps",
      control: "NumberField",
      min: 3,
      max: 15,
    },
    {
      name: "showPreviousNext",
      type: "boolean",
      defaultValue: true,
      description: "Whether to show Previous/Next navigation buttons",
      control: "boolean",
    },
    {
      name: "previousLabel",
      type: "string",
      defaultValue: "Previous",
      description: "Text label for the previous button",
      control: "text",
    },
    {
      name: "nextLabel",
      type: "string",
      defaultValue: "Next",
      description: "Text label for the next button",
      control: "text",
    },
  ],
  examples: [
    {
      id: "basic",
      title: "Basic Pagination",
      description: "Simple pagination with previous/next navigation",
      code: `<Pagination>
  <PaginationPrevious href="#prev" />
  <PaginationList>
    <PaginationPage href="#1" current>1</PaginationPage>
    <PaginationPage href="#2">2</PaginationPage>
    <PaginationPage href="#3">3</PaginationPage>
  </PaginationList>
  <PaginationNext href="#next" />
</Pagination>`,
    },
    {
      id: "with-ellipsis",
      title: "Pagination with Ellipsis",
      description: "Pagination showing ellipsis for large page counts",
      code: `<Pagination>
  <PaginationPrevious href="#prev" />
  <PaginationList>
    <PaginationPage href="#1">1</PaginationPage>
    <PaginationPage href="#2">2</PaginationPage>
    <PaginationPage href="#3" current>3</PaginationPage>
    <span>...</span>
    <PaginationPage href="#10">10</PaginationPage>
  </PaginationList>
  <PaginationNext href="#next" />
</Pagination>`,
    },
  ],
};
