import { useFetchFiltersQuery, filterApi } from "./api/filtersApi";
import { Filter, FilterTypes } from "./model/types";
import FiltersSlice, { setFilter } from "./model/FiltersSlice";

export {
  useFetchFiltersQuery,
  Filter,
  FilterTypes,
  filterApi,
  FiltersSlice,
  setFilter,
};
