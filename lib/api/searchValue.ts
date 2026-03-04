import { FetchMovieDataType } from "../movie-data-types";
// import { options } from "./option";

export const getSearchValue = async (
  searchValue: string,
  page: number = 1,
): Promise<FetchMovieDataType> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=${page}`,
    // options,
  );
  const moviesSimilar = await response.json();
  return moviesSimilar;
};
