"use client";

import { Button } from "@/components/ui/button";
import { columns, Vendor } from "./columns";
import { DataTable } from "./data-table";

// export const metadata = {
//   title: "Vendors",
// };

export default function Vendors() {
  const data: Vendor[] = [
    {
      id: "1",
      name: "ipNX Nigeria Limited",
      address: {
        addressLine1: "4 Balarabe Musa Crescent",
        addressLine2: "Victoria Island",
        state: "Lagos",
        country: "Nigeria",
      },
      contact: {
        fullname: "Israel O. Adewuyi",
        phone: "+234 (0)8075092903",
        email: "",
      },
      email: "csupport@ipnxnigeria.net",
      altEmail: "",
      servicesProvided: "Internet Services",
      status: "active",
    },
    {
      id: "2",
      name: "ICSL",
      address: {
        addressLine1: "Plot 4, Sen Victor Oyofo Close,",
        addressLine2: `Lekki-Epe Expressway,
        Chisco Bus-Stop by Enyo Petrol Station`,
        state: "Lagos",
        country: "Nigeria",
      },
      contact: {
        fullname: "Joy Nweke",
        phone: "08039169598",
        email: "",
      },
      email: "support1@ic-sol.net",
      altEmail: "support@ic-sol.net",
      servicesProvided: "Internet Services",
      status: "active",
    },
    {
      id: "3",
      name: "LCode",
      address: {
        addressLine1: "Lal Bagh Towers,",
        addressLine2: `MG Rd, Ballalbagh,
        Kodailbail, Mangaluru`,
        state: "Karnataka 575003,",
        country: "India",
      },
      contact: {
        fullname: "Amit Welde",
        phone: "+919820830845",
        email: "amit.w@lcodetechnologies.com",
      },
      email: "",
      altEmail: "",
      servicesProvided: "Software/App Development",
      status: "active",
    },
  ];

  const testClick = () => alert("add vendor");

  return (
    <div className="p-6 w-full">
      <p>Vendors</p>

      {/* <div className="flex justify-between items-center">
        <div className="self-end">
          <Button>New</Button>
        </div>
      </div> */}

      <div className="mt-2">
        <DataTable data={data} columns={columns} newButton onNewButtonClick={testClick} />
      </div>
    </div>
  );
}
