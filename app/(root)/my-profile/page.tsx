import { ProfileTab } from "@/components/profileTab";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Profile",
};

export default async function Profile() {
  const cookieStore = await cookies();
  const token = cookieStore.get("authToken")?.value;

  if (!token) {
    return redirect("/login");
  }

  return (
    <div className="flex w-full max-w-xl p-6 flex-col gap-6">
      <ProfileTab />
    </div>
  );
}
