import { useFetchFiltersQuery, filterApi } from "./api/filtersApi";
import {
  FilterApiResponse,
  FilterApiParams,
  FILTER_TYPES,
} from "./model/types";
import FiltersSlice, { setFilter, SelectedFilters } from "./model/FiltersSlice";

export {
  SelectedFilters,
  filterApi,
  useFetchFiltersQuery,
  FiltersSlice,
  setFilter,
  FilterApiResponse,
  FilterApiParams,
  FILTER_TYPES,
};
