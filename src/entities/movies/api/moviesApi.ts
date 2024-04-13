import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  MoviesApiResponse,
  MovieParamsType,
  PostersApiResponse,
  SeriesApiResponse,
  MovieId,
  ReviewParamsType,
  ReviewApiResponse,
} from "../model/MovieApiTypes";
import { MovieIdApiResponse } from "../model/MovieTypes";

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
    fetchMovieById: builder.query<MovieIdApiResponse, MovieId>({
      query: (params) => {
        const { id } = params;
        return {
          url: `movie/${id}`,
        };
      },
    }),
    fetchPosters: builder.query<PostersApiResponse, MovieId>({
      query: (params) => {
        return {
          url: `image`,
          params: {
            ...params,
          },
        };
      },
    }),
    fetchSeasonsAndSeries: builder.query<SeriesApiResponse, MovieId>({
      query: (params) => {
        const { movieId } = params;
        return {
          url: `season`,
          params: {
            movieId,
          },
        };
      },
    }),
    fetchReview: builder.query<ReviewApiResponse, ReviewParamsType>({
      query: (params) => {
        return {
          url: `review`,
          params: {
            ...params,
          },
        };
      },
    }),
  }),
});

export const {
  useFetchAllMoviesQuery,
  useFetchMovieByIdQuery,
  useFetchPostersQuery,
  useFetchSeasonsAndSeriesQuery,
  useFetchReviewQuery,
} = movieApi;

// https://api.kinopoisk.dev/v1.4/review
