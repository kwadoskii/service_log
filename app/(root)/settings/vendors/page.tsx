"use client";

import { columns } from "./columns";
import { DataTable } from "./data-table";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/lib/store";
import { addVendor } from "@/lib/features/vendors/vendorSlice";

import VendorForm, { Values } from "./VendorForm";
import Head from "next/head";

// export const metadata = {
//   title: "Vendors",
// };

export default function Vendors() {
  const dispatch = useDispatch<AppDispatch>();
  const vendors = useSelector((state: RootState) => state.vendors);

  const handleAddVendor = (values: Values) => {
    dispatch(
      addVendor({
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
        status: "active",
      })
    );
  };

  return (
    <>
      <Head>
        <title>Vendors</title>
      </Head>
      <div className="p-6 w-full">
        <p>Vendors</p>

        <div className="mt-2">
          <DataTable
            data={vendors}
            columns={columns}
            Component={() => <VendorForm handleSaveClick={handleAddVendor} />}
          />
        </div>
      </div>
    </>
  );
}
