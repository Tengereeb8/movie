// import { options } from "./option";
import { MovieGenre } from "../movie-data-types";

export const getMovieGenres = async (): Promise<MovieGenre> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=en`,
    // options,
  );
  const movieGenre = await response.json();
  return movieGenre;
};
