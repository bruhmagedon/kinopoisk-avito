import { useFetchAllMoviesQuery } from "@/entities/movies";
import { PaginationWrapper } from "@/features/pagination";
import { LoadMoreButton } from "@/shared";

import { MovieList } from "@/widgets/Movies";
import { useState } from "react";

export const MoviePanel = () => {
  const TOTAL = 10; // Брать из  апи
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useFetchAllMoviesQuery({
    limit: 12, //Должно приходить из редакса (панель фильтров)
    page: currentPage,
  });

  return (
    <section className="flex flex-col gap-12">
      <LoadMoreButton />
      <PaginationWrapper
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={TOTAL} //тоже чето типо редакса (но пока хз)
      >
        {<MovieList data={data && data.docs} isLoading={isLoading} />}
      </PaginationWrapper>
    </section>
  );
};
