"use client";
import React from "react";
import Link from "next/link";
import { ChartNoAxesColumn, Award, File } from "lucide-react";
import { usePathname } from "next/navigation";

const sidebarOptions = [
  {
    name: "Dashboard",
    pathname: "/dashboard",
    icon: <ChartNoAxesColumn />,
  },
  {
    name: "Skill Test",
    pathname: "/skill-test",
    icon: <Award />,
  },
  {
    name: "Internship",
    pathname: "/internship",
    icon: <File />,
  },
];

function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="w-full h-full flex flex-col border-r-solid border-r-2">
      <div className="w-full h-full flex flex-col gap-3 mt-[6vh]">
        {sidebarOptions.map((option, index) => (
          <Link
            key={index}
            href={`${option.pathname}`}
            className={`w-[95%] h-15 flex justify-start items-center gap-3 p-4 rounded-r-full ${
              pathname === option.pathname ? "bg-gray-100 text-blue-600" : ""
            }`}
          >
            {option.icon}
            <span
              className={`text-lg font-bold ${
                pathname === option.pathname ? "" : "text-gray-600"
              }`}
            >
              {option.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
