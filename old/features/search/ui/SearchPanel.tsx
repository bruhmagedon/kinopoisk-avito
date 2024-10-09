import { useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { setInputTerm, setSearchPanelStatus, setSearchTerm } from "old/entities/search";
import { Button } from "old/shared";

import { useAppDispatch, useAppSelector } from "@/app/providers/store/store";

import { saveSearchTermToLocalStorage } from "../utils/saveSearchTermToLocalStorage";

import { SearchOutput } from "./SearchOutput";

export const SearchPanel = () => {
  const term = useAppSelector((state) => state.search.inputTerm);
  const isOpen = useAppSelector((state) => state.search.searchPanelStatus);
  const searchPanelRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (searchPanelRef.current && !searchPanelRef.current.contains(event.target as Node)) {
      dispatch(setSearchPanelStatus(false));
    }
  };

  const handleFormClick = () => {
    dispatch(setSearchPanelStatus(!isOpen));
  };

  const onDispatchTerm = () => {
    dispatch(setSearchTerm(term));
    saveSearchTermToLocalStorage(term);
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setInputTerm(e.currentTarget.value));
  };

  return (
    <div className='relative mx-auto w-[310px] max-lg:w-auto max-lg:flex-1' ref={searchPanelRef}>
      <form className='w-full' onClick={handleFormClick}>
        <div className='flex h-[37px] items-center justify-between rounded-lg bg-input-bg'>
          <div className='flex h-full flex-1 items-center gap-3 rounded-md border-[2px] border-input-bg pl-3 hover:border-[#CDCDCD]'>
            <input
              type='text'
              placeholder='Поиск фильма'
              className='w-full bg-input-bg text-white outline-none'
              value={term}
              onChange={onSearch}
            />
          </div>
          <Button
            className={`flex h-full w-[35px] items-center justify-center outline-none ${isOpen && "rounded-lg hover:bg-[#3A3A3A]"
            }`}
            onClick={onDispatchTerm}
          >
            <Search />
          </Button>
        </div>
      </form>

      {/* Посмотреть потом как можно лучше всего реализовать форму */}
      {isOpen && <SearchOutput keyword={term} />}
    </div>
  );
};
