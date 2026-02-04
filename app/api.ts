// export const getPopularMovies = async () => {
//   const token =
//     "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTA3MzAyNTFjYzIzMmYyM2I0NGQ1ZGY4NTA1M2E2NCIsIm5iZiI6MTc2OTY1ODEyMy4xMzYsInN1YiI6IjY5N2FkNzBiY2VhNzhhMGRiYzhmOGFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sECnoPIecqeqEVfZsxsYtnSegaVtrj9uW3v4fgSuz6k";
//   const res = await fetch(
//     "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
//     {
//       method: "GET",
//       headers: {
//         "Content-type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     },
//   );
//   const popularMoviesData = await res.json();
//   console.log("popularMoviesData: ", popularMoviesData);
// };
// getPopularMovies();
// Define what a Movie looks like
interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

// Define the API response structure
interface TMDBResponse {
  page: number;
  results: Movie[];
}

export const getPopularMovies = async (): Promise<void> => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTA3MzAyNTFjYzIzMmYyM2I0NGQ1ZGY4NTA1M2E2NCIsIm5iZiI6MTc2OTY1ODEyMy4xMzYsInN1YiI6IjY5N2FkNzBiY2VhNzhhMGRiYzhmOGFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sECnoPIecqeqEVfZsxsYtnSegaVtrj9uW3v4fgSuz6k"; // Make sure your token is inside these quotes!

  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const popularMoviesData: TMDBResponse = await res.json();
    console.log("Success! Movies list:", popularMoviesData.results);
  } catch (error) {
    console.error("The API call failed:", error);
  }
};
