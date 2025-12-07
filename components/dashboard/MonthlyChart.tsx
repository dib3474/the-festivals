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
import { MonthlyChartData } from "@/lib/utils/chart";

interface MonthlyChartProps {
  data: MonthlyChartData[];
  selectedRegion: string;
}

export default function MonthlyChart({ data, selectedRegion }: MonthlyChartProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm col-span-1">
      <div className="mb-6">
        <Heading level={3} size="lg" className="text-gray-900" marginBottom={false}>
          월별 축제 현황
        </Heading>
        <p className="text-sm text-gray-500 mt-1">
          {selectedRegion === "all" ? "전국" : selectedRegion} 지역의 월별 축제 분포입니다.
        </p>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              dy={10}
              height={60}
              interval={0}
            />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: "#6B7280", fontSize: 12 }} />
            <Tooltip
              cursor={{ fill: "#F3F4F6" }}
              contentStyle={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                border: "1px solid #E5E7EB",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Bar dataKey="count" radius={[4, 4, 0, 0]} maxBarSize={50}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.count > 0 ? "#3B82F6" : "#E5E7EB"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
