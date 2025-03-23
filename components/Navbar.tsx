import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SquareChevronUp,
  X,
  ChartNoAxesColumn,
  Award,
  House,
  File,
} from "lucide-react";

import logo from "@/public/whatbytes_logo.png";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

function Navbar() {
  const logourl =
    "https://photos.wellfound.com/startups/i/10130633-833576a963b41d8946174d102bdc1200-medium_jpg.jpg";
  return (
    <div className="w-full h-15 md:h-25 lg:h-25  flex justify-center items-center border-b-solid border-b-2">
      <div className="w-[95%] lg:w-[97%] flex justify-between items-center">
        {/* logo */}
        <div className="w-[38%] lg:w-[14%] md:w-[25%] flex items-center gap-1">
          <Image
            src={logo}
            alt="WhatBytes_Logo"
            height={20}
            width={20}
            quality={100}
            layout="responsive"
          />
          {/* menu for smaller devices */}
          <div className="h-full lg:hidden">
            <Drawer>
              <DrawerTrigger>
                <SquareChevronUp />
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle></DrawerTitle>
                  <DrawerDescription></DrawerDescription>
                </DrawerHeader>
                <div className="h-[40vh] flex flex-col justify-center items-center">
                  <div className="flex flex-col items-center gap-4 text-2xl font-semibold">
                    <DrawerClose asChild>
                      <Link
                        className="flex justify-center items-center gap-1"
                        href={"/"}
                      >
                        <House />
                        Home
                      </Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link
                        className="flex justify-center items-center gap-1"
                        href={"/dashboard"}
                      >
                        <ChartNoAxesColumn />
                        Dashboard
                      </Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link
                        className="flex justify-center items-center gap-1"
                        href={"/skill-test"}
                      >
                        <Award />
                        Skill Test
                      </Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <Link
                        className="flex justify-center items-center gap-1"
                        href={"/internship"}
                      >
                        <File />
                        Internship
                      </Link>
                    </DrawerClose>
                    <DrawerClose asChild>
                      <X />
                    </DrawerClose>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
        {/* profile section */}
        <div className="w-30 lg:w-42 md:w-40 lg:h-12 md:h-8 flex justify-evenly items-center border-solid border-2 rounded-md">
          <div className="w-[15%]">
            <Image
              src={logourl}
              alt="WhatBytes_Logo"
              height={30}
              width={30}
              className="rounded-full"
              quality={100}
              layout="responsive"
            />
          </div>
          <span className="text-sm mg:text-lg lg:text-lg font-bold">
            Rahil Siddique
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
