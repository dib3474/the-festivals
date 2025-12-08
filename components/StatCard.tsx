import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import Image from "next/image";

interface StatCardProps {
  title: string;
  value: number;
  icon: string;
}

/**
 * 단일 통계 정보를 카드 형태로 보여주는 컴포넌트입니다.
 */
export default function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <Card
      padding="md"
      variant="primary"
      className="flex flex-col items-center justify-center gap-2"
    >
      <Heading level={2} align="center" marginBottom={false} className="text-white font-bold">
        {icon}
      </Heading>
      <Heading
        level={1}
        align="center"
        marginBottom={false}
        className="text-2xl sm:text-3xl text-white font-bold"
      >
        {value.toLocaleString()}
      </Heading>
      <Text color="white" align="center" marginBottom={false}>
        {title}
      </Text>
    </Card>
  );
}
