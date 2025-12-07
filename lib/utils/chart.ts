import { Festival } from "@/types/festival";
import { categories } from "@/constants/categories";
import { areaCode } from "@/constants/areaCode";

export const CATEGORY_LABELS: Record<string, string> = {
  Music: "음악",
  Food: "음식",
  Nature: "자연",
  Cultural: "문화",
  Other: "기타",
};

export const calculateTypeCounts = (festivals: Festival[]) => {
  const counts = {
    Music: 0,
    Food: 0,
    Nature: 0,
    Cultural: 0,
    Other: 0,
  };

  festivals.forEach((festival) => {
    const text = (festival.title + festival.overView).toLowerCase();

    if (categories.Music.some((k) => text.includes(k))) {
      counts.Music++;
    } else if (categories.Food.some((k) => text.includes(k))) {
      counts.Food++;
    } else if (categories.Nature.some((k) => text.includes(k))) {
      counts.Nature++;
    } else if (categories.Cultural.some((k) => text.includes(k))) {
      counts.Cultural++;
    } else {
      counts.Other++;
    }
  });

  return counts;
};

export const calculateMonthlyCounts = (festivals: Festival[]) => {
  const counts = new Array(12).fill(0);

  festivals.forEach((festival) => {
    const start = festival.startDate < "2025-01-01" ? "2025-01-01" : festival.startDate;
    const end = festival.endDate > "2025-12-31" ? "2025-12-31" : festival.endDate;

    if (start > end) return;

    const startMonth = parseInt(start.substring(5, 7), 10) - 1;
    const endMonth = parseInt(end.substring(5, 7), 10) - 1;

    for (let i = startMonth; i <= endMonth; i++) {
      counts[i]++;
    }
  });

  return counts;
};

export const calculateRegionCounts = (festivals: Festival[]) => {
  const counts: Record<string, number> = {};
  festivals.forEach((festival) => {
    const regionName = areaCode[festival.areaCode as keyof typeof areaCode] || "Unknown";
    counts[regionName] = (counts[regionName] || 0) + 1;
  });
  return counts;
};

export const getMostActiveRegion = (festivals: Festival[]) => {
  const regionCounts = calculateRegionCounts(festivals);
  const [mostActiveRegion, maxRegionCount] = Object.entries(regionCounts).reduce(
    (max, entry) => (entry[1] > max[1] ? entry : max),
    ["-", 0]
  );
  return { mostActiveRegion, maxRegionCount };
};

export const getMostActiveMonth = (festivals: Festival[]) => {
  const monthlyCounts = calculateMonthlyCounts(festivals);
  const maxCount = Math.max(...monthlyCounts);
  const maxIndex = monthlyCounts.indexOf(maxCount);

  return {
    mostActiveMonth: maxCount > 0 ? `${maxIndex + 1}월` : "-",
    maxMonthCount: maxCount,
  };
};

export const getTopCategory = (typeCounts: Record<string, number>) => {
  const [type, maxCategoryCount] = Object.entries(typeCounts).reduce(
    (max, entry) => (entry[1] > max[1] ? entry : max),
    ["-", 0]
  );

  return { topCategory: CATEGORY_LABELS[type] || "-", maxCategoryCount };
};

export interface MonthlyChartData {
  name: string;
  count: number;
  [key: string]: any;
}

export const formatMonthlyChartData = (monthlyCounts: number[]): MonthlyChartData[] => {
  return monthlyCounts.map((count, index) => ({
    name: `${index + 1}월`,
    count,
  }));
};

export interface TypeChartData {
  name: string;
  value: number;
  [key: string]: any;
}

export const formatTypeChartData = (typeCounts: Record<string, number>): TypeChartData[] => {
  return Object.entries(typeCounts)
    .map(([key, value]) => ({
      name: CATEGORY_LABELS[key] || key,
      value,
    }))
    .sort((a, b) => b.value - a.value)
    .filter((item) => item.value > 0);
};

export interface RegionChartData {
  name: string;
  count: number;
  [key: string]: any;
}

export const formatRegionChartData = (regionCounts: Record<string, number>): RegionChartData[] => {
  return Object.entries(regionCounts)
    .map(([name, count]) => ({
      name,
      count,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);
};
