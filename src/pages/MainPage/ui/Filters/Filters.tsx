import { Select } from "@/shared/ui/Listbox";

export const Filters = () => {
  //№ Скорее всего, будем парсить из апи сюда данные (категории, страны и тд)
  // выбранный селект будет записывать в стор, из стора будет происходить запрос к апи через ртк. ответ записывается в стор
  // из стора достаем нужную инфу в MovieList

  return (
    <div className="flex flex-col gap-3">
      <div className="bg-primary-bg w-full py-6 px-3 flex flex-col gap-3 rounded-2xl">
        <Select />
        <Select />
        <Select />
      </div>
      <div className="bg-primary-bg w-full py-6 px-3 flex flex-col gap-3 rounded-2xl">
        <Select />
        <Select />
        <Select />
        <Select />
        <Select />
        <Select />
      </div>
    </div>
  );
};
