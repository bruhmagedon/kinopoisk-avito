import { MovieList } from "./MovieList/MovieList";
import { Filters } from "@/pages/MainPage/ui/Filters/Filters";

export const MainPage = () => {
  return (
    <div className="p-[24px] relative">
      <div className="grid grid-cols-filter-list column-gap items-start">
        <Filters />
        <MovieList />
      </div>
    </div>
  );
};
