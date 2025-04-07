import { columns, User } from "./columns";
import { DataTable } from "./data-table";

export const metadata = {
  title: "Users",
};

export default function Users() {
  const data: User[] = [
    {
      id: "1",
      firstname: "Austin",
      lastname: "Ofor",
      email: "caofor@utltrustees.com",
      status: "active",
    },
    {
      id: "2",
      firstname: "Folorunsho",
      lastname: "Ladeji",
      email: "faladeji@utltrustees.com",
      status: "active",
    },
    {
      id: "3",
      firstname: "David",
      lastname: "Dokun",
      email: "dodokun@utltrustees.com",
      status: "inactive",
    },
  ];

  return (
    <div className="p-6 w-full px-10">
      <p className="pl-2.5 pb-5">Users</p>
      <DataTable data={data} columns={columns} />
    </div>
  );
}
