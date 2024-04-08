import { MovieIdApiResponse } from "./MovieTypes";

export interface MoviesApiResponse {
  docs: MovieIdApiResponse[];
}

interface IQueryParams {
  limit: number;
  page: number;
  pages: number;
  total: number;
}

export type ParamsType = Partial<IQueryParams>;
