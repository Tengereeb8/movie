// "use client";

// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import { Button } from "@/components/ui/button";

// import * as React from "react";
// import Autoplay from "embla-carousel-autoplay";
// import { Skeleton } from "@/components/ui/skeleton";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { ButtonDefault } from "./components/Button";

// interface Movie {
//   id: number;
//   backdrop_path: string;
//   title: string;
//   overview: string;
//   vote_average: number;
// }

// const getMovieVideos = async (movieId: string) => {
//   const token =
//     "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTA3MzAyNTFjYzIzMmYyM2I0NGQ1ZGY4NTA1M2E2NCIsIm5iZiI6MTc2OTY1ODEyMy4xMzYsInN1YiI6IjY5N2FkNzBiY2VhNzhhMGRiYzhmOGFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sECnoPIecqeqEVfZsxsYtnSegaVtrj9uW3v4fgSuz6k";

//   try {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       },
//     );

//     if (!response.ok) return null;
//     const data = await response.json();
//     return data.results;
//   } catch (error) {
//     return null;
//   }
// };
// export const MovieCarouselSkeleton = () => (
//   <div className="relative w-screen lg:h-150 h-61.5 lg:max-w-360 mx-auto bg-muted/10">
//     <Skeleton className="relative w-screen lg:h-150 h-auto lg:max-w-360 mx-auto" />
//   </div>
// );
// type DetailsPageProps = {
//   params: Promise<{ movieId: string }>;
// };
// export const MovieCarousel = async ({
//   params,
//   movies,
//   isLoading,
// }: {
//   movies: Movie[];
//   isLoading?: boolean;
//   params: DetailsPageProps;
// }) => {
//   const { movieId } = await params;
//   const videos = await getMovieVideos(movieId);

//   const [hasMounted, setHasMounted] = React.useState(false);

//   const plugin = React.useRef(
//     Autoplay({ delay: 3000, stopOnInteraction: false }),
//   );

//   React.useEffect(() => {
//     setHasMounted(true);
//   }, []);

//   if (isLoading || !hasMounted || !movies?.length) {
//     return <MovieCarouselSkeleton />;
//   }
//   const trailer = videos?.find(
//     (video: Video) => video.type === "Trailer" && video.site === "YouTube",
//   );

//   const carouselMovies = movies.slice(0, 5);

//   return (
//     <Carousel
//       plugins={[plugin.current]}
//       onMouseEnter={plugin.current.stop}
//       onMouseLeave={plugin.current.reset}
//       className="relative w-screen lg:h-150 h-auto lg:max-w-360 mx-auto dark:text-white"
//     >
//       <CarouselContent>
//         {carouselMovies.map((movie) => (
//           <CarouselItem
//             key={movie.id}
//             className="flex flex-col lg:relative dark:text-white"
//           >
//             <img
//               src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
//               className="w-screen h-61.5 lg:h-150 object-cover"
//               alt={movie.title}
//             />
//             <div className="flex flex-col gap-2 p-4 text-black lg:absolute lg:inset-0 lg:justify-end lg:p-12 lg:text-white lg:ml-35 lg:mb-29.5 dark:text-white  ">
//               <p className="text-base">Now playing:</p>
//               <h2 className="text-2xl lg:text-4xl font-bold">{movie.title}</h2>
//               <div className="flex gap-1 items-center">
//                 <img src="/Star.svg" alt="Rating" className="dark:hidden" />
//                 <img src="/wstar.svg" alt="" className="hidden dark:flex" />
//                 <p>
//                   {movie.vote_average?.toFixed(1)}{" "}
//                   <span className="text-[#71717a] lg:text-gray-300">/10</span>
//                 </p>
//               </div>
//               <p className="text-sm lg:text-lg lg:text-gray-200 max-w-md line-clamp-3">
//                 {movie.overview}
//               </p>
//               <div className="mt-2 lg:mt-4">
//                 {" "}
//                 <AlertDialog>
//                   <AlertDialogTrigger asChild>
//                     <Button className="lg:bg-white bg-black text-white hover:bg-white hover:shadow-lg dark:text-black dark:bg-white lg:text-black ">
//                       <img
//                         src="/play.svg"
//                         alt=""
//                         className="hidden lg:flex dark:flex"
//                       />
//                       <img
//                         src="/wplay.svg"
//                         alt=""
//                         className="lg:hidden flex dark:hidden"
//                       />
//                       Play Trailer
//                     </Button>
//                   </AlertDialogTrigger>
//                   <AlertDialogContent
//                     href={`https://www.youtube.com/watch?v=${trailer.key}`}
//                   ></AlertDialogContent>
//                 </AlertDialog>
//               </div>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
//       <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
//     </Carousel>
//   );
// };
"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
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

interface Movie {
  id: number;
  backdrop_path: string;
  title: string;
  overview: string;
  vote_average: number;
}

interface Video {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
}

const getMovieVideos = async (movieId: number) => {
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
  const [movieTrailers, setMovieTrailers] = React.useState<
    Record<number, Video | null>
  >({});

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  );

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  React.useEffect(() => {
    const fetchTrailers = async () => {
      const trailers: Record<number, Video | null> = {};
      for (const movie of movies.slice(0, 5)) {
        const videos = await getMovieVideos(movie.id);
        const trailer = videos?.find(
          (video: Video) =>
            video.type === "Trailer" && video.site === "YouTube",
        );
        trailers[movie.id] = trailer || null;
      }
      setMovieTrailers(trailers);
    };

    if (movies?.length) {
      fetchTrailers();
    }
  }, [movies]);

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
        {carouselMovies.map((movie) => {
          const trailer = movieTrailers[movie.id];

          return (
            <CarouselItem
              key={movie.id}
              className="flex flex-col lg:relative dark:text-white"
            >
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                className="w-screen h-61.5 lg:h-150 object-cover"
                alt={movie.title}
              />
              <div className="flex flex-col gap-2 p-4 text-black lg:absolute lg:inset-0 lg:justify-end lg:p-12 lg:text-white lg:ml-35 lg:mb-29.5 dark:text-white">
                <p className="text-base">Now playing:</p>
                <h2 className="text-2xl lg:text-4xl font-bold">
                  {movie.title}
                </h2>
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
                  {trailer && (
                    <div className="w-[997px] h-full">
                      <Dialog>
                        <DialogTrigger asChild className="">
                          <Button className="lg:bg-white bg-black text-white hover:bg-white hover:shadow-lg dark:text-black dark:bg-white lg:text-black">
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
                        </DialogTrigger>
                        <DialogContent className="min-w-[997px] h-fit  p-0 overflow-hidden">
                          <VisuallyHidden>
                            <DialogTitle>{movie.title} Trailer</DialogTitle>
                          </VisuallyHidden>
                          <div className="relative w-[997px] h-[500px]">
                            <iframe
                              className="absolute top-0 left-0 w-full h-full"
                              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
                              title={`${movie.title} Trailer`}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
    </Carousel>
  );
};
