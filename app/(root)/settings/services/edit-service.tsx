"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pen } from "lucide-react";
import { Service } from "./columns";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries, serviceTypes, states } from "@/config/preship-data";

export default function EditService({ service, getValue }: { service: Service; getValue: any }) {
  const [values, setValues] = useState({
    id: service.id,
    service: service.service,
    providedBy: service.providedBy,
    status: service.status,
  });
  const [value, setValue] = useState(service);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;

    setValues({
      ...values,
      [name]: value,
    });
  };

  console.log(service);

  return (
    <Dialog>
      <DialogTrigger className="h-8 w-8 p-0 focus-visible:ring-0 data-[state=open]:bg-accent cursor-pointer focus-visible:bg-transparent">
        <span className="sr-only">Edit vendor</span>
        <Pen className="h-4 w-4" />
      </DialogTrigger>
      <DialogContent
        className="!max-w-[48em] max-h-[90vh] overflow-y-auto"
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>{values.service}</DialogTitle>

          <div className="flex gap-2 items-center mt-5">
            <div className="grid grid-cols-4 w-full items-center gap-2 ">
              <Label htmlFor="service" className="ml-1.5 text-sm">
                Service
              </Label>
              <Input
                className="!text-primary col-span-3"
                type="text"
                id="service"
                name="service"
                value={values.service}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="grid grid-cols-4 w-full items-center gap-2 ">
            <Label htmlFor="providedBy" className="ml-1.5 text-sm">
              Provided by
            </Label>
            <Select>
              <SelectTrigger className="col-span-3 w-1/2">
                <SelectValue placeholder="Select a status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="001">Wragby</SelectItem>
                  <SelectItem value="002">L-CODE</SelectItem>
                  <SelectItem value="003">CKDigital</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-4 w-full items-center gap-2 ">
            <Label htmlFor="status" className="ml-1.5 text-sm">
              Status
            </Label>
            <Select>
              <SelectTrigger className="col-span-3 w-1/2">
                <SelectValue placeholder="Select a status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button
              className="cursor-pointer"
              onClick={() => {
                console.log("Update via API:" + values.id);
              }}
            >
              Save Changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
