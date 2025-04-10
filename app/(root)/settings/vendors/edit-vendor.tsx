import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pen } from "lucide-react";
import { Vendor } from "./columns";
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
import { countries, states } from "@/config/preship-data";

export default function EditVendor({ vendor }: { vendor: Vendor }) {
  const [values, setValues] = useState({
    name: vendor.name,
    addressLine1: vendor.address.addressLine1,
    addressLine2: vendor.address.addressLine2,
    state: vendor.address.state,
    country: vendor.address.country,
    email: vendor.email,
    altEmail: vendor.altEmail,
    contactFullname: vendor.contact.fullname,
    contactEmail: vendor.contact.email,
    contactPhone: vendor.contact.phone,
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
      <DialogTrigger className="h-8 w-8 p-0 focus-visible:ring-0 data-[state=open]:bg-accent cursor-pointer focus-visible:bg-transparent">
        <span className="sr-only">Edit vendor</span>
        <Pen className="h-4 w-4" />
      </DialogTrigger>
      <DialogContent
        className="!max-w-[48em]"
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle>{vendor.name}</DialogTitle>
        </DialogHeader>
        <DialogDescription>
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
                  Service
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
        </DialogDescription>

        <DialogFooter>
          <Button onClick={() => console.log(values)}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
