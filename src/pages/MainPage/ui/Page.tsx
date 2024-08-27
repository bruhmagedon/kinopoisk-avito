import { MoviesCategoryTabs } from "@/components/MoviesCategoryTabs/MoviesCategoryTabs";
import { Tabs } from "@/components/ui/tabs";

export const MainPage = () => {
  return (
    <div className='flex-1 p-6'>
      <Tabs defaultValue='account' className='w-[400px]'>
        {/* Табы для категорий */}
        <MoviesCategoryTabs />

        {/* Карусель самых актуальных аниме категории */}
        {/* <MoviesCarousel /> */}

        {/* Остальные аниме категории с пагинацией (с кнопкой see all,
      что редиректит в другой раздел с заранее установленнными фильтрами) */}
        {/* <MoviePanel /> */}
      </Tabs>
    </div>
  );
};
