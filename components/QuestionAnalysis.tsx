"use client";

import React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useScore } from "../app/context/ScoresProvider";

const chartData = [
  { name: "Correct Answers", value: 10, fill: "#2b7fff" },
  { name: "Incorrect Answers", value: 5, fill: "#8ec5ff" },
];

const chartConfig = {
  correctAnswers: {
    label: "Correct Answers",
    color: "hsl(var(--chart-1))",
  },
  incorrectAnswers: {
    label: "Incorrect Answers",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

function QuestionAnalysis() {
  const { currentScore } = useScore();
  return (
    <div className="w-full flex flex-col p-5 border-solid border-2 rounded-lg">
      <div className="flex justify-between items-center">
        <h3 className="font-bold">Question Analysis</h3>
        <span className="text-blue-500 font-bold">{currentScore}/15</span>
      </div>
      <span className="text-gray-500">
        <b>You scored {currentScore} question correct out of 15.</b> However it
        still needs some improvements
      </span>
      {/* donut chart */}
      <div>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              strokeWidth={3}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-5xl font-bold"
                        >
                          🎯
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>
    </div>
  );
}

export default QuestionAnalysis;
