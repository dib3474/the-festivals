import FestivalListCard from "@/components/festival/FestivalListCard";
import Grid from "@/components/ui/Grid";
import { Festival } from "@/types/festival";

interface FestivalListGridProps {
  festivals: Festival[];
}

/**
 * 축제 목록 페이지에서 축제 카드들을 그리드 형태로 보여주는 컴포넌트입니다.
 */
export default function FestivalListGrid({ festivals }: FestivalListGridProps) {
  return (
    <Grid columns={{ default: 1, md: 3, lg: 5 }} gap="md">
      {festivals.map((festival) => (
        <FestivalListCard
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
