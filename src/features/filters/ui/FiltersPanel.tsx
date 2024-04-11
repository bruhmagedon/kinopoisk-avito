import { Button, Select } from "@/shared";
import { useFilters } from "../hooks/useFilters";
import withSkelton from "@/shared/hooks/withSkeleton";
import { Filter, FilterTypes } from "@/entities/filters";
import { useAppDispatch, useAppSelector } from "@/app/store/store";
import { setFilterQuery } from "@/entities/filters/model/FiltersSlice";

interface FiltersPanelProps {
  data?: FilterTypes;
  filterQuery: () => void;
  resetFilterQuery: () => void;
}

export const FiltersPanel = () => {
  const { isLoading, data } = useFilters();
  const dispatch = useAppDispatch();

  const filterQuery = () => {
    dispatch(setFilterQuery(true));
  };
  const resetFilterQuery = () => {
    dispatch(setFilterQuery(false));
  };

  return (
    <>
      <div className="bg-primary-bg w-full py-6 px-3 flex flex-col gap-3 rounded-2xl">
        <FiltersPanelWithSekeleton
          isLoading={isLoading}
          data={data}
          filterQuery={() => filterQuery()}
          resetFilterQuery={() => resetFilterQuery()}
        />
      </div>
    </>
  );
};

const View = ({ data, filterQuery, resetFilterQuery }: FiltersPanelProps) => {
  return (
    <>
      <Select filterData={data.genres} type="genres.name" />
      <Select filterData={data.countries} type="countries.name" />
      <Select filterData={data.type} type="type" />
      <Select filterData={data.status} type="status" />
      <Button onClick={filterQuery}>{"Принять"}</Button>
      <Button onClick={resetFilterQuery}>{"Сбросить"}</Button>
    </>
  );
};

const FiltersPanelWithSekeleton = withSkelton<FiltersPanelProps>(
  View,
  "list",
  4
);

// isLoading: boolean;
// data: {
//     genres: Filter[];
//     countries: Filter[];
//     status: Filter[];
//     type: Filter[];
// };

// Filter {
//   name: string | number;
//   slug?: string;
// }
