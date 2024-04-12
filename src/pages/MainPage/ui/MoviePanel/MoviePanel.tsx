import { useAppSelector } from "@/app/store/store";
import { FilterTypes } from "@/entities/filters";
import { SelectedFilters } from "@/entities/filters/model/FiltersSlice";
import { useFetchAllMoviesQuery } from "@/entities/movies";
import { PaginationWrapper } from "@/features/pagination";
import { LoadMoreButton } from "@/shared";

import { MovieList } from "@/widgets/Movies";
import { useEffect, useState } from "react";

export const MoviePanelRequest = () => {
  const { filters, isFilterQuery } = useAppSelector((state) => state.filters);
  const [filtersState, setFiltersState] = useState<SelectedFilters>(filters);

  useEffect(() => {
    if (isFilterQuery) {
      setFiltersState(filters);
    }
    // else {
    //   setFiltersState(null);
    // }
  }, [isFilterQuery]);

  return <MoviePanel filters={filtersState} />;
};

interface MoviePanelProps {
  filters: SelectedFilters;
  genres?: string | number;
  countries?: string | number;
  status?: string | number;
  type?: string | number;
}

const MoviePanel = ({ filters }: MoviePanelProps) => {
  const TOTAL = 100; // Брать из апи (или редакса, короч надо будет чота придумать)
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(12); //лимит будет выставляться из фильтров

  const { data, isLoading } = useFetchAllMoviesQuery({
    limit,
    page: currentPage,
    // ...filters,
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
