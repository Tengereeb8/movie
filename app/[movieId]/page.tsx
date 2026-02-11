import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { MovieCard } from "../components/MovieCard";

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path?: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}

interface Credits {
  cast: any[];
  crew: any[];
}

interface SimilarMovie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

const getMovieById = async (movieId: string): Promise<MovieDetails | null> => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTA3MzAyNTFjYzIzMmYyM2I0NGQ1ZGY4NTA1M2E2NCIsIm5iZiI6MTc2OTY1ODEyMy4xMzYsInN1YiI6IjY5N2FkNzBiY2VhNzhhMGRiYzhmOGFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sECnoPIecqeqEVfZsxsYtnSegaVtrj9uW3v4fgSuz6k";

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      },
    );

    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error("Error fetching movie:", error);
    return null;
  }
};

const getMovieVideos = async (movieId: string) => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTA3MzAyNTFjYzIzMmYyM2I0NGQ1ZGY4NTA1M2E2NCIsIm5iZiI6MTc2OTY1ODEyMy4xMzYsInN1YiI6IjY5N2FkNzBiY2VhNzhhMGRiYzhmOGFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sECnoPIecqeqEVfZsxsYtnSegaVtrj9uW3v4fgSuz6k";

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) return null;
    const data = await response.json();
    return data.results;
  } catch (error) {
    return null;
  }
};

const getMovieCredits = async (movieId: string): Promise<Credits | null> => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTA3MzAyNTFjYzIzMmYyM2I0NGQ1ZGY4NTA1M2E2NCIsIm5iZiI6MTc2OTY1ODEyMy4xMzYsInN1YiI6IjY5N2FkNzBiY2VhNzhhMGRiYzhmOGFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sECnoPIecqeqEVfZsxsYtnSegaVtrj9uW3v4fgSuz6k";

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    return null;
  }
};

const getSimilarMovies = async (movieId: string) => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTA3MzAyNTFjYzIzMmYyM2I0NGQ1ZGY4NTA1M2E2NCIsIm5iZiI6MTc2OTY1ODEyMy4xMzYsInN1YiI6IjY5N2FkNzBiY2VhNzhhMGRiYzhmOGFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sECnoPIecqeqEVfZsxsYtnSegaVtrj9uW3v4fgSuz6k";

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!response.ok) return null;
    const data = await response.json();
    return data.results;
  } catch (error) {
    return null;
  }
};

const formatRuntime = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

const formatVoteCount = (count: number) => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(0)}k`;
  }
  return count.toString();
};

type DetailsPageProps = {
  params: Promise<{ movieId: string }>;
};

export default async function MovieDetailPage({ params }: DetailsPageProps) {
  const { movieId } = await params;
  const movie = await getMovieById(movieId);
  const videos = await getMovieVideos(movieId);
  const credits = await getMovieCredits(movieId);
  const similarMovies = await getSimilarMovies(movieId);

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  const trailer = videos?.find(
    (video: Video) => video.type === "Trailer" && video.site === "YouTube",
  );

  const director = credits?.crew.find(
    (person: any) => person.job === "Director",
  );

  const writers = credits?.crew
    .filter((person: any) => person.department === "Writing")
    .slice(0, 3);

  const stars = credits?.cast.slice(0, 3);

  return (
    <div className="min-h-screen bg-background sm:min-w-360 w-93.75 mx-auto">
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
          <img src="/wstar.svg" alt="" className="hidden dark:flex" />
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
        <div className="relative cursor-pointer rounded-lg overflow-hidden mb-6 lg:mb-8 lg:flex lg:gap-8">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie.title} Poster`}
            className="hidden lg:block lg:w-72.5 lg:h-107 object-cover rounded-md shadow-lg"
          />

          <div className="relative flex-1">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt="Trailer Backdrop"
              className="w-full aspect-video object-cover lg:h-107"
            />

            <div className="absolute inset-0 hover:bg-black/30 transition" />

            {trailer && (
              <a
                href={`https://www.youtube.com/watch?v=${trailer.key}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex items-center gap-2 sm:gap-3"
              >
                <div className="bg-white rounded-full p-2 sm:p-3 shadow-md hover:scale-110 transition-transform">
                  <img
                    src="/play.svg"
                    alt="play"
                    className="w-4 h-4 sm:w-6 sm:h-6"
                  />
                </div>
                <p className="text-white text-sm sm:text-base font-semibold drop-shadow-md">
                  Play trailer
                </p>
              </a>
            )}
          </div>
        </div>

        <div className="grid grid-cols-[auto_1fr] lg:grid-cols-[300px_1fr] gap-8.5 lg:gap-8">
          <div className="lg:hidden">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.title} Poster`}
              className="w-25 sm:w-32 lg:w-full rounded-md shadow-lg object-cover block lg:hidden"
            />
          </div>

          <div className="w-50.25 lg:w-screen">
            <div className="flex flex-wrap gap-2 mb-4">
              {movie.genres?.map((genre) => (
                <Badge
                  key={genre.id}
                  variant="outline"
                  className="rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm hover:bg-black transition-colors"
                >
                  {genre.name}
                </Badge>
              ))}
            </div>

            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed lg:w-270">
              {movie.overview}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
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
        ].map((item, index) => (
          <div
            key={item.label}
            className={`flex flex-col sm:flex-row sm:gap-6 md:gap-10 py-4 sm:py-5 ${
              index !== 2 ? "border-b border-zinc-200" : ""
            }`}
          >
            <h2 className="text-sm sm:text-base font-bold w-full sm:w-24 md:w-28 mb-1 sm:mb-0">
              {item.label}
            </h2>
            <p className="text-sm sm:text-base font-medium text-zinc-700 flex-1">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-12 sm:pb-20">
        <div className="flex justify-between items-center mb-5 sm:mb-6">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            More like this
          </h2>

          <a
            href="#"
            className="text-sm sm:text-base font-semibold flex items-center gap-1 hover:text-zinc-600 transition-colors"
          >
            See more <span className="text-lg sm:text-xl">→</span>
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mx-auto sm:gap-4 lg:gap-5">
          {similarMovies?.slice(0, 5).map((similarMovie: SimilarMovie) => (
            <Link href={`/${similarMovie.id}`} key={similarMovie.id}>
              <MovieCard
                img={`https://image.tmdb.org/t/p/w500${similarMovie.poster_path}`}
                rating={similarMovie.vote_average.toFixed(1)}
                title={similarMovie.title}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
