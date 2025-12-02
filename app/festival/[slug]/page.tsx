import { notFound } from "next/navigation";
import festivalsData from "@/data/festivals.json";
import FestivalTitle from "@/components/festival/FestivalTitle";
import FestivalInfo from "@/components/festival/FestivalInfo";

export async function generateStaticParams() {
  return festivalsData.map((festival) => ({
    slug: festival.id.toString(),
  }));
}

interface FestivalPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function FestivalDetailPage({ params }: FestivalPageProps) {
  const { slug: id } = await params;
  const festival = festivalsData.find((festival) => festival.id.toString() === id);

  if (!festival) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <FestivalTitle festival={festival} />
        <FestivalInfo festival={festival} />
      </div>
    </main>
  );
}
