import { Festival } from "@/types/festival";
import FestivalListGrid from "@/components/festival/FestivalListGrid";
import SearchIcon from "@/components/icon/SearchIcon";
import ChevronDownIcon from "@/components/icon/ChevronDownIcon";
import RefreshIcon from "@/components/icon/RefreshIcon";
import Pagination from "@/components/ui/Pagination";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import festivalsData from "@/data/festivals.json";

export default async function FestivalListPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedSearchParams = await searchParams;
  const page = Number(resolvedSearchParams?.page) || 1;
  const itemsPerPage = 20;

  const allFestivals = festivalsData as Festival[];
  const totalItems = allFestivals.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFestivals = allFestivals.slice(startIndex, endIndex);

  return (
    <main className="min-h-screen bg-gray-50 flex flex-1 justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl">
        {/* Hero Section */}
        <div className="flex flex-col gap-6 mb-8">
          <div className="text-center">
            <Heading
              level={2}
              size="2xl"
              align="center"
              className="font-black tracking-tighter sm:text-5xl"
            >
              전국 축제 둘러보기
            </Heading>
            <Text size="lg" color="muted" align="center" className="mt-3">
              대한민국 곳곳에서 열리는 다채로운 축제를 발견해 보세요.
            </Text>
          </div>

          {/* Search Bar */}
          <div className="mx-auto w-full max-w-2xl">
            <label className="flex flex-col">
              <div className="relative flex w-full items-center">
                <div className="absolute left-4 text-gray-500">
                  <SearchIcon size={24} />
                </div>
                <input
                  className="w-full rounded-full border border-gray-300 bg-white py-3 pl-12 pr-4 text-base text-gray-900 placeholder:text-gray-500 focus:border-red-400 focus:ring-2 focus:ring-red-400/50 outline-none transition-all"
                  placeholder="찾고 있는 축제를 검색해 보세요"
                />
              </div>
            </label>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Button
              variant="ghost"
              className="h-10 items-center gap-2 rounded-full bg-white border border-gray-300 text-gray-900 hover:bg-white hover:border-red-400 hover:text-red-400"
            >
              <span className="text-sm font-medium">지역</span>
              <ChevronDownIcon size={18} />
            </Button>
            <Button
              variant="ghost"
              className="h-10 items-center gap-x-2 rounded-full bg-white border border-gray-300 text-gray-900 hover:bg-white hover:border-red-400 hover:text-red-400"
            >
              <span className="text-sm font-medium">날짜</span>
              <ChevronDownIcon size={18} />
            </Button>
            <Button
              variant="ghost"
              className="h-10 items-center gap-x-2 rounded-full bg-white border border-gray-300 text-gray-900 hover:bg-white hover:border-red-400 hover:text-red-400"
            >
              <span className="text-sm font-medium">축제 유형</span>
              <ChevronDownIcon size={18} />
            </Button>
            <Button
              variant="ghost"
              className="h-10 items-center gap-x-2 rounded-full bg-white border border-gray-300 text-gray-900 hover:bg-white hover:border-red-500 hover:text-red-500"
            >
              <span className="text-sm font-medium">필터 초기화</span>
              <RefreshIcon size={18} />
            </Button>
          </div>
        </div>

        {/* Festival Grid */}
        <FestivalListGrid festivals={currentFestivals} />

        {/* Pagination */}
        <Pagination currentPage={page} totalPages={totalPages} baseUrl="/festival" />
      </div>
    </main>
  );
}
