"use client";

import type React from "react";

import { useState } from "react";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex flex-col bg-neutral-white">
      {/* Navbar */}
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
