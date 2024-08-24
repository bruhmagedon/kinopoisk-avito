import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FilterApiParams, FilterType } from "../model/types";

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
    fetchFilters: builder.query<FilterType[], FilterApiParams>({
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
