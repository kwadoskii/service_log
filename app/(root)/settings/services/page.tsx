"use client";

import { columns, Service } from "./columns";
import { DataTable } from "./data-table";

// export const metadata = {
//   title: "Services",
// };

export default function Services() {
  const services: Service[] = [
    { id: "1", service: "Microsoft Azure Services", providedBy: "Wragby", status: "active" },
    { id: "2", service: "UTLAM Website", providedBy: "Ck Digital", status: "active" },
    { id: "3", service: "RTMS Application", providedBy: "L-CODE", status: "active" },
    { id: "4", service: "Willpower Application", providedBy: "L-CODE", status: "active" },
  ];

  return (
    <div className="p-6 w-full">
      <p>Services</p>

      <div className="mt-2">
        <DataTable columns={columns} data={services} />
      </div>
    </div>
  );
}
