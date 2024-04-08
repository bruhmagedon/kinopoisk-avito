import { Filters } from "@/pages/MainPage/ui/Filters/Filters";
import { MoviePanel } from "./MoviePanel/MoviePanel";

export const MainPage = () => {
  return (
    <div className="p-[24px] relative">
      <div className="grid grid-cols-filter-list column-gap items-start">
        <Filters />
        <MoviePanel />
      </div>
    </div>
  );
};
