import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

/**
 * 프로젝트 소개글을 보여주는 컴포넌트입니다.
 */
export default function Introduction() {
  return (
    <div className="flex flex-col gap-2">
      <Heading className="text-gray-900 font-bold" marginBottom={false}>
        소개
      </Heading>
      <Text>
        저희는 현재 열리는 전국의 축제를 누구나 간편하게 찾아보고, 상세 정보를 손쉽게 얻을 수 있는
        플랫폼을 만들어갑니다. 단순한 정보 제공을 넘어, 축제 통계 데이터를 통해 언제 어디서 얼마나
        많은 축제가 열리는지 한눈에 파악할 수 있는 인사이트를 제공하여 더욱 풍성한 축제 경험을
        선사합니다.
      </Text>
    </div>
  );
}
