"use client";
import React from "react";

import HTMLSection from "@/components/HTMLSection";
import QuickStatistics from "@/components/QuickStatistics";
import ComparisonGraph from "@/components/ComparisonGraph";
import SyllabusAnalysis from "@/components/SyllabusAnalysis";
import QuestionAnalysis from "@/components/QuestionAnalysis";

function SkillTest() {
  return (
    <div className="w-full lg:w-full h-full flex flex-col items-center lg:items-start">
      <h1 className="text-2xl lg:text-md">Skill Test</h1>
      <div className="w-full flex justify-center lg:justify-start items-start flex-wrap gap-10 lg:mt-5 p-5 lg:p-0">
        <div className="w-full lg:basis-[55%] flex flex-col items-center gap-5">
          <HTMLSection />
          <QuickStatistics />
          <ComparisonGraph />
        </div>
        <div className="w-full lg:basis-[39%] flex flex-col gap-5">
          <SyllabusAnalysis />
          <QuestionAnalysis />
        </div>
      </div>
    </div>
  );
}

export default SkillTest;
