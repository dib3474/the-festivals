"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import Heading from "@/components/ui/Heading";
import { RegionChartData } from "@/lib/utils/chart";

interface RegionChartProps {
  data: RegionChartData[];
  selectedMonth: string;
}

export default function RegionChart({ data, selectedMonth }: RegionChartProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm col-span-1">
      <div className="mb-6">
        <Heading level={3} size="lg" className="text-gray-900" marginBottom={false}>
          지역별 축제 순위 (Top 10)
        </Heading>
        <p className="text-sm text-gray-500 mt-1">
          {selectedMonth === "all" ? "전체 기간" : `${selectedMonth}월`} 기준 가장 축제가 많은
          지역입니다.
        </p>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E5E7EB" />
            <XAxis type="number" hide />
            <YAxis
              dataKey="name"
              type="category"
              width={60}
              tick={{ fill: "#4B5563", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              cursor={{ fill: "#F3F4F6" }}
              contentStyle={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
              }}
            />
            <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={20}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index < 3 ? "#F59E0B" : "#9CA3AF"} // Top 3는 강조색
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
