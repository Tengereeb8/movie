import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ButtonDefault } from "./components/Button";
interface MovieSlide {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  rating: number;
}

const movies: MovieSlide[] = [
  {
    id: 1,
    src: "https://images5.alphacoders.com/140/thumb-1920-1402246.jpg",
    alt: "Movie 1",
    title: "Wicked",
    description:
      "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
    rating: 6.9,
  },
  {
    id: 2,
    src: "https://wallpapercat.com/w/full/6/e/8/1381542-3840x2160-desktop-4k-movie-poster-wallpaper-photo.jpg",
    alt: "Movie 2",
    title: "Black Panther",
    description:
      "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
    rating: 6.9,
  },
];

export const MovieCarousel = () => {
  return (
    <Carousel className="relative w-screen md:max-w-360 mx-auto">
      <CarouselContent>
        {movies.map((movie) => (
          <CarouselItem
            key={movie.id}
            className="relative h-fit flex justify-center "
          >
            <img
              src={movie.src}
              className="w-screen  h-150 object-cover"
              alt={movie.title}
            />

            <div className="absolute inset-0  flex flex-col justify-end p-12 text-white ml-35  mb-29.5">
              <p className="text-base">Now playing:</p>
              <h2 className="text-4xl font-bold mb-2">{movie.title}</h2>
              <div className="flex gap-1 pl-2 pt-2">
                <img src="/Star.svg" alt="" />
                <p>
                  {movie.rating} <span className="text-[#71717a]">/10</span>
                </p>
              </div>
              <p className="text-lg text-gray-200 max-w-md pt-4">
                {movie.description}
              </p>
              <ButtonDefault />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {movies.map((movie) => {
        if (movie.id > 1) {
          return (
            <CarouselPrevious
              key={movie.id}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
            />
          );
        }
      })}
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
    </Carousel>
  );
};
