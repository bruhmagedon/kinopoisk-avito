import { useFetchSearchQuery } from "@/entities/movies";
import { Button, useDebounce } from "@/shared";
import { useEffect, useState } from "react";
import { SearchResulList } from "./SearchResultList";
import { Close, HistoryIcon } from "@/shared/assets";

interface SearchOutputProps {
  className?: string;
  keyword: string;
}

const SEARCH_LIMIT = 100;
const SEARCH_PAGE = 1;

export const SearchOutput = ({ keyword }: SearchOutputProps) => {
  const debouncedKeywords = useDebounce(keyword, 1000);

  const [searchTerms, setSearchTerms] = useState(
    JSON.parse(localStorage.getItem("searchTerms") || "[]")
  );

  const { data, isLoading } = useFetchSearchQuery({
    query: debouncedKeywords,
    limit: SEARCH_LIMIT,
    page: SEARCH_PAGE,
  });

  useEffect(() => {
    console.log(searchTerms);
  }, [searchTerms]);

  const handleDeleteSearchTerm = (termToDelete: string) => {
    const updatedSearchTerms = searchTerms.filter(
      (term: string) => term !== termToDelete
    );
    localStorage.setItem("searchTerms", JSON.stringify(updatedSearchTerms));
    setSearchTerms(updatedSearchTerms);
  };

  if (keyword && data) {
    return (
      <div className="absolute z-50 w-full max-h-[400px] overflow-auto bg-panel-darker-bg border-[1px] border-gray-800 rounded-lg top-12">
        <SearchResulList data={data.docs} />
      </div>
    );
  } else if (searchTerms.length > 0) {
    console.log(searchTerms);
    return (
      <div className="absolute z-50 w-full max-h-[400px] overflow-auto bg-panel-darker-bg border-[1px] border-gray-800 rounded-lg top-12">
        <ul>
          {searchTerms
            .filter((term: string) => term != "")
            .map((term: string, index: number) => (
              <li
                key={index}
                className="text-white p-3 font-medium flex items-center justify-center gap-2 cursor-pointer hover:bg-input-bg"
              >
                <HistoryIcon />
                <div className="flex-1">{term}</div>
                <Button
                  className="hover:bg-[#3A3A3A] w-[30px] h-[30px] flex items-center justify-center rounded-lg"
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
