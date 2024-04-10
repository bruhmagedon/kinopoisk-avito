import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FilterParams, Filter } from "../model/types";

const X_API_KEY = "WF76VQQ-HQB4P5G-JFJH8DF-CRKDP1M";

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
