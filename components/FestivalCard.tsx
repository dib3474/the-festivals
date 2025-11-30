import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import Image from "next/image";

interface FestivalCardProps {
  title: string; // 제목
  addr1: string; // 주소
  startDate: string; // 시작일
  endDate: string; // 종료일
  homePage: string; // 홈페이지 주소
  posterImage: string; // 포스터 이미지
}

export default function FestivalCard({ title, addr1, posterImage }: FestivalCardProps) {
  return (
    <Card className="group relative flex flex-col overflow-hidden rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-2xl">
      {/* Card 컴포넌트로 감싸기 */}
      <Image
        src={posterImage}
        alt={title}
        width={300}
        height={200}
        className="w-full h-100 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparen p-4">
        <Heading level={3} size="md" marginBottom={false} className="text-white font-bold">
          {/* 제목: h2 태그, 크기 lg, 하단 여백 없음 */}
          {title}
        </Heading>
        <Text color="white" marginBottom={false}>
          {/* 설명: 회색, 하단 여백 있음 */}
          {addr1.split(" ").slice(0, 2).join(" ")}
        </Text>
      </div>
    </Card>
  );
}
