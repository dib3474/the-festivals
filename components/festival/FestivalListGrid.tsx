import FestivalListCard from "@/components/festival/FestivalListCard";
import Grid from "@/components/ui/Grid";
import { Festival } from "@/types/festival";

interface FestivalListGridProps {
  festivals: Festival[];
}

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
