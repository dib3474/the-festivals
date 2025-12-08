import HeroSection from "@/components/HeroSection";
import FestivalGrid from "@/components/FestivalGrid";
import Heading from "@/components/ui/Heading";
import festivalsData from "@/data/festivals.json";
import { Festival } from "@/types/festival";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "오늘 진행 중인 축제와 인기 축제를 확인해보세요.",
};

export default function Home() {
  const today = new Date();
  const todayStart = new Date(today);
  todayStart.setHours(0, 0, 0, 0);
  const todayEnd = new Date(today);
  todayEnd.setHours(23, 59, 59, 999);

  // 1. 전체 통계 계산
  const totalCount = (festivalsData as Festival[]).length;

  // 진행 중인 축제 리스트 (오늘 기준)
  const ongoingFestivals = (festivalsData as Festival[]).filter((f) => {
    const start = new Date(f.startDate);
    const end = new Date(f.endDate);
    end.setHours(23, 59, 59, 999);
    return start <= todayEnd && end >= todayStart;
  });

  const ongoingCount = ongoingFestivals.length;

  const upcomingCount = (festivalsData as Festival[]).filter((f) => {
    const start = new Date(f.startDate);
    return start > todayEnd;
  }).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection
        totalCount={totalCount}
        ongoingCount={ongoingCount}
        upcomingCount={upcomingCount}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Heading level={3} size="lg" align="left" className="text-gray-900">
          현재 진행 중인 축제
        </Heading>
        <FestivalGrid festivals={ongoingFestivals} />
      </div>
    </div>
  );
}
