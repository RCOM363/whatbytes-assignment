"use client";

import React from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import { useScore } from "@/app/context/ScoresProvider";

const chartData = [
  { percentile: 0, numberOfStudents: 5 },
  { percentile: 12, numberOfStudents: 8 },
  { percentile: 20, numberOfStudents: 10 },
  { percentile: 25, numberOfStudents: 10 },
  { percentile: 30, numberOfStudents: 15 },
  { percentile: 30, numberOfStudents: 18 },
  { percentile: 40, numberOfStudents: 25 },
  { percentile: 50, numberOfStudents: 35 },
  { percentile: 55, numberOfStudents: 25 },
  { percentile: 60, numberOfStudents: 15 },
  { percentile: 70, numberOfStudents: 10 },
  { percentile: 75, numberOfStudents: 10 },
  { percentile: 80, numberOfStudents: 8 },
  { percentile: 100, numberOfStudents: 5 },
];

const chartConfig = {
  percentile: {
    label: "Percentile",
    color: "blue",
  },
  numberOfStudents: {
    label: "numberOfStudents",
    color: "blue",
  },
} satisfies ChartConfig;

function ComparisonGraph() {
  const { percentile } = useScore();
  return (
    <div className="w-full flex flex-col p-5 border-solid border-2 rounded-lg">
      <div>
        <h3 className="font-bold">Comparison Graph</h3>
        <div className="flex justify-between items-center">
          <p className="text-gray-500">
            <b>You scored {percentile}% percentile</b> which is{" "}
            {percentile < 72 ? "lower" : "greater"} than the average 72% of all
            the engineers who took this assignment
          </p>
          <div className="basis-[10%] bg-gray-100 border-2 rounded-full text-2xl lg:p-2">
            📈
          </div>
        </div>
      </div>
      {/* line chart */}
      <div className="mt-5">
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="percentile"
              ticks={[0, 25, 50, 75, 100]}
              domain={[0, 100]}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip cursor={true} content={<CustomTooltip />} />
            <Line
              dataKey="numberOfStudents"
              type="monotone"
              stroke="var(--color-numberOfStudents)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-numberOfStudents)",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: { payload: { percentile: number; numberOfStudents: number } }[];
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { percentile, numberOfStudents } = payload[0].payload;
    return (
      <div
        className="custom-tooltip"
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          backgroundColor: "#fff",
        }}
      >
        <p className="label">Percentile: {percentile}</p>
        <p className="intro">Number of Students: {numberOfStudents}</p>
      </div>
    );
  }
  return null;
};

export default ComparisonGraph;
