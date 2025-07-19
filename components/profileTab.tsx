"use client";

import { TabsContent, TabsList, TabsTrigger, Tabs } from "./ui/tabs";
import { CardDescription } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { changePassword, updateUserProfile } from "@/apis/authApi";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { logoutUser, updateUser } from "@/lib/features/userSlice";

export function ProfileTab() {
  const router = useRouter();
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user);

  const [profile, setProfile] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    email: user.email,
  });
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    newPassword2: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSaveProfileChanges = () => {
    setLoading(true);

    updateUserProfile(profile)
      .then(({ token, firstName, lastName, username, email }) => {
        Cookies.set("authToken", token);
        dispatch(updateUser({ firstName, lastName, username, email }));

        toast.success("Changes saved.");
      })
      .catch((e) => {
        setProfile({ ...user });
        toast.error(e.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChangePassword = () => {
    setLoading(true);
    const { currentPassword, newPassword } = passwords;

    changePassword({
      currentPassword,
      newPassword,
    })
      .then((data) => {
        setPasswords({ currentPassword: "", newPassword: "", newPassword2: "" });
        toast.success(data.message);
        Cookies.remove("authToken");
        dispatch(logoutUser());

        router.replace("/login");
      })
      .catch((e) => toast.info(e.response?.data?.message))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
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
              <Label htmlFor="firstName">Firstname</Label>
              <Input
                id="firstName"
                type="text"
                value={profile.firstName}
                onChange={(e) => setProfile({ ...profile, [e.target.id]: e.target.value })}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="lastName">Lastname</Label>
              <Input
                id="lastName"
                value={profile.lastName}
                onChange={(e) => setProfile({ ...profile, [e.target.id]: e.target.value })}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={profile.username}
                onChange={(e) => setProfile({ ...profile, [e.target.id]: e.target.value })}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, [e.target.id]: e.target.value })}
              />
            </div>
          </div>

          <div className="pt-5">
            <Button
              className="transition-all duration-1000"
              disabled={loading}
              onClick={handleSaveProfileChanges}
            >
              {!loading ? (
                "Save changes"
              ) : (
                <>
                  Saving changes <Loader className="animate-spin" />
                </>
              )}
            </Button>
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
              <Label htmlFor="currentPassword">Current password</Label>
              <Input
                id="currentPassword"
                type="password"
                value={passwords.currentPassword}
                onChange={(e) => setPasswords({ ...passwords, [e.target.id]: e.target.value })}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="newPassword">New password</Label>
              <Input
                id="newPassword"
                type="password"
                value={passwords.newPassword}
                onChange={(e) => setPasswords({ ...passwords, [e.target.id]: e.target.value })}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="newPassword2">Confirm password</Label>
              <Input
                id="newPassword2"
                type="password"
                value={passwords.newPassword2}
                onChange={(e) => setPasswords({ ...passwords, [e.target.id]: e.target.value })}
              />
              {passwords.newPassword2.length > 0 &&
              passwords.newPassword !== passwords.newPassword2 ? (
                <p className="text-red-600 text-xs duration-200 transition-all">
                  Password does not match
                </p>
              ) : null}
            </div>
          </div>

          <div className="pt-5">
            <Button
              onClick={handleChangePassword}
              disabled={
                loading ||
                passwords.currentPassword.length === 0 ||
                passwords.newPassword.length === 0 ||
                passwords.newPassword2.length === 0 ||
                passwords.newPassword !== passwords.newPassword2
              }
            >
              {!loading ? (
                "Change password"
              ) : (
                <>
                  Changing password <Loader className="animate-spin" />
                </>
              )}
            </Button>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
