import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MovieApiResponse } from "../model/types";

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
    // null меняется на параметры
    fetchAllMovies: builder.query<MovieApiResponse, null>({
      query: (params) => {
        // const { id } = params;
        return {
          url: `movie/300`,
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
