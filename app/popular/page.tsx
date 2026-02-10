"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { MovieCard } from "../components/MovieCard";
import { Skeleton } from "@/components/ui/skeleton";

const getPopularMovies = async (page: number) => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTA3MzAyNTFjYzIzMmYyM2I0NGQ1ZGY4NTA1M2E2NCIsIm5iZiI6MTc2OTY1ODEyMy4xMzYsInN1YiI6IjY5N2FkNzBiY2VhNzhhMGRiYzhmOGFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sECnoPIecqeqEVfZsxsYtnSegaVtrj9uW3v4fgSuz6k";
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );
  if (!res.ok) return { results: [], total_pages: 0 };
  const data = await res.json();
  return data;
};

export default function PopularPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [movies, setMovies] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  const currentPage = Number(searchParams.get("page")) || 1;
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
  const MovieCardSkeleton = () => (
    <div className="flex flex-col gap-2">
      <Skeleton className="lg:h-110 lg:w-57.5 w-39.5 h-77.25 rounded-lg bg-[#f4f4f5] overflow-hidden shadow-sm" />
    </div>
  );

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const data = await getPopularMovies(currentPage);
      setMovies(data.results);
      setTotalPages(data.total_pages);
      setLoading(false);
    };

    fetchMovies();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    router.push(`?page=${page}`);
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, 5);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        );
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
      <main className="mx-auto max-w-360">
        {loading ? (
          <TextSkeleton />
        ) : (
          <h1 className="text-3xl font-bold mb-8 ml-20">Popular Movies</h1>
        )}
        <div className="grid grid-cols-2 lg:grid-cols-5 w-fit lg:max-w-360 mx-auto gap-5 md:grid-cols-4 lg:gap-8 mb-8">
          {loading
            ? movies.map((movie: any) => <MovieCardSkeleton key={movie.id} />)
            : movies.map((movie: any) => (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  rating={movie.vote_average.toFixed(1)}
                />
              ))}
        </div>
      </main>

      <Pagination className="mb-8">
        <PaginationContent>
          <PaginationItem>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="inline-flex items-center justify-center gap-1 px-2.5 h-10 rounded-md text-sm font-medium disabled:opacity-50 disabled:pointer-events-none hover:bg-accent"
            >
              <span>Previous</span>
            </button>
          </PaginationItem>

          {pageNumbers[0] > 1 && (
            <>
              <PaginationItem>
                <button
                  onClick={() => handlePageChange(1)}
                  className="inline-flex items-center justify-center h-10 w-10 rounded-md text-sm font-medium hover:bg-accent"
                >
                  1
                </button>
              </PaginationItem>
              {pageNumbers[0] > 2 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
            </>
          )}

          {pageNumbers.map((pageNum) => (
            <PaginationItem key={pageNum}>
              <button
                onClick={() => handlePageChange(pageNum)}
                className={`inline-flex items-center justify-center h-10 w-10 rounded-md text-sm font-medium hover:bg-accent ${
                  currentPage === pageNum ? "bg-accent" : ""
                }`}
              >
                {pageNum}
              </button>
            </PaginationItem>
          ))}

          {pageNumbers[pageNumbers.length - 1] < totalPages && (
            <>
              {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              <PaginationItem>
                <button
                  onClick={() => handlePageChange(totalPages)}
                  className="inline-flex items-center justify-center h-10 w-10 rounded-md text-sm font-medium hover:bg-accent"
                >
                  {totalPages}
                </button>
              </PaginationItem>
            </>
          )}

          <PaginationItem>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="inline-flex items-center justify-center gap-1 px-2.5 h-10 rounded-md text-sm font-medium disabled:opacity-50 disabled:pointer-events-none hover:bg-accent"
            >
              <span>Next</span>
            </button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
