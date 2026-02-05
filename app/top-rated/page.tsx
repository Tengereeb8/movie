import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Footer } from "../components/Footer";
import { MovieCard } from "../components/MovieCard";
import { Nav } from "../components/Navigation";
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
export default async function TopRatedPage() {
  const movies = await getTopratedMovies();

  return (
    <div>
      <main className="mx-auto max-w-360 mb-8">
        <h1 className="text-3xl font-bold mb-8 ml-8">Top Rated </h1>
        <div className="grid grid-cols-2 lg:grid-cols-5 w-fit lg:max-w-360 mx-auto gap-5 md:grid-cols-4 lg:gap-8 mb-8">
          {movies.map((movie: any) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              rating={movie.vote_average.toFixed(1)}
            />
          ))}
        </div>
      </main>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
