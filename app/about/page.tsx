import HeroSection from "@/components/about/HeroSection";
import Introduction from "@/components/about/Introduction";
import MissionGrid from "@/components/about/MissionGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "소개",
  description: "The Festivals 프로젝트를 소개합니다.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <div className="flex flex-col max-w-[960px] gap-10 w-full">
        {/* Hero Section */}
        <HeroSection />

        {/* Introduction Section */}
        <Introduction />

        {/* Mission & Values Section */}
        <MissionGrid />
      </div>
    </div>
  );
}
