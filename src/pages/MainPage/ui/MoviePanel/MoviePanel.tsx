import { useEffect, useState } from "react";
import { useAppSelector } from "@/app/store/store";
import { SelectedFilters } from "@/entities/filters";
import { useFetchMoviesQuery } from "@/entities/movies";
import { PaginationWrapper } from "@/features/pagination";
import { LoadMoreButton, useDebounce } from "@/shared";
import { MovieList } from "@/widgets/Movies";

const TOTAL = 100;

export const MoviePanel = () => {
  const keyword = useAppSelector((state) => state.search.keyword);
  const filters = useAppSelector((state) => state.filters.filters);
  const debouncedKeywords = useDebounce(keyword, 1000);

  // Пагинация
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(12); //лимит будет выставляться из фильтров

  const { data, isLoading } = useFetchMoviesQuery({
    query: debouncedKeywords,
    limit,
    page: currentPage,
    ...filters,
  });

  useEffect(() => {
    console.log(data, isLoading);
  }, [data, isLoading]);

  return (
    <section className="flex flex-col gap-12">
      <PaginationWrapper
        limit={limit}
        siblings={1}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={TOTAL}
        type="large"
      >
        {
          <div className="flex flex-col gap-8">
            <MovieList data={data && data.docs} isLoading={isLoading} />
          </div>
        }
      </PaginationWrapper>
    </section>
  );
};
