"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { flightPerformanceData } from "@/lib/data/aviation";
import { useFilters } from "@/store/useFilters";

export default function PerformanceChart() {
  const { airline, airport } = useFilters();

  // 🔥 SIMULATION FILTRAGE DATA
  const filteredData = flightPerformanceData.map((item) => {
    let multiplier = 1;

    // Airline impact simulation
    if (airline === "ethiopian") multiplier = 1.1;
    if (airline === "ram") multiplier = 0.95;
    if (airline === "kenya") multiplier = 0.9;

    // Airport impact simulation
    if (airport === "los") multiplier *= 0.95;
    if (airport === "add") multiplier *= 1.05;

    return {
      ...item,
      onTime: Math.round(item.onTime * multiplier),
      delay: Math.round(item.delay * (2 - multiplier)),
    };
  });

  return (
    <div className="w-full h-[300px] bg-background border rounded-xl p-4">
      <h3 className="text-sm font-semibold mb-4">
        On-Time Performance Trend
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={filteredData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="onTime"
            stroke="#3b82f6"
            strokeWidth={2}
          />

          <Line
            type="monotone"
            dataKey="delay"
            stroke="#ef4444"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}