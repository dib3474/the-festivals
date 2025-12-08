import FestivalCard from "@/components/FestivalCard";
import Grid from "@/components/ui/Grid";
import { Festival } from "@/types/festival";

interface FestivalGridProps {
  festivals: Festival[]; // Festival 배열
}

/**
 * 축제 카드들을 그리드 형태로 배치하여 보여주는 컴포넌트입니다.
 * 반응형 그리드 레이아웃을 사용합니다.
 */
export default function FestivalGrid({ festivals }: FestivalGridProps) {
  return (
    <Grid columns={{ default: 1, md: 2, lg: 4 }} gap="md">
      {/*
        Grid 컴포넌트 사용
        columns: 모바일 1열, 태블릿 2열, 데스크탑 4열
        gap: 중간 간격
      */}
      {festivals.map((festival) => (
        <FestivalCard
          key={festival.id}
          id={festival.id}
          title={festival.title}
          addr1={festival.addr1}
          startDate={festival.startDate}
          endDate={festival.endDate}
          posterImage={festival.posterInfo}
        />
      ))}
    </Grid>
  );
}
