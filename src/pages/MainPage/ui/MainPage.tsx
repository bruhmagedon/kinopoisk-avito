import { useFetchAllMoviesQuery } from "@/entities/movies";
import { Pagination } from "@/shared/ui/Pagination";
import { Filters } from "@/widgets/Filters";
import { MovieCard } from "@/widgets/MovieCard";

export const MainPage = () => {
  const { data, isLoading } = useFetchAllMoviesQuery(null);

  return (
    <div className="p-[24px] relative">
      <div className="grid grid-cols-filter-list column-gap items-start">
        <Filters />
        <div className="flex flex-col gap-12">
          <ul className="grid grid-cols-4 gap-[24px]">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </ul>
          <Pagination
            currentPage={1}
            handleNextPage={() => {}}
            handlePageClick={() => {}}
            handlePrevPage={() => {}}
            totalPages={10}
          />
        </div>
      </div>
    </div>
  );
};
