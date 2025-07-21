import { ComponentConfig } from "@/lib/component-config-types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "./table";

export const componentConfig: ComponentConfig = {
  id: "table",
  name: "Table",
  description:
    "A data table component for displaying tabular data with headers and rows.",
  category: "ui",
  importStatement: 'import { Table } from "@/components/ui/table"',
  componentId: "Table",
  props: [],
  examples: [
    {
      id: "basic",
      title: "Basic Table",
      description: "A simple data table",
      code: `<Table>
  <TableHead>
    <TableRow>
      <TableHeaderCell>Name</TableHeaderCell>
      <TableHeaderCell>Email</TableHeaderCell>
      <TableHeaderCell>Role</TableHeaderCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
      <TableCell>Admin</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Jane Smith</TableCell>
      <TableCell>jane@example.com</TableCell>
      <TableCell>User</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
    },
  ],
};
