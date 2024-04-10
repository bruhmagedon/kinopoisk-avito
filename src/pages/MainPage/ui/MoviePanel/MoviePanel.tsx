import { useFetchAllMoviesQuery } from "@/entities/movies";
import { PaginationWrapper } from "@/features/pagination";
import { LoadMoreButton } from "@/shared";

import { MovieList } from "@/widgets/Movies";
import { useState } from "react";

export const MoviePanel = () => {
  const TOTAL = 100; // Брать из апи (или редакса, короч надо будет чота придумать)
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(12); //лимит будет выставляться из фильтров

  const { data, isLoading } = useFetchAllMoviesQuery({
    limit,
    page: currentPage,
  });

  return (
    <section className="flex flex-col gap-12">
      <PaginationWrapper
        limit={limit}
        siblings={1}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={TOTAL}
      >
        {
          <div className="flex flex-col gap-8">
            {/* № Ппробовать пофиксить добавить скелетон при переключение пагинации (когда долгая загрузка) */}
            <MovieList data={data && data.docs} isLoading={isLoading} />
            <LoadMoreButton />
          </div>
        }
      </PaginationWrapper>
    </section>
  );
};
