import { Skeleton } from "@/components/ui/skeleton";
import { Category } from "./Category";
import { MovieCard } from "./components/MovieCard";

const getUpcomingMovies = async () => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTA3MzAyNTFjYzIzMmYyM2I0NGQ1ZGY4NTA1M2E2NCIsIm5iZiI6MTc2OTY1ODEyMy4xMzYsInN1YiI6IjY5N2FkNzBiY2VhNzhhMGRiYzhmOGFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sECnoPIecqeqEVfZsxsYtnSegaVtrj9uW3v4fgSuz6k";

  const res = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!res.ok) return [];
  const data = await res.json();
  return data.results;
};
const MovieCardSkeleton = () => (
  <div className="flex flex-col gap-2">
    <Skeleton className="lg:h-110 lg:w-57.5 w-39.5 h-77.25 rounded-lg bg-[#f4f4f5] overflow-hidden shadow-sm" />
  </div>
);

export const Upcoming = ({
  movies,
  upComingMovies,
  topratedMovies,
  isLoading,
}: {
  movies: any[];
  upComingMovies: any[];
  topratedMovies: any[];
  isLoading?: boolean;
}) => {
  const sections = [
    { title: "Upcoming", data: upComingMovies?.slice(0, 10) },
    { title: "Popular", data: movies?.slice(0, 10) },
    { title: "Top Rated", data: topratedMovies?.slice(0, 10) },
  ];

  return (
    <div className="mb-12.75 px-5">
      {sections.map((section, idx) => (
        <div key={idx} className="mx-auto max-w-360">
          <div className="px-5 py-8">
            <Category category={section.title} />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 w-fit lg:max-w-360 mx-auto gap-5 lg:gap-8">
            {isLoading
              ? Array.from({ length: 10 }).map((_, i) => (
                  <MovieCardSkeleton key={i} />
                ))
              : section.data?.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    rating={movie.vote_average.toFixed(1)}
                    title={movie.title}
                  />
                ))}
          </div>
        </div>
      ))}
    </div>
  );
};
