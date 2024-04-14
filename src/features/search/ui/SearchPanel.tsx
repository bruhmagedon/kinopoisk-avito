import { SearchOutput } from "./SearchOutput";
import { Button } from "@/shared";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "@/app/store/store";
import { Find } from "@/shared/assets";
import { setSearchTerm } from "@/entities/search";
import { saveSearchTermToLocalStorage } from "../utils/saveSearchTermToLocalStorage";

export const SearchPanel = () => {
  const [term, setTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchPanelRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchPanelRef.current &&
      !searchPanelRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleFormClick = () => {
    setIsOpen(!isOpen);
  };

  const onDispatchTerm = () => {
    dispatch(setSearchTerm(term));
    saveSearchTermToLocalStorage(term);
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.currentTarget.value);
  };

  return (
    <div className="w-[35%] mx-auto relative" ref={searchPanelRef}>
      <form className="w-full" onClick={handleFormClick}>
        <div className="flex bg-input-bg h-[37px] items-center justify-between rounded-lg">
          <div
            className={
              "flex items-center gap-3 flex-1  h-full border-[2px] border-input-bg hover:border-[#CDCDCD] rounded-md pl-3"
            }
          >
            <input
              type="text"
              placeholder="Поиск фильма"
              className="outline-none bg-input-bg w-full text-white"
              value={term}
              onChange={onSearch}
            />
          </div>
          <Button
            className={
              "w-[35px] h-full flex justify-center items-center outline-none " +
              (isOpen && "hover:bg-[#3A3A3A] rounded-lg")
            }
            // disabled={!isOpen}
            onClick={onDispatchTerm}
          >
            <Find className="stroke-white" />
          </Button>
        </div>
      </form>

      {/* Посмотреть потом как можно лучше всего реализовать форму */}
      {isOpen && <SearchOutput keyword={term} />}
    </div>
  );
};
