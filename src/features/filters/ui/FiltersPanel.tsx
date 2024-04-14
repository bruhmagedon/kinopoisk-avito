import { withSkelton } from "@/shared";
import { useAppDispatch } from "@/app/store/store";
import { useFilters, useFiltersReturnType } from "../hooks/useFilters";
import { Button } from "@/shared";
import { FiltersVariant } from "./FiltersVariat";

interface FiltersPanelProps {
  data?: useFiltersReturnType["data"];
  isLoading?: boolean;
}

export const FiltersPanel = () => {
  const { isLoading, data } = useFilters();
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="bg-panel-darker-bg text-white w-full py-6 px-3 flex flex-col gap-3 rounded-2xl">
        <FiltersPanelWithSekeleton isLoading={isLoading} data={data} />
      </div>
    </>
  );
};

const View = ({ data }: FiltersPanelProps) => {
  return (
    <>
      <h2 className="text-xl">Фильтры</h2>
      <FiltersVariant data={data.genres} text="По жанрам" type="genres.name" />
      <FiltersVariant
        data={data.countries}
        text="По странам"
        type="countries.name"
      />
      <FiltersVariant data={data.type} text="По типам" type="type" />
      <FiltersVariant data={data.status} text="По статусу" type="status" />
      <FiltersVariant data={data.year} text="По году" type="year" />
      <Button className="bg-green-400 text-black rounded-lg h-[36px] hover:bg-green-500 mt-3">
        {"Принять"}
      </Button>
      <Button className="bg-red-400 text-black rounded-lg h-[36px] hover:bg-red-500">
        {"Сбросить"}
      </Button>
    </>
  );
};

const FiltersPanelWithSekeleton = withSkelton<FiltersPanelProps>(
  View,
  "column",
  "list",
  5
);
