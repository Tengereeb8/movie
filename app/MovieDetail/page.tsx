import { Badge } from "@/components/ui/badge";

import { Category } from "../Category";

import { MovieCard } from "../components/MovieCard";

const MovieDetail = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-4">
        <div className="flex flex-col">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Wicked</h1>

          <span className="text-xs sm:text-sm text-gray-500 mt-1">
            2024.11.26 · PG · 2h 40m
          </span>
        </div>

        <div className="flex items-center gap-2">
          <img
            src="/star.svg"
            alt="rating"
            className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400"
          />

          <div className="flex flex-col">
            <div>
              <span className="font-bold text-lg sm:text-xl">6.9</span>

              <span className="text-gray-500 text-sm">/10</span>
            </div>

            <p className="text-xs text-zinc-500">37k</p>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="relative cursor-pointer rounded-lg overflow-hidden  mb-6 lg:mb-8 lg:flex lg:gap-8">
          <img
            src="/detail.jpg"
            alt="Wicked Poster"
            className="hidden lg:block lg:w-72.5 lg:h-107 object-cover rounded-md shadow-lg"
          />

          <div className="relative flex-1">
            <img
              src="/trailer.jpg"
              alt="Trailer Backdrop"
              className="w-full aspect-video object-cover lg:h-107"
            />

            <div className="absolute inset-0 hover:bg-black/30 transition" />

            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex items-center gap-2 sm:gap-3">
              <div className="bg-white rounded-full p-2 sm:p-3 shadow-md hover:scale-110 transition-transform">
                <img
                  src="/play.svg"
                  alt="play"
                  className="w-4 h-4 sm:w-6 sm:h-6"
                />
              </div>

              <p className="text-white text-sm sm:text-base font-semibold drop-shadow-md">
                Play trailer 2:36
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[auto_1fr] lg:grid-cols-[300px_1fr] gap-8.5 lg:gap-8 ">
          <div className="lg:hidden">
            <img
              src="/detail.jpg"
              alt="Wicked Poster"
              className="w-25  sm:w-32 lg:w-full rounded-md shadow-lg object-cover block lg:hidden"
            />
          </div>

          <div className="w-50.25 lg:w-screen">
            <div className="flex flex-wrap gap-2 ">
              {[
                "Fairy Tale",

                "Pop Musical",

                "Fantasy",

                "Musical",

                "Romance",
              ].map((genre) => (
                <Badge
                  key={genre}
                  variant="outline"
                  className="rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm hover:bg-gray-100 transition-colors "
                >
                  {genre}
                </Badge>
              ))}
            </div>

            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed lg:w-270">
              Elphaba, a misunderstood young woman because of her green skin,
              and Glinda, a popular girl, become friends at Shiz University in
              the Land of Oz. After an encounter with the Wonderful Wizard of
              Oz, their friendship reaches a crossroads.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
        {[
          { label: "Director", value: "Jon M. Chu" },

          {
            label: "Writers",

            value: "Winnie Holzman · Dana Fox · Gregory Maguire",
          },

          {
            label: "Stars",

            value: "Cynthia Erivo · Ariana Grande · Jeff Goldblum",
          },
        ].map((item, index) => (
          <div
            key={item.label}
            className={`flex flex-col sm:flex-row sm:gap-6 md:gap-10 py-4 sm:py-5 ${
              index !== 2 ? "border-b border-zinc-200" : ""
            }`}
          >
            <h2 className="text-sm sm:text-base font-bold w-full sm:w-24 md:w-28 mb-1 sm:mb-0">
              {item.label}
            </h2>

            <p className="text-sm sm:text-base font-medium text-zinc-700 flex-1">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 pb-12 sm:pb-20">
        <div className="flex justify-between items-center mb-5 sm:mb-6">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
            More like this
          </h2>

          <a
            href="#"
            className="text-sm sm:text-base font-semibold flex items-center gap-1 hover:text-zinc-600 transition-colors"
          >
            See more <span className="text-lg sm:text-xl">→</span>
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mx-auto sm:gap-4 lg:gap-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <MovieCard
              key={index}
              img="/placeholder-movie.jpg"
              rating={6.9}
              title={`Movie Title ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
