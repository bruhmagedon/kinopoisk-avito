import { MovieIdApiResponse } from "./MovieTypes";

export interface MoviesApiResponse {
  docs: MovieIdApiResponse[];
}

export interface FiltersApiResponse {
  response: Filter[];
}

interface IQueryParams {
  limit: number;
  page: number;
  pages: number;
  total: number;
}

export type MovieParamsType = Partial<IQueryParams>;

export interface Filter {
  name: string | number;
  slug: string;
}

export interface FilterParams {
  field: string;
}
