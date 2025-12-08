import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "통계",
  description: "축제 데이터 통계와 분석 정보를 확인하세요.",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
