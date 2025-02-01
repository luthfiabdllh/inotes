"use client";

import { Separator } from "@radix-ui/react-dropdown-menu";
import { SidebarTrigger } from "./ui/sidebar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "./ui/breadcrumb";
import { NavActions } from "./nav-actions";
import { Button } from "./ui/button";

export function HeaderNote({ nameNote, updated_at }: { nameNote: string, updated_at: string }) {
  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b border-gray-200">
      <div className="flex flex-1 items-center gap-2 px-3">
        <SidebarTrigger />
        <Separator aria-orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage className="line-clamp-1" contentEditable suppressContentEditableWarning>
                {nameNote}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="ml-auto px-3">
        <NavActions updated_at={updated_at} />
      </div>
    </header>
  );
}