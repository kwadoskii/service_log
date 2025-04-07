"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, Pen } from "lucide-react";
import { Button } from "@/components/ui/button";

import { DataTableColumnHeader } from "@/components/table-column-header";

export type Vendor = {
  id: string;
  name: string;
  address: {
    addressLine1: string;
    addressLine2: string;
    state: string;
    country: string;
  };
  contact: {
    fullname: string;
    phone: string;
    email: string;
  };
  email: string;
  altEmail: string;
  servicesProvided: string;
  status: "active" | "inactive";
};

export const columns: ColumnDef<Vendor>[] = [
  {
    id: "view",
    cell: ({ row }) => {
      const vendor = row.original;

      return (
        <Button
          variant="link"
          className="h-8 w-8 p-0 focus-visible:ring-0 data-[state=open]:bg-accent cursor-pointer"
          onClick={() => console.log(vendor.id)}
        >
          <span className="sr-only">View vendor</span>
          <Eye className="h-4 w-4" />
        </Button>
      );
    },
  },

  {
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
  },

  {
    accessorKey: "email",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
  },
  {
    accessorKey: "contact.fullname",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Contact Name" />,
  },
  {
    accessorKey: "contact.email",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Contact Email" />,
  },

  {
    accessorKey: "servicesProvided",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Service Provided" />,
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

  {
    id: "edit",
    cell: ({ row }) => {
      const vendor = row.original;

      return (
        <Button
          variant="link"
          className="h-8 w-8 p-0 focus-visible:ring-0 data-[state=open]:bg-accent cursor-pointer"
          onClick={() => console.log(vendor.id)}
        >
          <span className="sr-only">Edit vendor</span>
          <Pen className="h-4 w-4" />
        </Button>
      );
    },
  },
];
