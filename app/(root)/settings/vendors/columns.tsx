import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/table-column-header";
import ViewVendor from "./view-vendor";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import EditVendor from "./edit-vendor";

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

      return <ViewVendor vendor={vendor} />;
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

      return <EditVendor vendor={vendor} />;
    },
  },
];
