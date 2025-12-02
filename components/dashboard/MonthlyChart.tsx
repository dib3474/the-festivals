import { useState } from "react";
import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { getSmoothSvgPath } from "@/lib/utils/chart";
import ChartTooltip from "@/components/dashboard/ChartTooltip";

const MONTHS = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];

interface MonthlyChartProps {
  monthlyCounts: number[];
  selectedRegion: string;
}

export default function MonthlyChart({ monthlyCounts, selectedRegion }: MonthlyChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const maxMonthlyCount = Math.max(...monthlyCounts, 1);
  const chartWidth = 478;
  const xStep = chartWidth / 11;

  const points: [number, number][] = monthlyCounts.map((count, index) => {
    const x = index * xStep;
    const y = 130 - (count / maxMonthlyCount) * 100;
    return [x, y];
  });

  const linePath = getSmoothSvgPath(points);
  const areaPath = `${linePath} L ${points[points.length - 1][0]} 150 L 0 150 Z`;

  return (
    <Card className="lg:col-span-3 flex flex-col gap-2 p-6">
      <Heading level={3} size="lg" className="font-semibold text-gray-900" marginBottom={false}>
        월별 축제 현황
      </Heading>
      <Text color="muted" size="sm">
        {selectedRegion === "all" ? "전체 지역" : selectedRegion} 연간 추이
      </Text>
      <div className="h-64 mt-4">
        <svg
          fill="none"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 478 150"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="chart-gradient"
              x1="236"
              x2="236"
              y1="1"
              y2="149"
            >
              <stop stopColor="#ee5b2b" stopOpacity="0.2"></stop>
              <stop offset="1" stopColor="#ee5b2b" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <path d={areaPath} fill="url(#chart-gradient)"></path>
          <path
            d={linePath}
            className="stroke-[#ee5b2b]"
            strokeLinecap="round"
            strokeWidth="2"
          ></path>

          {/* Interaction Layer */}
          {points.map(([x, y], index) => (
            <g key={index}>
              {/* Hover Area */}
              <rect
                x={index === 0 ? 0 : x - xStep / 2}
                y={0}
                width={index === 0 || index === points.length - 1 ? xStep / 2 : xStep}
                height={150}
                fill="transparent"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="cursor-pointer"
              />

              {/* Tooltip */}
              {hoveredIndex === index && <ChartTooltip x={x} y={y} value={monthlyCounts[index]} />}
            </g>
          ))}
        </svg>
      </div>
      <div className="relative w-full h-5 -mt-4">
        {MONTHS.map((month, index) => (
          <p
            key={month}
            className="absolute top-0 text-gray-500 text-xs font-medium -translate-x-1/2 whitespace-nowrap"
            style={{ left: `${(index / 11) * 100}%` }}
          >
            {month}
          </p>
        ))}
      </div>
    </Card>
  );
}
