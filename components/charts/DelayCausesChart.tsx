"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { delayCauses } from "@/lib/data/aviation";

const COLORS = ["#3b82f6", "#f97316", "#10b981", "#ef4444", "#a855f7"];

export default function DelayCausesChart() {
  return (
    <div className="w-full h-[300px] bg-background border rounded-xl p-4">
      <h3 className="text-sm font-semibold mb-4">
        Delay Root Causes
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={delayCauses}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {delayCauses.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}