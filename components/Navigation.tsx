"use client";

import { useState } from "react";
import Link from "next/link";
import { FestivalIcon } from "@/components/icon/FestivalIcon";

/**
 * 상단 네비게이션 바 컴포넌트입니다.
 * 로고, 메뉴 링크, 모바일 메뉴를 포함합니다.
 */
export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-red-400">
      {/* 배경 흰색, 하단 테두리, 그림자 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 최대 너비 1280px, 가로 중앙 정렬, 좌우 여백 */}
        <div className="flex justify-between h-20">
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

          {/* 데스크탑 메뉴 항목들 */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link
              href="/"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-rose-100"
            >
              홈
            </Link>
            <Link
              href="/festival"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white hover:text-rose-100"
            >
              축제 목록
            </Link>
            <Link
              href="/dashboard"
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

          {/* 모바일 메뉴 버튼 */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-rose-100 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">메뉴 열기</span>
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 드롭다운 */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-red-400 border-t border-red-500">
          <div className="pt-2 pb-3 space-y-1 px-2">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-red-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              홈
            </Link>
            <Link
              href="/festival"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-red-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              축제 목록
            </Link>
            <Link
              href="/dashboard"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-red-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              통계
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-red-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
