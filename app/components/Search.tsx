"use client";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";

export function SpinnerSize() {
  return (
    <div className="flex items-center gap-6">
      <Spinner className="size-3" />
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
    </div>
  );
}

import { getSearchValue } from "@/lib/api";
import { Movie } from "@/lib/types";
import { Heading1, Search } from "lucide-react";
import { ChangeEventHandler, useEffect, useState } from "react";
export const SearchInput = () => {
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const onChangeSearchValue: ChangeEventHandler<
    HTMLInputElement,
    HTMLInputElement
  > = (event) => {
    setSearchValue(event.target.value);
  };
  useEffect(() => {
    if (searchValue.trim() === "") {
      setMovies([]);
      return;
    }

    const timer = setTimeout(async () => {
      const data = await getSearchValue(searchValue);

      // Fix: Add a check to see if data exists and has results
      if (data && data.results) {
        setMovies(data.results);
      } else {
        setMovies([]);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchValue]);
  return (
    <div>
      <InputGroup className="max-w-xs relative">
        <InputGroupInput
          placeholder="Search..."
          onChange={onChangeSearchValue}
        />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
      <div className="absolute z-1">
        {loading && (
          <div>
            <Spinner className={`size-4 lg:size-8`} />
          </div>
        )}
        {!loading && (
          <div>
            {movies.map((movie) => {
              return <h1 key={movie.id}>{movie.title}</h1>;
            })}
          </div>
        )}
      </div>
    </div>
  );
};
