"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Festival } from "@/types/festival";
import FestivalListGrid from "@/components/festival/FestivalListGrid";
import FestivalSearchFilters from "@/components/festival/FestivalSearchFilters";
import Pagination from "@/components/ui/Pagination";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import SearchIcon from "@/components/icon/SearchIcon";
import festivalsData from "@/data/festivals.json";

function FestivalListContent() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const keyword = searchParams.get("keyword") || "";
  const areaCode = searchParams.get("areaCode") || "";
  const startDate = searchParams.get("startDate") || "";
  const endDate = searchParams.get("endDate") || "";
  const itemsPerPage = 20;

  let filteredFestivals = festivalsData as Festival[];

  // Filter by keyword
  if (keyword) {
    filteredFestivals = filteredFestivals.filter((festival) => festival.title.includes(keyword));
  }

  // Filter by areaCode
  if (areaCode) {
    filteredFestivals = filteredFestivals.filter(
      (festival) => festival.areaCode === Number(areaCode)
    );
  }

  // Filter by date range
  if (startDate || endDate) {
    filteredFestivals = filteredFestivals.filter((festival) => {
      const festivalStart = festival.startDate;
      const festivalEnd = festival.endDate;

      // If both dates are selected, check for overlap
      if (startDate && endDate) {
        return festivalStart <= endDate && festivalEnd >= startDate;
      }

      // If only startDate is selected, show festivals ending after or on startDate
      if (startDate) {
        return festivalEnd >= startDate;
      }

      // If only endDate is selected, show festivals starting before or on endDate
      if (endDate) {
        return festivalStart <= endDate;
      }

      return true;
    });
  }

  const totalItems = filteredFestivals.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFestivals = filteredFestivals.slice(startIndex, endIndex);

  return (
    <div className="w-full max-w-7xl">
      {/* Hero Section */}
      <div className="flex flex-col gap-6 mb-8">
        <div className="text-center">
          <Heading
            level={2}
            size="2xl"
            align="center"
            className="font-black tracking-tighter sm:text-5xl"
          >
            전국 축제 둘러보기
          </Heading>
          <Text size="lg" color="muted" align="center" className="mt-3">
            대한민국 곳곳에서 열리는 다채로운 축제를 발견해 보세요.
          </Text>
        </div>

        {/* Search & Filters (Client Component) */}
        <FestivalSearchFilters />
      </div>

      {/* Festival Grid or No Results */}
      {currentFestivals.length > 0 ? (
        <>
          <FestivalListGrid festivals={currentFestivals} />
          <Pagination currentPage={page} totalPages={totalPages} baseUrl="/festival" />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="bg-gray-100 p-4 rounded-full mb-4">
            <SearchIcon size={48} className="text-gray-400" />
          </div>
          <Heading level={3} size="lg" className="mb-2 text-gray-900">
            검색 결과가 없습니다
          </Heading>
          <Text color="muted">다른 검색어나 필터를 사용하여 다시 시도해 보세요.</Text>
        </div>
      )}
    </div>
  );
}

export default function FestivalListPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-1 justify-center py-8 px-4 sm:px-6 lg:px-8">
      <Suspense fallback={<div>Loading...</div>}>
        <FestivalListContent />
      </Suspense>
    </main>
  );
}
