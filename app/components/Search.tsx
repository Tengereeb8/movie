"use client";

import { useState, useEffect, ChangeEventHandler } from "react";
import Link from "next/link";
import { Search, Star, ArrowRight } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";
import { getSearchValue } from "@/lib/api";
import { Movie } from "@/lib/types";

export const SearchInput = () => {
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);

  const onChangeSearchValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (searchValue.trim() === "") {
      setMovies([]);
      setLoading(false);
      return;
    }

    setLoading(true); // Start loading when user types
    const timer = setTimeout(async () => {
      try {
        const data = await getSearchValue(searchValue);
        if (data && data.results) {
          // Slice to 5 results to match the screenshot style
          setMovies(data.results.slice(0, 5));
        } else {
          setMovies([]);
        }
      } finally {
        setLoading(false); // Stop loading after fetch
      }
    }, 500); // Shorter debounce for better UX

    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <div className="relative w-full max-w-md">
      {/* Search Input */}
      <InputGroup className="relative">
        <InputGroupAddon>
          <Search className="size-4 text-muted-foreground" />
        </InputGroupAddon>
        <InputGroupInput
          placeholder="Search..."
          value={searchValue}
          onChange={onChangeSearchValue}
          className="rounded-full"
        />
      </InputGroup>

      {/* Results Dropdown */}
      {(loading || movies.length > 0) && (
        <div className="absolute top-full mt-2 w-83.75 bg-secondary border rounded-xl shadow-xl overflow-hidden z-50">
          {loading ? (
            <div className="flex justify-center p-8">
              <Spinner className="size-6 text-blue-500" />
            </div>
          ) : (
            <div className="flex flex-col">
              {movies.map((movie) => (
                <Link
                  href={`/${movie.id}`}
                  key={movie.id}
                  className="group flex items-center gap-4 p-3 hover:bg-secondary border-b last:border-b-0 transition-colors"
                >
                  <div className="relative h-24 w-16 shrink-0 overflow-hidden rounded-md bg-secondary">
                    <img
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      alt={movie.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-1">
                    <h4 className="font-bold text-lg leading-tight text-gray-900 group-hover:text-blue-600">
                      {movie.title}
                    </h4>
                    <div className="flex items-center gap-1 text-sm font-medium">
                      <Star className="size-4 fill-yellow-400  dark:fill-neutral-50 dark:text-neutral-50 text-yellow-400  " />

                      <span>{movie.vote_average?.toFixed(1) || "0.0"}</span>
                      <span className="text-gray-400">/10</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      {movie.release_date?.split("-")[0] || "N/A"}
                    </p>
                  </div>

                  <div className="flex items-center gap-1 text-sm font-medium text-gray-700 whitespace-nowrap">
                    See more <ArrowRight className="size-4" />
                  </div>
                </Link>
              ))}

              <Link
                href={`/search?q=${searchValue}`}
                className="p-3 text-sm font-semibold text-black hover:bg-secondary border-t"
              >
                See all results for "{searchValue}"
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
