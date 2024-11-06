import { useFetchSearchQuery } from '@/entities/movies';
import { Button, useDebounce } from '@/shared';
import { useState } from 'react';
import { SearchResulList } from './SearchResultList';
import { Close, HistoryIcon } from '@/shared/assets';
import { useAppDispatch } from '@/app/store/store';
import { setInputTerm } from '@/entities/search';

interface SearchOutputProps {
   className?: string;
   keyword: string;
}

const SEARCH_LIMIT = 100;
const SEARCH_PAGE = 1;

export const SearchOutput = ({ keyword }: SearchOutputProps) => {
   const debouncedKeywords = useDebounce(keyword, 1000);

   const dispatch = useAppDispatch();

   const [searchTerms, setSearchTerms] = useState(JSON.parse(localStorage.getItem('searchTerms') || '[]'));

   const { data, isLoading } = useFetchSearchQuery({
      query: debouncedKeywords,
      limit: SEARCH_LIMIT,
      page: SEARCH_PAGE,
   });

   const handleDeleteSearchTerm = (termToDelete: string) => {
      const updatedSearchTerms = searchTerms.filter((term: string) => term !== termToDelete);
      localStorage.setItem('searchTerms', JSON.stringify(updatedSearchTerms));
      setSearchTerms(updatedSearchTerms);
   };

   const handleSearchTerm = (term: string) => {
      dispatch(setInputTerm(term));
   };

   if (keyword && data) {
      return (
         <div className="absolute top-12 z-50 max-h-[400px] w-full overflow-auto rounded-lg border-[1px] border-gray-800 bg-panel-background-dark">
            <SearchResulList data={data.docs} />
         </div>
      );
   } else if (searchTerms.length > 0) {
      return (
         <div className="absolute top-12 z-50 max-h-[400px] w-full overflow-auto rounded-lg border-[1px] border-gray-800 bg-panel-background-dark">
            <ul>
               {searchTerms
                  .filter((term: string) => term != '')
                  .map((term: string, index: number) => (
                     <li
                        key={index}
                        className="flex cursor-pointer items-center justify-center gap-2 p-3 font-medium text-white hover:bg-input-bg"
                        onClick={() => handleSearchTerm(term)}
                     >
                        <HistoryIcon />
                        <div className="flex-1">{term}</div>
                        <Button
                           className="flex h-[30px] w-[30px] items-center justify-center rounded-lg hover:bg-[#3A3A3A]"
                           onClick={() => handleDeleteSearchTerm(term)}
                        >
                           {<Close />}
                        </Button>
                     </li>
                  ))}
            </ul>
         </div>
      );
   }
};
