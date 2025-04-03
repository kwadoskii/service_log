"use client";

import { SidebarIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "@/components/ui/sidebar";
import { ThemeModeToggle } from "./ThemeModeToggle";
import React from "react";

export function SiteHeader() {
  const { toggleSidebar } = useSidebar();
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b select-none">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        <Button className="h-8 w-8" variant="ghost" size="icon" onClick={toggleSidebar}>
          <SidebarIcon />
        </Button>
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb className="hidden sm:block">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="hover:underline">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            {pathNames.length > 0 &&
              pathNames.map((pathName, i) => {
                let formattedPathName = pathName
                  .split("-")
                  .reduce(
                    (acc, p) => acc + p[0].toUpperCase() + p.substring(1).toLowerCase() + " ",
                    ""
                  );

                return (
                  <React.Fragment key={i}>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="opacity-60">{formattedPathName}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </React.Fragment>
                );
              })}
          </BreadcrumbList>
        </Breadcrumb>
        <div className="ml-auto">
          <div className="">
            <div className="">
              <ThemeModeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
