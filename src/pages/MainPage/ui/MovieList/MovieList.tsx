import { useFetchAllMoviesQuery } from "@/entities/movies";
import { Pagination } from "@/shared/ui/Pagination";
import { MovieCard } from "@/widgets/MovieCard";
import { useEffect } from "react";

export const MovieList = () => {
  const { data, isLoading } = useFetchAllMoviesQuery({ limit: 12, page: 1 });

  useEffect(() => {});
  if (isLoading) return <div>Загрузка дубин</div>;

  if (data) {
    console.log(data.docs);
    return (
      <section className="flex flex-col gap-12">
        <ul className="grid grid-cols-4 gap-[24px]">
          {data.docs.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </ul>
        <Pagination
          currentPage={1}
          handleNextPage={() => {}}
          handlePageClick={() => {}}
          handlePrevPage={() => {}}
          totalPages={10}
        />
      </section>
    );
  }
};
