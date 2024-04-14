import { Filters } from "./Filters/Filters";
import { MoviePanel } from "./MoviePanel/MoviePanel";

export const MainPage = () => {
  return (
    <div className="py-[24px] relative bg-darker-bg">
      <div className="grid grid-cols-filter-list column-gap items-start">
        <Filters />
        <MoviePanel />
      </div>
    </div>
  );
};
