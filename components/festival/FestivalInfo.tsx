import { Festival } from "@/types/festival";
import Grid from "@/components/ui/Grid";
import FestivalPoster from "@/components/festival/FestivalPoster";
import FestivalDetails from "@/components/festival/FestivalDetails";
import FestivalOverview from "@/components/festival/FestivalOverview";

interface FestivalInfoProps {
  festival: Festival;
}

/**
 * 축제 상세 페이지의 메인 정보 영역을 구성하는 컴포넌트입니다.
 * 포스터, 상세 정보(날짜, 위치), 개요를 포함합니다.
 */
export default function FestivalInfo({ festival }: FestivalInfoProps) {
  return (
    <Grid columns={{ default: 1, lg: 3 }} gap="lg">
      <div className="lg:col-span-1">
        <FestivalPoster posterUrl={festival.posterInfo} title={festival.title} />
      </div>

      <div className="lg:col-span-2 space-y-8">
        <FestivalDetails
          startDate={festival.startDate}
          endDate={festival.endDate}
          addr1={festival.addr1}
          addr2={festival.addr2}
          homePage={festival.homePage}
        />
        <FestivalOverview overview={festival.overView} />
      </div>
    </Grid>
  );
}
