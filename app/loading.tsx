import Spinner from "@/components/ui/Spinner";

export default function Loading() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-10">
      <Spinner size="lg" />
    </div>
  );
}
