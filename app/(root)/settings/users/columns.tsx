"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

import { DataTableColumnHeader } from "@/components/table-column-header";

export type User = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  status: "active" | "inactive";
};

export const columns: ColumnDef<User>[] = [
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <Button
          variant="ghost"
          className="h-8 w-8 p-0 focus-visible:ring-0 data-[state=open]:bg-accent cursor-pointer"
          onClick={() => console.log(payment.id)}
        >
          <span className="sr-only">View user</span>
          <Eye className="h-4 w-4" />
        </Button>
      );
    },
  },

  {
    accessorKey: "firstname",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Firstname" />,
  },
  {
    accessorKey: "lastname",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Lastname" />,
  },
  {
    accessorKey: "email",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
  },

  {
    accessorKey: "status",
    enableGlobalFilter: false,
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    cell: ({ row }) => {
      let status: string = row.getValue("status");

      return (
        <Badge
          className={cn(
            "w-19",
            status === "inactive" && "bg-destructive",
            status === "active" && "bg-success"
          )}
        >
          {status}
        </Badge>
      );
    },
  },
];
