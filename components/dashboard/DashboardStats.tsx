import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

interface DashboardStatsProps {
  totalFestivalsCount: number;
  selectedMonth: string;
  topCategory: string;
  maxCategoryCount: number;
  highlightTitle: string;
  highlightValue: string;
  highlightSubtext: string;
}

export default function DashboardStats({
  totalFestivalsCount,
  selectedMonth,
  topCategory,
  maxCategoryCount,
  highlightTitle,
  highlightValue,
  highlightSubtext,
}: DashboardStatsProps) {
  const statsData = [
    {
      title: "선택 기간 축제 수",
      value: totalFestivalsCount.toLocaleString(),
      subtext: selectedMonth === "all" ? "2025년 전체" : `${selectedMonth}월 진행`,
    },
    {
      title: highlightTitle,
      value: highlightValue,
      subtext: highlightSubtext,
    },
    {
      title: "주요 축제 유형",
      value: topCategory,
      subtext: `${maxCategoryCount}개 축제`,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      {statsData.map((stat, index) => (
        <Card key={index} className="flex flex-col gap-2 p-6">
          <Text className="text-gray-600 font-medium">{stat.title}</Text>
          <Heading level={3} size="3xl" className="font-bold text-gray-900" marginBottom={false}>
            {stat.value}
          </Heading>
          <Text className="text-green-600 text-sm font-medium">{stat.subtext}</Text>
        </Card>
      ))}
    </div>
  );
}
