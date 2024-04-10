import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MoviesApiResponse, ParamsType } from "../model/MovieApiTypes";
import { MovieIdApiResponse } from "../model/MovieTypes";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("X-API-KEY", process.env.API_TOKEN);
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
