import React from "react";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="h-[87vh] flex">
        <div className="hidden lg:block lg:basis-[16%]">
          <Sidebar />
        </div>
        <div className="basis-full lg:basis-[80%] p-10">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
