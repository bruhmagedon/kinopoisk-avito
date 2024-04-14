import { MovieIdApiResponse } from "@/entities/movies";
import { MovieCard } from "../MovieCard/MovieCard";
import { withSkelton } from "@/shared";

interface MovieListProps {
  data?: MovieIdApiResponse[] | null;
}

const MovieList = ({ data: docs }: MovieListProps) => {
  return (
    <ul className="grid grid-cols-4 gap-[24px]">
      {docs?.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </ul>
  );
};

const MovieListWithSkeleton = withSkelton<MovieListProps>(
  MovieList,
  "column",
  "list",
  5
);

export default MovieListWithSkeleton;
