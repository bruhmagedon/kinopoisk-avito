import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  MoviesApiResponse,
  MovieParamsType,
  FiltersApiResponse,
  FilterParams,
  Filter,
} from "../model/MovieApiTypes";

const X_API_KEY = "WF76VQQ-HQB4P5G-JFJH8DF-CRKDP1M";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    // №Env работает как то неправильно!, потом пофиксить
    baseUrl: "https://api.kinopoisk.dev/v1.4/",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("X-API-KEY", X_API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchAllMovies: builder.query<MoviesApiResponse, MovieParamsType>({
      query: (params) => {
        const { page = 1, limit = 10 } = params;

        return {
          url: `movie`,
          params: {
            page,
            limit,
          },
        };
      },
      // Сохранение результатов в стор (досмотреть видос)
      //   async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
      //     const result = await queryFulfilled;
      //     const data = result.data;

      //     dispatch(setNews(data.news));
      //   },
    }),
  }),
});

export const { useFetchAllMoviesQuery } = movieApi;

export const filterApi = createApi({
  reducerPath: "filterApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.kinopoisk.dev/v1/",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("X-API-KEY", X_API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchFilters: builder.query<Filter[], FilterParams>({
      query: (params) => {
        const { field } = params;
        return {
          url: `movie/possible-values-by-field`,
          params: {
            field,
          },
        };
      },
    }),
  }),
});

export const { useFetchFiltersQuery } = filterApi;
