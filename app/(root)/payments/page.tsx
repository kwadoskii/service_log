import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    { id: "728ed52f", amount: 100, status: "pending", email: "m@example.com" },
    { id: "489e1d42", amount: 25, status: "processing", email: "example@gmail.com" },
    { id: "4e1d42", amount: 15, status: "success", email: "m2@gmail.com" },
    { id: "489e1d", amount: 12, status: "failed", email: "caofor@gmail.com" },
    { id: "489e2d", amount: 10.4, status: "failed", email: "afor@gmail.com" },
    { id: "489e1e", amount: 16, status: "success", email: "faladeji@gmail.com" },
    { id: "489e1f", amount: 31, status: "processing", email: "itunu@gmail.com" },
    { id: "489e20", amount: 62.1, status: "success", email: "admin@gmail.com" },
    { id: "489e21", amount: 26, status: "pending", email: "hr@gmail.com" },
    { id: "489e22", amount: 17, status: "processing", email: "trust@gmail.com" },
    { id: "489e23", amount: 89.02, status: "success", email: "theo@gmail.com" },
    { id: "489e24", amount: 35, status: "pending", email: "grace@gmail.com" },
    { id: "489e25", amount: 27, status: "failed", email: "investment@gmail.com" },
    { id: "489e26", amount: 2, status: "success", email: "frontdesk@gmail.com" },
    { id: "489e27", amount: 92.99, status: "processing", email: "mails@gmail.com" },
    { id: "489e28", amount: 60, status: "pending", email: "sfyakubu@gmail.com" },
    { id: "489e29", amount: 71.14, status: "processing", email: "ppsimon@gmail.com" },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-2 px-4 md:py-5 md:px-10">
      <h3 className="mb-0.5">Payments</h3>
      <p className="text-sm mb-6">Payments processing page.</p>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
