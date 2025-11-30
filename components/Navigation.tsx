import Link from "next/link";
import { FestivalIcon } from "@/components/icon/FestivalIcon";
import Heading from "@/components/ui/Heading";
import CalendarIcon from "./icon/CalendarIcon";

export default function Navigation() {
  return (
    <nav className="bg-red-400">
      {/* 배경 흰색, 하단 테두리, 그림자 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 최대 너비 1280px, 가로 중앙 정렬, 좌우 여백 */}
        <div className="flex justify-between h-20">
          {/* 높이 4rem, 아이템 양 끝 정렬 */}
          {/* 왼쪽: 로고 */}
          <Link
            href="/"
            className="flex items-center px-4 text-lg font-semibold text-white hover:text-rose-100"
          >
            <FestivalIcon size={32} />
            <div className="ml-2">
              <h1 className="font-bold">축제 한마당</h1>
              <p className="text-sm">The Festivals</p>
            </div>
          </Link>

          {/* 메뉴 항목들 */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {/**
                hidden: 기본값은 숨김 (모바일)
                sm:flex: 작은 화면 이상에서 flex 표시
                space-x-8: 메뉴 사이 간격 2rem
              */}
            <Link
              href="/"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-rose-100"
            >
              홈
            </Link>
            <Link
              href="/festivals"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-rose-100"
            >
              축제 목록
            </Link>
            <Link
              href="/stats"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-rose-100"
            >
              통계
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-rose-100"
            >
              About
            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            {/* 오른쪽: 오늘 날짜 */}
            <CalendarIcon size={24} />
            <p className="font-semibold">2025년 11월 11일</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
