"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Grid from "@/components/ui/Grid";
import Button from "@/components/ui/Button";
import festivalsData from "@/data/festivals.json";
import { areaCode } from "@/constants/areaCode";
import { Festival } from "@/types/festival";
import DashboardFilters from "@/components/dashboard/DashboardFilters";
import DashboardStatsSection from "@/components/dashboard/DashboardStatsSection";
import MonthlyChart from "@/components/dashboard/MonthlyChart";
import RegionChart from "@/components/dashboard/RegionChart";
import TypeChart from "@/components/dashboard/TypeChart";
import {
  calculateTypeCounts,
  calculateMonthlyCounts,
  calculateRegionCounts,
  formatMonthlyChartData,
  formatTypeChartData,
  formatRegionChartData,
} from "@/lib/utils/chart";

/**
 * 대시보드 페이지 컴포넌트
 *
 * 축제 데이터를 기반으로 다양한 통계와 차트를 시각화하여 보여줍니다.
 * 사용자는 월별, 지역별 필터를 통해 원하는 데이터를 조회할 수 있습니다.
 */
export default function DashboardPage() {
  const router = useRouter();
  const festivals = festivalsData as Festival[];

  // 필터 상태 관리
  const [selectedMonth, setSelectedMonth] = useState<string>("all");
  const [selectedRegion, setSelectedRegion] = useState<string>("all");

  // 검색 핸들러
  const handleSearch = () => {
    const params = new URLSearchParams();

    // Region -> AreaCode
    if (selectedRegion !== "all") {
      const code = Object.keys(areaCode).find(
        (key) => areaCode[key as unknown as keyof typeof areaCode] === selectedRegion
      );
      if (code) params.set("areaCode", code);
    }

    // Month -> Date Range (2025)
    if (selectedMonth !== "all") {
      const month = parseInt(selectedMonth);
      const startDate = `2025-${String(month).padStart(2, "0")}-01`;
      // Calculate last day of month
      const lastDay = new Date(2025, month, 0).getDate();
      const endDate = `2025-${String(month).padStart(2, "0")}-${lastDay}`;

      params.set("startDate", startDate);
      params.set("endDate", endDate);
    }

    router.push(`/festival?${params.toString()}`);
  };

  // 1. 필터링 로직
  const getFilteredData = (applyMonth: boolean, applyRegion: boolean) => {
    return festivals.filter((festival) => {
      // 월별 필터 (해당 월에 진행 중인 축제 포함)
      if (applyMonth && selectedMonth !== "all") {
        const month = parseInt(selectedMonth);
        const monthStart = `2025-${String(month).padStart(2, "0")}-01`;
        const lastDay = new Date(2025, month, 0).getDate();
        const monthEnd = `2025-${String(month).padStart(2, "0")}-${lastDay}`;

        if (!(festival.startDate <= monthEnd && festival.endDate >= monthStart)) {
          return false;
        }
      }

      // 지역별 필터
      if (applyRegion && selectedRegion !== "all") {
        // @ts-ignore
        const regionName = areaCode[festival.areaCode];
        if (regionName !== selectedRegion) return false;
      }

      return true;
    });
  };

  // 통계 및 리스트용 데이터 (모든 필터 적용)
  const mainFilteredData = getFilteredData(true, true);

  // 월별 차트용 데이터 (지역 필터만 적용, 월별 추이를 보기 위해 월 필터 무시)
  const monthlyChartData = getFilteredData(false, true);

  // 지역별 차트용 데이터 (월 필터만 적용, 지역별 비교를 위해 지역 필터 무시)
  const regionChartData = getFilteredData(true, false);

  // --- 통계 계산 ---
  const totalFestivalsCount = mainFilteredData.length;

  // 주요 축제 유형 (선택된 기간 내)
  const typeCountsForStats = calculateTypeCounts(mainFilteredData);

  // --- 월별 차트 데이터 준비 ---
  const monthlyCounts = calculateMonthlyCounts(monthlyChartData);
  const formattedMonthlyData = formatMonthlyChartData(monthlyCounts);

  // --- 지역별 차트 데이터 준비 ---
  const regionCountsForChart = calculateRegionCounts(regionChartData);
  const formattedRegionData = formatRegionChartData(regionCountsForChart);

  // --- 유형별 차트 데이터 준비 ---
  const formattedTypeData = formatTypeChartData(typeCountsForStats);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* 페이지 헤더 */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-col gap-1">
            <Heading level={1} size="3xl" className="font-bold tracking-tight text-gray-900">
              축제 대시보드
            </Heading>
            <Text color="muted" size="md">
              2025년 지역별 축제 트렌드를 확인하세요.
            </Text>
          </div>
          {/* 필터 영역 */}
          <div className="flex gap-2 items-center">
            <DashboardFilters
              selectedMonth={selectedMonth}
              setSelectedMonth={setSelectedMonth}
              selectedRegion={selectedRegion}
              setSelectedRegion={setSelectedRegion}
            />
            <Button onClick={handleSearch} variant="primary" className="h-10">
              축제 보기
            </Button>
          </div>
        </div>

        {/* 통계 요약 섹션 */}
        <DashboardStatsSection
          festivals={mainFilteredData}
          monthlyChartData={monthlyChartData}
          selectedMonth={selectedMonth}
          selectedRegion={selectedRegion}
          typeCounts={typeCountsForStats}
        />

        {/* 차트 영역 */}
        <Grid columns={{ default: 1, lg: 3 }} gap="md" marginBottom={false}>
          {/* 월별 축제 현황 차트 */}
          {selectedMonth === "all" && (
            <MonthlyChart data={formattedMonthlyData} selectedRegion={selectedRegion} />
          )}

          {/* 유형별 축제 분포 차트 */}
          <TypeChart data={formattedTypeData} totalCount={totalFestivalsCount} />

          {/* 지역별 축제 현황 차트 - "전체 지역" 선택 시에만 표시 */}
          {selectedRegion === "all" && (
            <RegionChart data={formattedRegionData} selectedMonth={selectedMonth} />
          )}
        </Grid>
      </div>
    </div>
  );
}
