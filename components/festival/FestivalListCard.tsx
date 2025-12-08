import Link from "next/link";
import Image from "next/image";
import MapPinIcon from "@/components/icon/MapPinIcon";
import CalendarIcon from "@/components/icon/CalendarIcon";
import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

interface FestivalListCardProps {
  id: number;
  title: string;
  addr1: string;
  startDate: string;
  endDate: string;
  posterImage: string;
}

/**
 * 날짜를 기준으로 축제의 상태(예정, 진행 중, 종료)를 반환합니다.
 */
const getStatus = (startDate: string, endDate: string) => {
  const today = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  // 날짜 형식이 YYYY-MM-DD
  // 시간을 00:00:00으로 설정하여 날짜만 비교
  today.setHours(0, 0, 0, 0);
  start.setHours(0, 0, 0, 0);
  end.setHours(0, 0, 0, 0);

  if (today < start) {
    return { label: "예정", color: "bg-blue-500" };
  } else if (today >= start && today <= end) {
    return { label: "진행 중", color: "bg-orange-500" };
  } else {
    return { label: "종료", color: "bg-gray-500" };
  }
};

/**
 * 축제 목록 페이지에서 사용되는 개별 축제 카드 컴포넌트입니다.
 * 축제 상태 뱃지와 간략한 정보를 표시합니다.
 */
export default function FestivalListCard({
  id,
  title,
  addr1,
  startDate,
  endDate,
  posterImage,
}: FestivalListCardProps) {
  const status = getStatus(startDate, endDate);

  return (
    <Link href={`/festival/${id}`} className="block h-full">
      <Card className="group relative flex flex-col h-full overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
        {/* 포스터 이미지 영역 */}
        <div className="relative w-full aspect-[3/4] bg-gray-200 overflow-hidden">
          {posterImage ? (
            <Image
              src={posterImage}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400">No Image</div>
          )}
          <div
            className={`absolute top-3 right-3 inline-flex items-center rounded-full px-3 py-1 text-xs font-bold text-white ${status.color}`}
          >
            {status.label}
          </div>
        </div>

        {/* 콘텐츠 영역 */}
        <div className="p-3 flex flex-col flex-grow">
          <Heading level={3} size="sm" marginBottom={false} className="font-bold mb-1 line-clamp-1">
            {title}
          </Heading>

          <div className="mt-auto flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-gray-600">
              <MapPinIcon size={14} />
              <Text size="xs" color="muted" className="line-clamp-1">
                {addr1.split(" ").slice(0, 2).join(" ")}
              </Text>
            </div>
            <div className="flex items-center gap-1.5 text-gray-600">
              <CalendarIcon size={14} />
              <Text size="xs" color="muted">
                {startDate} ~ {endDate}
              </Text>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
