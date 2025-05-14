import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";
import { Vendor } from "./columns";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function ViewVendor({ vendor }: { vendor: Vendor }) {
  return (
    <Dialog>
      <DialogTrigger className="h-8 w-8 p-0 focus-visible:ring-0 data-[state=open]:bg-accent cursor-pointer focus-visible:bg-transparent">
        <span className="sr-only">View vendor</span>
        <Eye className="h-4 w-4" />
      </DialogTrigger>
      <DialogContent
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
        // onEscapeKeyDown={(e) => {
        //   e.preventDefault();
        // }}
      >
        <DialogHeader>
          <DialogTitle>{vendor.name}</DialogTitle>
          <div className="flex">
            <a className="-mt-2 text-sm" href={`mailto:${vendor.email}`}>
              {vendor.email}
            </a>
            {vendor.altEmail && (
              <a className="-mt-2 text-sm" href={`mailto:${vendor.altEmail}`}>
                , {vendor.altEmail}
              </a>
            )}
          </div>
          <div className="flex gap-2 items-center -mt-1">
            <Badge className="">{vendor.servicesProvided}</Badge>
            <Badge
              className={cn(
                "w-19",
                vendor.status === "inactive" && "bg-destructive",
                vendor.status === "active" && "bg-success"
              )}
            >
              {vendor.status}
            </Badge>
          </div>

          <div className="">
            <div className="text-primary mt-5">
              <p className="underline">Address</p>
              <p className="text-xs">{vendor.address.addressLine1},</p>
              <p className="text-xs">{vendor.address.addressLine2},</p>
              <p className="text-xs">
                {vendor.address.state}, {vendor.address.country}
              </p>
            </div>
            <div className="text-primary mt-5">
              <p className="underline">Contact Details</p>
              <p className="text-xs">{vendor.contact.fullname}</p>
              <a href={`tel:${vendor.contact.phone}`} className="text-xs block">
                {vendor.contact.phone}
              </a>
              <a href={`mailto:${vendor.contact.email}`} className="text-xs block">
                {vendor.contact.email}
              </a>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
