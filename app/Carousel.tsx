// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { ButtonDefault } from "./components/Button";
// interface MovieSlide {
//   id: number;
//   src: string;
//   alt: string;
//   title: string;
//   description: string;
//   rating: number;
// }

// const movies: MovieSlide[] = [
//   {
//     id: 1,
//     src: "https://images5.alphacoders.com/140/thumb-1920-1402246.jpg",
//     alt: "Movie 1",
//     title: "Wicked",
//     description:
//       "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
//     rating: 6.9,
//   },
//   {
//     id: 2,
//     src: "https://wallpapercat.com/w/full/6/e/8/1381542-3840x2160-desktop-4k-movie-poster-wallpaper-photo.jpg",
//     alt: "Movie 2",
//     title: "Black Panther",
//     description:
//       "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
//     rating: 6.9,
//   },
// ];

// export const MovieCarousel = () => {
//   return (
//     <Carousel className="relative w-screen lg:h-150 h-auto lg:max-w-360 mx-auto">
//       <CarouselContent>
//         {movies.map((movie) => (
//           <CarouselItem key={movie.id} className="flex flex-col lg:relative">
//             <img
//               src={movie.src}
//               className="w-screen h-61.5 lg:h-150 object-cover"
//               alt={movie.title}
//             />

//             <div
//               className="
//             flex flex-col gap-2 p-4 text-black
//             lg:absolute lg:inset-0 lg:justify-end
//             lg:p-12 lg:text-white lg:ml-35 lg:mb-29.5
//           "
//             >
//               <p className="text-base">Now playing:</p>

//               <h2 className="text-2xl lg:text-4xl font-bold">{movie.title}</h2>

//               <div className="flex gap-1 items-center">
//                 <img src="/Star.svg" alt="" />
//                 <p>
//                   {movie.rating}{" "}
//                   <span className="text-[#71717a] lg:text-gray-300">/10</span>
//                 </p>
//               </div>

//               <p className="text-sm lg:text-lg lg:text-gray-200 max-w-md">
//                 {movie.description}
//               </p>

//               <div className="mt-2 lg:mt-4">
//                 <ButtonDefault />
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

// "use client";
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

// export const MovieCarousel = ({ movies }: { movies: Movie[] }) => {
//   const carouselMovies = movies?.slice(0, 5);

//   return (
//     <Carousel className="relative w-screen lg:h-150 h-auto lg:max-w-360 mx-auto">
//       <CarouselContent>
//         {carouselMovies?.map((movie) => (
//           <CarouselItem key={movie.id} className="flex flex-col lg:relative">
//             <img
//               // 3. Use backdrop_path with the "original" size for high quality
//               src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
//               className="w-screen h-61.5 lg:h-150 object-cover"
//               alt={movie.title}
//             />

//             <div
//               className="
//               flex flex-col gap-2 p-4 text-black
//               lg:absolute lg:inset-0 lg:justify-end
//               lg:p-12 lg:text-white lg:ml-35 lg:mb-29.5
//             "
//             >
//               <p className="text-base">Now playing:</p>

//               <h2 className="text-2xl lg:text-4xl font-bold">{movie.title}</h2>

//               <div className="flex gap-1 items-center">
//                 <img src="/Star.svg" alt="" />
//                 <p>
//                   {/* 4. Use vote_average and fix decimals to 1 place */}
//                   {movie.vote_average?.toFixed(1)}{" "}
//                   <span className="text-[#71717a] lg:text-gray-300">/10</span>
//                 </p>
//               </div>

//               <p className="text-sm lg:text-lg lg:text-gray-200 max-w-md line-clamp-3">
//                 {movie.overview}
//               </p>

//               <div className="mt-2 lg:mt-4">
//                 <ButtonDefault />
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

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
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

export const MovieCarousel = ({ movies }: { movies: Movie[] }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );

  const carouselMovies = movies?.slice(0, 5);

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="relative w-screen lg:h-150 h-auto lg:max-w-360 mx-auto"
    >
      <CarouselContent>
        {carouselMovies?.map((movie) => (
          <CarouselItem key={movie.id} className="flex flex-col lg:relative">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              className="w-screen h-61.5 lg:h-150 object-cover"
              alt={movie.title}
            />

            <div
              className="
                flex flex-col gap-2 p-4 text-black
                lg:absolute lg:inset-0 lg:justify-end
                lg:p-12 lg:text-white lg:ml-35 lg:mb-29.5
              "
            >
              <p className="text-base">Now playing:</p>
              <h2 className="text-2xl lg:text-4xl font-bold">{movie.title}</h2>

              <div className="flex gap-1 items-center">
                <img src="/Star.svg" alt="Rating" />
                <p>
                  {movie.vote_average?.toFixed(1)}{" "}
                  <span className="text-[#71717a] lg:text-gray-300">/10</span>
                </p>
              </div>

              <p className="text-sm lg:text-lg lg:text-gray-200 max-w-md line-clamp-3">
                {movie.overview}
              </p>

              <div className="mt-2 lg:mt-4">
                <ButtonDefault />
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
