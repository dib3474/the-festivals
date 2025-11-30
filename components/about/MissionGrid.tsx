import Grid from "@/components/ui/Grid";
import MissionCard from "./MissionCard";
import { FlagIcon } from "@/components/icon/FlagIcon";
import { SparkIcon } from "@/components/icon/SparkIcon";

const MISSION_DATA = [
  {
    icon: FlagIcon,
    title: "우리의 미션",
    description:
      "누구나 쉽게 축제를 즐길 수 있도록 정확한 정보와 통계를 제공하여, 지역 축제 활성화와 문화 발전에 기여하는 것입니다.",
  },
  {
    icon: SparkIcon,
    title: "우리의 가치",
    description:
      "사용자 중심의 편리함, 데이터에 기반한 신뢰성, 그리고 지역 문화와의 상생을 최우선으로 생각합니다.",
  },
];

export default function MissionGrid() {
  return (
    <Grid columns={{ default: 1, md: 2 }} gap="lg">
      {MISSION_DATA.map((item, index) => (
        <MissionCard
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </Grid>
  );
}
