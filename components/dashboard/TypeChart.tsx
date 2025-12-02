import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";

interface TypeChartProps {
  typeCounts: {
    Music: number;
    Food: number;
    Nature: number;
    Cultural: number;
    Other: number;
  };
  totalCount: number;
}

export default function TypeChart({ typeCounts, totalCount }: TypeChartProps) {
  const totalCategorized = Object.values(typeCounts).reduce((sum, count) => sum + count, 0);
  const getPercent = (count: number) =>
    totalCategorized === 0 ? 0 : Math.round((count / totalCategorized) * 100);

  const musicDash = totalCategorized === 0 ? 0 : (typeCounts.Music / totalCategorized) * 100;
  const foodDash = totalCategorized === 0 ? 0 : (typeCounts.Food / totalCategorized) * 100;
  const natureDash = totalCategorized === 0 ? 0 : (typeCounts.Nature / totalCategorized) * 100;
  const culturalDash = totalCategorized === 0 ? 0 : (typeCounts.Cultural / totalCategorized) * 100;
  const otherDash =
    totalCategorized === 0
      ? 0
      : Math.max(0, 100 - musicDash - foodDash - natureDash - culturalDash);

  return (
    <Card className="lg:col-span-2 flex flex-col gap-2 p-6">
      <Heading level={3} size="lg" className="font-semibold text-gray-900" marginBottom={false}>
        유형별 축제 분포
      </Heading>
      <div className="flex items-center justify-center min-h-[180px] my-4">
        <div className="relative w-40 h-40">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
            <circle
              className="stroke-current text-gray-200"
              cx="18"
              cy="18"
              fill="none"
              r="15.915"
              strokeWidth="4"
            ></circle>
            {/* Music */}
            <circle
              className="stroke-current text-[#ee5b2b]"
              cx="18"
              cy="18"
              fill="none"
              r="15.915"
              strokeDasharray={`${musicDash}, 100`}
              strokeDashoffset="0"
              strokeWidth="4"
            ></circle>
            {/* Food */}
            <circle
              className="stroke-current text-blue-500"
              cx="18"
              cy="18"
              fill="none"
              r="15.915"
              strokeDasharray={`${foodDash}, 100`}
              strokeDashoffset={`-${musicDash}`}
              strokeWidth="4"
            ></circle>
            {/* Nature */}
            <circle
              className="stroke-current text-teal-500"
              cx="18"
              cy="18"
              fill="none"
              r="15.915"
              strokeDasharray={`${natureDash}, 100`}
              strokeDashoffset={`-${musicDash + foodDash}`}
              strokeWidth="4"
            ></circle>
            {/* Cultural */}
            <circle
              className="stroke-current text-yellow-500"
              cx="18"
              cy="18"
              fill="none"
              r="15.915"
              strokeDasharray={`${culturalDash}, 100`}
              strokeDashoffset={`-${musicDash + foodDash + natureDash}`}
              strokeWidth="4"
            ></circle>
            {/* Other */}
            <circle
              className="stroke-current text-gray-500"
              cx="18"
              cy="18"
              fill="none"
              r="15.915"
              strokeDasharray={`${otherDash}, 100`}
              strokeDashoffset={`-${musicDash + foodDash + natureDash + culturalDash}`}
              strokeWidth="4"
            ></circle>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-gray-900">{totalCount}</span>
            <span className="text-xs text-gray-500">전체</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 justify-items-center">
        <div className={`flex items-center gap-2 ${typeCounts.Music === 0 ? "invisible" : ""}`}>
          <div className="w-3 h-3 rounded-full bg-[#ee5b2b]"></div>
          <span className="text-sm text-gray-700">음악 ({getPercent(typeCounts.Music)}%)</span>
        </div>
        <div className={`flex items-center gap-2 ${typeCounts.Food === 0 ? "invisible" : ""}`}>
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className="text-sm text-gray-700">음식 ({getPercent(typeCounts.Food)}%)</span>
        </div>
        <div className={`flex items-center gap-2 ${typeCounts.Nature === 0 ? "invisible" : ""}`}>
          <div className="w-3 h-3 rounded-full bg-teal-500"></div>
          <span className="text-sm text-gray-700">자연 ({getPercent(typeCounts.Nature)}%)</span>
        </div>
        <div className={`flex items-center gap-2 ${typeCounts.Cultural === 0 ? "invisible" : ""}`}>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <span className="text-sm text-gray-700">문화 ({getPercent(typeCounts.Cultural)}%)</span>
        </div>
        <div className={`flex items-center gap-2 ${typeCounts.Other === 0 ? "invisible" : ""}`}>
          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
          <span className="text-sm text-gray-700">기타 ({getPercent(typeCounts.Other)}%)</span>
        </div>
      </div>
    </Card>
  );
}
