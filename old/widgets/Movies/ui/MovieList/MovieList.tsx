import type { Movie } from "old/entities/movies";

import { MovieCard } from "../MovieCard/MovieCard";

interface MovieListProps {
  data?: Movie[];
}

export const MovieList = ({ data: docs }: MovieListProps) => {
  if (docs?.length === 0) {
    return (
      <div className='flex h-screen w-full items-center justify-center'>
        <h1 className='text-2xl font-medium text-white'>Данных по такому запросу нет</h1>
      </div>
    );
  }

  return (
    <ul className='grid gap-[24px] max-lg:grid-cols-3 max-sm:grid-cols-2 max-sm:p-5 lg:grid-cols-4'>
      {docs?.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </ul>
  );
};

// const MovieListWithSkeleton = withSkelton<MovieListProps>(
//   MovieList,
//   "column",
//   "list",
//   5
// );

// export default MovieListWithSkeleton;
