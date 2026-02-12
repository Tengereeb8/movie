"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { MovieCard } from "../../components/MovieCard";
import Link from "next/link";

const getSimilarMovies = async (movieId: string, page: number) => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTA3MzAyNTFjYzIzMmYyM2I0NGQ1ZGY4NTA1M2E2NCIsIm5iZiI6MTc2OTY1ODEyMy4xMzYsInN1YiI6IjY5N2FkNzBiY2VhNzhhMGRiYzhmOGFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sECnoPIecqeqEVfZsxsYtnSegaVtrj9uW3v4fgSuz6k";

  const url = `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`;

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

export default function SimilarMoviesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();

  const movieId = params.movieId as string;
  const currentPage = Number(searchParams.get("page")) || 1;

  const [movies, setMovies] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!movieId) return;

    const fetchMovies = async () => {
      const data = await getSimilarMovies(movieId, currentPage);

      if (data) {
        setMovies(data.results || []);
        setTotalPages(data.total_pages > 500 ? 500 : data.total_pages);
      }
    };

    fetchMovies();
  }, [movieId, currentPage]);

  const handlePageChange = (page: number) => {
    router.push(`/${movieId}/similar?page=${page}`);
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, 5);
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(
          currentPage - 2,
          currentPage - 1,
          currentPage,
          currentPage + 1,
          currentPage + 2,
        );
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div>
      <main className="mx-auto max-w-7xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold my-8">Similar Movies</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 lg:gap-8 mb-8">
          {movies.map((movie: any) => (
            <Link href={`/${movie.id}`} key={movie.id}>
              <MovieCard
                title={movie.title}
                img={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "/placeholder.png"
                }
                rating={movie.vote_average.toFixed(1)}
              />
            </Link>
          ))}
        </div>
      </main>

      {/* <Pagination className="mb-8 cursor-pointer">
        <PaginationContent>
          <PaginationItem>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="inline-flex items-center justify-center gap-1 px-2.5 h-10 rounded-md text-sm font-medium disabled:opacity-50 disabled:pointer-events-none hover:bg-accent"
            >
              Previous
            </button>
          </PaginationItem>

          {pageNumbers.map((pageNum) => (
            <PaginationItem key={pageNum}>
              <button
                onClick={() => handlePageChange(pageNum)}
                className={`h-10 w-10 rounded-md text-sm font-medium hover:bg-accent ${
                  currentPage === pageNum ? "bg-accent border shadow-sm" : ""
                }`}
              >
                {pageNum}
              </button>
            </PaginationItem>
          ))}

          <PaginationItem>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="inline-flex items-center justify-center gap-1 px-2.5 h-10 rounded-md text-sm font-medium disabled:opacity-50 disabled:pointer-events-none hover:bg-accent"
            >
              Next
            </button>
          </PaginationItem>
        </PaginationContent>
      </Pagination> */}
    </div>
  );
}
