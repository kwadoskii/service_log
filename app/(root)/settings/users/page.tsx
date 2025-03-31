import { DataTable } from "@/components/DataTable";

export const metadata = {
  title: "Users",
};

export default function Users() {
  const data = [
    { id: 1, name: "Austin Ofor", email: "caofor@utltrustees.com" },
    { id: 2, name: "Austin Ofor", email: "caofor@utltrustees.com" },
    { id: 3, name: "Austin Ofor", email: "caofor@utltrustees.com" },
    { id: 4, name: "Austin Ofor", email: "caofor@utltrustees.com" },
    { id: 5, name: "Austin Ofor", email: "caofor@utltrustees.com" },
    { id: 6, name: "Austin Ofor", email: "caofor@utltrustees.com" },
    { id: 7, name: "Austin Ofor", email: "caofor@utltrustees.com" },
    { id: 8, name: "Austin Ofor", email: "caofor@utltrustees.com" },
    { id: 9, name: "Austin Ofor", email: "caofor@utltrustees.com" },
    { id: 10, name: "Austin Ofor", email: "caofor@utltrustees.com" },
    { id: 11, name: "Austin Ofor", email: "caofor@utltrustees.com" },
    { id: 12, name: "Austin Ofor", email: "caofor@utltrustees.com" },
    { id: 13, name: "Austin Ofor", email: "caofor@utltrustees.com" },
  ];
  return (
    <div className="p-6 w-full px-10">
      <p className="pl-2.5 pb-5">Users</p>
      <DataTable data={data} />
    </div>
  );
}
