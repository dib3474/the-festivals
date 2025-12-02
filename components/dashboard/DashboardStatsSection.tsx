import { useMemo } from "react";
import DashboardStats from "@/components/dashboard/DashboardStats";
import { categories } from "@/constants/categories";
import { Festival } from "@/types/festival";
import { getMostActiveRegion, getMostActiveMonth, getTopCategory } from "@/lib/utils/chart";

interface DashboardStatsSectionProps {
  festivals: Festival[];
  monthlyChartData: Festival[];
  selectedMonth: string;
  selectedRegion: string;
  typeCounts: Record<keyof typeof categories, number>;
}

export default function DashboardStatsSection({
  festivals,
  monthlyChartData,
  selectedMonth,
  selectedRegion,
  typeCounts,
}: DashboardStatsSectionProps) {
  const totalFestivalsCount = festivals.length;

  // Most Active Region (in selected period)
  const { mostActiveRegion, maxRegionCount } = useMemo(
    () => getMostActiveRegion(festivals),
    [festivals]
  );

  // Most Active Month (in selected period)
  const { mostActiveMonth, maxMonthCount } = useMemo(
    () => getMostActiveMonth(festivals),
    [festivals]
  );

  // Top Category
  const { topCategory, maxCategoryCount } = useMemo(() => getTopCategory(typeCounts), [typeCounts]);

  // Determine Highlight Stat
  let highlightTitle = "최다 개최 지역";
  let highlightValue = mostActiveRegion;
  let highlightSubtext = `${maxRegionCount}개 축제`;

  if (selectedRegion !== "all") {
    if (selectedMonth === "all") {
      highlightTitle = "최다 개최 월";
      highlightValue = mostActiveMonth;
      highlightSubtext = `${maxMonthCount}개 축제`;
    } else {
      // Region & Month both selected -> Show Percentage of Region's Total
      const regionTotal = monthlyChartData.length;
      const monthCount = festivals.length;
      const percentage = regionTotal === 0 ? 0 : Math.round((monthCount / regionTotal) * 100);

      highlightTitle = `${selectedMonth}월 개최 비중`;
      highlightValue = `${percentage}%`;
      highlightSubtext = `${selectedRegion} 전체 ${regionTotal}개 중 ${monthCount}개`;
    }
  }

  return (
    <DashboardStats
      totalFestivalsCount={totalFestivalsCount}
      selectedMonth={selectedMonth}
      highlightTitle={highlightTitle}
      highlightValue={highlightValue}
      highlightSubtext={highlightSubtext}
      topCategory={topCategory}
      maxCategoryCount={maxCategoryCount}
    />
  );
}
