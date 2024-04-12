import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MoviesApiResponse, MovieParamsType } from "../model/MovieApiTypes";

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
        return {
          url: `movie`,
          params: {
            ...params,
          },
        };
      },
    }),
    fetchMovieById: builder.query<MoviesApiResponse, { id: string }>({
      query: (params) => {
        const { id } = params;
        return {
          url: `movie`,
          params: {
            id,
          },
        };
      },
    }),
  }),
});

export const { useFetchAllMoviesQuery, useFetchMovieByIdQuery } = movieApi;
