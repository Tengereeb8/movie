// import { Body } from "./Body";
// import { MovieCarousel } from "./Carousel";
// import { Footer } from "./components/Footer";
// import { Nav } from "./components/Navigation";

// const Home = () => {
//   return (
//     <div>
//       <Nav />
//       <MovieCarousel />
//       <Body />
//       <Footer />
//     </div>
//   );
// };
// export default Home;

import { Body } from "./Body";
import { MovieCarousel } from "./Carousel";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Navigation";

const getPopularMovies = async () => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTA3MzAyNTFjYzIzMmYyM2I0NGQ1ZGY4NTA1M2E2NCIsIm5iZiI6MTc2OTY1ODEyMy4xMzYsInN1YiI6IjY5N2FkNzBiY2VhNzhhMGRiYzhmOGFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sECnoPIecqeqEVfZsxsYtnSegaVtrj9uW3v4fgSuz6k";

  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
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
  return data.results;
};

const getUpcomingMovies = async () => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTA3MzAyNTFjYzIzMmYyM2I0NGQ1ZGY4NTA1M2E2NCIsIm5iZiI6MTc2OTY1ODEyMy4xMzYsInN1YiI6IjY5N2FkNzBiY2VhNzhhMGRiYzhmOGFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sECnoPIecqeqEVfZsxsYtnSegaVtrj9uW3v4fgSuz6k";

  const res = await fetch(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
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
  return data.results;
};
const getTopratedMovies = async () => {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTA3MzAyNTFjYzIzMmYyM2I0NGQ1ZGY4NTA1M2E2NCIsIm5iZiI6MTc2OTY1ODEyMy4xMzYsInN1YiI6IjY5N2FkNzBiY2VhNzhhMGRiYzhmOGFhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sECnoPIecqeqEVfZsxsYtnSegaVtrj9uW3v4fgSuz6k";

  const res = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
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
  return data.results;
};

const Home = async () => {
  const movies = await getPopularMovies();
  const upComingMovies = await getUpcomingMovies();
  const topratedMovies = await getTopratedMovies();

  return (
    <div>
      <Nav />
      <MovieCarousel movies={movies} />
      <Body
        movies={movies}
        upComingMovies={upComingMovies}
        topratedMovies={topratedMovies}
      />
      <Footer />
    </div>
  );
};

export default Home;
