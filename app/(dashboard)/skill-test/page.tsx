import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

function SkillTest() {
  const htmlLogo =
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg";
  return (
    <div className="w-full h-full flex flex-col">
      <h1>Skill Test</h1>
      <div className="flex justify-start items-start flex-wrap gap-10 mt-5">
        <div className="lg:basis-[55%] flex flex-col gap-5">
          {/* HTML section */}
          <div className="flex justify-evenly items-center p-5 border-solid border-2 rounded-lg">
            <div className="lg:w-[10%]">
              <Image
                src={htmlLogo}
                alt="HTML_Logo"
                width={50}
                height={50}
                layout="responsive"
              />
            </div>
            <div>
              <h3 className="font-bold">Hyper Text Markup Language</h3>
              <span className="text-gray-500">
                Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
              </span>
            </div>
            <Button className="bg-blue-900 hover:bg-blue-950">Update</Button>
          </div>
          {/* quick statistics section */}
          <div className="flex flex-col p-5 border-solid border-2 rounded-lg">
            <h3 className="font-bold">Quick Statistics</h3>
            <div className="w-full flex justify-evenly items-center">
              <div className="flex items-center gap-2 border-r-solid border-r-2 p-5 ">
                <div className="basis-[40%] bg-gray-100 border-2 rounded-full text-2xl p-2">
                  🏆
                </div>
                <div className="basis-[60%] flex flex-col items-center">
                  <span className="w-full text-left font-bold">1</span>
                  <span className="w-full text-left text-nowrap text-gray-400">
                    YOUR RANK
                  </span>
                </div>
              </div>
              <div className="h-20 flex items-center gap-2 border-r-solid border-r-2 p-5">
                <div className="basis-[40%] bg-gray-100 border-2 rounded-full text-2xl p-2">
                  📋
                </div>
                <div className="basis-[60%] flex flex-col items-center">
                  <span className="w-full text-left font-bold">30%</span>
                  <span className="w-full text-left text-nowrap text-gray-400">
                    PERCENTILE
                  </span>
                </div>
              </div>
              <div className="flex justify-center items-center gap-1 p-5">
                <div className="basis-[40%] bg-gray-100 border-2 rounded-full text-2xl p-2">
                  ✅
                </div>
                <div className="basis-[60%] flex flex-col items-center">
                  <span className="w-full text-left font-bold">10/15</span>
                  <span className="w-full text-left text-nowrap text-gray-400">
                    CORRECT ANSWERS
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>Graph</div>
        </div>
        <div className="lg:basis-[35%]">
          <div>Syllabus</div>
          <div>QA</div>
        </div>
      </div>
    </div>
  );
}

export default SkillTest;
