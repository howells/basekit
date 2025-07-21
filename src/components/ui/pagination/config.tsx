import { ComponentConfig } from "@/lib/component-config-types";
import {
  Pagination,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from "./pagination";

export const componentConfig: ComponentConfig = {
  id: "pagination",
  name: "Pagination",
  description:
    "A pagination component for navigating through multiple pages of content.",
  category: "ui",
  importStatement: 'import { Pagination } from "@/components/ui/pagination"',
  componentId: "Pagination",
  props: [],
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
