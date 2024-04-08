import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MoviesApiResponse, ParamsType } from "../model/MovieApiTypes";
import { MovieIdApiResponse } from "../model/MovieTypes";

// const BASE_URL = process.env.MOVIES_BASE_API_URL;
// const API_KEY = process.env.MOVIES_API_KEY;
// №Ключ и ссылка пока захардкожены - позже надо это исправить

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.kinopoisk.dev/v1.4/",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("X-API-KEY", "WF76VQQ-HQB4P5G-JFJH8DF-CRKDP1M");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchAllMovies: builder.query<MoviesApiResponse, ParamsType>({
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
    fetchMoviesById: builder.query<MovieIdApiResponse, null>({
      query: (params) => {
        // const { id } = params;
        return {
          url: `movie/300`,
        };
      },
    }),
  }),
});

export const { useFetchAllMoviesQuery } = movieApi;
