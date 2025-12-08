"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ChevronLeftIcon from "@/components/icon/ChevronLeftIcon";
import ChevronRightIcon from "@/components/icon/ChevronRightIcon";
import { cn } from "@/lib/utils/cn";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

const MAX_VISIBLE_PAGES = 5;

export default function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  const searchParams = useSearchParams();
  const pages = [];
  let startPage = Math.max(1, currentPage - Math.floor(MAX_VISIBLE_PAGES / 2));
  let endPage = Math.min(totalPages, startPage + MAX_VISIBLE_PAGES - 1);

  if (endPage - startPage + 1 < MAX_VISIBLE_PAGES) {
    startPage = Math.max(1, endPage - MAX_VISIBLE_PAGES + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    return `${baseUrl}?${params.toString()}`;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="mt-12 flex justify-center">
      <nav className="flex items-center gap-2">
        {/* Previous Button */}
        <Link
          href={currentPage > 1 ? createPageUrl(currentPage - 1) : "#"}
          className={cn(
            "flex size-9 items-center justify-center rounded-full transition-colors",
            currentPage > 1
              ? "text-gray-500 hover:bg-gray-200"
              : "text-gray-300 cursor-not-allowed pointer-events-none"
          )}
          aria-disabled={currentPage <= 1}
          aria-label="이전 페이지"
        >
          <ChevronLeftIcon size={20} />
        </Link>

        {/* Page Numbers */}
        {startPage > 1 && (
          <>
            <Link
              href={createPageUrl(1)}
              className="flex size-9 items-center justify-center rounded-full text-gray-500 hover:bg-gray-200 transition-colors"
            >
              1
            </Link>
            {startPage > 2 && <span className="text-gray-500">...</span>}
          </>
        )}

        {pages.map((page) => (
          <Link
            key={page}
            href={createPageUrl(page)}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full transition-colors",
              page === currentPage ? "bg-red-400 text-white" : "text-gray-500 hover:bg-gray-200"
            )}
          >
            {page}
          </Link>
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span className="text-gray-500">...</span>}
            <Link
              href={createPageUrl(totalPages)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 hover:bg-gray-200 transition-colors"
            >
              {totalPages}
            </Link>
          </>
        )}
        {/* Next Button */}
        <Link
          href={currentPage < totalPages ? createPageUrl(currentPage + 1) : "#"}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-full transition-colors",
            currentPage < totalPages
              ? "text-gray-500 hover:bg-gray-200"
              : "text-gray-300 cursor-not-allowed pointer-events-none"
          )}
          aria-disabled={currentPage >= totalPages}
          aria-label="다음 페이지"
        >
          <ChevronRightIcon size={20} />
        </Link>
      </nav>
    </div>
  );
}
