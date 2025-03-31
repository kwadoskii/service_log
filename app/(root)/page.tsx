import { SidebarInset } from "@/components/ui/sidebar";

export const iframeHeight = "800px";

export const metadata = {
  title: "Dashboard",
  description:
    "Application that tracks different services rendered by vendors and when they expire.",
};

export default function Page() {
  return (
    <SidebarInset>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="bg-muted/50 aspect-video rounded-xl" />
          <div className="bg-muted/50 aspect-video rounded-xl" />
          <div className="bg-muted/50 aspect-video rounded-xl" />
        </div>
        <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
      </div>
    </SidebarInset>
  );
}
