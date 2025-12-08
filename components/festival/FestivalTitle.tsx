import Link from "next/link";
import ArrowLeftIcon from "@/components/icon/ArrowLeftIcon";
import { Festival } from "@/types/festival";
import Heading from "../ui/Heading";

interface FestivalTitleProps {
  festival: Festival;
}

/**
 * 축제 상세 페이지의 상단 제목 영역 컴포넌트입니다.
 * 뒤로가기 링크와 축제 제목을 포함합니다.
 */
export default function FestivalTitle({ festival }: FestivalTitleProps) {
  return (
    <div className="pt-8">
      <Link
        href="/festival"
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-1 transition-colors"
      >
        <ArrowLeftIcon size={20} className="mr-2" />
        축제 목록에서 다양한 축제 둘러보기
      </Link>
      <Heading className="text-gray-900 mb-2">{festival.title}</Heading>
    </div>
  );
}
