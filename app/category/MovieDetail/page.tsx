"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Star, Users } from "lucide-react";

// Type definitions
interface Genre {
  id: number;
  name: string;
}

interface Movie {
  id: number;
  title: string;
  release_date: string;
  adult: boolean;
  runtime: number;
  vote_average: number;
  vote_count: number;
  genres: Genre[];
  overview: string;
  poster_path: string;
  backdrop_path: string;
  budget: number;
  revenue: number;
  tagline: string;
  status: string;
}

// services/movieService.ts
const getMovieDetail = async (movieId: string): Promise<Movie | null> => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTA3MzAyNTFjYzIzMmYyM2I0NGQ1ZGY4NTA1M2E2NCIsIm5iZiI6MTc2OTY1ODEyMy4xMzYsInN1YiI6IjY5N2FkNzBiY2VhNzhhMGRiYzhmOGFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sECnoPIecqeqEVfZsxsYtnSegaVtrj9uW3v4fgSuz6k";

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    console.error("Error fetching movie:", error);
    return null;
  }
};

const MovieDetail = () => {
  const params = useParams();
  const router = useRouter();
  const movieId = params.movieId as string;

  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchDetail = async () => {
      if (!movieId) return;

      setLoading(true);
      setError(false);

      const data = await getMovieDetail(movieId);

      if (data) {
        setMovie(data);
      } else {
        setError(true);
      }

      setLoading(false);
    };

    fetchDetail();
  }, [movieId]);

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(amount);
  };

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Loading skeleton
  if (loading) {
    return (
      <div className="min-h-screen   max-w-360 mx-auto text-white p-6">
        <Skeleton className="h-8 w-32 mb-6" />
        <div className="max-w-6xl mx-auto">
          <Skeleton className="h-96 w-full rounded-lg mb-6" />
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-6 w-1/2 mb-4" />
          <Skeleton className="h-24 w-full" />
        </div>
      </div>
    );
  }

  // Error state
  if (error || !movie) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Movie not found</h2>
          <p className="text-gray-400 mb-6">
            The movie you're looking for doesn't exist.
          </p>
          <Button onClick={() => router.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  const imageBaseUrl = "https://image.tmdb.org/t/p/";

  return (
    <div className=" max-w-360 mx-auto text-white">
      {/* Backdrop */}
      {movie.backdrop_path && (
        <div className="relative h-96 w-full">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
          <img
            src={`${imageBaseUrl}original${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6 py-8 -mt-32 relative z-20">
        {/* Back button */}
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-6 text-white hover:bg-white/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Poster */}
          {movie.poster_path && (
            <div className="flex-shrink-0">
              <img
                src={`${imageBaseUrl}w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full md:w-80 rounded-lg shadow-2xl"
              />
            </div>
          )}

          {/* Content */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              {movie.title}
            </h1>

            {movie.tagline && (
              <p className="text-xl text-gray-400 italic mb-4">
                "{movie.tagline}"
              </p>
            )}

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-gray-300">
              {movie.release_date && (
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {formatDate(movie.release_date)}
                </span>
              )}
              {movie.runtime > 0 && (
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {movie.runtime}m
                </span>
              )}
              <Badge variant={movie.adult ? "destructive" : "secondary"}>
                {movie.adult ? "R" : "PG"}
              </Badge>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-yellow-500/20 px-4 py-2 rounded-lg">
                <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                <span className="text-2xl font-bold">
                  {movie.vote_average?.toFixed(1)}
                </span>
                <span className="text-gray-400">/10</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Users className="h-4 w-4" />
                <span>{movie.vote_count.toLocaleString()} votes</span>
              </div>
            </div>

            {/* Genres */}
            {movie.genres && movie.genres.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {movie.genres.map((genre) => (
                  <Badge key={genre.id} variant="outline" className="text-sm">
                    {genre.name}
                  </Badge>
                ))}
              </div>
            )}

            {/* Overview */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-3">Overview</h2>
              <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
