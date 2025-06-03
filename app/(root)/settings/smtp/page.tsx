"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

// export const metadata = {
//   title: "SMTP",
// };

export default function Vendors() {
  // document.title = "Hello";
  const promise = () =>
    new Promise(
      (resolve, reject) => setTimeout(() => resolve({ name: "Email sent successfully!" }), 2000)
      // setTimeout(() => reject({ message: "Invalid username or password" }), 5000)
    );

  return (
    <>
      <header>
        <title>SMTP | Service Expiry Tracker App</title>
      </header>

      <div className="p-6 w-full">
        <div className="flex justify-between items-center">
          <p>SMTP Configuration</p>

          <Button
            onClick={() =>
              toast.promise(promise, {
                loading: "Sending...",
                success: (data: any) => `${data.name}`,
                error: (er) => `${er.message}`,
              })
            }
          >
            Send Test Email
          </Button>
        </div>

        <div className="flex flex-col gap-5 pt-5 max-w-10/12">
          <div className="w-full max-w-xl grid gap-3">
            <Label htmlFor="username">Username</Label>
            <Input className="" id="username" placeholder="info@example.com" />
          </div>

          <div className="w-full max-w-xl grid gap-3">
            <Label htmlFor="password">Password</Label>
            <Input type="password" className="" id="password" placeholder="******" />
          </div>

          <div className="w-full max-w-xl grid gap-3">
            <Label htmlFor="hostname">STMP hostname</Label>
            <Input className="" id="hostname" placeholder="smtp.example.com" />
          </div>

          <div className="w-full max-w-xl grid gap-3">
            <Label htmlFor="port">STMP Port</Label>
            <Input id="port" className="" placeholder="443" />
          </div>

          <div className="flex justify-between w-full max-w-xl">
            <Button className="">Save</Button>
          </div>
        </div>
      </div>
    </>
  );
}
