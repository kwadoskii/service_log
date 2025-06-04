export const metadata = {
  title: "Profile",
};

import { Button } from "@/components/ui/button";
import { CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Profile() {
  return (
    <div className="flex w-full max-w-xl p-6 flex-col gap-6">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <div className="pl-1.5">
            <div className="pt-3 pb-5">
              <CardDescription>
                Make changes to your account here. Click save changes when you&apos;re done.
              </CardDescription>
            </div>

            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="firstname">Firstname</Label>
                <Input id="firstname" defaultValue="Pedro" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="lastname">Lastname</Label>
                <Input id="lastname" defaultValue="Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@peduarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input id="email" defaultValue="info@example.com" />
              </div>
            </div>

            <div className="pt-5">
              <Button>Save changes</Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="password">
          <div className="pl-1.5">
            <div className="pt-3 pb-5">
              <CardDescription>
                Change your password here. After saving, you&apos;ll be logged out.
              </CardDescription>
            </div>

            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="newPassword">New password</Label>
                <Input id="newPassword" type="password" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="confirmPassword">Confirm password</Label>
                <Input id="confirmPassword" type="password" />
              </div>
            </div>

            <div className="pt-5">
              <Button>Change password</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
