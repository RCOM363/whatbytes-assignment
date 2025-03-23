"use client";
import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import ComparisonGraph from "@/components/ComparisonGraph";


function SkillTest() {
  const htmlLogo =
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg";
  return (
    <div className="w-full lg:w-full h-full flex flex-col items-center lg:items-start">
      <h1 className="text-2xl lg:text-sm">Skill Test</h1>
      <div className="w-full flex justify-center lg:justify-start items-start flex-wrap gap-10 lg:mt-5 p-5 lg:p-0">
        <div className="w-full lg:basis-[55%] flex flex-col items-center gap-5">
          {/* HTML section */}
          <div className="w-full flex flex-wrap justify-evenly items-center p-5 border-solid border-2 rounded-lg">
            <div className="w-[20%] md:w-[10%] lg:w-[10%]">
              <Image
                src={htmlLogo}
                alt="HTML_Logo"
                width={50}
                height={50}
                layout="responsive"
              />
            </div>
            <div className="p-5 text-center md:text-left lg:text-left">
              <h3 className="font-bold">Hyper Text Markup Language</h3>
              <span className="text-gray-500">
                Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
              </span>
            </div>
            <Button className="bg-blue-900 hover:bg-blue-950">Update</Button>
          </div>
          {/* quick statistics section */}
          <div className="w-full flex flex-col p-5 border-solid border-2 rounded-lg">
            <h3 className="font-bold">Quick Statistics</h3>
            <div className="lg:w-full h-35 lg:h-25 mt-2 flex justify-evenly items-center">
              <div className="basis-[30%] h-full flex flex-wrap md:flex-nowrap lg:flex-nowrap justify-center items-center gap-2 border-r-solid border-r-2 p-2 lg:p-5">
                <div className="lg:basis-[40%] bg-gray-100 border-2 rounded-full text-2xl lg:p-2">
                  🏆
                </div>
                <div className="basis-[60%] flex flex-col items-center text-center">
                  <span className="w-full lg:text-left font-bold">1</span>
                  <span className="w-full lg:text-left lg:text-nowrap text-gray-400">
                    YOUR RANK
                  </span>
                </div>
              </div>
              <div className="basis-[30%] h-full flex flex-wrap md:flex-nowrap lg:flex-nowrap justify-center items-center gap-2 border-r-solid border-r-2 p-2 lg:p-5">
                <div className="lg:basis-[40%] bg-gray-100 border-2 rounded-full text-2xl p-2">
                  📋
                </div>
                <div className="basis-[60%] flex flex-col items-center text-center">
                  <span className="w-full lg:text-left font-bold">30%</span>
                  <span className="w-full lg:text-left lg:text-nowrap text-gray-400">
                    PERCENTILE
                  </span>
                </div>
              </div>
              <div className="basis-[30%] h-full flex flex-wrap lg:flex-nowrap justify-center items-center gap-1 p-2 lg:p-5">
                <div className="lg:basis-[40%] bg-gray-100 border-2 rounded-full text-2xl p-2">
                  ✅
                </div>
                <div className="basis-[60%] flex flex-col items-center text-center">
                  <span className="w-full lg:text-left font-bold">10/15</span>
                  <span className="w-full lg:text-left lg:text-nowrap text-gray-400">
                    CORRECT ANSWERS
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* comparison graph */}
          <ComparisonGraph/>
        </div>
        <div className="w-[80%] lg:basis-[35%]">
          <div>Syllabus</div>
          <div>QA</div>
        </div>
      </div>
    </div>
  );
}

export default SkillTest;
