import StatCard from "@/components/StatCard";
import Grid from "@/components/ui/Grid";

interface Stats {
  title: string;
  value: number;
  icon: string;
}

interface StatGridProps {
  stats: Stats[]; // Stats 배열
}

export default function StatGrid({ stats }: StatGridProps) {
  return (
    <Grid columns={{ default: 1, md: 2, lg: 3 }} gap="md">
      {/*
        Grid 컴포넌트 사용
        columns: 모바일 1열, 태블릿 이상 2열, 큰 화면 이상 3열
        gap: 중간 간격
      */}
      {stats.map((stat, index) => (
        // 배열을 map으로 순회하며 각 FestivalCard 생성
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
        />
      ))}
    </Grid>
  );
}
