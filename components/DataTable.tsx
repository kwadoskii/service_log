"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function DataTable({ data }: DataTableProps) {
  return (
    <Table className="w-full">
      <TableCaption></TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Fullname</TableHead>
          {/* <TableHead>Status</TableHead> */}
          {/* <TableHead>Method</TableHead> */}
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((data, i) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{data.name}</TableCell>
            <TableCell>{data.email}</TableCell>
            <TableCell>{data.status}</TableCell>
            {/* <TableCell className="text-right">{invoice.totalAmount}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        {/* <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow> */}
      </TableFooter>
    </Table>
  );
}

interface DataTableProps {
  data: {
    name: string;
    email: string;
    status?: string;
  }[];
}
