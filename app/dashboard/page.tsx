"use client";

import { useState, useMemo } from "react";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Grid from "@/components/ui/Grid";
import festivalsData from "@/data/festivals.json";
import { areaCode } from "@/constants/areaCode";
import { Festival } from "@/types/festival";
import DashboardFilters from "@/components/dashboard/DashboardFilters";
import DashboardStatsSection from "@/components/dashboard/DashboardStatsSection";
import MonthlyChart from "@/components/dashboard/MonthlyChart";
import RegionChart from "@/components/dashboard/RegionChart";
import TypeChart from "@/components/dashboard/TypeChart";
import {
  parseDate,
  calculateTypeCounts,
  calculateMonthlyCounts,
  calculateRegionCounts,
  getSortedRegions,
} from "@/lib/utils/chart";

/**
 * 대시보드 페이지 컴포넌트
 *
 * 축제 데이터를 기반으로 다양한 통계와 차트를 시각화하여 보여줍니다.
 * 사용자는 월별, 지역별 필터를 통해 원하는 데이터를 조회할 수 있습니다.
 */
export default function DashboardPage() {
  const festivals = festivalsData as Festival[];

  // 필터 상태 관리
  const [selectedMonth, setSelectedMonth] = useState<string>("all");
  const [selectedRegion, setSelectedRegion] = useState<string>("all");

  // 1. 기본 데이터: 2025년 축제 데이터
  const thisYearFestivals = useMemo(() => {
    return festivals.filter((festival) => festival.startDate.startsWith("2025"));
  }, [festivals]);

  // 2. 필터링 로직
  const getFilteredData = (applyMonth: boolean, applyRegion: boolean) => {
    return thisYearFestivals.filter((festival) => {
      const date = parseDate(festival.startDate);

      // 월별 필터
      if (applyMonth && selectedMonth !== "all") {
        if (date.getMonth() + 1 !== parseInt(selectedMonth)) return false;
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

  // --- 지역별 차트 데이터 준비 ---
  const regionCountsForChart = calculateRegionCounts(regionChartData);
  const sortedRegions = getSortedRegions(regionCountsForChart);

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
          <DashboardFilters
            selectedMonth={selectedMonth}
            setSelectedMonth={setSelectedMonth}
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
          />
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
        <Grid columns={{ default: 1, lg: 5 }} gap="md" marginBottom={false}>
          {/* 월별 축제 현황 차트 */}
          {selectedMonth === "all" && (
            <MonthlyChart monthlyCounts={monthlyCounts} selectedRegion={selectedRegion} />
          )}

          {/* 유형별 축제 분포 차트 */}
          <TypeChart typeCounts={typeCountsForStats} totalCount={totalFestivalsCount} />

          {/* 지역별 축제 현황 차트 - "전체 지역" 선택 시에만 표시 */}
          {selectedRegion === "all" && (
            <RegionChart sortedRegions={sortedRegions} selectedMonth={selectedMonth} />
          )}
        </Grid>
      </div>
    </div>
  );
}
