"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import Heading from "@/components/ui/Heading";
import { TypeChartData } from "@/lib/utils/chart";

interface TypeChartProps {
  data: TypeChartData[];
  totalCount: number;
}

const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#6366F1"];

export default function TypeChart({ data, totalCount }: TypeChartProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm col-span-1">
      <div className="mb-4">
        <Heading level={3} size="lg" className="text-gray-900" marginBottom={false}>
          축제 유형 분포
        </Heading>
        <p className="text-sm text-gray-500 mt-1">
          총 {totalCount}개 축제를 키워드 기준으로 임의 분류한 통계입니다.
        </p>
      </div>

      <div className="h-[300px] w-full flex items-center justify-center">
        {data.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                minAngle={3}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  border: "1px solid #E5E7EB",
                }}
              />
              <Legend
                layout="vertical"
                verticalAlign="middle"
                align="right"
                iconType="circle"
                wrapperStyle={{ fontSize: "12px", color: "#4B5563" }}
              />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="text-gray-400 text-sm">데이터가 없습니다.</div>
        )}
      </div>
    </div>
  );
}
