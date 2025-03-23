import React from "react";
import { Progress } from "@/components/ui/progress";

function SyllabusAnalysis() {
  return (
    <div className="w-full flex flex-col p-5 border-solid border-2 rounded-lg">
      <h3 className="font-bold">Syllabus Wise Analysis</h3>
      <div className="w-full flex flex-col justify-center items-center gap-8 mt-5">
        {/* 1 */}
        <div className="w-full flex flex-col gap-5">
          <span>HTML Tools, Forms, History</span>
          <Progress
            value={80}
            className="w-full h-3 [&>*]:rounded-full [&>*]:bg-blue-500  bg-blue-300"
          />
        </div>
        {/* 2 */}
        <div className="w-full flex flex-col gap-5">
          <span>Tags & References in HTML</span>
          <Progress
            value={60}
            className="w-full h-3 [&>*]:rounded-full [&>*]:bg-orange-500 bg-orange-300"
          />
        </div>
        {/* 3 */}
        <div className="w-full flex flex-col gap-5">
          <span>Tables & References in HTML</span>
          <Progress
            value={24}
            className="w-full h-3 [&>*]:rounded-full [&>*]:bg-red-500 bg-red-300"
          />
        </div>
        {/* 4 */}
        <div className="w-full flex flex-col gap-5">
          <span>Tables & CSS Basics</span>
          <Progress
            value={96}
            className="w-full h-3 [&>*]:rounded-full [&>*]:bg-green-500 bg-green-300"
          />
        </div>
      </div>
    </div>
  );
}

export default SyllabusAnalysis;
