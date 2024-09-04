import { MoviesCarousel } from "@/components/MoviesCarousel/MoviesCarousel";
import { MoviesCategoryTabs } from "@/components/MoviesCategoryTabs/MoviesCategoryTabs";
import { Tabs } from "@/components/ui/tabs";

import { MoviePanel } from "./MoviePanel/MoviePanel";

export const MainPage = () => {
  return (
    <div className='flex-1 p-6'>
      <Tabs defaultValue='account' className='flex flex-col gap-4'>
        {/* Табы для категорий */}
        <MoviesCategoryTabs />

        {/* Карусель самых актуальных аниме категории */}
        <MoviesCarousel />

        {/* Остальные аниме категории с пагинацией (с кнопкой see all,
      что редиректит в другой раздел с заранее установленнными фильтрами) */}
        <MoviePanel />
      </Tabs>
    </div>
  );
};
