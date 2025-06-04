import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";
import { Service } from "./columns";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

export default function ViewService({ service }: { service: Service }) {
  return (
    <Dialog>
      <DialogTrigger className="h-8 w-8 p-0 focus-visible:ring-0 data-[state=open]:bg-accent cursor-pointer focus-visible:bg-transparent">
        <span className="sr-only">View vendor</span>
        <Eye className="h-4 w-4" />
      </DialogTrigger>
      <DialogContent
        className="!max-w-[48em] max-h-[90vh]"
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>{service.service}</DialogTitle>

          <div className="flex gap-2 items-center mt-5">
            <div className="grid grid-cols-4 w-full items-center gap-2 ">
              <Label htmlFor="name" className="ml-1.5 text-sm">
                Service
              </Label>
              <Input
                className="!text-primary col-span-3"
                type="text"
                id="name"
                disabled
                name="name"
                value={service.service}
              />
            </div>
          </div>

          <div className="grid grid-cols-4 w-full items-center gap-2 ">
            <Label htmlFor="name" className="ml-1.5 text-sm">
              Provided by
            </Label>
            <Input
              className="!cursor-not-allowed !text-primary col-span-3"
              type="text"
              id="name"
              disabled
              name="name"
              value={service.providedBy}
            />
          </div>

          <div className="grid grid-cols-4 w-full items-center gap-2 ">
            <Label htmlFor="name" className="ml-1.5 text-sm">
              Status
            </Label>
            <Input
              className="!cursor-not-allowed !text-primary col-span-3"
              type="text"
              id="name"
              disabled
              name="name"
              value={service.status}
            />
          </div>

          <div className="">
            {/* <div className="text-primary mt-5">
              <p className="underline">Address</p>
              <p className="text-xs">{vendor.address.addressLine1}</p>
              <p className="text-xs">{vendor.address.addressLine2}</p>
              <p className="text-xs">
                {vendor.address.state}, {vendor.address.country}
              </p>
            </div>
            <div className="text-primary mt-5">
              <p className="underline">Contact Details</p>
              <p className="text-xs">{vendor.contact.fullname}</p>
              <a href={`tel:${vendor.contact.phone}`} className="text-xs">
                {vendor.contact.phone}
              </a>
              <a href={`mailto:${vendor.contact.email}`} className="text-xs">
                {vendor.contact.email}
              </a>
            </div> */}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
