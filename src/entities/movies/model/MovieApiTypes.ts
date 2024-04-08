import { MovieIdApiResponse } from "./MovieTypes";

export interface MoviesApiResponse {
  docs: MovieIdApiResponse[];
}

// MovieIdApiResponse[]
// Property 'docs' is missing in type 'MovieIdApiResponse[]' but required in type 'MoviesApiResponse'.

interface IQueryParams {
  limit: number;
  page: number;
  pages: number;
  total: number;
}

export type ParamsType = Partial<IQueryParams>;
