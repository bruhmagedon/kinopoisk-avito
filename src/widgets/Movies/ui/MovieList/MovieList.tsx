import { MovieIdApiResponse } from "@/entities/movies";
import withSkelton from "@/shared/hooks/withSkeleton";
import { MovieCard } from "../MovieCard/MovieCard";

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

const MovieListWithSkeleton = withSkelton<MovieListProps>(MovieList, "list", 5);

export default MovieListWithSkeleton;
