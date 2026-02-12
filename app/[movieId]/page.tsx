import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { MovieCard } from "../components/MovieCard";
import { TrailerModal } from "../components/Trailerplayer";

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  genres: { id: number; name: string }[];
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  title: string;
  vote_average: number;
  vote_count: number;
}

const getMovieData = async (movieId: string, endpoint: string = "") => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTA3MzAyNTFjYzIzMmYyM2I0NGQ1ZGY4NTA1M2E2NCIsIm5iZiI6MTc2OTY1ODEyMy4xMzYsInN1YiI6IjY5N2FkNzBiY2VhNzhhMGRiYzhmOGFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sECnoPIecqeqEVfZsxsYtnSegaVtrj9uW3v4fgSuz6k";
  const url = `https://api.themoviedb.org/3/movie/${movieId}${endpoint}?language=en-US`;
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });
    return response.ok ? await response.json() : null;
  } catch {
    return null;
  }
};

const formatRuntime = (minutes: number) =>
  `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
const formatVoteCount = (count: number) =>
  count >= 1000 ? `${(count / 1000).toFixed(0)}k` : count.toString();

export default async function MovieDetailPage({
  params,
}: {
  params: Promise<{ movieId: string }>;
}) {
  const { movieId } = await params;
  const movie: MovieDetails = await getMovieData(movieId);
  const videoData = await getMovieData(movieId, "/videos");
  const credits = await getMovieData(movieId, "/credits");
  const similarMovies = await getMovieData(movieId, "/similar");

  if (!movie) return <div>Movie not found.</div>;

  const trailer = videoData?.results?.find(
    (v: any) => v.type === "Trailer" && v.site === "YouTube",
  );
  const director = credits?.crew.find((p: any) => p.job === "Director");
  const writers = credits?.crew
    .filter((p: any) => p.department === "Writing")
    .slice(0, 3);
  const stars = credits?.cast.slice(0, 3);

  return (
    <div className="min-h-screen bg-background sm:min-w-360 w-93.75 mx-auto pb-20">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-4">
        <div className="flex flex-col">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            {movie.title}
          </h1>
          <span className="text-xs sm:text-sm text-gray-500 mt-1">
            {formatDate(movie.release_date)} · {movie.adult ? "R" : "PG"} ·{" "}
            {formatRuntime(movie.runtime)}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="/star.svg"
            alt="rating"
            className="w-5 h-5 sm:w-6 sm:h-6 dark:hidden"
          />
          <img
            src="/wstar.svg"
            alt=""
            className="hidden dark:flex w-5 h-5 sm:w-6 sm:h-6"
          />
          <div className="flex flex-col">
            <div>
              <span className="font-bold text-lg sm:text-xl">
                {movie.vote_average.toFixed(1)}
              </span>
              <span className="text-gray-500 text-sm">/10</span>
            </div>
            <p className="text-xs text-zinc-500">
              {formatVoteCount(movie.vote_count)}
            </p>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-lg overflow-hidden mb-6 lg:mb-8 lg:flex lg:gap-8">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="Poster"
            className="hidden lg:block lg:w-72.5 lg:h-107 object-cover rounded-md shadow-lg"
          />
          {trailer ? (
            <TrailerModal
              backdropPath={movie.backdrop_path}
              movieTitle={movie.title}
              trailerKey={trailer.key}
            />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              className="w-full aspect-video object-cover lg:h-107"
              alt="Backdrop"
            />
          )}
        </div>

        <div className="grid grid-cols-[auto_1fr] lg:grid-cols-[300px_1fr] gap-8.5 lg:gap-8">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className="w-25 sm:w-32 lg:hidden rounded-md shadow-lg object-cover"
            alt="Poster"
          />
          <div className="w-50.25 lg:w-screen">
            <div className="flex flex-wrap gap-2 mb-4">
              {movie.genres?.map((g) => (
                <Badge
                  key={g.id}
                  variant="outline"
                  className="rounded-full px-3 py-1 text-xs hover:bg-black transition-colors"
                >
                  {g.name}
                </Badge>
              ))}
            </div>
            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed lg:w-270">
              {movie.overview}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {[
          { label: "Director", value: director?.name || "N/A" },
          {
            label: "Writers",
            value: writers?.map((w: any) => w.name).join(" · ") || "N/A",
          },
          {
            label: "Stars",
            value: stars?.map((s: any) => s.name).join(" · ") || "N/A",
          },
        ].map((item, i) => (
          <div
            key={item.label}
            className={`flex flex-col sm:flex-row sm:gap-6 py-4 ${i !== 2 ? "border-b border-zinc-200" : ""}`}
          >
            <h2 className="text-sm sm:text-base font-bold w-24">
              {item.label}
            </h2>
            <p className="text-sm sm:text-base text-zinc-700">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl sm:text-3xl font-bold">More like this</h2>
          <Link
            href={`/${movieId}/similar`}
            className="text-sm font-semibold hover:underline"
          >
            See more →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {similarMovies?.results?.slice(0, 5).map((m: any) => (
            <Link href={`/${m.id}`} key={m.id}>
              <MovieCard
                img={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                rating={m.vote_average.toFixed(1)}
                title={m.title}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
