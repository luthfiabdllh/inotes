import { AppSidebar } from "@/components/app-sidebar"
import { HeaderNote } from "@/components/header-note"
import { NavActions } from "@/components/nav-actions"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Note() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <HeaderNote />
        <div className="flex flex-1 flex-col gap-4 px-4 py-10">
          <div className="mx-auto h-24 w-full max-w-3xl rounded-xl bg-neutral-100/50 dark:bg-neutral-800/50" />
          <div className="mx-auto h-full w-full max-w-3xl rounded-xl bg-neutral-100/50 dark:bg-neutral-800/50" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
