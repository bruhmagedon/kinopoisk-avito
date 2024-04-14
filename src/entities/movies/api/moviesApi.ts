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
import { useAppSelector } from "@/app/store/store";

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
    fetchMovies: builder.query<MoviesApiResponse, MovieParamsType>({
      query: (params) => {
        const { query, ...otherParams } = params;
        const filteredOtherParams = Object.entries(otherParams)
          .filter(([_, value]) => value !== "")
          .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

        if (query != "") {
          return {
            url: `movie/search`,
            params: {
              query,
              ...filteredOtherParams,
            },
          };
        } else {
          return {
            url: `movie`,
            params: {
              ...filteredOtherParams,
            },
          };
        }
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
    fetchSearch: builder.query<any, any>({
      query: (params) => {
        return {
          url: `movie/search`,
          params: {
            ...params,
          },
        };
      },
    }),
  }),
});

export const {
  useFetchMoviesQuery,
  useFetchMovieByIdQuery,
  useFetchPostersQuery,
  useFetchSeasonsAndSeriesQuery,
  useFetchReviewQuery,
  useFetchSearchQuery,
} = movieApi;

// https://api.kinopoisk.dev/v1.4/review
// https://api.kinopoisk.dev/v1.4/
