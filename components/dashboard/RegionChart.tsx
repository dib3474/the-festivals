import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

interface RegionChartProps {
  sortedRegions: { name: string; count: number; percentage: string }[];
  selectedMonth: string;
}

export default function RegionChart({ sortedRegions, selectedMonth }: RegionChartProps) {
  return (
    <Card className="lg:col-span-3 flex flex-col gap-2 p-6">
      <Heading level={3} size="lg" className="font-semibold text-gray-900" marginBottom={false}>
        지역별 축제 현황
      </Heading>
      <Text color="muted" size="sm">
        {selectedMonth === "all" ? "전체 기간" : `${selectedMonth}월`} 지역별 분포 (내림차순)
      </Text>
      <div className="flex items-end gap-4 h-64 overflow-x-auto pb-4 pt-4 mt-4 custom-scrollbar">
        {sortedRegions.map((region) => (
          <div
            key={region.name}
            className="flex flex-col items-center gap-2 min-w-[40px] h-full justify-end"
          >
            <div className="flex flex-col items-center justify-end w-8 h-full">
              <span className="text-xs text-gray-600 font-medium mb-1">{region.count}</span>
              <div
                className="w-full bg-[#ee5b2b] rounded-t-lg transition-all"
                style={{ height: region.percentage }}
              ></div>
            </div>
            <span className="text-xs text-gray-600 font-medium whitespace-nowrap">
              {region.name}
            </span>
          </div>
        ))}
        {sortedRegions.length === 0 && (
          <div className="w-full text-center text-gray-500 py-4 self-center">
            데이터가 없습니다.
          </div>
        )}
      </div>
    </Card>
  );
}
