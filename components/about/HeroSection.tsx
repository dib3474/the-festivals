import Image from "next/image";
import Heading from "@/components/ui/Heading";
import { BASE_PATH } from "@/lib/utils/basePath";

export default function HeroSection() {
  return (
    <div className="max-w-[960px]">
      <div className="relative flex min-h-[480px] flex-col gap-6 items-center justify-center p-4 rounded-xl overflow-hidden">
        <Image
          src={`${BASE_PATH}/about_img.png`}
          alt="Festival Scenery"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40 z-10" />
        <div className="relative z-20 flex flex-col gap-2 text-center">
          <Heading className="text-white leading-tight" align="center">
            우리의 축제로 일상을 채우다
          </Heading>
          <Heading level={2} className="text-white/80 text-sm leading-normal" align="center">
            지역 축제의 다채로운 매력을 발견하고, 특별한 순간을 경험하세요. 저희는 사람과 문화를
            잇는 다리가 되겠습니다.
          </Heading>
        </div>
      </div>
    </div>
  );
}
