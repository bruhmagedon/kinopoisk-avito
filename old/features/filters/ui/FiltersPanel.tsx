import { resetFilters } from "old/entities/filters";
import { Button, withSkelton } from "old/shared";

import { useAppDispatch } from "@/app/providers/store/store";

import type { useFiltersReturnType } from "../hooks/useFilters";
import { useFilters } from "../hooks/useFilters";

import { FiltersVariant } from "./FiltersVariat";

interface FiltersPanelProps {
  data?: useFiltersReturnType["data"];
  isLoading?: boolean;
}

export const FiltersPanel = () => {
  const { isLoading, data } = useFilters();

  return (
    <>
      <div className='flex w-full flex-col gap-3 rounded-2xl bg-panel-darker-bg px-3 py-6 text-white'>
        <FiltersPanelWithSekeleton isLoading={isLoading} data={data} />
      </div>
    </>
  );
};

const View = ({ data }: FiltersPanelProps) => {
  const dispatch = useAppDispatch();

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <>
      <h2 className='text-xl font-medium'>Фильтры</h2>
      <FiltersVariant data={data.genres} text='По жанрам' type='genres.name' />
      <FiltersVariant data={data.countries} text='По странам' type='countries.name' />
      <FiltersVariant data={data.type} text='По типам' type='type' />
      <FiltersVariant data={data.status} text='По статусу' type='status' />
      <FiltersVariant data={data.year} text='По году' type='year' />
      <Button
        onClick={handleResetFilters}
        className='mt-3 h-[36px] rounded-lg bg-input-bg font-medium text-white hover:bg-[#353535]'
      >
        Сбросить
      </Button>
    </>
  );
};

const FiltersPanelWithSekeleton = withSkelton<FiltersPanelProps>(View, "column", "list", 5);
