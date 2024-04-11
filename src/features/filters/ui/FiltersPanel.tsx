import { Button, Select } from "@/shared";
import { useFilters } from "../hooks/useFilters";
import withSkelton from "@/shared/hooks/withSkeleton";
import { Filter, FilterTypes } from "@/entities/filters";

interface FiltersPanelProps {
  data?: FilterTypes;
}

export const FiltersPanel = () => {
  const { isLoading, data } = useFilters();

  return (
    <>
      <div className="bg-primary-bg w-full py-6 px-3 flex flex-col gap-3 rounded-2xl">
        <FiltersPanelWithSekeleton isLoading={isLoading} data={data} />
      </div>
    </>
  );
};

const View = ({ data }: FiltersPanelProps) => {
  return (
    <>
      <Select filterData={data.genres} type="genres.name" />
      <Select filterData={data.countries} type="countries.name" />
      <Select filterData={data.status} type="status" />
      <Select filterData={data.type} type="type" />
      <Button>{"Принять"}</Button>
      <Button>{"Сбросить"}</Button>
    </>
  );
};

const FiltersPanelWithSekeleton = withSkelton<FiltersPanelProps>(
  View,
  "list",
  4
);
