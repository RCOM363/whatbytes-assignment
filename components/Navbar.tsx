import React from "react";
import Image from "next/image";
import logo from "@/public/whatbytes_logo.png";

function Navbar() {
  const logourl =
    "https://photos.wellfound.com/startups/i/10130633-833576a963b41d8946174d102bdc1200-medium_jpg.jpg";
  return (
    <div className="w-full h-25 flex justify-center items-center border-b-solid border-b-2">
      <div className="w-[97%] flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Image
            src={logo}
            alt="WhatBytes_Logo"
            height={200}
            width={200}
            className=""
            quality={100}
          />
        </div>
        <div className="w-42 h-12 flex justify-evenly items-center border-solid border-2 rounded-md">
          <Image
            src={logourl}
            alt="WhatBytes_Logo"
            height={30}
            width={30}
            className=" rounded-full"
            quality={100}
          />
          <span className="text-lg font-bold">Rahil Siddique</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
