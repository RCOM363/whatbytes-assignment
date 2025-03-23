"use client";
import React from "react";

import { useScore } from "@/app/context/ScoresProvider";

function QuickStatistics() {
  const { rank, percentile, currentScore } = useScore();

  return (
    <div className="w-full flex flex-col p-5 border-solid border-2 rounded-lg">
      <h3 className="font-bold">Quick Statistics</h3>
      <div className="lg:w-full h-35 lg:h-25 mt-2 flex justify-evenly items-center">
        {/* rank */}
        <div className="basis-[30%] h-full flex flex-wrap md:flex-nowrap lg:flex-nowrap justify-center items-center gap-2 border-r-solid border-r-2 p-2 lg:p-5">
          <div className="lg:basis-[40%] bg-gray-100 border-2 rounded-full text-2xl lg:p-2">
            🏆
          </div>
          <div className="basis-[60%] flex flex-col items-center text-center">
            <span className="w-full lg:text-left font-bold">{rank}</span>
            <span className="w-full lg:text-left lg:text-nowrap text-gray-400">
              YOUR RANK
            </span>
          </div>
        </div>
        {/* percentile */}
        <div className="basis-[30%] h-full flex flex-wrap md:flex-nowrap lg:flex-nowrap justify-center items-center gap-2 border-r-solid border-r-2 p-2 lg:p-5">
          <div className="lg:basis-[40%] bg-gray-100 border-2 rounded-full text-2xl p-2">
            📋
          </div>
          <div className="basis-[60%] flex flex-col items-center text-center">
            <span className="w-full lg:text-left font-bold">{percentile}%</span>
            <span className="w-full lg:text-left lg:text-nowrap text-gray-400">
              PERCENTILE
            </span>
          </div>
        </div>
        {/* correct answer */}
        <div className="basis-[30%] h-full flex flex-wrap lg:flex-nowrap justify-center items-center gap-1 p-2 lg:p-5">
          <div className="lg:basis-[40%] bg-gray-100 border-2 rounded-full text-2xl p-2">
            ✅
          </div>
          <div className="basis-[60%] flex flex-col items-center text-center">
            <span className="w-full lg:text-left font-bold">
              {currentScore}/15
            </span>
            <span className="w-full lg:text-left lg:text-nowrap text-gray-400">
              CORRECT ANSWERS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickStatistics;
