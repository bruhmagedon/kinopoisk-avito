import { Select } from "@/shared";
import { useFilters } from "../hooks/useFilters";

export const FiltersPanel = () => {
  const { isLoading, genres, countries, status, type } = useFilters();

  if (isLoading) {
    return <div>Загрузка</div>;
  }

  return (
    <>
      {/* Обернуть в скелетон содержимое */}
      <div className="bg-primary-bg w-full py-6 px-3 flex flex-col gap-3 rounded-2xl">
        <Select />
      </div>
    </>
  );
};
