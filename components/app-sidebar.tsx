"use client";

import * as React from "react";
import { Settings2, BriefcaseBusiness, ScrollText } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { usePathname } from "next/navigation";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { UserState } from "@/lib/features/userSlice";

const data = {
  navMain: [
    {
      title: "Operations",
      icon: BriefcaseBusiness,
      isActive: true,
      items: [
        {
          title: "Subscribe to Service",
          url: "/operations/subscribe-to-service",
        },
        { title: "Renew Service", url: "/operations/renew-service" },
      ],
    },
    {
      title: "Reports",
      // url: "",
      icon: ScrollText,
      isActive: false,
      items: [
        { title: "All Services", url: "/reports/all-services" },
        { title: "Active Services", url: "/reports/active-services" },
        { title: "Expires in", url: "/reports/expires-in" },
        { title: "Expired Services", url: "/reports/expired-services" },
      ],
    },
    {
      title: "Settings",
      icon: Settings2,
      isActive: false,
      items: [
        { title: "Users", url: "/settings/users" },
        { title: "Vendors", url: "/settings/vendors" },
        { title: "Services", url: "/settings/services" },
        { title: "Logs", url: "/settings/logs" },
        { title: "SMTP", url: "/settings/smtp" },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [navMain2, setNavMain2] = React.useState([...data.navMain]);
  const paths = usePathname();
  const pathStartsWith = paths.split("/").filter((path) => path)[0];

  const _user: UserState = useSelector((state: RootState) => state.user);

  const user = {
    name: `${_user?.firstName}  ${_user?.lastName}`,
    email: _user?.email,
  };

  React.useEffect(() => {
    let newx = [...navMain2];

    newx = newx.map((n, i) => {
      if (n.title.toLowerCase() === pathStartsWith?.toLowerCase()) {
        let n2 = n;
        n2.isActive = true;
        return n2;
      }
      n.isActive = false;
      return n;
    });
    setNavMain2([...newx]);
  }, [pathStartsWith]);

  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]! select-none"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-t-lg rounded-br-lg">
                  {/* <Command className="size-4" /> */}
                  <div className="bg-black/90 rounded-lg">S</div>
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">SETA</span>
                  <span className="truncate text-[0.68rem]">Service Expiry Tracker App</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain2} />
        {/* <NavProjects projects={data.projects} /> */}
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
