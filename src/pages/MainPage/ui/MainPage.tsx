import { Filters } from "@/widgets/Filters";
import { MovieCard } from "@/widgets/MovieCard";

export const MainPage = () => {
  return (
    <div className="bg-blue-300 mt-[50px] relative">
      <div className="grid grid-cols-2-fixed column-gap items-start">
        <Filters />
        <ul className="grid grid-cols-[repeat(3,200px)] gap-x-[25px] gap-y-[30px]">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </ul>
      </div>
    </div>
  );
};
