import { useFetchAllMoviesQuery } from "@/entities/movies";
import { Pagination } from "@/shared/ui/Pagination";
import MovieList from "@/widgets/MovieList/MovieList";

interface MoviePanelProps {}

export const MoviePanel = () => {
  const { data, isLoading } = useFetchAllMoviesQuery({ limit: 12, page: 1 });

  return (
    <section className="flex flex-col gap-12">
      <MovieList data={data && data.docs} isLoading={isLoading} />
      <Pagination
        currentPage={1}
        handleNextPage={() => {}}
        handlePageClick={() => {}}
        handlePrevPage={() => {}}
        totalPages={10}
      />
    </section>
  );
};
