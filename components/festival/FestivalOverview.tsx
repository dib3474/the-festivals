import Card from "@/components/ui/Card";
import Text from "@/components/ui/Text";
import Heading from "@/components/ui/Heading";

interface FestivalOverviewProps {
  overview: string;
}

/**
 * 축제의 상세 설명(개요)을 보여주는 컴포넌트입니다.
 */
export default function FestivalOverview({ overview }: FestivalOverviewProps) {
  return (
    <Card padding="md" className="rounded-2xl border border-gray-100">
      <Heading level={2} className="text-xl font-bold text-gray-900">
        축제 소개
      </Heading>
      <div className="prose prose-lg text-gray-600 leading-relaxed">
        <Text>{overview}</Text>
      </div>
    </Card>
  );
}
