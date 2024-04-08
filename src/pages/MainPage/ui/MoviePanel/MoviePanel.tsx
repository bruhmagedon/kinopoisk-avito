import { useFetchAllMoviesQuery } from "@/entities/movies";
import { Pagination } from "@/shared/ui/Pagination";
import { MovieList } from "@/widgets/Movies";
import { useEffect, useState } from "react";

interface MoviePanelProps {}

export const MoviePanel = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useFetchAllMoviesQuery({
    limit: 12, //Должно приходить из редакса (панель фильтров)
    page: currentPage,
  });

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="flex flex-col gap-12">
      <MovieList data={data && data.docs} isLoading={isLoading} />
      <Pagination
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
        handlePrevPage={handlePrevPage}
        totalPages={10} //тоже чето типо редакса (но пока хз)
      />
    </section>
  );
};
