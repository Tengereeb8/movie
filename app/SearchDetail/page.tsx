import { GenreList } from "./GenreList";
import { getGenreMoviesPlay } from "@/lib/api/genreMovies";
import { getSearchValue } from "@/lib/api/searchValue";
import Movies from "@/app/components/Movielist/Movies";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Movie } from "@/lib/movie-data-types";

type SearchProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const Search = async ({ searchParams }: SearchProps) => {
  const { genre, page, query } = await searchParams;
  const currentPage = Number(page) || 1;
  const genreIds = genre ? String(genre).split(",").filter(Boolean) : [];

  let movies: Movie[] = [];
  let totalPages = 1;

  // Fetch Data
  if (query && genre) {
    const data = await getSearchValue(String(query), currentPage);
    movies = data.results.filter((movie) =>
      genreIds.every((id) => movie.genre_ids.includes(Number(id))),
    );
    totalPages = data.total_pages;
  } else if (query) {
    const data = await getSearchValue(String(query), currentPage);
    movies = data.results;
    totalPages = data.total_pages;
  } else if (genre) {
    const data = await getGenreMoviesPlay(String(genre), currentPage);
    movies = data.results;
    totalPages = data.total_pages;
  }

  const buildPageUrl = (page: number) => {
    const params = new URLSearchParams();
    if (query) params.set("query", String(query));
    if (genre) params.set("genre", String(genre));
    params.set("page", String(page));
    return `/search?${params.toString()}`;
  };

  return (
    <div className="flex flex-col px-5 md:px-10 lg:px-20 py-10 gap-12 w-full max-w-7xl mx-auto min-h-screen">
      {/* 1. Header Section */}
      <section className="space-y-4">
        <h1 className="text-3xl font-bold dark:text-white">Search results</h1>
        <h2 className="text-xl font-semibold dark:text-gray-200">
          {movies.length} results for "{query || "Selected Genre"}"
        </h2>
      </section>

      {/* 2. Results Section */}
      <main className="flex-1">
        {movies.length > 0 ? (
          <div className="space-y-10">
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {movies.map((movie) => (
                <Link
                  href={`/${movie.id}`}
                  key={movie.id}
                  className="transition-transform hover:scale-105"
                >
                  <Movies
                    img={movie.poster_path ?? ""}
                    title={movie.title}
                    rate={movie.vote_average}
                    id={movie.id}
                  />
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <Pagination className="justify-center md:justify-end">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href={currentPage > 1 ? buildPageUrl(currentPage - 1) : "#"}
                    className={
                      currentPage <= 1 ? "pointer-events-none opacity-50" : ""
                    }
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    {currentPage}
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    href={
                      currentPage < totalPages
                        ? buildPageUrl(currentPage + 1)
                        : "#"
                    }
                    className={
                      currentPage >= totalPages
                        ? "pointer-events-none opacity-50"
                        : ""
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        ) : (
          /* Empty State - Matching your second screenshot */
          <div className="flex flex-col items-center justify-center py-20 border rounded-xl bg-gray-50 dark:bg-neutral-900/50">
            <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
              No results found.
            </p>
          </div>
        )}
      </main>

      {/* 3. Footer Genre Section - Matching the screenshot bottom */}
      <section className="pt-10 border-t border-gray-200 dark:border-neutral-800">
        <div className="space-y-2 mb-6">
          <h2 className="text-2xl font-bold dark:text-white">
            Search by genre
          </h2>
          <p className="text-gray-500">See lists of movies by genre</p>
        </div>
        <GenreList />
      </section>
    </div>
  );
};

export default Search;
