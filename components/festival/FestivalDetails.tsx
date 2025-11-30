import Link from "next/link";
import CalendarIcon from "@/components/icon/CalendarIcon";
import MapPinIcon from "@/components/icon/MapPinIcon";
import GlobeIcon from "@/components/icon/GlobeIcon";
import Card from "@/components/ui/Card";
import Grid from "@/components/ui/Grid";
import Heading from "@/components/ui/Heading";
import Text from "@/components/ui/Text";

interface FestivalDetailsProps {
  startDate: string;
  endDate: string;
  addr1: string;
  addr2?: string;
  homePage?: string;
}

export default function FestivalDetails({
  startDate,
  endDate,
  addr1,
  addr2,
  homePage,
}: FestivalDetailsProps) {
  return (
    <Card padding="md" className="rounded-2xl border border-gray-100">
      <Grid columns={{ default: 1, md: 2 }} gap="md" marginBottom={false}>
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
            <CalendarIcon size={24} />
          </div>
          <div>
            <Heading level={3} size="sm" marginBottom={false} className="font-semibold mb-1">
              Date
            </Heading>
            <Text color="muted">
              {startDate} ~ {endDate}
            </Text>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="p-3 bg-green-50 rounded-xl text-green-600">
            <MapPinIcon size={24} />
          </div>
          <div>
            <Heading level={3} size="sm" marginBottom={false} className="font-semibold mb-1">
              Location
            </Heading>
            <Text color="muted">{addr1}</Text>
            {addr2 && (
              <Text size="sm" className="text-gray-500 mt-1">
                {addr2}
              </Text>
            )}
          </div>
        </div>
      </Grid>

      {homePage && homePage !== "no_homepage" && (
        <div className="mt-6 pt-6 border-t border-gray-100">
          <Link
            href={homePage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors font-medium"
          >
            <GlobeIcon size={20} className="mr-2" />
            공식 홈페이지 방문하기
          </Link>
        </div>
      )}
    </Card>
  );
}
