import { title } from "process";
import { Category } from "./Category";
import { MovieCard } from "./components/MovieCard";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

const MovieCardSkeleton = () => (
  <div className="flex flex-col gap-2">
    <Skeleton className="lg:h-110 lg:w-57.5 w-39.5 h-77.25 rounded-lg bg-[#f4f4f5] overflow-hidden shadow-sm" />
  </div>
);
const TextSkeleton = () => (
  <div className="px-5 py-4">
    <div className="flex justify-between items-center">
      <Skeleton className="h-6 w-40" />
      <div className="flex items-center gap-1">
        <Skeleton className="h-6 w-16" />
      </div>
    </div>
  </div>
);

export const Body = ({
  movies,
  upComingMovies,
  topratedMovies,
  isLoading,
  movieDetail,
}: {
  movies: any[];
  upComingMovies: any[];
  topratedMovies: any[];
  isLoading?: boolean;
  movieDetail: any[];
}) => {
  const sections = [
    {
      title: "Upcoming",
      data: upComingMovies?.slice(0, 10),
      href: "/upcoming",
    },
    { title: "Popular", data: movies?.slice(0, 10), href: "/popular" },
    {
      title: "Top Rated",
      data: topratedMovies?.slice(0, 10),
      href: "/top-rated",
    },
  ];

  return (
    <div className="mb-12.75 px-5">
      {sections.map((section, idx) => (
        <div key={idx} className="mx-auto max-w-360">
          {isLoading ? (
            <TextSkeleton />
          ) : (
            <div className="lg:px-20  px-7 py-8">
              <Category category={section.title} href={section.href} />
            </div>
          )}

          <div className="grid grid-cols-2 lg:grid-cols-5 w-fit lg:max-w-360 mx-auto gap-5 lg:gap-8">
            {isLoading
              ? Array.from({ length: 10 }).map((_, i) => (
                  <MovieCardSkeleton key={i} />
                ))
              : section.data?.map((movie) => (
                  <Link href={`/${movie.id}`} key={movie.id}>
                    <MovieCard
                      img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      rating={movie.vote_average.toFixed(1)}
                      title={movie.title}
                    />
                  </Link>
                ))}
          </div>
        </div>
      ))}
    </div>
  );
};
