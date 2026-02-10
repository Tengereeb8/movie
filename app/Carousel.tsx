"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ButtonDefault } from "./components/Button";

interface Movie {
  id: number;
  backdrop_path: string;
  title: string;
  overview: string;
  vote_average: number;
}

export const MovieCarouselSkeleton = () => (
  <div className="relative w-screen lg:h-150 h-61.5 lg:max-w-360 mx-auto bg-muted/10">
    <Skeleton className="relative w-screen lg:h-150 h-auto lg:max-w-360 mx-auto" />
  </div>
);

export const MovieCarousel = ({
  movies,
  isLoading,
}: {
  movies: Movie[];
  isLoading?: boolean;
}) => {
  const [hasMounted, setHasMounted] = React.useState(false);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  );

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (isLoading || !hasMounted || !movies?.length) {
    return <MovieCarouselSkeleton />;
  }

  const carouselMovies = movies.slice(0, 5);

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="relative w-screen lg:h-150 h-auto lg:max-w-360 mx-auto dark:text-white"
    >
      <CarouselContent>
        {carouselMovies.map((movie) => (
          <CarouselItem
            key={movie.id}
            className="flex flex-col lg:relative dark:text-white"
          >
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              className="w-screen h-61.5 lg:h-150 object-cover"
              alt={movie.title}
            />
            <div className="flex flex-col gap-2 p-4 text-black lg:absolute lg:inset-0 lg:justify-end lg:p-12 lg:text-white lg:ml-35 lg:mb-29.5 dark:text-white  ">
              <p className="text-base">Now playing:</p>
              <h2 className="text-2xl lg:text-4xl font-bold">{movie.title}</h2>
              <div className="flex gap-1 items-center">
                <img src="/Star.svg" alt="Rating" className="dark:hidden" />
                <img src="/wstar.svg" alt="" className="hidden dark:flex" />
                <p>
                  {movie.vote_average?.toFixed(1)}{" "}
                  <span className="text-[#71717a] lg:text-gray-300">/10</span>
                </p>
              </div>
              <p className="text-sm lg:text-lg lg:text-gray-200 max-w-md line-clamp-3">
                {movie.overview}
              </p>
              <div className="mt-2 lg:mt-4">
                {" "}
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="lg:bg-white bg-black text-white hover:bg-white hover:shadow-lg dark:text-black dark:bg-white lg:text-black ">
                      <img
                        src="/play.svg"
                        alt=""
                        className="hidden lg:flex dark:flex"
                      />
                      <img
                        src="/wplay.svg"
                        alt=""
                        className="lg:hidden flex dark:hidden"
                      />
                      Play Trailer
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
    </Carousel>
  );
};
