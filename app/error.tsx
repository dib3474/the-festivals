"use client";

import { useEffect } from "react";
import Link from "next/link";
import AlertIcon from "@/components/icon/AlertIcon";

export default function Error({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center px-4 py-16 sm:py-24 bg-[#f8f6f6] w-full min-h-[60vh]">
      <div className="flex flex-col items-center gap-6 w-full max-w-md">
        <div className="flex items-center justify-center h-16 w-16 bg-red-400/10 rounded-full text-red-400">
          <AlertIcon size={36} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-[#181311] text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em]">
            데이터 로드 실패
          </p>
          <p className="text-gray-600 text-base font-normal leading-normal max-w-sm">
            축제 데이터를 불러오는 데 일시적인 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.
          </p>
        </div>
        <Link
          href="/"
          className="flex w-full sm:w-auto min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-red-400 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-red-400/90 focus:ring-2 focus:ring-red-400/50 focus:outline-none transition-colors"
        >
          <span className="truncate">홈으로 이동</span>
        </Link>
      </div>
    </div>
  );
}
