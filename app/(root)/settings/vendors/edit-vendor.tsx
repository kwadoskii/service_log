"use client";

import { Vendor } from "./columns";
import { updateVendor } from "@/lib/features/vendors/vendorSlice";
import { AppDispatch } from "@/lib/store";
import { useDispatch } from "react-redux";
import VendorForm, { Values } from "./VendorForm";

export default function EditVendor({ vendor }: { vendor: Vendor }) {
  const dispatch = useDispatch<AppDispatch>();
  const values = {
    id: vendor.id,
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
    servicesProvided: vendor.servicesProvided,
  };

  const handleEditVendor = (values: Values) => {
    dispatch(
      updateVendor({
        id: values.id, // existing vendor ID
        updates: {
          name: values.name,
          address: {
            addressLine1: values.addressLine1,
            addressLine2: values.addressLine2,
            state: values.state,
            country: values.country,
          },
          contact: {
            fullname: values.contactFullname,
            phone: values.contactPhone,
            email: values.contactEmail,
          },
          email: values.email,
          altEmail: values.altEmail,
          servicesProvided: values.servicesProvided,
        },
      })
    );
  };

  return <VendorForm editvalues={values} handleSaveClick={handleEditVendor} isEdit />;
}
