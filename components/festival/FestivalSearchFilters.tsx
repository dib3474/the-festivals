"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SearchIcon from "@/components/icon/SearchIcon";
import ChevronDownIcon from "@/components/icon/ChevronDownIcon";
import RefreshIcon from "@/components/icon/RefreshIcon";
import CalendarIcon from "@/components/icon/CalendarIcon";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import { areaCode } from "@/constants/areaCode";

export default function FestivalSearchFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State
  const [keyword, setKeyword] = useState("");
  const [selectedAreaCode, setSelectedAreaCode] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  // Dropdown visibility
  const [isRegionOpen, setIsRegionOpen] = useState(false);
  const [isDateOpen, setIsDateOpen] = useState(false);

  // Refs for click outside
  const regionRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);

  // Initialize from URL
  useEffect(() => {
    const k = searchParams.get("keyword") || "";
    const a = searchParams.get("areaCode") || "";
    const s = searchParams.get("startDate") || "";
    const e = searchParams.get("endDate") || "";

    setKeyword(k);
    setSelectedAreaCode(a);
    setStartDate(s);
    setEndDate(e);
  }, [searchParams]);

  // Close dropdowns on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (regionRef.current && !regionRef.current.contains(event.target as Node)) {
        setIsRegionOpen(false);
      }
      if (dateRef.current && !dateRef.current.contains(event.target as Node)) {
        setIsDateOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (keyword) params.set("keyword", keyword);
    if (selectedAreaCode) params.set("areaCode", selectedAreaCode);
    if (startDate) params.set("startDate", startDate);
    if (endDate) params.set("endDate", endDate);
    params.set("page", "1"); // Reset to page 1

    router.push(`/festival?${params.toString()}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleReset = () => {
    setKeyword("");
    setSelectedAreaCode("");
    setStartDate("");
    setEndDate("");
  };

  return (
    <div className="flex flex-col gap-6 mb-8">
      {/* Search Bar */}
      <div className="mx-auto w-full max-w-2xl">
        <div className="relative flex w-full items-center">
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full rounded-full border border-gray-300 bg-white py-3 pl-4 pr-14 text-base text-gray-900 placeholder:text-gray-500 focus:border-red-400 focus:ring-2 focus:ring-red-400/50 outline-none transition-all"
            placeholder="찾고 있는 축제를 검색해 보세요"
          />
          <Button
            variant="primary"
            onClick={handleSearch}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full text-white transition-colors"
          >
            <SearchIcon size={20} />
          </Button>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 relative z-10">
        {/* Region Filter */}
        <div className="relative" ref={regionRef}>
          <Button
            variant="ghost"
            onClick={() => setIsRegionOpen(!isRegionOpen)}
            className={`h-10 items-center gap-2 rounded-full border transition-colors ${
              selectedAreaCode
                ? "bg-red-50 border-red-400 text-red-500"
                : "bg-white border-gray-300 text-gray-900 hover:border-red-400 hover:text-red-400"
            }`}
          >
            <Text className="text-sm font-medium">
              {selectedAreaCode
                ? areaCode[Number(selectedAreaCode) as keyof typeof areaCode]
                : "지역"}
            </Text>
            <ChevronDownIcon size={18} />
          </Button>

          {isRegionOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 rounded-xl border border-gray-200 bg-white shadow-lg p-2 grid grid-cols-2 gap-1 z-20">
              {Object.entries(areaCode).map(([code, name]) => (
                <button
                  key={code}
                  onClick={() => {
                    setSelectedAreaCode(code);
                    setIsRegionOpen(false);
                  }}
                  className={`rounded px-2 py-1.5 text-sm text-left hover:bg-gray-100 ${
                    selectedAreaCode === code
                      ? "bg-red-50 text-red-500 font-medium"
                      : "text-gray-700"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Date Range Filter */}
        <div className="relative" ref={dateRef}>
          <Button
            variant="ghost"
            onClick={() => setIsDateOpen(!isDateOpen)}
            className={`h-10 items-center gap-2 rounded-full border transition-colors w-[220px] justify-between ${
              startDate || endDate
                ? "bg-red-50 border-red-400 text-red-500"
                : "bg-white border-gray-300 text-gray-900 hover:border-red-400 hover:text-red-400"
            }`}
          >
            <Text className="text-sm font-medium truncate">
              {startDate || endDate ? `${startDate || ""} ~ ${endDate || ""}` : "기간 선택"}
            </Text>
            <CalendarIcon size={18} className="shrink-0" />
          </Button>

          {isDateOpen && (
            <div className="absolute top-full left-0 mt-2 w-72 rounded-xl border border-gray-200 bg-white shadow-lg p-4 z-20 flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-600">시작일</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-red-400 focus:outline-none focus:ring-1 focus:ring-red-400"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-600">종료일</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 focus:border-red-400 focus:outline-none focus:ring-1 focus:ring-red-400"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
                <button
                  onClick={() => {
                    setStartDate("");
                    setEndDate("");
                  }}
                  className="px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-700"
                >
                  초기화
                </button>
                <button
                  onClick={() => {
                    setIsDateOpen(false);
                  }}
                  className="rounded bg-red-400 px-3 py-1.5 text-xs font-medium text-white hover:bg-red-500"
                >
                  적용
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Reset Button */}
        <Button
          variant="ghost"
          onClick={handleReset}
          className="h-10 items-center gap-x-2 rounded-full bg-white border border-gray-300 text-gray-900 hover:bg-white hover:border-red-500 hover:text-red-500"
        >
          <Text className="text-sm font-medium">필터 초기화</Text>
          <RefreshIcon size={18} />
        </Button>
      </div>
    </div>
  );
}
