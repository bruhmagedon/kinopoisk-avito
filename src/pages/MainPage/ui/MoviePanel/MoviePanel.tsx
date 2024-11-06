import { useState } from 'react';
import { useFetchMoviesQuery } from '@/entities/movies';
import { PaginationWrapper } from '@/features/pagination';
import { MovieList } from '@/widgets/Movies';
import { getPageFromLocalStorage } from '@/shared/utils/localStorageActions';

//* MOCKED
const limit = 12;
const TOTAL = 100;

export const MoviePanel = () => {
   // Пагинация
   const [currentPage, setCurrentPage] = useState<number>(() => {
      return getPageFromLocalStorage();
   });

   const { data, isLoading } = useFetchMoviesQuery({
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
