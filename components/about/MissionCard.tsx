import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";
import { ElementType } from "react";

interface MissionCardProps {
  icon: ElementType;
  title: string;
  description: string;
}

/**
 * 미션 및 가치 정보를 카드 형태로 보여주는 컴포넌트입니다.
 */
export default function MissionCard({ icon: Icon, title, description }: MissionCardProps) {
  return (
    <div className="flex flex-1 gap-4 rounded-xl border border-stone-200/80 dark:border-stone-800/80 bg-stone-900 p-6 flex-col">
      <Icon size={32} className="text-primary" />
      <div className="flex flex-col gap-1">
        <Heading
          level={3}
          className="text-stone-100 text-base font-bold leading-tight"
          marginBottom={false}
        >
          {title}
        </Heading>
        <Text className="text-stone-400 text-sm font-normal leading-normal">{description}</Text>
      </div>
    </div>
  );
}
