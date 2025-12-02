import { Festival } from "@/types/festival";
import { categories } from "@/constants/categories";
import { areaCode } from "@/constants/areaCode";

export const getSmoothSvgPath = (points: [number, number][]) => {
  if (points.length === 0) return "";
  if (points.length === 1) return `M ${points[0][0]} ${points[0][1]}`;

  let d = `M ${points[0][0]} ${points[0][1]}`;

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i === 0 ? 0 : i - 1];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] || p2;

    const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
    const cp1y = p1[1] + (p2[1] - p0[1]) / 6;

    const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
    const cp2y = p2[1] - (p3[1] - p1[1]) / 6;

    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2[0]} ${p2[1]}`;
  }
  return d;
};

export const parseDate = (dateStr: string) => new Date(dateStr);

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
    let matched = false;
    if (categories.Music.some((k) => text.includes(k))) {
      counts.Music++;
      matched = true;
    } else if (categories.Food.some((k) => text.includes(k))) {
      counts.Food++;
      matched = true;
    } else if (categories.Nature.some((k) => text.includes(k))) {
      counts.Nature++;
      matched = true;
    } else if (categories.Cultural.some((k) => text.includes(k))) {
      counts.Cultural++;
      matched = true;
    }
    if (!matched) counts.Other++;
  });

  return counts;
};

export const calculateMonthlyCounts = (festivals: Festival[]) => {
  const counts = new Array(12).fill(0);
  festivals.forEach((festival) => {
    const month = parseDate(festival.startDate).getMonth();
    counts[month]++;
  });
  return counts;
};

export const calculateRegionCounts = (festivals: Festival[]) => {
  const counts: Record<string, number> = {};
  festivals.forEach((festival) => {
    // @ts-ignore
    const regionName = areaCode[festival.areaCode] || "Unknown";
    counts[regionName] = (counts[regionName] || 0) + 1;
  });
  return counts;
};

export const getSortedRegions = (regionCounts: Record<string, number>) => {
  return Object.entries(regionCounts)
    .sort(([, countA], [, countB]) => countB - countA)
    .map(([name, count]) => ({
      name,
      count,
      percentage: `${(count / Math.max(...Object.values(regionCounts), 1)) * 100}%`,
    }));
};

export const getMostActiveRegion = (festivals: Festival[]) => {
  const regionCounts = calculateRegionCounts(festivals);
  let region = "-";
  let count = 0;
  Object.entries(regionCounts).forEach(([r, c]) => {
    if (c > count) {
      count = c;
      region = r;
    }
  });
  return { mostActiveRegion: region, maxRegionCount: count };
};

export const getMostActiveMonth = (festivals: Festival[]) => {
  const monthCounts: Record<number, number> = {};
  festivals.forEach((festival) => {
    const month = parseDate(festival.startDate).getMonth() + 1;
    monthCounts[month] = (monthCounts[month] || 0) + 1;
  });

  let month = "-";
  let count = 0;
  Object.entries(monthCounts).forEach(([m, c]) => {
    if (c > count) {
      count = c;
      month = `${m}월`;
    }
  });
  return { mostActiveMonth: month, maxMonthCount: count };
};

export const getTopCategory = (typeCounts: Record<string, number>) => {
  let category = "-";
  let count = 0;
  Object.entries(typeCounts).forEach(([type, c]) => {
    if (c > count) {
      count = c;
      category =
        type === "Music"
          ? "음악"
          : type === "Food"
          ? "음식"
          : type === "Nature"
          ? "자연"
          : type === "Cultural"
          ? "문화"
          : "기타";
    }
  });
  return { topCategory: category, maxCategoryCount: count };
};
