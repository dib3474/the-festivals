import Card from "@/components/ui/Card";
import Text from "@/components/ui/Text";
import Heading from "@/components/ui/Heading";

interface FestivalOverviewProps {
  overview: string;
}

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
