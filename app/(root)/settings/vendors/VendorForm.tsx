"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { nanoid } from "@reduxjs/toolkit";
import { Pen } from "lucide-react";
import React, { useState } from "react";

export interface Values {
  id: string;
  name: string;
  addressLine1: string;
  addressLine2: string;
  state: string;
  country: string;
  email: string;
  altEmail: string;
  contactFullname: string;
  contactEmail: string;
  contactPhone: string;
  servicesProvided: string;
}

export default ({
  handleSaveClick,
  editvalues,
  isEdit = false,
}: {
  handleSaveClick: any;
  editvalues?: Values;
  isEdit?: boolean;
}) => {
  const [values, setValues] = useState({
    id: editvalues?.id || nanoid(),
    name: editvalues?.name || "",
    addressLine1: editvalues?.addressLine1 || "",
    addressLine2: editvalues?.addressLine2 || "",
    state: editvalues?.state || "",
    country: editvalues?.country || "",
    email: editvalues?.email || "",
    altEmail: editvalues?.altEmail || "",
    contactFullname: editvalues?.contactFullname || "",
    contactEmail: editvalues?.contactEmail || "",
    contactPhone: editvalues?.contactPhone || "",
    servicesProvided: editvalues?.servicesProvided || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <Dialog>
      <DialogTrigger
        className="h-8 w-8 p-0 focus-visible:ring-0 data-[state=open]:bg-accent cursor-pointer focus-visible:bg-transparent"
        asChild
      >
        {isEdit ? (
          <div>
            <span className="sr-only">Edit vendor</span>
            <Pen className="h-4 w-4" />
          </div>
        ) : (
          <Button className="cursor-pointer px-6">
            <p>Add</p>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent
        className="!max-w-[48em] max-h-[90vh] overflow-y-auto"
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="w-full flex flex-col gap-5">
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="name" className="ml-1.5">
              Name
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={values["name"]}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="grid grid-cols-2 items-center gap-2">
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="addressLine1" className="ml-1.5">
                Address Line 1
              </Label>
              <Input
                type="addressLine1"
                id="addressLine1"
                name="addressLine1"
                placeholder="Address Line 1"
                value={values["addressLine1"]}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className="grid w-full items-center gap-2">
              <Label htmlFor="addressLine2" className="ml-1.5">
                Address Line 2
              </Label>
              <Input
                type="addressLine2"
                id="addressLine2"
                name="addressLine2"
                placeholder="Address Line 2"
                value={values?.addressLine2}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 items-center gap-2">
            <div className="space-y-2">
              <Label htmlFor="country" className="ml-1.5">
                Country
              </Label>
              <Select
                value={values?.country}
                name="country"
                onValueChange={(value) => setValues({ ...values, country: value, state: "" })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent id="country">
                  <SelectGroup>
                    <SelectLabel>Countries</SelectLabel>
                    {countries.map((country) => (
                      <SelectItem key={country.id} value={country.value}>
                        {country.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="state" className="ml-1.5">
                State
              </Label>
              {values.country === "Nigeria" ? (
                <Select
                  value={values?.state}
                  name="state"
                  onValueChange={(value) => setValues({ ...values, state: value })}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a state" />
                  </SelectTrigger>
                  <SelectContent id="state">
                    <SelectGroup>
                      <SelectLabel>States</SelectLabel>
                      {states.map((state) => (
                        <SelectItem key={state.id} value={state.value}>
                          {state.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              ) : (
                <Input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="State"
                  value={values.state}
                  onChange={(e) => handleChange(e)}
                />
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 items-center gap-2">
            <div className="grid w-full items-center gap-2">
              <Label htmlFor="name" className="ml-1.5">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={values["email"]}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className="grid w-full items-center gap-2">
              <Label htmlFor="name" className="ml-1.5">
                Alternate Email
              </Label>
              <Input
                type="email"
                id="altEmail"
                name="altEmail"
                placeholder="Alternate Email"
                value={values["altEmail"]}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 items-center gap-2">
            <div className="space-y-2">
              <Label htmlFor="country" className="ml-1.5">
                Service Provided
              </Label>
              <Select
                value={values?.servicesProvided}
                name="servicesProvided"
                onValueChange={(value) => setValues({ ...values, servicesProvided: value })}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service type" />
                </SelectTrigger>
                <SelectContent id="servicesProvided">
                  <SelectGroup>
                    <SelectLabel>Service provided</SelectLabel>
                    {serviceTypes.map((serviceType) => (
                      <SelectItem key={serviceType.id} value={serviceType.value}>
                        {serviceType.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* contact */}
          <p className="text-lg pl-1.5 pb">Contact Details</p>
          <div className="grid grid-cols-3 items-center gap-2">
            <div className="grid items-center gap-2">
              <Label htmlFor="contactFullname" className="ml-1.5">
                Full name
              </Label>
              <Input
                type="text"
                id="contactFullname"
                name="contactFullname"
                placeholder="Full name"
                value={values["contactFullname"]}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className="grid items-center gap-2">
              <Label htmlFor="contactEmail" className="ml-1.5">
                Email
              </Label>
              <Input
                type="text"
                id="contactEmail"
                name="contactEmail"
                placeholder="Email"
                value={values["contactEmail"]}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className="grid items-center gap-2">
              <Label htmlFor="contactEmail" className="ml-1.5">
                Phone
              </Label>
              <Input
                type="text"
                id="contactPhone"
                name="contactPhone"
                placeholder="Phone"
                value={values["contactPhone"]}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button className="cursor-pointer" onClick={() => handleSaveClick(values)}>
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
