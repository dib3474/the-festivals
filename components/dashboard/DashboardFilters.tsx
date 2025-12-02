import ChevronDownIcon from "@/components/icon/ChevronDownIcon";
import { areaCode } from "@/constants/areaCode";

interface DashboardFiltersProps {
  selectedMonth: string;
  setSelectedMonth: (value: string) => void;
  selectedRegion: string;
  setSelectedRegion: (value: string) => void;
}

export default function DashboardFilters({
  selectedMonth,
  setSelectedMonth,
  selectedRegion,
  setSelectedRegion,
}: DashboardFiltersProps) {
  return (
    <div className="flex gap-2">
      {/* Month Filter */}
      <div className="relative">
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="h-10 appearance-none rounded-lg bg-white border border-gray-200 pl-3 pr-8 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#ee5b2b]"
        >
          <option value="all">전체 기간</option>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
            <option key={month} value={month}>
              {month}월
            </option>
          ))}
        </select>
        <ChevronDownIcon
          className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
          size={16}
        />
      </div>
      {/* Region Filter */}
      <div className="relative">
        <select
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="h-10 appearance-none rounded-lg bg-white border border-gray-200 pl-3 pr-8 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#ee5b2b]"
        >
          <option value="all">모든 지역</option>
          {Object.values(areaCode).map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
        <ChevronDownIcon
          className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
          size={16}
        />
      </div>
    </div>
  );
}
