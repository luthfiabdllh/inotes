"use client"

import { useState, useEffect } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { HeaderDashboard } from "@/components/header-dashboard";
import { Skeleton } from "@/components/ui/skeleton";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

async function getData() {
  try {
    const res = await fetch("https://note-iota-two.vercel.app/api/notes");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default function Dashboard() {
  const [notes, setNotes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotes() {
      const data = await getData();
      setNotes(data);
      setLoading(false);
    }
    fetchNotes();
  }, []);

  

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <HeaderDashboard />
        <div className="flex flex-1 flex-col gap-4 p-4">
          {loading ? (
            <div className="grid auto-rows-min gap-4 grid-cols-3 md:grid-cols-8">
              {Array.from({ length: 18 }).map((_, i) => (
                <Skeleton key={i} className="aspect-square rounded-xl bg-gray-300" />
              ))}
            </div>
          ) : (
            <div className="grid auto-rows-min gap-4 grid-cols-3 md:grid-cols-8">
              {notes.map((note) => (
                <div
                  key={note.id}
                  className="p-4 bg-white shadow-md rounded-xl border"
                >
                  <h3 className="text-lg font-bold">{note.title}</h3>
                  <p className="text-sm text-gray-600">{note.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
