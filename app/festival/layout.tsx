import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "축제 목록",
  description: "원하는 지역, 날짜, 키워드로 축제를 검색해보세요.",
};

export default function FestivalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
