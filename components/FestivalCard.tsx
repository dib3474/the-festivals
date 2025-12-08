import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import Image from "next/image";
import Link from "next/link";

interface FestivalCardProps {
  id?: number;
  title: string; // 제목
  addr1: string; // 주소
  startDate?: string; // 시작일
  endDate?: string; // 종료일
  homePage?: string; // 홈페이지 주소
  posterImage: string; // 포스터 이미지
}

/**
 * 개별 축제 정보를 카드 형태로 보여주는 컴포넌트입니다.
 */
export default function FestivalCard({ id, title, addr1, posterImage }: FestivalCardProps) {
  const CardContent = (
    <Card className="group relative flex flex-col overflow-hidden rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-2xl h-full">
      <div className="relative w-full aspect-[3/4]">
        <Image
          src={posterImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-20">
          <Heading
            level={3}
            size="md"
            marginBottom={false}
            className="text-white font-bold mb-1 line-clamp-1"
          >
            {title}
          </Heading>
          <Text color="white" size="sm" marginBottom={false} className="opacity-90 line-clamp-1">
            {addr1.split(" ").slice(0, 2).join(" ")}
          </Text>
        </div>
      </div>
    </Card>
  );

  if (id) {
    return <Link href={`/festival/${id}`}>{CardContent}</Link>;
  }

  return CardContent;
}
