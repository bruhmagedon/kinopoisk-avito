import { SearchOutput } from "./SearchOutput";
import Find from "@/shared/assets/icons/Find";
import { Button } from "@/shared";
import { useEffect, useRef, useState } from "react";

export const SearchPanel = () => {
  const [term, setTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const searchPanelRef = useRef<HTMLDivElement>(null);

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

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.currentTarget.value);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    console.log(term);
  }, [term]);

  return (
    <div className="w-[35%] mx-auto relative" ref={searchPanelRef}>
      <form className="w-full" onClick={handleFormClick}>
        <div className="flex bg-[#F6F7FB] h-[37px] items-center justify-between rounded-md">
          <div
            className={
              "flex items-center gap-3 flex-1  h-full border-[3px] hover:border-black rounded-md pl-1"
            }
          >
            <input
              type="text"
              placeholder="Поиск фильма"
              className="outline-none bg-[#F6F7FB] w-full"
              value={term}
              onChange={onSearch}
            />
          </div>
          <Button
            className="w-[35px] h-full flex justify-center items-center focus:bg-gray-200 outline-none"
            disabled={!isOpen}
          >
            <Find />
          </Button>
        </div>
      </form>

      {isOpen && (
        <SearchOutput className="absolute w-full h-[400px] bg-green-300 z-50 rounded-lg top-12">
          <div className="w-full h-full"></div>
        </SearchOutput>
      )}
    </div>
  );
};
