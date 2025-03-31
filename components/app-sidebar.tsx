"use client";

import * as React from "react";
import { Settings2, BriefcaseBusiness, ScrollText } from "lucide-react";

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

const data = {
  user: {
    name: "Austin Ofor",
    email: "caofor@utltrustees.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Operations",
      icon: BriefcaseBusiness,
      items: [
        {
          title: "Subscribe to Service",
          url: "/operations/subscribetoservice",
        },
        { title: "Renew Service", url: "/operations/renewservice" },
      ],
    },
    {
      title: "Reports",
      // url: "",
      icon: ScrollText,
      // isActive: true,
      items: [
        { title: "All Services", url: "/reports/allservices" },
        { title: "Active Services", url: "/reports/activeservices" },
        { title: "Expires in", url: "/reports/expiresin" },
        { title: "Expired Services", url: "/reports/expiredservices" },
      ],
    },
    {
      title: "Settings",
      icon: Settings2,
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
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
