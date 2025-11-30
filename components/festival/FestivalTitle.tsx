import Link from "next/link";
import ArrowLeftIcon from "@/components/icon/ArrowLeftIcon";
import { Festival } from "@/types/festival";
import Heading from "../ui/Heading";

interface FestivalTitleProps {
  festival: Festival;
}

export default function FestivalTitle({ festival }: FestivalTitleProps) {
  return (
    <div className="pt-8">
      <Link
        href="/festival"
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-1 transition-colors"
      >
        <ArrowLeftIcon size={20} className="mr-2" />
        축제 목록으로 돌아가기
      </Link>
      <Heading className="text-gray-900 mb-2">{festival.title}</Heading>
    </div>
  );
}
