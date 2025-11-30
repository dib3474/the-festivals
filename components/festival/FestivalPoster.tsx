import Image from "next/image";

interface FestivalPosterProps {
  posterUrl: string;
  title: string;
  className?: string;
}

export default function FestivalPoster({ posterUrl, title, className }: FestivalPosterProps) {
  return (
    <div
      className={`relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-lg bg-gray-100 ${className}`}
    >
      {posterUrl ? (
        <Image
          src={posterUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
          priority
        />
      ) : (
        <div className="flex items-center justify-center h-full text-gray-400">
          No Poster Available
        </div>
      )}
    </div>
  );
}
