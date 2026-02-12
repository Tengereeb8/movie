import * as React from "react";
import Link from "next/link";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { data } from "react-router-dom";

const getMovieGenre = async () => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTA3MzAyNTFjYzIzMmYyM2I0NGQ1ZGY4NTA1M2E2NCIsIm5iZiI6MTc2OTY1ODEyMy4xMzYsInN1YiI6IjY5N2FkNzBiY2VhNzhhMGRiYzhmOGFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sECnoPIecqeqEVfZsxsYtnSegaVtrj9uW3v4fgSuz6k";

  const res = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en",
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
  console.log(data.genres);
  return data.genres;
};

export const Nav = async () => {
  const genres = await getMovieGenre();
  return (
    <nav className="md:max-w-360 w-screen mx-auto h-15 items-center flex lg:px-20 px-5 justify-between">
      <Link
        className="text-indigo-700  items-center gap-2 font-sans hidden lg:flex"
        href="/"
      >
        <Image src="/film.svg" alt="Film icon" width={20} height={20} />
        <span className="font-bold">Movie Z</span>
      </Link>

      <div className="flex items-center gap-3">
        {/* Genre Dropdown */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                <span className="hidden lg:block">Genre</span>
                <span className="lg:hidden"></span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-6 w-80 lg:w-125">
                  <h1 className="text-2xl font-bold">Genres</h1>
                  <p className="border-b border-zinc-200 dark:border-zinc-800 pt-1 pb-4 mb-4 text-muted-foreground">
                    See lists of movies by genre
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {genres.map((genre: { id: number; name: string }) => (
                      <Badge
                        key={genre.id}
                        variant="outline"
                        className="cursor-pointer hover:bg-secondary flex items-center gap-1"
                      >
                        {genre.name}
                        <img
                          src="/cr.svg"
                          className="w-3 h-3 opacity-50 dark:hidden"
                          alt=""
                        />
                        <img
                          src="/wcr.svg"
                          alt=""
                          className="w-3 h-3 opacity-50 hidden dark:flex"
                        />
                      </Badge>
                    ))}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <InputGroup className="max-w-xs">
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end"></InputGroupAddon>
        </InputGroup>
      </div>

      <div className="flex items-center gap-3">
        <ModeToggle />
      </div>
    </nav>
  );
};
