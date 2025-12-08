"use client";

import type React from "react";

import { useState } from "react";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";
import FloatingWhatsapp from "@/components/navigation/floatingWhatsapp";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex flex-col bg-neutral-white relative overflow-x-hidden scroll-smooth">
      {/* Navbar */}
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}
