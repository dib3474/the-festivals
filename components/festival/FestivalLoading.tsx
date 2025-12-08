import { FestivalIcon } from "@/components/icon/FestivalIcon";
import Spinner from "@/components/ui/Spinner";

/**
 * 축제 목록 로딩 중에 보여줄 로딩 화면 컴포넌트입니다.
 */
export default function FestivalLoading() {
  return (
    <div className="flex min-h-[60vh] w-full flex-col items-center justify-center bg-gray-50 p-4 rounded-xl">
      <div className="flex max-w-sm flex-1 flex-col items-center gap-6 text-center">
        <div className="flex items-center justify-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-400 text-white shadow-lg shadow-red-400/20">
            <FestivalIcon size={32} />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-bold text-gray-900">최고의 축제 경험을 준비하고 있습니다.</h1>
          <p className="text-sm text-gray-600">
            잠시만 기다려주세요. 멋진 축제 정보들을 불러오고 있습니다.
          </p>
        </div>
        <div className="flex items-center justify-center mt-2">
          <Spinner size="lg" className="h-10 w-10" />
        </div>
      </div>
    </div>
  );
}
