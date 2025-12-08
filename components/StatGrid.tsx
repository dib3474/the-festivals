import StatCard from "@/components/StatCard";
import Grid from "@/components/ui/Grid";

interface Stats {
  title: string;
  value: number;
  icon: string;
}

interface StatGridProps {
  stats: Stats[];
}

/**
 * 여러 통계 카드를 그리드 형태로 배치하여 보여주는 컴포넌트입니다.
 */
export default function StatGrid({ stats }: StatGridProps) {
  return (
    <Grid columns={{ default: 1, md: 2, lg: 3 }} gap="md">
      {/*
        Grid 컴포넌트 사용
        columns: 모바일 1열, 태블릿 이상 2열, 큰 화면 이상 3열
        gap: 중간 간격
      */}
      {stats.map((stat, index) => (
        <StatCard key={index} title={stat.title} value={stat.value} icon={stat.icon} />
      ))}
    </Grid>
  );
}
