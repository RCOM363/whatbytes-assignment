import React from "react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";

const chartData = [
  { percentile: 0, numberOfStudents: 5 },
  { percentile: 25, numberOfStudents: 15 },
  { percentile: 50, numberOfStudents: 30 },
  { percentile: 75, numberOfStudents: 20 },
  { percentile: 100, numberOfStudents: 10 },
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
  return (
    <div className="w-full flex flex-col p-5 border-solid border-2 rounded-lg">
      <div>
        <h3 className="font-bold">Comparison Graph</h3>
        <p>
          You scored 30% percentile which is lower than the average 72% of all
          the engineers who took this assignment
        </p>
      </div>
      <div>
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
