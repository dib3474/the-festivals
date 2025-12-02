import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import StatGrid from "@/components/StatGrid";

interface HeroSectionProps {
  totalCount: number;
  ongoingCount: number;
  upcomingCount: number;
}

export default function HeroSection({ totalCount, ongoingCount, upcomingCount }: HeroSectionProps) {
  const stats = [
    {
      title: "전체 등록된 축제 수",
      value: totalCount,
      icon: "🎉",
    },
    {
      title: "진행 중인 축제 수",
      value: ongoingCount,
      icon: "⏰",
    },
    {
      title: "예정된 축제 수",
      value: upcomingCount,
      icon: "📅",
    },
  ];

  return (
    <div className="text-center mb-12 bg-red-400 pt-6 md:pt-12">
      {/*
        text-center: 모든 자식 요소 중앙 정렬
        mb-12: 하단 여백 3rem
      */}
      <Heading level={1} size="2xl" align="center" className="text-white text-3xl md:text-5xl px-4">
        축제 한마당에 오신 것을 환영합니다!
      </Heading>
      <Text
        size="md"
        color="white"
        align="center"
        marginBottom={false}
        className="text-base sm:text-lg md:text-xl px-4 mt-2 md:mt-0"
      >
        전국 방방곡곡에서 열리는 많은 축제를 만나보세요
      </Text>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <StatGrid stats={stats} />
      </div>
    </div>
  );
}
