import { useMemo } from "react";
import { PaginationWrapper } from "old/features/pagination";
import { MovieList } from "old/widgets/Movies/ui/MovieList/MovieList";

import { fetchMovieQuery } from "@/constants/mock/fetchMovieQuery";

const TOTAL = 100;
// type SortType = "Отсутствует" | "По названию" | "По рейтингу" | "По году";

export const MoviePanel = () => {
  const mockedMovies = useMemo(() => fetchMovieQuery, []);

  return (
    <section className='flex flex-col gap-12'>
      <PaginationWrapper
        limit={12}
        siblings={1}
        // currentPage={currentPage}
        // setCurrentPage={setCurrentPage}
        totalPages={TOTAL}
        type='large'
      >
        {
          <div className='flex flex-col gap-8'>
            <MovieList
              data={mockedMovies && mockedMovies.docs}
            // isLoading={true}
            />
          </div>
        }
      </PaginationWrapper>
    </section>
  );
};

// const savePageToLocalStorage = (page: number) => {
//   localStorage.setItem("currentPage", JSON.stringify(page));
// };

// const getPageFromLocalStorage = () => {
//   const storedPage = localStorage.getItem("currentPage");
//   return storedPage ? JSON.parse(storedPage) : 1;
// };

// const clearPageFromLocalStorage = () => {
//   localStorage.removeItem("currentPage");
// };
