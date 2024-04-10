import { FiltersPanel } from "@/features/filters";
import { SortPanel } from "@/features/filters/ui/SortPanel";

export const Filters = () => {
  //№ Скорее всего, будем парсить из апи сюда данные (категории, страны и тд)
  // выбранный селект будет записывать в стор, из стора будет происходить запрос к апи через ртк. ответ записывается в стор
  // из стора достаем нужную инфу в MovieList

  return (
    <div className="flex flex-col gap-3">
      <SortPanel />
      <FiltersPanel />
    </div>
  );
};
