import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "@/components/table-column-header";
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
import ViewService from "./view-service";
import EditService from "./edit-service";

export type Service = {
  id: string;
  service: string;
  providedBy: string;
  status: "active" | "inactive";
};

export const columns: ColumnDef<Service>[] = [
  {
    id: "view",
    cell: ({ row }) => {
      const service = row.original;

      return <ViewService service={service} />;
    },
  },

  {
    accessorKey: "service",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Service" />,
  },

  {
    accessorKey: "providedBy",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Provided By" />,
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
    cell: ({ row, getValue }) => {
      const service = row.original;

      return <EditService service={service} getValue={getValue} />;
    },
  },
];
