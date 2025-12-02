import FestivalCard from "@/components/FestivalCard";
import Grid from "@/components/ui/Grid";
import { Festival } from "@/types/festival";

interface FestivalGridProps {
  festivals: Festival[]; // Festival 배열
}

export default function FestivalGrid({ festivals }: FestivalGridProps) {
  return (
    <Grid columns={{ default: 1, md: 3, lg: 5 }} gap="md">
      {/*
        Grid 컴포넌트 사용
        columns: 모바일 1열, 태블릿 이상 2열, 큰 화면 이상 3열
        gap: 중간 간격
      */}
      {festivals.map((festival) => (
        // 배열을 map으로 순회하며 각 FestivalCard 생성
        <FestivalCard
          key={festival.id} // React에서 리스트 렌더링 시 필요
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
