export { filterApi, useFetchFiltersQuery } from './api/filtersApi';
export type { SelectedFilters } from './model/FiltersSlice';
export { FiltersSlice } from './model/FiltersSlice';
export { resetFilters, setFilter } from './model/FiltersSlice';
export { resetSort, setSort } from './model/SortSlice';
export type {
  FILTER_TYPES,
  FilterApiParams,
  FilterApiResponse
} from './model/types';
