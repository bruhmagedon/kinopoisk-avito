import { Select } from "@/shared";
import { useFilters } from "../hooks/useFilters";
import withSkelton from "@/shared/hooks/withSkeleton";
import { Filter } from "@/entities/filters";

interface FiltersPanelProps {
  data: {
    genres: Filter[];
    countries: Filter[];
    status: Filter[];
    type: Filter[];
  };
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
      <Select filterData={data.genres} />
      <Select filterData={data.countries} />
      <Select filterData={data.status} />
      <Select filterData={data.type} />
    </>
  );
};

const FiltersPanelWithSekeleton = withSkelton<FiltersPanelProps>(
  View,
  "list",
  4
);
