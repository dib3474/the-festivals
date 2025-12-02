import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import Image from "next/image";

interface StatCardProps {
  title: string; // 제목
  value: number; // 값
  icon: string; // 아이콘
}

export default function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <Card
      padding="md"
      variant="primary"
      className="flex flex-col items-center justify-center gap-2"
    >
      {/* Card 컴포넌트로 감싸기 */}
      <Heading level={2} align="center" marginBottom={false} className="text-white font-bold">
        {icon}
      </Heading>
      <Heading
        level={1}
        align="center"
        marginBottom={false}
        className="text-2xl sm:text-3xl text-white font-bold"
      >
        {/* 제목: h2 태그, 크기 lg, 하단 여백 없음 */}
        {value.toLocaleString()}
      </Heading>
      <Text color="white" align="center" marginBottom={false}>
        {/* 설명: 회색, 하단 여백 있음 */}
        {title}
      </Text>
    </Card>
  );
}
