"use client";
import React from "react";
import { useSelector } from "react-redux";

/**
 * Components
 */
import Topbar from "@/components/Topbar";
import Sidebar from "@/components/Sidebar";

export default function MainLayout({ children }) {
  const isSidebar = useSelector((state) => state.sidebar.isSidebar);
  return (
    <div className="main-layout">
      <Topbar />
      <Sidebar />
      <div className={`content ${isSidebar ? "content-set" : ""}`}>{children}</div>
    </div>
  );
}
