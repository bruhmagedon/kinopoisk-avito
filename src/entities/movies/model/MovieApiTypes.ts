import { SelectedFilters } from "@/entities/filters/model/FiltersSlice";
import { MovieIdApiResponse } from "./MovieTypes";
import { FILTER_TYPES } from "@/features/filters";
export interface MoviesApiResponse {
  docs: MovieIdApiResponse[];
}

interface IQueryParams extends SelectedFilters {
  limit?: number;
  page?: number;
  // pages: number;
  // total: number;
}

export type MovieParamsType = Partial<IQueryParams>;
