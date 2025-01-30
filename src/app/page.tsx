"use client";

import { useState, useEffect } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { HeaderDashboard } from "@/components/header-dashboard";
import { Skeleton } from "@/components/ui/skeleton";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { getSession } from "next-auth/react";

async function fetchNotes() {
  try {
    const session = await getSession();

    if (!session?.accessToken) {
      throw new Error("Access token not found, please login again.");
    }

    const res = await fetch("https://note-iota-two.vercel.app/api/notes", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch notes, status: ${res.status}`);
    }

    const data = await res.json();
    console.log("API Response:", data); // Debugging untuk melihat data dari API

    return data.data || []; // Pastikan kita hanya mengambil array dari data.data
  } catch (error) {
    console.error("Error fetching notes:", error);
    return []; // Jika error, kembalikan array kosong agar tidak menyebabkan error saat `.map()`
  }
}

export default function Dashboard() {
  const [notes, setNotes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getNotes() {
      try {
        const data = await fetchNotes();
        setNotes(data); // Simpan hasil API ke state
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Hentikan loading setelah data diambil
      }
    }

    getNotes();
  }, []); // Dipanggil hanya sekali saat komponen pertama kali dirender

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
              {notes.length > 0 ? (
                notes.map((note) => (
                  <div key={note.id} className="bg-white rounded-xl p-4 shadow-md">
                    <h3 className="text-lg font-semibold">{note.title}</h3>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 col-span-3 md:col-span-8">
                  No notes found.
                </p>
              )}
            </div>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
